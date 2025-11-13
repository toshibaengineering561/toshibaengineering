import { Link, NavLink } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Header({ company }) {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className={`sticky top-0 z-50 transition-all ${scrolled ? 'bg-white/80 dark:bg-neutral-950/70 backdrop-blur border-b border-neutral-200/60 dark:border-neutral-800/60' : 'bg-transparent'}`}>
      <header className="container flex items-center justify-between py-3">
        <Link to="/" className="flex items-center gap-2">
          <div className="h-9 w-9 rounded bg-brand-600 text-white grid place-items-center font-bold">T</div>
          <div className="flex flex-col leading-tight">
            <span className="font-semibold">Toshiba Engineering</span>
            <span className="text-xs text-neutral-500">Packaging Automation</span>
          </div>
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          <Nav to="/">Home</Nav>
          <Nav to="/products">Products</Nav>
          <Nav to="/about">About</Nav>
          <a href={company?.map?.link || '#'} target="_blank" className="text-sm text-neutral-600 hover:text-neutral-900 dark:text-neutral-300 dark:hover:text-white">Visit Us</a>
          <Link to="/products" className="btn btn-primary">Explore Machines</Link>
        </nav>
        <button onClick={() => setOpen((v) => !v)} className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded border border-neutral-200 dark:border-neutral-800">
          <span className="sr-only">Toggle menu</span>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" /></svg>
        </button>
      </header>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden border-t border-neutral-200 dark:border-neutral-800"
          >
            <div className="container py-3 flex flex-col gap-2">
              <MobileNav to="/" onClick={() => setOpen(false)}>Home</MobileNav>
              <MobileNav to="/products" onClick={() => setOpen(false)}>Products</MobileNav>
              <MobileNav to="/about" onClick={() => setOpen(false)}>About</MobileNav>
              <a href={company?.map?.link || '#'} target="_blank" onClick={() => setOpen(false)} className="py-2 text-sm text-neutral-700 dark:text-neutral-200">Visit Us</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

function Nav({ to, children }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `text-sm ${isActive ? 'text-brand-700 dark:text-brand-400' : 'text-neutral-600 hover:text-neutral-900 dark:text-neutral-300 dark:hover:text-white'}`
      }
    >
      {children}
    </NavLink>
  )
}

function MobileNav({ to, children, onClick }) {
  return (
    <NavLink to={to} onClick={onClick} className="py-2 text-sm text-neutral-700 dark:text-neutral-200">
      {children}
    </NavLink>
  )
}


