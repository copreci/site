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
                    <header class="copreci-text copreci-text--sm copreci-header copreci-text-h3-as-h4">
                        <h3 v-gsap.whenVisible.animateText.slow.once>
                            {{ blok.title }}
                        </h3>
                    </header>
                </div>
            </div>
            <div
                v-gsap.whenVisible.stagger.once.from="{ opacity: 0, y: 100, stagger: 0.25 }"
                class="flex flex-wrap -m-8"
            >
                <div
                    v-for="item in blok.items"
                    :key="item._uid"
                    class="w-1/3 p-8 max-[641px]:w-1/2"
                >
                    <h5 class="mb-4 fs-22/26 font-bold text-copreci-500 ">
                        {{ item.title }}
                    </h5>
                    <p class="fs-16/24">
                        {{ item.text }}
                    </p>
                </div>
            </div>
        </UContainer>
    </section>
</template>
