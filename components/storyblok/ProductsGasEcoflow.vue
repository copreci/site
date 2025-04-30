<script setup lang="ts">
defineProps({ blok: Object })
</script>

<template>
    <section
        v-if="blok"
        class=""
    >
        <div class="bg-copreci-bg-light py-12">
            <UContainer>
                <div>
                    <img
                        v-gsap.whenVisible.from="{ opacity: 0, y: 100 }"
                        :src="blok.logo.filename"
                        :alt="blok.logo.alt"
                        class="mx-auto"
                    >
                </div>
            </UContainer>
        </div>
        <div class="py-20">
            <UContainer>
                <div class="copreci-grid">
                    <div class="col-span-6">
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
        </div>
    </section>
</template>
