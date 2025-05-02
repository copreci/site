<script setup lang="ts">
defineProps({ blok: Object })
</script>

<template>
    <div
        v-if="blok"
        class="col-span-4 text-white flex flex-col gap-y-6"
    >
        <div class="h-[90px] flex items-start justify-start">
            <img
                :src="blok.icon.filename"
                :alt="blok.icon.alt"
            >
        </div>
        <header>
            <h3 class="fs-22/26 font-bold">
                {{ blok.title }}
            </h3>
        </header>
        <div>
            <p class="fs-16/20 font-light">
                {{ blok.description }}
            </p>
        </div>
        <div>
            <UButton
                :to="`/${blok.link.story.full_slug}`"
                :label="blok.link_label"
                trailing-icon="i-heroicons-arrow-long-right"
                variant="link"
                size="lg"
                class="text-white hover:text-white/80"
            />
        </div>
    </div>
</template>
