import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import Seo from '../components/ui/Seo.jsx'
import Reveal from '../components/ui/Reveal.jsx'
import Img from '../components/ui/Img.jsx'
import Icon from '../components/ui/Icon.jsx'
import SectionHeading from '../components/ui/SectionHeading.jsx'
import CTASection from '../components/ui/CTASection.jsx'
import Testimonials from '../components/ui/Testimonials.jsx'
import EventCard from '../components/cards/EventCard.jsx'
import WhyAttii from '../components/sections/WhyAttii.jsx'
import ServicesIndex from '../components/sections/ServicesIndex.jsx'
import ProductionShowcase from '../components/sections/ProductionShowcase.jsx'
import TalentSection from '../components/sections/TalentSection.jsx'
import OrganizationTree from '../components/sections/OrganizationTree.jsx'
import FutureDirection from '../components/sections/FutureDirection.jsx'
import InstitutionalCTA from '../components/sections/InstitutionalCTA.jsx'
import { IMAGES } from '../config/images.js'
import { SITE } from '../config/site.js'
import { FEATURED_EVENTS, EVENT_PLACEHOLDERS } from '../data/events.js'
import { WORK } from '../data/work.js'
import { LEADERSHIP } from '../data/team.js'
import { HOME_MILESTONES } from '../data/achievements.js'

function Hero() {
  const heroSlides = [IMAGES.hero, IMAGES.events.srmPongal2026, IMAGES.events.culturalStage, IMAGES.gallery[0], IMAGES.gallery[1]]
  const [activeSlide, setActiveSlide] = useState(0)

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % heroSlides.length)
    }, 4000)
    return () => window.clearInterval(timer)
  }, [heroSlides.length])

  return (
    <section className={`hero hero--slideshow ${IMAGES.heroVideo ? '' : 'hero--no-media'}`}>
      <div className="hero__media">
        {IMAGES.heroVideo ? (
          <video
            className="hero__video"
            src={IMAGES.heroVideo}
            autoPlay
            muted
            loop
            playsInline
            poster={IMAGES.hero}
            preload="metadata"
          />
        ) : (
          <Img
            key={heroSlides[activeSlide]}
            className="hero__slide"
            src={heroSlides[activeSlide]}
            alt="ATTI VERSE live entertainment and production"
            priority={activeSlide === 0}
          />
        )}
      </div>
      <div className="hero__overlay" />
      <div className="hero__grain" aria-hidden="true" />

      <div className="hero__inner">
        <div className="hero__top">
          <p className="hero__eyebrow hero-line" style={{ animationDelay: '0.1s' }}>
            Entertainment &amp; Productions
          </p>
        </div>

        <div className="hero__brand-lockup hero-line" style={{ animationDelay: '0.2s' }}>
          <span className="hero__brand-rule" />
          <p>ATTI VERSE</p>
          <span className="hero__brand-rule" />
        </div>

        <div className="hero__title-block hero-line" style={{ animationDelay: '0.32s' }}>
          <h1 className="hero__title-line hero__title-line--attii">CREATE</h1>
          <h1 className="hero__title-line hero__title-line--verse">THE MOMENT</h1>
        </div>

        <div className="hero__gold-rule hero-line" style={{ animationDelay: '0.4s' }} />

        <p className="hero__tagline hero-line" style={{ animationDelay: '0.55s' }}>
          Entertainment. Production. Experiences.
        </p>

        <div className="hero__actions hero-line" style={{ animationDelay: '0.7s' }}>
          <Link to="/work" className="btn btn--gold">
            <span>Explore Our Work</span>
            <Icon name="arrow-right" size={16} className="btn--icon-arrow" />
          </Link>
          <Link to="/contact" className="btn btn--outline">
            <span>Work With Us</span>
          </Link>
        </div>

        <div className="hero__meta hero-line" style={{ animationDelay: '0.85s' }}>
          <span>Entertainment</span>
          <span className="hero__meta-sep">/</span>
          <span>Events</span>
          <span className="hero__meta-sep">/</span>
          <span>Production</span>
          <span className="hero__meta-sep">/</span>
          <span>Creative</span>
        </div>
        <div className="hero__slides" aria-label="Hero image slideshow">
          {heroSlides.map((_, index) => (
            <span key={index} className={index === activeSlide ? 'is-active' : ''} />
          ))}
        </div>
      </div>
    </section>
  )
}

function Introduction() {
  return null
}

function BrandIntro() {
  return (
    <section className="section about-home">
      <div className="container">
        <div className="about-home__grid">
          <Reveal dir="right" delay={100}>
            <div className="about-home__visual">
            <Img
              src={IMAGES.aboutHome}
              alt="The ATTI VERSE creative ecosystem"
              aspect="4 / 3"
              className="about-home__image"
            />
              <div className="about-home__stamp">CREATIVE ECOSYSTEM</div>
              <div className="about-home__index">01 <span>/ ABOUT</span></div>
            </div>
          </Reveal>
          <div className="about-home__copy">
            <Reveal dir="up">
              <span className="eyebrow">Who We Are</span>
              <h2 className="section-title about-home__title">
                A growing universe of <span className="text-gold">talent, creativity</span> and production.
              </h2>
            </Reveal>
            <Reveal dir="up" delay={120}>
              <p className="about-home__lead">
                {SITE.fullName} brings together entertainment, event management, media production,
                creative services and talented creators under one growing platform.
              </p>
            </Reveal>
            <Reveal dir="up" delay={220}>
              <p className="about-home__body">
                What began as a college-based creative initiative has evolved into a structured
                organization with leadership, divisions and operational systems — built for serious,
                scalable growth.
              </p>
            </Reveal>
            <Reveal dir="up" delay={320}>
              <Link to="/about" className="text-link about-home__link">
                Discover ATTI VERSE <span>↗</span>
              </Link>
            </Reveal>
            <Reveal dir="up" delay={400}>
              <div className="about-home__mission">
                <div className="about-home__mission-head">
                  <span className="eyebrow">Our Mission</span>
                  <span>01 — 03</span>
                </div>
                <div className="about-home__mission-items">
                  <span>We create <b>experiences.</b></span>
                  <span>We build <b>talent.</b></span>
                  <span>We produce <b>stories.</b></span>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}

function FeaturedWork() {
  const featured = WORK.filter((w) => w.featured)
  return (
    <section className="section">
      <div className="container">
        <div className="work-editorial">
          <div className="work-editorial__head">
            <Reveal dir="up">
              <span className="eyebrow">Our Work</span>
              <h2 className="section-title" style={{ marginTop: '1.1rem', fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)' }}>
                SELECTED <span className="text-gold">WORK.</span>
              </h2>
            </Reveal>
            <Reveal dir="up" delay={100}>
              <Link to="/work" className="text-link" style={{ marginTop: '1.5rem', display: 'inline-flex' }}>
                View All Work →
              </Link>
            </Reveal>
          </div>

          <div className="work-editorial__grid">
            {featured.slice(0, 3).map((project, i) => (
              <Reveal key={project.id} dir="up" delay={i * 80}>
                <Link
                  to="/work"
                  className={`work-editorial__item ${i === 0 ? 'work-editorial__item--large' : ''}`}
                >
                  <div className="work-editorial__media">
                    <Img src={project.image} alt={`${project.title} — ${project.category}`} />
                  </div>
                  <div className="work-editorial__overlay">
                    <span className="work-editorial__cat">{project.category}</span>
                    <h3 className="work-editorial__title">{project.title}</h3>
                    <span className="work-editorial__arrow" aria-hidden="true">→</span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function FeaturedEvents() {
  const events = [...FEATURED_EVENTS, ...EVENT_PLACEHOLDERS]
  const stripRef = useRef(null)
  const step = () => {
    const item = stripRef.current?.querySelector('.event-strip__item')
    return item ? item.clientWidth + 24 : 760
  }
  const scrollByStep = (direction) => {
    stripRef.current?.scrollBy({ left: direction * step(), behavior: 'smooth' })
  }
  const onWheel = (event) => {
    const strip = stripRef.current
    if (!strip || strip.scrollWidth <= strip.clientWidth + 1) return
    if (Math.abs(event.deltaY) < Math.abs(event.deltaX)) return
    event.preventDefault()
    strip.scrollLeft += event.deltaY
  }

  return (
    <section className="section section--dark home-events">
      <div className="container">
        <div className="event-showcase__head">
          <div>
            <span className="eyebrow" style={{ color: 'var(--gold-soft)' }}>Events</span>
            <h2 className="section-title section-head__title">MOMENTS WE'VE CREATED</h2>
          </div>
          <Reveal dir="up" delay={150}>
            <div className="event-showcase__actions">
              <div className="event-showcase__nav" aria-label="Browse events">
                <button type="button" className="event-showcase__arrow" aria-label="Previous event" onClick={() => scrollByStep(-1)}>
                  <Icon name="arrow-left" size={18} />
                </button>
                <button type="button" className="event-showcase__arrow" aria-label="Next event" onClick={() => scrollByStep(1)}>
                  <Icon name="arrow-right" size={18} />
                </button>
              </div>
              <Link to="/events#srm-pongal-vizha-2026" className="text-link text-link--dark">View All Events →</Link>
            </div>
          </Reveal>
        </div>
        <p className="event-showcase__intro">One event at a time — scroll, explore, and move through the moments we are building.</p>
      </div>
      <div className="event-strip" ref={stripRef} onWheel={onWheel} aria-label="Events showcase">
        {events.map((event, i) => (
          <article key={event.id} className="event-strip__item">
            <EventCard event={event} index={i} />
          </article>
        ))}
      </div>
      <p className="event-showcase__hint">SCROLL OR USE THE ARROWS TO EXPLORE →</p>
    </section>
  )
}

function StructureSection() {
  return (
    <section className="section section--light-green">
      <div className="container">
        <SectionHeading
          center
          eyebrow="Organizational Structure"
          title={<>BUILT WITH STRUCTURE.<br /><span className="text-gold">DRIVEN BY CREATIVITY.</span></>}
          subtitle="Five divisions, one direction — a professional foundation underneath every creative output."
        />
        <OrganizationTree />
      </div>
    </section>
  )
}

function Milestones() {
  return (
    <section className="section">
      <div className="container">
        <div className="milestones-editorial">
          <div className="milestones-editorial__head">
            <Reveal dir="up">
              <span className="eyebrow">Milestones</span>
              <h2 className="section-title" style={{ marginTop: '1.1rem', fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)' }}>
                BUILT ON <span className="text-gold">EARNED MILESTONES.</span>
              </h2>
            </Reveal>
            <Reveal dir="up" delay={100}>
              <p style={{ color: 'var(--text-muted)', marginTop: '1rem', maxWidth: '50ch' }}>
                Every milestone below is verified. Nothing here is invented.
              </p>
            </Reveal>
          </div>

          <div className="milestones-editorial__list">
            {HOME_MILESTONES.map((m, i) => (
              <Reveal key={m.title} dir="up" delay={i * 50}>
                <div className="milestones-editorial__row">
                  <span className="milestones-editorial__num">{String(i + 1).padStart(2, '0')}</span>
                  <div className="milestones-editorial__body">
                    <h3 className="milestones-editorial__title">{m.title}</h3>
                    {m.note && <p className="milestones-editorial__note">{m.note}</p>}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function TeamPreview() {
  return (
    <section className="section section--dark team-spotlight">
      <div className="container">
        <div className="team-spotlight__header">
          <Reveal dir="up">
            <div className="team-spotlight__label"><span>04 / Leadership</span><span>THE ATTI VERSE COUNCIL</span></div>
            <h2 className="team-spotlight__title">THE PEOPLE<br /><span className="text-gold">BEHIND THE VERSE.</span></h2>
          </Reveal>
          <Reveal dir="up" delay={120}>
            <div className="team-spotlight__intro">
              <p>Four perspectives. One direction. Meet the people shaping the vision, operations, growth and experiences behind ATTI VERSE.</p>
              <Link to="/team" className="text-link text-link--dark">Meet Our Team →</Link>
            </div>
          </Reveal>
        </div>

        <div className="team-spotlight__grid">
          {LEADERSHIP.map((member, i) => (
            <Reveal key={member.id} dir="up" delay={i * 90}>
              <article className={`team-spotlight__card ${i === 0 ? 'team-spotlight__card--feature' : ''}`}>
                <div className="team-spotlight__media">
                  <Img src={member.image} alt={member.name} />
                  <span className="team-spotlight__index">0{i + 1}</span>
                </div>
                <div className="team-spotlight__info">
                  <div>
                    <h3>{member.name}</h3>
                    <p className="team-spotlight__role">{member.role}</p>
                  </div>
                  <span className="team-spotlight__arrow">↗</span>
                </div>
                {i === 0 && <p className="team-spotlight__focus">{member.focus}</p>}
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

function Home() {
  return (
    <>
      <Seo
        title="ATTI VERSE Entertainment & Productions | Entertainment, Events & Media Production"
        description="ATTI VERSE Entertainment & Productions brings together entertainment, event management, media production, creative services and talented creators to build memorable experiences."
        path="/"
      />
      <Hero />
      <Introduction />
      <BrandIntro />
      <WhyAttii />
      <ServicesIndex />
      <FeaturedWork />
      <FeaturedEvents />
      <ProductionShowcase />
      <TalentSection />
      <StructureSection />
      <TeamPreview />
      <Milestones />
      <FutureDirection />
      <Testimonials />
      <InstitutionalCTA />
      <CTASection
        title="LET'S CREATE SOMETHING WORTH REMEMBERING."
        copy={
          <>
            Whether you are planning an event, looking for creative production, exploring a
            collaboration or building something new — let's start the conversation.
          </>
        }
      />
    </>
  )
}

export default Home
