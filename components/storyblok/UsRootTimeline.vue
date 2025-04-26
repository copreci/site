<script setup lang="ts">
import AutoScroll from 'embla-carousel-auto-scroll'
import emblaCarouselVue from 'embla-carousel-vue'
import { WheelGesturesPlugin } from 'embla-carousel-wheel-gestures'

defineProps({ blok: Object })

const [emblaRef, emblaApi] = emblaCarouselVue({
    loop: true,
    dragFree: true,

}, [
    WheelGesturesPlugin(),
    AutoScroll({ playOnInit: false }),
])
</script>

<template>
    <section
        v-if="blok"
        class="bg-copreci-bg-light pt-12 pb-20"
    >
        <div
            ref="emblaRef"
            class="embla"
        >
            <div class="embla__container h-[300px]">
                <div
                    v-for="item in blok.items"
                    :key="item._uid"
                    class="embla__slide"
                >
                    <div
                        v-if="item.component == 'UsRootTimelineDate'"
                        class="relative w-[450px] h-full flex items-center justify-center"
                    >
                        <div class="relative w-full h-px bg-copreci-500">
                            <div class="absolute bottom-0 left-0 w-full flex flex-col items-center justify-center translate-y-[7px]">
                                <p class="mb-1 fs-18/24 font-bold">
                                    {{ item.year }}
                                </p>
                                <div class="flex flex-col justify-center items-center">
                                    <div class="w-[18px] h-px bg-copreci-500" />
                                    <div class="w-px h-[47px] bg-copreci-500 rounded-full" />
                                </div>
                                <div class="w-[14px] h-[14px] bg-copreci-500 rounded-full" />
                            </div>
                            <div class="absolute top-4 left-0 w-full text-center px-9 whitespace-pre-wrap">
                                <p class="fs-18/24">
                                    {{ item.text }}
                                </p>
                            </div>
                        </div>
                    </div>
                    <div
                        v-else
                        class="flex items-center"
                    >
                        <div

                            class="border border-copreci-500"
                        >
                            <img

                                :src="item.image.filename"
                                :alt="item.image.alt"
                            >
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
  .embla {
    overflow: hidden;
  }
  .embla__container {
    display: flex;
    align-items: center;
  }
  .embla__slide {
    flex: 0 0 auto;
    min-width: 0;
  }
</style>
