<script setup lang="ts">
defineProps({ blok: Object })
</script>

<template>
    <section
        v-if="blok"
        class="copreci-section copreci-section--gray"
    >
        <UContainer>
            <div class="copreci-grid">
                <div class="col-span-8">
                    <header class="copreci-text">
                        <h2>
                            {{ blok.title }}
                        </h2>
                        <p>
                            {{ blok.description }}
                        </p>
                    </header>
                </div>
            </div>
        </UContainer>
    </section>
</template>
