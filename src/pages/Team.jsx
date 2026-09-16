import Seo from '../components/ui/Seo.jsx'
import Reveal from '../components/ui/Reveal.jsx'
import SectionHeading from '../components/ui/SectionHeading.jsx'
import PageHeader from '../components/ui/PageHeader.jsx'
import Img from '../components/ui/Img.jsx'
import CTASection from '../components/ui/CTASection.jsx'
import { LEADERSHIP, TEAM_CATEGORIES } from '../data/team.js'

function Leadership() {
  return (
    <section className="section team-page-leadership">
      <div className="container">
        <SectionHeading
          eyebrow="Leadership"
          title={<>THE DIRECTION<br /><span className="text-gold">OF THE VERSE.</span></>}
          subtitle="Four leaders. One operating vision. The people responsible for turning creative ambition into a functioning organization."
        />
        <div className="founder-list">
          {LEADERSHIP.map((member, i) => (
            <Reveal key={member.id} dir={i % 2 === 0 ? 'right' : 'left'} delay={i * 90}>
              <article className="founder-row">
                <div className="founder-row__media">
                  <Img src={member.image} alt={`${member.name} — ${member.role}`} />
                  <span className="founder-row__index">0{i + 1}</span>
                </div>
                <div className="founder-row__content">
                  <div className="founder-row__meta"><span>ATTI VERSE / LEADERSHIP</span><span>0{i + 1} — 04</span></div>
                  <h2>{member.name}</h2>
                  <p className="founder-row__role">{member.role}</p>
                  {member.designation && <p className="founder-row__designation">{member.designation}</p>}
                  <p className="founder-row__focus">{member.focus}</p>
                  <div className="founder-row__responsibilities">
                    {member.responsibilities.slice(0, 4).map((responsibility) => <span key={responsibility}>{responsibility}</span>)}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

function Categories() {
  return (
    <section className="section section--dark team-roles">
      <div className="container">
        <SectionHeading
          eyebrow="The Collective"
          title={<>ROLES ACROSS<br /><span className="text-gold">THE VERSE.</span></>}
          subtitle="A scalable operating structure for the talent, craft and production disciplines that make every ATTI VERSE experience possible."
        />
        <div className="roles-roster">
          {TEAM_CATEGORIES.map((cat, ci) => (
            <Reveal key={cat.id} dir="up" delay={ci * 70}>
              <article className="role-roster-card">
                <header className="role-roster-card__head">
                  <span className="role-roster-card__index">0{ci + 1}</span>
                  <div><h3>{cat.title}</h3><p>{cat.subtitle}</p></div>
                  <span className="role-roster-card__count">{String(cat.placeholderRoles.length).padStart(2, '0')} roles</span>
                </header>
                <div className="role-roster-card__list">
                  {cat.placeholderRoles.map((role, ri) => (
                    <div key={role} className="role-roster-person">
                      <span className="role-roster-person__number">{String(ri + 1).padStart(2, '0')}</span>
                      <div className="role-roster-person__identity">
                        <strong>Name to be added</strong>
                        <span>{role}</span>
                      </div>
                      <span className="role-roster-person__status">Profile pending</span>
                    </div>
                  ))}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

function Team() {
  return (
    <>
      <Seo
        title="Team | The People Behind ATTI VERSE"
        description="The leadership and creative collective behind ATTI VERSE Entertainment & Productions — founders, performers, creators, designers, production and events teams."
        path="/team"
      />
      <PageHeader
        eyebrow="Team"
        crumb="Team"
        title="THE PEOPLE BEHIND ATTI VERSE"
        subtitle="Every performance, production and event is powered by people who bring their own talent, creativity and commitment."
      />
      <Leadership />
      <Categories />
      <CTASection
        copy={
          <>
            Want to join the collective? Performers, creators and organizers — we're always building.
          </>
        }
        primary={{ label: 'Collaborate With Us', to: '/contact' }}
      />
    </>
  )
}

export default Team
