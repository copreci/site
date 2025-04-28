<script setup lang="ts">
defineProps({ blok: Object })
</script>

<template>
    <section
        v-if="blok"
        class="copreci-section copreci-section--gray border-t border-b border-copreci-500"
    >
        <UContainer>
            <div class="copreci-grid items-center">
                <div class="col-span-6">
                    <header class="copreci-text copreci-text--sm copreci-header">
                        <h2>{{ blok.title }}</h2>
                    </header>
                </div>
                <div class="col-span-6">
                    <div class="copreci-text copreci-text--sm">
                        <p>{{ blok.text }}</p>
                    </div>
                </div>
            </div>
        </UContainer>
    </section>
</template>
