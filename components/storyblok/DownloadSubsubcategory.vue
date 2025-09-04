<script setup lang="ts">
defineProps({ blok: Object })

const opened = ref(false)
</script>

<template>
    <div
        v-if="blok"
        :class="[
            'copreci-download__block-toggled mt-0',
        ]"
    >
        <button
            class="copreci-download__toggle text-base"
            @click="opened = !opened"
        >
            <span>{{ blok.title }}</span>
            <UIcon
                :name="opened ? 'i-heroicons-minus' : 'i-heroicons-plus'"
            />
        </button>
        <ul
            v-if="blok.docs && blok.docs.length && opened"
            class="mt-2.5 mb-6 copreci-download__downloads"
        >
            <li
                v-for="download in blok.docs"
                :key="download._uid"
            >
                <a
                    :href="download.filename"
                    class="copreci-download__link"
                    target="_blank"
                >
                    <img src="https://a.storyblok.com/f/336107/20x20/669e8234fe/download.svg">
                    <span>{{ useFilename(download) }}</span>
                </a>
            </li>
        </ul>
    </div>
</template>
