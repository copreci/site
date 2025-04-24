<script setup lang="ts">
defineProps({
    blok: Object,
    index: Number,
})

const localePath = useLocalePath()
</script>

<template>
    <Motion
        v-if="blok"
        as="div"
        :initial="{ opacity: 0, y: 100 }"
        :while-in-view="{ opacity: 1, y: 0 }"
        :transition="{ duration: 0.5, ease: 'easeOut', delay: index ? index * 0.1 : 0 }"
    >
        <NuxtLink
            :to="localePath(`/${blok.link.cached_url}`)"
            class="block h-[230px] overflow-hidden mb-6"
        >
            <Motion
                as="img"
                :src="blok.image.filename"
                :alt="blok.image.alt"
                class="w-full h-full object-cover hover:opacity-95"
            />
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
    </Motion>
</template>
