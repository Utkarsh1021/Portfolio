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
    // {
    //   title: 'AI / Machine Learning',
    //   skills: [
    //     'Machine Learning',
    //     'Artificial Intelligence',
    //     'Pandas',
    //     'NumPy',
    //     'Scikit-learn'
    //   ]
    // },
    {
      title: 'Development Practices',
      skills: ['Agile Methodology', 'Scrum', 'MVC Architecture']
    }
  ]

  return (
    <section id="skills" ref={ref} className="section-padding bg-transparent">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-100">
            Technical <span className="gradient-to-r from-blue-400 to-purple-400 mx-auto">Skills</span>
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
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="bg-[#0f0738] border border-gray-800 rounded-2xl p-6 
                         hover:border-gray-600 hover:scale-[1.02] 
                         transition-all duration-300"
            >
              <h3 className="text-lg font-semibold mb-4 text-gray-200">
                {category.title}
              </h3>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <motion.span
                    key={skill}
                    whileHover={{ scale: 1.06 }}
                    className="px-4 py-2 rounded-md text-sm 
                               bg-[#1a1a1a] text-gray-300 
                               border border-gray-700
                               hover:text-gray-100 hover:border-gray-500
                               transition-all"
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
