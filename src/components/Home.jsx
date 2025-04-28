import Footer from "./Footer"
import Header from "./Header"
import HorizontalSlider from "./HorizontalSlider"

function Home() {
  const seriesData = [
    { title: "Invincible", description: "Drama", image: "/invincible.jpg?height=200&width=300" },
    { title: "Mindhunter", description: "Psicología criminal", image: "/mindhunter.webp?height=200&width=300" },
    { title: "One punch man", description: "Acción", image: "/onepunchman.avif?height=200&width=300" },
    { title: "Common Side Effects", description: "Comedia dramática", image: "/common-side-effects.jpg?height=200&width=300" },
    { title: "Vinland Saga", description: "Aventura", image: "/vinlandsaga.webp?height=200&width=300" },
    { title: "The Punisher (favorita)", description: "Drama", image: "/the-punisher.avif?height=200&width=300" },
    { title: "The Office", description: "Comedia", image: "/theoffice.jpg?height=200&width=300" },
    { title: "Daredevil", description: "Acción", image: "/daredevil.webp?height=200&width=300" },
    { title: "Ozark", description: "Drama", image: "/ozark.jpg?height=200&width=300" },
    { title: "Breaking Bad", description: "Drama", image: "/breaking.webp?height=200&width=300" },
  ]

  const comidasData = [
    { title: "Bollos", description: "Horneados, rellenos de dulce de leche y espolvoreados con azúcar impalpable", image: "/bollos.avif?height=200&width=300" },
    { title: "Tallarín", description: "Con estofado de carne", image: "/tallarin.webp?height=200&width=300" },
    { title: "Pollo al horno", description: "Pollo al horno con papas y arroz", image: "/pollo-horno.jpg?height=200&width=300" },
    { title: "Pizza", description: "Pizza normal", image: "/pizza.jpg?height=200&width=300" },
    { title: "Albondigas", description: "Con salsa y tallarines", image: "/albondigas.jpg?height=200&width=300" },
    { title: "Ñoquis (favorito)", description: "Con estofado de pulpa", image: "/ñoquis.webp?height=200&width=300" },
    { title: "Marineras", description: "Con puré de papas", image: "/marinera.jpg?height=200&width=300" },
    { title: "Asado", description: "Con ensalada rusa", image: "/asado.jpeg?height=200&width=300" },
    { title: "Guiso", description: "Guiso de arroz con pollo", image: "/guiso.avif?height=200&width=300" },
    { title: "Pastafrola", description: "Pastafrola con dulce de membrillo", image: "/pastafrola.webp?height=200&width=300" },
  ]

  const amigurumisData = [
    { title: "Repo", description: "Semibot del juego R.E.P.O", image: "/repo.jpeg?height=200&width=300" },
    { title: "Kenny", description: "Personaje de South Park", image: "/kenny.jpeg?height=200&width=300" },
    { title: "BTS", description: "Personajes de BTS", image: "/bts.jpeg?height=200&width=300" },
    { title: "Dogpool", description: "El perrito de Deadpool & Wolverine", image: "/dogpool.jpeg?height=200&width=300" },
    { title: "Gatito", description: "Gatito con corazón", image: "/gatito-corazon.jpeg?height=200&width=300" },
    { title: "Escandalosos", description: "Osos escandalosos: Panda, Polar y Pardo", image: "/escandalosos.jpeg?height=200&width=300" },
    { title: "Gatitos", description: "Laveros de Gatitos", image: "/gatos.jpeg?height=200&width=300" },
    { title: "Pochita", description: "Llaveros de pochita", image: "/pochita.jpeg?height=200&width=300" },
    { title: "Ovejas", description: "Ovejitas - Negra y blanca", image: "/ovejas.jpeg?height=200&width=300" },
    { title: "Mao Mao", description: "Personaje del anime 'Los Diarios del Boticario", image: "/mao.jpeg?height=200&width=300" },
    { title: "Intensamente", description: "Personajes de Intensamente II", image: "/intensamente.jpeg?height=200&width=300" },
  ]

  return (
    <div className="app-container">
      <Header />

      <main className="main-content">
        <section id="inicio" className="section hero-section">
          <div className="hero-content">
            <h1 className="hero-title">Bienvenido a mi página</h1>
            <p className="hero-subtitle">Cosas random sobre mí</p>
            <div className="hero-image-container">
              <img src="/cualquiera.png" alt="Cualquiera" className="hero-image" />
              <p className="hero-caption">El gatito del logo de mi emprendimiento <a href="https://ayegurumi.com" target="_blank" rel="noreferrer">Ayegurumi</a> que girando</p>
            </div>
          </div>
        </section>

        <section id="series" className="section">
          <div className="section-content">
            <HorizontalSlider title="Últimas series que vi" items={seriesData} />
          </div>
        </section>

        <section id="comidas" className="section">
          <div className="section-content">
            <HorizontalSlider title="Últimas comidas que comí" items={comidasData} />
          </div>
        </section>

        <section id="amigurumis" className="section">
          <div className="section-content">
            <HorizontalSlider title="Últimos amigurumis que tejí" items={amigurumisData} />
            <p className="slider-description">Si querés ver mis amigurumis disponibles, podés visitar mi <a href="https://ayegurumi.com" target="_blank" rel="noreferrer">Catálogo.</a></p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

export default Home
