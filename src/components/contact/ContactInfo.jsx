import { motion } from 'framer-motion'
import { FiMail, FiMapPin, FiGithub, FiLinkedin } from 'react-icons/fi'

const contactItems = [
  {
    icon: <FiMail size={20} />,
    label: 'Email',
    value: 'atifsiyal580@gmail.com',
    href: 'mailto:atifsiyal580@gmail.com',
  },
  {
    icon: <FiMapPin size={20} />,
    label: 'Location',
    value: 'Sukkur, Pakistan',
    href: null,
  },
  {
    icon: <FiGithub size={20} />,
    label: 'GitHub',
    value: 'github.com/atif929',
    href: 'https://github.com/atif929',
  },
  {
    icon: <FiLinkedin size={20} />,
    label: 'LinkedIn',
    value: 'Atif Rameez',
    href: 'https://www.linkedin.com/in/atif-rameez-b92ba7390/',
  },
]

const ContactInfo = () => {
  return (
    <div className="flex flex-col gap-6">
      {/* Header */}
      <div>
        <h3 className="text-text font-bold text-xl mb-2">
          Let's <span className="text-gradient-primary">Connect</span>
        </h3>

        <p className="text-muted text-sm leading-relaxed">
          I'm currently open to internship opportunities, freelance projects,
          and interesting collaborations. Feel free to reach out!
        </p>
      </div>

      {/* Contact Items */}
      <div className="flex flex-col gap-3">
        {contactItems.map((item, i) => (
          <motion.div
            key={item.label}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
          >
            {item.href ? (
              <a
                href={item.href}
                target={item.href.startsWith('http') ? '_blank' : '_self'}
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-xl bg-card border border-card-border hover:border-primary/30 hover:bg-card-hover transition-all duration-300 group"
              >
                <span className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center text-primary flex-shrink-0 group-hover:bg-primary/20 transition-colors duration-300">
                  {item.icon}
                </span>

                <div>
                  <p className="text-muted text-xs font-medium">
                    {item.label}
                  </p>

                  <p className="text-text text-sm font-semibold group-hover:text-primary transition-colors duration-300">
                    {item.value}
                  </p>
                </div>
              </a>
            ) : (
              <div className="flex items-center gap-4 p-4 rounded-xl bg-card border border-card-border">
                <span className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center text-primary flex-shrink-0">
                  {item.icon}
                </span>

                <div>
                  <p className="text-muted text-xs font-medium">
                    {item.label}
                  </p>

                  <p className="text-text text-sm font-semibold">
                    {item.value}
                  </p>
                </div>
              </div>
            )}
          </motion.div>
        ))}
      </div>

      {/* Availability Badge */}
      <div className="flex items-center gap-3 p-4 rounded-xl bg-accent/10 border border-accent/20">
        <span className="w-2.5 h-2.5 rounded-full bg-accent animate-ping-slow flex-shrink-0" />

        <p className="text-accent text-sm font-medium">
          Available for internships & freelance projects
        </p>
      </div>
    </div>
  )
}

export default ContactInfo