<script setup lang="ts">
import emblaCarouselVue from 'embla-carousel-vue'

defineProps({ blok: Object })

const [emblaRef, emblaApi] = emblaCarouselVue({
    loop: true,
    inViewThreshold: 0.99,
})
</script>

<template>
    <section
        v-if="blok"
        :id="blok.id"
        class="copreci-section"
    >
        <UContainer>
            <header class="copreci-text copreci-header text-center">
                <h2 v-gsap.whenVisible.animateText.slow.once>
                    {{ blok.title }}
                </h2>
            </header>
            <div class="flex itesms-center space-x-20">
                <div class="mt-10">
                    <button
                        class="cursor-pointer hover:opacity-80"
                        @click="emblaApi?.scrollPrev()"
                    >
                        <UIcon
                            name="i-heroicons-arrow-long-left"
                            class="size-9 text-copreci-500"
                        />
                    </button>
                </div>
                <div class="flex-1">
                    <div
                        ref="emblaRef"
                        class="w-full overflow-hidden"
                    >
                        <div class="w-full h-full flex">
                            <div
                                v-for="item in blok.testimonials"
                                :key="item._uid"
                                class="flex-[0_0_100%]"
                            >
                                <p class="fs-25/30 text-center">
                                    {{ item.text }}
                                </p>
                                <div class="mt-16 flex items-center space-x-6 justify-center">
                                    <div
                                        v-for="person in item.people"
                                        :key="person._uid"
                                        class="flex flex-col items-center"
                                    >
                                        <img
                                            :src="person.portrait.filename"
                                            :alt="person.portrait.alt"
                                            class="w-[120px] mb-2.5 text-center"
                                        >
                                        <p class="fs-15/20 font-medium">
                                            {{ person.name }}
                                        </p>
                                        <p class="fs-15/20">
                                            {{ person.role }}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="mt-10">
                    <button
                        class="cursor-pointer hover:opacity-80"
                        @click="emblaApi?.scrollNext()"
                    >
                        <UIcon
                            name="i-heroicons-arrow-long-right"
                            class="size-9 text-copreci-500"
                        />
                    </button>
                </div>
            </div>
        </UContainer>
    </section>
</template>
