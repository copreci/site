<script setup lang="ts">
defineProps({ blok: Object })

const localePath = useLocalePath()
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
                <h1
                    class="mb-9 fs-60/60 font-light"
                >
                    {{ blok.title }}
                </h1>
                <h2 class="fs-20/28">
                    {{ blok.subtitle }}
                </h2>
            </header>
            <div
                v-gsap.delay-300.from="{ opacity: 0, y: 100 }"
                class="bg-copreci-500 px-16 py-6"
            >
                <div
                    v-gsap.delay-500.stagger.from="{ opacity: 0, x: -40 }"
                    class="grid grid-cols-12 gap-x-3"
                >
                    <div
                        v-for="item in blok.children"
                        :key="item._uid"
                        class="col-span-4 border-r pl-12 border-white last:border-r-0 flex space-x-6"
                    >
                        <div class="shrink-0">
                            <img
                                :src="item.icon.filename"
                                :alt="item.icon.alt"
                            >
                        </div>
                        <div class="flex flex-col justify-between">
                            <NuxtLink
                                :to="localePath(`/${item.link.cached_url}`)"
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
