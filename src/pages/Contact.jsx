import Seo from '../components/ui/Seo.jsx'
import Reveal from '../components/ui/Reveal.jsx'
import Img from '../components/ui/Img.jsx'
import PageHeader from '../components/ui/PageHeader.jsx'
import ContactForm from '../components/ui/ContactForm.jsx'
import { IMAGES } from '../config/images.js'

const FORM_OPTIONS = [
  { number: '01', kind: 'General Collaboration', eyebrow: 'For brands, creators and partners', title: 'LET’S BUILD SOMETHING TOGETHER.', copy: 'For a creative idea, brand collaboration, production enquiry or partnership conversation.' },
  { number: '02', kind: 'Join ATTI VERSE', eyebrow: 'For performers and creative talent', title: 'FIND YOUR PLACE IN THE VERSE.', copy: 'Tell us about your discipline, experience and the kind of work you want to contribute to.' },
  { number: '03', kind: 'Organize an Event', eyebrow: 'For colleges, institutions and organizations', title: 'PLAN AN EXPERIENCE PEOPLE REMEMBER.', copy: 'Share your event brief, audience and requirements so our team can understand the opportunity.' },
]

function Contact() {
  return (
    <div className="contact-page">
      <Seo title="Contact | Let's Work Together — ATTI VERSE" description="Connect with ATTI VERSE for collaboration, talent opportunities and event planning." path="/contact" />
      <PageHeader eyebrow="Contact" crumb="Contact" title="LET’S WORK TOGETHER" subtitle="Choose the right door for your idea, your talent or your event." image={IMAGES.services.eventManagement} />
      <section className="section contact-doors">
        <div className="container">
          <Reveal dir="up"><span className="eyebrow">Three ways in</span><h2 className="section-title">ONE VERSE. <span className="text-gold">YOUR NEXT MOVE.</span></h2></Reveal>
          <div className="contact-doors__list">
            {FORM_OPTIONS.map((option, index) => <Reveal key={option.kind} dir="up" delay={index * 100}><section className="contact-door" id={option.kind.toLowerCase().replaceAll(' ', '-')}><div className="contact-door__intro"><span className="contact-door__number">{option.number}</span><div><span className="eyebrow">{option.eyebrow}</span><h3>{option.title}</h3><p>{option.copy}</p></div></div><div className="contact-door__form"><ContactForm kind={option.kind} /></div></section></Reveal>)}
          </div>
        </div>
      </section>
      <section className="section section--dark contact-note"><div className="container"><div className="contact-note__grid"><div><span className="eyebrow">Official inbox</span><h2>THE RIGHT CONVERSATION STARTS <span className="text-gold">HERE.</span></h2></div><Img src={IMAGES.work.creative} alt="ATTI VERSE creative work" /></div></div></section>
    </div>
  )
}

export default Contact
