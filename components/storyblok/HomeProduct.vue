<script setup lang="ts">
defineProps({
    blok: Object,
    index: Number,
})
</script>

<template>
    <div
        v-if="blok"
    >
        <NuxtLink
            :to="`/${blok.link.story.full_slug}`"
            class="block h-[230px] overflow-hidden mb-6"
        >
            <img
                :src="blok.image.filename"
                :alt="blok.image.alt"
                class="w-full h-full object-cover hover:opacity-95"
            >
        </NuxtLink>
        <header>
            <h3>
                <NuxtLink
                    :to="`/${blok.link.story.full_slug}`"
                    class="group flex items-center gap-x-2.5 fs-20/28"
                >
                    <span>{{ blok.name }}</span>
                    <UIcon
                        name="i-heroicons-arrow-long-right"
                        class="text-copreci-500 group-hover:translate-x-1 transition-transform duration-300"
                    />
                </NuxtLink>
            </h3>
        </header>
    </div>
</template>
