import { Link, useParams, Navigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Seo from '../components/ui/Seo.jsx'
import Reveal from '../components/ui/Reveal.jsx'
import Img from '../components/ui/Img.jsx'
import SectionHeading from '../components/ui/SectionHeading.jsx'
import PageHeader from '../components/ui/PageHeader.jsx'
import EventCard from '../components/cards/EventCard.jsx'
import CTASection from '../components/ui/CTASection.jsx'
import { EVENTS } from '../data/events.js'
import { PLACEHOLDER } from '../config/site.js'

function EventHeroSlideshow({ event }) {
  const slides = event.gallery?.length ? event.gallery.slice(0, 6) : [event.image]
  const [activeSlide, setActiveSlide] = useState(0)

  useEffect(() => {
    if (slides.length < 2) return undefined
    const timer = window.setInterval(() => setActiveSlide((current) => (current + 1) % slides.length), 5000)
    return () => window.clearInterval(timer)
  }, [slides.length])

  return (
    <section className="event-hero-slideshow" aria-label={`${event.title} photo slideshow`}>
      <div className="event-hero-slideshow__image">
        <Img key={slides[activeSlide]} src={slides[activeSlide]} alt={`${event.title} — photo ${activeSlide + 1} of ${slides.length}`} />
      </div>
      <div className="event-hero-slideshow__meta"><span>ATTI VERSE / EVENT ARCHIVE</span><span>{String(activeSlide + 1).padStart(2, '0')} / {String(slides.length).padStart(2, '0')}</span></div>
      <div className="event-hero-slideshow__dots" aria-hidden="true">{slides.map((_, i) => <i key={i} className={i === activeSlide ? 'is-active' : ''} />)}</div>
    </section>
  )
}

function EventDetail() {
  const { slug } = useParams()
  const event = EVENTS.find((e) => e.id === slug)
  if (!event) return <Navigate to="/events" replace />
  const others = EVENTS.filter((e) => e.id !== slug).slice(0, 3)

  return (
    <>
      <Seo
        title={`${event.title} | ATTI VERSE`}
        description={event.description}
        path={`/events/${slug}`}
      />
      {event.id === 'srm-pongal-vizha-2026' && <EventHeroSlideshow event={event} />}
      <PageHeader
        eyebrow="Events"
        crumb={event.title}
        title={event.id === 'srm-pongal-vizha-2026' ? <span className="text-gold">SRM PONGAL VIZHA 2026</span> : event.title.toUpperCase()}
        subtitle={event.category}
        image={event.id === 'srm-pongal-vizha-2026' ? undefined : event.image}
      />

      {/* Overview */}
      <section className="section">
        <div className="container grid-2">
          <Reveal dir="right">
            <Img
              src={event.image}
              alt={event.title}
              aspect="16 / 10"
              style={{ borderRadius: 'var(--radius-md)', boxShadow: 'var(--shadow-soft)' }}
            />
          </Reveal>
          <div>
            <Reveal dir="up">
              <span className="eyebrow">Event Overview</span>
              <h2 className="section-title" style={{ marginTop: '0.8rem' }}>
                {event.title}
              </h2>
              <p className="feature__tagline">{event.role}</p>
            </Reveal>
            <Reveal dir="up" delay={120}>
              <p style={{ color: 'var(--text-muted)', marginTop: '1rem' }}>
                “ATTI VERSE participated in {event.title} as part of its growing entertainment and
                cultural-performance journey.”
              </p>
            </Reveal>
            <Reveal dir="up" delay={200}>
              <div className="detail-meta">
                {event.date ? (
                  <div className="detail-meta__item">
                    <span className="detail-meta__label">Date</span>
                    <span className="detail-meta__value">{event.date}</span>
                  </div>
                ) : (
                  <div className="detail-meta__item">
                    <span className="detail-meta__label">Date</span>
                    <span className="detail-meta__value">{PLACEHOLDER.tba}</span>
                  </div>
                )}
                <div className="detail-meta__item">
                  <span className="detail-meta__label">Category</span>
                  <span className="detail-meta__value">{event.category}</span>
                </div>
                <div className="detail-meta__item">
                  <span className="detail-meta__label">Role</span>
                  <span className="detail-meta__value">{event.role}</span>
                </div>
              </div>
            </Reveal>
            <Reveal dir="up" delay={260}>
              <p className="mt-sm" style={{ fontSize: '0.8rem', color: 'var(--text-faint)' }}>
                {event.status === 'verified'
                  ? 'Date, location and additional documentation will be updated as they are confirmed.'
                  : 'Details to be added.'}
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Gallery, certificate & video */}
      <section className="section section--off-white">
        <div className="container">
          <SectionHeading
            eyebrow="Documentation"
            title="VISUALS, RECOGNITION & COVERAGE"
            subtitle="Event visuals, certificate and media will appear here as they are documented."
          />
          <div className="event-featured-visuals" style={{ marginTop: '2rem' }}>
            {[event.image, ...(event.gallery?.slice(1, 2) || [])].map((src, i) => (
              <Reveal key={src + i} dir="up" delay={i * 80}>
                <div className="event-featured-visuals__item"><Img src={src} alt={`${event.title} — featured visual ${i + 1}`} /></div>
              </Reveal>
            ))}
          </div>

          <Reveal dir="up" delay={200}>
            <div className="event-card__cta" style={{ marginTop: '2rem', display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
              <Link to="/achievements" className="btn btn--emerald">
                <span>See Milestones</span>
              </Link>
              <Link to="/gallery" className="btn btn--outline">
                <span>Open Gallery</span>
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* More events */}
      <section className="section">
        <div className="container">
          <div className="section-head-row">
            <SectionHeading eyebrow="More Events" title="MORE MOMENTS IN THE VERSE" />
          </div>
          <div className="grid-3" style={{ marginTop: '2.5rem' }}>
            {others.map((e, i) => (
              <EventCard key={e.id} event={e} index={i} />
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="HAVE AN EVENT IN MIND?"
        copy={
          <>
            Planning something worth remembering? Let's create it together — entertainment,
            production and coordination in one place.
          </>
        }
        primary={{ label: 'Plan An Event', to: '/contact' }}
      />
    </>
  )
}

export default EventDetail
