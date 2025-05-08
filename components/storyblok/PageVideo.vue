<script setup lang="ts">
defineProps({ blok: Object })

const isLoaded = ref(false)
const isPlaying = ref(false)
const video = ref()

async function play() {
    await video.value.play()
}
</script>

<template>
    <section
        v-if="blok"
    >
        <div class="relative aspect-video overflow-hidden">
            <ScriptVimeoPlayer
                :id="blok.id"
                ref="video"
                class="group"
                @loaded="isLoaded = true"
                @play="isPlaying = true"
                @pause="isPlaying = false"
            >
                <template #placeholder>
                    <div v-if="blok.cover">
                        <img
                            v-gsap.whenVisible.from="{ opacity: 0, y: 100 }"
                            :src="blok.cover.filename"
                            :alt="blok.cover.alt"
                            class="w-full h-full object-cover"
                        >
                        <button
                            class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 cursor-pointer hover:opacity-80"
                            @click="play()"
                        >
                            <svg
                                id="Grupo_982"
                                data-name="Grupo 982"
                                xmlns="http://www.w3.org/2000/svg"
                                xmlns:xlink="http://www.w3.org/1999/xlink"
                                width="105.314"
                                height="81.639"
                                viewBox="0 0 105.314 81.639"
                            >
                                <defs>
                                    <clipPath id="clip-path">
                                        <rect
                                            id="Rectángulo_2303"
                                            data-name="Rectángulo 2303"
                                            width="105.314"
                                            height="81.639"
                                            fill="#ff1b22"
                                        />
                                    </clipPath>
                                </defs>
                                <g
                                    id="Grupo_981"
                                    data-name="Grupo 981"
                                    transform="translate(0 0)"
                                    clip-path="url(#clip-path)"
                                >
                                    <path
                                        id="Trazado_1570"
                                        data-name="Trazado 1570"
                                        d="M26.626,16.859,7.033,28.288c-.816.816-1.633,0-1.633-.816V4.613c0-.816.816-1.633,1.633-.816L26.626,15.226c.816,0,.816,1.633,0,1.633"
                                        transform="translate(38.685 24.777)"
                                        fill="#ff1b22"
                                    />
                                    <path
                                        id="Trazado_1571"
                                        data-name="Trazado 1571"
                                        d="M63.679,81.639H40.82C17.961,81.639,0,63.679,0,41.636,0,18.777,18.777,0,40.82,0H64.495c22.859,0,40.82,18.777,40.82,41.636,0,22.043-18.777,40-41.636,40M40.82,8.98A32.752,32.752,0,0,0,8.164,41.636c0,17.961,14.7,31.839,32.656,31.839H64.495c17.961,0,32.656-13.879,32.656-31.839A32.752,32.752,0,0,0,64.495,8.98Z"
                                        transform="translate(0 0)"
                                        fill="#ff1b22"
                                    />
                                </g>
                            </svg>
                        </button>
                    </div>
                </template>
            </ScriptVimeoPlayer>
        </div>
    </section>
</template>
