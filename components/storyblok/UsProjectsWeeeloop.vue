<script setup lang="ts">
defineProps({ blok: Object })
</script>

<template>
    <section
        v-if="blok"
        class="copreci-section copreci-section--gray"
    >
        <UContainer>
            <img
                v-gsap.whenVisible.from="{ opacity: 0, y: '100%' }"
                :src="blok.logo.filename"
                :alt="blok.logo.alt"
                class="mx-auto mix-blend-multiply"
            >
        </UContainer>
    </section>
</template>
