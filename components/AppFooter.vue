<script setup lang="ts">
const { state } = useAppStore()
const localePath = useLocalePath()

const items = computed(() => {
    return [
        {
            key: 'contact',
            label: useString(state, 'footer_contact_label'),
            content: `<p class="fs-30/40 text-white"><a href="tel:${useString(state, 'footer_contact_phone')}">${useString(state, 'footer_contact_content')}</a></p>`,
        },
        {
            key: 'email',
            label: useString(state, 'footer_email_label'),
            content: `<p class="fs-18/25 text-white"><a href="mailto:${useString(state, 'footer_email_address')}">${useString(state, 'footer_email_address')}</a></p>`,
        },
        {
            key: 'location',
            label: useString(state, 'footer_location_label'),
            content: `<p class="whitespace-pre fs-18/25 text-white">${useString(state, 'footer_location_content')}</p>`,
        },
        {
            key: 'projects',
            label: useString(state, 'footer_projects_label'),
            content: null,
        },
        {
            key: 'talent',
            label: useString(state, 'footer_talent_label'),
            content: null,
        },
        {
            key: 'mondragon',
            label: useString(state, 'footer_mondragon'),
            content: null,
        },

    ]
})
</script>

<template>
    <footer class="bg-black pt-20 pb-12">
        <UContainer>
            <div class="grid grid-cols-12 border-b border-white pb-12 max-[769px]:grid-cols-1 max-[769px]:gap-y-6">
                <div class="col-span-4 max-[769px]:col-span-12">
                    <NuxtLink :to="localePath('/')">
                        <img
                            :src="state.logo_white.filename"
                            alt="state.logo_white.alt"
                        >
                    </NuxtLink>
                </div>
                <div class="col-span-8">
                    <p class="text-white fs-20/28">
                        {{ useString(state, 'footer_claim') }}
                    </p>
                </div>
            </div>
            <div class="grid grid-cols-12 mt-12 gap-x-6 gap-y-12 border-b border-white pb-12 max-[769px]:grid-cols-1 max-[769px]:gap-y-6">
                <div
                    v-for="item in items"
                    :key="item.label"
                    class="col-span-4"
                >
                    <h6 class="mb-4 fs-13/16 text-(--color-copreci-bg-light)/50 max-[769px]:mb-0">
                        {{ item.label }}
                    </h6>
                    <div
                        v-if="item.content"
                        v-html="item.content"
                    />
                    <div
                        v-if="item.key === 'location'"
                        class="mt-4 max-[769px]:mt-0"
                    >
                        <NuxtLink
                            :href="`${state.about_page}#where`"
                            class="group flex items-center gap-x-4.5 text-white cursor-pointer"
                        >
                            <span class="fs-13/16">
                                {{ useString(state, 'footer_plants') }}
                            </span>
                            <UIcon
                                name="i-heroicons-arrow-long-right"
                                class="transition translate-x-0 group-hover:translate-x-1"
                            />
                        </NuxtLink>
                    </div>
                    <div
                        v-if="item.key === 'projects'"
                        class="mt-4 max-[769px]:mt-0"
                    >
                        <p class="fs-18/25 text-white">
                            <NuxtLink :to="state.projects_page">
                                {{ useString(state, 'footer_projects_content') }}
                            </NuxtLink>
                        </p>
                    </div>
                    <div
                        v-if="item.key === 'talent'"
                        class="mt-4 max-[769px]:mt-0"
                    >
                        <p class="fs-18/25 text-white">
                            <NuxtLink :to="state.talent_page">
                                {{ useString(state, 'footer_talent_content') }}
                            </NuxtLink>
                        </p>
                    </div>
                    <div
                        v-if="item.key === 'mondragon'"
                        class="mt-4 max-[769px]:mt-2"
                    >
                        <img
                            :src="state.logo_mondragon.filename"
                            alt="state.logo_mondragon.alt"
                        >
                    </div>
                </div>
            </div>
            <div class="grid grid-cols-12 mt-12 max-[769px]:gap-y-6">
                <div class="col-span-4 max-[769px]:col-span-12">
                    <ul class="flex gap-x-4">
                        <li
                            v-for="item in state.ssmm"
                            :key="item._uid"
                        >
                            <a
                                :href="item.link.url"
                                target="_blank"
                                class="opacity-100 hover:opacity-90"
                            >
                                <img
                                    :src="item.icon.filename"
                                    :alt="item.icon.alt"
                                >
                            </a>
                        </li>
                    </ul>
                </div>
                <div class="col-span-8 max-[769px]:col-span-12">
                    <ul class="flex items-center justify-between gap-x-4 max-[769px]:flex-col max-[769px]:gap-y-1 max-[769px]:items-start">
                        <li
                            v-for="item in state.legal"
                            :key="item._uid"
                        >
                            <NuxtLink
                                :to="item.link.linktype == 'story' ? `/${item.link.story.full_slug}` : item.link.url"
                                class="text-white fs-13/16 hover:underline"
                            >
                                {{ item.label }}
                            </NuxtLink>
                        </li>
                        <li class="max-[769px]:mt-2">
                            <p class="text-white fs-13/16">
                                Copyright {{ new Date().getFullYear() }} Copreci
                            </p>
                        </li>
                    </ul>
                </div>
            </div>
        </UContainer>
    </footer>
</template>
