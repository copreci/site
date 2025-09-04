<script setup lang="ts">
defineProps({ blok: Object })
</script>

<template>
    <div
        v-if="blok"
        class="col-span-4 copreci-download__col"
    >
        <div class="copreci-download__block">
            <header>
                <h4>
                    {{ blok.title }}
                </h4>
            </header>
            <ul
                v-if="blok.docs && blok.docs.length"
                class="copreci-download__downloads"
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
            <template v-if="blok.subcategories && blok.subcategories.length">
                <StoryblokComponent
                    v-for="item in blok?.subcategories"
                    :key="item._uid"
                    v-editable="item"
                    :blok="item"
                />
            </template>
        </div>
    </div>
</template>
