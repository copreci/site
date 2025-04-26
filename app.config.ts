export default defineAppConfig({
    ui: {
        colors: {
            primary: 'copreci',
        },
        icons: {
            loading: 'i-lucide-loader-circle',
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
                    class: 'border border-copreci-500 text-(--color-copreci-500) bg-white hover:bg-white/90',
                },
                {
                    color: 'primary',
                    variant: 'link',
                    class: 'underline px-0',
                },
                {
                    color: 'primary',
                    variant: 'soft',
                    class: 'text-white border border-white hover:bg-white/10',
                },
            ],
        },
        checkbox: {
            defaultVariants: {
                color: 'neutral',
            },
            slots: {
                base: 'bg-white rounded-none',
            },
        },
        container: {
            base: 'px-4 sm:px-4 lg:px-0',
        },
        formField: {
            slots: {
                container: 'mt-4',
                error: 'hidden',
                label: 'text-black',
            },

        },
        input: {
            defaultVariants: {
                color: 'neutral',
            },
            slots: {
                base: 'rounded-[30px]',
            },
            variants: {
                size: {
                    md: {
                        base: 'px-4.5 py-3',
                    },
                },
            },
        },
        radioGroup: {
            defaultVariants: {
                color: 'neutral',
            },
            slots: {
                base: 'bg-white',
            },
        },
        tabs: {
            slots: {
                trigger: 'data-[state=inactive]:text-copreci-500 hover:data-[state=inactive]:not-disabled:text-copreci-500 hover:data-[state=inactive]:not-disabled:opacity-70 hover:data-[state=inactive]:not-disabled:cursor-pointer',
            },
            variants: {
                variant: {
                    pill: {
                        list: 'bg-transparent border border-copreci-500',
                    },
                },
                size: {
                    md: {
                        trigger: 'text-[13px]',
                    },
                },
            },
        },
        textarea: {
            defaultVariants: {
                color: 'neutral',
            },
            slots: {
                base: 'rounded-[10px]',
            },
            variants: {
                size: {
                    md: {
                        base: 'px-4.5 py-3',
                    },
                },
            },
        },
        toast: {
            slots: {
                root: 'rounded-sm',
                wrapper: 'rounded-sm',
                progress: 'h-[2px]',
            },
        },
    },
})
