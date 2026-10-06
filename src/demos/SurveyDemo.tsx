import { useState, type CSSProperties } from 'react'
import type { Lang } from '../content'

type Brand = { id: string; name: string; primary: string; onPrimary: string; radius: number; font: string; mark: string }

const BRANDS: Brand[] = [
  { id: 'veloz', name: 'Veloz Logística', primary: '#1456c8', onPrimary: '#ffffff', radius: 4, font: "'Geist', system-ui, sans-serif", mark: '▲' },
  { id: 'mirra', name: 'Mirra Cafés', primary: '#6b3420', onPrimary: '#fff6ea', radius: 20, font: "Georgia, 'Times New Roman', serif", mark: '●' },
  { id: 'aurora', name: 'Clínica Aurora', primary: '#13806d', onPrimary: '#ffffff', radius: 12, font: "'Bricolage Grotesque', system-ui, sans-serif", mark: '✳' },
]

const T = {
  en: { q: (b: string) => `How likely are you to recommend ${b} to a friend?`, lo: 'Not likely', hi: 'Very likely', why: 'What is the main reason for your score?', ph: 'Optional', next: 'Next', send: 'Send', thanks: 'Thank you!', thanksP: 'Your answer helps us improve.', again: 'Start over', step: 'Question' },
  pt: { q: (b: string) => `Qual a chance de você recomendar a ${b} para um amigo?`, lo: 'Nada provável', hi: 'Muito provável', why: 'Qual o principal motivo da sua nota?', ph: 'Opcional', next: 'Avançar', send: 'Enviar', thanks: 'Obrigado!', thanksP: 'Sua resposta nos ajuda a melhorar.', again: 'Recomeçar', step: 'Pergunta' },
}

export default function SurveyDemo({ lang }: { lang: Lang }) {
  const [brand, setBrand] = useState(BRANDS[0])
  const [step, setStep] = useState(0)
  const [score, setScore] = useState<number | null>(null)
  const t = T[lang]
  const vars = { '--b': brand.primary, '--bo': brand.onPrimary, '--r': `${brand.radius}px`, '--bf': brand.font } as CSSProperties

  return (
    <div className="demo survey">
      <div className="seg" role="radiogroup" aria-label="Brand">
        {BRANDS.map((b) => (
          <button key={b.id} role="radio" aria-checked={b.id === brand.id} onClick={() => setBrand(b)}>
            <i style={{ background: b.primary }} />{b.name}
          </button>
        ))}
      </div>
      <div className="phone" style={vars}>
        <header className="s-head"><span className="s-mark">{brand.mark}</span>{brand.name}</header>
        <div className="s-prog"><span style={{ width: `${step === 0 ? 33 : step === 1 ? 66 : 100}%` }} /></div>
        <div className="s-body">
          {step === 0 && (
            <>
              <p className="s-step">{t.step} 1/2</p>
              <h4>{t.q(brand.name)}</h4>
              <div className="s-scale">
                {Array.from({ length: 11 }, (_, i) => (
                  <button key={i} aria-pressed={score === i} onClick={() => setScore(i)}>{i}</button>
                ))}
              </div>
              <div className="s-ends"><span>{t.lo}</span><span>{t.hi}</span></div>
              <button className="s-cta" disabled={score === null} onClick={() => setStep(1)}>{t.next}</button>
            </>
          )}
          {step === 1 && (
            <>
              <p className="s-step">{t.step} 2/2</p>
              <h4>{t.why}</h4>
              <textarea placeholder={t.ph} rows={4} id="survey-why" />
              <button className="s-cta" onClick={() => setStep(2)}>{t.send}</button>
            </>
          )}
          {step === 2 && (
            <div className="s-done">
              <span className="s-check">✓</span>
              <h4>{t.thanks}</h4>
              <p>{t.thanksP}</p>
              <button className="s-link" onClick={() => { setStep(0); setScore(null) }}>{t.again}</button>
            </div>
          )}
        </div>
      </div>
      <pre className="tokens" aria-label="Brand tokens">{`--brand-primary: ${brand.primary};
--brand-on-primary: ${brand.onPrimary};
--brand-radius: ${brand.radius}px;
--brand-font: ${brand.font.split(',')[0]};`}</pre>
    </div>
  )
}
