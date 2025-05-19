<script setup lang="ts">
defineProps({ blok: Object })

const { state } = useAppStore()
</script>

<template>
    <section v-if="blok">
        <div class="bg-copreci-500">
            <UContainer class="text-center">
                <UButton
                    :to="blok.file.filename"
                    target="_blank"
                    :label="useString(state, 'product_download')"
                    variant="link"
                    size="lg"
                    trailing-icon="i-heroicons-arrow-long-down"
                    class="text-white hover:text-white/80"
                />
            </Ucontainer>
        </div>
    </section>
</template>
