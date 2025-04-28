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
                    <div class="copreci-text">
                        <p>
                            {{ blok.text_left }}
                        </p>
                    </div>
                </div>
                <div class="col-span-6">
                    <div class="copreci-text">
                        <p>
                            {{ blok.text_right }}
                        </p>
                    </div>
                </div>
            </div>
        </UContainer>
    </section>
</template>
