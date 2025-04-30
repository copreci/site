<script setup lang="ts">
defineProps({ blok: Object })

const { state } = useAppStore()
</script>

<template>
    <section
        v-if="blok"
        class="copreci-section--gray pt-20 pb-0"
    >
        <UContainer>
            <div class="copreci-grid">
                <div class="col-span-7">
                    <header class="copreci-text copreci-text--sm copreci-header">
                        <StoryblokRichText :doc="blok.header" />
                    </header>
                </div>
            </div>
            <template v-if="blok.columns">
                <div class="copreci-text">
                    <div class="columns max-[769px]:flex-wrap max-[769px]:-m-2.5 max-[769px]:space-x-0">
                        <div
                            v-for="column in blok.columns"
                            :key="column._uid"
                            class="w-1/2 max-[769px]:p-2.5"
                        >
                            <h5 class="mb-4">
                                {{ column.title }}
                            </h5>
                            <p>{{ column.text }}</p>
                        </div>
                    </div>
                </div>
            </template>
        </UContainer>
        <div class="mt-20 bg-copreci-500">
            <UContainer class="text-center">
                <UButton
                    to="/"
                    :label="useString(state, 'product_download')"
                    variant="link"
                    size="lg"
                    trailing-icon="i-heroicons-arrow-long-down"
                    class="text-white hover:text-white/80"
                />
            </Ucontainer>
        </div>
    </section>
</template>
