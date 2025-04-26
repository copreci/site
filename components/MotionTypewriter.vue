<script setup lang="ts">
import { animate, motion, RowValue, useMotionValue } from 'motion-v'
import { onMounted, onUnmounted, watch } from 'vue'

const props = defineProps({
    text: {
        type: String,
        default: 'Hello world!',
    },
})

const children = useMotionValue('')
let animation: any = null

const startAnimation = () => {
    animation = animate(0, props.text.length, {
        duration: 1.5,
        ease: 'linear',
        onUpdate: (latest) => {
            children.set(props.text.slice(0, Math.ceil(latest)))
        },
    })
}

onMounted(() => {
    startAnimation()
})

onUnmounted(() => {
    if (animation) animation.stop()
})

watch(() => props.text, () => {
    if (animation) animation.stop()
    startAnimation()
})
</script>

<template>
    <h2 class="title">
        <motion.span class="monospace">
            <RowValue :value="children" />
        </motion.span>
        <!-- <motion.div
            class="cursor"
            :animate="{
                opacity: [1, 1, 0, 0],
                transition: {
                    duration: 1,
                    repeat: Infinity,
                    times: [0, 0.5, 0.5, 1],
                },
            }"
        /> -->
    </h2>
</template>

<style>
/**
 * ==============   Styles   ================
 */

.title {
  position: relative;
}

.cursor {
  position: absolute;
  right: -10px;
  top: 0;
  bottom: 0;
  background: #fff;
  width: 2px;
  opacity: 0;
}
</style>
