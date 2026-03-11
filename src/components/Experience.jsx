import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { FiExternalLink } from 'react-icons/fi'

const Experience = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const experiences = [
    {
      company: '7hours - Smart Digital Solutions.',
      role: 'Full Stack Software Developer',
      duration: '2026 – Present',
      points: [
        'Developed and deployed scalable full-stack web and mobile applications.',
        'Designed RESTful APIs and implemented secure backend logic.',
        'Integrated Firebase services and authentication workflows.',
        'Collaborated in agile teams for feature development and optimization.'
      ]
    },
    {
      company: 'JPMorgan Chase & Co.',
      role: 'Intern – Software Engineer',
      duration: 'Dec 2025 – Feb 2026',
      points: [
        'Integrated Kafka into a Spring Boot microservice to consume and deserialize high-volume transaction messages using a configurable topic and embedded Kafka test framework.',
        'Implemented transaction validation and persistence logic with Spring Data JPA and an H2 SQL database, including entity modeling and balance updates across relational User records.',
        'Connected the service to an external REST Incentive API using RestTemplate, processing incentive responses and incorporating them into transactional workflows.',
        'Developed a REST endpoint for querying user balances, returning JSON responses through a Spring controller while maintaining clean architectural boundaries.',
        'Verified system behavior using Maven test suites and debugger-driven inspection, ensuring reliability across message ingestion, database operations, and external API interactions.'
      ],
      github: 'https://github.com/Utkarsh1021/forage-midas'
    },
    {
      company: 'Ns – Tech Solutions',
      role: 'Frontend Developer Intern',
      duration: 'Jan 2025 – May 2025',
      points: [
        'Developed responsive UIs using React, HTML, CSS, and JavaScript.',
        'Integrated RESTful APIs and built interactive dashboards.',
        'Followed Git-based version control and scalable development practices.'
      ]
    }
  ]

  return (
    <section id="experience" ref={ref} className="section-padding relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Professional <span className="text-gradient">Experience</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto rounded-full" />
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 via-blue-500 to-pink-500 transform md:-translate-x-1/2" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className={`relative flex items-start ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-purple-500 rounded-full border-4 border-slate-900 transform md:-translate-x-1/2 z-10" />

                {/* Content Card */}
                <div className={`ml-16 md:ml-0 md:w-5/12 ${index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'}`}>
                  <div className="glass rounded-2xl p-6 hover:scale-105 transition-transform duration-300">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="text-2xl font-bold text-gradient mb-1">{exp.role}</h3>
                        <p className="text-xl font-semibold text-purple-300 mb-2">{exp.company}</p>
                        <p className="text-gray-400 text-sm">{exp.duration}</p>
                      </div>
                      {exp.github && (
                        <motion.a
                          href={exp.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.2 }}
                          className="text-purple-400 hover:text-purple-300"
                        >
                          <FiExternalLink size={20} />
                        </motion.a>
                      )}
                    </div>
                    <ul className="space-y-2 mt-4">
                      {exp.points.map((point, idx) => (
                        <li key={idx} className="text-gray-300 flex items-start">
                          <span className="text-purple-400 mr-2 mt-1">▹</span>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
