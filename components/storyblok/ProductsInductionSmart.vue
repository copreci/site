<script setup lang="ts">
defineProps({ blok: Object })
</script>

<template>
    <section
        v-if="blok"
        :id="blok.id"
        class="copreci-section"
    >
        <div class="relative">
            <UContainer>
                <div class="copreci-grid items-center">
                    <div class="col-span-12">
                        <div class="copreci-text copreci-header">
                            <h2>{{ blok.title }}</h2>
                        </div>
                    </div>
                    <div class="col-span-5 py-20 max-[769px]:col-span-12 max-[769px]:py-0">
                        <div class="copreci-text copreci-text--sm">
                            <p>{{ blok.text_1 }}</p>
                            <template v-if="blok.columns">
                                <div class="columns">
                                    <div
                                        v-for="column in blok.columns"
                                        :key="column._uid"
                                        class="w-1/2"
                                    >
                                        <h5>{{ column.title }}</h5>
                                        <p>{{ column.text }}</p>
                                    </div>
                                </div>
                            </template>
                            <p>{{ blok.text_2 }}</p>
                        </div>
                    </div>
                    <div class="col-span-7">
                        <div class="relative">
                            <img
                                v-gsap.whenVisible.from="{ opacity: 0, y: 100 }"
                                :src="blok.image.filename"
                                :alt="blok.image.alt"
                                class="w-full"
                            >
                        </div>
                    </div>
                </div>
            </UContainer>
        </div>
    </section>
</template>
