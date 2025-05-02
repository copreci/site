<script setup lang="ts">
defineProps({ blok: Object })

const { locale } = useI18n()

const api = useStoryblokApi()

const page = ref(1)
const per_page = 12
const total = ref(0)
const loading = ref(false)

const results = ref<any[]>([])

const fetchStories = async () => {
    loading.value = true

    const stories = await api.getStories({
        starts_with: 'actualidad',
        is_startpage: false,
        page: page.value,
        per_page: per_page,
        language: locale.value,
        sort_by: 'content.date:desc',
        resolve_links: 'url',
    })

    loading.value = false

    if (stories.data) {
        total.value = stories.total
        results.value = [...results.value, ...stories.data.stories]
    }
}

const onLoadMore = async () => {
    page.value++
    await fetchStories()
}

onMounted(async () => {
    await fetchStories()
})
</script>

<template>
    <section
        v-if="blok"
        class="-mt-20 relative copreci-section copreci-section--unpadded"
    >
        <UContainer>
            <div
                v-if="results.length > 0"
                class="copreci-grid copreci-grid--gap-sm gap-y-8 pb-20"
            >
                <div
                    v-for="item in results"
                    :key="item.id"
                    v-gsap.whenVisible.from="{ opacity: 0, y: 200 }"
                    class="col-span-4 max-[1025px]:col-span-6"
                >
                    <div
                        class="copreci_card"
                    >
                        <NuxtLink
                            :to="`/${item.full_slug}`"
                            class="copreci_card__image"
                        >
                            <img
                                :src="item.content.image.filename"
                                :alt="item.content.image.alt"
                            >
                        </NuxtLink>
                        <div class="copreci_card__content copreci_card__content--sm">
                            <h3>
                                <NuxtLink :to="`/${item.full_slug}`">
                                    {{ item.content.title }}
                                </NuxtLink>
                            </h3>
                            <div class="copreci_card__content-rich">
                                <StoryblokRichText
                                    :doc="item.content.text_left"
                                />
                                <StoryblokRichText
                                    :doc="item.content.text_right"
                                />
                            </div>
                            <div class="copreci-ellipsis copreci-ellipsis--white">
                                ...
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div v-else>
                <div class="copreci-grid copreci-grid--gap-sm gap-y-8">
                    <div
                        v-for="i in per_page"
                        :key="i"
                        class="col-span-4"
                    >
                        <USkeleton
                            class="w-full h-[425px]"
                        />
                    </div>
                </div>
            </div>
            <div
                v-if="results.length < total"
                class="flex justify-center mb-20"
            >
                <UButton
                    :label="blok.more"
                    trailing-icon="i-heroicons-plus"
                    :loading="loading"
                    @click="onLoadMore"
                />
            </div>
        </UContainer>
    </section>
</template>
