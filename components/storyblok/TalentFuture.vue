<script setup lang="ts">
defineProps({ blok: Object })
</script>

<template>
    <section
        v-if="blok"
        class="copreci-section"
    >
        <UContainer>
            <div class="copreci-grid">
                <div class="col-span-6">
                    <header class="copreci-text copreci-header">
                        <h2>{{ blok.title }}</h2>
                    </header>
                </div>
            </div>
            <div
                v-gsap.whenVisible.stagger.once.from="{ opacity: 0, y: 100, stagger: 0.25 }"
                class="copreci-grid"
            >
                <div
                    v-for="item in blok.items"
                    :key="item._uid"
                    class="col-span-4"
                >
                    <div>
                        <h4 class="mb-4 font-bold text-copreci-500 fs-22/26">
                            {{ item.title }}
                        </h4>
                        <p class="fs-16/20">
                            {{ item.text }}
                        </p>
                    </div>
                </div>
            </div>
        </UContainer>
    </section>
</template>
