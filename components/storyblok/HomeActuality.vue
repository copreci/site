<script setup lang="ts">
const props = defineProps({ blok: Object })

const localePath = useLocalePath()

const highlights_left = computed(() => {
    return [
        {
            title: props.blok?.highlights[0]?.content?.title,
            image: props.blok?.highlights[0]?.content?.image,
            description: props.blok?.highlights[0]?.content?.description,
            to: localePath(`/${props.blok?.highlights[0]?.full_slug}`),
        },
    ]
})

const highlights_right = computed(() => {
    return [
        {
            title: props.blok?.highlights[1]?.content?.title,
            image: props.blok?.highlights[1]?.content?.image,
            description: props.blok?.highlights[1]?.content?.description,
            to: localePath(`/${props.blok?.highlights[1]?.full_slug}`),
        },
        {
            title: props.blok?.highlights[2]?.content?.title,
            image: props.blok?.highlights[2]?.content?.image,
            description: props.blok?.highlights[2]?.content?.description,
            to: localePath(`/${props.blok?.highlights[2]?.full_slug}`),
        },
    ]
})
</script>

<template>
    <section
        v-if="blok"
        class="copreci-section copreci-section--gray"
    >
        <UContainer>
            <div class="copreci-grid">
                <div class="col-span-6">
                    <header class="copreci-header copreci-text">
                        <h2>
                            {{ blok.title }}
                        </h2>
                    </header>
                </div>
            </div>
            <div class="copreci-grid copreci-grid--gap-sm">
                <div
                    v-gsap.whenVisible.stagger.delay-300.slow.from="{ opacity: 0, y: 200 }"
                    class="col-span-5 max-h-full"
                >
                    <div
                        v-for="item in highlights_left"
                        :key="item.title"
                        class="copreci_card"
                    >
                        <NuxtLink
                            :to="item.to"
                            class="copreci_card__image"
                        >
                            <img
                                :src="item.image.filename"
                                :alt="item.image.alt"
                            >
                        </NuxtLink>
                        <div class="copreci_card__content">
                            <h3>
                                <NuxtLink :to="item.to">
                                    {{ item.title }}
                                </NuxtLink>
                            </h3>
                            <div class="copreci_card__content-rich">
                                <StoryblokRichText
                                    :doc="item.description"
                                />
                            </div>
                            <div class="copreci-ellipsis">
                                ...
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-span-7">
                    <div
                        v-gsap.whenVisible.stagger.delay-300.slow.from="{ opacity: 0, y: 200 }"
                        class="flex flex-col gap-y-6"
                    >
                        <div
                            v-for="(item) in highlights_right"
                            :key="item.title"
                            class="copreci_card copreci_card--row"
                        >
                            <NuxtLink
                                :to="item.to"
                                class="copreci_card__image"
                            >
                                <img
                                    :src="item.image.filename"
                                    :alt="item.image.alt"
                                >
                            </NuxtLink>
                            <div class="copreci_card__content">
                                <h3>
                                    <NuxtLink :to="item.to">
                                        {{ item.title }}
                                    </NuxtLink>
                                </h3>
                                <div class="copreci_card__content-rich">
                                    <StoryblokRichText
                                        :doc="item.description"
                                    />
                                </div>

                                <div class="copreci-ellipsis">
                                    ...
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="mt-20">
                <UButton
                    :to="localePath('/actualidad')"
                    :label="blok.more"
                    trailing-icon="i-heroicons-arrow-long-right"
                />
            </div>
        </UContainer>
    </section>
</template>
