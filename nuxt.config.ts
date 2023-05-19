// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    ssr: false,
    typescript: {
        shim: false,
        strict: true
    },
    modules: [
        '@nuxtjs/tailwindcss',
        'nuxt-icon'
    ],
    tailwindcss: {
        cssPath: '~/assets/css/tailwind.css',
        configPath: 'tailwind.config.js',
        exposeConfig: false,
        injectPosition: 0,
        viewer: true,
    },
})
