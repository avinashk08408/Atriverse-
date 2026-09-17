import { useState } from 'react'
import Seo from '../components/ui/Seo.jsx'
import Reveal from '../components/ui/Reveal.jsx'
import Img from '../components/ui/Img.jsx'
import PageHeader from '../components/ui/PageHeader.jsx'
import FilterBar from '../components/ui/FilterBar.jsx'
import CTASection from '../components/ui/CTASection.jsx'
import { WORK, WORK_FILTERS } from '../data/work.js'

const CAT_ALIASES = { ALL: (w) => true }

function Work() {
  const [filter, setFilter] = useState('ALL')
  const [eventFormOpen, setEventFormOpen] = useState(false)
  const visible = WORK.filter(CAT_ALIASES[filter] || ((w) => w.category.toUpperCase() === filter))

  return (
    <div className="portfolio-page">
      <Seo
        title="Our Work | Portfolio — Attii Verse"
        description="A portfolio of entertainment, events, production, creative and media work by Attii Verse Entertainment & Productions."
        path="/work"
      />
      <PageHeader
        eyebrow="Our Work"
        crumb="Work"
        title="THE WORK WE CREATE"
        subtitle="Entertainment, events, production, design and media — a visual record of what happens inside the verse."
      />

      <section className="section" style={{ paddingTop: 'clamp(3rem, 6vw, 4.5rem)' }}>
        <div className="container">
          <Reveal dir="up">
            <FilterBar filters={WORK_FILTERS} active={filter} onChange={setFilter} />
          </Reveal>

          {visible.length === 0 ? (
            <Reveal dir="up">
              <p className="center" style={{ color: 'var(--text-muted)' }}>
                Work in this category is being documented — To Be Added.
              </p>
            </Reveal>
          ) : (
            <div className="portfolio-grid">
              {visible.map((project, i) => (
                <Reveal key={project.id} dir="up" delay={(i % 3) * 70}>
                  <article className="portfolio-card">
                    <div className="portfolio-card__media">
                      <Img src={project.image} alt={`${project.title} — ${project.category}`} />
                    </div>
                    <div className="portfolio-card__body">
                      <div className="portfolio-card__top"><span>{project.category}</span><strong>{project.year}</strong></div>
                      <h3>{project.title}</h3>
                      <p>{project.description}</p>
                      <div className="portfolio-card__footer">
                        <span>{project.year} · View Project</span>
                        <span aria-hidden="true">↗</span>
                      </div>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          )}
        </div>
      </section>

      <CTASection
        title="HAVE A BRIEF IN MIND?"
        copy={
          <>
            Have a project in mind? Let's add your event, film or creative brief to the verse.
          </>
        }
        primary={{ label: 'Organize an Event' }}
        secondary={false}
        inlineForm
        inlineFormKind="Organize an Event"
        formOpen={eventFormOpen}
        onFormToggle={() => setEventFormOpen((open) => !open)}
      />
    </div>
  )
}

export default Work
