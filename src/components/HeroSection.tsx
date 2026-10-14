import { useEffect, useRef, useState } from 'react'
import { MessageSquare, ChevronDown, Pause, Play } from 'lucide-react'
import heroVideo from '../img/hero_video.mp4'
import heroPoster from '../img/img_prototipo.jpg'

export default function HeroSection() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isVideoPlaying, setIsVideoPlaying] = useState(false)

  useEffect(() => {
    const video = videoRef.current
    if (!video || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    void video.play().then(() => setIsVideoPlaying(true)).catch(() => setIsVideoPlaying(false))
  }, [])

  function toggleVideo() {
    const video = videoRef.current
    if (!video) return
    if (video.paused) {
      void video.play().then(() => setIsVideoPlaying(true)).catch(() => setIsVideoPlaying(false))
    } else {
      video.pause()
      setIsVideoPlaying(false)
    }
  }

  return (
    <section
      id="hero"
      className="relative w-full min-h-screen flex items-center bg-brand-dark overflow-hidden pt-16"
    >
      {/* ── Background Glow FX ───────────────────────────────────────── */}

      {/* Top-right spectral glow sphere */}
      <div
        className="pointer-events-none absolute top-[40px] right-[40px] w-[550px] h-[550px] rounded-full blur-[80px] animate-glow-pulse"
        style={{
          background:
            'radial-gradient(circle, rgba(0,207,170,0.22) 0%, rgba(0,153,204,0.14) 50%, transparent 100%)',
        }}
      />

      {/* Bottom-left glow sphere */}
      <div
        className="pointer-events-none absolute -bottom-20 -left-20 w-[450px] h-[450px] rounded-full blur-[80px] animate-glow-pulse"
        style={{
          background:
            'radial-gradient(circle, rgba(0,229,192,0.18) 0%, transparent 70%)',
          animationDelay: '2s',
        }}
      />

      {/* ── Content Grid ─────────────────────────────────────────────── */}
      <div className="relative z-10 w-full max-w-[1280px] mx-auto px-8 py-16">
        <div className="grid grid-cols-12 gap-12 items-center">

          {/* ── LEFT COLUMN — Copy ──────────────────────────────────── */}
          <div className="col-span-12 lg:col-span-6 flex flex-col items-start gap-0">

            {/* H1 — Headline */}
            <div className="opacity-initial animate-fade-up">
              <h1 className="font-jakarta font-extrabold text-[52px] xl:text-[60px] tracking-[-1.5px] text-white">
                {/* Line 1 */}
                <span className="block" style={{ lineHeight: '1.1' }}>Monitore a</span>

                {/* Line 2 */}
                <span className="block" style={{ lineHeight: '1.1' }}>fermentação pelo</span>

                {/* Line 3 — "cheiro" badge + continuation inline */}
                <span className="inline-flex items-center gap-2 flex-wrap" style={{ lineHeight: '1.3' }}>
                  {/* "cheiro" gradient badge */}
                  <span className="relative inline-flex items-center">
                    {/* Glow shadow behind badge */}
                    <span
                      className="absolute inset-0 rounded-[4px]"
                      style={{
                        boxShadow:
                          '0 0 25px -3px rgba(0,207,170,0.45), 0 0 10px -2px rgba(0,229,192,0.35)',
                      }}
                    />
                    <span
                      className="relative px-2 rounded-[4px] text-[#020617]"
                      style={{
                        background: 'linear-gradient(90deg, #00CFAA 0%, #0099CC 100%)',
                      }}
                    >
                      cheiro
                    </span>
                  </span>
                  <span>, não pela</span>
                </span>

                {/* Line 4 */}
                <span className="block" style={{ lineHeight: '1.1' }}>amostra</span>
              </h1>
            </div>

            {/* Subtitle paragraph */}
            <p
              className="font-inter font-normal text-[18px] leading-[1.625] text-brand-muted mt-6 max-w-[540px] opacity-initial animate-fade-up-delay-1"
            >
              O SmartNose acompanha sua fermentação alcoólica em tempo
              real, identificando os gases liberados sem abrir o fermentador —
              sem reagentes, sem laboratório.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 mt-8 opacity-initial animate-fade-up-delay-2">

              {/* Primary CTA — gradient pill */}
              <a
                href="#equipe"
                id="cta-conhecer-equipe"
                className="relative flex items-center gap-2 px-7 py-3.5 rounded-full font-jakarta font-bold text-[14px] uppercase tracking-[0.35px] text-[#020617] transition-all duration-300 hover:scale-[1.03] hover:brightness-110 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                style={{
                  background: 'linear-gradient(90deg, #00CFAA 0%, #0099CC 100%)',
                  boxShadow:
                    '0 0 25px -3px rgba(0,207,170,0.4), 0 0 10px -2px rgba(0,229,192,0.3)',
                }}
              >
                <MessageSquare size={18} strokeWidth={2.2} />
                Conhecer a Equipe
              </a>

              {/* Secondary CTA — ghost pill */}
              <a
                href="#como-funciona"
                id="cta-como-funciona"
                className="flex items-center gap-2 px-7 py-3.5 rounded-full font-jakarta font-bold text-[14px] uppercase tracking-[0.35px] text-white border border-white/20 bg-white/[0.04] transition-all duration-300 hover:bg-white/10 hover:border-white/40 hover:scale-[1.03] focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
              >
                Como Funciona
                <ChevronDown size={16} strokeWidth={2.2} />
              </a>
            </div>

            {/* Divider line (Quick Tech Telemetry Badges placeholder) */}
            <div className="w-full mt-8 border-t border-white/10 opacity-initial animate-fade-up-delay-3" />
          </div>

          {/* ── RIGHT COLUMN — Hero Image ────────────────────────────── */}
          <div className="col-span-12 lg:col-span-6 opacity-initial animate-scale-in">
            {/* Electric frame wrapper */}
            <div
              className="relative rounded-xl p-[6px]"
              style={{
                background:
                  'linear-gradient(29.58deg, rgba(0,207,170,0.6) 0%, rgba(0,207,170,0) 50%, rgba(0,153,204,0.6) 100%)',
                boxShadow:
                  '0 0 40px -4px rgba(0,207,170,0.35), 0 0 15px -2px rgba(0,229,192,0.25)',
              }}
            >
              {/* Inner card */}
              <div className="relative rounded-[8px] overflow-hidden bg-black border border-white/10">
                <div className="hero-video-frame">
                  <video
                    ref={videoRef}
                    className="hero-video"
                    src={heroVideo}
                    loop
                    muted
                    playsInline
                    preload="metadata"
                    poster={heroPoster}
                    aria-label="Demonstração em vídeo do SmartNose"
                    onPlay={() => setIsVideoPlaying(true)}
                    onPause={() => setIsVideoPlaying(false)}
                  />
                  <button
                    className="hero-video-toggle"
                    type="button"
                    onClick={toggleVideo}
                    aria-label={isVideoPlaying ? 'Pausar vídeo do SmartNose' : 'Reproduzir vídeo do SmartNose'}
                  >
                    {isVideoPlaying ? <Pause size={16} aria-hidden="true" /> : <Play size={16} aria-hidden="true" />}
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* ── End Right Column ─────────────────────────────────────── */}

        </div>
      </div>
    </section>
  )
}
