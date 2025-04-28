<script setup lang="ts">
const props = defineProps({ blok: Object })

const { state } = useAppStore()

const active = ref<any | undefined>(undefined)

const openModal = (feature: any) => {
    active.value = feature
    useGSAP().to(window, {
        scrollTo: {
            y: `#${props.blok?.id}`,
            offsetY: 130,
        },
    })
}

const closeModal = () => {
    active.value = undefined
}
</script>

<template>
    <section
        v-if="blok"
        :id="blok.id"
        class=" bg-copreci-bg-light"
    >
        <div class="relative">
            <UContainer>
                <div class="copreci-grid items-center">
                    <div class="col-span-5 py-20">
                        <div class="copreci-text copreci-header">
                            <h2>{{ blok.title }}</h2>
                        </div>
                        <div class="copreci-text copreci-text--sm">
                            <StoryblokRichText :doc="blok.description" />
                            <template v-if="blok.columns">
                                <div class="columns">
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
                    <div class="col-span-7">
                        <div class="relative">
                            <img
                                v-gsap.whenVisible.from="{ opacity: 0, y: 100 }"
                                :src="blok.image.filename"
                                :alt="blok.image.alt"
                                class="mix-blend-multiply w-full"
                            >
                            <button
                                v-for="feature in blok.features"
                                :key="feature._uid"
                                :class="[
                                    'absolute w-[35px] h-[35px] rounded-full border-2 border-copreci-500 flex items-center justify-center cursor-pointer',
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
                    'w-[50vw] h-full absolute top-0 left-0 bg-white border-r border-r-copreci-500 transition-all duration-500 pl-screen flex items-center',
                    active ? 'translate-x-0' : '-translate-x-full',
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
                    <div>
                        <p class="fs-25/30 font-light">
                            {{ active.description }}
                        </p>
                    </div>
                    <div class="mt-12">
                        <div
                            v-if="active.image"
                            class="h-[125px]"
                        >
                            <img
                                :src="active.image.filename"
                                :alt="active.image.alt"
                            >
                        </div>
                        <p class="fs-15/18 font-light">
                            {{ active.legend }}
                        </p>
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
