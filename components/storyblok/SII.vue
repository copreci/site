<script setup lang="ts">
defineProps({ blok: Object })

const whatEl = ref()
const whatShow = ref(false)
const howEl = ref()
const howShow = ref(false)

const gsap = useGSAP()

const onEnter = (el: any) => {
    gsap.to(el, {
        opacity: 1,
        height: 'auto',
        duration: 0.25,
    })
}

const onLeave = (el: any) => {
    gsap.to(el, {
        opacity: 0,
        height: 0,
        duration: 0.25,
    })
}

watch(() => whatShow, (value) => {
    if (value) {
        onEnter(whatEl.value)
    }
    else {
        onLeave(whatEl.value)
    }
}, { immediate: true })
</script>

<template>
    <article
        v-if="blok"
        class="sii"
    >
        <UContainer>
            <header class="mb-10 py-20">
                <h1 class="fs-40/50 text-copreci-500 font-light">
                    {{ blok.title }}
                </h1>
            </header>
        </UContainer>
        <section>
            <header class="py-4 border-t border-b border-copreci-500">
                <UContainer>
                    <h3 class="fs-22/26 text-copreci-500 font-bold">
                        {{ blok.what_title }}
                    </h3>
                </UContainer>
            </header>
            <UContainer>
                <div class="mt-12 copreci-text copreci-text--sm">
                    <StoryblokRichText :doc="blok.what_intro" />
                </div>

                <div
                    v-if="whatShow"
                    ref="whatEl"
                    class="mt-8 copreci-text copreci-text--sm"
                >
                    <StoryblokRichText :doc="blok.what_extended" />
                </div>

                <div class="mt-8">
                    <UButton
                        :label="whatShow ? blok.less : blok.more"
                        :trailing-icon="whatShow ? 'i-heroicons-minus' : 'i-heroicons-plus'"
                        @click="whatShow = !whatShow"
                    />
                </div>
            </UContainer>
        </section>
        <section class="copreci-section">
            <header class="py-4 border-t border-b border-copreci-500">
                <UContainer>
                    <h3 class="fs-22/26 text-copreci-500 font-bold">
                        {{ blok.how_title }}
                    </h3>
                </UContainer>
            </header>
            <UContainer>
                <div class="mt-12 copreci-text copreci-text--sm">
                    <StoryblokRichText :doc="blok.how_intro" />
                </div>

                <div
                    v-if="howShow"
                    ref="howEl"
                    class="mt-8 copreci-text copreci-text--sm"
                >
                    <StoryblokRichText :doc="blok.how_extended" />
                </div>

                <div class="mt-8">
                    <UButton
                        :label="howShow ? blok.less : blok.more"
                        :trailing-icon="howShow ? 'i-heroicons-minus' : 'i-heroicons-plus'"
                        @click="howShow = !howShow"
                    />
                </div>
            </UContainer>
        </section>
    </article>
</template>
