<script setup lang="ts">
import { vOnClickOutside } from '@vueuse/components'

const { state } = useAppStore()
const localePath = useLocalePath()

const route = useRoute()

const subnavOpen = ref<number | undefined>()
const navMenu = ref<boolean>(false)
const navLanguage = ref<boolean>(false)

watch(() => route.path, () => {
    navMenu.value = false
    subnavOpen.value = undefined
})
</script>

<template>
    <header class="sticky top-[-25px] z-50 max-[769px]:top-0">
        <div class="bg-copreci-bg-light max-[769px]:hidden">
            <UContainer>
                <ul class="flex items-center justify-end gap-20">
                    <li>
                        <NuxtLink
                            class="fs-13/16 py-1"
                            :to="state.downloads"
                        >{{ useString(state, 'downloads') }}</NuxtLink>
                    </li>
                    <li>
                        <div class="relative group">
                            <button class="fs-13/16 flex items-center gap-2 py-1">
                                <span>{{ useString(state, 'language') }}</span>
                                <UIcon name="i-heroicons-plus" />
                            </button>
                            <ClientOnly>
                                <ul class="absolute top-full left-0 flex flex-col opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto z-50">
                                    <li
                                        v-for="loc in state.slugs"
                                        :key="loc.slug"
                                    >
                                        <a
                                            class="block fs-13/16 bg-copreci-bg-light py-1.5 px-4 whitespace-nowrap hover:bg-copreci-bg-dark"
                                            :href="loc.slug"
                                        >
                                            {{ loc.name }}
                                        </a>
                                    </li>
                                </ul>
                            </ClientOnly>
                        </div>
                    </li>
                </ul>
            </UContainer>
        </div>
        <div class="sticky top-0 self-start py-4.5 border-b bg-white border-b-copreci z-10 ">
            <UContainer>
                <div class="flex items-center justify-between">
                    <NuxtLink :to="localePath('/')">
                        <NuxtImg
                            v-if="state.logo.filename"
                            :src="state.logo.filename"
                            alt="Copreci"
                            class="w-[165px] max-[1281px]:w-[125px]"
                        />
                    </NuxtLink>
                    <nav class="max-[769px]:hidden">
                        <ul class="flex items-center gap-24 max-[1025px]:gap-16">
                            <li
                                v-for="(item, index) in state.menu"
                                :key="item.label"
                            >
                                <div class="flex items-center gap-2">
                                    <NuxtLink
                                        :to="`/${item.link.story.full_slug}`"
                                        class="fs-13/16 hover:text-copreci"
                                    >
                                        {{ item.label }}
                                    </NuxtLink>
                                    <button
                                        v-if="item.submenu.length"
                                        class="fs-13/16 flex items-center cursor-pointer hover:opacity-70"
                                        @mouseover.prevent="subnavOpen = index"
                                    >
                                        <UIcon name="i-heroicons-plus" />
                                    </button>
                                </div>
                            </li>
                        </ul>
                    </nav>
                    <button
                        class="hidden max-[769px]:flex flex-col items-center justify-center gap-2 border border-black rounded-[20px] px-3 py-1 cursor-pointer hover:bg-black/5"
                        @click="navMenu = !navMenu"
                    >
                        <UIcon
                            :name="navMenu ? 'i-heroicons-x-mark' : 'i-heroicons-bars-3'"
                            class="size-5"
                        />
                    </button>
                </div>
            </UContainer>
        </div>
        <Transition name="slide-up">
            <div
                v-show="subnavOpen != undefined"
                v-on-click-outside="() => subnavOpen = undefined"
                class="origin-top w-screen absolute top-full left-0 bg-white max-[769p]:hidden"
                @mouseleave="subnavOpen = undefined"
            >
                <template
                    v-for="(item, index) in state.menu"
                    :key="item.label"
                >
                    <div
                        v-if="item.submenu.length && subnavOpen === index"
                        class="h-[80px] flex items-center justify-center max-[1025px]:h-[60px]"
                    >
                        <ul class="flex items-center justify-center gap-20 max-[1025px]:gap-12">
                            <li
                                v-for="subitem in item.submenu"
                                :key="subitem.label"
                            >
                                <NuxtLink
                                    :to="`/${subitem.link.story.full_slug}`"
                                    class="flex items-center gap-4 group"
                                >
                                    <img
                                        :src="subitem.icon.filename"
                                        alt="subitem.label"
                                        class="max-[1025px]:max-w-[40px] max-[1025px]:max-h-[30px]"
                                    >
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
        </Transition>
        <div
            :class="[
                'hidden max-[769px]:block w-screen fixed top-[65px] left-0 z-[100]',
                navMenu ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none',
            ]"
        >
            <nav class="border-b border-b-copreci-500">
                <ul>
                    <li
                        v-for="(item) in state.menu"
                        :key="item.label"
                    >
                        <NuxtLink
                            :to="`/${item.link.story.full_slug}`"
                            class="flex items-center justify-between w-full border-t border-copreci-bg-light py-6 px-6 bg-white hover:text-copreci-500"
                        >
                            <span class="fs-25/30 font-light">{{ item.label }}</span>
                            <button
                                v-if="item.submenu.length"
                                class="h-full flex items-center cursor-pointer bg-white hover:opacity-70"
                                @click.prevent="item.open = !item.open"
                            >
                                <UIcon
                                    :name="item.open ? 'i-heroicons-minus' : 'i-heroicons-plus'"
                                    class="size-5"
                                />
                            </button>
                        </NuxtLink>
                        <ul v-if="item.open">
                            <li
                                v-for="subitem in item.submenu"
                                :key="subitem.label"
                            >
                                <NuxtLink
                                    :to="`/${subitem.link.story.full_slug}`"
                                    class="flex items-center justify-between gap-4 group bg-copreci-bg-light px-6 py-4.5 border-t border-t-copreci-bg-dark"
                                >
                                    <div class="flex items-center gap-4">
                                        <div class="w-[50px] flex justify-center items-center">
                                            <img
                                                :src="subitem.icon.filename"
                                                alt="subitem.label"
                                                class="max-[1025px]:max-w-[40px] max-[1025px]:max-h-[30px]"
                                            >
                                        </div>
                                        <span class="fs-18/20 font-bold group-hover:text-copreci">{{ subitem.label }}</span>
                                    </div>
                                    <UIcon
                                        class="size-5"
                                        name="i-heroicons-arrow-right"
                                    />
                                </NuxtLink>
                            </li>
                        </ul>
                    </li>
                </ul>
            </nav>
            <ul>
                <li>
                    <NuxtLink
                        class="fs-20/25 flex items-center justify-between gap-4 group bg-copreci-bg-light px-6 py-6 border-t border-t-copreci-bg-dark"
                        :to="state.downloads"
                    >{{ useString(state, 'downloads') }}</NuxtLink>
                </li>
                <li>
                    <div
                        class="fs-20/25 flex items-center justify-between gap-4 group bg-copreci-bg-light px-6 py-6 border-t border-t-copreci-bg-dark"
                    >
                        <span>{{ useString(state, 'language') }}</span>
                        <button
                            class="h-full flex items-center cursor-pointer hover:opacity-70"
                            @click.prevent="navLanguage = !navLanguage"
                        >
                            <UIcon
                                :name="navLanguage ? 'i-heroicons-minus' : 'i-heroicons-plus'"
                                class="size-5"
                            />
                        </button>
                    </div>
                    <ul v-if="navLanguage">
                        <li
                            v-for="loc in state.slugs"
                            :key="loc.slug"
                        >
                            <a
                                class="block fs-16/20 border-t border-t-copreci-bg-dark bg-copreci-bg-light py-6 px-6 whitespace-nowrap hover:bg-copreci-bg-dark"
                                :href="loc.slug"
                            >
                                {{ loc.name }}
                            </a>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
    </header>
</template>
