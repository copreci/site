<script setup lang="ts">
defineProps({ blok: Object })
</script>

<template>
    <section
        v-if="blok"
        class="copreci-section copreci-section--red"
    >
        <UContainer>
            <div class="copreci-grid">
                <div class="col-span-8">
                    <div class="copreci-text copreci-text--white copreci-header">
                        <h2>{{ blok.title }}</h2>
                    </div>
                </div>
            </div>
            <div
                v-gsap.whenVisible.stagger.once.from="{ opacity: 0, y: 50, stagger: 0.4 }"
                class="grid grid-cols-12 gap-x-20"
            >
                <div
                    v-for="item in blok.items"
                    :key="item._uid"
                    class="col-span-3"
                >
                    <p class="fs-45/60 text-white font-medium">
                        {{ item.data }}
                    </p>
                    <p class="fs-30/32 text-white font-light whitespace-pre-wrap">
                        {{ item.text }}
                    </p>
                </div>
            </div>
        </UContainer>
    </section>
</template>
