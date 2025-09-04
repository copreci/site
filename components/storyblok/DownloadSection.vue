<script setup lang="ts">
defineProps({ blok: Object })
</script>

<template>
    <section v-if="blok">
        <header class="py-4 sticky top-[73px] border-t border-b border-copreci-500 bg-white z-40 max-[769px]:top-[64px]">
            <UContainer>
                <h3 class="fs-18/25 text-copreci-500 font-bold">
                    {{ blok.title }}
                </h3>
            </UContainer>
        </header>
        <UContainer>
            <div class="py-20 copreci-download">
                <div class="grid grid-cols-12 gap-x-6 gap-y-16 max-[769px]:grid-cols-1">
                    <StoryblokComponent
                        v-for="item in blok?.categories"
                        :key="item._uid"
                        v-editable="item"
                        :blok="item"
                    />
                </div>
            </div>
        </UContainer>
    </section>
</template>
