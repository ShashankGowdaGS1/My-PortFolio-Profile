import { ArrowRight, ArrowUpRight, Github } from "lucide-react";
import AnimatedBorderButton from "../components/AnimatedBorderButton";
import { motion } from "framer-motion";

const projects = [
  {
    title: "AI SaaS Platform",
    description:
      "Built a full-stack AI SaaS platform offering text, image, video, music, and code generation with a modern dashboard, authentication, and scalable architecture.",
    image: "/projects/ai-saas.jpg",
    tags: ["Next.js", "Express", "MongoDB", "OpenAI API"],
    link: "#",
    github: "#",
  },
  {
    title: "Real-Time Chat Application",
    description:
      "Developed a real-time chat system with instant messaging, user presence, and responsive UI using WebSockets and modern React patterns.",
    image: "/projects/chat-app.avif",
    tags: ["React", "Node.js", "Socket.io", "MongoDB"],
    link: "#",
    github: "#",
  },
  {
    title: "Library Management System",
    description:
      "Created a Python-based library management system with text-to-speech support and Excel-based data storage to improve accessibility and reduce manual work.",
    image: "/projects/library-system.jpg",
    tags: ["Python", "Automation", "Text-to-Speech"],
    link: "#",
    github: "#",
  },
  {
    title: "Instagram Automation Tool",
    description:
      "Built an automation tool to schedule posts and manage interactions efficiently, improving consistency and reducing manual effort.",
    image: "/projects/insta.png",
    tags: ["Python", "Automation"],
    link: "#",
    github: "#",
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
    transition: { staggerChildren: 0.1, delayChildren: 0.2 }
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

const Project = () => {
  return (
    <section id="project" className="py-32 relative overflow-hidden">
      {/* Background Glows */}
      <div className="absolute -top-1/4 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-1/4 left-0 w-64 h-64 bg-highlight/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div 
          className="text-center mx-auto max-w-3xl mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "0px 0px -50px 0px" }}
        >
          <motion.span 
            variants={fadeInUp}
            className="text-secondary-foreground text-sm font-medium tracking-wider uppercase"
          >
            Featured Work
          </motion.span>
          
          <motion.h2 
            variants={{
              ...fadeInUp,
              visible: { ...fadeInUp.visible, transition: { ...fadeInUp.visible.transition, delay: 0.1 } }
            }}
            className="text-4xl md:text-5xl font-bold mt-4 mb-6 text-secondary-foreground"
          >
            Projects that
            <span className="font-serif italic font-normal text-white"> make an impact.</span>
          </motion.h2>
          
          <motion.p 
            variants={{
              ...fadeInUp,
              visible: { ...fadeInUp.visible, transition: { ...fadeInUp.visible.transition, delay: 0.2 } }
            }}
            className="text-muted-foreground"
          >
            A showcase of my technical strengths, problem-solving mindset, and passion
            for building scalable, user-focused web applications.
          </motion.p>
        </motion.div>

        {/* Project Grid with Staggered Animation */}
        <motion.div 
          className="grid md:grid-cols-2 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "0px 0px -50px 0px" }}
          variants={staggerContainer}
        >
          {projects.map((project, idx) => (
            <motion.div 
              key={idx} 
              variants={staggerItem}
              className="group glass rounded-2xl overflow-hidden"
              // Add hover effect
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              {/* Image */}
              <div className="relative overflow-hidden aspect-video">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent opacity-60" />
                
                {/* Overlay Links */}
                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a 
                    href={project.link} 
                    className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                  >
                    <ArrowRight className="w-5 h-5"/>
                  </a>
                  <a 
                    href={project.github} 
                    className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                  >
                    <Github className="w-5 h-5"/>
                  </a>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <ArrowUpRight 
                    className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all"
                  />
                </div>
                <p className="text-sm text-muted-foreground">{project.description}</p>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagidx) => (
                    <span 
                      key={tagidx} 
                      className="px-4 py-1.5 rounded-full bg-surface text-sm font-medium border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View All CTA */}
        <motion.div 
          className="text-center mt-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "0px 0px -50px 0px" }}
          variants={{
            ...fadeInUp,
            visible: { ...fadeInUp.visible, transition: { ...fadeInUp.visible.transition, delay: 0.5 } }
          }}
        >
          <AnimatedBorderButton className="w-5 h-5">
            View All Projects
          </AnimatedBorderButton>
        </motion.div>
      </div>
    </section>
  )
}

export default Project
