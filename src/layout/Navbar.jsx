import Button from "@/components/Button"
import { Menu, X } from "lucide-react"     //npm i lucide-react
import { useEffect, useState } from "react"
const navLink = [
  {href: "#about", label: "About"},
  {href: "#project", label: "Project"},
  {href: "#experience", label: "Experience"},
  // {href: "#testimonials", label: "Testimonials"},
  // {href: "#contact", label: "Contact"},
]

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY>50);
    };
    window.addEventListener("scroll", handleScroll)

    return () => window.addEventListener("scroll", handleScroll)
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 transition-all duration-500 ${isScrolled ? "glass-strong py-1" : "bg-transparent py-5"} z-50`}>
        <nav className="container mx-auto px-6 flex items-center md:justify-around justify-between">
          <a href="" className="text-xl font-bold tracking-tight hover:text-primary">
            GS<span className="text-primary">.</span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            <div className="glass rounded-full px-2 py-1 flex items-center gap-1">
              {navLink.map((link, index) => (
                <a href={link.href} key={index} className="px-4 py-2 text-sm text-muted-foreground hover:text-foreground rounded-full hover:bg-surface hover:border-muted-foreground">
                  {link.label}
                </a>
              ))}
            </div>
          </div>
          {/* CTA Button */}
          <div className="hidden md:block">
            <Button size="sm">
                Contact Me
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2 text-foreground cursor-pointer" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X size={24}/> : <Menu size={24}/>}
          </button>
        </nav>

        {/* Mobile Menu */}
        {isMobileMenuOpen && ( 
          <div className="md:hidden glass-strong animate-fade-in">
            <div className="container mx-auto px-6 py-6 flex flex-col gap-4">
              {navLink.map((link, index) => (
                <a 
                href={link.href}
                key={index} 
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-lg text-muted-foreground hover:text-foreground py-2"
              >
                {link.label}
              </a>
              ))}
            <Button onClick={() => setIsMobileMenuOpen(false)}>
              Contact Me
            </Button>
            </div>
          </div>
        )}
    </header>
  )
}

export default Navbar
