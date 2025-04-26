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
        class="relative w-full h-full"
    >
        <div class="relative w-full h-[90vh] overflow-hidden">
            <img
                v-gsap.whenVisible.delay-500.from="{ opacity: 0, scale: 1.1 }"
                :src="blok.image.filename"
                :alt="blok.image.alt"
                class="w-full h-full object-cover"
            >
            <div class="absolute top-0 left-0 w-full h-full py-20">
                <UContainer>
                    <header class="copreci-text">
                        <h2>
                            {{ blok.title }}
                        </h2>
                        <div class="copreci-text__button">
                            <UButton
                                :to="to"
                                :label="blok.link_label"
                                trailing-icon="i-heroicons-arrow-long-right"
                                variant="solid"
                            />
                        </div>
                    </header>
                </UContainer>
            </div>
        </div>
    </section>
</template>
