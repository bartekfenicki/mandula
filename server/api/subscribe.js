import nodemailer from 'nodemailer'

export default defineEventHandler(async (event) => {
  const { email } = await readBody(event)

  if (!email) {
    return {
      status: 400,
      body: {
        message: 'Email is required.'
      }
    }
  }

  const {EmailNews} = useRuntimeConfig()
  const {EmailPass} = useRuntimeConfig()

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: `${EmailNews}`,
      pass: `${EmailPass}`
    }
  })

  const mailOptions = {
    from: `${EmailNews}`,
    to: 'bartek.fenicki@gmail.com',
    subject: 'Newsletter Subscription',
    text: `New subscription from: ${email}`
  }

  try {
    await transporter.sendMail(mailOptions)
    return {
      status: 200,
      body: {
        message: 'Subscription successful.'
      }
    }
  } catch (error) {
    console.error('Error sending email:', error)
    return {
      status: 500,
      body: {
        message: 'Internal Server Error'
      }
    }
  }
})