interface EventRecord {
  visual: string
  title: string
  category: string
  description: string
  featured?: boolean
}

// Generic previews only; replace their visuals and example copy with verified project material.
const EVENT_RECORDS: EventRecord[] = [
  { visual: 'events-record__visual--lab', title: 'Apresentação científica', category: 'Pesquisa em movimento', description: 'Exemplo de legenda para uma participação acadêmica do projeto.', featured: true },
  { visual: 'events-record__visual--prototype', title: 'Demonstração do protótipo', category: 'Desenvolvimento', description: 'Exemplo de registro do desenvolvimento do SmartNose.' },
  { visual: 'events-record__visual--exchange', title: 'Compartilhamento de conhecimento', category: 'Divulgação científica', description: 'Exemplo de atividade de troca com a comunidade.' },
  { visual: 'events-record__visual--team', title: 'Pesquisa em equipe', category: 'Comunidade acadêmica', description: 'Exemplo de legenda para um registro da equipe.' },
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
            O SmartNose em eventos, apresentações científicas e iniciativas de divulgação do conhecimento.
          </p>
        </header>

        <p className="events-demo-note" role="note">
          Prévia de layout: imagens e legendas demonstrativas, a substituir por registros reais do projeto.
        </p>
        <div className="events-grid">
          {EVENT_RECORDS.map((record) => (
            <article
              className={`events-record${record.featured ? ' events-record--featured' : ''}`}
              key={record.title}
            >
              <div className={`events-record__visual ${record.visual}`} aria-hidden="true">
                <span className="events-record__mock-label">Imagem demonstrativa</span>
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
