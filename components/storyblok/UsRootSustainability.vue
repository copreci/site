<script setup lang="ts">
const props = defineProps({ blok: Object })

const { locale } = useI18n()
const localePath = useLocalePath()

const to = computed(() => {
    if (locale.value === 'es') {
        return localePath(`/${props.blok?.sus_link.cached_url}`)
    }
    return localePath(props.blok?.sus_link.cached_url)
})
</script>

<template>
    <section
        v-if="blok"
        class="relative w-full h-full"
    >
        <div class="w-full h-full copreci-grid absolute top-0 left-0 z-0 max-[769px]:gap-y-0!">
            <div class="col-span-6">
                <div class="relative w-[calc(100%+48px)] h-full max-[769px]:w-full">
                    <img
                        v-gsap.whenVisible.delay-300.from="{ opacity: 0 }"
                        :src="blok.sus_image.filename"
                        :alt="blok.sus_image.alt"
                        class="w-full h-full object-cover absolute top-0 left-0"
                    >
                </div>
            </div>
            <div class="relative col-span-6">
                <img
                    v-gsap.whenVisible.delay-300.from="{ opacity: 0 }"
                    :src="blok.data_image.filename"
                    :alt="blok.data_image.alt"
                    class="w-full h-full object-cover object-left absolute top-0 left-0"
                >
            </div>
        </div>
        <UContainer class="relative z-1">
            <div class="copreci-grid py-20">
                <div class="col-span-6 pr-12 max-[769px]:pr-0 max-[769px]:pb-20">
                    <div class="copreci-text copreci-text--white">
                        <h2>
                            {{ blok.sus_title }}
                        </h2>
                        <div class="copreci-text__button">
                            <UButton
                                :to="to"
                                :label="blok.sus_link_label"
                                trailing-icon="i-heroicons-arrow-long-right"
                                variant="solid"
                                class="text-black"
                            />
                        </div>
                    </div>
                </div>
                <div class="col-span-6 pl-12 max-[769px]:pl-0 max-[769px]:pt-20">
                    <div class="copreci-grid copreci-grid--gap-sm">
                        <div class="col-span-6 max-[769px]:w-[45%]">
                            <div class="copreci-text">
                                <h2>
                                    {{ blok.data_title }}
                                </h2>
                                <div class="copreci-text__button">
                                    <UButton
                                        :label="blok.data_link_label"
                                        trailing-icon="i-heroicons-arrow-long-down"
                                        variant="link"
                                        size="lg"
                                    />
                                </div>
                            </div>
                        </div>
                        <div class="col-span-6 z-[-1]" />
                    </div>
                </div>
            </div>
        </UContainer>
    </section>
</template>
