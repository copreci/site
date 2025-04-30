<script setup lang="ts">
const props = defineProps({ blok: Object })

const options = computed(() => [
    {
        id: 'plants',
        label: props.blok?.plants,
    },
    {
        id: 'delegations',
        label: props.blok?.delegations,
    },
    {
        id: 'agents',
        label: props.blok?.agents,
    },
])

const active = ref('0')
const country = ref()

const plants = computed(() => {
    const items = props.blok?.countries.filter((item: any) => item.type === 'plants')

    return items
})

const delegations = computed(() => {
    const items = props.blok?.countries.filter((item: any) => item.type === 'delegations')

    return items
})

const agents = computed(() => {
    const items = props.blok?.countries.filter((item: any) => item.type === 'agents')

    return items
})

const onSelectCountry = (item: any) => {
    country.value = item
}

watch(() => active.value, () => {
    country.value = null
})
</script>

<template>
    <section
        v-if="blok"
        class="relative copreci-section copreci-section--gray"
    >
        <UContainer>
            <div class="copreci-grid">
                <div class="col-span-6">
                    <header class="copreci-text copreci-header">
                        <h2>
                            {{ blok.title }}
                        </h2>
                    </header>
                </div>
            </div>
            <nav class="max-w-[500px] mx-auto">
                <UTabs
                    v-model="active"
                    :items="options"
                />
            </nav>
        </UContainer>
        <div class="mt-20 flex justify-center">
            <div class="relative">
                <img
                    v-gsap.whenVisible.delay-1000.from="{ opacity: 0, y: 100 }"
                    :src="blok.map.filename"
                    :alt="blok.map.alt"
                >
                <template v-if="active == 0">
                    <div
                        v-for="plant in plants"
                        :key="plant.key"
                        class="absolute w-[17px] h-[17px] rounded-full border border-black flex items-center justify-center cursor-pointer max-[769px]:scale-75"
                        :style="{
                            top: `${plant.position_top}%`,
                            left: `${plant.position_left}%`,
                        }"
                        @click="onSelectCountry(plant)"
                    >
                        <span class="w-[10px] h-[10px] rounded-full bg-black" />
                    </div>
                </template>
                <template v-if="active == 1">
                    <div
                        v-for="delegation in delegations"
                        :key="delegation.key"
                        class="absolute w-[17px] h-[17px] rounded-full border border-black flex items-center justify-center cursor-pointer"
                        :style="{
                            top: `${delegation.position_top}%`,
                            left: `${delegation.position_left}%`,
                        }"
                        @click="onSelectCountry(delegation)"
                    >
                        <span class="w-[10px] h-[10px] rounded-full bg-black" />
                    </div>
                </template>
                <template v-if="active == 2">
                    <div
                        v-for="agent in agents"
                        :key="agent.key"
                        class="absolute w-[17px] h-[17px] rounded-full border border-black flex items-center justify-center cursor-pointer"
                        :style="{
                            top: `${agent.position_top}%`,
                            left: `${agent.position_left}%`,
                        }"
                        @click="onSelectCountry(agent)"
                    >
                        <span class="w-[10px] h-[10px] rounded-full bg-black" />
                    </div>
                </template>
            </div>
        </div>
        <div
            v-if="country"
            class="absolute w-full bottom-0 left-0 z-1 max-[641px]:fixed max-[641px]:h-[calc(100vh-67px)]"
        >
            <div class="bg-white h-full">
                <header class="border-t border-b border-copreci-500 py-4">
                    <UContainer>
                        <div class="flex items-center justify-between">
                            <h3 class="fs-19/26 font-medium">
                                {{ country.nombre }}
                            </h3>
                            <button
                                class="flex items-center justify-center fs-19/26 cursor-pointer hover:opacity-70"
                                @click="country = null"
                            >
                                <UIcon name="i-heroicons-x-mark" />
                            </button>
                        </div>
                    </UContainer>
                </header>
                <div v-if="country.locations">
                    <UContainer>
                        <div class="flex flex-wrap -m-6 max-[1024px]:-mx-3.5">
                            <div
                                v-for="location in country.locations"
                                :key="location.key"
                                class="w-1/2 p-6 py-10 border-r border-copreci-500 last:border-r-0 max-[1025px]:w-full max-[1025px]:border-b max-[1025px]:border-r-0"
                            >
                                <header class="mb-4">
                                    <h4 class="fs-15/18 font-medium text-copreci-500">
                                        {{ location.name }}
                                    </h4>
                                </header>
                                <div class="grid grid-cols-12 gap-x-9 max-[641px]:grid-cols-1 max-[641px]:gap-x-0 max-[641px]:gap-y-2.5">
                                    <div
                                        v-if="location.address"
                                        class="col-span-4"
                                    >
                                        <p class="fs-13/16 whitespace-pre-wrap">
                                            {{ location.address }}
                                        </p>
                                    </div>
                                    <div
                                        v-if="location.phone"
                                        class="col-span-4"
                                    >
                                        <p class="fs-13/16">
                                            Tel.
                                        </p>
                                        <div class="fs-15/18 [&_a]:hover:underline">
                                            <StoryblokRichText :doc="location.phone" />
                                        </div>
                                    </div>
                                    <div
                                        v-if="location.email"
                                        class="col-span-4"
                                    >
                                        <p class="fs-13/16">
                                            Email
                                        </p>
                                        <div class="fs-15/18 [&_a]:hover:underline">
                                            <StoryblokRichText :doc="location.email" />
                                        </div>
                                    </div>
                                </div>
                                <div
                                    v-if="location.images"
                                    class="mt-6 grid grid-cols-12 gap-x-4"
                                >
                                    <div
                                        v-for="image in location.images"
                                        :key="image.key"
                                        class="col-span-4"
                                    >
                                        <div class="w-full h-[116px]">
                                            <img
                                                :src="image.filename"
                                                :alt="image.alt"
                                                class="w-full h-full object-cover"
                                            >
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </UContainer>
                </div>
            </div>
        </div>
    </section>
</template>
