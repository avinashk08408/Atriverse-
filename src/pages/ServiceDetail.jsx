import { Link, useParams, Navigate } from 'react-router-dom'
import { useState } from 'react'
import Seo from '../components/ui/Seo.jsx'
import Reveal from '../components/ui/Reveal.jsx'
import Img from '../components/ui/Img.jsx'
import SectionHeading from '../components/ui/SectionHeading.jsx'
import PageHeader from '../components/ui/PageHeader.jsx'
import CTASection from '../components/ui/CTASection.jsx'
import { SERVICES } from '../data/services.js'
import { PROCESS_STEPS } from '../data/organization.js'
import { PLACEHOLDER } from '../config/site.js'

function ServiceDetail() {
  const { slug } = useParams()
  const [activeForm, setActiveForm] = useState(null)
  const service = SERVICES.find((item) => item.slug === slug)
  if (!service) return <Navigate to="/services" replace />
  const gallery = [service.image, ...SERVICES.filter((s) => s.slug !== slug).slice(0, 2).map((s) => s.image)]

  return (
    <div className="service-detail">
      <Seo title={`${service.title} | Attii Verse`} description={service.description} path={`/services/${slug}`} />
      <PageHeader eyebrow={`${service.number} — Services`} crumb={service.title} title={service.title.toUpperCase()} subtitle={service.tagline} image={service.image} />

      <section className="section service-detail__overview">
        <div className="container service-overview">
          <Reveal dir="right" delay={100}>
            <div className="service-overview__media"><Img src={service.image} alt={`${service.title} — Attii Verse`} priority /></div>
          </Reveal>
          <div className="service-overview__copy">
            <Reveal dir="up">
              <span className="eyebrow">01 / Overview</span>
              <h2 className="service-overview__title">{service.title}</h2>
              <p className="service-overview__hero">{service.hero}</p>
              <p className="service-overview__desc">{service.description}</p>
            </Reveal>
            <Reveal dir="up" delay={120}>
              <div className="service-overview__meta">
                <div><span>Category</span><strong>{service.lens}</strong></div>
                <div><span>Delivery</span><strong>Planned &amp; Coordinated</strong></div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section section--off-white service-detail__capabilities">
        <div className="container grid-2">
          <div><SectionHeading eyebrow="Capabilities" title={<>WHAT THIS DIVISION <span className="text-gold">HANDLES.</span></>} /><Reveal dir="up" delay={120}><p style={{ color: 'var(--text-muted)' }}>The specific skills and services within {service.title.toLowerCase()}. Project examples are added as they are documented.</p></Reveal></div>
          <Reveal dir="up" delay={150}><ul className="check-list service-capabilities__legacy">{service.capabilities.map((cap) => <li key={cap}>{cap}</li>)}</ul></Reveal>
        </div>
      </section>

      <section className="section service-projects-section">
        <div className="container">
          <SectionHeading eyebrow="03 / Relevant Work" title="PROJECT EXAMPLES" subtitle="Documented work within this service. New projects are added as they are verified." />
          {service.portfolio?.length > 0 ? <div className="service-project-cards" style={{ marginTop: '2rem' }}>{service.portfolio.map((p, i) => <Reveal key={p.title} dir="up" delay={i * 80}><article className="service-project-card"><div className="service-project-card__top"><span>{service.number} / {p.category}</span><strong>{p.year === 'TBA' ? PLACEHOLDER.tba : p.year}</strong></div><h3>{p.title}</h3><p>Project details coming soon.</p><Link to={p.title.toLowerCase().includes('srm pongal') ? '/events/srm-pongal-vizha-2026' : `/services/${slug}/project/${i}`}>View event story ↗</Link></article></Reveal>)}</div> : <p className="service-empty">Project details coming soon.</p>}
        </div>
      </section>

      <section className="section section--dark service-process-section">
        <div className="container"><div className="service-process__intro"><SectionHeading eyebrow="04 / Production Method" onDark title="HOW WE WORK" /><p>A clear operating rhythm keeps the creative ambition focused, coordinated and ready for delivery.</p></div><div className="service-process service-process--case-study" style={{ marginTop: '3rem' }}>{PROCESS_STEPS.map((step, i) => <Reveal key={step.number} dir="up" delay={i * 80}><article className="service-process__step"><span>{step.number}</span><div><h3>{step.title}</h3><p>{step.note}</p></div></article></Reveal>)}</div></div>
      </section>

      <section className="section section--light-green service-gallery-section">
        <div className="container"><div className="service-gallery__intro"><SectionHeading eyebrow="05 / Field Notes" title="VISUAL MOMENTS" /><p>Selected frames from the Attii Verse production world — the atmosphere, detail and energy behind the delivery.</p></div><div className="service-gallery service-gallery--contact-sheet" style={{ marginTop: '2.5rem' }}>{gallery.map((src, i) => <Reveal key={src + i} dir="up" delay={i * 80}><figure className={`service-gallery__item ${i === 0 ? 'service-gallery__item--large' : ''}`}><Img src={src} alt={`${service.title} — visual ${i + 1}`} /><figcaption><span>0{i + 1}</span><small>{service.lens} / FIELD NOTE</small></figcaption></figure></Reveal>)}</div></div>
      </section>

      <section className="section service-other-section">
        <div className="container"><div className="service-other__heading"><SectionHeading eyebrow="06 / Explore" title="OTHER SERVICES" /><p>Move through the wider Attii Verse capability system.</p></div><div className="service-other service-other--industrial" style={{ marginTop: '2rem' }}>{SERVICES.filter((s) => s.slug !== slug).map((s, i) => <Reveal key={s.id} dir="up" delay={(i % 3) * 60}><Link to={`/services/${s.slug}`} className="service-other__item"><span>{s.number}</span><div><small>{s.lens}</small><h3>{s.title}</h3><p>{s.summary}</p></div><strong>↗</strong></Link></Reveal>)}</div></div>
      </section>

      <CTASection title="READY TO TALK?" copy={<>Need {service.title.toLowerCase()} for an event, a brand, a campus or a production? Tell us what you&apos;re building — we&apos;ll find the right team and the right approach.</>} secondary={false} inlineFormOptions={[{ label: 'Join Attii Verse', kind: 'Join Attii Verse' }, { label: 'Organize an Event', kind: 'Organize an Event' }]} activeForm={activeForm} onFormSelect={setActiveForm} />
    </div>
  )
}

export default ServiceDetail
