import { defineStore } from 'pinia'

export const useAppStore = defineStore('app', () => {
    const state = reactive<{
        strings: any[]
        logo: any
        logo_white: any
        logo_mondragon: any
        form_legal: any
        menu: any[]
        ssmm: any[]
        legal: any[]
        downloads: string
        about_page: string
        projects_page: string
        talent_page: string
        actuality_page: string
        products_page: string
        slugs: any[]
        seo: any
    }>({
        strings: [],
        logo: '',
        logo_white: '',
        logo_mondragon: '',
        form_legal: '',
        menu: [],
        ssmm: [],
        legal: [],
        downloads: '',
        about_page: '',
        projects_page: '',
        talent_page: '',
        actuality_page: '',
        products_page: '',
        slugs: [],
        seo: undefined,
    })

    return {
        state,
    }
})
