<script setup lang="ts">
const props = defineProps({ blok: Object })

const data = ref({
    title: props.blok?.title,
    quality: {
        title: props.blok?.quality_title,
        politics: {
            title: props.blok?.quality_politics_title,
            downloads: props.blok?.quality_politics_files,
        },
        iso: {
            title: props.blok?.quality_iso_title,
            downloads: props.blok?.quality_iso_files,
        },
        iso14001: {
            title: props.blok?.quality_iso_14001_title,
            downloads: props.blok?.quality_iso_14001_files,
        },
        iso45001: {
            title: props.blok?.quality_iso_45001_title,
            downloads: props.blok?.quality_iso_45001_files,
        },
        eu: {
            title: props.blok?.quality_eu_title,
            downloads: props.blok?.quality_eu_files,
        },
        product: {
            title: props.blok?.quality_product_title,
            gas: {
                title: props.blok?.quality_product_gas_title,
                downloads: props.blok?.quality_product_gas_files,
                show: false,
            },
            induction: {
                title: props.blok?.quality_product_induction_title,
                downloads: props.blok?.quality_product_induction_files,
                show: false,
            },
            wash: {
                title: props.blok?.quality_product_wash_title,
                downloads: props.blok?.quality_product_wash_files,
                show: false,
            },
        },
        plants: {
            title: props.blok?.quality_plants_title,
            gas: {
                title: props.blok?.quality_plants_gas_title,
                downloads: props.blok?.quality_plants_gas_files,
                show: false,
            },
        },
    },
    corporative: {
        title: props.blok?.corporative_title,
        catalogues: {
            title: props.blok?.corporative_catalogues_title,
            downloads: props.blok?.corporative_catalogues_files,
        },
        info: {
            title: props.blok?.corporative_info_title,
            downloads: props.blok?.corporative_info_files,
        },
        elements: {
            title: props.blok?.corporative_elements_title,
            downloads: props.blok?.corporative_elements_files,
        },
        projects: {
            title: props.blok?.corporative_projects_title,
            downloads: props.blok?.corporative_projects_files,
        },
    },
})
</script>

<template>
    <article
        v-if="blok"
        class="downloads"
    >
        <section class="copreci-section">
            <UContainer>
                <div class="copreci-grid copreci-grid--gap-sm">
                    <div class="col-span-6">
                        <div class="copreci-text">
                            <h2>{{ data.title }}</h2>
                        </div>
                    </div>
                </div>
            </UContainer>
        </section>
        <section>
            <header class="py-4 sticky top-[73px] border-t border-b border-copreci-500 bg-white z-40 max-[769px]:top-[64px]">
                <UContainer>
                    <h3 class="fs-18/25 text-copreci-500 font-bold">
                        {{ data.quality.title }}
                    </h3>
                </UContainer>
            </header>
            <UContainer>
                <div class="py-20 copreci-download">
                    <div class="grid grid-cols-12 gap-x-6 gap-y-16 max-[769px]:grid-cols-1">
                        <div class="col-span-4 copreci-download__col">
                            <div class="copreci-download__block">
                                <header>
                                    <h4>
                                        {{ data.quality.product.title }}
                                    </h4>
                                </header>
                                <div class="copreci-download__block-toggled">
                                    <button
                                        class="copreci-download__toggle"
                                        @click="data.quality.product.gas.show = !data.quality.product.gas.show"
                                    >
                                        <span>{{ data.quality.product.gas.title }}</span>
                                        <UIcon
                                            :name="data.quality.product.gas.show ? 'i-heroicons-minus-circle' : 'i-heroicons-plus-circle'"
                                        />
                                    </button>
                                    <ul
                                        v-if="data.quality.product.gas.downloads && data.quality.product.gas.show"
                                        class="mt-6 copreci-download__downloads"
                                    >
                                        <li
                                            v-for="download in data.quality.product.gas.downloads"
                                            :key="download._uid"
                                        >
                                            <a
                                                :href="download.filename"
                                                class="copreci-download__link"
                                                target="_blank"
                                            >
                                                <img :src="blok.icon.filename">
                                                <span>{{ useFilename(download) }}</span>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <div class="copreci-download__block-toggled">
                                    <button
                                        class="copreci-download__toggle"
                                        @click="data.quality.product.induction.show = !data.quality.product.induction.show"
                                    >
                                        <span>{{ data.quality.product.induction.title }}</span>
                                        <UIcon
                                            :name="data.quality.product.induction.show ? 'i-heroicons-minus-circle' : 'i-heroicons-plus-circle'"
                                        />
                                    </button>
                                    <ul
                                        v-if="data.quality.product.induction.downloads && data.quality.product.induction.show"
                                        class="mt-6 copreci-download__downloads"
                                    >
                                        <li
                                            v-for="download in data.quality.product.induction.downloads"
                                            :key="download._uid"
                                        >
                                            <a
                                                :href="download.filename"
                                                class="copreci-download__link"
                                                target="_blank"
                                            >
                                                <img :src="blok.icon.filename">
                                                <span>{{ useFilename(download) }}</span>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <div class="copreci-download__block-toggled">
                                    <button
                                        class="copreci-download__toggle"
                                        @click="data.quality.product.wash.show = !data.quality.product.wash.show"
                                    >
                                        <span>{{ data.quality.product.wash.title }}</span>
                                        <UIcon
                                            :name="data.quality.product.wash.show ? 'i-heroicons-minus-circle' : 'i-heroicons-plus-circle'"
                                        />
                                    </button>
                                    <ul
                                        v-if="data.quality.product.wash.downloads && data.quality.product.wash.show"
                                        class="mt-6 copreci-download__downloads"
                                    >
                                        <li
                                            v-for="download in data.quality.product.wash.downloads"
                                            :key="download._uid"
                                        >
                                            <a
                                                :href="download.filename"
                                                class="copreci-download__link"
                                                target="_blank"
                                            >
                                                <img :src="blok.icon.filename">
                                                <span>{{ useFilename(download) }}</span>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="col-span-4 copreci-download__col">
                            <div class="copreci-download__block">
                                <header>
                                    <h4>
                                        {{ data.quality.plants.title }}
                                    </h4>
                                </header>
                                <div class="copreci-download__block-toggled">
                                    <button
                                        class="copreci-download__toggle"
                                        @click="data.quality.plants.gas.show = !data.quality.plants.gas.show"
                                    >
                                        <span>{{ data.quality.plants.gas.title }}</span>
                                        <UIcon
                                            :name="data.quality.plants.gas.show ? 'i-heroicons-minus-circle' : 'i-heroicons-plus-circle'"
                                        />
                                    </button>
                                    <ul
                                        v-if="data.quality.plants.gas.downloads && data.quality.plants.gas.show"
                                        class="mt-6 copreci-download__downloads"
                                    >
                                        <li
                                            v-for="download in data.quality.plants.gas.downloads"
                                            :key="download._uid"
                                        >
                                            <a
                                                :href="download.filename"
                                                class="copreci-download__link"
                                                target="_blank"
                                            >
                                                <img :src="blok.icon.filename">
                                                <span>{{ useFilename(download) }}</span>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="col-span-4 copreci-download__col">
                            <div class="copreci-download__block">
                                <header>
                                    <h4>
                                        {{ data.quality.iso.title }}
                                    </h4>
                                </header>
                                <ul
                                    v-if="data.quality.iso.downloads"
                                    class="copreci-download__downloads"
                                >
                                    <li
                                        v-for="download in data.quality.iso.downloads"
                                        :key="download._uid"
                                    >
                                        <a
                                            :href="download.filename"
                                            class="copreci-download__link"
                                            target="_blank"
                                        >
                                            <img :src="blok.icon.filename">
                                            <span>{{ useFilename(download) }}</span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-span-4 copreci-download__col">
                            <div class="copreci-download__block">
                                <header>
                                    <h4>
                                        {{ data.quality.iso14001.title }}
                                    </h4>
                                </header>
                                <ul
                                    v-if="data.quality.iso14001.downloads"
                                    class="copreci-download__downloads"
                                >
                                    <li
                                        v-for="download in data.quality.iso14001.downloads"
                                        :key="download._uid"
                                    >
                                        <a
                                            :href="download.filename"
                                            class="copreci-download__link"
                                            target="_blank"
                                        >
                                            <img :src="blok.icon.filename">
                                            <span>{{ useFilename(download) }}</span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-span-4 copreci-download__col">
                            <div class="copreci-download__block">
                                <header>
                                    <h4>
                                        {{ data.quality.iso45001.title }}
                                    </h4>
                                </header>
                                <ul
                                    v-if="data.quality.iso45001.downloads"
                                    class="copreci-download__downloads"
                                >
                                    <li
                                        v-for="download in data.quality.iso45001.downloads"
                                        :key="download._uid"
                                    >
                                        <a
                                            :href="download.filename"
                                            class="copreci-download__link"
                                            target="_blank"
                                        >
                                            <img :src="blok.icon.filename">
                                            <span>{{ useFilename(download) }}</span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-span-4 copreci-download__col">
                            <div class="copreci-download__block">
                                <header>
                                    <h4>
                                        {{ data.quality.eu.title }}
                                    </h4>
                                </header>
                                <ul
                                    v-if="data.quality.eu.downloads"
                                    class="copreci-download__downloads"
                                >
                                    <li
                                        v-for="download in data.quality.eu.downloads"
                                        :key="download._uid"
                                    >
                                        <a
                                            :href="download.filename"
                                            class="copreci-download__link"
                                            target="_blank"
                                        >
                                            <img :src="blok.icon.filename">
                                            <span>{{ useFilename(download) }}</span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </UContainer>
        </section>
        <section>
            <header class="py-4 sticky top-[73px] border-t border-b border-copreci-500 bg-white z-40 max-[769px]:top-[64px]">
                <UContainer>
                    <h3 class="fs-18/25 text-copreci-500 font-bold">
                        {{ data.corporative.title }}
                    </h3>
                </UContainer>
            </header>
            <UContainer>
                <div class="py-20 copreci-download">
                    <div class="grid grid-cols-12 gap-x-6 gap-y-16 max-[769px]:grid-cols-1">
                        <div class="col-span-4 copreci-download__col">
                            <div class="copreci-download__block">
                                <header>
                                    <h4>
                                        {{ data.corporative.catalogues.title }}
                                    </h4>
                                </header>
                                <ul
                                    v-if="data.corporative.catalogues.downloads"
                                    class="copreci-download__downloads"
                                >
                                    <li
                                        v-for="download in data.corporative.catalogues.downloads"
                                        :key="download._uid"
                                    >
                                        <a
                                            :href="download.filename"
                                            class="copreci-download__link"
                                            target="_blank"
                                        >
                                            <img :src="blok.icon.filename">
                                            <span>{{ useFilename(download) }}</span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-span-4 copreci-download__col">
                            <div class="copreci-download__block">
                                <header>
                                    <h4>
                                        {{ data.corporative.info.title }}
                                    </h4>
                                </header>
                                <ul
                                    v-if="data.corporative.info.downloads"
                                    class="copreci-download__downloads"
                                >
                                    <li
                                        v-for="download in data.corporative.info.downloads"
                                        :key="download._uid"
                                    >
                                        <a
                                            :href="download.filename"
                                            class="copreci-download__link"
                                            target="_blank"
                                        >
                                            <img :src="blok.icon.filename">
                                            <span>{{ useFilename(download) }}</span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-span-4 copreci-download__col">
                            <div class="copreci-download__block">
                                <header>
                                    <h4>
                                        {{ data.corporative.elements.title }}
                                    </h4>
                                </header>
                                <ul
                                    v-if="data.corporative.elements.downloads"
                                    class="copreci-download__downloads"
                                >
                                    <li
                                        v-for="download in data.corporative.elements.downloads"
                                        :key="download._uid"
                                    >
                                        <a
                                            :href="download.filename"
                                            class="copreci-download__link"
                                            target="_blank"
                                        >
                                            <img :src="blok.icon.filename">
                                            <span>{{ useFilename(download) }}</span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-span-4 copreci-download__col">
                            <div class="copreci-download__block">
                                <header>
                                    <h4>
                                        {{ data.corporative.projects.title }}
                                    </h4>
                                </header>
                                <ul
                                    v-if="data.corporative.projects.downloads"
                                    class="copreci-download__downloads"
                                >
                                    <li
                                        v-for="download in data.corporative.projects.downloads"
                                        :key="download._uid"
                                    >
                                        <a
                                            :href="download.filename"
                                            class="copreci-download__link"
                                            target="_blank"
                                        >
                                            <img :src="blok.icon.filename">
                                            <span>{{ useFilename(download) }}</span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-span-4 copreci-download__col">
                            <div class="copreci-download__block">
                                <header>
                                    <h4>
                                        {{ data.quality.politics.title }}
                                    </h4>
                                </header>
                                <ul
                                    v-if="data.quality.politics.downloads"
                                    class="copreci-download__downloads"
                                >
                                    <li
                                        v-for="download in data.quality.politics.downloads"
                                        :key="download._uid"
                                    >
                                        <a
                                            :href="download.filename"
                                            class="copreci-download__link"
                                            target="_blank"
                                        >
                                            <img :src="blok.icon.filename">
                                            <span>{{ useFilename(download) }}</span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </UContainer>
        </section>
    </article>
</template>
