<script setup lang="ts">
defineProps({ blok: Object })
</script>

<template>
    <section
        v-if="blok"
        class="copreci-section"
    >
        <UContainer>
            <div class="copreci-grid">
                <div class="col-span-8">
                    <header class="copreci-text">
                        <h2>
                            {{ blok.title }}
                        </h2>
                    </header>
                </div>
            </div>
        </UContainer>
    </section>
</template>
