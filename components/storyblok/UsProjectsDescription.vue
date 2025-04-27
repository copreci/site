<script setup lang="ts">
defineProps({ blok: Object })
</script>

<template>
    <section
        v-if="blok"
        class="copreci-section "
    >
        <UContainer>
            <header class="copreci-text copreci-header max-w-[75%]">
                <h2>
                    {{ blok.title }}
                </h2>
            </header>
            <div class="copreci-grid">
                <div class="col-span-6">
                    <div class="copreci-text copreci-text--sm">
                        <StoryblokRichText :doc="blok.description_left" />
                    </div>
                </div>
                <div class="col-span-6">
                    <div class="copreci-text copreci-text--sm">
                        <StoryblokRichText :doc="blok.description_right" />
                    </div>
                </div>
            </div>
        </UContainer>
    </section>
</template>
