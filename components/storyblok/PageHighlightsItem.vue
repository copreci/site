<script setup lang="ts">
const props = defineProps({
    blok: Object,
    span: Number,
})

const { locale } = useI18n()
const localePath = useLocalePath()

const columns = computed(() => {
    if (props.span && props.span == 2) {
        return 'col-span-6'
    }
    else {
        return 'col-span-4'
    }
})

const to = computed(() => {
    if (locale.value === 'es') {
        return localePath(`/${props.blok?.link.cached_url}`)
    }
    else {
        return localePath(props.blok?.link.cached_url)
    }
})
</script>

<template>
    <div
        v-if="blok"
        :class="`flex flex-col ${columns} border-r border-copreci-500 last:border-r-0`"
    >
        <NuxtLink
            :to="to"
            class="group relative h-[380px] w-full bg-copreci-bg-light overflow-hidden"
        >
            <img
                :src="blok.image.filename"
                :alt="blok.image.alt"
                class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            >
        </NuxtLink>
        <div class="flex-1 flex flex-col">
            <div class="bg-white p-6 flex-1">
                <header class="flex space-x-6">
                    <h3
                        class="mb-8 flex-1 fs-30/32 font-light text-copreci-500"
                    >
                        {{ blok.title }}
                    </h3>
                    <div v-if="blok.icon">
                        <img
                            :src="blok.icon.filename"
                            :alt="blok.icon.alt"
                        >
                    </div>
                </header>
            </div>
            <div>
                <NuxtLink
                    :to="to"
                    class="group flex items-center space-x-2 space-between px-6 py-4 border-t border-copreci-500 text-copreci-500 bg-white hover:bg-copreci-500/5 transition-colors duration-300"
                >
                    <span class="flex-1 group-hover:translate-x-1 transition-transform duration-300">{{ blok.link_label }}</span>
                    <UIcon
                        name="i-heroicons-arrow-long-right"
                        class="w-6 h-6 group-hover:-translate-x-1 transition-transform duration-300"
                    />
                </NuxtLink>
            </div>
        </div>
    </div>
</template>
