# Presentación: ¿Por qué tu gasto cloud no para de subir?

Presentación creada con **Slidev** basada en el script de la charla.

## 🚀 Ejecutar con Slidev (Recomendado)

### Instalación

```bash
# Instalar dependencias
npm install
```

### Desarrollo

```bash
# Iniciar servidor de desarrollo
npm run dev
```

Esto abrirá automáticamente `http://localhost:3030` en tu navegador.

### Exportar

```bash
# Exportar a PDF
npm run export

# Build estático
npm run build
```

## 📝 Editar la presentación

Edita el archivo `slides.md` - es Markdown puro, mucho más fácil de mantener que HTML.

Cada slide está separado por `---`.

## 🎨 Personalización

La presentación usa:
- **Tema:** Light mode
- **Fuente:** Fira Code
- **Colores:** 
  - Rojo (#ff4444) para gastos
  - Verde (#44ff44) para ahorros
  - h1: #2d3748 (gris oscuro)
  - h2: #667eea (morado/azul)
  - h3: #4a5568 (gris medio)

Puedes editar `slides.md` directamente o modificar `slidev.config.ts` para cambiar la configuración.

## ⌨️ Controles de navegación

- **Flechas** ← → : Navegar entre diapositivas
- **Espacio** o **↓** : Siguiente diapositiva
- **ESC** : Vista general de todas las diapositivas
- **F** : Pantalla completa
- **S** : Modo presentador (con notas)
- **G** : Ir a una diapositiva específica

## 📁 Estructura del proyecto

```
ASC-talk/
├── slides.md           # Presentación Slidev (Markdown)
├── slidev.config.ts   # Configuración de Slidev
├── styles.css         # Estilos personalizados
├── package.json       # Dependencias Node.js
├── script.md          # Script original de la charla
└── README.md          # Este archivo
```

