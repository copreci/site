<script setup lang="ts">
defineProps({ blok: Object })
</script>

<template>
    <section
        v-if="blok"
        class="copreci-section--gray"
    >
        <UContainer class="py-20">
            <div class="copreci-grid">
                <div class="col-span-12">
                    <header class="copreci-text copreci-header">
                        <h2>
                            {{ blok.title }}
                        </h2>
                    </header>
                </div>
            </div>
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
                    </div>
                </div>
            </div>
        </UContainer>
        <div>
            <img
                v-gsap.whenVisible.from="{ opacity: 0, y: 100 }"
                :src="blok.image.filename"
                :alt="blok.image.alt"
                class="w-full h-full object-cover"
            >
        </div>
    </section>
</template>
