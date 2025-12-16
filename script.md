SCRIPT: "¿Por qué tu gasto cloud no para de subir?"
Lightning Talk - 20 minutos

Soy Cristina, SRE en Ozona Tech donde mi foco es la observabilidad y Cloud FinOps, también soy Contributor en Resizes donde hacemos la plataforma agnóstica para desarrolladores, también soy una Dash believer, que es el producto de Resizes para que los desarrolladores no se preocupen por la infra y por último, soy mentora en Step4ward, una comunidad para acompañar a  mujeres en el mundo tecnológico, tanto si están empezando como si buscan un cambio. 

Qué vamos a ver hoy? Pues hoy veremos esos gastos silenciosos. Cuántos de vosotros habéis visto que la factura cloud ha subido un 30% este mes? Levantar la mano 
(pausa para manos levantadas)
Muy bien, todos hemos estado ahí, y lo primero que hacemos es buscar instancias, bases de datos... pero no solo es eso sino los gastos silenciosos los que lentamente van incrementando nuestra factura cloud. Hoy, nos centraremos en estos 4 puntos con ejemplos reales y acciones que espero que os ayuden en vuestro día a día. 

PARTES:
No dar teoría - Conceptos 
1. Rightsizing, (el recurso en el que todos hemos caído, más madera, que empezamos un nuevo proyecto? Ponle capacidad de sobra y ya luego vemos cómo va)
2. RECURSOS HUÉRFANOS (esas db que usamos un día y no nos acordamos más de ellas)
3. LIFECYCLE POLICIES (sí, )
4. NETWORKING



2A. RIGHTSIZING: "Más madera" (3.5 min)
[SLIDE: Imagen de Ferrari en parking de supermercado]
Primer jinete: Rightsizing. O mejor dicho, la falta de él.
¿Cuántos de ustedes han pedido una instancia "por si acaso"? Una m5.2xlarge porque "mejor que sobre a que falte". Y esa instancia sigue corriendo seis meses después, con un 8% de CPU y 25% de memoria.
[SLIDE: Dashboard mostrando recursos con métricas bajas]
El problema no es solo que pagamos de más. Es que nunca volvemos a revisar. Lanzamos, funciona, y nos olvidamos.
[SLIDE: GPU instances con precios - p3, p4, g5: €3-30/hora]
Pero el caso extremo son las GPUs. Un desarrollador necesita entrenar un modelo. Levanta una instancia p3.8xlarge a 12 euros la hora. Entrena durante 2 horas un viernes por la tarde... y se olvida de apagarla.
El lunes por la mañana, ese olvido ha costado 720 euros. Y lo peor: la GPU ha estado idle el 98% del tiempo.
[SLIDE: "CPU <10%, memoria <30%, GPU <5%... pagando 100%"]
Este es el patrón: utilizamos el 10%, pagamos el 100%.
[SLIDE: "La solución"]
¿La solución? Monitoring primero, acción después. No se puede optimizar lo que no se mide. Implementar alertas cuando recursos llevan más de X días con utilización baja. Usar spot instances para workloads interrumpibles – ahorro del 70%. Y lo más importante: políticas de auto-shutdown. Si esa GPU no ha tenido actividad en 2 horas, que se apague sola.
No se trata de ser tacaño. Se trata de ser inteligente.

2B. RECURSOS HUÉRFANOS: "Los zombies que siguen cobrando" (3.5 min)
[SLIDE: Imagen estilo zombies caminando]
Segundo jinete: Los recursos huérfanos. Los zombies.
[SLIDE: Lista de recursos huérfanos comunes]
Discos EBS sin instancia asociada. IPs elásticas que no apuntan a nada. Load balancers configurados pero sin targets. Volúmenes de snapshots de instancias que se eliminaron hace meses.
¿Por qué pasa esto?
[SLIDE: "Terraform destroy a medias, depuración manual, 'ahora lo borro'"]
Porque hacemos un terraform destroy pero algo falla y no limpia todo. Porque creamos algo manual "rapidito para probar" y nos olvidamos. Porque pensamos "esto lo borro luego" y luego nunca llega.
[SLIDE: Volumen EBS de 2TB: €200/mes]
Y así es como acabamos con un volumen EBS de 2 terabytes con datasets de experimentación de hace seis meses. "Por si acaso necesitamos reproducir esos resultados", dijimos. Nadie lo ha tocado desde entonces. 200 euros al mes. Multipliquen eso por cada experimento que hicieron el año pasado.
[SLIDE: Múltiples volúmenes sin uso acumulándose]
El problema de los zombies es que son silenciosos. No dan errores. No generan alertas. Simplemente... cobran.
[SLIDE: "La solución: Tagging obligatorio"]
La solución empieza con tagging obligatorio. Cada recurso debe tener:
project: a qué proyecto pertenece
owner: quién es responsable
ttl: cuándo expira o puede revisarse
Y luego, auditorías automatizadas. Un script semanal que busque recursos sin tags, recursos sin actividad, discos sin attach. Y que envíe un email al owner diciendo: "Oye, esto lleva 30 días sin usarse, ¿lo borramos?"
No esperen a la factura de fin de mes para descubrir a los zombies.

2C. LIFECYCLE POLICIES: "Tu museo del código (muy caro)" (3.5 min)
[SLIDE: Museo polvoriento con carteles de "Legacy"]
Tercer jinete: La falta de lifecycle policies. O como me gusta llamarlo, tu museo del código.
Todos tenemos ese amigo acumulador que no tira nada "por si acaso". En cloud, todos somos ese amigo.
[SLIDE: Gráfica: 25TB → 5TB en ECR]
Vuelvo al ejemplo del principio. 25 terabytes en ECR. ¿Cómo llegaron ahí? Fácil: cada push a main genera una nueva imagen. Nunca borramos ninguna. "Por si necesitamos hacer rollback", decimos. Rollback a una versión de hace 18 meses. Claro.
[SLIDE: Desglose de qué ocupaba espacio]
Implementaron lifecycle policies simples:
Mantener últimas 10 imágenes por repositorio
Mantener imágenes taggeadas como production indefinidamente
Borrar todo lo demás después de 30 días
Resultado: de 25TB a 5TB. 30 euros al día ahorrados.
[SLIDE: Otros acumuladores comunes]
Pero ECR no es el único museo. Snapshots de hace dos años "por si necesitamos restaurar algo antiguo". Logs sin rotación ocupando terabytes en S3. Backups de bases de datos que ya no existen.
[SLIDE: Modelos y embeddings sin control]
Y ahora, el museo moderno: modelos de ML. Cada fine-tuning genera una nueva versión del modelo. 5GB por versión. Nadie configura retención. Nadie borra versiones antiguas. 50 versiones de un modelo que solo usa la última en producción: 250GB que nadie necesita.
Embeddings y vectores almacenados "por si cambiamos de estrategia". Datasets de entrenamiento duplicados entre proyectos porque "no sabíamos que ya existía".
[SLIDE: "Por qué pasa: 'Nunca se sabe si lo necesitaremos'"]
¿Por qué pasa? Por el miedo. El miedo a borrar algo que alguien, algún día, quizás, podría necesitar.
[SLIDE: "La solución"]
La solución es cambiar la pregunta. No es "¿lo necesitaremos algún día?" Es "¿cuándo fue la última vez que lo necesitamos?"
Lifecycle policies desde día uno:
Imágenes de containers: últimas N versiones + tags específicos
Logs: retención basada en compliance real, no en "por si acaso"
Modelos: mantener versiones con mejor accuracy + última versión productiva
Snapshots: retención incremental, no todo para siempre
Y si realmente necesitan algo antiguo algún día, existe el concepto de Glacier. 1/5 del coste de S3 estándar para cosas que casi nunca se acceden.
No todo merece vivir en hot storage para siempre.

2D. NETWORKING: "Pagar por hablar con tu vecino" (3.5 min)
[SLIDE: Peaje de autopista con precios exagerados]
Cuarto jinete, y este es mi favorito porque sorprende a todo el mundo: el coste oculto del networking.
La mayoría piensa: "Estoy en la misma región, el tráfico es gratis, ¿no?"
No.
[SLIDE: "Inter-AZ traffic: €0.01/GB"]
Tráfico entre zonas de disponibilidad dentro de la misma región: 1 céntimo por GB. Suena a poco, ¿verdad? Hasta que mueves terabytes cada día.
[SLIDE: Arquitectura multi-AZ con flechas de tráfico]
Diseñamos bien: alta disponibilidad, multi-AZ, load balancers distribuyendo tráfico entre zonas. Microservicios comunicándose entre sí constantemente. Health checks cada 30 segundos. Logs fluyendo a sistemas centralizados. Cada request, cada check, cada log... cruza zonas.
Y cada cruce cuesta.
[SLIDE: Cálculo de coste con volumen real]
Con 1TB al día de tráfico inter-AZ, son 10 euros diarios. 300 euros al mes. Solo por hablar con tu vecino de al lado.
[SLIDE: NAT Gateway pricing]
Pero esperen, que mejora. NAT Gateway: 4.5 céntimos por GB procesado, más 4.8 céntimos por hora de existir. Con ese mismo TB diario: 1,400 euros al mes solo en procesamiento de NAT.
[SLIDE: "La trampa del 'todo multi-AZ por defecto'"]
Y aquí viene la trampa: nos han enseñado que multi-AZ es la mejor práctica. Y lo es... para producción. Pero ¿de verdad necesitas alta disponibilidad en desarrollo? ¿En staging? ¿En QA?
[SLIDE: Ejemplos de workloads single-AZ válidos]
Entornos efímeros que viven 3 horas. Jobs de procesamiento batch que pueden reintentar. Ambientes de testing donde caerse no es crítico. ¿Por qué pagar el premium de multi-AZ ahí?
[SLIDE: Tabla comparativa AWS vs Azure vs Scaleway]
Y aquí viene el plot twist: no todos los providers cobran igual.
Azure: tráfico inter-zone dentro de la misma región está incluido. Scaleway y otros sovereign clouds europeos: modelos más predecibles en egress. AWS: paga por casi todo lo que se mueve.
No digo que AWS sea malo. Digo que hay que saber cuándo pagar ese premium y cuándo no.
[SLIDE: "Casos especiales: LLMs y model serving"]
Y si hablamos de costes de networking, tenemos que hablar de inference endpoints. Model serving multi-AZ moviendo gigabytes de requests. Descargar modelos de 5GB desde S3 cada vez que deployamos. Eso también cuenta.
[SLIDE: "La solución"]
¿Soluciones?
VPC endpoints para servicios AWS. S3, DynamoDB, otros servicios de AWS tienen endpoints privados que evitan NAT Gateway.
Segmentar por criticidad: single-AZ para non-prod, multi-AZ solo donde importa.
Arquitectura consciente del coste. Locality matters. Si dos servicios hablan mucho, ponlos en la misma AZ.
Caching local de modelos en vez de descargarlos cada vez.
Y para ciertos workloads, considerar providers alternativos con mejor pricing en networking.
Porque el mejor ahorro es el gasto que no haces.

3. TU CHECKLIST DEL LUNES (3 min)
[SLIDE: "¿Y ahora qué hago?"]
Vale, les he dado cuatro problemas. Pero ustedes llegaron aquí por soluciones. Así que aquí tienen su checklist para empezar el lunes por la mañana.
[SLIDE: Checklist visual con íconos]
Prioridad 1 - Visibilidad (Semana 1):
Implementar tagging obligatorio. Sin tags, sin deploy. Automatícenlo en CI/CD.
Activar Cost Explorer y configurar alertas de anomalías. AWS, Azure, GCP, todos lo tienen.
Script semanal buscando recursos huérfanos. Pueden usar Cloud Custodian o escribir uno custom.
Prioridad 2 - Quick Wins (Semana 2-3):
Lifecycle policies en todo lo que almacena: ECR, S3, snapshots, modelos. Empiecen conservador, ajusten después.
Auto-shutdown en notebooks y GPUs. Si no hay actividad en 2 horas, apagado automático.
Auditar recursos con utilización <20% durante 7+ días. Rightsizing candidates.
Prioridad 3 - Arquitectura (Mes 1-2):
VPC endpoints para servicios AWS de alto tráfico.
Revisar qué está desplegado multi-AZ. ¿Realmente necesita HA?
Política de retención de modelos ML basada en uso real, no en "por si acaso".
[SLIDE: ROI esperado]
¿ROI esperado?
Lifecycle policies: 40-60% reducción en storage (vimos 80% en el ejemplo real)
Auto-shutdown GPUs: 60-80% ahorro en compute
Rightsizing: 20-40% en instancias específicas
VPC endpoints: hasta 90% reducción en costes de NAT para ciertos patrones
[SLIDE: Herramientas que ayudan]
Herramientas que les harán la vida más fácil:
Nativas: AWS Cost Explorer, Azure Cost Management, CloudWatch/Azure Monitor
Open Source: Cloud Custodian para políticas, Infracost para Terraform, Kubecost para Kubernetes
SaaS: Hay mil opciones, pero empiecen con las nativas primero
[SLIDE: "La regla de oro"]
Y la regla de oro: visibilidad primero, optimización después.
No pueden optimizar lo que no pueden medir. No intenten arreglar todo a la vez. Empiecen con visibilidad, identifiquen el dolor más grande, arréglalo, midan el impacto, repitan.
FinOps es un proceso iterativo, no un evento puntual.

4. CIERRE (1 min)
[SLIDE: Gráfica antes/después del ejemplo ECR]
Vuelvo al ejemplo del principio. 25 terabytes a 5 terabytes. €30 diarios a casi nada. ¿Qué hicieron? Miraron. Simplemente miraron qué estaban guardando y por qué.
[SLIDE: "FinOps no es decir NO"]
FinOps no es decir NO. No es ser el malo que bloquea proyectos. FinOps es decir SÍ... pero con datos. Es poder lanzar ese nuevo feature sabiendo cuánto costará. Es poder escalar sin sorpresas en la factura.
[SLIDE: "Empiecen por lo invisible"]
Los grandes gastos son fáciles de ver. Son los invisibles los que se comen el presupuesto sin que nadie se dé cuenta.
Empiecen por lo invisible. Los huérfanos, las policies que nunca configuraron, el tráfico que no sabían que pagaban, las GPUs que olvidaron apagar.
[SLIDE: Título de la charla + contacto]
Grano a grano hace granero. Y céntimo a céntimo hace una factura de cloud sostenible.
Gracias. Si tienen preguntas, estaré por aquí. Y por favor, el lunes, vayan a mirar sus ECR.
[FIN]

Para realizar las diapositivas, https://revealjs.com/ seguramente con ese script y Antigravity/Cursor saque las diapositivas solo 
- Dark mode
- Color rojo para gasto, color verde para ahorro 
- Letra Fira Code


Cambios:
- Sobre mi: izq - medio - derecha
- pedir logo resizes
- añadir summary
- 
