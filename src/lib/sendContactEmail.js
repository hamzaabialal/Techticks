import emailjs from '@emailjs/browser'

const SERVICE_ID =
	process.env.REACT_APP_EMAILJS_SERVICE_ID || 'service_f75opab'
const TEMPLATE_ID =
	process.env.REACT_APP_EMAILJS_TEMPLATE_ID || 'template_jr1szlf'
const PUBLIC_KEY =
	process.env.REACT_APP_EMAILJS_PUBLIC_KEY || '_OkziMgM7xZC51NDs'

/**
 * Send the contact form. Returns a Promise that resolves on success
 * and rejects on failure so the caller can render a toast / error state.
 * If no onSuccess/onError callbacks are provided it falls back to alerts
 * (legacy behavior for callers that haven't been upgraded).
 */
export function sendContactEmail(e, opts = {}) {
	e.preventDefault()
	const form = e.target
	const templateParams = {
		user_name: form.user_name.value,
		user_email: form.user_email.value,
		message: form.message.value,
	}

	return emailjs
		.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY)
		.then(() => {
			form.reset()
			if (opts.onSuccess) opts.onSuccess()
			else alert('Message sent successfully ✅')
		})
		.catch((error) => {
			console.error('EmailJS error:', error)
			if (opts.onError) opts.onError(error)
			else alert('Failed ❌')
			throw error
		})
}
