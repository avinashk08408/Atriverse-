import { Link } from 'react-router-dom'
import Seo from '../components/ui/Seo.jsx'
import Reveal from '../components/ui/Reveal.jsx'
import Img from '../components/ui/Img.jsx'
import SectionHeading from '../components/ui/SectionHeading.jsx'
import PageHeader from '../components/ui/PageHeader.jsx'
import CTASection from '../components/ui/CTASection.jsx'
import { SERVICES } from '../data/services.js'

function ServiceCard({ service, index }) {
  return (
    <Reveal dir="up" delay={(index % 2) * 90}>
      <Link to={`/services/${service.slug}`} className="service-catalog__card">
        <div className="service-catalog__media">
          <Img src={service.image} alt={`${service.title} — Attii Verse`} />
          <span className="service-catalog__number">{service.number}</span>
          <span className="service-catalog__lens">{service.lens}</span>
        </div>
        <div className="service-catalog__body">
          <div className="service-catalog__topline"><span>SERVICE / {service.number}</span><span>↗</span></div>
          <h2>{service.title}</h2>
          <p className="service-catalog__tagline">{service.tagline}</p>
          <p className="service-catalog__description">{service.description}</p>
          <div className="service-catalog__footer"><span>{service.capabilities.slice(0, 3).join(' / ')}</span><strong>EXPLORE</strong></div>
        </div>
      </Link>
    </Reveal>
  )
}

function Services() {
  return (
    <>
      <Seo title="Services | Entertainment, Events, Media & Creative — Attii Verse" description="Attii Verse services: entertainment, event management, media production, film & creative production, design and talent collaboration." path="/services" />
      <PageHeader eyebrow="Services" crumb="Services" title="WHAT WE DO" subtitle="One creative ecosystem. Six disciplines — from stage to screen, from concept to execution." />
      <section className="section services-catalog">
        <div className="container">
          <div className="services-catalog__intro">
            <SectionHeading eyebrow="Capabilities / Service Catalogue" title="BUILT FOR THE WORK THAT MOVES PEOPLE." />
            <Reveal dir="left" delay={120}><p>Explore the six divisions that bring Attii Verse projects from first idea to final delivery. Every service follows the same standard of clarity, creativity and coordination.</p></Reveal>
          </div>
          <div className="service-catalog__grid">
            {SERVICES.map((service, index) => <ServiceCard key={service.id} service={service} index={index} />)}
          </div>
        </div>
      </section>
      <CTASection copy={<>Not sure which service fits? Tell us what you&apos;re building — we&apos;ll find the right team and the right approach.</>} />
    </>
  )
}

export default Services
