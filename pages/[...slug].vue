<script setup lang="ts">
const { slug } = useRoute().params
const { locale } = useI18n()
const { $preview } = useNuxtApp()

const version = $preview ? 'draft' : 'published'

const url = slug && slug.length > 0 ? slug.join('/') : 'home'

const story = await useAsyncStoryblok(url.replace(/\/$/, ''),
    {
        version,
        language: locale.value,
        resolve_relations: 'HomeActuality.highlights',
        resolve_links: 'link',
    },
)
</script>

<template>
    <div>
        <StoryblokComponent
            v-if="story"
            :blok="story.content"
        />
    </div>
</template>
