import emailjs from '@emailjs/browser'

const SERVICE_ID =
	process.env.REACT_APP_EMAILJS_SERVICE_ID || 'service_f75opab'
const TEMPLATE_ID =
	process.env.REACT_APP_EMAILJS_TEMPLATE_ID || 'template_jr1szlf'
const PUBLIC_KEY =
	process.env.REACT_APP_EMAILJS_PUBLIC_KEY || '_OkziMgM7xZC51NDs'

export function sendContactEmail(e) {
	e.preventDefault()

	const templateParams = {
		user_name: e.target.user_name.value,
		user_email: e.target.user_email.value,
		message: e.target.message.value,
	}

	return emailjs
		.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY)
		.then(() => {
			alert('Message sent successfully ✅')
			e.target.reset()
		})
		.catch((error) => {
			console.log(error)
			alert('Failed ❌')
		})
}
