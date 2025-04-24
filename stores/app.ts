import { defineStore } from 'pinia'

export const useAppStore = defineStore('app', () => {
    const state = reactive<{
        strings: any[]
        logo: any
        logo_white: any
        logo_mondragon: any
        menu: any[]
        ssmm: any[]
        legal: any[]
    }>({
        strings: [],
        logo: '',
        logo_white: '',
        logo_mondragon: '',
        menu: [],
        ssmm: [],
        legal: [],
    })

    return {
        state,
    }
})
