export default defineAppConfig({
    ui: {
        colors: {
            primary: 'copreci',
        },
        container: {
            base: 'px-4 sm:px-4 lg:px-0',
        },
        button: {
            defaultVariants: {
                color: 'primary',
                variant: 'outline',
            },
            base: 'cursor-pointer',
            variants: {
                size: {
                    md: {
                        base: 'px-6 py-3 text-[13px] gap-5.5',
                        leadingIcon: 'size-4.5',
                        leadingAvatarSize: '2xs',
                        trailingIcon: 'size-4.5',
                    },
                    lg: {
                        base: 'text-lg gap-3.5',
                    },
                },
            },
            compoundVariants: [
                {
                    color: 'primary',
                    variant: 'solid',
                    class: 'text-(--color-copreci-500) bg-white hover:bg-white/90',
                },
                {
                    color: 'primary',
                    variant: 'link',
                    class: 'underline',
                },
            ],
        },
    },
})
