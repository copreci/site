<script setup lang="ts">
defineProps({ blok: Object })
</script>

<template>
    <section
        v-if="blok"
        class="copreci-section copreci-section--unpadded"
    >
        <div class="copreci-grid tem">
            <div class="pl-screen col-span-6 copreci-column-padding flex items-center">
                <div class="copreci-text copreci-text--sm ">
                    <StoryblokRichText :doc="blok.text" />
                </div>
            </div>
            <div class="col-span-6 relative min-h-[50vh]">
                <div class="w-full h-full flex items-center justify-center bg-copreci-bg-light">
                    <img
                        v-gsap.whenVisible.from="{ opacity: 0, x: '100%' }"
                        :src="blok.image.filename"
                        :alt="blok.image.alt"
                        class="w-full h-full absolute object-cover"
                    >
                </div>
            </div>
        </div>
    </section>
</template>
