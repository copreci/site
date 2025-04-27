<script setup lang="ts">
defineProps({ blok: Object })
</script>

<template>
    <section
        v-if="blok"
        class="relative overflow-hidden"
    >
        <img
            v-gsap.whenVisible.from="{ opacity: 0, scale: 1.1 }"
            :src="blok.image.filename"
            :alt="blok.image.alt"
            class="w-full"
        >
        <div class="w-full h-full absolute top-0 left-0 py-6 flex items-end justify-end">
            <UContainer>
                <div class="flex items-end justify-end">
                    <img
                        :src="blok.logo.filename"
                        :alt="blok.logo.alt"
                    >
                </div>
            </UContainer>
        </div>
    </section>
</template>
