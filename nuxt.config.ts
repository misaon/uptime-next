import {defineNuxtConfig} from 'nuxt'
import Icons from 'unplugin-icons/vite'

export default defineNuxtConfig({
    ssr: false,
    modules: [
        '@nuxtjs/tailwindcss',
        '@nuxtjs/color-mode',
    ],
    colorMode: {
        classSuffix: ''
    },
    vite: {
        plugins: [
            Icons({
                compiler: 'vue3',
            }),
        ],
    }
})
