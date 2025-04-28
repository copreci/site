<script setup lang="ts">
defineProps({ blok: Object })
</script>

<template>
    <div
        v-if="blok"
        class="col-span-4"
    >
        <div class="h-[230px] mb-6">
            <img
                :src="blok.image.filename"
                :alt="blok.image.alt"
                class="w-full h-full object-cover"
            >
        </div>
        <h5 class="fs-20/28 mb-4 last:mb-0">
            {{ blok.title }}
        </h5>
        <p
            v-if="blok.description"
            class="fs-16/24 font-light"
        >
            {{ blok.description }}
        </p>
    </div>
</template>
