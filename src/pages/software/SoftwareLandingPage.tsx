import { useState } from 'react'
import { ArrowDownRight, ArrowUpRight, ArrowLeft, ArrowRight, Activity, Menu, House } from 'lucide-react'
import softwareHero from './img/hero-sofware.png'
import dashboard from './img/dashboard.png'
import sensors from './img/controle-sensores.png'
import experiments from './img/lista-experimentos.png'
import hardware from './img/controle-hardware.png'
import './styles/software.css'

const navigation = ['Início', 'O software', 'Recursos', 'Contato']
const updates = [
  { title: 'Acompanhe os sensores em um só lugar', description: 'Consulte os sensores cadastrados, confira seu status de exibição e encontre rapidamente cada dispositivo.', image: dashboard, alt: 'Dashboard SmartNose com gráfico de variação dos sensores', action: 'Explorar dashboard' },
  { title: 'Controle sua lista de sensores', description: 'Pesquise os sensores cadastrados e visualize sua função, data de cadastro e disponibilidade.', image: sensors, alt: 'Tela da lista de sensores cadastrados', action: 'Ver sensores' },
  { title: 'Organize seus experimentos', description: 'Consulte os experimentos registrados, seus dispositivos e o acesso às informações de cada análise.', image: experiments, alt: 'Tela da lista de experimentos SmartNose', action: 'Ver experimentos' },
  { title: 'Gerencie os dispositivos conectados', description: 'Visualize os dispositivos de hardware disponíveis e acesse os controles correspondentes.', image: hardware, alt: 'Tela de seleção e controle de hardware', action: 'Ver hardware' },
]

export default function SoftwareLandingPage() {
  const [activeUpdate, setActiveUpdate] = useState(0)
  const update = updates[activeUpdate]
  const moveUpdate = (direction: number) => setActiveUpdate((index) => (index + direction + updates.length) % updates.length)

  return (
    <main className="software-page">
      <div className="software-page__image" aria-hidden="true">
        <img src={softwareHero} alt="" />
      </div>
      <div className="software-page__image-glow" aria-hidden="true" />

      <header className="software-header">
        <a className="software-brand" href="#inicio" aria-label="SmartNose — início">
          <span className="software-brand__mark" aria-hidden="true"><Activity size={19} strokeWidth={2.4} /></span>
          <span>smart<span>nose</span></span>
        </a>

        <nav className="software-nav" aria-label="Navegação principal">
          {navigation.map((item, index) => (
            <a href="#" key={item} aria-current={index === 0 ? 'page' : undefined}>{item}</a>
          ))}
        </nav>

        <a className="software-header__cta" href="#">
          Acessar plataforma <ArrowUpRight size={15} aria-hidden="true" />
        </a>

        <button className="software-header__menu" type="button" aria-label="Abrir menu">
          <Menu size={22} aria-hidden="true" />
        </button>
      </header>

      <section className="software-hero" id="inicio" aria-labelledby="software-hero-title">
        <div className="software-hero__copy">
          <h1 id="software-hero-title">
            Acompanhamento em tempo real <span>e na palma da mão.</span>
          </h1>
          <p className="software-hero__description">
            Acompanhe cada variação dos sensores, entenda o processo e tome decisões com mais segurança — de onde estiver.
          </p>
          <div className="software-hero__actions">
            <a className="software-button software-button--primary" href="#">
              Ver o software <ArrowUpRight size={17} aria-hidden="true" />
            </a>
            <a className="software-button software-button--secondary" href="/smartnose---landing-page/">
              <House size={16} aria-hidden="true" /> Página principal
            </a>
          </div>
        </div>

        <a className="software-scroll-hint" href="#" aria-label="Mais sobre a plataforma">
          <span>MONITORE · ANALISE · DECIDA</span><ArrowDownRight size={15} aria-hidden="true" />
        </a>
      </section>

      <section className="software-updates" id="novidades" aria-labelledby="software-updates-title">
        <div className="software-updates__header">
          <div>
            <h2 id="software-updates-title">O que está acontecendo</h2>
            <p>Conheça as telas e recursos do sistema SmartNose.</p>
          </div>
          <div className="software-updates__controls" aria-label="Navegação das novidades">
            <button type="button" onClick={() => moveUpdate(-1)} aria-label="Novidade anterior"><ArrowLeft size={19} /></button>
            <button type="button" onClick={() => moveUpdate(1)} aria-label="Próxima novidade"><ArrowRight size={19} /></button>
          </div>
        </div>

        <div className="software-updates__rail" aria-label="Capturas do sistema">
          {updates.map((item, index) => (
            <button
              className={`software-update-card${index === activeUpdate ? ' is-active' : ''}`}
              key={item.title}
              type="button"
              onClick={() => setActiveUpdate(index)}
              aria-label={`Selecionar: ${item.title}`}
              aria-pressed={index === activeUpdate}
            >
              <img src={item.image} alt={item.alt} loading="lazy" />
            </button>
          ))}
        </div>

        <div className="software-updates__feature" aria-live="polite">
          <div><h3>{update.title}</h3><p>{update.description}</p></div>
          <a href="#">{update.action}<ArrowRight size={16} aria-hidden="true" /></a>
        </div>
      </section>
    </main>
  )
}



