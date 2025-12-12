---
theme: default
title: ¿Por qué tu gasto cloud no para de subir?
info: |
  ## Lightning Talk - 20 minutos
  
  Presentación sobre los gastos invisibles en cloud computing
class: text-center
highlighter: shiki
lineNumbers: false
drawings:
  persist: false
transition: slide-left
mdc: true
colorSchema: light
fonts:
  sans: 'Fira Code'
  serif: 'Fira Code'
  mono: 'Fira Code'
css: styles.css
---

# ¿Por qué tu gasto cloud<br>no para de subir?

Lightning Talk - 20 minutos

---

# Sobre mí

## Cristina — SRE en Ozona <span class="text-sm align-middle">[logo Ozona]</span>

Ozona

### Colaboraciones (más destacado)

- <span class="text-2xl font-semibold">Resizes/Dash</span> <span class="text-sm align-middle">[logo Resizes/Dash]</span>  
  <span class="text-lg">Colaboradora</span>

- <span class="text-2xl font-semibold">Step4ward</span> <span class="text-sm align-middle">[logo Step4ward]</span>  
  <span class="text-lg">Mentora</span>

---

# Los gastos invisibles

<div class="text-center mt-8">
  <div class="text-sm opacity-70">📈 Gráfica dramática de gasto subiendo exponencialmente</div>
  <div class="text-6xl font-bold text-red-500 mt-4">+40%</div>
  <p class="mt-4">Este mes</p>
</div>

---

# <span class="text-red-500">No son los EC2</span>

Son los <span class="text-red-500">1000 pequeños gastos</span><br>que nadie mira

---

# Grano a grano hace granero...

<div class="flex items-center justify-center gap-4 mt-8">
  <span class="text-5xl font-bold text-red-500">€30/día</span>
  <span class="text-4xl">→</span>
  <span class="text-5xl font-bold text-red-500">€10,950/año</span>
</div>

<div class="mt-8 p-4 bg-green-50 border-l-4 border-green-500 rounded">
  <p><strong>Historia real:</strong> 25TB en ECR → 5TB</p>
  <p class="text-green-600 font-semibold">Ahorro: €30/día = €10,950/año</p>
</div>

---

# Los cuatro jinetes<br>del gasto silencioso

<ul class="text-2xl mt-8 list-none">
  <li>1. Rightsizing</li>
  <li>2. Recursos huérfanos</li>
  <li>3. Lifecycle policies</li>
  <li>4. Networking</li>
</ul>

---

# 2A. RIGHTSIZING

## "Compraste un Ferrari para ir al súper"

<div class="mt-8 opacity-70">🚗 Ferrari en parking de supermercado</div>

---

# Primer jinete: Rightsizing

O mejor dicho, <span class="text-red-500">la falta de él</span>

<div class="mt-8 p-4 bg-red-50 border-l-4 border-red-500 rounded">
  <p><strong>El patrón:</strong></p>
  <p>"Mejor que sobre a que falte"</p>
  <p>m5.2xlarge corriendo 6 meses...</p>
  <p>CPU: <span class="text-red-500">8%</span> | Memoria: <span class="text-red-500">25%</span></p>
</div>

---

# Dashboard: Recursos con métricas bajas

<div class="mt-4 p-4 bg-gray-100 rounded">
  <p>📊 CPU <span class="text-red-500">&lt;10%</span></p>
  <p>📊 Memoria <span class="text-red-500">&lt;30%</span></p>
  <p>📊 GPU <span class="text-red-500">&lt;5%</span></p>
  <p class="mt-4 text-xl">Pagando <span class="text-red-500">100%</span></p>
</div>

---

# GPU Instances

| Instancia | Precio/hora |
|-----------|-------------|
| p3.8xlarge | <span class="text-red-500">€12/hora</span> |
| p4 | <span class="text-red-500">€15-20/hora</span> |
| g5 | <span class="text-red-500">€3-30/hora</span> |

<div class="mt-4 p-4 bg-red-50 border-l-4 border-red-500 rounded">
  <p><strong>El olvido:</strong> Entrenar 2h viernes tarde</p>
  <p><strong>El coste:</strong> <span class="text-red-500 text-2xl">€720</span> el lunes por la mañana</p>
  <p>GPU idle <span class="text-red-500">98%</span> del tiempo</p>
</div>

---

# <span class="text-red-500">CPU &lt;10%, memoria &lt;30%, GPU &lt;5%...</span>

# <span class="text-red-500 text-4xl">Pagando 100%</span>

<div class="mt-8 text-xl">
  Este es el patrón:
</div>

<div class="mt-4 text-3xl">
  Utilizamos <span class="text-red-500">10%</span><br>
  Pagamos <span class="text-red-500">100%</span>
</div>

---

# La solución

<ul class="text-lg mt-6 space-y-3">
  <li>✅ <strong>Monitoring primero:</strong> No se puede optimizar lo que no se mide</li>
  <li>✅ <strong>Alertas:</strong> Recursos con utilización baja &gt;X días</li>
  <li>✅ <strong>Spot instances:</strong> <span class="text-green-500">70% ahorro</span> para workloads interrumpibles</li>
  <li>✅ <strong>Auto-shutdown:</strong> Si no hay actividad en 2h, apagado automático</li>
</ul>

<div class="mt-8 p-4 bg-green-50 border-l-4 border-green-500 rounded">
  <p>No se trata de ser tacaño.</p>
  <p>Se trata de ser <strong>inteligente</strong>.</p>
</div>

---

# 2B. RECURSOS HUÉRFANOS

## "Los zombies que siguen cobrando"

<div class="mt-8 text-6xl">🧟</div>

---

# Segundo jinete: Los zombies

## Recursos huérfanos comunes:

<ul class="text-lg mt-6 space-y-2">
  <li>💾 Discos EBS sin instancia asociada</li>
  <li>🌐 IPs elásticas que no apuntan a nada</li>
  <li>⚖️ Load balancers sin targets</li>
  <li>📸 Snapshots de instancias eliminadas hace meses</li>
</ul>

---

# <span class="text-red-500">¿Por qué pasa esto?</span>

<ul class="text-lg mt-6 space-y-2">
  <li>❌ <code>terraform destroy</code> a medias</li>
  <li>❌ Depuración manual: "rapidito para probar"</li>
  <li>❌ "Ahora lo borro" → nunca llega</li>
</ul>

---

# Volumen EBS de 2TB

<div class="text-6xl font-bold text-red-500 my-8">€200/mes</div>

<div class="mt-8 p-4 bg-red-50 border-l-4 border-red-500 rounded">
  <p>Datasets de experimentación de hace 6 meses</p>
  <p>"Por si acaso necesitamos reproducir..."</p>
  <p>Nadie lo ha tocado desde entonces</p>
</div>

---

# Múltiples volúmenes sin uso

<div class="mt-4 p-4 bg-gray-100 rounded">
  <p class="opacity-70">📊 Acumulándose mes a mes</p>
  <p class="mt-4 text-xl">El problema de los zombies:</p>
  <ul class="text-left mt-4 space-y-2">
    <li>No dan errores</li>
    <li>No generan alertas</li>
    <li>Simplemente... <span class="text-red-500">cobran</span></li>
  </ul>
</div>

---

# <span class="text-green-500">La solución: Tagging obligatorio</span>

<div class="mt-8">
  <h3>Cada recurso debe tener:</h3>
  <ul class="text-lg mt-4 space-y-2">
    <li><code>project:</code> a qué proyecto pertenece</li>
    <li><code>owner:</code> quién es responsable</li>
    <li><code>ttl:</code> cuándo expira o puede revisarse</li>
  </ul>
</div>

<div class="mt-8 p-4 bg-green-50 border-l-4 border-green-500 rounded">
  <p><strong>Auditorías automatizadas:</strong></p>
  <p>Script semanal → Email al owner:</p>
  <p>"Esto lleva 30 días sin usarse, ¿lo borramos?"</p>
</div>

---

# 2C. LIFECYCLE POLICIES

## "Tu museo del código (muy caro)"

<div class="mt-8 opacity-70">🏛️ Museo polvoriento con carteles de "Legacy"</div>

---

# Tercer jinete: Tu museo del código

<div class="text-xl mt-4">
  Todos tenemos ese amigo acumulador
</div>

<div class="text-xl mt-4">
  En cloud, <span class="text-red-500">todos somos ese amigo</span>
</div>

---

# Gráfica: ECR

<div class="flex items-center justify-center gap-4 mt-8">
  <span class="text-5xl font-bold text-red-500">25TB</span>
  <span class="text-4xl">→</span>
  <span class="text-5xl font-bold text-green-500">5TB</span>
</div>

<div class="mt-8 p-4 bg-red-50 border-l-4 border-red-500 rounded">
  <p>Cada push a main genera una nueva imagen</p>
  <p>"Por si necesitamos hacer rollback"</p>
  <p class="text-red-500">Rollback a versión de hace 18 meses. Claro.</p>
</div>

---

# Desglose de qué ocupaba espacio

<div class="p-4 bg-green-50 border-l-4 border-green-500 rounded">
  <h3>Lifecycle policies implementadas:</h3>
  <ul class="mt-4 space-y-2">
    <li>✅ Mantener últimas 10 imágenes por repositorio</li>
    <li>✅ Mantener imágenes taggeadas como <code>production</code> indefinidamente</li>
    <li>✅ Borrar todo lo demás después de 30 días</li>
  </ul>
  <p class="mt-4 text-xl">
    Resultado: <span class="text-green-500">25TB → 5TB</span>
  </p>
  <p class="text-green-500 text-2xl mt-2">
    €30/día ahorrados
  </p>
</div>

---

# Otros acumuladores comunes

<ul class="text-lg mt-6 space-y-2">
  <li>📸 Snapshots de hace 2 años "por si acaso"</li>
  <li>📝 Logs sin rotación ocupando TB en S3</li>
  <li>💾 Backups de bases de datos que ya no existen</li>
</ul>

---

# Modelos y embeddings sin control

<div class="p-4 bg-red-50 border-l-4 border-red-500 rounded">
  <p><strong>El museo moderno:</strong> Modelos de ML</p>
  <ul class="mt-4 space-y-2">
    <li>Cada fine-tuning: nueva versión (5GB)</li>
    <li>50 versiones de un modelo</li>
    <li>Solo usa la última en producción</li>
    <li class="text-red-500 mt-2">250GB que nadie necesita</li>
  </ul>
</div>

<div class="mt-6">
  <p>Embeddings almacenados "por si cambiamos de estrategia"</p>
  <p>Datasets duplicados entre proyectos</p>
</div>

---

# <span class="text-red-500">Por qué pasa:</span>

# "Nunca se sabe si lo necesitaremos"

<div class="mt-8 p-4 bg-red-50 border-l-4 border-red-500 rounded">
  <p class="text-xl">Por el <strong>miedo</strong></p>
  <p>El miedo a borrar algo que alguien, algún día, quizás, podría necesitar</p>
</div>

---

# <span class="text-green-500">La solución</span>

<div class="mt-8 text-xl">
  Cambiar la pregunta:
</div>

<div class="mt-4 text-lg">
  <p class="text-red-500">❌ "¿Lo necesitaremos algún día?"</p>
  <p class="text-green-500">✅ "¿Cuándo fue la última vez que lo necesitamos?"</p>
</div>

<div class="mt-8 p-4 bg-green-50 border-l-4 border-green-500 rounded">
  <h3>Lifecycle policies desde día uno:</h3>
  <ul class="mt-4 space-y-2">
    <li>Imágenes: últimas N versiones + tags específicos</li>
    <li>Logs: retención basada en compliance real</li>
    <li>Modelos: mejor accuracy + última productiva</li>
    <li>Snapshots: retención incremental</li>
  </ul>
</div>

<p class="mt-4">Si realmente lo necesitan: <strong>Glacier</strong> (1/5 del coste)</p>

---

# 2D. NETWORKING

## "Pagar por hablar con tu vecino"

<div class="mt-8 opacity-70">🛣️ Peaje de autopista</div>

---

# Cuarto jinete: Networking

<div class="text-2xl mt-8">
  "Estoy en la misma región,<br>el tráfico es gratis, ¿no?"
</div>

<div class="text-red-500 text-5xl mt-4">No.</div>

---

# Inter-AZ traffic

<div class="text-6xl font-bold text-red-500 my-8">€0.01/GB</div>

<div class="text-xl mt-8">
  Suena a poco, ¿verdad?
</div>

<div class="text-xl mt-4">
  Hasta que mueves <span class="text-red-500">terabytes cada día</span>
</div>

---

# Arquitectura multi-AZ

<div class="mt-4 p-4 bg-gray-100 rounded">
  <p class="opacity-70">🏗️ Arquitectura con flechas de tráfico</p>
  <div class="text-left mt-6 space-y-2">
    <p>✅ Alta disponibilidad, multi-AZ</p>
    <p>✅ Load balancers distribuyendo tráfico</p>
    <p>✅ Microservicios comunicándose</p>
    <p>✅ Health checks cada 30 segundos</p>
    <p>✅ Logs fluyendo a sistemas centralizados</p>
    <p class="text-red-500 text-xl mt-4">Cada cruce cuesta</p>
  </div>
</div>

---

# Cálculo de coste

<div class="text-2xl mt-8">1TB al día de tráfico inter-AZ</div>

<div class="text-6xl font-bold text-red-500 my-8">€10/día</div>

<div class="text-6xl font-bold text-red-500">€300/mes</div>

<div class="text-xl mt-8">
  Solo por hablar con tu vecino de al lado
</div>

---

# NAT Gateway pricing

<div class="p-4 bg-red-50 border-l-4 border-red-500 rounded">
  <ul class="list-none space-y-2">
    <li>💰 <strong>4.5 céntimos/GB</strong> procesado</li>
    <li>💰 <strong>4.8 céntimos/hora</strong> de existir</li>
  </ul>
  <p class="mt-4 text-xl">
    Con 1TB diario:
  </p>
  <p class="text-red-500 text-5xl mt-2">€1,400/mes</p>
  <p class="mt-2">Solo en procesamiento de NAT</p>
</div>

---

# <span class="text-red-500">La trampa del 'todo multi-AZ por defecto'</span>

<div class="mt-8 text-xl">
  Multi-AZ es la mejor práctica...
</div>

<div class="mt-4 text-xl">
  <strong>¿Para producción?</strong> ✅ Sí
</div>

<div class="mt-4 text-xl">
  <strong>¿Para desarrollo/staging/QA?</strong> ❌
</div>

---

# Ejemplos de workloads single-AZ válidos

<ul class="text-lg mt-6 space-y-2">
  <li>✅ Entornos efímeros que viven 3 horas</li>
  <li>✅ Jobs de procesamiento batch que pueden reintentar</li>
  <li>✅ Ambientes de testing donde caerse no es crítico</li>
</ul>

<div class="mt-8 p-4 bg-green-50 border-l-4 border-green-500 rounded">
  <p class="text-xl">¿Por qué pagar el premium de multi-AZ ahí?</p>
</div>

---

# Tabla comparativa: AWS vs Azure vs Scaleway

| Provider | Inter-Zone Traffic |
|----------|-------------------|
| AWS | <span class="text-red-500">€0.01/GB</span> |
| Azure | <span class="text-green-500">Incluido</span> |
| Scaleway | <span class="text-green-500">Modelos más predecibles</span> |

<div class="mt-6">
  <p>AWS: paga por casi todo lo que se mueve</p>
  <p>Hay que saber cuándo pagar ese premium y cuándo no</p>
</div>

---

# Casos especiales: LLMs y model serving

<ul class="text-lg mt-6 space-y-2">
  <li>🤖 Model serving multi-AZ moviendo GB de requests</li>
  <li>📥 Descargar modelos de 5GB desde S3 cada deploy</li>
  <li class="text-red-500 mt-4">Todo eso también cuenta</li>
</ul>

---

# <span class="text-green-500">La solución</span>

<ul class="text-lg mt-6 space-y-3">
  <li>✅ <strong>VPC endpoints:</strong> Para servicios AWS (S3, DynamoDB) evitan NAT Gateway</li>
  <li>✅ <strong>Segmentar por criticidad:</strong> Single-AZ para non-prod, multi-AZ solo donde importa</li>
  <li>✅ <strong>Arquitectura consciente:</strong> Si dos servicios hablan mucho, misma AZ</li>
  <li>✅ <strong>Caching local:</strong> Modelos en vez de descargarlos cada vez</li>
  <li>✅ <strong>Providers alternativos:</strong> Mejor pricing en networking para ciertos workloads</li>
</ul>

<div class="mt-8 p-4 bg-green-50 border-l-4 border-green-500 rounded">
  <p class="text-xl">El mejor ahorro es el gasto que no haces</p>
</div>

---

# 3. TU CHECKLIST DEL LUNES

## "¿Y ahora qué hago?"

---

# Checklist visual

## <span class="text-green-500">Prioridad 1 - Visibilidad (Semana 1)</span>

<ul class="text-base mt-4 space-y-2">
  <li>☐ Implementar tagging obligatorio. Sin tags, sin deploy</li>
  <li>☐ Activar Cost Explorer y alertas de anomalías</li>
  <li>☐ Script semanal buscando recursos huérfanos (Cloud Custodian)</li>
</ul>

---

# Checklist visual

## <span class="text-green-500">Prioridad 2 - Quick Wins (Semana 2-3)</span>

<ul class="text-base mt-4 space-y-2">
  <li>☐ Lifecycle policies: ECR, S3, snapshots, modelos</li>
  <li>☐ Auto-shutdown en notebooks y GPUs (2h sin actividad)</li>
  <li>☐ Auditar recursos con utilización &lt;20% durante 7+ días</li>
</ul>

---

# Checklist visual

## <span class="text-green-500">Prioridad 3 - Arquitectura (Mes 1-2)</span>

<ul class="text-base mt-4 space-y-2">
  <li>☐ VPC endpoints para servicios AWS de alto tráfico</li>
  <li>☐ Revisar qué está desplegado multi-AZ. ¿Realmente necesita HA?</li>
  <li>☐ Política de retención de modelos ML basada en uso real</li>
</ul>

---

# <span class="text-green-500">ROI esperado</span>

| Acción | Ahorro |
|--------|--------|
| Lifecycle policies | <span class="text-green-500">40-60% storage<br>(80% en ejemplo real)</span> |
| Auto-shutdown GPUs | <span class="text-green-500">60-80% compute</span> |
| Rightsizing | <span class="text-green-500">20-40% instancias</span> |
| VPC endpoints | <span class="text-green-500">Hasta 90% NAT</span> |

---

# Herramientas que ayudan

<div class="mt-6">
  <h3 class="text-green-500">Nativas:</h3>
  <p>AWS Cost Explorer, Azure Cost Management, CloudWatch/Azure Monitor</p>
  
  <h3 class="text-green-500 mt-4">Open Source:</h3>
  <p>Cloud Custodian (políticas), Infracost (Terraform), Kubecost (Kubernetes)</p>
  
  <h3 class="text-green-500 mt-4">SaaS:</h3>
  <p>Hay mil opciones, pero empiecen con las nativas primero</p>
</div>

---

# <span class="text-green-500">La regla de oro</span>

<div class="p-4 bg-green-50 border-l-4 border-green-500 rounded text-xl">
  <p><strong>Visibilidad primero, optimización después</strong></p>
</div>

<div class="mt-8 text-left space-y-2">
  <p>✅ No pueden optimizar lo que no pueden medir</p>
  <p>✅ No intenten arreglar todo a la vez</p>
  <p>✅ Empiecen con visibilidad → identifiquen dolor → arréglalo → midan → repitan</p>
</div>

<div class="mt-8 text-xl">
  <strong>FinOps es un proceso iterativo,<br>no un evento puntual</strong>
</div>

---

# Gráfica antes/después

<div class="flex items-center justify-center gap-4 mt-8">
  <div>
    <span class="text-5xl font-bold text-red-500">25TB</span>
    <span class="text-4xl mx-4">→</span>
    <span class="text-5xl font-bold text-green-500">5TB</span>
  </div>
</div>

<div class="mt-4">
  <span class="text-5xl font-bold text-red-500">€30/día</span>
  <span class="text-4xl mx-4">→</span>
  <span class="text-5xl font-bold text-green-500">casi nada</span>
</div>

<div class="mt-8 text-xl">
  ¿Qué hicieron? <strong>Miraron</strong>
</div>

<div class="text-lg">
  Simplemente miraron qué estaban guardando y por qué
</div>

---

# <span class="text-green-500">FinOps no es decir NO</span>

<div class="mt-8 text-xl text-left space-y-4">
  <p>❌ No es ser el malo que bloquea proyectos</p>
  <p>✅ FinOps es decir SÍ... pero con datos</p>
  <p>✅ Es poder lanzar ese nuevo feature sabiendo cuánto costará</p>
  <p>✅ Es poder escalar sin sorpresas en la factura</p>
</div>

---

# Empiecen por lo invisible

<div class="text-lg mt-8">
  Los grandes gastos son fáciles de ver
</div>

<div class="text-red-500 text-2xl mt-4">
  Son los invisibles los que se comen el presupuesto
</div>

<div class="mt-8 p-4 bg-green-50 border-l-4 border-green-500 rounded">
  <p>Empiecen por lo invisible:</p>
  <ul class="text-left mt-4 space-y-2">
    <li>Los huérfanos</li>
    <li>Las policies que nunca configuraron</li>
    <li>El tráfico que no sabían que pagaban</li>
    <li>Las GPUs que olvidaron apagar</li>
  </ul>
</div>

---

# ¿Por qué tu gasto cloud<br>no para de subir?

<div class="mt-12 text-xl">
  Grano a grano hace granero
</div>

<div class="mt-4 text-xl">
  Y céntimo a céntimo hace una factura<br>de cloud sostenible
</div>

<div class="mt-12 text-lg opacity-80">
  <p>Gracias</p>
  <p class="mt-4">Y por favor, el lunes,<br>vayan a mirar sus ECR</p>
</div>

