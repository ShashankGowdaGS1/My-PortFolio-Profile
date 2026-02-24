import React from 'react'
import Button from "@/components/Button"
import { ArrowRight, Download, ChevronDown, Github, Linkedin } from 'lucide-react'
import AnimatedBorderButton from '@/components/AnimatedBorderButton'
import { motion } from 'framer-motion'

const skills = [
  "React",
  "Next.js",
  "JavaScript",
  "Node.js",
  "MongoDB",
  "TailwindCSS",
  "Figma",
  "Git",
  "GitHub",
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
    transition: { staggerChildren: 0.1, delayChildren: 0.1 }
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

const Hero = () => {
  return (
    <section className='relative min-h-screen flex items-center overflow-hidden'>
      {/* Background */}
      <div className='absolute inset-0'>
        <img src="/hero-bg.jpg" alt="Hero image" className='w-full h-full object-cover opacity-40'/>
        <div className='absolute inset-0 bg-linear-to-b from-background/20 via-background/80 to-background'/>
      </div>

      {/* Green Dots */}
      <div className='absolute inset-0 overflow-hidden pointer-events-none'>
        {[...Array(30)].map((_, i) =>(
          <div key={i} className='absolute w-1.5 h-1.5 rotate-full opacity-60' 
          style={{
            backgroundColor: "#0FBD9D",
            left:`${Math.random() * 100}%`,
            top:`${Math.random() * 100}%`,
            animation: `slow-drift ${15 + Math.random() * 20}s ease-in-out infinite`,
            animationDelay: `${Math.random() *5}s`
          }}/>

        ))}
      </div>

      {/* Content */}
      <div className='container mx-auto px-6 pt-32 pb-20 relative z-10'>
        <div className='grid lg:grid-cols-2 gap-12 items-center'>
          {/* Left Column - Text Content */}
          <div className='space-y-8'>
            {/* Animated on initial load (above the fold) */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
            >
              <span className='inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-primary'>
                <span className='w-2 h-2 bg-primary rounded-full animate-pulse'/>
                  Software Engineer · React Specialist
              </span>
            </motion.div>

            {/* Headline */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={{
                ...fadeInUp,
                visible: { ...fadeInUp.visible, transition: { ...fadeInUp.visible.transition, delay: 0.1 } }
              }}
            >
              <h1 className='text-5xl md:text-6xl lg:text-7xl font-bold leading-tight'>
                Crafting <span className='text-primary glow-text'>Digital</span>
                <br />
                experience with
                <br />
                <span className='font-serif italic font-normal text-white'>precision</span>
              </h1>
            </motion.div>

            {/* Description */}
            <motion.p 
              initial="hidden"
              animate="visible"
              variants={{
                ...fadeInUp,
                visible: { ...fadeInUp.visible, transition: { ...fadeInUp.visible.transition, delay: 0.2 } }
              }}
              className='text-lg text-muted-foreground mx-w-lg'
            >
              Hi, I'm Shashank Gowda G S - a software engineer specializing in 
              React, Next.js and JavaScript. I build scalable, performace web applications that users love.
            </motion.p>

            {/* CTAs */}
            <motion.div 
              className='flex flex-wrap gap-4'
              initial="hidden"
              animate="visible"
              variants={{
                ...fadeInUp,
                visible: { ...fadeInUp.visible, transition: { ...fadeInUp.visible.transition, delay: 0.3 } }
              }}
            >
              <Button size='lg'>
                Contact Me <ArrowRight className="w-5 h-5" />
              </Button>
              <AnimatedBorderButton>
                <Download size={16} />
                Download CV
              </AnimatedBorderButton>
            </motion.div>

            {/* Social Links */}
            <motion.div 
              className='flex items-center gap-4'
              initial="hidden"
              animate="visible"
              variants={{
                ...fadeInUp,
                visible: { ...fadeInUp.visible, transition: { ...fadeInUp.visible.transition, delay: 0.4 } }
              }}
            >
              <span className='text-sm text-muted-foreground'>Follow Me:</span>
              {[
                  { icon: Github, href: "https://github.com/yourusername" },
                  { icon: Linkedin, href: "https://linkedin.com/in/yourusername" },
                ].map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all duration-300"
                    >
                      {<social.icon className='w-5 h-5' />}
                    </a>
                  );
                })}
            </motion.div>
          </div>

          {/* Right Column - Profile Image */}
          <motion.div 
            className='relative'
            initial="hidden"
            animate="visible"
            variants={{
              ...fadeInUp,
              visible: { ...fadeInUp.visible, transition: { ...fadeInUp.visible.transition, delay: 0.3 } }
            }}
          >
            <div className='relative max-w-md mx-auto'>
              <div className='absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/30 via-transparent to-primary blur-2xl animate-pulse'/>
              <div className='relative glass rounded-3xl p-2 glow-border'>
                <img 
                  src="/profile-photo.png" 
                  alt="Shashank Gowda G S" 
                  className='w-full aspect-[4/5] object-cover rounded-2xl'
                />

                {/* Floating Badge - Bottom Right */}
                <motion.div 
                  className='absolute -bottom-4 -right-4 glass rounded-xl px-4 py-3'
                  animate={{ y: [0, -10, 0] }}
                  transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                >
                  <div className='flex items-center gap-3'>
                    <div className='w-3 h-3 bg-green-500 rounded-full animate-pulse'/>
                    <span className='text-sm font-medium'>Available for work</span>
                  </div>
                </motion.div>

                {/* Stats Badge - Top Left */}
                <motion.div 
                  className='absolute -top-4 -left-4 glass rounded-xl px-4 py-3'
                  animate={{ y: [0, -10, 0] }}
                  transition={{ repeat: Infinity, duration: 4, ease: "easeInOut", delay: 0.5 }}
                >
                  <div className='text-2xl font-bold text-primary'>
                    Fresher
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Skills Section - Scroll triggered */}
        <motion.div 
          className='mt-20'
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "0px 0px -50px 0px" }}
          variants={fadeInUp}
        >
          <p className='text-sm text-muted-foreground mb-6 text-center'>Technologies I work with</p>
          <div className='relative overflow-hidden'>
            <div className='flex animate-marquee'>
              {[...skills,...skills].map((skill,idx) => (
                <div key={idx} className='flex-shrink-0 px-15 py-4'>
                  <span className='text-xl font-semibold text-muted-foreground/50 hover:text-muted-foreground transition-colors'>{skill}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          ...fadeInUp,
          visible: { ...fadeInUp.visible, transition: { ...fadeInUp.visible.transition, delay: 0.8 } }
        }}
      >
        <a
          href="#about"
          className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
        >
          <span className="text-xs uppercase tracking-wider">
            Scroll
          </span>
          <ChevronDown className="w-6 h-6 animate-bounce" />
        </a>
      </motion.div>
    </section>
  )
}

export default Hero
