<script setup lang="ts">
import emblaCarouselVue from 'embla-carousel-vue'

defineProps({ blok: Object })

const [emblaRef, emblaApi] = emblaCarouselVue({
    loop: false,
    inViewThreshold: 0.99,
})
const gsap = useGSAP()

const currentSlide = ref(0)

const onScrollTo = () => {
    gsap.to(window, {
        scrollTo: {
            y: '#talent-jobs',
            offsetY: 57,
        },
        duration: 1,
    })
}

onMounted(() => {
    if (emblaApi.value) emblaApi.value.on('slidesInView', () => {
        currentSlide.value = emblaApi.value?.slidesInView()[0] ?? 0
    })
})
</script>

<template>
    <section
        v-if="blok"
        class="copreci-section copreci-section--unpadded"
    >
        <div class="copreci-grid border-b border-copreci-500">
            <div class="pl-screen col-span-6 copreci-column-padding">
                <header
                    v-gsap.whenVisible.stagger.once.from="{ opacity: 0, x: -100, stagger: 0.25 }"
                    class="copreci-text"
                >
                    <h2>
                        {{ blok.title }}
                    </h2>
                    <h4>
                        {{ blok.subtitle }}
                    </h4>
                    <p>{{ blok.description }}</p>
                </header>
            </div>
            <div class="col-span-6 relative">
                <div class="w-full h-full flex items-center justify-center bg-copreci-bg-light max-[769px]:h-[50vw]">
                    <div
                        ref="emblaRef"
                        class="w-full h-full absolute top-0 left-0 overflow-hidden"
                    >
                        <div class="w-full h-full flex">
                            <div
                                v-for="item in blok.images"
                                :key="item.id"
                                class="flex-[0_0_100%]"
                            >
                                <img
                                    :src="item.filename"
                                    :alt="item.alt"
                                    class="w-full h-full object-cover"
                                >
                            </div>
                        </div>
                    </div>
                    <nav class="absolute bottom-3 left-0 w-full">
                        <ul class="flex justify-center gap-x-2.5">
                            <li
                                v-for="(item, index) in blok.images"
                                :key="item.id"
                            >
                                <button
                                    :class="[
                                        'w-[16px] h-[16px] flex items-center justify-center border border-copreci-500 rounded-full cursor-pointer',
                                        {
                                            'bg-transparent': currentSlide === index,
                                            'bg-white hover:bg-white/80': currentSlide !== index,
                                        },
                                    ]"
                                    @click="emblaApi?.scrollTo(index)"
                                >
                                    <span
                                        v-if="currentSlide === index"
                                        class="w-[10px] h-[10px] rounded-full bg-copreci-500"
                                    />
                                </button>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
        <div class="py-6 border-b border-copreci-500">
            <UContainer>
                <h1>
                    <button
                        class="flex items-center gap-x-4 fs-20/28 text-copreci-500 cursor-pointer hover:opacity-80"
                        @click="onScrollTo"
                    >
                        <span>
                            {{ blok.scrollto }}
                        </span>
                        <UIcon
                            class="size-6 font-light"
                            name="i-heroicons-arrow-down-circle"
                        />
                    </button>
                </h1>
            </UContainer>
        </div>
    </section>
</template>
