<script setup lang="ts">
import { vOnClickOutside } from '@vueuse/components'

const { state } = useAppStore()
const { locale, locales } = useI18n()
const localePath = useLocalePath()
const switchLocalePath = useSwitchLocalePath()

const availableLocales = computed(() => {
    return locales.value.filter((i) => i.code !== locale.value)
})

const subnavOpen = ref<number | undefined>()
</script>

<template>
    <header class="relative z-10">
        <div class="bg-copreci-bg-light">
            <UContainer>
                <ul class="flex items-center justify-end gap-20">
                    <li>
                        <NuxtLink
                            class="fs-13/16 py-1"
                            to="/descargas"
                        >{{ useString(state, 'downloads') }}</NuxtLink>
                    </li>
                    <li>
                        <div class="relative group">
                            <button class="fs-13/16 flex items-center gap-2 py-1">
                                <span>{{ useString(state, 'language') }}</span>
                                <UIcon name="i-heroicons-plus" />
                            </button>
                            <ul class="absolute top-full left-0 flex flex-col opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto z.">
                                <li
                                    v-for="loc in availableLocales"
                                    :key="loc.code"
                                >
                                    <NuxtLink
                                        class="block fs-13/16 bg-copreci-bg-light py-1.5 px-4 whitespace-nowrap hover:bg-copreci-bg-dark"
                                        :to="switchLocalePath(loc.code)"
                                    >
                                        {{ loc.name }}
                                    </NuxtLink>
                                </li>
                            </ul>
                        </div>
                    </li>
                </ul>
            </UContainer>
        </div>

        <div class="py-4.5 border-b bg-white border-b-copreci z-10">
            <UContainer>
                <div class="flex items-center justify-between">
                    <NuxtLink :to="localePath('/')">
                        <NuxtImg
                            v-if="state.logo.filename"
                            :src="state.logo.filename"
                            alt="Copreci"
                            class="w-[165px]"
                        />
                    </NuxtLink>
                    <nav>
                        <ul class="flex items-center gap-24">
                            <li
                                v-for="(item, index) in state.menu"
                                :key="item.label"
                            >
                                <div class="flex items-center gap-2">
                                    <NuxtLink
                                        :to="localePath(`/${item.link.cached_url}`)"
                                        class="fs-13/16 hover:text-copreci"
                                    >{{ item.label }}</NuxtLink>
                                    <button
                                        v-if="item.submenu.length"
                                        class="fs-13/16 flex items-center cursor-pointer hover:opacity-70"
                                        @click.prevent="subnavOpen = index"
                                    >
                                        <UIcon name="i-heroicons-plus" />
                                    </button>
                                </div>
                            </li>
                        </ul>
                    </nav>
                </div>
            </UContainer>
        </div>
        <AnimatePresence>
            <Motion
                v-show="subnavOpen != undefined"
                v-on-click-outside="() => subnavOpen = undefined"
                :initial="{ scaleY: 0 }"
                :animate="{ scaleY: 1 }"
                :exit="{ scaleY: 0 }"
                :duration="0.1"
                class="origin-top w-screen absolute top-full left-0 bg-white"
                @mouseleave="subnavOpen = undefined"
            >
                <div>
                    <template
                        v-for="(item, index) in state.menu"
                        :key="item.label"
                    >
                        <div
                            v-if="item.submenu.length && subnavOpen === index"
                            class="h-[80px] flex items-center justify-center"
                        >
                            <ul class="flex items-center justify-center gap-20">
                                <li
                                    v-for="subitem in item.submenu"
                                    :key="subitem.label"
                                >
                                    <NuxtLink
                                        :to="localePath(subitem.to)"
                                        class="flex items-center gap-4 group"
                                    >
                                        <!-- <span
                                            :class="`block [&>svg]:min-h-full`"
                                            :style="{ height: `${subitem.height}px` }"
                                            v-html="subitem.icon"
                                        /> -->
                                        <span class="fs-18/20 font-bold group-hover:text-copreci">{{ subitem.label }}</span>
                                        <UIcon
                                            class="fs-13/16"
                                            name="i-heroicons-arrow-right"
                                        />
                                    </NuxtLink>
                                </li>
                            </ul>
                        </div>
                    </template>
                </div>
            </Motion>
        </AnimatePresence>
    </header>
</template>
