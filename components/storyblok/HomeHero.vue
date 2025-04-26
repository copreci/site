<script setup lang="ts">
import Fade from 'embla-carousel-fade'
import emblaCarouselVue from 'embla-carousel-vue'

const props = defineProps({ blok: Object })

const localePath = useLocalePath()

const [emblaRef1, emblaApi1] = emblaCarouselVue({}, [Fade()])
const [emblaRef2, emblaApi2] = emblaCarouselVue({
    loop: true,
})

const items = computed(() => {
    return [
        {
            id: 0,
            to: localePath('/productos/gas'),
            title: props.blok?.gas_title,
            description: props.blok?.gas_description,
            background: props.blok?.gas_background,
            image: props.blok?.gas_image,
            icon: props.blok?.gas_icon,
            button: props.blok?.gas_button,
            previous: {
                id: 2,
                title: props.blok?.induction_title,
            },
            next: {
                id: 1,
                title: props.blok?.engine_title,
            },
        },
        {
            id: 1,
            to: localePath('/productos/motores'),
            title: props.blok?.engine_title,
            description: props.blok?.engine_description,
            background: props.blok?.engine_background,
            image: props.blok?.engine_image,
            icon: props.blok?.engine_icon,
            button: props.blok?.engine_button,
            previous: {
                id: 0,
                title: props.blok?.gas_title,
            },
            next: {
                id: 2,
                title: props.blok?.induction_title,
            },
        },
        {
            id: 2,
            to: localePath('/productos/induccion'),
            title: props.blok?.induction_title,
            description: props.blok?.induction_description,
            background: props.blok?.induction_background,
            image: props.blok?.induction_image,
            icon: props.blok?.induction_icon,
            button: props.blok?.induction_button,
            previous: {
                id: 1,
                title: props.blok?.engine_title,
            },
            next: {
                id: 0,
                title: props.blok?.gas_title,
            },
        },
    ]
})

const active = ref(0)

watch(() => active.value, (value) => {
    emblaApi1?.value?.scrollTo(value)
    emblaApi2?.value?.scrollTo(value)
})
</script>

<template>
    <section
        v-if="blok"
        class="h-[calc(100vh-105px)]"
    >
        <div class="grid grid-cols-12 h-[calc(100vh-105px)]">
            <div class="relative col-span-8 bg-black flex">
                <div
                    ref="emblaRef1"
                    class="flex-1 embla h-[calc(100vh-105px)]"
                >
                    <div class="embla__container">
                        <div
                            v-for="item in items"
                            :key="item.id"
                            class="embla__slide h-[calc(100vh-105px)]"
                        >
                            <img
                                :src="item.background.filename"
                                :alt="item.background.alt"
                                class="w-full h-full object-cover"
                            >
                        </div>
                    </div>
                </div>
                <div class="flex flex-col gap-y-3 absolute py-9 pl-screen pr-18 w-full h-full top-0 left-0 text-white pointer-events-none">
                    <header class="flex-1 flex items-center">
                        <h1
                            v-gsap.whenVisible.animateText.slow.once
                            class="fs-60/60 font-light"
                        >
                            {{ blok.title }}
                        </h1>
                    </header>
                    <h2 class="fs-20/55">
                        {{ blok.claim }}
                    </h2>
                </div>
            </div>
            <div class="col-span-4 flex flex-col">
                <div class="pt-14 pb-12 bg-(--color-copreci-500)">
                    <nav class="px-9">
                        <ul class="flex items-center justify-between gap-x-4">
                            <li>
                                <button
                                    class="group flex items-center gap-x-2 text-white cursor-pointer"
                                    @click="active = items[active].previous.id"
                                >
                                    <UIcon
                                        name="i-heroicons-arrow-long-left"
                                        class="transition translate-x-0 group-hover:-translate-x-1"
                                    />
                                    <span class="fs-22/32 font-bold">{{ items[active].previous.title }}</span>
                                </button>
                            </li>
                            <li>
                                <button
                                    class="group flex items-center gap-x-2 text-white cursor-pointer"
                                    @click="active = items[active].next.id"
                                >
                                    <span class="fs-22/32 font-bold">{{ items[active].next.title }}</span>
                                    <UIcon
                                        name="i-lucide-move-right"
                                        class="transition translate-x-0 group-hover:translate-x-1"
                                    />
                                </button>
                            </li>
                        </ul>
                    </nav>
                    <div class="mt-16 px-24">
                        <div class="flex items-end h-[90px]">
                            <img
                                :src="items[active].icon.filename"
                                :alt="items[active].title"
                            >
                        </div>
                        <h3 class="my-4 text-white fs-22/32 font-bold">
                            {{ items[active].title }}
                        </h3>
                        <p class="whitespace-pre text-white fs-16/20">
                            {{ items[active].description }}
                        </p>
                        <div class="mt-10">
                            <UButton
                                :to="items[active].to"
                                :label="items[active].button"
                                variant="solid"
                                trailing-icon="i-heroicons-arrow-long-right"
                            />
                        </div>
                    </div>
                </div>
                <div
                    ref="emblaRef2"
                    class="flex-1 flex flex-col overflow-hidden"
                >
                    <div class="flex-1 flex max-h-full">
                        <div
                            v-for="item in items"
                            :key="item.id"
                            class="embla__slide relative max-h-full"
                        >
                            <img
                                :src="item.image.filename"
                                :alt="item.image.alt"
                                class="absolute top-0 left-0 w-full h-full object-cover"
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
    height: 100%;
    overflow: hidden;
  }
  .embla__container {
    height: 100%;
    display: flex;
  }
  .embla__slide {
    flex: 0 0 100%;
    min-width: 0;
  }
</style>
