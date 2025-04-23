export default defineAppConfig({
    ui: {
        colors: {
            primary: 'copreci',
        },
        button: {
            base: 'cursor-pointer',
            variants: {
                size: {
                    md: {
                        base: 'px-6 py-3 fs-13/16 gap-5.5',
                        leadingIcon: 'size-4.5',
                        leadingAvatarSize: '2xs',
                        trailingIcon: 'size-4.5',
                    },
                },
            },
            compoundVariants: [
                {
                    color: 'primary',
                    variant: 'solid',
                    class: 'text-(--color-copreci-500) bg-white hover:bg-white/90',
                },
            ],
        },
    },
})
