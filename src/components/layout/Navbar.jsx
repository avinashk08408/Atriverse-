import { useState, useEffect } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { NAV_LINKS } from '../../config/site.js'
import ContactForm from '../ui/ContactForm.jsx'

function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [workFormOpen, setWorkFormOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setOpen(false)
    setWorkFormOpen(false)
  }, [location.pathname])

  useEffect(() => {
    let closedByResize = false
    const mq = window.matchMedia('(min-width: 1081px)')
    const handleChange = (e) => {
      if (e.matches) {
        closedByResize = true
        setOpen(false)
      }
    }
    mq.addEventListener('change', handleChange)
    return () => {
      mq.removeEventListener('change', handleChange)
      if (closedByResize) document.body.style.overflow = ''
    }
  }, [])

  useEffect(() => {
    const handlePopState = () => {
      document.body.style.overflow = ''
      setOpen(false)
    }
    window.addEventListener('popstate', handlePopState)
    return () => window.removeEventListener('popstate', handlePopState)
  }, [])

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <>
      <header className={`nav ${scrolled ? 'nav--scrolled' : ''} ${open ? 'nav--scrolled' : ''}`}>
        <div className="container nav__inner">
          <Link to="/" className="nav__brand" aria-label="ATTI VERSE home">
            <span className="nav__brand-text">
              <span className="nav__brand-name">ATTI VERSE</span>
              <span className="nav__brand-sub">Entertainment &amp; Productions</span>
            </span>
          </Link>

          <nav className="nav__menu" aria-label="Primary">
            {NAV_LINKS.filter((l) => l.to !== '/contact').map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === '/'}
                className={({ isActive }) => `nav__link ${isActive ? 'is-active' : ''}`}
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          <button type="button" className="btn btn--gold nav__cta" onClick={() => setWorkFormOpen((value) => !value)} aria-expanded={workFormOpen}>
            <span>{workFormOpen ? 'Close Form' : 'Work With Us'}</span>
          </button>

          <button
            type="button"
            className={`nav__toggle ${open ? 'is-open' : ''}`}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </header>

      {workFormOpen && (
        <div className="nav__form-panel">
          <div className="nav__form-heading">
            <span>Join ATTI VERSE</span>
            <button type="button" aria-label="Close Join ATTI VERSE form" onClick={() => setWorkFormOpen(false)}>×</button>
          </div>
          <ContactForm kind="Join ATTI VERSE" compact />
        </div>
      )}

      <div className={`mobile-menu ${open ? 'is-open' : ''}`} aria-hidden={!open}>
        <nav aria-label="Mobile">
          <ul style={{ listStyle: 'none' }}>
            {NAV_LINKS.map((link, i) => (
              <li key={link.to} style={{ marginBottom: '0.15rem' }}>
                <NavLink
                  to={link.to}
                  end={link.to === '/'}
                  className={({ isActive }) => `mobile-menu__link ${isActive ? 'text-gold' : ''}`}
                  style={{ transitionDelay: open ? `${i * 45}ms` : '0ms' }}
                >
                  <span>{link.label}</span>
                  <small>0{i + 1}</small>
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
        <button type="button" className="btn btn--gold mobile-menu__cta" onClick={() => { setWorkFormOpen((value) => !value); setOpen(false) }} aria-expanded={workFormOpen}>
          <span>{workFormOpen ? 'Close Form' : 'Work With Us'}</span>
        </button>
      </div>
    </>
  )
}

export default Navbar
