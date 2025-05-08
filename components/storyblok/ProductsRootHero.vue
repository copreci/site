<script setup lang="ts">
defineProps({ blok: Object })
</script>

<template>
    <section
        v-if="blok"
        class="relative h-[calc(100vh-105px)] flex flex-col"
    >
        <div class="h-full w-full absolute top-0 left-0 z-[-1]">
            <img
                v-gsap.from="{ y: 100, opacity: 0 }"
                :src="blok.image.filename"
                :alt="blok.image.alt"
                class="w-full h-full object-cover"
            >
        </div>
        <UContainer class="flex-1 flex flex-col justify-center">
            <header
                v-gsap.delay-300.stagger.from="{ opacity: 0, x: -40 }"
                class="flex-1 flex flex-col justify-center max-w-[60%] text-white"
            >
                <h2
                    class="mb-9 fs-60/60 font-light"
                >
                    {{ blok.title }}
                </h2>
                <h1 class="fs-20/28">
                    {{ blok.subtitle }}
                </h1>
            </header>
            <div
                v-gsap.delay-300.from="{ opacity: 0, y: 100 }"
                class="bg-copreci-500 px-16 py-6 max-[1281px]:px-6 max-[769px]:bg-transparent max-[769px]:py-0 max-[769px]:px-0"
            >
                <div
                    v-gsap.delay-500.stagger.from="{ opacity: 0, x: -40 }"
                    class="grid grid-cols-12 gap-x-3 max-[769px]:grid-cols-1 max-[769px]:gap-y-1"
                >
                    <div
                        v-for="item in blok.children"
                        :key="item._uid"
                        class="col-span-4 border-r pl-12 border-white last:border-r-0 flex space-x-6 max-[1025px]:border-none max-[1025px]:pl-0 max-[769px]:flex max-[769px]:items-center max-[769px]:bg-copreci-500 max-[769px]:px-4.5 max-[769px]:py-2.5"
                    >
                        <div class="shrink-0">
                            <img
                                :src="item.icon.filename"
                                :alt="item.icon.alt"
                                class="max-[1367px]:max-h-[40px] max-[1367px]:max-w-[60px]"
                            >
                        </div>
                        <div class="flex flex-col justify-between">
                            <NuxtLink
                                :to="`/${item.link.story.full_slug}`"
                                class="group text-white flex items-center gap-x-6"
                            >
                                <span class="fs-22/32 font-bold">{{ item.name }}</span>
                                <UIcon
                                    name="i-heroicons-arrow-long-right"
                                    class="group-hover:translate-x-1 transition-transform duration-300"
                                />
                            </NuxtLink>
                            <p class="fs-16/20 text-white font-light">
                                {{ item.text }}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </UContainer>
    </section>
</template>
