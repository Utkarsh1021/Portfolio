import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useEffect, useMemo, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { FiChevronLeft, FiChevronRight, FiExternalLink, FiX } from 'react-icons/fi'
import { activities as allActivities } from '../data/activities'

const Activities = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const scrollerRef = useRef(null)

  const activities = allActivities
  const [activeActivityId, setActiveActivityId] = useState(null)
  const [activeImageIdx, setActiveImageIdx] = useState(0)

  const activeActivity = useMemo(
    () => activities.find((a) => a.id === activeActivityId) || null,
    [activities, activeActivityId],
  )

  const activeImages = activeActivity?.images?.length
    ? activeActivity.images
    : activeActivity?.image
      ? [activeActivity.image]
      : []

  const closeModal = () => {
    setActiveActivityId(null)
    setActiveImageIdx(0)
  }

  useEffect(() => {
    if (!activeActivityId) return
    const onKeyDown = (e) => {
      if (e.key === 'Escape') closeModal()
      if (e.key === 'ArrowLeft') setActiveImageIdx((i) => Math.max(0, i - 1))
      if (e.key === 'ArrowRight') setActiveImageIdx((i) => Math.min(activeImages.length - 1, i + 1))
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [activeActivityId, activeImages.length])

  const scrollByCards = (direction) => {
    const el = scrollerRef.current
    if (!el) return
    const card = el.querySelector('[data-activity-card="true"]')
    const cardWidth = card ? card.getBoundingClientRect().width : 320
    const gap = 24
    el.scrollBy({ left: direction * (cardWidth + gap), behavior: 'smooth' })
  }

  return (
    <section id="activities" ref={ref} className="section-padding relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-10"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Extra-<span className="text-gradient">Activities</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto rounded-full" />
        </motion.div>

        <div className="flex items-center justify-between gap-4 mb-6">
          <div className="text-gray-300 text-sm" />
          <Link
            to="/activities"
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

          <div
            ref={scrollerRef}
            className="overflow-x-auto pb-6 scroll-smooth snap-x snap-mandatory"
          >
            <div className="flex gap-6 px-2" style={{ minWidth: 'max-content' }}>
              {activities.map((a) => (
                <motion.button
                  key={a.id}
                  type="button"
                  onClick={() => {
                    setActiveActivityId(a.id)
                    setActiveImageIdx(0)
                  }}
                  whileHover={{ scale: 1.03, y: -8 }}
                  className="snap-start flex-shrink-0 w-80 h-96 glass rounded-2xl overflow-hidden cursor-pointer group hover:bg-white/15 transition-all text-left"
                  data-activity-card="true"
                >
                  <div className="h-48 bg-white/5 flex items-center justify-center overflow-hidden">
                    {a.image ? (
                      <img
                        src={a.image}
                        alt={`${a.title} activity`}
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
                      <h3 className="text-lg font-bold text-white">{a.title}</h3>
                      <FiExternalLink className="text-gray-400 group-hover:text-white transition-colors mt-1" />
                    </div>
                    {(a.issuer || a.date) && (
                      <p className="text-sm text-gray-300">
                        {a.issuer}
                        {a.issuer && a.date ? ' • ' : ''}
                        {a.date}
                      </p>
                    )}
                    <p className="text-gray-400 text-sm mt-2">Click to view</p>
                  </div>
                </motion.button>
              ))}
            </div>
          </div>

          <div className="text-center mt-6 text-gray-400 text-sm">
            <p>Scroll to see more activities</p>
          </div>
        </motion.div>
      </div>

      {activeActivity && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-[60] flex items-center justify-center p-4"
        >
          <button
            type="button"
            aria-label="Close modal"
            onClick={closeModal}
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
          />

          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.25 }}
            className="relative w-full max-w-4xl glass rounded-2xl overflow-hidden"
          >
            <div className="flex items-center justify-between px-5 py-4 border-b border-white/10">
              <div>
                <h3 className="text-xl font-bold text-white">{activeActivity.title}</h3>
                {(activeActivity.issuer || activeActivity.date) && (
                  <p className="text-sm text-gray-300 mt-1">
                    {activeActivity.issuer}
                    {activeActivity.issuer && activeActivity.date ? ' • ' : ''}
                    {activeActivity.date}
                  </p>
                )}
              </div>
              <button
                type="button"
                onClick={closeModal}
                className="w-10 h-10 rounded-full glass inline-flex items-center justify-center hover:bg-white/15 leading-none p-0"
                aria-label="Close"
              >
                <FiX size={20} className="block" />
              </button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-5 gap-0">
              <div className="lg:col-span-3 bg-white/5">
                <div className="relative aspect-[4/3] flex items-center justify-center overflow-hidden">
                  {activeImages.length ? (
                    <img
                      src={activeImages[activeImageIdx]}
                      alt={`${activeActivity.title} photo ${activeImageIdx + 1}`}
                      className="w-full h-full object-contain"
                    />
                  ) : (
                    <div className="w-20 h-20 bg-gradient-to-br from-blue-500/30 to-purple-600/30 rounded-2xl flex items-center justify-center">
                      <FiExternalLink size={32} className="text-gray-200" />
                    </div>
                  )}

                  {activeImages.length > 1 && (
                    <>
                      <button
                        type="button"
                        onClick={() => setActiveImageIdx((i) => Math.max(0, i - 1))}
                        disabled={activeImageIdx === 0}
                        className="absolute left-3 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full glass inline-flex items-center justify-center hover:bg-white/15 disabled:opacity-40"
                        aria-label="Previous image"
                      >
                        <FiChevronLeft />
                      </button>
                      <button
                        type="button"
                        onClick={() => setActiveImageIdx((i) => Math.min(activeImages.length - 1, i + 1))}
                        disabled={activeImageIdx === activeImages.length - 1}
                        className="absolute right-3 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full glass inline-flex items-center justify-center hover:bg-white/15 disabled:opacity-40"
                        aria-label="Next image"
                      >
                        <FiChevronRight />
                      </button>
                    </>
                  )}
                </div>

                {activeImages.length > 1 && (
                  <div className="px-4 py-3 flex gap-2 overflow-x-auto">
                    {activeImages.map((src, idx) => (
                      <button
                        key={`${src}-${idx}`}
                        type="button"
                        onClick={() => setActiveImageIdx(idx)}
                        className={`h-16 w-24 rounded-lg overflow-hidden border transition-colors ${
                          idx === activeImageIdx ? 'border-purple-400' : 'border-white/10 hover:border-white/30'
                        }`}
                        aria-label={`Open image ${idx + 1}`}
                      >
                        <img src={src} alt="" className="w-full h-full object-cover" />
                      </button>
                    ))}
                  </div>
                )}
              </div>

              <div className="lg:col-span-2 p-6">
                {activeActivity.description ? (
                  <p className="text-gray-200 leading-relaxed">{activeActivity.description}</p>
                ) : (
                  <p className="text-gray-400">
                    Add a description for this activity in `src/data/activities.js`.
                  </p>
                )}

                {activeActivity.href ? (
                  <a
                    href={activeActivity.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-purple-600/30 text-purple-200 hover:bg-purple-600/45 font-medium"
                  >
                    Open link <FiExternalLink />
                  </a>
                ) : null}
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </section>
  )
}

export default Activities
