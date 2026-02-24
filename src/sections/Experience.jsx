import { motion } from "framer-motion";

const experiences = [
  {
    period: "2024 – 2025",
    role: "Software Developer Trainee",
    company: "Pixela Media",
    description:
      "Worked on building and enhancing web applications using React and modern JavaScript. Contributed to UI development, API integration, and performance improvements while collaborating with the team Members.",
    technologies: ["React", "JavaScript", "Tailwind CSS", "REST APIs"],
    current: true,
  },
  {
    period: "2024",
    role: "Full-Stack Development Intern",
    company: "Rooman Technologies",
    description:
      "Developed full-stack features for real-world applications, gaining hands-on experience in frontend and backend development. Focused on building responsive interfaces and integrating backend services.",
    technologies: ["React", "Node.js", "Express", "MongoDB"],
    current: false,
  },
  {
    period: "2023",
    role: "Python Developer Intern",
    company: "Drop Solutions",
    description:
      "Built Python-based applications and automation scripts. Worked on data handling, logic implementation, and improving efficiency through scripting and automation.",
    technologies: ["Python", "Automation", "Data Handling"],
    current: false,
  },
];

// =============================================================================
// ANIMATION VARIANTS
// =============================================================================

const fadeInUp = {
  hidden: { opacity: 0, y: 30, filter: "blur(10px)" },
  visible: { 
    opacity: 1, 
    y: 0, 
    filter: "blur(0px)",
    transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.1 }
  }
};

const staggerItem = {
  hidden: { opacity: 0, y: 30, filter: "blur(10px)" },
  visible: { 
    opacity: 1, 
    y: 0, 
    filter: "blur(0px)",
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

const Experience = () => {
  return (
    <section id="experience" className="py-32 relative overflow-hidden">
      {/* Background Glow */}
      <div
        className="absolute top-1/2 left-1/4 w-96 h-96
                  bg-primary/5 rounded-full blur-3xl
                  -translate-y-1/2 pointer-events-none"
      />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div 
          className="max-w-3xl mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "0px 0px -50px 0px" }}
        >
          <motion.span 
            variants={fadeInUp}
            className="text-secondary-foreground text-sm font-medium tracking-wider uppercase"
          >
            Career Journey
          </motion.span>
          
          <motion.h2 
            variants={{
              ...fadeInUp,
              visible: { ...fadeInUp.visible, transition: { ...fadeInUp.visible.transition, delay: 0.1 } }
            }}
            className="text-4xl md:text-5xl font-bold mt-4 mb-6 text-secondary-foreground"
          >
            Experience that <span className="font-serif italic font-normal text-white"> speaks volumes.</span>
          </motion.h2>
          
          <motion.p 
            variants={{
              ...fadeInUp,
              visible: { ...fadeInUp.visible, transition: { ...fadeInUp.visible.transition, delay: 0.2 } }
            }}
            className="text-muted-foreground"
          >
            A timeline of my learning journey and hands-on experience, from building strong
            fundamentals to working on real-world projects and internships in software
            development.
          </motion.p>
        </motion.div>

        {/* Timeline with Staggered Animation */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="timeline-glow absolute left-0 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary/70 via-primary/30 to-transparent md:-translate-x-1/2 shadow-[0_0-25px_rgba(32,178,166,0.8)]"/>
          
          {/* Experience Items */}
          <motion.div 
            className="space-y-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "0px 0px -50px 0px" }}
            variants={staggerContainer}
          >
            {experiences.map((exp, idx) => (
              <motion.div 
                key={idx}
                variants={staggerItem}
                className="relative grid md:grid-cols-2 gap-8"
              >
                {/* Time Dot */}
                <div className="absolute left-0 md:left-1/2 top-0 w-3 h-3 bg-primary rounded-full -translate-x-1/2 ring-4 ring-background z-10">
                  {exp.current && (
                    <span className="absolute inset-0 rounded-full bg-primary animate-ping opacity-75"/>
                  )}
                </div>

                {/* Content */}
                <div className={`pl-8 md:pl-0 ${idx % 2 === 0 ? "md:pr-16 md:text-right" : "md:col-start-2 md:pl-16"}`}>
                  <motion.div 
                    className="glass p-6 rounded-2xl border border-primary/30 hover:border-primary/50 transition-all duration-500"
                    whileHover={{ scale: 1.02 }}
                  > 
                    <span className="text-sm text-primary font-medium">{exp.period}</span>
                    <h3 className="text-xl font-semibold mt-2">{exp.role}</h3>
                    <p className="text-muted-foreground">{exp.company}</p>
                    <p className="text-sm text-muted-foreground mt-4">{exp.description}</p>
                    
                    {/* Technologies */}
                    <div className={`flex flex-wrap gap-2 mt-4 ${idx % 2 === 0 ? "md:justify-end" : ""}`}>
                      {exp.technologies.map((tech, techIdx) => (
                        <span 
                          key={techIdx}
                          className="px-3 py-1 bg-surface text-xs rounded-full text-muted-foreground"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Experience
