import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { FiChevronLeft, FiChevronRight, FiExternalLink } from 'react-icons/fi'
import { certifications as allCertifications } from '../data/certifications'

const Certifications = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const scrollerRef = useRef(null)

  const certifications = allCertifications

  const scrollByCards = (direction) => {
    const el = scrollerRef.current
    if (!el) return
    const card = el.querySelector('[data-cert-card="true"]')
    const cardWidth = card ? card.getBoundingClientRect().width : 320
    const gap = 24
    el.scrollBy({ left: direction * (cardWidth + gap), behavior: 'smooth' })
  }

  return (
    <section id="certifications" ref={ref} className="section-padding relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-10"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Certifications & <span className="text-gradient">Achievements</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto rounded-full" />
        </motion.div>

        <div className="flex items-center justify-between gap-4 mb-6">
          <div className="text-gray-300 text-sm">
          </div>
          <Link
            to="/certifications"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-purple-600/30 text-purple-200 hover:bg-purple-600/45 font-medium"
          >
            View all
          </Link>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <button
            type="button"
            aria-label="Scroll left"
            onClick={() => scrollByCards(-1)}
            className="hidden md:inline-flex absolute -left-3 top-1/2 -translate-y-1/2 z-10 w-11 h-11 rounded-full glass items-center justify-center hover:bg-white/15"
          >
            <FiChevronLeft size={22} />
          </button>
          <button
            type="button"
            aria-label="Scroll right"
            onClick={() => scrollByCards(1)}
            className="hidden md:inline-flex absolute -right-3 top-1/2 -translate-y-1/2 z-10 w-11 h-11 rounded-full glass items-center justify-center hover:bg-white/15"
          >
            <FiChevronRight size={22} />
          </button>

          {/* Slider */}
          <div
            ref={scrollerRef}
            className="overflow-x-auto pb-6 scroll-smooth snap-x snap-mandatory"
          >
            <div className="flex gap-6 px-2" style={{ minWidth: 'max-content' }}>
              {certifications.map((c) => (
                <motion.a
                  key={c.id}
                  href={c.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.03, y: -8 }}
                  className="snap-start flex-shrink-0 w-80 h-96 glass rounded-2xl overflow-hidden cursor-pointer group hover:bg-white/15 transition-all"
                  data-cert-card="true"
                >
                  <div className="h-48 bg-white/5 flex items-center justify-center overflow-hidden">
                    {c.image ? (
                      <img
                        src={c.image}
                        alt={`${c.title} certificate`}
                        className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform"
                        loading="lazy"
                      />
                    ) : (
                      <div className="w-16 h-16 bg-gradient-to-br from-blue-500/30 to-purple-600/30 rounded-xl flex items-center justify-center">
                        <FiExternalLink size={26} className="text-gray-300" />
                      </div>
                    )}
                  </div>

                  <div className="p-6 flex flex-col gap-2">
                    <div className="flex items-start justify-between gap-3">
                      <h3 className="text-lg font-bold text-white">{c.title}</h3>
                      <FiExternalLink className="text-gray-400 group-hover:text-white transition-colors mt-1" />
                    </div>
                    {(c.issuer || c.date) && (
                      <p className="text-sm text-gray-300">
                        {c.issuer}
                        {c.issuer && c.date ? ' • ' : ''}
                        {c.date}
                      </p>
                    )}
                    <p className="text-gray-400 text-sm mt-2">Click to view</p>
                  </div>
                </motion.a>
              ))}
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="text-center mt-6 text-gray-400 text-sm">
            <p>Scroll to see more Certificates</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Certifications
