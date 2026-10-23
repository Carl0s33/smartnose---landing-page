import { useState } from 'react'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import dashboard from '../img/dashboard.png'
import sensors from '../img/controle-sensores.png'
import experiments from '../img/lista-experimentos.png'
import hardware from '../img/controle-hardware.png'

const updates = [
  { title: 'Acompanhe os sensores em um só lugar', description: 'Consulte os sensores cadastrados, confira seu status de exibição e encontre rapidamente cada dispositivo.', image: dashboard, alt: 'Dashboard SmartNose com gráfico de variação dos sensores', action: 'Explorar dashboard' },
  { title: 'Controle sua lista de sensores', description: 'Pesquise os sensores cadastrados e visualize sua função, data de cadastro e disponibilidade.', image: sensors, alt: 'Tela da lista de sensores cadastrados', action: 'Ver sensores' },
  { title: 'Organize seus experimentos', description: 'Consulte os experimentos registrados, seus dispositivos e o acesso às informações de cada análise.', image: experiments, alt: 'Tela da lista de experimentos SmartNose', action: 'Ver experimentos' },
  { title: 'Gerencie os dispositivos conectados', description: 'Visualize os dispositivos de hardware disponíveis e acesse os controles correspondentes.', image: hardware, alt: 'Tela de seleção e controle de hardware', action: 'Ver hardware' },
]

export default function SoftwareDemoSection() {
  const [activeUpdate, setActiveUpdate] = useState(0)
  const update = updates[activeUpdate]
  const moveUpdate = (direction: number) => setActiveUpdate((index) => (index + direction + updates.length) % updates.length)
  return (
    <section className="software-updates" id="novidades" aria-labelledby="software-updates-title">
      <div className="software-updates__header"><div><h2 id="software-updates-title">O que está acontecendo</h2><p>Conheça as telas e recursos do sistema SmartNose.</p></div><div className="software-updates__controls" aria-label="Navegação das novidades"><button type="button" onClick={() => moveUpdate(-1)} aria-label="Novidade anterior"><ArrowLeft size={19} /></button><button type="button" onClick={() => moveUpdate(1)} aria-label="Próxima novidade"><ArrowRight size={19} /></button></div></div>
      <div className="software-updates__rail" aria-label="Capturas do sistema">{updates.map((item, index) => <button className={`software-update-card${index === activeUpdate ? ' is-active' : ''}`} key={item.title} type="button" onClick={() => setActiveUpdate(index)} aria-label={`Selecionar: ${item.title}`} aria-pressed={index === activeUpdate}><img src={item.image} alt={item.alt} loading="lazy" /></button>)}</div>
      <div className="software-updates__feature" aria-live="polite"><div><h3>{update.title}</h3><p>{update.description}</p></div><a href="#">{update.action}<ArrowRight size={16} aria-hidden="true" /></a></div>
    </section>
  )
}
