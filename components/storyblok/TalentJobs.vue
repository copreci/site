<script setup lang="ts">
defineProps({ blok: Object })

const { locale } = useI18n()
useHead({
    script: [
        {
            id: 'tc-jswidget-script',
            type: 'application/javascript',
            src: 'https://careers.talentclue.com/sites/static/widget/jswidget.min.js',
            tagPosition: 'bodyClose',
        },
    ],
})
</script>

<template>
    <section
        v-if="blok"
        id="talent-jobs"
        class="copreci-section"
    >
        <UContainer>
            <div class="copreci-grid">
                <div class="col-span-6">
                    <header class="copreci-text">
                        <h2>
                            {{ blok.title }}
                        </h2>
                    </header>
                </div>
            </div>
            <div>
                <div
                    id="tc-jswidget"
                    data-client-id="c895916a1c9de7067b5f1c6ecfa0d041"
                    :data-lang="locale ?? 'es'"
                    data-job-listing="1"
                />
            </div>
        </UContainer>
    </section>
</template>
