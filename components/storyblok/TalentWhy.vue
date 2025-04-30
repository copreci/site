<script setup lang="ts">
defineProps({
    blok: Object,
})
</script>

<template>
    <section
        v-if="blok"
        class="py-32 copreci-section--red max-[769px]:py-20"
    >
        <UContainer>
            <header class="copreci-text copreci-header copreci-text--white">
                <h2>
                    {{ blok.title }}
                </h2>
            </header>
            <div class="w-8/12">
                <div class="grid grid-cols-12 gap-10 max-[769px]:grid-cols-1 max-[769px]:gap-y-4.5">
                    <div
                        v-for="item in blok.items"
                        :key="item.id"
                        class="col-span-4 text-white"
                    >
                        <p
                            v-gsap.whenVisible.animateText.slow.once
                            class="fs-45/60 font-bold"
                        >
                            {{ item.data }}
                        </p>
                        <p class="fs-30/32">
                            {{ item.text }}
                        </p>
                    </div>
                </div>
            </div>
        </UContainer>
    </section>
</template>
