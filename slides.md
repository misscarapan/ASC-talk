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

<div class="text-center mb-6">
  <h1 class="text-4xl font-light tracking-widest text-black mb-2"><span class="inline-block bg-black text-white px-2 py-1">Sobre mí</span></h1>
</div>

<div class="grid grid-cols-3 gap-6 mt-8">
  <div class="p-6 bg-gradient-to-br from-gray-50 to-gray-100/80 border border-gray-200/40 rounded-lg shadow-lg text-center">
    <img src="/images/ozona.png" alt="Ozona Tech" class="h-16 mx-auto mb-4 object-contain">
    <h3 class="text-lg font-semibold mb-2 text-gray-800">SRE</h3>
    <p class="text-sm text-gray-600 leading-relaxed">Diseño y opero infraestructura en Azure</p>
  </div>
  
  <div class="p-6 bg-gradient-to-br from-gray-50 to-gray-100/80 border border-gray-200/40 rounded-lg shadow-lg text-center">
    <img src="/images/resizes-logo-png.png" alt="Resizes" class="h-16 mx-auto mb-4 object-contain">
    <div class="mb-4">
    </div>
    <h3 class="text-lg font-semibold mb-2 text-gray-800">Contributor</h3>
    <p class="text-sm text-gray-600 mb-2 leading-relaxed">Plataforma agnóstica para desarrolladores</p>
      <span class="text-lg font-semibold text-gray-800">DASH ❤️</span>
    <p class="text-sm text-gray-600 mb-2 leading-relaxed">Aplicación para desplegar en la nube sin tocar infra</p>

  </div>
  
  <div class="p-6 bg-gradient-to-br from-gray-50 to-gray-100/80 border border-gray-200/40 rounded-lg shadow-lg text-center">
    <img src="/images/step4ward.png" alt="Step4ward" class="h-16 mx-auto mb-4 object-contain">
    <h3 class="text-lg font-semibold mb-2 text-gray-800">Mentora</h3>
    <p class="text-sm text-gray-600 leading-relaxed">Comunidad para acompañar a mujeres en el sector tech</p>
  </div>
</div>

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
    <img src="/images/costura.jpg" alt="Costura" class="h-64 w-full object-contain">
  </div>
  <div class="col-span-2 flex justify-center items-center">
    <img src="/images/rightsizing.png" alt="Rightsizing diagram" class="h-64 w-full object-contain">
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
    <img src="/images/networking.png" alt="Networking costs" class="w-full h-80 object-contain" style="background: transparent;">
  </div>
</div>

---

<div class="text-center mb-6">
  <h1 class="text-4xl font-light tracking-widest text-black mb-2">Costes <span class="inline-block bg-black text-white px-2 py-1">invisibles</span></h1>
</div>

<div class="max-w-5xl mx-auto mt-8">
  <div class="grid grid-cols-3 gap-6">
    <div class="p-5 bg-red-50 border-l-4 border-red-500 rounded-lg">
      <h3 class="text-lg font-semibold text-red-700 mb-2">Inter-AZ traffic</h3>
      <p class="text-3xl font-bold text-red-600 mb-3">€0.01/GB</p>
      <p class="text-sm mb-2">1TB/día = €300/mes </p>
      <p class="text-sm font-semibold text-gray-700">Suena a poco, hasta que mueves <span class="text-red-600 font-semibold">terabytes cada día</span>.</p>
    </div>
    <div class="p-5 bg-red-50 border-l-4 border-red-500 rounded-lg">
      <h3 class="text-lg font-semibold text-red-700 mb-2">NAT Gateway</h3>
      <p class="text-2xl font-bold text-red-600 mb-2">€0.045/GB procesado</p>
      <p class="text-xs text-gray-600 mb-3">+ €0.048/hora solo por existir</p>
      <p class="text-sm font-semibold mb-2">Con 1TB diario:</p>
      <p class="text-red-600 text-3xl font-bold">≈ €1,400/mes</p>
      <p class="text-xs text-gray-500 mt-1">Solo en procesamiento de NAT</p>
    </div>
    <div class="p-5 bg-red-50 border-l-4 border-red-500 rounded-lg">
      <h3 class="text-lg font-semibold text-red-700 mb-3">LLMs & model serving</h3>
      <ul class="text-sm space-y-2 list-none" style="list-style: none; padding-left: 0;">
        <li style="list-style: none;">🤖 Endpoints multi-AZ moviendo GB de requests</li>
        <li style="list-style: none;">📥 Descargar modelos de 5GB desde S3 en cada deploy</li>
        <li style="list-style: none;" class="text-red-600 mt-3 font-semibold">Todo va sumando</li>
      </ul>
    </div>
  </div>
</div>

<div class="mt-6 text-center text-sm uppercase tracking-wide opacity-60">
  NETWORKING
</div>
---

<div class="text-center mb-6">
  <h1 class="text-4xl font-light tracking-widest text-black mb-2">Alternativas y <span class="inline-block bg-black text-white px-2 py-1">comparativa</span></h1>
</div>

<div class="max-w-5xl mx-auto mt-8">
  <div class="grid grid-cols-2 gap-8">
    <div class="p-6 bg-blue-50 border-l-4 border-blue-500 rounded-lg">
      <h3 class="text-xl font-semibold mb-4 text-blue-700">Workloads single-AZ válidos</h3>
      <ul class="text-base space-y-2 list-none" style="list-style: none; padding-left: 0;">
        <li style="list-style: none;">✅ Entornos efímeros</li>
        <li style="list-style: none;">✅ Jobs batch que pueden reintentar</li>
        <li style="list-style: none;">✅ Ambientes de testing</li>
      </ul>
    </div>
    
  <div class="p-6 bg-gradient-to-br from-gray-50 to-gray-100/80 border border-gray-200/40 rounded-lg shadow-lg">
      <h3 class="text-xl font-semibold mb-4 text-gray-800">Comparativa providers</h3>
      <div class="space-y-3">
        <div class="flex justify-between items-center pb-2 border-b border-gray-200">
          <span class="font-semibold text-gray-700">AWS</span>
          <span class="text-red-600 font-bold">€0.01/GB</span>
        </div>
        <div class="flex justify-between items-center pb-2 border-b border-gray-200">
          <span class="font-semibold text-gray-700">Azure</span>
          <span class="text-green-600 font-bold">Incluido</span>
        </div>
        <div class="flex justify-between items-center">
          <span class="font-semibold text-gray-700">Scaleway</span>
          <span class="text-green-600 font-bold text-sm">Modelos más predecibles</span>
        </div>
      </div>
    </div>
  </div>
  
  <div class="mt-8">
    <div class="p-4 bg-green-50 border-l-4 border-green-500 rounded text-center">
      <p class="text-xl font-semibold text-gray-800">No todo necesita multi-AZ, y no todos los providers cobran igual</p>
    </div>
  </div>
</div>

<div class="mt-6 text-center text-sm uppercase tracking-wide opacity-60">
  NETWORKING
</div>

---



<div class="text-center mb-6">
  <h1 class="text-4xl font-light tracking-widest text-black mb-2">La <span class="inline-block bg-black text-white px-2 py-1">solución</span></h1>
</div>

<div class="max-w-4xl mx-auto mt-8">
  <ul class="text-lg space-y-4 list-none" style="list-style: none; padding-left: 0;">
    <li style="list-style: none;">✅ <strong>VPC endpoints:</strong> Para servicios AWS (S3, DynamoDB) evitan NAT Gateway y sus costes.</li>
    <li style="list-style: none;">✅ <strong>Segmentar por criticidad:</strong> Single-AZ para non-prod.</li>
    <li style="list-style: none;">✅ <strong>Arquitectura consciente:</strong> Misma AZ para ervicios que se comunican mucho.</li>
    <li style="list-style: none;">✅ <strong>Caching local:</strong> Modelos ML en la instancia, evitar descargas en cada deploy</li>
    <li style="list-style: none;">✅ <strong>Providers alternativos:</strong> Evaluar pricing de networking según workload</li>
  </ul>

  <div class="mt-8 p-4 bg-green-50 border-l-4 border-green-500 rounded text-center">
    <p class="text-xl font-semibold text-gray-800">El mejor tráfico es el que no se genera</p>
  </div>
</div>
<div class="mt-6 text-center text-sm uppercase tracking-wide opacity-60">
  NETWORKING
</div>
---

<div class="text-center mb-6">
  <h1 class="text-4xl font-light tracking-widest text-black mb-2">"¿Por dónde empezamos?"</h1>
</div>

<div class="max-w-6xl mx-auto mt-8">
  <div class="grid grid-cols-3 gap-6">
    <div class="p-5 bg-green-50 border-l-4 border-green-500 rounded-lg">
      <h3 class="text-lg font-semibold mb-3 text-green-700">Prioridad 1</h3>
      <p class="text-sm text-green-600 mb-4 font-semibold">Visibilidad</p>
      <ul class="text-sm space-y-2 list-none" style="list-style: none; padding-left: 0;">
        <li style="list-style: none;">🏷️ Tagging obligatorio</li>
        <li style="list-style: none;">📊 Cost Explorer y alertas</li>
        <li style="list-style: none;">🔍 Script recursos huérfanos</li>
      </ul>
    </div>
    
  <div class="p-5 bg-blue-50 border-l-4 border-blue-500 rounded-lg">
      <h3 class="text-lg font-semibold mb-3 text-blue-700">Prioridad 2</h3>
      <p class="text-sm text-blue-600 mb-4 font-semibold">Quick Wins</p>
      <ul class="text-sm space-y-2 list-none" style="list-style: none; padding-left: 0;">
        <li style="list-style: none;">♻️ Lifecycle policies</li>
        <li style="list-style: none;">⏸️ Auto-shutdown GPUs</li>
        <li style="list-style: none;">📈 Auditar recursos &lt;20%</li>
      </ul>
    </div>
    
  <div class="p-5 bg-amber-50 border-l-4 border-amber-500 rounded-lg">
      <h3 class="text-lg font-semibold mb-3 text-amber-700">Prioridad 3</h3>
      <p class="text-sm text-amber-600 mb-4 font-semibold">Arquitectura</p>
      <ul class="text-sm space-y-2 list-none" style="list-style: none; padding-left: 0;">
        <li style="list-style: none;">🔗 VPC endpoints</li>
        <li style="list-style: none;">🌐 Revisar multi-AZ</li>
        <li style="list-style: none;">🤖 Retención modelos ML</li>
      </ul>
    </div>
  </div>
</div>

<div class="mt-6 text-center text-sm uppercase tracking-wide opacity-60">
  Recomendaciones
</div>
---

<div class="text-center mb-6">
  <h1 class="text-4xl font-light tracking-widest text-black mb-2">IMPACTO <span class="inline-block bg-black text-white px-2 py-1">ESPERADO</span></h1>
</div>

<div class="max-w-5xl mx-auto mt-8">
  <div class="grid grid-cols-2 gap-6">
    <div class="p-5 bg-green-50 border-l-4 border-green-500 rounded-lg">
      <div class="flex items-center gap-3 mb-2">
        <span class="text-2xl">📊</span>
        <h3 class="text-lg font-semibold text-gray-800">Rightsizing</h3>
      </div>
      <p class="text-3xl font-bold text-green-600">20-40%</p>
      <p class="text-sm text-gray-600 mt-1">instancias</p>
    </div>
    
  <div class="p-5 bg-emerald-50 border-l-4 border-emerald-600 rounded-lg">
      <div class="flex items-center gap-3 mb-2">
        <span class="text-2xl">⏸️</span>
        <h3 class="text-lg font-semibold text-gray-800">Auto-shutdown GPUs</h3>
      </div>
      <p class="text-3xl font-bold text-emerald-700">60-80%</p>
      <p class="text-sm text-gray-600 mt-1">compute</p>
    </div>
    
  <div class="p-5 bg-emerald-50 border-l-4 border-emerald-600 rounded-lg">
      <div class="flex items-center gap-3 mb-2">
        <span class="text-2xl">♻️</span>
        <h3 class="text-lg font-semibold text-gray-800">Lifecycle policies</h3>
      </div>
      <p class="text-3xl font-bold text-emerald-700">40-60%</p>
      <p class="text-sm text-gray-600 mt-1">storage</p>
    </div>
    
  <div class="p-5 bg-emerald-50 border-l-4 border-emerald-600 rounded-lg">
      <div class="flex items-center gap-3 mb-2">
        <span class="text-2xl">🔗</span>
        <h3 class="text-lg font-semibold text-gray-800">VPC endpoints</h3>
      </div>
      <p class="text-3xl font-bold text-emerald-700">Hasta 90%</p>
      <p class="text-sm text-gray-600 mt-1">NAT</p>
    </div>
  </div>
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



<div class="h-full flex flex-col items-center justify-center space-y-12">
  <div>
    <h1 class="text-6xl font-bold tracking-widest text-black mb-4">¡GRACIAS!</h1>
  </div>
  
  <div class="flex flex-col items-center">
    <p class="text-xl mb-6 font-semibold text-gray-700">Accede a las slides</p>
    <img src="https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=https://pluto-star-3.resiz.es/" alt="QR Code para slides" class="w-64 h-64 mx-auto border-2 border-black rounded-lg p-4 bg-white shadow-lg">
    <p class="text-sm text-gray-500 mt-4 font-mono">pluto-star-3.resiz.es</p>
  </div>
</div>
