import { Link } from 'react-router-dom'
import { NAV_LINKS, SITE, SOCIAL, FOOTER_EXTRA_LINKS } from '../../config/site.js'
import Icon from '../ui/Icon.jsx'

const isReadyUrl = (href) => typeof href === 'string' && /\bhttps?:\/\//i.test(href) && !/(YOUR_)|(INSTAGRAM_URL)|(YOUTUBE_URL)|(LINKEDIN_URL)|PLACEHOLDER/i.test(href)

const socials = [
  { label: 'Instagram', href: SOCIAL.instagram, icon: 'instagram' },
].filter((s) => isReadyUrl(s.href))

const CONTACTS = [
  ['Rahul R S', '+91 80862 80307'],
  ['Tamilselvan', '+91 86105 04708'],
  ['Siva', '+91 63831 48233'],
  ['Harish', '+91 94888 74853'],
]

function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__top">
          <div>
            <div className="footer__brand">
            <div>
              <Link to="/" className="footer__brand-name">
                ATTII VERSE
              </Link>
              <p className="footer__tagline">Our Talent. Our Verse.</p>
              <p className="footer__brand-line">{SITE.brandLine}</p>
              <p className="footer__desc">{SITE.description}</p>
            </div>
          </div>
            <div className="footer__socials">
              {socials.map((s) => (
                <a
                  key={s.label}
                  className="footer__social"
                  href={s.href}
                  aria-label={s.label}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon name={s.icon} size={18} />
                </a>
              ))}
              <span className="footer__social footer__social--disabled" aria-label="LinkedIn profile coming soon" title="LinkedIn profile coming soon">
                <Icon name="linkedin" size={18} />
              </span>
              <a className="footer__social" href={`mailto:${SITE.email}`} aria-label="Email ATTII VERSE">
                <Icon name="mail" size={18} />
              </a>
              <span className="footer__social footer__social--disabled" aria-label="YouTube channel coming soon" title="YouTube channel coming soon">
                <Icon name="youtube" size={18} />
              </span>
            </div>
          </div>

          <nav aria-label="Footer">
            <h3 className="footer__heading">Explore</h3>
            <ul className="footer__links">
              {NAV_LINKS.map((link) => (
                <li key={link.to}>
                  <Link className="footer__link" to={link.to}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Footer extras">
            <h3 className="footer__heading">More</h3>
            <ul className="footer__links">
              {FOOTER_EXTRA_LINKS.map((link) => (
                <li key={link.to}>
                  <Link className="footer__link" to={link.to}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h3 className="footer__heading">Get in Touch</h3>
            <ul className="footer__contact">
              {CONTACTS.map(([name, number]) => <li key={name}><a href={`tel:${number.replace(/\s/g, '')}`} className="footer__contact-link"><Icon name="phone" size={14} /><span><strong>{name}</strong>{number}</span></a></li>)}
              <li><a href={`mailto:${SITE.email}`} className="footer__contact-link"><Icon name="mail" size={14} /><span>{SITE.email}</span></a></li>
              <li><span className="footer__contact-link"><Icon name="location" size={14} /><span>{SITE.address}</span></span></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="footer__bottom">
          <p>
            © {year} {SITE.fullName}. All Rights Reserved.
          </p>
          <p>
            Crafted with <span aria-hidden="true" style={{ color: 'var(--gold)' }}>✦</span> in the ATTII VERSE ecosystem.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
