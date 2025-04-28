import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("inicio")
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Compruebo si la página se desplaza
      setIsScrolled(window.scrollY > 10)

      // Determinar la sección activa
      const sections = ["inicio", "series", "comidas", "amigurumis"]

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId) => {
    setIsMenuOpen(false)
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const navItems = [
    { id: "inicio", label: "Inicio" },
    { id: "series", label: "Series" },
    { id: "comidas", label: "Comidas" },
    { id: "amigurumis", label: "Amigurumis" },
  ]

  return (
    <header className={`header ${isScrolled ? "scrolled" : "default"}`}>
      <div className="container">
        {/* Logo */}
        <div className="logo-container">
          <img src="/cualquiera.png" alt="Logo" className="logo-img" />
        </div>

        {/* Navegación desktop */}
        <nav className="nav-desktop">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`nav-btn ${activeSection === item.id ? "active" : ""}`}
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Menú para móviles */}
        <button
          className="menu-btn"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
        >
          {isMenuOpen ? <X className="menu-icon" /> : <Menu className="menu-icon" />}
        </button>
      </div>

      {/* Navegación móvil */}
      {isMenuOpen && (
        <div className="menu-mobile">
          <nav className="mobile-nav">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`menu-item ${activeSection === item.id ? "active" : ""}`}
              >
                {item.label}
              </button>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}

export default Header
