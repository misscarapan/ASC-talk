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

<div class="h-full flex flex-col justify-between py-16">
  <div class="text-left">
    <div class="subtitle mb-6">LIGHTNING TALK</div>
    <h1 class="text-5xl leading-tight">
      ¿Por qué tu<br>
      <span class="gasto inline-block bg-black text-white px-4 py-2 mt-4">
        gasto cloud
      </span><br>
      no para de subir?
    </h1>
  </div>

  <div class="flex justify-between items-end mt-16 credits">
    <div>
      Cristina R. Fernández<br>
      SRE · Cloud · FinOps
    </div>
    <div class="text-right">
      Live Session · 2025<br>
      ASTURIAS SOFTWARE CRAFTERS
    </div>
  </div>
</div>

---

# Sobre mí

| SRE en Ozona Tech | Resizes → Dash | Mentora en Step4ward |
| --- | --- | --- |
| Diseño y opero infraestructura en Azure. | **Contributor en Resizes** – Plataforma agnóstica para desarrolladores. | Comunidad para acompañar a mujeres en el sector tech. |
|  | **Dash believer** – Producto para que los devs no se preocupen por la infra. |  |
| ![Ozona Tech](/images/ozona.png) | _Resizes_ ⟶ _Dash_ | ![Step4ward](/images/step4ward.png) |

---

# El gasto silencioso

<ol class="text-2xl mt-8 list-none">
  <li>Rightsizing</li>
  <li>Recursos huérfanos</li>
  <li>Lifecycle policies</li>
  <li>Networking</li>
  <li>Recomendaciones</li>
</ol>

---


# RIGHTSIZING

<div class="mt-10 flex justify-center">
  <img src="/images/costura.jpg" alt="Costura" class="h-96 object-contain rounded shadow-lg">
</div>

---

# RIGHTSIZING

<div class="mt-10 flex justify-center">
  <img src="/images/rightsizing.png" alt="Rightsizing diagram" class="h-96 object-contain rounded shadow-lg">
</div>
<div class="mt-6 text-center text-sm uppercase tracking-wide opacity-60">
  Rightsizing
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
  <p>GPU idle <span class="text-red-500">98%</span> del tiempo. Gasto silencioso</p>
</div>
<div class="mt-6 text-center text-sm uppercase tracking-wide opacity-60">
  Rightsizing
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
<div class="mt-6 text-center text-sm uppercase tracking-wide opacity-60">
  Rightsizing
</div>
---

# RECURSOS HUÉRFANOS

<div class="mt-8 flex justify-center">
  <img src="/images/pablo-escobar-pablo.gif" alt="Pablo Escobar esperando" class="h-80 object-contain rounded">
</div>

---
layout: center
class: text-left

# Recursos huérfanos comunes

<ul class="text-lg mt-6 space-y-2">
  <li>💾 Discos EBS sin instancia asociada</li>
  <li>🌐 IPs elásticas que no apuntan a nada</li>
  <li>⚖️ Load balancers sin targets</li>
  <li>📸 Snapshots de instancias eliminadas hace meses</li>
</ul>

<div class="mt-6 text-center text-sm uppercase tracking-wide opacity-60">
  Recursos huérfanos
</div>

---

# <span class="text-red-500">¿Por qué pasa esto?</span>

<ul class="text-lg mt-6 space-y-2">
  <li>❌ <code>terraform destroy</code> a medias</li>
  <li>❌ Depuración manual: "Voy rápido para probar"</li>
  <li>❌ "Ahora lo borro" → nunca llega</li>
  <li>❌ "Esto dependía de..." → falta de ownership</li>
</ul>
<div class="mt-6 text-center text-sm uppercase tracking-wide opacity-60">
  Recursos huérfanos
</div>
---

# Ejemplo Volumen EBS de 2TB

<div class="mt-8 p-4 bg-red-50 border-l-4 border-red-500 rounded">
  <p>Datasets de experimentación de hace 6 meses</p>
  <p>"Por si acaso necesitamos reproducir..."</p>
  <p>Nadie lo ha tocado desde entonces</p>
  <p>200€/mes</p>
</div>

<div class="mt-8 p-4 bg-green-50 border-l-4 border-green-500 rounded">
  <p>Eliminando el volumen estaríamos ahorrando 200€/mes</p>
</div>
<div class="mt-6 text-center text-sm uppercase tracking-wide opacity-60">
  Recursos huérfanos
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

<div class="mt-6 text-center text-sm uppercase tracking-wide opacity-60">
  Recursos huérfanos
</div>
---

# LIFECYCLE POLICIES


<div class="mt-8 flex justify-center">
  <img src="/images/recycle.jpg" alt="Museo del código legacy" class="h-96 object-contain rounded shadow-lg">
</div>

---

# Ejemplo: AWS ECR

<div class="mt-8 p-4 bg-red-50 border-l-4 border-red-500 rounded">
  <p>Cada push a main genera una nueva imagen</p>
  <p>"Por si necesitamos hacer rollback"</p>
  <p class="text-red-500">Rollback a versión de hace 18 meses. Claro.</p>
</div>

<div class="p-4 bg-green-50 border-l-4 border-green-500 rounded">
  <ul class="mt-4 space-y-2">
    <li>✅ Mantener últimas 10 imágenes por repositorio</li>
    <li>✅ Mantener imágenes taggeadas como <code>production</code> indefinidamente</li>
    <li>✅ Borrar todo lo demás después de 30 días</li>
  </ul>
  <p class="mt-4 text-xl">
    Resultado: <span class="text-green-500">25TB → 5TB</span>
  </p>
  <p class="text-green-500 text-2xl mt-2">
    30€/día ahorrados => 10950€/año ahorrados
  </p>
</div>

<div class="mt-6 text-center text-sm uppercase tracking-wide opacity-60">
  LIFECYCLE POLICIES
</div>

---

# Acumuladores comunes

<ul class="text-lg mt-6 space-y-2">
  <li>📸 Snapshots de hace 2 años "por si acaso"</li>
  <li>📝 Logs sin rotación ocupando TB en S3</li>
  <li>💾 Backups de bases de datos que ya no existen</li>
</ul>

<div class="mt-6 text-center text-sm uppercase tracking-wide opacity-60">
  LIFECYCLE POLICIES
</div>

---

# Modelos y embeddings sin control

<div class="p-4 bg-red-50 border-l-4 border-red-500 rounded">
  <p><strong>El museo moderno:</strong> Modelos de ML</p>
  <ul class="mt-4 space-y-2">
    <li>Cada fine-tuning: nueva versión (5GB)</li>
    <li>50 versiones de un modelo</li>
    <li>Solo usa la última en producción</li>
    <li class="text-red-500 mt-2">250GB que nadie necesita</li>
    <li>Embeddings almacenados "por si cambiamos de estrategia"</li>
    <li>Datasets duplicados entre proyectos</li>
  </ul>
</div>


<div class="mt-6 text-center text-sm uppercase tracking-wide opacity-60">
  LIFECYCLE POLICIES
</div>

---

# <span class="text-green-500">La solución</span>

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

<div class="mt-6 text-center text-sm uppercase tracking-wide opacity-60">
  LIFECYCLE POLICIES
</div>
---

# NETWORKING

<div class="mt-8 flex justify-center">
  <img src="/images/networking.png" alt="Networking costs" class="h-96 object-contain rounded shadow-lg">
</div>

---

# Costes invisibles

<div class="grid grid-cols-3 gap-8 mt-10 text-left text-sm">
  <div>
    <h3 class="text-red-500 mb-2">Inter-AZ traffic</h3>
    <p class="text-3xl font-bold text-red-500">€0.01/GB</p>
    <p class="mt-4">Suena a poco, ¿verdad?</p>
    <p class="mt-2">Hasta que mueves <span class="text-red-500">terabytes cada día</span>.</p>
    <p class="mt-4 font-semibold">1TB/día inter-AZ → €10/día · €300/mes</p>
  </div>

  <div>
    <h3 class="text-red-500 mb-2">NAT Gateway</h3>
    <ul class="list-none space-y-1">
      <li>💰 <strong>€0.045/GB</strong> procesado</li>
      <li>💰 <strong>€0.048/hora</strong> solo por existir</li>
    </ul>
    <p class="mt-4 font-semibold">Con 1TB diario:</p>
    <p class="text-red-500 text-3xl mt-1">≈ €1,400/mes</p>
    <p class="mt-1 text-xs opacity-70">Solo en procesamiento de NAT</p>
  </div>

  <div>
    <h3 class="text-red-500 mb-2">LLMs & model serving</h3>
    <ul class="text-sm mt-2 space-y-1">
      <li>🤖 Endpoints multi-AZ moviendo GB de requests</li>
      <li>📥 Descargar modelos de 5GB desde S3 en cada deploy</li>
      <li class="text-red-500 mt-2 font-semibold">Todo eso también cuenta</li>
    </ul>
  </div>
</div>

<div class="mt-6 text-center text-sm uppercase tracking-wide opacity-60">
  NETWORKING
</div>
---

# Ejemplos de workloads single-AZ válidos

<ul class="text-lg mt-6 space-y-2">
  <li>✅ Entornos efímeros que viven 3 horas</li>
  <li>✅ Jobs de procesamiento batch que pueden reintentar</li>
  <li>✅ Ambientes de testing donde caerse no es crítico</li>
</ul>

<div class="mt-8 p-4 bg-green-50 border-l-4 border-green-500 rounded">
  <p class="text-xl">¿Por qué hacer multi-AZ ahí?</p>
</div>
<div class="mt-6 text-center text-sm uppercase tracking-wide opacity-60">
  NETWORKING
</div>
---

# Tabla comparativa: AWS vs Azure vs Scaleway

| Provider | Inter-Zone Traffic |
|----------|-------------------|
| AWS | <span class="text-red-500">€0.01/GB</span> |
| Azure | <span class="text-green-500">Incluido</span> |
| Scaleway | <span class="text-green-500">Modelos más predecibles</span> |
<div class="mt-6 text-center text-sm uppercase tracking-wide opacity-60">
  NETWORKING
</div>

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
<div class="mt-6 text-center text-sm uppercase tracking-wide opacity-60">
  NETWORKING
</div>
---

# "¿Y ahora qué hago?"

## <span class="text-green-500">Prioridad 1 - Visibilidad (Semana 1)</span>

<ul class="text-base mt-4 space-y-2">
  <li>☐ Implementar tagging obligatorio. Sin tags, sin deploy</li>
  <li>☐ Activar Cost Explorer y alertas de anomalías</li>
  <li>☐ Script semanal buscando recursos huérfanos (Cloud Custodian)</li>
</ul>

## <span class="text-green-500">Prioridad 2 - Quick Wins (Semana 2-3)</span>

<ul class="text-base mt-4 space-y-2">
  <li>☐ Lifecycle policies: ECR, S3, snapshots, modelos</li>
  <li>☐ Auto-shutdown en notebooks y GPUs (2h sin actividad)</li>
  <li>☐ Auditar recursos con utilización &lt;20% durante 7+ días</li>
</ul>
<div class="mt-6 text-center text-sm uppercase tracking-wide opacity-60">
  Recomendaciones
</div>
---

# "¿Y ahora qué hago?"

## <span class="text-green-500">Prioridad 3 - Arquitectura (Mes 1-2)</span>

<ul class="text-base mt-4 space-y-2">
  <li>☐ VPC endpoints para servicios AWS de alto tráfico</li>
  <li>☐ Revisar qué está desplegado multi-AZ. ¿Realmente necesita HA?</li>
  <li>☐ Política de retención de modelos ML basada en uso real</li>
</ul>
<div class="mt-6 text-center text-sm uppercase tracking-wide opacity-60">
  Recomendaciones
</div>
---

# <span class="text-green-500">ROI esperado</span>

| Acción | Ahorro |
|--------|--------|
| Rightsizing | <span class="text-green-500">20-40% instancias</span> |
| Auto-shutdown GPUs | <span class="text-green-500">60-80% compute</span> |
| Lifecycle policies | <span class="text-green-500">40-60% storage<br>(80% en ejemplo real)</span> |
| VPC endpoints | <span class="text-green-500">Hasta 90% NAT</span> |
<div class="mt-6 text-center text-sm uppercase tracking-wide opacity-60">
  Recomendaciones
</div>
---

# Herramientas que ayudan

<div class="mt-6">
  <h3 class="text-green-500">Nativas:</h3>
  <p>AWS Cost Explorer, Azure Cost Management, CloudWatch/Azure Monitor</p>
  
  <h3 class="text-green-500 mt-4">Open Source:</h3>
  <p>Cloud Custodian (políticas), Infracost (Terraform), Opencost (Kubernetes)</p>
  
</div>
<div class="mt-6 text-center text-sm uppercase tracking-wide opacity-60">
  Recomendaciones
</div>
---

# <span class="text-green-500">La regla de oro</span>

<div class="p-4 bg-green-50 border-l-4 border-green-500 rounded text-xl">
  <p><strong>Visibilidad primero, optimización después</strong></p>
</div>

<div class="mt-8 text-left space-y-2">
  <p>✅ No se puede optimizar lo que no pueden medir</p>
  <p>✅ No intentar arreglar todo a la vez</p>
  <p>✅ Empiecen con visibilidad → identifiquen dolor → arreglalor → medir → repetir</p>
</div>

<div class="mt-8 text-xl">
  <strong>FinOps es un proceso iterativo,<br>no un evento puntual</strong>
</div>
<div class="mt-6 text-center text-sm uppercase tracking-wide opacity-60">
  Recomendaciones
</div>
---



<div class="mt-16 flex flex-col items-center justify-center space-y-8">
  <div class="text-6xl font-bold">GRACIAS</div>
  
  <div class="mt-8">
    <p class="text-xl mb-4">Accede a las slides</p>
    <img src="/images/recycle.jpg" alt="QR Code para slides" class="w-64 h-64 mx-auto border-2 border-black rounded-lg p-4 bg-white">
  </div>
</div>
