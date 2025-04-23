// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: [
        '@nuxt/eslint',
        '@nuxt/fonts',
        '@nuxt/image',
        '@nuxt/ui',
        '@pinia/nuxt',
        '@nuxtjs/i18n',
        'motion-v/nuxt',
        '@vueuse/nuxt',
        '@storyblok/nuxt',
    ],
    components: {
        dirs: [
            {
                path: '~/components/storyblok',
                global: true,
            },
        ],
    },
    imports: {
        dirs: [
            'stores',
        ],
    },
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
        locales: [{
            code: 'es',
            name: 'Español',
        }, {
            code: 'eu',
            name: 'Euskera',
        }, {
            code: 'en',
            name: 'Inglés',
        }],
        defaultLocale: 'es',
    },
    storyblok: {
        accessToken: import.meta.env.NUXT_PUBLIC_STORYBLOK_ACCESS_TOKEN,
        apiOptions: { cache: { type: 'memory', clear: 'auto' } },
        componentsDir: '~/components',
    },
})
