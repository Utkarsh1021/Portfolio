import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { FiGithub, FiExternalLink } from 'react-icons/fi'

const Projects = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const projects = [
    {
      title: 'Online Banking Management System',
      techStack: ['React', 'Node.js', 'Express.js', 'MySQL'],
      description: 'Secure role-based banking system with fund transfers, transaction history, and account management. Features JWT authentication and bcrypt encryption. Includes admin dashboard for approvals and monitoring. Real-world banking workflow simulation.',
      github: 'https://github.com/tejas140905/apex-Banking-',
      features: [
        'Secure role-based banking system',
        'Fund transfers and transaction history',
        'JWT authentication and bcrypt encryption',
        'Admin dashboard for approvals and monitoring',
        'Real-world banking workflow simulation'
      ]
    },
    {
      title: 'GMS- Gerivence Management System',
      techStack: ['Flutter', 'Dart', 'PostgreSQL', 'REST APIs', 'Firebase Auth', 'Supabase', 'Supabase Flutter SDK', 'Material UI', 'Git', 'GitHub'],
      description: 'A cross-platform Grievance Management System built in Flutter with Firebase Authentication for secure login and Supabase as the backend for real-time grievance storage and retrieval. It enables users to submit, track, and manage complaints seamlessly across Android, iOS, and web platforms with intuitive UI and cloud-powered data services. 🚀',
      github: 'https://github.com/Utkarsh1021/Grievance_Management_System',
      features: [
        'Secure email/password authentication with Firebase Auth',
        'Real-time grievance CRUD operations using Supabase backend',
        'Status tracking and streamlined complaint lifecycle management',
        'Admin dashboard for monitoring and resolving grievances',
        'Cross-platform Flutter app with intuitive Material UI support for Android, iOS, and web with Flutter',
        'Cloud-hosted PostgreSQL database with scalable architecture using Supabase',
      ]
    }
  ]

  return (
    <section id="projects" ref={ref} className="section-padding relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="glass rounded-2xl p-8 hover:scale-105 transition-transform duration-300 group"
            >
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-2xl font-bold text-gradient">{project.title}</h3>
                <motion.a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  className="text-gray-400 hover:text-purple-400 transition-colors"
                >
                  <FiGithub size={24} />
                </motion.a>
              </div>

              <p className="text-gray-300 mb-6 leading-relaxed">{project.description}</p>

              <div className="mb-6">
                <h4 className="text-sm font-semibold text-purple-300 mb-3">Tech Stack:</h4>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-purple-500/20 border border-purple-500/30 rounded-lg text-sm text-purple-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mb-6">
                <h4 className="text-sm font-semibold text-purple-300 mb-3">Key Features:</h4>
                <ul className="space-y-2">
                  {project.features.map((feature, idx) => (
                    <li key={idx} className="text-gray-300 text-sm flex items-start">
                      <span className="text-purple-400 mr-2 mt-1">▹</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <motion.a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg font-medium hover:shadow-lg hover:shadow-purple-500/50 transition-all"
              >
                <FiGithub size={18} />
                View on GitHub
              </motion.a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
