<script setup lang="ts">
const { slug } = useRoute().params
const { locale } = useI18n()
const { $preview } = useNuxtApp()
const { state } = useAppStore()
const version = $preview ? 'draft' : 'published'

const url = slug && slug.length > 0 ? slug.join('/') : 'home'

const story = await useAsyncStoryblok(url.replace(/\/$/, ''),
    {
        version,
        language: locale.value,
        resolve_relations: 'HomeActuality.highlights',
        resolve_links: 'url',
    },
)

const langNames: any = {
    es: 'Español',
    eu: 'Euskera',
    en: 'English',
}

if (story.value) {
    state.slugs = []

    if (story.value.translated_slugs) {
        state.slugs.push({
            name: langNames.es,
            slug: story.value.default_full_slug == 'home' ? '/' : `/${story.value.default_full_slug}`,
        })

        story.value.translated_slugs.map((obj) => {
            state.slugs.push({
                name: langNames[obj.lang],
                slug: obj.path == obj.lang ? `/${obj.lang}` : obj.lang == 'es' ? `/${obj.path}` : `/${obj.lang}/${obj.path}`,
            })
        })
    }
}

const { scrollToAnchor } = useAnchorScroll({
    toAnchor: {
        scrollOptions: {
            behavior: 'smooth',
            offsetTop: -75,
        },
    },
})

if (useRoute().hash) {
    setTimeout(() => {
        const id = useRoute().hash.replace('#', '')
        console.log(id)
        scrollToAnchor(id)
    }, 100)
}

const alternateUrls = computed(() => {
    const urls: any[] = []
    urls.push({
        rel: 'alternate',
        url: story.value.default_full_slug == 'home' ? `${useRequestURL().origin}/` : `${useRequestURL().origin}/es/${story.value.default_full_slug}`,
        hreflang: 'es',
    })
    if (story.value && story.value.translated_slugs) {
        story.value.translated_slugs.map((obj) => {
            urls.push({
                rel: 'alternate',
                url: obj.path == obj.lang ? `${useRequestURL().origin}/${obj.lang}` : `${useRequestURL().origin}/${obj.lang}/${obj.path}`,
                hreflang: obj.lang,
            })
        })
    }
    return urls
})

const pageTitle = computed(() => {
    if (story.value.content.SEO && story.value.content.SEO[0].title) {
        return story.value.content.SEO[0].title
    }
    if (locale.value == 'es') {
        return story.value.name
    }

    return story.value.translated_slugs?.find((slug: any) => {
        return slug.lang == locale.value
    })?.name
})

const pageOgTitle = computed(() => {
    if (story.value.content.SEO && story.value.content.SEO[0].og_title) {
        return story.value.content.SEO[0].og_title
    }
    return `${state.seo.og_title} ${pageTitle.value}`
})

useHead({
    title: `${state.seo.title}${pageTitle.value}`,
    meta: [
        {
            name: 'description',
            content: story.value.content.SEO && story.value.content.SEO[0].description ? story.value.content.SEO[0].description : state.seo.description,
        },
        {
            name: 'keywords',
            content: story.value.content.SEO && story.value.content.SEO[0].keywords ? story.value.content.SEO[0].keywords : state.seo.keywords,
        },
        {
            name: 'robots',
            content: story.value.content.SEO && story.value.content.SEO[0].robots ? story.value.content.SEO[0].robots : state.seo.robots,
        },
        {
            name: 'og:type',
            content: story.value.content.SEO && story.value.content.SEO[0].og_type ? story.value.content.SEO[0].og_type : state.seo.og_type,
        },
        {
            name: 'og:title',
            content: pageOgTitle.value,
        },
        {
            name: 'og:description',
            content: story.value.content.SEO && story.value.content.SEO[0].og_description ? story.value.content.SEO[0].og_description : state.seo.og_description,
        },
        {
            name: 'og:image',
            content: story.value.content.SEO && story.value.content.SEO[0].og_image?.filename ? story.value.content.SEO[0].og_image?.filename : state.seo.og_image?.filename,
        },
        {
            name: 'og:url',
            content: story.value.content.SEO && story.value.content.SEO[0].og_url ? story.value.content.SEO[0].og_url : state.seo.og_url,
        },
        {
            name: 'twitter:card',
            content: story.value.content.SEO && story.value.content.SEO[0].twitter_card ? story.value.content.SEO[0].twitter_card : state.seo.twitter_card,
        },
        {
            name: 'twitter:title',
            content: pageOgTitle.value,
        },
        {
            name: 'twitter:description',
            content: story.value.content.SEO && story.value.content.SEO[0].og_description ? story.value.content.SEO[0].og_description : state.seo.og_description,
        },
        {
            name: 'twitter:image',
            content: story.value.content.SEO && story.value.content.SEO[0].twitter_image?.filename ? story.value.content.SEO[0].twitter_image?.filename : state.seo.twitter_image?.filename,
        },
        {
            name: 'twitter:site',
            content: story.value.content.SEO && story.value.content.SEO[0].twitter_site ? story.value.content.SEO[0].twitter_site : state.seo.twitter_site,
        },
        {
            name: 'twitter:creator',
            content: story.value.content.SEO && story.value.content.SEO[0].twitter_creator ? story.value.content.SEO[0].twitter_creator : state.seo.twitter_creator,
        },
        {
            name: 'twitter:site:id',
            content: story.value.content.SEO && story.value.content.SEO[0].twitter_site_id ? story.value.content.SEO[0].twitter_site_id : state.seo.twitter_site_id,
        },
    ],
    link: [
        {
            rel: 'canonical',
            href: story.value.default_full_slug == 'home' ? `${useRequestURL().origin}/` : `${useRequestURL().origin}/${story.value.default_full_slug}`,
        },
        ...alternateUrls.value,
        {
            rel: 'icon',
            href: '/favicon.ico',
        },
        {
            rel: 'icon',
            sizes: '16x16',
            type: 'image/png',
            href: '/favicon-16x16.png',
        },
        {
            rel: 'icon',
            sizes: '32x32',
            type: 'image/png',
            href: '/favicon-32x32.png',
        },
        {
            rel: 'apple-touch-icon',
            type: 'image/png',
            href: '/apple-touch-icon.png',
        },
        {
            rel: 'android-chrome',
            type: 'image/png',
            sizes: '192x192',
            href: '/android-chrome-192x192.png',
        },
        {
            rel: 'android-chrome',
            type: 'image/png',
            sizes: '512x512',
            href: '/android-chrome-512x512.png',
        },
    ],
})
</script>

<template>
    <div>
        <StoryblokComponent
            v-if="story"
            :blok="story.content"
        />
    </div>
</template>
