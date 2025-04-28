<script setup lang="ts">
defineProps({ blok: Object })

const { state } = useAppStore()
</script>

<template>
    <section
        v-if="blok"
        class="copreci-section copreci-section--gray"
    >
        <UContainer>
            <div class="copreci-grid">
                <div class="col-span-7">
                    <header class="copreci-text copreci-text--sm copreci-header">
                        <h2>
                            {{ blok.title }}
                        </h2>
                    </header>
                </div>
            </div>
            <template v-if="blok.columns">
                <div class="copreci-text">
                    <div class="columns">
                        <div
                            v-for="column in blok.columns"
                            :key="column._uid"
                            class="w-1/2"
                        >
                            <h5 class="mb-4">
                                {{ column.title }}
                            </h5>
                            <p>{{ column.text }}</p>
                        </div>
                    </div>
                </div>
            </template>
            <div class="copreci-grid">
                <div class="col-span-6">
                    <div class="copreci-text">
                        <p>
                            {{ blok.text_left }}
                        </p>
                    </div>
                </div>
                <div class="col-span-6">
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
