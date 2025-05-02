export default defineEventHandler(async (event) => {
    const config = useRuntimeConfig(event)
    const query = getQuery(event)

    const story = await $fetch(`https://api.storyblok.com/v2/cdn/stories/${query.slug}?token=${config.public.storyblokAccessToken}&version=${query.version}&language=${query.language}&resolve_links=url`, {
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
    })

    if (story.story) {
        return story.story
    }

    return undefined
})
