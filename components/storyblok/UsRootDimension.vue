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
        class="copreci-section copreci-section--red"
    >
        <UContainer>
            <div class="copreci-grid">
                <div class="col-span-8">
                    <header class="copreci-text copreci-text--white">
                        <h2 v-gsap.whenVisible.animateText.slow.once>
                            {{ blok.title }}
                        </h2>
                        <div class="copreci-text__button">
                            <UButton
                                :to="to"
                                :label="blok.link_label"
                                variant="soft"
                                trailing-icon="i-heroicons-arrow-long-right"
                            />
                        </div>
                    </header>
                </div>
            </div>
        </UContainer>
    </section>
</template>
