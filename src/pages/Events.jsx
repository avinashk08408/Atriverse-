import { useEffect, useState } from 'react'
import Seo from '../components/ui/Seo.jsx'
import Reveal from '../components/ui/Reveal.jsx'
import Img from '../components/ui/Img.jsx'
import SectionHeading from '../components/ui/SectionHeading.jsx'
import PageHeader from '../components/ui/PageHeader.jsx'
import EventCard from '../components/cards/EventCard.jsx'
import VideoBox from '../components/ui/VideoBox.jsx'
import CTASection from '../components/ui/CTASection.jsx'
import { Link } from 'react-router-dom'
import { FEATURED_EVENTS, EVENT_PLACEHOLDERS } from '../data/events.js'

function FeaturedEventMedia({ event }) {
  const slides = event.gallery?.length ? event.gallery : [event.image]
  const [activeSlide, setActiveSlide] = useState(0)

  useEffect(() => {
    if (slides.length < 2) return undefined
    const timer = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % slides.length)
    }, 5500)
    return () => window.clearInterval(timer)
  }, [slides.length])

  return (
    <div className="events-featured__media events-featured__media--slideshow">
      <Img key={slides[activeSlide]} src={slides[activeSlide]} alt={`${event.title} — image ${activeSlide + 1} of ${slides.length}`} />
      <span>{event.category}</span>
      {slides.length > 1 && (
        <div className="events-featured__slides" aria-label={`${slides.length} event photos`}>
          {slides.map((_, slideIndex) => (
            <i key={slideIndex} className={slideIndex === activeSlide ? 'is-active' : ''} />
          ))}
        </div>
      )}
    </div>
  )
}

function VerifiedEventDetail({ event }) {
  return (
    <section id={event.id} className="section events-featured">
      <div className="container">
        <div className="events-featured__label"><span>01 / Verified Event</span><span>ATTI VERSE / EVENTS</span></div>
        <div className="events-featured__grid">
        <Reveal dir="right">
          <FeaturedEventMedia event={event} />
        </Reveal>
        <div className="events-featured__copy">
          <Reveal dir="up">
            <span className="eyebrow">Featured Event / 2026</span><h2>{event.title}</h2><p className="events-featured__role">{event.role}</p><p className="events-featured__desc">{event.description}</p>
          </Reveal>
          <Reveal dir="up" delay={120}><div className="events-featured__meta"><div><span>Status</span><strong>Verified</strong></div><div><span>Format</span><strong>{event.category}</strong></div></div><Link to={`/events/${event.id}`} className="btn btn--gold"><span>View Event Story</span><span>↗</span></Link></Reveal>
        </div>
        </div>
      </div>
    </section>
  )
}

function Events() {
  return (
    <div className="events-page">
      <Seo
        title="Events & Experiences | ATTI VERSE"
        description="From cultural celebrations and performances to event coordination and execution, ATTI VERSE creates and contributes to experiences that bring people together."
        path="/events"
      />
      <PageHeader
        eyebrow="Events / Experiences"
        crumb="Events"
        title="EVENTS THAT MOVE PEOPLE"
        subtitle="A growing record of cultural celebrations, live performances and coordinated experiences delivered across the ATTI VERSE ecosystem."
      />

      {FEATURED_EVENTS.map((event) => (
        <VerifiedEventDetail key={event.id} event={event} />
      ))}

      <section className="section events-index-section">
        <div className="container"><div className="events-index__intro"><SectionHeading eyebrow="02 / Event Register" title="EVENTS IN THE MAKING" /><p>Projects, performances and collaborations being documented by the ATTI VERSE team.</p></div><div className="events-register">
            {EVENT_PLACEHOLDERS.map((event, i) => (
              <EventCard key={event.id} event={event} index={i} />
            ))}
          </div></div>
      </section>

      <CTASection
        copy={
          <>
            Planning an event or need entertainment for your celebration? Let's create it together.
          </>
        }
        primary={{ label: 'Plan An Event', to: '/contact' }}
      />
    </div>
  )
}

export default Events
