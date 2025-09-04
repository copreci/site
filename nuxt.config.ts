// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: [
        '@nuxt/eslint',
        '@nuxt/fonts',
        '@nuxt/image',
        '@nuxt/ui',
        '@pinia/nuxt',
        '@nuxtjs/i18n',
        '@vueuse/nuxt',
        '@storyblok/nuxt',
        'v-gsap-nuxt',
        '@nuxt/scripts',
        'nuxt-anchorscroll',
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
        storyblokAccessToken: '',
        resendApiKey: '',
    },
    compatibilityDate: '2025-04-02',
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
    scripts: {
        registry: {
            googleAnalytics: {
                id: 'G-6NCMHXF9XJ',
            },
            googleTagManager: {
                id: 'GTM-N9GNMK9',
            },
        },
    },
    storyblok: {
        accessToken: process.env.NUXT_STORYBLOK_ACCESS_TOKEN,
        apiOptions: { cache: { type: 'memory', clear: 'auto' } },
        componentsDir: '~/components',
    },
})
