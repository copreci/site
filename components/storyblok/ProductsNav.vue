<script setup lang="ts">
defineProps({ blok: Object })

const onScrollTo = (id: string) => {
    useGSAP().to(window, {
        scrollTo: {
            y: `#${id}`,
            offsetY: 130,
        },
    })
}
</script>

<template>
    <div
        v-if="blok"
        class="sticky top-[73px] border-t border-b border-copreci-500 bg-white z-40"
    >
        <UContainer>
            <nav class="py-4">
                <ul class="flex items-center justify-between gap-x-4">
                    <li
                        v-for="item in blok.items"
                        :key="item._uid"
                    >
                        <button
                            class="fs-18/25 text-copreci-500 font-bold cursor-pointer hover:opacity-80"
                            @click="onScrollTo(item.id)"
                        >
                            {{ item.name }}
                        </button>
                    </li>
                </ul>
            </nav>
        </UContainer>
    </div>
</template>
