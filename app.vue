<script setup lang="ts">
const { $preview } = useNuxtApp()
const { locale } = useI18n()
const { state } = useAppStore()

const version = $preview ? 'draft' : 'published'

const app = await useAsyncStoryblok('app',
    {
        version,
        language: locale.value,
        resolve_relations: 'HomeActuality.highlights, SEO.seo',
        resolve_links: 'url',
    },
)

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
    state.downloads = `/${app.value.content.download_page.story.full_slug}`
    state.about_page = `/${app.value.content.about_page.story.full_slug}`
    state.projects_page = `/${app.value.content.projects_page.story.full_slug}`
    state.talent_page = `/${app.value.content.talent_page.story.full_slug}`
    state.actuality_page = `/${app.value.content.actuality_page.story.full_slug}`
    state.products_page = `/${app.value.content.products_page.story.full_slug}`
    state.form_legal = app.value.content.form_legal
    state.seo = app.value.content.seo[0]
}

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
