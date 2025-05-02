<script setup lang="ts">
defineProps({ blok: Object })
const { locale } = useI18n()
const route = useRoute()

/* const api = useStoryblokApi()

const article = ref<any>(null)

const fetchStory = async () => {
    const story = await api.getStory(route.fullPath, { language: locale.value })
    article.value = story.data.story
}

onMounted(async () => {
    await fetchStory()
}) */
</script>

<template>
    <article
        v-if="blok"
        class="actualidad-detalle py-20"
    >
        <UContainer>
            <header class="mb-10">
                <h1 class="fs-40/50 text-copreci-500 font-light">
                    {{ blok.title }}
                </h1>
            </header>
            <div>
                <img
                    v-gsap.whenVisible.from="{ opacity: 0, y: 200 }"
                    :src="blok.image.filename"
                    :alt="blok.image.alt"
                    class="w-full"
                >
            </div>
            <div class="mt-12">
                <div class="copreci-grid">
                    <div class="col-span-6">
                        <div class="copreci-text copreci-text--sm copreci-text--actuality">
                            <StoryblokRichText
                                :doc="blok.text_left"
                            />
                        </div>
                    </div>
                    <div class="col-span-6">
                        <div class="copreci-text copreci-text--sm copreci-text--actuality">
                            <StoryblokRichText
                                :doc="blok.text_right"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </UContainer>
    </article>
</template>
