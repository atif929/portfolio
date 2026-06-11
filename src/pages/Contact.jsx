import PageTransition from '@/components/common/PageTransition'
import Container from '@/components/common/Container'
import SectionHeading from '@/components/common/SectionHeading'
import ContactForm from '@/components/contact/ContactForm'
import ContactInfo from '@/components/contact/ContactInfo'

const Contact = () => {
  return (
    <PageTransition>
      <div className="py-20">
        <Container>
          <div className="flex flex-col gap-12">

            <SectionHeading
              label="Contact"
              title="Get In"
              highlight="Touch"
              subtitle="Have an opportunity, project, or just want to say hi? My inbox is always open."
              align="center"
            />

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
              <ContactInfo />
              <ContactForm />
            </div>

          </div>
        </Container>
      </div>
    </PageTransition>
  )
}

export default Contact