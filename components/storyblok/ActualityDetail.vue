<script setup lang="ts">
const { locale } = useI18n()
const route = useRoute()

const api = useStoryblokApi()

const article = ref<any>(null)

const fetchStory = async () => {
    const story = await api.getStory(route.fullPath, { language: locale.value })
    article.value = story.data.story
}

onMounted(async () => {
    await fetchStory()
})
</script>

<template>
    <article
        v-if="article"
        class="actualidad-detalle py-20"
    >
        <UContainer>
            <header class="mb-10">
                <h1 class="fs-40/50 text-copreci-500 font-light">
                    {{ article.content.title }}
                </h1>
            </header>
            <div>
                <img
                    v-gsap.whenVisible.from="{ opacity: 0, y: 200 }"
                    :src="article.content.image.filename"
                    :alt="article.content.image.alt"
                    class="w-full"
                >
            </div>
            <div class="mt-12">
                <div class="copreci-grid">
                    <div class="col-span-6">
                        <StoryblokRichText
                            :doc="article.content.text_left"
                        />
                    </div>
                    <div class="col-span-6">
                        <StoryblokRichText
                            :doc="article.content.text_right"
                        />
                    </div>
                </div>
            </div>
        </UContainer>
    </article>
</template>
