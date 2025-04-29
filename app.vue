<script setup lang="ts">
const { $preview } = useNuxtApp()
const { locale, locales } = useI18n()
const { state } = useAppStore()

const version = $preview ? 'draft' : 'published'

const { data: app } = await useFetch(() => '/api/app', {
    query: {
        slug: 'app',
        version: version,
        language: locale.value,
        resolve_links: 'url',
    },
})

if (app.value) {
    state.strings = app.value.content.strings.reduce((acc: any, s: any) => {
        acc[s.key] = s.text
        return acc
    }, {})
    state.logo = app.value.content.logo
    state.logo_white = app.value.content.logo_white
    state.logo_mondragon = app.value.content.logo_mondragon
    state.menu = app.value.content.menu
    state.ssmm = app.value.content.ssmm
    state.legal = app.value.content.legal
}

const alternateUrls = computed(() => {
    return locales.value.map((l) => {
        return {
            rel: 'alternate',
            url: `${useRequestURL().origin}/${l}`,
            hreflang: l,
        }
    })
})

/* useHead({
    script: [
        {
            id: 'tc-jswidget-script',
            type: 'application/javascript',
            src: 'https://careers.talentclue.com/sites/static/widget/jswidget.min.js',
            tagPosition: 'bodyClose',
        },

    ],
}) */

/* useHead({
    htmlAttrs: {
        lang: locale.value,
    },
    title: app.value?.content?.seo_title ?? 'Chocolate Scorecard',
    meta: [
        {
            name: 'description',
            content: app.value?.content?.seo_description ?? 'Chocolate Scorecard',
        },
        {
            name: 'og:title',
            content: app.value?.content?.seo_title ?? 'Chocolate Scorecard',
        },
        {
            name: 'og:description',
            content: app.value?.content?.seo_description ?? 'Chocolate Scorecard',
        },
        {
            name: 'og:image',
            content: app.value?.content?.seo_image.filename ?? 'Chocolate Scorecard',
        },
        {
            name: 'og:url',
            content: useRequestURL().origin,
        },
        {
            name: 'og:site_name',
            content: app.value?.content?.seo_title ?? 'Chocolate Scorecard',
        },
        {
            name: 'og:type',
            content: 'website',
        },
    ],
    link: [
        {
            rel: 'canonical',
            href: useRequestURL().origin,
        },
        {
            rel: 'icon',
            href: '/favicon.ico',
        },
        {
            rel: 'apple-touch-icon',
            sizes: '180x180',
            href: '/apple-touch-icon.png',
        },
        {
            rel: 'icon',
            type: 'image/png',
            sizes: '32x32',
            href: '/favicon-32x32.png',
        },
        {
            rel: 'icon',
            type: 'image/png',
            sizes: '32x32',
            href: '/favicon-16x16.png',
        },
        ...alternateUrls.value as any,
    ],
    script: [
        {
            innerHTML: '(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({\'gtm.start\':new Date().getTime(),event:\'gtm.js\'});var f=d.getElementsByTagName(s)[0], j=d.createElement(s),dl=l!=\'dataLayer\'?\'&l=\'+l:\'\';j.async=true;j.src= \'https://www.googletagmanager.com/gtm.js?id=\'+i+dl;f.parentNode.insertBefore(j,f); })(window,document,\'script\',\'dataLayer\',\'GTM-KWPT2MTQ\');',
        },
        {
            async: true,
            src: 'https://www.googletagmanager.com/gtag/js?id=G-Y4KCY2ZL8K',
            tagPosition: 'bodyClose',
        },
        {
            innerHTML: 'window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag(\'js\', new Date()); gtag(\'config\', \'G-Y4KCY2ZL8K\');',
            tagPosition: 'bodyClose',
        },
    ],
    noscript: [
        {
            innerHTML: '<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-KWPT2MTQ" height="0" width="0" style="display:none;visibility:hidden"></iframe>',
            tagPosition: 'bodyOpen',
        },
    ],
}) */

onBeforeMount(() => {
    useGSAP().registerPlugin(scrollTo)
})
</script>

<template>
    <UApp>
        <NuxtLoadingIndicator color="oklch(63.545% 0.24999 27.522)" />
        <NuxtLayout>
            <NuxtPage />
        </NuxtLayout>
    </UApp>
</template>
