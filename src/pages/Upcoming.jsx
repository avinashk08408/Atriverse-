import { useState } from 'react'
import Seo from '../components/ui/Seo.jsx'
import Reveal from '../components/ui/Reveal.jsx'
import PageHeader from '../components/ui/PageHeader.jsx'
import CTASection from '../components/ui/CTASection.jsx'
import { UPCOMING } from '../data/upcoming.js'

const ROADMAP = [
  { key: 'events', index: '01', eyebrow: 'Live calendar', title: 'UPCOMING EVENTS', descriptor: 'Announcements, performances and experiences in the making.' },
  { key: 'productions', index: '02', eyebrow: 'On screen / on stage', title: 'UPCOMING PRODUCTIONS', descriptor: 'Stories and visual work moving from concept toward delivery.' },
  { key: 'collaborations', index: '03', eyebrow: 'Partnerships', title: 'UPCOMING COLLABORATIONS', descriptor: 'The people and organizations shaping the next chapter.' },
  { key: 'opportunities', index: '04', eyebrow: 'Join the verse', title: 'OPPORTUNITIES', descriptor: 'Open doors for talent, creators and future collaborators.' },
]

function RoadmapSection({ section, items }) {
  return (
    <section className="upcoming-editorial__section">
      <div className="upcoming-editorial__section-head"><span className="upcoming-editorial__index">{section.index}</span><div><span className="eyebrow">{section.eyebrow}</span><h2>{section.title}</h2><p>{section.descriptor}</p></div></div>
      <div className="upcoming-editorial__entries">
        {items.map((item, index) => <Reveal key={item.id} dir="up" delay={index * 70}><article className="upcoming-editorial__entry"><span className={`upcoming-editorial__status ${item.status.toLowerCase().includes('open') ? 'is-open' : ''}`}>{item.status}</span><div className="upcoming-editorial__entry-main"><h3>{item.title}</h3><p>{item.note}</p></div><span className="upcoming-editorial__arrow" aria-hidden="true">↗</span></article></Reveal>)}
      </div>
    </section>
  )
}

function Upcoming() {
  const [joinFormOpen, setJoinFormOpen] = useState(false)
  const totalItems = Object.values(UPCOMING).flat().length
  return (
    <div className="upcoming-page">
      <Seo title="Upcoming | What's Next — ATTI VERSE" description="Upcoming events, productions, collaborations and opportunities from ATTI VERSE Entertainment & Productions." path="/upcoming" />
      <PageHeader eyebrow="Upcoming / Forward Calendar" crumb="Upcoming" title="BUILT FOR WHAT’S AHEAD" subtitle="A live register of the events, productions, collaborations and opportunities moving through the ATTI VERSE system." />
      <section className="upcoming-editorial">
        <div className="container">
          <div className="upcoming-editorial__intro"><Reveal dir="up"><span className="eyebrow">The forward register / 2026</span><h2>THE NEXT CHAPTER IS <span className="text-gold">ALREADY MOVING.</span></h2></Reveal><Reveal dir="left" delay={100}><div><p>Some work is confirmed. Some is in development. Some doors are open. This is where we keep track of the movement without pretending the details are further along than they are.</p><div className="upcoming-editorial__stats"><span><b>{String(totalItems).padStart(2, '0')}</b> active records</span><span><b>04</b> directions</span><span><b>∞</b> possibilities</span></div></div></Reveal></div>
          <div className="upcoming-editorial__rule" />
          <div className="upcoming-editorial__roadmap">{ROADMAP.map((section) => <RoadmapSection key={section.key} section={section} items={UPCOMING[section.key]} />)}</div>
          <div className="upcoming-editorial__legend"><span><i className="is-open" /> Open / accepting interest</span><span><i /> In development / details forthcoming</span></div>
        </div>
      </section>
      <CTASection copy={<>Want to be part of what’s next? Join the verse and tell us where you fit.</>} primary={{ label: 'Join The Verse' }} secondary={false} inlineForm inlineFormKind="Join ATTI VERSE" formOpen={joinFormOpen} onFormToggle={() => setJoinFormOpen((open) => !open)} />
    </div>
  )
}

export default Upcoming
