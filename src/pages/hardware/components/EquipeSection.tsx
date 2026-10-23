
interface TeamMember {
  name: string
  initials: string
  position: string
  area: string
  responsibilities: string
  demoContacts?: boolean
}

const TEAM: TeamMember[] = [
  {
    name: 'João Pedro da Silva Neto',
    initials: 'JP',
    position: 'Estudante',
    area: 'Hardware',
    responsibilities: 'Responsável pela montagem do protótipo e pela programação das placas Arduino e ESP32.',
    demoContacts: true,
  },
  {
    name: 'Luana Gomes',
    initials: 'LG',
    position: 'Estudante',
    area: 'Hardware',
    responsibilities: 'Responsável pela montagem do protótipo e pela programação das placas Arduino e ESP32.',
    demoContacts: true,
  },
  {
    name: 'João Vitor',
    initials: 'JV',
    position: 'Estudante',
    area: 'Software',
    responsibilities: 'Responsável pelo desenvolvimento da camada de backend e por DevOps.',
    demoContacts: true,
  },
  {
    name: 'Bruno',
    initials: 'B',
    position: 'Estudante',
    area: 'Software',
    responsibilities: 'Responsável pelo desenvolvimento do sistema que recebe os dados do SmartNose.',
  },
  {
    name: 'Ary Souza',
    initials: 'AS',
    position: 'Orientador',
    area: 'Engenharia elétrica',
    responsibilities: 'Responsável por orientar a montagem física do protótipo e a parte elétrica.',
    demoContacts: true,
  },
  {
    name: 'Leandro',
    initials: 'L',
    position: 'Orientador',
    area: 'Engenharia de software',
    responsibilities: 'Responsável pela arquitetura do software e pela montagem de modelos de análise.',
  },
  {
    name: 'Hanniel Freitas',
    initials: 'HF',
    position: 'Orientador',
    area: 'Química',
    responsibilities: 'Responsável por preparar as amostras que serão analisadas.',
  },
]

function DemonstrationContacts() {
  return (
    <ul className="team-contacts" aria-label="Canais de contato demonstrativos, sem links funcionais">
      <li><span>LinkedIn <small>demo</small></span></li>
      <li><span>Instagram <small>demo</small></span></li>
      <li><span>E-mail <small>demo</small></span></li>
    </ul>
  )
}

export default function EquipeSection() {
  return (
    <section
      id="equipe"
      aria-labelledby="equipe-title"
      className="team-section border-b border-white/10 bg-[#05080e] px-6 py-16 sm:px-8 sm:py-20"
    >
      <div className="mx-auto w-full max-w-[1216px]">
        <header className="team-heading">
          <h2 id="equipe-title">A equipe do SmartNose</h2>
          <p>Conheça quem trabalha no desenvolvimento do protótipo, do software e da pesquisa.</p>
        </header>

        <p className="team-note" role="note">
          Avatares e canais identificados como demonstração são temporários e não levam a perfis reais.
        </p>

        <div className="team-grid">
          {TEAM.map((member) => (
            <article className="team-member" key={member.name}>
              <div className="team-member__identity">
                <div className="team-member__avatar" role="img" aria-label={`Placeholder de foto de ${member.name}`}>
                  <span aria-hidden="true">{member.initials}</span>
                  <small>Foto pendente</small>
                </div>
                <div className="team-member__details">
                  <h3>{member.name}</h3>
                  <p className="team-member__position">{member.position}</p>
                  <p className="team-member__area">{member.area}</p>
                </div>
              </div>

              <div className="team-member__responsibilities">
                <h4>Responsabilidades</h4>
                <p>{member.responsibilities}</p>
              </div>

              <div className="team-member__contact">
                <h4>Contato</h4>
                {member.demoContacts
                  ? <DemonstrationContacts />
                  : <p className="team-member__contact-pending">Canais ainda não informados</p>}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}




