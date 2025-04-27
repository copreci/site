<script setup lang="ts">
defineProps({ blok: Object })
</script>

<template>
    <section
        v-if="blok"
        class="copreci-section copreci-section--gray"
    >
        <UContainer>
            <header class="copreci-text copreci-header">
                <h2>
                    {{ blok.title }}
                </h2>
            </header>
            <div class="copreci-grid">
                <div class="col-span-6">
                    <div class="copreci-text copreci-text--sm">
                        <p>{{ blok.description_left }}</p>
                    </div>
                </div>
                <div class="col-span-6">
                    <div class="copreci-text copreci-text--sm">
                        <p>{{ blok.description_right }}</p>
                    </div>
                </div>
            </div>
        </UContainer>
    </section>
</template>
