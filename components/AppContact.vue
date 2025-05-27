<script setup lang="ts">
import type { RadioGroupItem } from '@nuxt/ui'
import { z } from 'zod'

const { state } = useAppStore()
const route = useRoute()

const toast = useToast()

const schema = z.object({
    name: z.string().min(1),
    surname: z.string().min(1),
    email: z.string().email(),
    phone: z.string().min(1),
    country: z.string().min(1),
    region: z.string().min(1),
})

const formState = reactive({
    name: '',
    surname: '',
    email: '',
    phone: '',
    company: '',
    country: '',
    region: '',
    message: '',
    customer: 'yes',
    supplier: 'no',
    legal: false,
    address: useString(state, 'form_address'),
})

const loading = ref(false)

const items = ref<RadioGroupItem[]>([
    {
        label: useString(state, 'form_yes'),
        value: 'yes',
    },
    {
        label: useString(state, 'form_no'),
        value: 'no',
    },
])

const onReset = () => {
    formState.name = ''
    formState.surname = ''
    formState.email = ''
    formState.phone = ''
    formState.company = ''
    formState.country = ''
    formState.region = ''
    formState.customer = 'no'
    formState.supplier = 'no'
    formState.legal = false
    formState.message = ''
}

const onCancel = () => {
    onReset()
}

const onSubmit = async () => {
    loading.value = true

    const { data } = await useFetch('/api/mail', {
        method: 'POST',
        body: JSON.stringify(formState),
    })

    loading.value = false

    if (data.value) {
        if (data.value.data) {
            toast.add({
                title: useString(state, 'form_success'),
                icon: 'i-heroicons-check-circle',
                color: 'success',
            })
            onReset()
        }
        else {
            toast.add({
                title: useString(state, 'form_error'),
                icon: 'i-heroicons-exclamation-circle',
                color: 'error',
            })
        }
    }
}
</script>

<template>
    <section
        v-if="!route.path.includes('/sii')"
        class="copreci-section copreci-section--gray"
    >
        <UContainer>
            <div class="copreci-text copreci-header">
                <h3>
                    {{ useString(state, 'form_title') }}
                </h3>
            </div>
            <UForm
                :state="formState"
                :schema="schema"
                @submit="onSubmit"
            >
                <div class="grid grid-cols-12 gap-x-6 gap-y-6 items-center">
                    <div class="col-span-4 max-[769px]:col-span-12">
                        <UFormField
                            name="name"
                        >
                            <UInput
                                v-model="formState.name"
                                :placeholder="`${useString(state, 'form_name')} *`"
                                class="w-full"
                            />
                        </UFormField>
                    </div>
                    <div class="col-span-4 max-[769px]:col-span-12">
                        <UFormField
                            name="surname"
                        >
                            <UInput
                                v-model="formState.surname"
                                :placeholder="`${useString(state, 'form_surname')} *`"
                                class="w-full"
                            />
                        </UFormField>
                    </div>
                    <div class="col-span-4 max-[769px]:col-span-12">
                        <UFormField
                            name="email"
                        >
                            <UInput
                                v-model="formState.email"
                                :placeholder="`${useString(state, 'form_email')} *`"
                                class="w-full"
                            />
                        </UFormField>
                    </div>
                    <div class="col-span-6 max-[769px]:col-span-12">
                        <UFormField
                            name="phone"
                        >
                            <UInput
                                v-model="formState.phone"
                                :placeholder="`${useString(state, 'form_phone')} *`"
                                class="w-full"
                            />
                        </UFormField>
                    </div>
                    <div class="col-span-6 max-[769px]:col-span-12">
                        <UFormField
                            name="company"
                        >
                            <UInput
                                v-model="formState.company"
                                :placeholder="useString(state, 'form_company')"
                                class="w-full"
                            />
                        </UFormField>
                    </div>
                    <div class="col-span-6 max-[769px]:col-span-12">
                        <UFormField
                            name="country"
                        >
                            <UInput
                                v-model="formState.country"
                                :placeholder="`${useString(state, 'form_country')} *`"
                                class="w-full"
                            />
                        </UFormField>
                    </div>
                    <div class="col-span-6 max-[769px]:col-span-12">
                        <UFormField
                            name="region"
                        >
                            <UInput
                                v-model="formState.region"
                                :placeholder="useString(state, 'form_region')"
                                class="w-full"
                            />
                        </UFormField>
                    </div>
                    <div class="col-span-4 max-[769px]:col-span-6 max-[641px]:col-span-12">
                        <div class="flex items-center gap-x-6">
                            <label class="text-sm font-medium">{{ useString(state, 'form_customer') }}</label>
                            <URadioGroup
                                v-model="formState.customer"
                                :items="items"
                                orientation="horizontal"
                            />
                        </div>
                    </div>
                    <div class="col-span-4 max-[769px]:col-span-6 max-[641px]:col-span-12">
                        <div class="flex items-center gap-x-6">
                            <label class="text-sm font-medium">{{ useString(state, 'form_supplier') }}</label>
                            <URadioGroup
                                v-model="formState.supplier"
                                :items="items"
                                orientation="horizontal"
                            />
                        </div>
                    </div>
                    <div class="col-span-4 max-[769px]:col-span-6 max-[641px]:hidden" />
                    <div class="col-span-12 max-[769px]:col-span-12">
                        <UFormField
                            name="message"
                            :label="useString(state, 'form_message')"
                        >
                            <UTextarea
                                v-model="formState.message"
                                class="w-full"
                                :rows="8"
                            />
                        </UFormField>
                    </div>
                    <div class="col-span-8 max-[769px]:col-span-12 max-[641px]:col-span-12">
                        <UCheckbox
                            v-model="formState.legal"
                            color="neutral"
                            :label="useString(state, 'form_legal')"
                        />
                    </div>
                    <div class="col-span-4 flex items-center justify-end gap-x-2.5 max-[769px]:col-span-12 max-[769px]:justify-start">
                        <UButton
                            class="ring-black text-black px-9 rounded-[30px] py-2.5 hover:bg-white/50"
                            @click="onCancel"
                        >
                            {{ useString(state, 'form_cancel') }}
                        </UButton>
                        <UButton
                            type="submit"
                            :loading="loading"
                            class="ring-black text-white bg-black px-9 rounded-[30px] py-2.5 hover:bg-black/80 :active:bg-black disabled:bg-black/80 gap-x-2.5"
                        >
                            {{ useString(state, 'form_submit') }}
                        </UButton>
                    </div>
                </div>
            </UForm>
        </UContainer>
    </section>
</template>
