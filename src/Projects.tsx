import { useEffect, useState } from 'react'
import type { Lang } from './content'
import { cats, embedUrl, figmaUrl, fileUrl, projects, ui, type Cat, type Project } from './projectData'

export default function Projects({ lang }: { lang: Lang }) {
  const [cat, setCat] = useState<Cat | 'all'>('all')
  const [open, setOpen] = useState<Project | null>(null)
  const t = ui[lang]
  const list = projects.filter((p) => cat === 'all' || p.cat === cat)

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(null)
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => { document.removeEventListener('keydown', onKey); document.body.style.overflow = '' }
  }, [open])

  return (
    <section id="projects" className="wrap">
      <div className="sec-head">
        <h2>{t.head}</h2>
        <p className="nda mono">{t.sub}</p>
      </div>
      <div className="seg proj-filter" role="tablist">
        {(Object.keys(cats) as (Cat | 'all')[]).map((k) => (
          <button key={k} role="tab" aria-selected={cat === k} aria-checked={cat === k} onClick={() => setCat(k)}>
            {cats[k][lang]} <span className="mono">{k === 'all' ? projects.length : projects.filter((p) => p.cat === k).length}</span>
          </button>
        ))}
      </div>
      <ul className="proj-grid">
        {list.map((p) => (
          <li key={p.n} className="proj">
            <button className="proj-art" style={{ background: `linear-gradient(135deg, ${p.colors[0]}, ${p.colors[1]})`, color: p.ink ?? '#fff' }} onClick={() => setOpen(p)} aria-label={`${t.view}: ${p.title[lang]}`}>
              <span className="proj-n">{p.n}</span>
              <span className="proj-cta mono">{t.view} ↗</span>
            </button>
            <div className="proj-body">
              <h3>{p.title[lang]}</h3>
              <p className="mono">{p.tag[lang]}</p>
              <div className="proj-links">
                <button className="link" onClick={() => setOpen(p)}>{t.view}</button>
                <a className="link" href={figmaUrl(p.node)} target="_blank" rel="noreferrer">{t.open} ↗</a>
              </div>
            </div>
          </li>
        ))}
      </ul>
      <a className="btn proj-all" href={fileUrl} target="_blank" rel="noreferrer">{t.all} ↗</a>

      {open && (
        <div className="modal" role="dialog" aria-modal="true" aria-label={open.title[lang]} onClick={(e) => e.target === e.currentTarget && setOpen(null)}>
          <div className="modal-box">
            <div className="modal-bar">
              <div>
                <span className="mono">{open.n}</span>
                <strong>{open.title[lang]}</strong>
              </div>
              <div className="modal-actions">
                <a className="btn" href={figmaUrl(open.node)} target="_blank" rel="noreferrer">{t.open} ↗</a>
                <button className="btn" onClick={() => setOpen(null)} autoFocus>{t.close}</button>
              </div>
            </div>
            <div className="modal-frame">
              <p className="mono">{t.loading}</p>
              <iframe title={open.title[lang]} src={embedUrl(open.node)} allowFullScreen />
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
