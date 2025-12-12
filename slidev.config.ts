import { defineConfig } from '@slidev/cli'

export default defineConfig({
  theme: 'default',
  fonts: {
    sans: 'Fira Code',
    serif: 'Fira Code',
    mono: 'Fira Code',
  },
  colorSchema: 'light',
  highlighter: 'shiki',
  lineNumbers: false,
  transition: 'slide-left',
})

