import { useEffect, useState, type ReactNode } from 'react'
import { content, links, stack, type Lang } from './content'
import SurveyDemo from './demos/SurveyDemo'
import CampaignDemo from './demos/CampaignDemo'
import DashboardDemo from './demos/DashboardDemo'

type Theme = 'dark' | 'light'
const store = {
  get: (k: string) => { try { return localStorage.getItem(k) } catch { return null } },
  set: (k: string, v: string) => { try { localStorage.setItem(k, v) } catch { /* ignore */ } },
}
const initialLang = (): Lang => (store.get('lang') as Lang) || (navigator.language.startsWith('pt') ? 'pt' : 'en')
const initialTheme = (): Theme => (store.get('theme') as Theme) || (matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark')

const DEMOS: Record<string, (p: { lang: Lang }) => ReactNode> = { surveys: SurveyDemo, campaign: CampaignDemo, dashboard: DashboardDemo }
const SRC: Record<string, string> = { surveys: 'SurveyDemo', campaign: 'CampaignDemo', dashboard: 'DashboardDemo' }

export default function App() {
  const [lang, setLang] = useState<Lang>(initialLang)
  const [theme, setTheme] = useState<Theme>(initialTheme)
  const [copied, setCopied] = useState(false)
  const c = content[lang]

  useEffect(() => { document.documentElement.lang = lang === 'pt' ? 'pt-BR' : 'en'; store.set('lang', lang) }, [lang])
  useEffect(() => { document.documentElement.dataset.theme = theme; store.set('theme', theme) }, [theme])

  const copy = async () => {
    try { await navigator.clipboard.writeText(links.email); setCopied(true); setTimeout(() => setCopied(false), 1800) } catch { /* ignore */ }
  }

  return (
    <>
      <header className="top">
        <a href="#top" className="logo" aria-label="Danielle Grotta">dg<span>_</span></a>
        <nav>
          <a href="#work">{c.nav.work}</a>
          <a href="#about">{c.nav.about}</a>
          <a href="#contact">{c.nav.contact}</a>
        </nav>
        <div className="toggles">
          <button onClick={() => setLang(lang === 'en' ? 'pt' : 'en')} aria-label="Language">{lang === 'en' ? 'PT' : 'EN'}</button>
          <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} aria-label="Theme">{theme === 'dark' ? '☀' : '☾'}</button>
        </div>
      </header>

      <main id="top">
        <section className="hero wrap">
          <p className="mono eyebrow"><span className="dot" />{c.hero.available}</p>
          <h1>Danielle Grotta</h1>
          <p className="role mono">{c.hero.role}</p>
          <p className="hero-title">{c.hero.title}</p>
          <p className="lead">{c.hero.lead}</p>
          <div className="hero-links">
            <a className="btn primary" href={`mailto:${links.email}`}>{links.email}</a>
            <a className="btn" href={links.linkedin} target="_blank" rel="noreferrer">LinkedIn ↗</a>
            <a className="btn" href={links.github} target="_blank" rel="noreferrer">GitHub ↗</a>
          </div>
          <div className="stack">
            <span className="mono">{c.hero.stackLabel}</span>
            <ul>{stack.map((x) => <li key={x} className="mono">{x}</li>)}</ul>
          </div>
        </section>

        <section id="work" className="wrap">
          <div className="sec-head">
            <h2>{c.workHead}</h2>
            <p className="nda mono">{c.nda}</p>
          </div>
          <ol className="index">
            {c.cases.map((k, i) => (
              <li key={k.id}><a href={`#${k.id}`}><span className="mono">0{i + 1}</span>{k.title}<em className="mono">{k.tag}</em></a></li>
            ))}
          </ol>
        </section>

        {c.cases.map((k, i) => {
          const Demo = DEMOS[k.id]
          return (
            <article key={k.id} id={k.id} className="case wrap">
              <div className="case-head">
                <p className="mono eyebrow">0{i + 1} · {k.tag}</p>
                <h3>{k.title}</h3>
                <p className="lead">{k.summary}</p>
                <dl className="meta">
                  {k.meta.map(([a, b]) => <div key={a}><dt className="mono">{a}</dt><dd>{b}</dd></div>)}
                </dl>
              </div>
              <div className="case-grid">
                <div className="case-text">
                  {k.sections.map((s) => <div key={s.h}><h4 className="mono">{s.h}</h4><p>{s.p}</p></div>)}
                </div>
                <figure className="case-demo">
                  <figcaption className="mono">{k.demoLabel}</figcaption>
                  <Demo lang={lang} />
                  <a className="src mono" href={`${links.repo}/blob/main/src/demos/${SRC[k.id]}.tsx`} target="_blank" rel="noreferrer">{'</>'} {c.source}: {SRC[k.id]}.tsx ↗</a>
                </figure>
              </div>
            </article>
          )
        })}

        <section className="wrap also">
          <h2>{c.also.head}</h2>
          <div className="also-grid">
            {c.also.items.map((it) => (
              <div key={it.title} className="also-item">
                <h4>{it.title}</h4>
                <p>{it.desc}</p>
                {it.link && <a className="mono" href={it.link} target="_blank" rel="noreferrer">{it.linkLabel} ↗</a>}
              </div>
            ))}
          </div>
        </section>

        <section id="about" className="wrap about">
          <h2>{c.about.head}</h2>
          <div className="about-grid">
            <div className="bio">{c.about.bio.map((p) => <p key={p}>{p}</p>)}</div>
            <div>
              <h4 className="mono">{c.about.expHead}</h4>
              <ul className="timeline">
                {c.about.exp.map((e) => (
                  <li key={e.org}><span className="mono when">{e.when}</span><div><b>{e.role}</b> · {e.org}<p>{e.desc}</p></div></li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="mono">{c.about.skillsHead}</h4>
              <dl className="skills">{c.about.skills.map(([a, b]) => <div key={a}><dt className="mono">{a}</dt><dd>{b}</dd></div>)}</dl>
            </div>
            <div>
              <h4 className="mono">{c.about.eduHead}</h4>
              <ul className="edu">{c.about.edu.map((e) => <li key={e}>{e}</li>)}</ul>
            </div>
          </div>
        </section>

        <section id="contact" className="wrap contact">
          <h2>{c.contact.head}</h2>
          <p className="lead">{c.contact.lead}</p>
          <div className="mail">
            <span className="mono">{links.email}</span>
            <button className="btn" onClick={copy}>{copied ? c.contact.copied : c.contact.copy}</button>
          </div>
          <div className="hero-links">
            <a className="btn" href={links.linkedin} target="_blank" rel="noreferrer">LinkedIn ↗</a>
            <a className="btn" href={links.github} target="_blank" rel="noreferrer">GitHub ↗</a>
          </div>
        </section>
      </main>
      <footer className="wrap mono">{c.footer}</footer>
    </>
  )
}
