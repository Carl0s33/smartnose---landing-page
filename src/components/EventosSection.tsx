import { useState } from 'react'
import { ArrowLeft, ArrowRight } from 'lucide-react'

import goRnPresentation from '../img/goRN_apresentação.jpg'
import goRnTeam from '../img/goRN_apresentação(1).jpg'
import goRnBooth from '../img/gorRN_apresentação.jpg'
import secitexPresentation from '../img/Apresentação_Secitex.jpg'
import secitexVisit from '../img/Apresentação_Secitex(1).jpg'
import secitexBooth from '../img/Apresentação_Secitex(2).jpg'
import secitexTeam from '../img/Apresentação_Secitex(3).jpg'
import secitexBanner from '../img/banner_secitex.jpg'
import secitexGroup from '../img/equipe_Secitex.jpg'
import proitecPresentation from '../img/apresentação_proitec.jpg'
import proitecDemo from '../img/Apresentação_proitec(1).jpg'

const EVENTS = [
  {
    name: 'goRN',
    description: 'Apresentação do SmartNose e troca de ideias com o público no goRN.',
    photos: [
      { src: goRnPresentation, alt: 'Demonstração do SmartNose durante o goRN' },
      { src: goRnTeam, alt: 'Equipe do SmartNose reunida no goRN' },
      { src: goRnBooth, alt: 'Apresentação do projeto ao público no goRN' },
    ],
  },
  {
    name: 'Secitex',
    description: 'Registros da participação do projeto na Secitex.',
    photos: [
      { src: secitexPresentation, alt: 'Equipe apresenta o SmartNose na Secitex' },
      { src: secitexGroup, alt: 'Integrantes da equipe no estande da Secitex' },
      { src: secitexBooth, alt: 'Apresentação do projeto no estande da Secitex' },
      { src: secitexTeam, alt: 'Equipe do SmartNose ao lado do estande na Secitex' },
      { src: secitexVisit, alt: 'Visitantes conhecem o projeto na Secitex' },
      { src: secitexBanner, alt: 'Protótipo SmartNose exposto na Secitex' },
    ],
  },
  {
    name: 'Proitec',
    description: 'Apresentação do projeto e demonstração do protótipo na Proitec.',
    photos: [
      { src: proitecPresentation, alt: 'Equipe apresenta o SmartNose na Proitec' },
      { src: proitecDemo, alt: 'Demonstração do SmartNose ao público na Proitec' },
    ],
  },
]

export default function EventosSection() {
  const [eventIndex, setEventIndex] = useState(0)
  const [photoIndex, setPhotoIndex] = useState(0)
  const event = EVENTS[eventIndex]
  const photo = event.photos[photoIndex]

  function selectEvent(index: number) {
    setEventIndex(index)
    setPhotoIndex(0)
  }

  function movePhoto(direction: number) {
    setPhotoIndex((current) => (current + direction + event.photos.length) % event.photos.length)
  }

  return (
    <section
      id="impacto"
      aria-labelledby="eventos-title"
      className="events-section border-b border-white/10 bg-[#070b14] px-6 py-20 sm:px-8 sm:py-24"
    >
      <div className="mx-auto w-full max-w-[1216px]">
        <header className="events-heading">
          <div>
            <p className="events-kicker"><span aria-hidden="true" /> PESQUISA EM MOVIMENTO</p>
            <h2 id="eventos-title" className="events-title">Ciência que sai do laboratório.</h2>
          </div>
          <p className="events-intro">
            Encontros, apresentações e experiências que aproximam o SmartNose de quem transforma conhecimento em novas possibilidades.
          </p>
        </header>

        <div className="events-rule" aria-hidden="true"><span>01 — 03</span></div>

        <div className="events-gallery">
          <div className="events-gallery__viewer" role="group" aria-label={`Fotos do evento ${event.name}`}>
            <div className="events-gallery__image-wrap" aria-live="polite" aria-atomic="true">
              <img className="events-gallery__image" src={photo.src} alt={photo.alt} />
              <span className="events-gallery__event-label">{event.name}</span>
              <span className="events-gallery__counter">{String(photoIndex + 1).padStart(2, '0')} / {String(event.photos.length).padStart(2, '0')}</span>
            </div>
            <div className="events-gallery__controls">
              <p>{event.description}</p>
              <div className="events-gallery__arrows" role="group" aria-label="Navegar pelas fotos">
                <button className="events-arrow" type="button" onClick={() => movePhoto(-1)} aria-label="Foto anterior">
                  <ArrowLeft size={19} aria-hidden="true" />
                </button>
                <button className="events-arrow" type="button" onClick={() => movePhoto(1)} aria-label="Próxima foto">
                  <ArrowRight size={19} aria-hidden="true" />
                </button>
              </div>
            </div>
            <div className="events-gallery__thumbnails" role="group" aria-label="Selecionar foto">
              {event.photos.map((item, index) => (
                <button
                  className={`events-thumbnail${index === photoIndex ? ' is-active' : ''}`}
                  type="button"
                  key={item.src}
                  onClick={() => setPhotoIndex(index)}
                  aria-label={`Mostrar foto ${index + 1} de ${event.photos.length}: ${item.alt}`}
                  aria-pressed={index === photoIndex}
                >
                  <img src={item.src} alt="" loading="eager" />
                </button>
              ))}
            </div>
          </div>

          <nav className="events-selector" aria-label="Selecionar evento">
            <p className="events-selector__eyebrow">EVENTOS</p>
            <div className="events-selector__options">
              {EVENTS.map((item, index) => (
                <button
                  className={`events-selector__button${index === eventIndex ? ' is-active' : ''}`}
                  type="button"
                  key={item.name}
                  onClick={() => selectEvent(index)}
                  aria-pressed={index === eventIndex}
                >
                  <span className="events-selector__number">0{index + 1}</span>
                  <span>{item.name}</span>
                  <ArrowRight className="events-selector__arrow" size={18} aria-hidden="true" />
                </button>
              ))}
            </div>
            <p className="events-selector__hint">Selecione um evento para ver os registros.</p>
          </nav>
        </div>
      </div>
    </section>
  )
}
