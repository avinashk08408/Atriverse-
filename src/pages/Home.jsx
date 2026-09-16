import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import Seo from '../components/ui/Seo.jsx'
import Reveal from '../components/ui/Reveal.jsx'
import Img from '../components/ui/Img.jsx'
import Icon from '../components/ui/Icon.jsx'
import SectionHeading from '../components/ui/SectionHeading.jsx'
import CTASection from '../components/ui/CTASection.jsx'
import EventCard from '../components/cards/EventCard.jsx'
import WhyAttii from '../components/sections/WhyAttii.jsx'
import ServicesIndex from '../components/sections/ServicesIndex.jsx'
import { IMAGES } from '../config/images.js'
import { SITE } from '../config/site.js'
import { FEATURED_EVENTS, EVENT_PLACEHOLDERS } from '../data/events.js'
import { WORK } from '../data/work.js'
import { LEADERSHIP } from '../data/team.js'

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
  const lead = featured[0]
  const supporting = featured.slice(1, 4)
  return (
    <section className="section work-showcase">
      <div className="container">
        <div className="work-showcase__header">
          <Reveal dir="up">
            <span className="eyebrow">Selected Work / Portfolio</span>
            <h2 className="section-title">WORK BUILT FOR <span className="text-gold">IMPACT.</span></h2>
          </Reveal>
          <Reveal dir="left" delay={100}>
            <div className="work-showcase__header-side"><p>Selected engagements across entertainment, events, production and creative direction.</p><Link to="/work" className="btn btn--outline">View All Work <span>↗</span></Link></div>
          </Reveal>
        </div>
        <div className="work-showcase__rule" />
        <div className="work-showcase__layout">
          <Reveal dir="right">
            <Link to="/work" className="work-case work-case--lead">
              <div className="work-case__media"><Img src={lead.image} alt={`${lead.title} — ${lead.category}`} /></div>
              <div className="work-case__body"><div className="work-case__meta"><span>01 / Featured case</span><span>{lead.category} · {lead.year}</span></div><h3>{lead.title}</h3><p>{lead.description}</p><span className="work-case__link">Explore project <b>↗</b></span></div>
            </Link>
          </Reveal>
          <div className="work-showcase__supporting">
            {supporting.map((project, i) => (
              <Reveal key={project.id} dir="up" delay={i * 100}>
                <Link to="/work" className="work-case work-case--supporting">
                  <div className="work-case__media"><Img src={project.image} alt={`${project.title} — ${project.category}`} /></div>
                  <div className="work-case__body"><div className="work-case__meta"><span>0{i + 2} / {project.category}</span><span>{project.year}</span></div><h3>{project.title}</h3><p>{project.description}</p><span className="work-case__link">View case <b>↗</b></span></div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
        <div className="work-showcase__footer"><span>ATTI VERSE / CAPABILITY PROOF</span><span>Entertainment · Events · Production · Creative</span></div>
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

function Milestones() {
  const [activeCoverage, setActiveCoverage] = useState(null)
  const pressCoverage = [
    { event: 'SRM Pongal Vizha 2026', publication: 'Publication name to be added', date: 'Date to be added', image: IMAGES.events.srmPongal2026 },
    { event: 'Dance Competition Participation', publication: 'Publication name to be added', date: 'Date to be added', image: IMAGES.events.danceCompetition },
    { event: 'Flash Mob Performance', publication: 'Publication name to be added', date: 'Date to be added', image: IMAGES.events.flashMob },
    { event: 'Cultural Stage Performance', publication: 'Publication name to be added', date: 'Date to be added', image: IMAGES.events.culturalStage },
  ]

  return (
    <section className="section milestones-newsroom">
      <div className="container">
        <div className="newsroom__masthead">
          <span>THE ATTI VERSE CHRONICLE</span>
          <span>VERIFIED RECORD / MILESTONES</span>
          <span>ISSUE 01</span>
        </div>
        <div className="newsroom__intro">
          <Reveal dir="up">
            <span className="eyebrow">Milestones / News Desk</span>
            <h2 className="section-title">BUILT ON <span className="text-gold">EARNED MILESTONES.</span></h2>
          </Reveal>
          <Reveal dir="left" delay={100}>
            <p>Verified developments, organizational progress and creative experience — reported as the record grows.</p>
          </Reveal>
        </div>
        <div className="newsroom__rule" />
        <div className="press-list" aria-label="Newspaper coverage records">
          {pressCoverage.map((item, i) => (
            <Reveal key={item.event} dir="up" delay={i * 60}>
              <article className="press-row">
                <span className="press-row__number">{String(i + 1).padStart(2, '0')}</span>
                <div className="press-row__event"><span className="eyebrow">Event coverage</span><h3>{item.event}</h3></div>
                <div className="press-row__publication"><span>Newspaper / publication</span><strong>{item.publication}</strong><small>{item.date}</small></div>
                <button type="button" className="press-row__gallery" onClick={() => setActiveCoverage(item)}><span>Open gallery</span><b>↗</b></button>
              </article>
            </Reveal>
          ))}
        </div>
        <p className="press-list__note">Publication names, dates and newspaper scans can be updated as press records are documented.</p>
        {activeCoverage && (
          <div className="press-gallery" role="dialog" aria-modal="true" aria-label={`${activeCoverage.event} gallery`} onClick={() => setActiveCoverage(null)}>
            <div className="press-gallery__panel" onClick={(event) => event.stopPropagation()}>
              <button type="button" className="press-gallery__close" onClick={() => setActiveCoverage(null)} aria-label="Close gallery">×</button>
              <span className="eyebrow">{activeCoverage.event}</span>
              <h3>{activeCoverage.publication}</h3>
              <p>{activeCoverage.date} · Associated event visual</p>
              <div className="press-gallery__image"><Img src={activeCoverage.image} alt={`${activeCoverage.event} visual`} /></div>
              <small>Newspaper clipping image to be added when the press scan is available.</small>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

function TeamPreview() {
  const [activeLeader, setActiveLeader] = useState(0)
  const leader = LEADERSHIP[activeLeader]

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveLeader((current) => (current + 1) % LEADERSHIP.length)
    }, 5000)
    return () => window.clearInterval(timer)
  }, [])

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
              <Link to="/team" className="btn btn--gold team-spotlight__cta">Meet Our Team <span>↗</span></Link>
            </div>
          </Reveal>
        </div>

        <div className="team-spotlight__showcase">
          <Reveal key={leader.id} dir="up">
            <article className="team-spotlight__active">
              <div className="team-spotlight__active-media">
                <Img src={leader.image} alt={leader.name} />
                <span className="team-spotlight__index">0{activeLeader + 1} / 0{LEADERSHIP.length}</span>
              </div>
              <div className="team-spotlight__active-copy">
                <span className="eyebrow">Currently shaping the verse</span>
                <h3>{leader.name}</h3>
                <p className="team-spotlight__role">{leader.role}</p>
                {leader.designation && <p className="team-spotlight__designation">{leader.designation}</p>}
                <p className="team-spotlight__focus">{leader.focus}</p>
              </div>
            </article>
          </Reveal>
          <div className="team-spotlight__controls" aria-label="Leadership profiles">
            <div className="team-spotlight__dots">
              {LEADERSHIP.map((member, index) => (
                <button
                  key={member.id}
                  type="button"
                  className={index === activeLeader ? 'is-active' : ''}
                  aria-label={`Show ${member.name}`}
                  aria-pressed={index === activeLeader}
                  onClick={() => setActiveLeader(index)}
                >
                  <span>0{index + 1}</span><i />
                </button>
              ))}
            </div>
            <div className="team-spotlight__control-arrows">
              <button type="button" aria-label="Previous leader" onClick={() => setActiveLeader((activeLeader - 1 + LEADERSHIP.length) % LEADERSHIP.length)}>←</button>
              <button type="button" aria-label="Next leader" onClick={() => setActiveLeader((activeLeader + 1) % LEADERSHIP.length)}>→</button>
            </div>
          </div>
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
      <TeamPreview />
      <Milestones />
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
