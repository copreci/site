<script setup lang="ts">
defineProps({ blok: Object })

const localePath = useLocalePath()
</script>

<template>
    <section
        v-if="blok"
        class="copreci-section copreci-section--gray"
    >
        <UContainer>
            <div class="copreci-grid">
                <div class="col-span-6">
                    <header class="copreci-text">
                        <h2>
                            {{ blok.title }}
                        </h2>
                    </header>
                </div>
                <div class="col-span-6">
                    <div class="copreci-text">
                        <p>
                            {{ blok.description }}
                        </p>
                        <div class="copreci-text__button">
                            <UButton
                                :to="localePath(`/${blok.link.cached_url}`)"
                                :label="blok.more"
                                trailing-icon="i-heroicons-arrow-long-right"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </UContainer>
    </section>
</template>
