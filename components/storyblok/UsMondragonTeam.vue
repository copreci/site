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
                <div class="col-span-12">
                    <header class="copreci-text copreci-text--sm copreci-header">
                        <h2 v-gsap.whenVisible.animateText.slow.once>
                            {{ blok.title }}
                        </h2>
                    </header>
                </div>
            </div>
            <div class="copreci-grid">
                <div class="col-span-6">
                    <div class="copreci-text copreci-text--sm">
                        <p>
                            {{ blok.text }}
                        </p>
                    </div>
                </div>
            </div>
        </UContainer>
    </section>
</template>
