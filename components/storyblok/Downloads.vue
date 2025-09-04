<script setup lang="ts">
const props = defineProps({ blok: Object })
</script>

<template>
    <article
        v-if="blok"
        class="downloads"
    >
        <section class="copreci-section">
            <UContainer>
                <div class="copreci-grid copreci-grid--gap-sm">
                    <div class="col-span-6">
                        <div class="copreci-text">
                            <h2>{{ props.blok?.title }}</h2>
                        </div>
                    </div>
                </div>
            </UContainer>
        </section>
        <StoryblokComponent
            v-for="item in blok?.sections"
            :key="item._uid"
            v-editable="item"
            :blok="item"
        />
    </article>
</template>
