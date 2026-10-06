import { useMemo, useState } from 'react'
import type { Lang } from '../content'

type Period = '30d' | '90d' | '12m'
type Channel = 'all' | 'app' | 'store' | 'phone'

const L = {
  en: { periods: { '30d': '30 days', '90d': '90 days', '12m': '12 months' }, channels: { all: 'All channels', app: 'App', store: 'Stores', phone: 'Call center' }, vs: 'vs previous period', prom: 'Promoters', pass: 'Passives', det: 'Detractors', resp: 'responses', ces: 'Ease score, 1–7', csat: 'Satisfied (4–5)', nps: 'Net Promoter Score' },
  pt: { periods: { '30d': '30 dias', '90d': '90 dias', '12m': '12 meses' }, channels: { all: 'Todos os canais', app: 'App', store: 'Lojas', phone: 'Central' }, vs: 'vs período anterior', prom: 'Promotores', pass: 'Neutros', det: 'Detratores', resp: 'respostas', ces: 'Facilidade, 1–7', csat: 'Satisfeitos (4–5)', nps: 'Net Promoter Score' },
}

function seeded(seed: number) {
  let s = seed
  return () => ((s = (s * 16807) % 2147483647) - 1) / 2147483646
}

function build(period: Period, channel: Channel) {
  const base = { all: [52, 84, 5.6], app: [61, 88, 6.0], store: [47, 82, 5.4], phone: [31, 74, 4.7] }[channel]
  const n = period === '30d' ? 30 : period === '90d' ? 13 : 12
  const r = seeded(period.length * 97 + channel.length * 31 + n)
  const series = (b: number, amp: number, drift: number) => Array.from({ length: n }, (_, i) => +(b - drift + (drift * 2 * i) / (n - 1) + (r() - 0.5) * amp).toFixed(1))
  const nps = series(base[0], 10, 3), csat = series(base[1], 4, 1.5), ces = series(base[2], 0.4, 0.15)
  const prev = (a: number[]) => a[0]
  const last = (a: number[]) => a[a.length - 1]
  const det = Math.max(3, Math.round(20 - (last(nps) - 30) / 3)), prom = Math.round(last(nps)) + det
  return {
    responses: Math.round((period === '30d' ? 1840 : period === '90d' ? 5320 : 21400) * (channel === 'all' ? 1 : 0.33 + r() * 0.1)),
    kpis: [
      { key: 'nps', val: Math.round(last(nps)), delta: Math.round(last(nps) - prev(nps)), data: nps, fmt: (v: number) => `${v}` },
      { key: 'csat', val: last(csat), delta: +(last(csat) - prev(csat)).toFixed(1), data: csat, fmt: (v: number) => `${v}%` },
      { key: 'ces', val: last(ces), delta: +(last(ces) - prev(ces)).toFixed(1), data: ces, fmt: (v: number) => `${v}` },
    ],
    split: [prom, 100 - prom - det, det],
  }
}

function Spark({ data }: { data: number[] }) {
  const w = 120, h = 36, min = Math.min(...data), max = Math.max(...data), sp = max - min || 1
  const pts = data.map((v, i) => [(i / (data.length - 1)) * w, h - 3 - ((v - min) / sp) * (h - 6)])
  const d = pts.map((p, i) => `${i ? 'L' : 'M'}${p[0].toFixed(1)},${p[1].toFixed(1)}`).join('')
  const end = pts[pts.length - 1]
  return (
    <svg viewBox={`0 0 ${w} ${h}`} className="spark" aria-hidden="true">
      <path d={`${d}L${w},${h}L0,${h}Z`} fill="var(--accent)" opacity="0.12" />
      <path d={d} fill="none" stroke="var(--accent)" strokeWidth="1.6" />
      <circle cx={end[0]} cy={end[1]} r="2.6" fill="var(--accent)" />
    </svg>
  )
}

export default function DashboardDemo({ lang }: { lang: Lang }) {
  const [period, setPeriod] = useState<Period>('90d')
  const [channel, setChannel] = useState<Channel>('all')
  const t = L[lang]
  const d = useMemo(() => build(period, channel), [period, channel])
  const sub = { nps: t.nps, csat: t.csat, ces: t.ces } as Record<string, string>
  return (
    <div className="demo dash">
      <div className="dash-filters">
        <label>
          <span className="sr">Period</span>
          <select id="dash-period" value={period} onChange={(e) => setPeriod(e.target.value as Period)}>
            {Object.entries(t.periods).map(([k, v]) => <option key={k} value={k}>{v}</option>)}
          </select>
        </label>
        <label>
          <span className="sr">Channel</span>
          <select id="dash-channel" value={channel} onChange={(e) => setChannel(e.target.value as Channel)}>
            {Object.entries(t.channels).map(([k, v]) => <option key={k} value={k}>{v}</option>)}
          </select>
        </label>
        <span className="dash-n">{d.responses.toLocaleString(lang === 'pt' ? 'pt-BR' : 'en-US')} {t.resp}</span>
      </div>
      <div className="kpis">
        {d.kpis.map((k) => (
          <div className="kpi" key={k.key}>
            <span className="kpi-l">{k.key.toUpperCase()}</span>
            <strong>{k.fmt(k.val)}</strong>
            <span className={`delta ${k.delta >= 0 ? 'up' : 'down'}`}>{k.delta >= 0 ? '▲ +' : '▼ '}{k.delta} <em>{t.vs}</em></span>
            <Spark data={k.data} />
            <span className="kpi-s">{sub[k.key]}</span>
          </div>
        ))}
      </div>
      <div className="split">
        <div className="split-bar" role="img" aria-label={`${t.prom} ${d.split[0]}%, ${t.pass} ${d.split[1]}%, ${t.det} ${d.split[2]}%`}>
          <span className="sp-p" style={{ width: `${d.split[0]}%` }} />
          <span className="sp-n" style={{ width: `${d.split[1]}%` }} />
          <span className="sp-d" style={{ width: `${d.split[2]}%` }} />
        </div>
        <div className="split-legend">
          <span><i className="sp-p" />{t.prom} {d.split[0]}%</span>
          <span><i className="sp-n" />{t.pass} {d.split[1]}%</span>
          <span><i className="sp-d" />{t.det} {d.split[2]}%</span>
        </div>
      </div>
    </div>
  )
}
