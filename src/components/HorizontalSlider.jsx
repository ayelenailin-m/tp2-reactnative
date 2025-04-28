import { useState, useRef, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

function HorizontalSlider({ title, items }) {
  const sliderRef = useRef(null)
  const [showLeftArrow, setShowLeftArrow] = useState(false)
  const [showRightArrow, setShowRightArrow] = useState(true)

  const scrollLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: -300, behavior: "smooth" })
    }
  }

  const scrollRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: 300, behavior: "smooth" })
    }
  }

  const checkScrollButtons = () => {
    if (sliderRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = sliderRef.current
      setShowLeftArrow(scrollLeft > 0)
      setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 10)
    }
  }

  useEffect(() => {
    const slider = sliderRef.current
    if (slider) {
      slider.addEventListener("scroll", checkScrollButtons)
      // Check on mount and on window resize
      checkScrollButtons()
      window.addEventListener("resize", checkScrollButtons)

      return () => {
        slider.removeEventListener("scroll", checkScrollButtons)
        window.removeEventListener("resize", checkScrollButtons)
      }
    }
  }, [])

  return (
    <div className="slider-container">
      <h2 className="slider-title">{title}</h2>

      <div className="slider-controls">
        {showLeftArrow && (
          <button className="slider-arrow slider-arrow-left" onClick={scrollLeft} aria-label="Desplazar a la izquierda">
            <ChevronLeft />
          </button>
        )}

        {showRightArrow && (
          <button className="slider-arrow slider-arrow-right" onClick={scrollRight} aria-label="Desplazar a la derecha">
            <ChevronRight />
          </button>
        )}
      </div>

      <div className="slider-wrapper">
        <div className="slider" ref={sliderRef}>
          {items.map((item, index) => (
            <div className="slider-item" key={index}>
              <div className="slider-card">
                {item.image && <img src={item.image || "/placeholder.svg"} alt={item.title} className="slider-image" />}
                <div className="slider-content">
                  <h3 className="slider-item-title">{item.title}</h3>
                  {item.description && <p className="slider-description">{item.description}</p>}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default HorizontalSlider
