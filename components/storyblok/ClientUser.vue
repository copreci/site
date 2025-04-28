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
                <div class="col-span-12">
                    <header class="copreci-text copreci-header">
                        <h2>
                            {{ blok.title }}
                        </h2>
                    </header>
                </div>
            </div>
            <div class="copreci-grid">
                <div class="col-span-4">
                    <div class="copreci-text copreci-text--sm">
                        <p>
                            {{ blok.text_left }}
                        </p>
                    </div>
                </div>
                <div class="col-span-4">
                    <div class="copreci-text copreci-text--sm">
                        <p>
                            {{ blok.text_middle }}
                        </p>
                    </div>
                </div>
                <div class="col-span-4">
                    <div class="copreci-text copreci-text--sm">
                        <p>
                            {{ blok.text_right }}
                        </p>
                    </div>
                </div>
            </div>
        </UContainer>
    </section>
</template>
