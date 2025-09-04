<script setup lang="ts">
defineProps({ blok: Object })

const opened = ref(false)
</script>

<template>
    <div
        v-if="blok"
        class="copreci-download__block-toggled"
    >
        <button
            class="copreci-download__toggle !mb-6"
            @click="opened = !opened"
        >
            <span>{{ blok.title }}</span>
            <UIcon
                :name="opened ? 'i-heroicons-minus-circle' : 'i-heroicons-plus-circle'"
            />
        </button>
        <div
            v-if="opened"
            class="flex flex-col"
        >
            <ul
                v-if="blok.docs && blok.docs.length"
                class="mb-6 copreci-download__downloads"
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
            <template v-if="blok.subsubcategories && blok.subsubcategories.length">
                <StoryblokComponent
                    v-for="item in blok?.subsubcategories"
                    :key="item._uid"
                    v-editable="item"
                    :blok="item"
                />
            </template>
        </div>
    </div>
</template>
