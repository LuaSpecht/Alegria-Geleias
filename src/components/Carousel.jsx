import { useRef } from 'react'
import './Carousel.css'

function Carousel({ items, renderItem }) {
  const trackRef = useRef(null)

  function scroll(direction) {
    const track = trackRef.current
    if (!track) return
    const item = track.querySelector('.carousel__item')
    const gap = 24
    const amount = item ? item.offsetWidth + gap : 300
    track.scrollBy({ left: direction * amount, behavior: 'smooth' })
  }

  return (
    <div className="carousel">
      <button
        type="button"
        className="carousel__nav carousel__nav--prev"
        onClick={() => scroll(-1)}
        aria-label="Anterior"
      >
        ‹
      </button>

      <div className="carousel__track" ref={trackRef}>
        {items.map((item) => (
          <div className="carousel__item" key={item.id}>
            {renderItem(item)}
          </div>
        ))}
      </div>

      <button
        type="button"
        className="carousel__nav carousel__nav--next"
        onClick={() => scroll(1)}
        aria-label="Próximo"
      >
        ›
      </button>
    </div>
  )
}

export default Carousel
