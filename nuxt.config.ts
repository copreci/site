// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: [
        '@nuxt/eslint',
        '@nuxt/fonts',
        '@nuxt/image',
        '@nuxt/ui',
        '@pinia/nuxt',
        '@nuxtjs/i18n',
    ],
    devtools: { enabled: true },
    css: ['~/assets/css/main.css'],
    ui: {
        colorMode: false,
    },
    runtimeConfig: {
        public: {
            storyblokAccessToken: '',
        },
    },
    compatibilityDate: '2024-11-01',
    eslint: {
        config: {
            stylistic: {
                quotes: 'single',
                semi: false,
                indent: 4,
                commaDangle: 'always-multiline',
                quoteProps: 'as-needed',
                braceStyle: undefined,
                arrowParens: true,
            },
        },
    },
    fonts: {
        families: [
            { name: 'Hanken Grotesk', provider: 'google' },
        ],
    },
    i18n: {
        detectBrowserLanguage: false,
        strategy: 'prefix_except_default',
        locales: ['es', 'eu', 'en', 'tr', 'zh', 'cs'],
        defaultLocale: 'es',
    },
})
