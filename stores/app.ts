import { defineStore } from 'pinia'

export const useAppStore = defineStore('app', () => {
    const state = reactive<{
        strings: any[]
        logo: any
        menu: any[]
    }>({
        strings: [],
        logo: '',
        menu: [],
    })

    return {
        state,
    }
})
