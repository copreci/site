import { Resend } from 'resend'

export default defineEventHandler(async (event) => {
    const { resendApiKey } = useRuntimeConfig(event)
    const resend = new Resend(resendApiKey)

    const body = await readBody(event)

    try {
        const data = await resend.emails.send({
            from: body.address,
            to: body.address,
            subject: 'Copreci Web (Formulario de contacto)',
            html: `<p>Nombre: ${body.name}</p>
            <p>Apellidos: ${body.surname}</p>
            <p>Email: ${body.email}</p>
            <p>Teléfono: ${body.phone}</p>
            <p>Empresa: ${body.company}</p>
            <p>País: ${body.country}</p>
            <p>Región: ${body.region}</p>
            <p>Mensaje: ${body.message}</p>`,
        })

        return data
    }
    catch (error: any) {
        throw createError({
            statusCode: error.code,
            statusMessage: error.message,
        })
    }
})
