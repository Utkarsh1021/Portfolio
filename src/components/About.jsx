import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const About = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="about" ref={ref} className="section-padding relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="text-gradient">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="glass rounded-2xl p-8 space-y-4">
              <h3 className="text-2xl font-bold text-gradient mb-4">Professional Summary</h3>
              <p className="text-gray-300 leading-relaxed text-lg">
                3rd year Computer Science and Engineering undergraduate with strong foundations in full-stack web development. Currently working as a Full-Stack Web Developer with hands-on experience in building scalable web and mobile applications. Skilled in backend logic, RESTful APIs, secure authentication, and collaborative agile development environments.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            <div className="glass rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gradient mb-6">Education</h3>
              <div className="space-y-4">
                <div className="border-l-2 border-purple-500 pl-6">
                  <h4 className="text-xl font-semibold mb-2">Bachelor of Technology (B.Tech)</h4>
                  <p className="text-purple-300 font-medium mb-1">Computer Science and Engineering – Full-Stack Web Development</p>
                  <p className="text-gray-400 mb-1">Lovely Professional University</p>
                  <p className="text-gray-500 text-sm">2023 – 2027 (Ongoing)</p>
                </div>
              </div>
            </div>

            <div className="glass rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gradient mb-4">Contact Information</h3>
              <div className="space-y-3 text-gray-300">
                <p><span className="text-purple-300 font-medium">Email:</span> utkarshumang111@gmail.com</p>
                <p><span className="text-purple-300 font-medium">Phone:</span> +91-8797149965</p>
                <p><span className="text-purple-300 font-medium">Location:</span> Motihari, Bihar, India</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
