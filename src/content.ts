export type Lang = 'en' | 'pt'

type CaseText = {
  id: string
  tag: string
  title: string
  summary: string
  meta: [string, string][]
  sections: { h: string; p: string }[]
  demoLabel: string
}

type Content = {
  nav: { work: string; about: string; contact: string }
  hero: { role: string; title: string; lead: string; available: string; cv: string }
  workHead: string
  nda: string
  cases: CaseText[]
  also: { head: string; items: { title: string; desc: string; link?: string; linkLabel?: string }[] }
  about: {
    head: string
    bio: string[]
    expHead: string
    exp: { role: string; org: string; when: string; desc: string }[]
    skillsHead: string
    skills: [string, string][]
    eduHead: string
    edu: string[]
  }
  contact: { head: string; lead: string; copy: string; copied: string }
  footer: string
}

const en: Content = {
  nav: { work: 'Work', about: 'About', contact: 'Contact' },
  hero: {
    role: 'Product Designer · UX Engineer',
    title: 'I design B2B interfaces and ship them in code.',
    lead: 'Five years turning complex business rules into clear flows, dashboards and multi-brand experiences. I prototype in Figma and build in React, so what gets approved is what reaches production.',
    available: 'Open to remote roles',
    cv: 'Download CV',
  },
  workHead: 'Selected work',
  nda: 'Client work is under NDA. These cases recreate my process with fictional brands and data.',
  cases: [
    {
      id: 'surveys',
      tag: 'Design system · Multi-brand',
      title: 'One survey, 40+ brands',
      summary: 'How I keep customer experience surveys usable while every client brings a different brand.',
      meta: [['Role', 'Product design + front-end'], ['Context', 'B2B SaaS · Customer Experience'], ['Tools', 'Figma · React · SASS']],
      sections: [
        { h: 'Context', p: 'At Inovyo I design the survey layouts for nearly the whole client portfolio. Some clients send a full brand manual; others send a logo and a one-line brief. The survey still has to look like theirs and work on any phone.' },
        { h: 'Approach', p: 'I separate structure from skin. The anatomy of a survey stays fixed: header, question, answer scale, progress and call to action. Each brand only changes a small set of tokens: colors, corner radius, typeface and logo. New clients start from the same tested components instead of a blank file.' },
        { h: 'Decisions', p: 'Brand color goes to the header and actions, never to the answer scale, so the palette does not nudge how people score. Contrast is checked per brand, and when a brand color fails on white, the text switches to the dark variant instead of breaking the identity.' },
        { h: 'Try it', p: 'Switch between three fictional brands below. The component is the same; only the tokens change.' },
      ],
      demoLabel: 'Live demo · fictional brands',
    },
    {
      id: 'campaign',
      tag: 'Visual design · Multichannel',
      title: 'From one key visual to every screen',
      summary: 'Survey campaigns that reach people where they are: printed flyers, email blasts, TV screens and kiosks.',
      meta: [['Role', 'Visual design'], ['Context', 'Survey awareness campaigns'], ['Formats', 'Print · Email · TV · Kiosk']],
      sections: [
        { h: 'Context', p: 'A survey only works if people answer it. For several clients I go beyond the survey itself and design the whole campaign that drives responses, always inside their brand guidelines.' },
        { h: 'Approach', p: 'I start from a single key visual that sets the message, the QR code area and the brand graphics. Every format is derived from it, so the campaign stays recognizable from a printed flyer to a vertical kiosk screen.' },
        { h: 'Decisions', p: 'The QR code is treated as the main action, not a footnote: fixed minimum size, white quiet zone and a one-line instruction next to it. Copy is short enough to read from a distance on TV and kiosk formats.' },
        { h: 'Try it', p: 'Pick a format to see how the same system adapts.' },
      ],
      demoLabel: 'Live demo · fictional brand',
    },
    {
      id: 'dashboard',
      tag: 'Data · Dashboards',
      title: 'NPS, CSAT and CES at a glance',
      summary: 'A dashboard that answers “are customers happier this month, and where?” before anyone opens a report.',
      meta: [['Role', 'Product design + front-end'], ['Context', 'CX analytics'], ['Built with', 'React · SVG']],
      sections: [
        { h: 'Context', p: 'Customer experience teams track several scores across channels and periods. The data existed; the hard part was making it readable in a few seconds.' },
        { h: 'Approach', p: 'Summary first, detail after. Each metric shows its current value, the change against the previous period and a small trend. Filters stay visible at the top so people always know what slice they are looking at.' },
        { h: 'Decisions', p: 'Change is shown with sign and color, never color alone. The NPS breakdown uses the real promoter, passive and detractor split, because a single number hides whether a score moved from the middle or from the extremes.' },
        { h: 'Try it', p: 'Change the period and channel. All numbers are fictional.' },
      ],
      demoLabel: 'Live demo · fictional data',
    },
  ],
  also: {
    head: 'Also',
    items: [
      { title: 'Inovyo website', desc: 'Designed and built the company website: visual identity, information architecture, reusable sections and front-end.', link: 'https://inovyo.com', linkLabel: 'inovyo.com' },
      { title: 'Lead management for an automotive marketplace', desc: 'Desktop and mobile interfaces organizing customer, vehicle, financing and survey data into actionable workflows. Under NDA; happy to walk through it in an interview.' },
    ],
  },
  about: {
    head: 'About',
    bio: [
      'I started in game development, moved into full stack development and found my place in between design and code. Today I work as a UX Engineer on B2B SaaS products for customer experience.',
      'I care about interfaces that hold up in real use: many brands, messy data, small screens. AI tools are part of my daily workflow for ideation, prototyping and implementation.',
    ],
    expHead: 'Experience',
    exp: [
      { role: 'UX Engineer | Front-End Developer', org: 'Inovyo', when: '2023 — now', desc: 'B2B SaaS for customer experience. Survey layouts for 40+ brands, dashboards, campaigns and React interfaces.' },
      { role: 'Front-End Developer | Web Designer', org: 'BrainSoft Informática', when: '2022 — 2023', desc: 'Responsive websites in WordPress and custom front-end, from visual direction to launch.' },
      { role: 'Full Stack Developer Intern', org: 'KaBuM!', when: '2021 — 2022', desc: 'React interfaces, REST APIs, PHP and Node.js maintenance in an agile team.' },
    ],
    skillsHead: 'Toolkit',
    skills: [
      ['Design', 'Product design, UX/UI, user flows, information architecture, prototyping, design systems, visual design'],
      ['Figma', 'Auto layout, components, variants, prototyping, handoff'],
      ['Code', 'React, TypeScript, JavaScript, HTML, CSS/SASS, REST APIs, Git'],
      ['AI workflow', 'Claude Code, OpenAI Codex, ChatGPT, Lovable'],
    ],
    eduHead: 'Education',
    edu: ['Fatec Americana · Business Management (2023–2025)', 'Fatec Americana · Game Development (2019–2022)', 'Google UX Design · Microsoft UX Design certificates', 'Portuguese (native) · English (fluent)'],
  },
  contact: { head: 'Contact', lead: 'Looking for a remote Product Designer, UX Engineer or Design Engineer role. Write me.', copy: 'Copy email', copied: 'Copied' },
  footer: 'Designed and built by Danielle Grotta with React and TypeScript.',
}

const pt: Content = {
  nav: { work: 'Trabalhos', about: 'Sobre', contact: 'Contato' },
  hero: {
    role: 'Product Designer · UX Engineer',
    title: 'Desenho interfaces B2B e entrego em código.',
    lead: 'Cinco anos transformando regras de negócio complexas em fluxos claros, dashboards e experiências multimarca. Prototipo no Figma e construo em React, para que o que foi aprovado seja o que chega em produção.',
    available: 'Aberta a vagas remotas',
    cv: 'Baixar currículo',
  },
  workHead: 'Trabalhos selecionados',
  nda: 'Os trabalhos para clientes têm confidencialidade. Estes cases recriam meu processo com marcas e dados fictícios.',
  cases: [
    {
      id: 'surveys',
      tag: 'Design system · Multimarca',
      title: 'Uma pesquisa, 40+ marcas',
      summary: 'Como mantenho pesquisas de experiência do cliente usáveis enquanto cada cliente traz uma marca diferente.',
      meta: [['Papel', 'Product design + front-end'], ['Contexto', 'SaaS B2B · Customer Experience'], ['Ferramentas', 'Figma · React · SASS']],
      sections: [
        { h: 'Contexto', p: 'Na Inovyo, faço o layout das pesquisas de quase toda a carteira de clientes. Alguns mandam o manual de marca completo; outros, só o logo e um briefing de uma linha. A pesquisa precisa parecer deles e funcionar em qualquer celular.' },
        { h: 'Abordagem', p: 'Separo estrutura de aparência. A anatomia da pesquisa é fixa: cabeçalho, pergunta, escala de resposta, progresso e ação. Cada marca muda só um conjunto pequeno de tokens: cores, arredondamento, tipografia e logo. Cliente novo começa dos mesmos componentes testados, não de um arquivo em branco.' },
        { h: 'Decisões', p: 'A cor da marca vai para o cabeçalho e as ações, nunca para a escala de resposta, para a paleta não influenciar a nota. O contraste é conferido por marca; quando a cor falha sobre branco, o texto troca para a variante escura em vez de quebrar a identidade.' },
        { h: 'Teste', p: 'Troque entre três marcas fictícias abaixo. O componente é o mesmo; só os tokens mudam.' },
      ],
      demoLabel: 'Demo ao vivo · marcas fictícias',
    },
    {
      id: 'campaign',
      tag: 'Design visual · Multicanal',
      title: 'De uma arte-base para todas as telas',
      summary: 'Campanhas de pesquisa que chegam às pessoas onde elas estão: panfletos, e-mail, TV e totens.',
      meta: [['Papel', 'Design visual'], ['Contexto', 'Campanhas de divulgação de pesquisas'], ['Formatos', 'Impresso · E-mail · TV · Totem']],
      sections: [
        { h: 'Contexto', p: 'Pesquisa só funciona se as pessoas responderem. Para vários clientes, vou além da pesquisa e desenho a campanha inteira que gera respostas, sempre dentro do manual de marca.' },
        { h: 'Abordagem', p: 'Começo por uma arte-base que define mensagem, área do QR code e grafismos da marca. Todo formato deriva dela, então a campanha continua reconhecível do panfleto ao totem vertical.' },
        { h: 'Decisões', p: 'O QR code é a ação principal, não um detalhe: tamanho mínimo fixo, margem branca e uma instrução curta ao lado. O texto é curto o bastante para ler de longe na TV e no totem.' },
        { h: 'Teste', p: 'Escolha um formato para ver como o mesmo sistema se adapta.' },
      ],
      demoLabel: 'Demo ao vivo · marca fictícia',
    },
    {
      id: 'dashboard',
      tag: 'Dados · Dashboards',
      title: 'NPS, CSAT e CES num relance',
      summary: 'Um dashboard que responde “os clientes estão mais satisfeitos este mês, e onde?” antes de alguém abrir um relatório.',
      meta: [['Papel', 'Product design + front-end'], ['Contexto', 'Analytics de CX'], ['Feito com', 'React · SVG']],
      sections: [
        { h: 'Contexto', p: 'Times de experiência do cliente acompanham vários indicadores por canal e período. Os dados existiam; o difícil era deixá-los legíveis em poucos segundos.' },
        { h: 'Abordagem', p: 'Resumo antes do detalhe. Cada métrica mostra o valor atual, a variação contra o período anterior e uma tendência pequena. Os filtros ficam visíveis no topo, para ninguém perder de vista qual recorte está olhando.' },
        { h: 'Decisões', p: 'A variação aparece com sinal e cor, nunca só cor. O NPS mostra a divisão real entre promotores, neutros e detratores, porque um número só esconde se a nota mudou pelo meio ou pelas pontas.' },
        { h: 'Teste', p: 'Mude o período e o canal. Todos os números são fictícios.' },
      ],
      demoLabel: 'Demo ao vivo · dados fictícios',
    },
  ],
  also: {
    head: 'Também',
    items: [
      { title: 'Site da Inovyo', desc: 'Design e desenvolvimento do site da empresa: identidade visual, arquitetura de informação, seções reutilizáveis e front-end.', link: 'https://inovyo.com', linkLabel: 'inovyo.com' },
      { title: 'Gestão de leads para um marketplace automotivo', desc: 'Interfaces desktop e mobile que organizam dados de cliente, veículo, financiamento e pesquisas em fluxos acionáveis. Sob confidencialidade; apresento em entrevista.' },
    ],
  },
  about: {
    head: 'Sobre',
    bio: [
      'Comecei em desenvolvimento de jogos, passei pelo desenvolvimento full stack e encontrei meu lugar entre design e código. Hoje sou UX Engineer em produtos SaaS B2B de experiência do cliente.',
      'Gosto de interfaces que aguentam o uso real: muitas marcas, dados bagunçados, telas pequenas. Ferramentas de IA fazem parte do meu dia a dia para ideação, prototipação e implementação.',
    ],
    expHead: 'Experiência',
    exp: [
      { role: 'UX Engineer | Front-End Developer', org: 'Inovyo', when: '2023 — atual', desc: 'SaaS B2B de experiência do cliente. Layout de pesquisas para 40+ marcas, dashboards, campanhas e interfaces em React.' },
      { role: 'Front-End Developer | Web Designer', org: 'BrainSoft Informática', when: '2022 — 2023', desc: 'Sites responsivos em WordPress e front-end próprio, da definição visual à publicação.' },
      { role: 'Estagiária Full Stack', org: 'KaBuM!', when: '2021 — 2022', desc: 'Interfaces em React, APIs REST e manutenção em PHP e Node.js num time ágil.' },
    ],
    skillsHead: 'Ferramentas',
    skills: [
      ['Design', 'Product design, UX/UI, fluxos, arquitetura de informação, prototipação, design systems, design visual'],
      ['Figma', 'Auto layout, componentes, variantes, prototipação, handoff'],
      ['Código', 'React, TypeScript, JavaScript, HTML, CSS/SASS, APIs REST, Git'],
      ['IA', 'Claude Code, OpenAI Codex, ChatGPT, Lovable'],
    ],
    eduHead: 'Formação',
    edu: ['Fatec Americana · Gestão Empresarial (2023–2025)', 'Fatec Americana · Jogos Digitais (2019–2022)', 'Certificados Google UX Design · Microsoft UX Design', 'Português (nativo) · Inglês (fluente)'],
  },
  contact: { head: 'Contato', lead: 'Procurando vaga remota de Product Designer, UX Engineer ou Design Engineer. Me escreva.', copy: 'Copiar e-mail', copied: 'Copiado' },
  footer: 'Design e código por Danielle Grotta, em React e TypeScript.',
}

export const content = { en, pt }

export const links = {
  email: 'danielletetzner0@gmail.com',
  linkedin: 'https://www.linkedin.com/in/danielle-t-grotta/',
  github: 'https://github.com/DanielleGrotta',
}
