export default defineNuxtRouteMiddleware((to) => {
    if (to.path.startsWith('/es/') || to.path == '/es') {
        return navigateTo('/')
    }
})