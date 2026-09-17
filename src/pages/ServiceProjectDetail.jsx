import { Navigate, Link, useParams } from 'react-router-dom'
import Seo from '../components/ui/Seo.jsx'
import Reveal from '../components/ui/Reveal.jsx'
import Img from '../components/ui/Img.jsx'
import PageHeader from '../components/ui/PageHeader.jsx'
import CTASection from '../components/ui/CTASection.jsx'
import { SERVICES } from '../data/services.js'

function ServiceProjectDetail() {
  const { slug, projectIndex } = useParams()
  const service = SERVICES.find((item) => item.slug === slug)
  const project = service?.portfolio?.[Number(projectIndex)]
  if (!service || !project) return <Navigate to={`/services/${slug || ''}`} replace />
  const gallery = [service.image, ...SERVICES.filter((item) => item.slug !== slug).slice(0, 2).map((item) => item.image)]
  return (
    <div className="project-story-page">
      <Seo title={`${project.title} | Attii Verse`} description={`How Attii Verse approaches ${project.title}.`} path={`/services/${slug}/project/${projectIndex}`} />
      <PageHeader eyebrow={`${service.number} — Project Story`} crumb={project.title} title={project.title.toUpperCase()} subtitle={`${project.category} / ${project.year}`} image={service.image} />
      <section className="section project-story__intro">
        <div className="container project-story__grid">
          <Reveal dir="right"><div className="project-story__hero"><Img src={service.image} alt={project.title} /></div></Reveal>
          <div><Reveal dir="up"><span className="eyebrow">The Brief</span><h2>FROM FIRST IDEA TO <span className="text-gold">FINAL MOMENT.</span></h2><p>Every event begins with a clear understanding of its purpose, audience and energy. For this {project.category.toLowerCase()} brief, the Attii Verse team shapes the creative direction before the execution begins.</p></Reveal><Reveal dir="up" delay={120}><div className="project-story__meta"><div><span>Service</span><strong>{service.title}</strong></div><div><span>Year</span><strong>{project.year}</strong></div></div></Reveal></div>
        </div>
      </section>
      <section className="section section--off-white"><div className="container project-story__narrative"><Reveal dir="up"><span className="eyebrow">How We Conduct The Work</span><h2>CLARITY IN THE PLAN. <span className="text-gold">ENERGY IN THE DELIVERY.</span></h2></Reveal><div className="project-story__steps"><div><b>01</b><h3>Understand</h3><p>We align on the audience, objective, mood and experience the project needs to create.</p></div><div><b>02</b><h3>Build</h3><p>Creative, production and coordination teams turn the brief into a practical execution plan.</p></div><div><b>03</b><h3>Deliver</h3><p>On-ground teams coordinate every moving part and protect the quality of the final moment.</p></div></div></div></section>
      <section className="section"><div className="container"><div className="project-story__gallery-head"><span className="eyebrow">Related Visuals</span><p>Frames from the wider {service.title.toLowerCase()} world.</p></div><div className="project-story__gallery">{gallery.map((src, i) => <Reveal key={src + i} dir="up" delay={i * 80}><Img src={src} alt={`${project.title} visual ${i + 1}`} /></Reveal>)}</div></div></section>
      <CTASection title="BUILD THE NEXT MOMENT." copy={<>Have a similar {project.category.toLowerCase()} brief? <Link to="/contact" className="text-link">Start a conversation ↗</Link></>} />
    </div>
  )
}
export default ServiceProjectDetail
