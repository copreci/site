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
</script>

<template>
    <div>
        <StoryblokComponent
            v-if="story"
            :blok="story.content"
        />
    </div>
</template>
