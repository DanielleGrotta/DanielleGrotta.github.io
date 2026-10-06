import { useMemo, useState } from 'react'
import type { Lang } from '../content'

type Fmt = 'flyer' | 'email' | 'tv' | 'totem'
const FORMATS: { id: Fmt; en: string; pt: string; ratio: string }[] = [
  { id: 'flyer', en: 'Flyer A5', pt: 'Panfleto A5', ratio: '148 / 210' },
  { id: 'email', en: 'Email', pt: 'E-mail', ratio: '600 / 820' },
  { id: 'tv', en: 'TV 16:9', pt: 'TV 16:9', ratio: '16 / 9' },
  { id: 'totem', en: 'Kiosk 9:16', pt: 'Totem 9:16', ratio: '9 / 16' },
]

const COPY = {
  en: { h: 'How was your ride?', p: 'Tell us in one minute.', scan: 'Point your camera and answer', mail: 'Hi! Your opinion shapes the next trip.', btn: 'Answer the survey', note: 'Illustrative QR code' },
  pt: { h: 'Como foi sua viagem?', p: 'Conte para a gente em 1 minuto.', scan: 'Aponte a câmera e responda', mail: 'Oi! Sua opinião define a próxima viagem.', btn: 'Responder pesquisa', note: 'QR code ilustrativo' },
}

function FakeQR() {
  const cells = useMemo(() => {
    let s = 7
    const rnd = () => ((s = (s * 9301 + 49297) % 233280) / 233280)
    const out: [number, number][] = []
    for (let y = 0; y < 21; y++) for (let x = 0; x < 21; x++) {
      const finder = (x < 7 && y < 7) || (x > 13 && y < 7) || (x < 7 && y > 13)
      if (!finder && rnd() > 0.52) out.push([x, y])
    }
    return out
  }, [])
  const finder = (x: number, y: number) => (
    <g key={`${x}${y}`}><rect x={x} y={y} width={7} height={7} fill="#111" /><rect x={x + 1} y={y + 1} width={5} height={5} fill="#fff" /><rect x={x + 2} y={y + 2} width={3} height={3} fill="#111" /></g>
  )
  return (
    <svg viewBox="-2 -2 25 25" className="qr" role="img" aria-label="QR">
      <rect x={-2} y={-2} width={25} height={25} fill="#fff" />
      {cells.map(([x, y]) => <rect key={`${x}-${y}`} x={x} y={y} width={1} height={1} fill="#111" />)}
      {finder(0, 0)}{finder(14, 0)}{finder(0, 14)}
    </svg>
  )
}

export default function CampaignDemo({ lang }: { lang: Lang }) {
  const [fmt, setFmt] = useState<Fmt>('flyer')
  const c = COPY[lang]
  const f = FORMATS.find((x) => x.id === fmt)!
  return (
    <div className="demo campaign">
      <div className="seg" role="radiogroup" aria-label="Format">
        {FORMATS.map((x) => (
          <button key={x.id} role="radio" aria-checked={x.id === fmt} onClick={() => setFmt(x.id)}>{x[lang]}</button>
        ))}
      </div>
      <div className="stage">
        <div className={`kv kv-${fmt}`} style={{ aspectRatio: f.ratio }}>
          <span className="blob b1" /><span className="blob b2" />
          <div className="kv-logo"><b>trilha</b><small>mobilidade</small></div>
          {fmt === 'email' && <p className="kv-mail">{c.mail}</p>}
          <h5>{c.h}</h5>
          <p className="kv-p">{c.p}</p>
          {fmt === 'email'
            ? <span className="kv-btn">{c.btn}</span>
            : <div className="kv-qr"><FakeQR /><span>{c.scan}</span></div>}
        </div>
      </div>
      <p className="demo-note">{c.note}</p>
    </div>
  )
}
