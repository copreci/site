<script setup lang="ts">
const props = defineProps({ blok: Object })

const { state } = useAppStore()

const active = ref<any | undefined>(undefined)

const openModal = (feature: any) => {
    active.value = feature
    if (window.innerWidth > 769) {
        useGSAP().to(window, {
            scrollTo: {
                y: `#${props.blok?.id}`,
                offsetY: 130,
            },
        })
    }
}

const closeModal = () => {
    active.value = undefined
}
</script>

<template>
    <section
        v-if="blok"
        :id="blok.id"
        class=" bg-copreci-bg-light overflow-hidden"
    >
        <div class="relative">
            <UContainer>
                <div class="copreci-grid copreci-grid--gap-sm items-center">
                    <div class="col-span-6 py-20">
                        <div class="copreci-text copreci-header">
                            <h2>{{ blok.title }}</h2>
                        </div>
                        <div class="copreci-text copreci-text--sm copreci-text-h3-as-h4">
                            <StoryblokRichText :doc="blok.description" />
                            <template v-if="blok.columns">
                                <div class="columns columns--wrap">
                                    <div
                                        v-for="column in blok.columns"
                                        :key="column._uid"
                                        class="w-1/2"
                                    >
                                        <h5>{{ column.title }}</h5>
                                        <p>{{ column.text }}</p>
                                    </div>
                                </div>
                            </template>
                        </div>
                    </div>
                    <div class="col-span-6">
                        <div class="relative">
                            <img
                                v-gsap.whenVisible.from="{ opacity: 0, y: 100 }"
                                :src="blok.image.filename"
                                :alt="blok.image.alt"
                                class="w-full"
                            >
                            <button
                                v-for="feature in blok.features"
                                :key="feature._uid"
                                :class="[
                                    'absolute w-[35px] h-[35px] rounded-full border-2 border-copreci-500 flex items-center justify-center cursor-pointer max-[769px]:scale-75',
                                ]"
                                :style="{
                                    top: `${feature.position_top}%`,
                                    left: `${feature.position_left}%`,
                                }"
                                @click="openModal(feature)"
                            >
                                <span
                                    :class="[
                                        'bg-copreci-500 rounded-full transition-all duration-300',
                                        active == feature ? 'w-[35px] h-[35px]' : 'w-[25px] h-[25px]',
                                    ]"
                                />
                            </button>
                        </div>
                    </div>
                </div>
            </UContainer>
            <div
                :class="[
                    'w-[50vw] h-full absolute top-0 left-0 bg-white border-r border-copreci-500 transition-all duration-500 pl-screen flex items-center max-[769px]:w-screen max-[769px]:top-auto max-[769px]:bottom-0 max-[769px]:h-auto max-[769px]:border-t max-[769px]:border-r-0 max-[769px]:py-12',
                    active ? 'translate-x-0 opacity-100 pointer-events-auto max-[769px]:translate-x-0 max-[769px]:translate-y-0' : '-translate-x-full opacity-0 pointer-events-none max-[769px]:-translate-x-0 max-[769px]:translate-y-full',
                ]"
            >
                <button
                    class="absolute top-3 right-3 cursor-pointer hover:opacity-80"
                    @click="closeModal"
                >
                    <UIcon
                        name="i-heroicons-x-mark"
                        class="size-8 text-copreci-500"
                    />
                </button>
                <div v-if="active">
                    <header>
                        <h3 class="mb-8 fs-22/26 text-copreci-500 font-medium">
                            {{ active.name }}
                        </h3>
                    </header>
                    <div class="mt-0">
                        <div
                            v-if="active.image"
                            class="h-[125px]"
                        >
                            <img
                                :src="active.image.filename"
                                :alt="active.image.alt"
                                class="h-[125px]"
                            >
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="bg-copreci-500">
            <UContainer class="text-center">
                <UButton
                    to="/"
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
