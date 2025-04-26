<script setup lang="ts">
defineProps({
    blok: Object,
    index: Number,
})

const localePath = useLocalePath()
</script>

<template>
    <div
        v-if="blok"
    >
        <NuxtLink
            :to="localePath(`/${blok.link.cached_url}`)"
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
                    :to="localePath(`/${blok.link.cached_url}`)"
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
