import { Link } from 'react-router-dom'
import Seo from '../components/ui/Seo.jsx'
import Reveal from '../components/ui/Reveal.jsx'
import Img from '../components/ui/Img.jsx'
import SectionHeading from '../components/ui/SectionHeading.jsx'
import PageHeader from '../components/ui/PageHeader.jsx'
import CTASection from '../components/ui/CTASection.jsx'
import TeamCard from '../components/cards/TeamCard.jsx'
import WhatMeans from '../components/sections/WhatMeans.jsx'
import OrganizationTree from '../components/sections/OrganizationTree.jsx'
import FutureDirection from '../components/sections/FutureDirection.jsx'
import WhyWorkWithUs from '../components/sections/WhyWorkWithUs.jsx'
import LegalFoundation from '../components/sections/LegalFoundation.jsx'
import { IMAGES } from '../config/images.js'
import { LEADERSHIP } from '../data/team.js'
import { MISSION_ITEMS, VALUES } from '../data/organization.js'

const TIMELINE = [
  {
    title: 'The Beginning',
    desc: 'ATTI VERSE began as a college-based creative initiative built around talent and entertainment.',
  },
  {
    title: 'Building the Team',
    desc: 'Performers, creators and organizers came together to form a stronger creative community.',
  },
  {
    title: 'Formalizing the Organization',
    desc: 'Leadership, divisions, governance and operational systems were established.',
  },
  {
    title: 'Events & Productions',
    desc: 'The organization expanded through cultural participation, performances, media and creative activities.',
  },
  {
    title: 'Registrations & Structure',
    desc: 'Partnership, MSME / Udyam and governance foundations were put in place.',
  },
  {
    title: 'Growth',
    desc: 'ATTI VERSE continues to build its portfolio, network, collaborations and digital presence.',
  },
]

function WhoWeAre() {
  return (
    <section className="section about-profile">
      <div className="container">
        <div className="about-profile__top">
          <SectionHeading eyebrow="Who We Are" title={<>A MULTI-DISCIPLINARY <span className="text-gold">CREATIVE ORGANIZATION</span></>} />
          <Reveal dir="left" delay={120}>
            <p className="about-profile__lead">We connect creative talent, production discipline and live experience to build work that moves people.</p>
          </Reveal>
        </div>
        <div className="about-profile__body">
        <Reveal dir="up" delay={100}>
          <div className="about-profile__media">
            <Img src={IMAGES.aboutHome} alt="The people and creative work of ATTI VERSE" aspect="16 / 10" />
            <span>ATTI VERSE / COMPANY PROFILE</span>
          </div>
        </Reveal>
        <div className="about-profile__copy">
          <Reveal dir="up" delay={100}><p>
            {`ATTI VERSE Entertainment & Productions is a multi-disciplinary creative organization working across entertainment, media production, event management and creative services.`}
          </p></Reveal>
          <Reveal dir="up" delay={200}><p className="about-profile__muted">
              What began as a creative initiative has evolved into a structured organization built
              around talented performers, creators, organizers and production teams.
          </p></Reveal>
          <Reveal dir="up" delay={300}><p className="about-profile__muted">
              We are growing, but we are serious — and the way we organize, coordinate and deliver
              reflects that.
          </p></Reveal>
          <div className="about-profile__metrics">
            <div><strong>05</strong><span>Creative divisions</span></div>
            <div><strong>01</strong><span>Connected platform</span></div>
            <div><strong>∞</strong><span>Room to create</span></div>
          </div>
        </div>
      </div>
        <Reveal dir="right" delay={150}>
          <Img
            src={IMAGES.aboutHome}
            alt="The people and creative work of ATTI VERSE"
            aspect="4 / 3"
            style={{ borderRadius: 'var(--radius-md)', boxShadow: 'var(--shadow-soft)' }}
          />
        </Reveal>
      </div>
    </section>
  )
}

function OurStory() {
  return (
    <section className="section section--off-white">
      <div className="container">
        <SectionHeading eyebrow="Our Story" title={<>THE JOURNEY OF THE <span className="text-gold">VERSE.</span></>} />
        <div className="timeline" style={{ marginTop: '3rem' }}>
          {TIMELINE.map((item, i) => (
            <Reveal key={item.title} dir="up" delay={i * 60}>
              <article className="timeline__item">
                <h3 className="timeline__title">{item.title}</h3>
                <p className="timeline__desc">{item.desc}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

function Vision() {
  return (
    <section className="section section--dark">
      <div className="container grid-2">
        <div>
          <SectionHeading
            dark
            eyebrow="Vision"
            title={<>A RECOGNIZED PLATFORM FOR <span className="text-gold">TALENT &amp; CREATION</span></>}
          />
        </div>
        <Reveal dir="left" delay={120}>
          <p style={{ color: 'rgba(255,255,255,0.82)', fontSize: '1.05rem' }}>
            ATTI VERSE aims to become a recognized entertainment and production platform that
            nurtures talent, creates opportunities, expands cultural expression and builds
            professional influence.
          </p>
          <p style={{ color: 'rgba(255,255,255,0.82)', marginTop: '1.1rem', fontSize: '1.05rem' }}>
            The direction of that growth — across Tamil Nadu, large-scale entertainment, film and
            media, talent management and industry collaborations — is detailed in the Future
            Direction section below. It represents our ambition, not yet our achievement.
          </p>
        </Reveal>
      </div>
    </section>
  )
}

function Mission() {
  return (
    <section className="section about-mission">
      <div className="container">
        <div className="about-mission__header">
          <SectionHeading eyebrow="Mission / Operating Commitments" title="WHAT WE ARE BUILT TO DO" />
          <p>Eight operating principles translate the ATTI VERSE vision into consistent creative work.</p>
        </div>
        <div className="mission-num about-mission__grid about-mission__list">
          {MISSION_ITEMS.map((text, i) => (
            <Reveal key={text} dir="up" delay={(i % 2) * 80}>
              <article className="mission-num__item">
                <span className="mission-num__num">{String(i + 1).padStart(2, '0')}</span>
                <p className="mission-num__text">{text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

function CoreValues() {
  return (
    <section className="section section--light-green">
      <div className="container">
        <SectionHeading
          center
          eyebrow="Values"
          title="THE PRINCIPLES WE PERFORM BY"
          subtitle="Sixteen principles held together by one culture."
        />
        <div className="values-editorial" style={{ marginTop: '1.5rem' }}>
          {VALUES.map((v, i) => (
            <Reveal key={v} dir="up" delay={(i % 4) * 60}>
              <span className="values-editorial__item">{v}</span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

function Structure() {
  return (
    <section className="section section--off-white">
      <div className="container">
        <SectionHeading
          center
          eyebrow="Organizational Structure"
          title={<>BUILT WITH STRUCTURE.<br /><span className="text-gold">DRIVEN BY CREATIVITY.</span></>}
          subtitle="Executive leadership and governance oversee five dedicated divisions."
        />
        <OrganizationTree />
      </div>
    </section>
  )
}

function Leadership() {
  return (
    <section className="section about-leadership">
      <div className="container">
        <div className="about-leadership__header">
          <div>
            <SectionHeading
              eyebrow="Leadership / Executive Team"
              title={<>THE PEOPLE BEHIND <span className="text-gold">THE VISION.</span></>}
            />
          </div>
          <Reveal dir="left" delay={120}>
            <p>Direction, governance and delivery are led by a founding team with clearly defined responsibilities.</p>
          </Reveal>
        </div>
        <div className="about-leadership__bar">
          <span>ATTI VERSE / LEADERSHIP</span>
          <span>01 — 04 / EXECUTIVE PROFILES</span>
        </div>
        <div className="grid-4 about-leadership__grid">
          {LEADERSHIP.map((member, i) => (
            <TeamCard key={member.id} member={member} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}

function About() {
  return (
    <>
      <Seo
        title="About ATTI VERSE | Talent, Creativity & Opportunity"
        description="ATTI VERSE Entertainment & Productions is a multi-disciplinary creative organization working across entertainment, media production, event management and creative services."
        path="/about"
      />
      <PageHeader
        eyebrow="About Us"
        crumb="About"
        title="ABOUT ATTI VERSE"
        subtitle="A structured creative organization built for entertainment, production and cultural impact."
        image={IMAGES.aboutHome}
      />
      <WhoWeAre />
      <OurStory />
      <WhatMeans />
      <Vision />
      <Mission />
      <CoreValues />
      <Structure />
      <Leadership />
      <LegalFoundation />
      <WhyWorkWithUs />
      <FutureDirection eyebrow="Growth Direction" />
      <CTASection
        copy={
          <>
            Curious about how we create? Work with us on your next event, production or creative
            project.
          </>
        }
      />
    </>
  )
}

export default About
