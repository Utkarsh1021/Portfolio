import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FiArrowLeft, FiExternalLink } from 'react-icons/fi'
import { certifications } from '../data/certifications'

const CertificationsGallery = () => {
  return (
    <div className="min-h-screen">
      <header className="fixed top-0 left-0 right-0 z-50 glass-dark shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="h-20 flex items-center justify-between">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-gray-200 hover:text-white font-medium"
            >
              <FiArrowLeft />
              Back
            </Link>
            <div className="text-xl font-bold text-gradient">Certifications</div>
            <div className="w-16" />
          </div>
        </div>
      </header>

      <main className="section-padding pt-32">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-10 text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              All <span className="text-gradient">Certificates</span>
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto rounded-full" />
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((c, idx) => (
              <motion.a
                key={c.id}
                href={c.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: Math.min(idx * 0.05, 0.4) }}
                className="group glass rounded-2xl overflow-hidden hover:bg-white/15 transition-all"
              >
                <div className="aspect-[4/3] bg-white/5 flex items-center justify-center overflow-hidden">
                  {c.image ? (
                    <img
                      src={c.image}
                      alt={`${c.title}`}
                      className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform"
                      loading="lazy"
                    />
                  ) : (
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500/30 to-purple-600/30 rounded-xl flex items-center justify-center">
                      <FiExternalLink size={26} className="text-gray-300" />
                    </div>
                  )}
                </div>

                <div className="p-5">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <h3 className="text-lg font-bold text-white">{c.title}</h3>
                      {(c.issuer || c.date) && (
                        <p className="text-sm text-gray-300 mt-1">
                          {c.issuer}
                          {c.issuer && c.date ? ' • ' : ''}
                          {c.date}
                        </p>
                      )}
                    </div>
                    <FiExternalLink className="text-gray-400 group-hover:text-white transition-colors mt-1" />
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}

export default CertificationsGallery

