import { useEffect } from 'react'

function ScrollReveal() {
  useEffect(() => {
    const sections = Array.from(document.querySelectorAll('main section, main .page-header'))
    if (!sections.length) return undefined

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      sections.forEach((section) => section.classList.add('scroll-section-visible'))
      return undefined
    }

    sections.forEach((section, index) => {
      section.classList.add('scroll-section-reveal')
      section.style.setProperty('--scroll-section-delay', `${Math.min(index * 35, 180)}ms`)
    })

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('scroll-section-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.08, rootMargin: '0px 0px -8% 0px' },
    )

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  return null
}

export default ScrollReveal
