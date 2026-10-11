interface EventRecord {
  visual: string
  title: string
  category: string
  description: string
  layout?: 'wide' | 'compact'
}

// Conteúdo demonstrativo até que fotos e registros reais sejam definidos.
const EVENT_RECORDS: EventRecord[] = [
  {
    visual: 'events-record__visual--lab',
    title: 'Ciência em exposição',
    category: 'Mostra científica',
    description: 'O SmartNose apresentado a novas ideias, pessoas e possibilidades para a pesquisa.',
    layout: 'wide',
  },
  {
    visual: 'events-record__visual--prototype',
    title: 'Tecnologia em demonstração',
    category: 'Demonstração',
    description: 'Uma visão de perto do protótipo e de como os sensores acompanham o processo.',
    layout: 'wide',
  },
  {
    visual: 'events-record__visual--exchange',
    title: 'Ideias que circulam',
    category: 'Divulgação científica',
    description: 'Conversas e descobertas que aproximam a pesquisa da comunidade.',
    layout: 'wide',
  },
  {
    visual: 'events-record__visual--team',
    title: 'Pesquisa em equipe',
    category: 'Comunidade acadêmica',
    description: 'Pessoas e conhecimentos diferentes trabalhando na mesma direção.',
    layout: 'compact',
  },
  {
    visual: 'events-record__visual--workshop',
    title: 'Aprender fazendo',
    category: 'Atividade prática',
    description: 'Experimentos e trocas que transformam curiosidade em conhecimento.',
    layout: 'compact',
  },
]

export default function EventosSection() {
  return (
    <section
      id="impacto"
      aria-labelledby="eventos-title"
      className="events-section border-b border-white/10 bg-[#070b14] px-6 py-16 sm:px-8 sm:py-20"
    >
      <div className="mx-auto w-full max-w-[1216px]">
        <header className="events-heading">
          <div>
            <p className="events-kicker">PESQUISA EM MOVIMENTO</p>
            <h2 id="eventos-title" className="events-title">Da pesquisa à comunidade</h2>
          </div>
          <p className="events-intro">
            Um olhar sobre encontros, apresentações e experiências que levam o SmartNose além do laboratório.
          </p>
        </header>

        <p className="events-demo-note" role="note">
          Conteúdo demonstrativo: títulos, descrições e imagens serão substituídos por registros reais do projeto.
        </p>
        <div className="events-grid">
          {EVENT_RECORDS.map((record) => (
            <article
              className={`events-record events-record--${record.layout}`}
              key={record.title}
            >
              <div className={`events-record__visual ${record.visual}`} aria-hidden="true">
                <span className="events-record__mock-label">Registro demonstrativo</span>
              </div>
              <div className="events-record__caption">
                <p className="events-record__category">{record.category}</p>
                <h3>{record.title}</h3>
                <p className="events-record__description">{record.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
