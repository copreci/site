<script setup lang="ts">
const props = defineProps({ blok: Object })
const { locale } = useI18n()
const localePath = useLocalePath()

const to = computed(() => {
    if (locale.value === 'es') {
        return localePath(`/${props.blok?.link.cached_url}`)
    }
    return localePath(props.blok?.link.cached_url)
})
</script>

<template>
    <section
        v-if="blok"
        class="copreci-section copreci-section--unpadded"
    >
        <div class="copreci-grid">
            <div class="pl-screen col-span-6 copreci-column-padding">
                <header class="copreci-text">
                    <h2>
                        {{ blok.title }}
                    </h2>
                    <div>
                        <img
                            :src="blok.logo.filename"
                            :alt="blok.logo.alt"
                        >
                    </div>
                    <div class="copreci-text__button">
                        <UButton
                            :to="to"
                            :label="blok.link_label"
                            trailing-icon="i-heroicons-arrow-long-right"
                            variant="link"
                            size="lg"
                        />
                    </div>
                </header>
            </div>
            <div class="col-span-6 relative">
                <div class="w-full h-full flex items-center justify-center bg-copreci-bg-light">
                    <img
                        v-gsap.whenVisible.duration-1000.from="{ opacity: 0, x: '100%' }"
                        :src="blok.image.filename"
                        :alt="blok.image.alt"
                        class="w-full h-full object-cover origin-left"
                    >
                </div>
            </div>
        </div>
    </section>
</template>
