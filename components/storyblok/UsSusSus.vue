<script setup lang="ts">
const props = defineProps({ blok: Object })

const { locale } = useI18n()
const localePath = useLocalePath()

const to = computed(() => {
    if (locale.value === 'es') {
        return localePath(`/${props.blok?.link.cached_url}`)
    }
    else {
        return localePath(props.blok?.link.cached_url)
    }
})
</script>

<template>
    <section
        v-if="blok"
        class="copreci-section copreci-section--unpadded border-b border-copreci-500"
    >
        <div
            v-if="!blok.reversed"
            class="copreci-grid"
        >
            <div class="pl-screen col-span-8 copreci-column-padding">
                <header class="copreci-text copreci-header">
                    <h2 v-gsap.whenVisible.animateText.slow.once>
                        {{ blok.title }}
                    </h2>
                </header>
                <div class="copreci-grid">
                    <div class="col-span-6">
                        <div class="copreci-text copreci-text--sm">
                            <p>
                                {{ blok.text_left }}
                            </p>
                        </div>
                    </div>
                    <div class="col-span-6">
                        <div class="copreci-text copreci-text--sm">
                            <p>
                                {{ blok.text_right }}
                            </p>
                            <div
                                v-if="blok.link_label"
                                class="copreci-text__button"
                            >
                                <UButton
                                    :to="to"
                                    :label="blok.link_label"
                                    trailing-icon="i-heroicons-arrow-long-right"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-span-4 relative">
                <div class="w-full h-full flex items-center justify-center bg-copreci-bg-light">
                    <img
                        v-gsap.whenVisible.from="{ opacity: 0, x: '100%' }"
                        :src="blok.image.filename"
                        :alt="blok.image.alt"
                        class="w-full h-full absolute object-cover"
                    >
                </div>
            </div>
        </div>
        <div
            v-else
            class="copreci-grid gap-y-0"
        >
            <div class="col-span-4 relative">
                <div class="w-full h-full flex items-center justify-end bg-copreci-bg-light">
                    <img
                        v-gsap.whenVisible.from="{ opacity: 0, x: '-100%' }"
                        :src="blok.image.filename"
                        :alt="blok.image.alt"
                        class="w-full h-full absolute object-cover"
                    >
                </div>
            </div>
            <div class="pr-screen col-span-8 copreci-column-padding order-2 max-[769px]:pl-screen">
                <header class="copreci-text copreci-header">
                    <h2 v-gsap.whenVisible.animateText.slow.once>
                        {{ blok.title }}
                    </h2>
                </header>
                <div class="copreci-grid">
                    <div class="col-span-6">
                        <div class="copreci-text copreci-text--sm">
                            <p>
                                {{ blok.text_left }}
                            </p>
                        </div>
                    </div>
                    <div class="col-span-6">
                        <div class="copreci-text copreci-text--sm">
                            <p>
                                {{ blok.text_right }}
                            </p>
                            <div
                                v-if="blok.link_label"
                                class="copreci-text__button"
                            >
                                <UButton
                                    :to="to"
                                    :label="blok.link_label"
                                    trailing-icon="i-heroicons-arrow-long-right"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
