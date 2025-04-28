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
                <div class="col-span-6">
                    <header class="copreci-text copreci-text--sm copreci-header">
                        <h2>
                            {{ blok.title }}
                        </h2>
                        <h4 v-gsap.whenVisible.animateText.slow.once>
                            {{ blok.subtitle }}
                        </h4>
                    </header>
                </div>
            </div>
        </UContainer>
    </section>
</template>
