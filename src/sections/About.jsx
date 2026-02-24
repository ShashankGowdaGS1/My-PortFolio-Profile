import { Code2, Rocket, Users, Lightbulb } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Clean Code",
    description:
      "Writing maintainable, scalable code that stands the test of time.",
  },
  {
    icon: Rocket,
    title: "Performance",
    description:
      "Optimizing for speed and delivering lightning-fast user experiences.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description:
      "Working closely with teams to bring ideas to life.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description:
      "Staying ahead with the latest technologies and best practices.",
  },
];

const About = () => {
  return (
    <section id="about" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column */}
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="text-secondary-foreground text-sm font-mediumn tracking-wider uppercase">
                About
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-secondary-foreground
            ">
              Building the future,
              <span className="font-serif italic font-normal text-white">{" "}one component at a time.</span>
            </h2>
            
            <div className="space-y-4 text-muted-foreground animate-fade-in animation-delay-200">
              <p>
                I’m a motivated software engineer and a 2025 Information Science Engineering graduate
                with a strong passion for building modern, user-focused web applications. My journey
                into software development started with curiosity about how the web works and has grown
                into a solid foundation in frontend and full-stack technologies.
              </p>

              <p>
                I specialize in React, Next.js, and JavaScript, and enjoy building everything from clean,
                responsive landing pages to scalable web applications. I focus on writing readable,
                maintainable code while paying close attention to performance and user experience.
              </p>

              <p>
                When I’m not coding, I spend my time learning new technologies, working on personal and
                academic projects, and exploring real-world problem solving through software. I’m eager
                to grow as a developer and contribute to meaningful, impactful products.
              </p>
            </div>

            <div className="glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-300">
              <p className="text-lg font-medium italic text-foreground">
                My mission is to build clean, responsive, and user-friendly digital experiences
                that solve real-world problems. I aim to create applications that are not only
                functional, but also intuitive and enjoyable to use, while keeping the codebase
                simple and maintainable.
              </p>
            </div>
          </div>
          {/* Right Column */}
          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((item,idx) => (
              <div 
              key={idx} 
              className="glass p-6 rounded-2xl animate-fade-in"
              style={{animationDelay:`${(idx+1)*100}ms`}}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/20">
                  <item.icon className="w-6 h-6 text-primary"/>
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div> 
    </section>
  )
}

export default About
