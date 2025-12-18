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

<div class="text-center mb-8">
  <h1 class="text-4xl font-bold text-amber-700">El gasto <span class="inline-block bg-amber-700 text-white px-2 py-1">silencioso</span></h1>
</div>

<div class="grid grid-cols-2 gap-4 mt-6 text-left">
  <div class="p-4 bg-gradient-to-br from-gray-50 to-gray-100/80 border border-amber-200/40 rounded-lg shadow-lg">
    <div class="flex items-start gap-2">
      <div class="text-3xl font-semibold text-amber-600/70 leading-none">01</div>
      <div class="flex-1">
        <h3 class="text-lg font-semibold mb-1 text-amber-700 tracking-tight">Rightsizing</h3>
        <p class="text-sm text-gray-600 leading-snug">Tener más de lo que necesitamos</p>
      </div>
    </div>
  </div>
  
  <div class="p-4 bg-gradient-to-br from-gray-50 to-gray-100/80 border border-amber-200/40 rounded-lg shadow-lg">
    <div class="flex items-start gap-2">
      <div class="text-3xl font-semibold text-amber-600/70 leading-none">02</div>
      <div class="flex-1">
        <h3 class="text-lg font-semibold mb-1 text-amber-700 tracking-tight">Recursos huérfanos</h3>
        <p class="text-sm text-gray-600 leading-snug">Aquello que usamos un día y quedó en el olvido</p>
      </div>
    </div>
  </div>
  
  <div class="p-4 bg-gradient-to-br from-gray-50 to-gray-100/80 border border-amber-200/40 rounded-lg shadow-lg">
    <div class="flex items-start gap-2">
      <div class="text-3xl font-semibold text-amber-600/70 leading-none">03</div>
      <div class="flex-1">
        <h3 class="text-lg font-semibold mb-1 text-amber-700 tracking-tight">Lifecycle policies</h3>
        <p class="text-sm text-gray-600 leading-snug">Guardar todo para siempre por si acaso</p>
      </div>
    </div>
  </div>
  
  <div class="p-4 bg-gradient-to-br from-gray-50 to-gray-100/80 border border-amber-200/40 rounded-lg shadow-lg">
    <div class="flex items-start gap-2">
      <div class="text-3xl font-semibold text-amber-600/70 leading-none">04</div>
      <div class="flex-1">
        <h3 class="text-lg font-semibold mb-1 text-amber-700 tracking-tight">Networking</h3>
        <p class="text-sm text-gray-600 leading-snug">Pagar por tráfico que no sabes que existe</p>
      </div>
    </div>
  </div>
</div>

<div class="mt-4 p-4 bg-gradient-to-br from-emerald-50 to-emerald-100/60 border border-emerald-300/50 rounded-lg shadow-lg">
  <div class="flex items-start gap-2">
    <div class="text-3xl font-semibold text-emerald-600/70 leading-none">05</div>
    <div class="flex-1">
      <h3 class="text-lg font-semibold mb-1 text-emerald-700 tracking-tight">Recomendaciones</h3>
      <p class="text-sm text-gray-600 leading-snug">Tu checklist del lunes</p>
    </div>
  </div>
</div>

---

<div class="text-center mb-4">
  <h1 class="text-4xl font-light tracking-widest text-black mb-2">RIGHTSIZING</h1>
  <div class="w-20 h-px bg-amber-600 mx-auto mb-3"></div>
  <p class="text-sm text-gray-600 font-light tracking-wide uppercase">O mejor dicho, la falta de él</p>
</div>

<div class="grid grid-cols-5 gap-6 mt-6">
  <div class="col-span-3 flex justify-center items-center">
    <img src="/images/costura.jpg" alt="Costura" class="h-64 w-full object-contain rounded-sm shadow-xl border border-gray-200">
  </div>
  <div class="col-span-2 flex justify-center items-center">
    <img src="/images/rightsizing.png" alt="Rightsizing diagram" class="h-64 w-full object-contain rounded-sm shadow-xl border border-gray-200">
  </div>
</div>

<div class="text-center mt-4">
  <p class="text-lg font-light text-gray-800 italic tracking-wide">"Mejor que sobre a que falte"</p>
</div>

---

<div class="text-center mb-6">
  <h1 class="text-4xl font-light tracking-widest text-black">RIGHTSIZING</h1>
</div>

<div class="grid grid-cols-2 gap-6 mt-6">
  <div class="p-5 bg-rose-50 border-l-4 border-rose-400 rounded flex flex-col justify-center">
    <h3 class="text-xl font-semibold mb-3 text-rose-700 text-center">El caso extremo: GPUs</h3>
    <div class="text-center space-y-2">
      <div class="text-sm space-y-1">
        <p><strong>p3.8xlarge:</strong> <span class="text-rose-600">€12/hora</span></p>
        <p>Entrenar 2h viernes tarde</p>
      </div>
      <p class="text-rose-700 font-semibold">Olvidar apagarla</p>
      <p class="mt-2">GPU idle <span class="text-rose-600 font-bold">98%</span> del tiempo</p>
      <div class="text-center">
        <p class="text-4xl font-bold text-rose-700 mb-2">a €720</p>
        <p class="text-sm text-gray-600 mb-3">el fin de semana</p>
      </div>
    </div>
  </div>
  
  <div class="p-6 bg-slate-100 border-l-4 border-slate-400 rounded flex flex-col justify-center">
    <h3 class="text-xl font-semibold mb-4 text-slate-700 text-center">El patrón</h3>
    <div class="text-center space-y-4">
      <div>
        <p class="text-5xl font-bold text-slate-500 mb-1">10%</p>
        <p class="text-sm text-gray-600 uppercase tracking-wide">Utilización</p>
      </div>
      <div class="text-2xl text-slate-600">↓</div>
      <div>
        <p class="text-5xl font-bold text-slate-700 mb-1">100%</p>
        <p class="text-sm text-gray-600 uppercase tracking-wide">Pago</p>
      </div>
    </div>
  </div>
</div>

---

# RIGHTSIZING: La <span class="inline-block bg-black text-white px-2 py-1">solución</span>

<div class="grid grid-cols-2 gap-6 mt-12">
  <div class="p-6 flex flex-col justify-center">
    <ul class="text-base space-y-3 list-none" style="list-style: none; padding-left: 0;">
      <li style="list-style: none;">✅ <strong>Monitoring:</strong> No se puede optimizar lo que no se mide</li>
      <li style="list-style: none;">✅ <strong>Alertas:</strong> Recursos con utilización baja &gt;X días</li>
      <li style="list-style: none;">✅ <strong>Spot instances:</strong> <span class="text-green-500">70% ahorro</span> para workloads interrumpibles</li>
      <li style="list-style: none;">✅ <strong>Auto-shutdown:</strong> Si no hay actividad en 2h, apagado automático</li>
    </ul>
  </div>
  
  <div class="p-6 bg-green-50 border-l-4 border-green-500 rounded flex flex-col items-center justify-center">
    <div class="text-center mb-4">
      <p class="text-2xl mb-2">No se trata de ser tacañx.</p>
      <p class="text-2xl font-bold text-green-700">Se trata de ser inteligente.</p>
    </div>
    <img src="/images/inteligente.jpg" alt="Inteligente" class="h-32 object-contain rounded">
  </div>
</div>
---

<div class="text-center mb-6">
  <h1 class="text-4xl font-light tracking-widest text-black">RECURSOS <span class="inline-block bg-black text-white px-2 py-1">HUÉRFANOS</span></h1>
</div>

<div class="grid grid-cols-2 gap-6 mt-6">
  <div class="flex justify-center items-center">
    <img src="/images/pablo-escobar-pablo.gif" alt="Pablo Escobar esperando" class="h-64 object-contain rounded">
  </div>
  
  <div class="flex flex-col justify-center">
    <h2 class="text-2xl font-semibold mb-4 text-center">Los más olvidados</h2>
    <ul class="text-lg space-y-3 list-none" style="list-style: none; padding-left: 0;">
      <li style="list-style: none; white-space: nowrap;">💾 Discos sin instancia asociada</li>
      <li style="list-style: none; white-space: nowrap;">🌐 IPs elásticas que no apuntan a nada</li>
      <li style="list-style: none; white-space: nowrap;">⚖️ Load balancers sin targets</li>
      <li style="list-style: none; white-space: nowrap;">📸 Snapshots de VM eliminadas hace meses</li>
    </ul>
  </div>
</div>

<div class="mt-6 text-center text-sm uppercase tracking-wide opacity-60">
  Recursos huérfanos
</div>

---

<div class="mb-12 text-center">
  <h1 class="text-6xl font-light tracking-widest text-black mb-4">¿Por qué pasa?</h1>
  <p class="text-2xl text-gray-600 font-light italic">Las <span class="inline-block bg-gray-800 text-white px-2 py-1">razones</span> del olvido</p>
</div>

<div class="mt-16 max-w-2xl mx-auto">
  <ul class="text-xl space-y-6 list-none text-left" style="list-style: none; padding-left: 0;">
    <li style="list-style: none;" class="text-gray-700 leading-relaxed">❌ <code class="bg-gray-100 px-2 py-1 rounded">terraform destroy</code> a medias</li>
    <li style="list-style: none;" class="text-gray-700 leading-relaxed">❌ "Total es para probar..."</li>
    <li style="list-style: none;" class="text-gray-700 leading-relaxed">❌ "Luego lo borro..."</li>
    <li style="list-style: none;" class="text-gray-700 leading-relaxed">❌ "Esto dependía de..."</li>
  </ul>
</div>
<div class="mt-6 text-center text-sm uppercase tracking-wide opacity-60">
  Recursos huérfanos
</div>
---

# Ejemplo Volumen <span class="inline-block bg-black text-white px-2 py-1">EBS</span> de 2TB

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

<div class="text-center mb-6">
  <h1 class="text-4xl font-light tracking-widest text-black mb-2">La <span class="inline-block bg-black text-white px-2 py-1">solución</span></h1>
  <p class="text-xl text-green-600 font-light italic">Tagging obligatorio</p>
</div>

<div class="mt-6">
  <h3 class="text-lg font-semibold mb-3 text-gray-700">Cada recurso debe tener:</h3>
  <ul class="text-base mt-3 space-y-2">
    <li><code class="bg-gray-100 px-2 py-1 rounded text-green-700">project:</code> a qué proyecto pertenece</li>
    <li><code class="bg-gray-100 px-2 py-1 rounded text-green-700">owner:</code> quién es responsable</li>
    <li><code class="bg-gray-100 px-2 py-1 rounded text-green-700">ttl:</code> cuándo expira o puede revisarse</li>
  </ul>
</div>

<div class="mt-6 p-4 bg-green-50 border-l-4 border-green-500 rounded">
  <p><strong>Auditorías automatizadas:</strong></p>
  <p>Script semanal → Email al owner:</p>
  <p>"Esto lleva 30 días sin usarse, ¿lo borramos?"</p>
</div>

<div class="mt-6 text-center text-sm uppercase tracking-wide opacity-60">
  Recursos huérfanos
</div>
---

<div class="text-center mb-6">
  <h1 class="text-4xl font-light tracking-widest" style="color: #6B4E3D;"><span class="inline-block text-white px-2 py-1" style="background-color: #6B4E3D;">LIFECYCLE</span> POLICIES</h1>
</div>

<div class="grid grid-cols-2 gap-6 mt-12">
  <div class="flex justify-center items-center">
    <img src="/images/lifecycle.jpg" alt="Museo del código legacy" class="h-64 object-contain rounded">
  </div>
  
  <div class="flex flex-col justify-center pr-4">
    <h2 class="text-xl font-semibold mb-4 text-center" style="color: #7A5F4A;">Acumuladores <span class="inline-block text-white px-2 py-1" style="background-color: #6B4E3D;">comunes</span></h2>
    <ul class="text-base space-y-3 list-none" style="list-style: none; padding-left: 0;">
      <li style="list-style: none; color: #5A4A3F;">📸 Snapshots de hace 2 años </li>
      <li style="list-style: none; color: #5A4A3F;">📝 Logs sin rotación en S3</li>
      <li style="list-style: none; color: #5A4A3F;">💾 Backups de DDBB que ya no existen</li>
    </ul>
  </div>
</div>

---

<div class="text-center mb-6">
  <h1 class="text-4xl font-light tracking-widest text-black mb-2">Ejemplo: AWS <span class="inline-block bg-black text-white px-2 py-1">ECR</span></h1>
</div>

<div class="max-w-4xl mx-auto">
  <div class="grid grid-cols-2 gap-6 mb-6">
    <div class="p-6 bg-red-50 border-l-4 border-red-500 rounded-lg shadow-sm">
      <h3 class="text-lg font-semibold text-red-700 mb-3">El problema</h3>
      <p class="text-gray-700 mb-2">Cada push a main genera una nueva imagen</p>
      <p class="text-gray-600 italic mb-3">"Guardamos por si necesitamos hacer rollback"</p>
      <p class="text-red-600 font-medium">Tenemos versiones de hace 18 meses.</p>
    </div>

<div class="p-6 bg-green-50 border-l-4 border-green-500 rounded-lg shadow-sm">
      <h3 class="text-lg font-semibold text-green-700 mb-3">La solución</h3>
      <ul class="text-sm space-y-2 text-gray-700">
        <li>✅ Mantener últimas imágenes por repositorio, p.e. 10</li>
        <li>✅ Mantener imágenes taggeadas como <code class="bg-white px-1 rounded">production</code> indefinidamente</li>
        <li>✅ Borrar las anteriores después de 30 días</li>
      </ul>
    </div>
  </div>

  <div class="p-6 bg-gradient-to-r from-green-50 to-emerald-50 border-l-4 border-green-600 rounded-lg shadow-md text-center">
    <p class="text-2xl font-light mb-2">
      Resultado: <span class="font-bold text-green-600">25TB → 5TB</span>
    </p>
    <p class="text-green-600 text-xl font-semibold mt-2">
      30€/día ahorrados → 10,950€/año ahorrados
    </p>
  </div>
</div>

<div class="mt-6 text-center text-sm uppercase tracking-wide opacity-60">
  LIFECYCLE POLICIES
</div>

---

<div class="text-center mb-6">
  <h1 class="text-4xl font-light tracking-widest" style="color: #6B4E3D;">Modelos y embeddings sin control</h1>
</div>

<div class="max-w-3xl mx-auto mt-12">
  <h2 class="text-2xl font-semibold mb-6 text-center" style="color: #7A5F4A;"><span class="inline-block text-white px-2 py-1" style="background-color: #6B4E3D;">El museo moderno</span></h2>
  <ul class="text-lg space-y-4 list-none text-left" style="list-style: none; padding-left: 0;">
    <li style="list-style: none; color: #5A4A3F;">🤖 Cada fine-tuning genera una nueva versión (5GB)</li>
    <li style="list-style: none; color: #5A4A3F;">📦 50 versiones de un modelo, solo usa la última en producción</li>
    <li style="list-style: none; color: #8B4A3A; font-weight: 600;">💾 250GB que nadie necesita</li>
    <li style="list-style: none; color: #5A4A3F;">🔗 Embeddings almacenados "por si cambiamos de estrategia"</li>
    <li style="list-style: none; color: #5A4A3F;">📊 Datasets duplicados entre proyectos</li>
  </ul>
</div>


<div class="mt-6 text-center text-sm uppercase tracking-wide opacity-60">
  LIFECYCLE POLICIES
</div>

---

<div class="text-center mb-6">
  <h1 class="text-4xl font-light tracking-widest text-black mb-2">La <span class="inline-block bg-black text-white px-2 py-1">solución</span></h1>
</div>

<div class="max-w-4xl mx-auto">
  <div class="grid grid-cols-2 gap-4 mb-8">
    <div class="p-4 bg-red-50 border-l-4 border-red-400 rounded-lg text-center">
      <p class="text-base text-red-600 font-medium">❌ "¿Lo necesitaremos algún día?"</p>
    </div>
    <div class="p-4 bg-green-50 border-l-4 border-green-500 rounded-lg text-center">
      <p class="text-base text-green-700 font-semibold">✅ "¿Cuándo fue la última vez que lo necesitamos?"</p>
    </div>
  </div>

  <div class="p-6 bg-green-50 border-l-4 border-green-500 rounded-lg shadow-sm mb-4">
    <h3 class="text-lg font-semibold text-green-700 mb-4">Lifecycle policies desde día uno:</h3>
    <div class="grid grid-cols-2 gap-3 text-sm text-gray-700">
      <div>📦 Imágenes: últimas N versiones + tags específicos</div>
      <div>📝 Logs: retención basada en compliance real</div>
      <div>🤖 Modelos: mejor accuracy + última productiva</div>
      <div>💾 Snapshots: retención incremental</div>
    </div>
  </div>

  <div class="p-3 bg-gray-50 border border-gray-300 rounded-lg text-center">
    <p class="text-sm text-gray-600">Si realmente lo necesitan: <strong class="text-green-600">Glacier</strong> (1/5 del coste)</p>
  </div>
</div>

<div class="mt-6 text-center text-sm uppercase tracking-wide opacity-60">
  LIFECYCLE POLICIES
</div>
---

<div class="text-center mb-6">
  <h1 class="text-4xl font-light tracking-widest text-black mb-4"><span class="inline-block bg-black text-white px-2 py-1">NETWORKING</span></h1>
  <p class="text-lg text-gray-600 italic">Pagar por tráfico que no sabes que existe</p>
</div>

<div class="max-w-3xl mx-auto mt-8">
  <div class="flex justify-center mb-6">
    <img src="/images/networking.png" alt="Networking costs" class="w-full h-32 object-contain" style="background: transparent;">
  </div>
  <div class="grid grid-cols-3 gap-6">
    <div class="p-4 bg-red-50 border-l-4 border-red-500 rounded-lg">
      <p class="text-sm text-gray-600 mb-1">Inter-AZ traffic</p>
      <p class="text-2xl font-bold text-red-600">€0.01/GB</p>
      <p class="text-xs text-gray-500 mt-1">1TB/día = €300/mes</p>
    </div>
    <div class="p-4 bg-red-50 border-l-4 border-red-500 rounded-lg">
      <p class="text-sm text-gray-600 mb-1">NAT Gateway</p>
      <p class="text-2xl font-bold text-red-600">€0.045/GB</p>
      <p class="text-xs text-gray-500 mt-1">+ €0.048/hora solo por existir</p>
    </div>
    <div class="p-4 bg-gray-50 border-l-4 border-gray-400 rounded-lg">
      <p class="text-sm text-gray-600 mb-2">LLMs & model serving</p>
      <p class="text-xs text-gray-600">GB entre AZs</p>
      <p class="text-xs text-gray-600">Modelos 5GB en cada deploy</p>
    </div>
  </div>
</div>

---

# Costes <span class="inline-block bg-black text-white px-2 py-1">invisibles</span>

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

# Ejemplos de workloads <span class="inline-block bg-black text-white px-2 py-1">single-AZ</span> válidos

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

# Tabla <span class="inline-block bg-black text-white px-2 py-1">comparativa</span>: AWS vs Azure vs Scaleway

| Provider | Inter-Zone Traffic |
|----------|-------------------|
| AWS | <span class="text-red-500">€0.01/GB</span> |
| Azure | <span class="text-green-500">Incluido</span> |
| Scaleway | <span class="text-green-500">Modelos más predecibles</span> |
<div class="mt-6 text-center text-sm uppercase tracking-wide opacity-60">
  NETWORKING
</div>

---



<div class="text-center mb-2" style="font-size: 0.875rem;"><span>La <span class="inline-block bg-black text-white px-1.5 py-0.5" style="font-size: 0.75rem;">solución</span></span></div>

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

# Herramientas que <span class="inline-block bg-black text-white px-2 py-1">ayudan</span>

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
