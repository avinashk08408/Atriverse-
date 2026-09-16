import { Outlet, useLocation } from 'react-router-dom'
import Navbar from './Navbar.jsx'
import Footer from './Footer.jsx'
import ScrollToTop from './ScrollToTop.jsx'
import ScrollReveal from '../ui/ScrollReveal.jsx'

function Layout() {
  const location = useLocation()

  return (
    <>
      <ScrollToTop />
      <Navbar />
      <main key={location.pathname} className="page-enter">
        <ScrollReveal />
        <Outlet />
      </main>
      <Footer />
    </>
  )
}

export default Layout
