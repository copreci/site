<script setup lang="ts">
defineProps({ blok: Object })
</script>

<template>
    <article
        v-if="blok"
        class="legap"
    >
        <section class="copreci-section border-b border-copreci-500">
            <UContainer>
                <header class="copreci-text">
                    <h1>{{ blok.title }}</h1>
                </header>
            </UContainer>
        </section>
        <section class="copreci-section">
            <UContainer>
                <div class="copreci-text copreci-text--legal copreci-text--sm">
                    <StoryblokRichText
                        :doc="blok.content"
                    />
                </div>
            </UContainer>
        </section>
    </article>
</template>
