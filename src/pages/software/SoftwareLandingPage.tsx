import { ArrowDownRight, ArrowUpRight, Activity, Menu } from 'lucide-react'
import softwareHero from './hero-sofware.png'
import './software.css'

const navigation = ['Início', 'O software', 'Recursos', 'Contato']

export default function SoftwareLandingPage() {
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
          </div>
        </div>

        <a className="software-scroll-hint" href="#" aria-label="Mais sobre a plataforma">
          <span>MONITORE · ANALISE · DECIDA</span><ArrowDownRight size={15} aria-hidden="true" />
        </a>
      </section>
    </main>
  )
}

