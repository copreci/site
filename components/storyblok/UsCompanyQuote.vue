<script setup lang="ts">
defineProps({ blok: Object })
</script>

<template>
    <section
        v-if="blok"
        class="copreci-section copreci-section--gray"
    >
        <UContainer>
            <div class="inline-flex flex-col text-copreci-500">
                <p
                    v-gsap.whenVisible.animateText.slow.once
                    class="fs-60/60 text-center font-light"
                >
                    "{{ blok.quote }}"
                </p>
            </div>
        </UContainer>
    </section>
</template>
