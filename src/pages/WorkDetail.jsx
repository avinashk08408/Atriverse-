import { Link, Navigate, useParams } from 'react-router-dom'
import Seo from '../components/ui/Seo.jsx'
import Reveal from '../components/ui/Reveal.jsx'
import Img from '../components/ui/Img.jsx'
import PageHeader from '../components/ui/PageHeader.jsx'
import CTASection from '../components/ui/CTASection.jsx'
import { WORK } from '../data/work.js'

const SERVICE_SCOPE = {
  Entertainment: ['Performance curation', 'Artist and talent coordination', 'Audience energy and show flow'],
  Events: ['Event planning and coordination', 'On-ground execution', 'Guest, venue and programme experience'],
  Production: ['Photography and videography', 'Visual direction and shot planning', 'Editing and final delivery'],
  Creative: ['Concept and visual direction', 'Campaign and brand design', 'Content-ready creative assets'],
  Media: ['Short-form content planning', 'Reels production and editing', 'Platform-ready delivery'],
}

function WorkDetail() {
  const { slug } = useParams()
  const project = WORK.find((item) => item.id === slug)
  if (!project) return <Navigate to="/work" replace />
  const scope = SERVICE_SCOPE[project.category] || SERVICE_SCOPE.Creative

  return (
    <div className="work-detail-page">
      <Seo title={`${project.title} | ATTI VERSE`} description={project.description} path={`/work/${project.id}`} />
      <PageHeader eyebrow="Selected Work" crumb={project.title} title={project.title.toUpperCase()} subtitle={`${project.category} · ${project.year}`} image={project.image} />
      <section className="section work-detail-intro">
        <div className="container work-detail-intro__grid">
          <Reveal dir="right"><div className="work-detail-intro__image"><Img src={project.image} alt={project.title} /></div></Reveal>
          <div className="work-detail-intro__copy"><Reveal dir="up"><span className="eyebrow">The work / {project.category}</span><h2>BUILT AROUND THE <span className="text-gold">BRIEF.</span></h2><p>{project.description}</p></Reveal><Reveal dir="up" delay={120}><div className="work-detail-intro__meta"><div><span>Discipline</span><strong>{project.category}</strong></div><div><span>Record</span><strong>{project.year}</strong></div></div></Reveal></div>
        </div>
      </section>
      <section className="section section--off-white work-detail-scope">
        <div className="container"><Reveal dir="up"><span className="eyebrow">What we provide</span><h2 className="section-title">FROM IDEA TO <span className="text-gold">DELIVERY.</span></h2></Reveal><div className="work-detail-scope__list">{scope.map((item, i) => <Reveal key={item} dir="up" delay={i * 70}><div><b>0{i + 1}</b><h3>{item}</h3><span>ATTI VERSE / {project.category}</span></div></Reveal>)}</div></div>
      </section>
      <section className="section"><div className="container work-detail-story"><Reveal dir="up"><span className="eyebrow">Project note</span><h2>EVERY DETAIL MOVES THE <span className="text-gold">EXPERIENCE.</span></h2><p>We bring the right creative, production and coordination capabilities around the brief, keeping the process clear and the final experience intentional. This project record will expand as more verified details are documented.</p><Link to="/work" className="text-link">Back to selected work <span>↗</span></Link></Reveal></div></section>
      <CTASection title="HAVE A BRIEF IN MIND?" copy={<>Tell us what you are building and let’s shape the next experience together.</>} primary={{ label: 'Start A Conversation', to: '/contact' }} />
    </div>
  )
}

export default WorkDetail
