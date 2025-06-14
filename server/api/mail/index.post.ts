import { Resend } from 'resend'

export default defineEventHandler(async (event) => {
    const config = useRuntimeConfig()

    const resend = new Resend(config.resendApiKey)

    const {
        name, surname, email, phone, company, country, region, message, customer, supplier } = await readBody(event)

    const data = await resend.emails.send({
        from: 'Copreci (copreci.com) <home@copreci.com>',
        to: ['home@copreci.com', 'adriaalos@gmail.com'],
        subject: 'Formulario de contacto (copreci.com)',
        html: `
            <p><strong>Nombre:</strong> ${name ? name : '-'}</p>
            <p><strong>Apellidos:</strong> ${surname ? surname : '-'}</p>
            <p><strong>Email:</strong> ${email ? email : '-'}</p>
            <p><strong>Teléfono:</strong> ${phone ? phone : '-'}</p>
            <p><strong>Empresa:</strong> ${company ? company : '-'}</p>
            <p><strong>País:</strong> ${country ? country : '-'}</p>
            <p><strong>Región:</strong> ${region ? region : '-'}</p>
            <p><strong>Mensaje:</strong> ${message ? message : '-'}</p>
            <p><strong>Cliente:</strong> ${customer == 'yes' ? 'Sí' : 'No'}</p>
            <p><strong>Proveedor:</strong> ${supplier == 'yes' ? 'Sí' : 'No'}</p>
            `,
    })

    return data
})
