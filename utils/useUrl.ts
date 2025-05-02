export const useUrl = (cached_url: string) => {
    const app = useNuxtApp()
    const { locale } = app.$i18n

    if (locale.value == 'es') {
        return `/${cached_url}`
    }

    return cached_url
}
