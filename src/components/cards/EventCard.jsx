import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Reveal from '../ui/Reveal.jsx'
import Img from '../ui/Img.jsx'
import Icon from '../ui/Icon.jsx'
import { PLACEHOLDER } from '../../config/site.js'

function EventCard({ event, index = 0 }) {
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
    <Reveal dir="up" delay={(index % 3) * 100}>
      <article className="event-card">
        <Link to={`/events/${event.id}`} className="event-card__link" aria-label={event.title}>
          <div className={`event-card__media ${slides.length > 1 ? 'event-card__media--slideshow' : ''}`}>
            <Img key={slides[activeSlide]} src={slides[activeSlide]} alt={`${event.title} — image ${activeSlide + 1} of ${slides.length}`} />
            <span className="event-card__badge">{event.category}</span>
            {event.status !== 'verified' && <span className="event-card__status">{PLACEHOLDER.comingSoon}</span>}
            {slides.length > 1 && (
              <span className="event-card__slides" aria-label={`${slides.length} event photos`}>
                {slides.map((_, slideIndex) => (
                  <span key={slideIndex} className={slideIndex === activeSlide ? 'is-active' : ''} />
                ))}
              </span>
            )}
          </div>
          <div className="event-card__body">
            <h3 className="event-card__title">{event.title}</h3>
            <div className="event-card__meta">
              {event.date ? (
                <span>
                  <Icon name="calendar" size={13} /> {event.date}
                </span>
              ) : (
                <span>Date — To Be Added</span>
              )}
              {event.location && (
                <span>
                  <Icon name="location" size={13} /> {event.location}
                </span>
              )}
            </div>
            <p className="event-card__desc">{event.description}</p>
            <div className="event-card__cta">
              <span className="text-link">
                {event.status === 'verified' ? 'View Event Details' : 'Stay Tuned'} →
              </span>
            </div>
          </div>
        </Link>
      </article>
    </Reveal>
  )
}

export default EventCard
