import { useState } from 'react'
import { motion } from 'framer-motion'
import { FiSend, FiCheck } from 'react-icons/fi'

const initialState = { name: '', email: '', subject: '', message: '' }

const ContactForm = () => {
  const [form,       setForm]       = useState(initialState)
  const [status,     setStatus]     = useState('idle') // idle | sending | sent | error
  const [errors,     setErrors]     = useState({})

  const validate = () => {
    const e = {}
    if (!form.name.trim())                          e.name    = 'Name is required'
    if (!form.email.trim())                         e.email   = 'Email is required'
    else if (!/\S+@\S+\.\S+/.test(form.email))     e.email   = 'Invalid email address'
    if (!form.subject.trim())                       e.subject = 'Subject is required'
    if (!form.message.trim())                       e.message = 'Message is required'
    else if (form.message.trim().length < 20)       e.message = 'Message must be at least 20 characters'
    return e
  }

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
    if (errors[e.target.name]) setErrors({ ...errors, [e.target.name]: '' })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const e2 = validate()
    if (Object.keys(e2).length > 0) { setErrors(e2); return }

    setStatus('sending')

    // Opens mailto as fallback (no backend needed yet)
    const mailto = `mailto:atifsiyal580@gmail.com?subject=${encodeURIComponent(form.subject)}&body=${encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`)}`
    window.open(mailto, '_blank')

    setTimeout(() => {
      setStatus('sent')
      setForm(initialState)
      setTimeout(() => setStatus('idle'), 4000)
    }, 500)
  }

  const fields = [
    { name: 'name',    label: 'Full Name',     type: 'text',  placeholder: 'Atif Rameez',              half: true  },
    { name: 'email',   label: 'Email Address', type: 'email', placeholder: 'atif@example.com',         half: true  },
    { name: 'subject', label: 'Subject',       type: 'text',  placeholder: 'Internship Opportunity...', half: false },
    { name: 'message', label: 'Message',       type: 'textarea', placeholder: 'Tell me more about...', half: false },
  ]

  return (
    <div className="card p-6 sm:p-8">
      <h3 className="text-text font-bold text-xl mb-6">Send a Message</h3>

      <form onSubmit={handleSubmit} noValidate>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {fields.map((field) => (
            <div
              key={field.name}
              className={field.half ? '' : 'sm:col-span-2'}
            >
              <label className="block text-text text-sm font-medium mb-1.5">
                {field.label}
              </label>

              {field.type === 'textarea' ? (
                <textarea
                  name={field.name}
                  value={form[field.name]}
                  onChange={handleChange}
                  placeholder={field.placeholder}
                  rows={5}
                  className={`input-field resize-none ${errors[field.name] ? 'border-red-500/60 focus:border-red-500' : ''}`}
                />
              ) : (
                <input
                  type={field.type}
                  name={field.name}
                  value={form[field.name]}
                  onChange={handleChange}
                  placeholder={field.placeholder}
                  className={`input-field ${errors[field.name] ? 'border-red-500/60 focus:border-red-500' : ''}`}
                />
              )}

              {errors[field.name] && (
                <p className="text-red-400 text-xs mt-1">{errors[field.name]}</p>
              )}
            </div>
          ))}
        </div>

        {/* Submit */}
        <motion.button
          type="submit"
          disabled={status === 'sending' || status === 'sent'}
          whileTap={{ scale: 0.97 }}
          className={`
            mt-6 w-full flex items-center justify-center gap-2
            px-6 py-3.5 rounded-xl font-semibold text-sm
            transition-all duration-300
            ${status === 'sent'
              ? 'bg-green-500/20 border border-green-500/30 text-green-400'
              : 'bg-gradient-primary text-white shadow-glow-sm hover:shadow-glow-primary hover:-translate-y-0.5'
            }
            disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none
          `}
        >
          {status === 'sending' && (
            <>
              <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              Sending...
            </>
          )}
          {status === 'sent' && (
            <>
              <FiCheck size={16} />
              Message Sent!
            </>
          )}
          {(status === 'idle' || status === 'error') && (
            <>
              <FiSend size={16} />
              Send Message
            </>
          )}
        </motion.button>
      </form>
    </div>
  )
}

export default ContactForm