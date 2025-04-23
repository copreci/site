<script setup lang="ts">
const { locale, locales } = useI18n()
const localePath = useLocalePath()
const switchLocalePath = useSwitchLocalePath()

const availableLocales = computed(() => {
    return locales.value.filter((i) => i.code !== locale.value)
})

const navItems = [
    {
        id: 'nosotros',
        label: 'Nosotros',
        to: localePath('/nosotros'),
        subnav: [
            {
                label: 'Empresa',
                to: localePath('/nosotros/empresa'),
                icon: useIcon('nosotros-empresa'),
                height: 35,
            },
            {
                label: 'Mondragon',
                to: localePath('/nosotros/mondragon'),
                icon: useIcon('nosotros-mondragon'),
                height: 37,
            },
            {
                label: 'Sostenibilidad',
                to: localePath('/nosotros/sostenibilidad'),
                icon: useIcon('nosotros-sostenibilidad'),
                height: 40,
            },
            {
                label: 'Proyectos',
                to: localePath('/nosotros/proyectos'),
                icon: useIcon('nosotros-proyectos'),
                height: 32,
            },
        ],
    },
    {
        id: 'productos',
        label: 'Productos',
        to: localePath('/productos'),
        subnav: [
            {
                label: 'Gas',
                to: localePath('/productos/gas'),
                icon: useIcon('productos-gas'),
                height: 42,
            },
            {
                label: 'Inducción',
                to: localePath('/productos/induccion'),
                icon: useIcon('productos-induccion'),
                height: 43,
            },
            {
                label: 'Otros',
                to: localePath('/productos/otros'),
                icon: useIcon('productos-otros'),
                height: 49,
            },
        ],
    },
    {
        id: 'junto-al-cliente',
        label: 'Junto al cliente',
        to: localePath('/junto-al-cliente'),
    },
    {
        id: 'actualidad',
        label: 'Actualidad',
        to: localePath('/actualidad'),
    },
    {
        id: 'talento',
        label: 'Talento',
        to: localePath('/talento'),
    },
]

const subnavOpen = ref<string>()
</script>

<template>
    <header class="relative">
        <!-- <div class="bg-copreci-bg-light">
            <UContainer>
                <ul class="flex items-center justify-end gap-20">
                    <li>
                        <NuxtLink
                            class="fs-13/25 py-1"
                            to="/descargas"
                        >Descargas</NuxtLink>
                    </li>
                    <li>
                        <div class="relative group">
                            <button class="fs-13/25 flex items-center gap-2 py-1">
                                <span>Idioma</span>
                                <UIcon name="i-heroicons-plus" />
                            </button>
                            <ul class="absolute top-full left-0 flex flex-col opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto">
                                <li
                                    v-for="locale in availableLocales"
                                    :key="locale.code"
                                >
                                    <NuxtLink
                                        class="block fs-13/25 bg-copreci-bg-light py-0.5 px-4 whitespace-nowrap hover:bg-copreci-bg-light/60"
                                        :to="switchLocalePath(locale.code)"
                                    >
                                        {{ locale.name }}
                                    </NuxtLink>
                                </li>
                            </ul>
                        </div>
                    </li>
                </ul>
            </UContainer>
        </div>
        <div class="py-4.5 border-b bg-white border-b-copreci">
            <UContainer>
                <div class="flex items-center justify-between">
                    <NuxtLink to="/">
                        <NuxtImg
                            src="https://we1.supacontent.com/copreci.svg"
                            alt="Copreci"
                            class="w-[165px]"
                        />
                    </NuxtLink>
                    <nav>
                        <ul class="flex items-center gap-24">
                            <li
                                v-for="item in navItems"
                                :key="item.label"
                            >
                                <div class="flex items-center gap-2">
                                    <NuxtLink
                                        :to="item.to"
                                        class="fs-13/25 hover:text-copreci"
                                    >{{ item.label }}</NuxtLink>
                                    <button
                                        v-if="item.subnav"
                                        class="fs-13/25 flex items-center cursor-pointer hover:opacity-70"
                                        @click.prevent="subnavOpen = item.id"
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
                        v-for="item in navItems"
                        :key="item.label"
                    >
                        <div
                            v-if="item.subnav && subnavOpen === item.id"
                            class="h-[80px] flex items-center justify-center"
                        >
                            <ul class="flex items-center justify-center gap-20">
                                <li
                                    v-for="subitem in item.subnav"
                                    :key="subitem.label"
                                >
                                    <NuxtLink
                                        :to="subitem.to"
                                        class="flex items-center gap-4 group"
                                    >
                                        <span
                                            :class="`block [&>svg]:min-h-full`"
                                            :style="{ height: `${subitem.height}px` }"
                                            v-html="subitem.icon"
                                        />
                                        <span class="fs-18/20 font-bold group-hover:text-copreci">{{ subitem.label }}</span>
                                        <UIcon
                                            class="fs-13/25"
                                            name="i-heroicons-arrow-right"
                                        />
                                    </NuxtLink>
                                </li>
                            </ul>
                        </div>
                    </template>
                </div>
            </Motion>
        </AnimatePresence> -->
    </header>
</template>
