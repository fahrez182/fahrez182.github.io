import { readFileSync } from 'node:fs'
import { resolve } from 'node:path'
import { defineConfig } from 'vite'

const root = import.meta.dirname

const partials = () => ({
  name: 'html-partials',
  transformIndexHtml: {
    order: 'pre',
    handler: (html) =>
      html.replace(/<!--\s*include:([\w-]+)\s*-->/g, (_, name) =>
        readFileSync(resolve(root, 'src/partials', `${name}.html`), 'utf-8'),
      ),
  },
})

export default defineConfig({
  base: '/',
  plugins: [partials()],
  build: {
    rollupOptions: {
      input: {
        home: resolve(root, 'index.html'),
        terms: resolve(root, 'redcorner/terms.html'),
        privacy: resolve(root, 'redcorner/privacy.html'),
      },
    },
  },
})
