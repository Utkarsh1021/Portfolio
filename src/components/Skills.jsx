import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const Skills = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const skillCategories = [
    {
      title: 'Programming Languages',
      skills: ['C', 'C++', 'Java', 'Python', 'JavaScript']
    },
    {
      title: 'Frontend Technologies',
      skills: ['HTML5', 'CSS3', 'React.js', 'Tailwind CSS']
    },
    {
      title: 'Backend Technologies',
      skills: ['Node.js', 'Express.js', 'Flask']
    },
    {
      title: 'Databases',
      skills: ['MySQL', 'MongoDB', 'SQL']
    },
    {
      title: 'APIs & Security',
      skills: [
        'RESTful APIs',
        'JWT Authentication',
        'bcrypt',
        'Authorization',
        'API Integration'
      ]
    },
    {
      title: 'Dev Tools & Platforms',
      skills: ['Git', 'GitHub', 'Postman', 'Firebase', 'Supabase']
    },
    {
      title: 'Development Practices',
      skills: ['Agile Methodology', 'Scrum', 'MVC Architecture']
    }
  ]

  return (
    <section id="skills" ref={ref} className="section-padding bg-transparent relative overflow-hidden">
      {/* Animated Background Blobs */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-pink-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }} />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-100">
            Technical <span className="text-gradient">Skills</span>
          </h2>
          <div className="w-24 h-[2px] bg-gray-700 mx-auto rounded-full" />
        </motion.div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.03, y: -5 }}
              className="glass rounded-2xl p-6 hover:bg-white/15 transition-all duration-300"
            >
              <h3 className="text-xl font-bold mb-4 text-gradient">
                {category.title}
              </h3>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <motion.span
                    key={skill}
                    whileHover={{ scale: 1.1 }}
                    className="px-3 py-1.5 rounded-lg text-xs font-medium
                               glass-dark text-gray-300
                               hover:text-white hover:border-purple-400/50
                               hover:shadow-[0_0_15px_rgba(168,85,247,0.4)]
                               transition-all duration-200"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
