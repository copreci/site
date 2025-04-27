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
    >
        <div class="border-t border-b border-copreci-500">
            <UContainer>
                <div class="copreci-grid">
                    <div class="relative col-span-6 py-20 bg-copreci-bg-light border-r border-copreci-500">
                        <div class="absolute top-0 right-full w-full h-full bg-copreci-bg-light" />
                        <div class="copreci-text copreci-text--sm pr-20">
                            <h2>{{ blok.title_left }}</h2>
                            <p>{{ blok.text_left }}</p>
                        </div>
                    </div>
                    <div class="col-span-6 py-20  pl-20">
                        <div class="copreci-text copreci-text--sm">
                            <h2>{{ blok.title_right }}</h2>
                            <p>{{ blok.text_right }}</p>
                            <div class="copreci-text__button">
                                <UButton
                                    :to="to"
                                    :label="blok.link_label"
                                    trailing-icon="i-heroicons-arrow-long-right"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </UContainer>
        </div>
        <div>
            <div>
                <img
                    v-gsap.whenVisible.from="{ opacity: 0, y: 100 }"
                    :src="blok.image.filename"
                    :alt="blok.image.alt"
                    class="w-full"
                >
            </div>
        </div>
    </section>
</template>
