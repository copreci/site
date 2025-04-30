<script setup lang="ts">
defineProps({ blok: Object })
</script>

<template>
    <section
        v-if="blok"
        class="border-b border-copreci-500 overflow-hidden"
    >
        <UContainer>
            <div class="grid grid-cols-12 gap-x-20 items-center max-[1025px]:gap-x-10 max-[641px]:grid-cols-1">
                <div class="col-span-4 h-full max-[1025px]:col-span-5 max-[641px]:col-span-12">
                    <div class="relative py-20 bg-copreci-500 h-full flex flex-col justify-center">
                        <div class="w-[1000px] h-full absolute top-0 right-full bg-copreci-500" />
                        <div class="mb-2.5">
                            <img
                                v-gsap.from="{ opacity: 0, y: 100 }"
                                :src="blok.icon.filename"
                                :alt="blok.icon.alt"
                                class="self-start"
                            >
                        </div>
                        <h1
                            v-gsap.delay-300.from="{ opacity: 0, x: -100 }"
                            class="fs-22/32 font-bold text-white"
                        >
                            {{ blok.name }}
                        </h1>
                    </div>
                </div>
                <div class="col-span-8 max-[1025px]:col-span-7 max-[641px]:col-span-12">
                    <div class="py-20">
                        <div class="copreci-page-header">
                            <h2>{{ blok.title }}</h2>
                            <p
                                v-gsap.whenVisible.animateText.slow.once
                                class="max-[769px]:whitespace-normal!"
                            >
                                {{ blok.subtitle }}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </UContainer>
    </section>
</template>
