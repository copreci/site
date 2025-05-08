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
        </UContainer>
    </section>
</template>
