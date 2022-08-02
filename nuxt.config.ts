import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    head: {
      charset: 'utf-8'
    },
    ssr: false,
    typescript: {
        shim: false
    },
    modules: [    
      '@nuxt/content',
      '@nuxtjs/tailwindcss',
      '@nuxt/image-edge',
    ],
    content: {
      markdown: {
        toc: {
          depth: 3,
          searchDepth: 3
        }
      },
      highlight: {
        theme: 'dracula-soft'
      }
    },
    build: {
        postcss: {
          postcssOptions: {
            plugins: {
              tailwindcss: {},
              autoprefixer: {},
            },
          },
        },
      },
})
