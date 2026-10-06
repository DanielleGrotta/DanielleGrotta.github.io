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
  hero: { role: string; title: string; lead: string; available: string; cv: string; stackLabel: string }
  source: string
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
    role: 'Front-End Developer · UX Engineer · Product Designer',
    title: 'I design B2B interfaces and develop them in React.',
    lead: 'Front-end developer and UX/UI designer with five years building B2B products. I write React and TypeScript in production and design flows and prototypes in Figma, so one person carries an interface from the first wireframe to working code.',
    available: 'Open to remote roles',
    cv: 'Download CV',
    stackLabel: 'Stack I use daily',
  },
  source: 'View source',
  workHead: 'Selected work',
  nda: 'Client work is under NDA. These cases recreate my process with fictional brands and data.',
  cases: [
    {
      id: 'surveys',
      tag: 'Design system · React · Multi-brand',
      title: 'One survey, 40+ brands',
      summary: 'How I keep customer experience surveys usable while every client brings a different brand.',
      meta: [['Role', 'Design + front-end development'], ['Context', 'B2B SaaS · Customer Experience'], ['Tools', 'Figma · React · SASS']],
      sections: [
        { h: 'Context', p: 'At Inovyo I design the survey layouts for nearly the whole client portfolio. Some clients send a full brand manual; others send a logo and a one-line brief. The survey still has to look like theirs and work on any phone.' },
        { h: 'Approach', p: 'I separate structure from skin. The anatomy of a survey stays fixed: header, question, answer scale, progress and call to action. Each brand only changes a small set of tokens: colors, corner radius, typeface and logo. New clients start from the same tested components instead of a blank file.' },
        { h: 'Decisions', p: 'Brand color goes to the header and actions, never to the answer scale, so the palette does not nudge how people score. Contrast is checked per brand, and when a brand color fails on white, the text switches to the dark variant instead of breaking the identity.' },
        { h: 'Engineering', p: 'In code, a brand is a typed object mapped to CSS custom properties on the survey root. The React component never reads brand values directly, so adding a brand means adding data, not touching components. The same split is what keeps the Figma library and the code in sync.' },
        { h: 'Try it', p: 'Switch between three fictional brands below. The component is the same; only the tokens change.' },
      ],
      demoLabel: 'Live demo · fictional brands',
    },
    {
      id: 'campaign',
      tag: 'Visual design · Multichannel',
      title: 'From one key visual to every screen',
      summary: 'Survey campaigns that reach people where they are: printed flyers, email blasts, TV screens and kiosks.',
      meta: [['Role', 'Visual design + front-end'], ['Context', 'Survey awareness campaigns'], ['Formats', 'Print · Email · TV · Kiosk']],
      sections: [
        { h: 'Context', p: 'A survey only works if people answer it. For several clients I go beyond the survey itself and design the whole campaign that drives responses, always inside their brand guidelines.' },
        { h: 'Approach', p: 'I start from a single key visual that sets the message, the QR code area and the brand graphics. Every format is derived from it, so the campaign stays recognizable from a printed flyer to a vertical kiosk screen.' },
        { h: 'Decisions', p: 'The QR code is treated as the main action, not a footnote: fixed minimum size, white quiet zone and a one-line instruction next to it. Copy is short enough to read from a distance on TV and kiosk formats.' },
        { h: 'Engineering', p: 'The formats in the demo are one React component. Sizes come from CSS container query units, so type, QR code and spacing scale with each format instead of being redrawn per size. The QR area keeps its proportion in every layout.' },
        { h: 'Try it', p: 'Pick a format to see how the same system adapts.' },
      ],
      demoLabel: 'Live demo · fictional brand',
    },
    {
      id: 'dashboard',
      tag: 'React · SVG · Dashboards',
      title: 'NPS, CSAT and CES at a glance',
      summary: 'A dashboard that answers “are customers happier this month, and where?” before anyone opens a report.',
      meta: [['Role', 'Design + front-end development'], ['Context', 'CX analytics'], ['Built with', 'React · SVG']],
      sections: [
        { h: 'Context', p: 'Customer experience teams track several scores across channels and periods. The data existed; the hard part was making it readable in a few seconds.' },
        { h: 'Approach', p: 'Summary first, detail after. Each metric shows its current value, the change against the previous period and a small trend. Filters stay visible at the top so people always know what slice they are looking at.' },
        { h: 'Decisions', p: 'Change is shown with sign and color, never color alone. The NPS breakdown uses the real promoter, passive and detractor split, because a single number hides whether a score moved from the middle or from the extremes.' },
        { h: 'Engineering', p: 'Charts are plain SVG drawn by small typed React components, with no chart library. Data is derived with useMemo from the filters, numbers use tabular figures so columns do not jump, and every color-coded value also carries text for screen readers.' },
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
      'I started in game development, worked as a full stack intern and became a front-end developer who also designs. Today I build and design B2B SaaS products for customer experience, writing the React code for the interfaces I prototype.',
      'I care about interfaces that hold up in real use: many brands, messy data, small screens. AI tools are part of my daily workflow for ideation, prototyping and implementation.',
    ],
    expHead: 'Experience',
    exp: [
      { role: 'Front-End Developer · UX Engineer', org: 'Inovyo', when: '2023 — now', desc: 'B2B SaaS for customer experience. React and TypeScript interfaces with Ant Design and REST APIs: dashboards, advanced filters, modals and flows. Also survey layouts for 40+ brands and their campaigns.' },
      { role: 'Front-End Developer | Web Designer', org: 'BrainSoft Informática', when: '2022 — 2023', desc: 'Responsive websites in WordPress and custom front-end, from visual direction to launch.' },
      { role: 'Full Stack Developer Intern', org: 'KaBuM!', when: '2021 — 2022', desc: 'React, Styled Components and Bootstrap interfaces, a full CRUD app with MySQL and REST APIs, PHP, Perl and Node.js maintenance in an agile team.' },
    ],
    skillsHead: 'Toolkit',
    skills: [
      ['Design', 'Product design, UX/UI, user flows, information architecture, prototyping, design systems, visual design'],
      ['Figma', 'Auto layout, components, variants, prototyping, handoff'],
      ['Front-end', 'React, TypeScript, JavaScript, Redux, HTML, CSS/SASS, Styled Components, Ant Design, Bootstrap'],
      ['Back-end & tools', 'REST APIs, Node.js, PHP, MySQL, Git, Scrum, Jira'],
      ['AI workflow', 'Claude Code, OpenAI Codex, ChatGPT, Lovable'],
    ],
    eduHead: 'Education',
    edu: ['Fatec Americana · Business Management (2023–2025)', 'Fatec Americana · Game Development (2019–2022)', 'Google UX Design · Microsoft UX Design certificates', 'Portuguese (native) · English (fluent)'],
  },
  contact: { head: 'Contact', lead: 'Want to talk about a project, a role or an idea? Write me.', copy: 'Copy email', copied: 'Copied' },
  footer: 'Designed and built by Danielle Grotta with React and TypeScript.',
}

const pt: Content = {
  nav: { work: 'Trabalhos', about: 'Sobre', contact: 'Contato' },
  hero: {
    role: 'Front-End Developer · UX Engineer · Product Designer',
    title: 'Desenho interfaces B2B e desenvolvo em React.',
    lead: 'Desenvolvedora front-end e designer UX/UI com cinco anos construindo produtos B2B. Escrevo React e TypeScript em produção e desenho fluxos e protótipos no Figma, então a mesma pessoa leva a interface do primeiro wireframe ao código funcionando.',
    available: 'Aberta a vagas remotas',
    cv: 'Baixar currículo',
    stackLabel: 'Stack do dia a dia',
  },
  source: 'Ver código',
  workHead: 'Trabalhos selecionados',
  nda: 'Os trabalhos para clientes têm confidencialidade. Estes cases recriam meu processo com marcas e dados fictícios.',
  cases: [
    {
      id: 'surveys',
      tag: 'Design system · React · Multimarca',
      title: 'Uma pesquisa, 40+ marcas',
      summary: 'Como mantenho pesquisas de experiência do cliente usáveis enquanto cada cliente traz uma marca diferente.',
      meta: [['Papel', 'Design + desenvolvimento front-end'], ['Contexto', 'SaaS B2B · Customer Experience'], ['Ferramentas', 'Figma · React · SASS']],
      sections: [
        { h: 'Contexto', p: 'Na Inovyo, faço o layout das pesquisas de quase toda a carteira de clientes. Alguns mandam o manual de marca completo; outros, só o logo e um briefing de uma linha. A pesquisa precisa parecer deles e funcionar em qualquer celular.' },
        { h: 'Abordagem', p: 'Separo estrutura de aparência. A anatomia da pesquisa é fixa: cabeçalho, pergunta, escala de resposta, progresso e ação. Cada marca muda só um conjunto pequeno de tokens: cores, arredondamento, tipografia e logo. Cliente novo começa dos mesmos componentes testados, não de um arquivo em branco.' },
        { h: 'Decisões', p: 'A cor da marca vai para o cabeçalho e as ações, nunca para a escala de resposta, para a paleta não influenciar a nota. O contraste é conferido por marca; quando a cor falha sobre branco, o texto troca para a variante escura em vez de quebrar a identidade.' },
        { h: 'Engenharia', p: 'No código, uma marca é um objeto tipado mapeado para CSS custom properties na raiz da pesquisa. O componente React nunca lê valores da marca diretamente, então adicionar uma marca é adicionar dados, sem mexer em componente. É a mesma divisão que mantém a biblioteca do Figma e o código em sincronia.' },
        { h: 'Teste', p: 'Troque entre três marcas fictícias abaixo. O componente é o mesmo; só os tokens mudam.' },
      ],
      demoLabel: 'Demo ao vivo · marcas fictícias',
    },
    {
      id: 'campaign',
      tag: 'Design visual · Multicanal',
      title: 'De uma arte-base para todas as telas',
      summary: 'Campanhas de pesquisa que chegam às pessoas onde elas estão: panfletos, e-mail, TV e totens.',
      meta: [['Papel', 'Design visual + front-end'], ['Contexto', 'Campanhas de divulgação de pesquisas'], ['Formatos', 'Impresso · E-mail · TV · Totem']],
      sections: [
        { h: 'Contexto', p: 'Pesquisa só funciona se as pessoas responderem. Para vários clientes, vou além da pesquisa e desenho a campanha inteira que gera respostas, sempre dentro do manual de marca.' },
        { h: 'Abordagem', p: 'Começo por uma arte-base que define mensagem, área do QR code e grafismos da marca. Todo formato deriva dela, então a campanha continua reconhecível do panfleto ao totem vertical.' },
        { h: 'Decisões', p: 'O QR code é a ação principal, não um detalhe: tamanho mínimo fixo, margem branca e uma instrução curta ao lado. O texto é curto o bastante para ler de longe na TV e no totem.' },
        { h: 'Engenharia', p: 'Os formatos da demo são um único componente React. Os tamanhos vêm de unidades de container query, então tipografia, QR code e espaçamentos escalam com cada formato em vez de serem redesenhados. A área do QR mantém a proporção em todos os layouts.' },
        { h: 'Teste', p: 'Escolha um formato para ver como o mesmo sistema se adapta.' },
      ],
      demoLabel: 'Demo ao vivo · marca fictícia',
    },
    {
      id: 'dashboard',
      tag: 'React · SVG · Dashboards',
      title: 'NPS, CSAT e CES num relance',
      summary: 'Um dashboard que responde “os clientes estão mais satisfeitos este mês, e onde?” antes de alguém abrir um relatório.',
      meta: [['Papel', 'Design + desenvolvimento front-end'], ['Contexto', 'Analytics de CX'], ['Feito com', 'React · SVG']],
      sections: [
        { h: 'Contexto', p: 'Times de experiência do cliente acompanham vários indicadores por canal e período. Os dados existiam; o difícil era deixá-los legíveis em poucos segundos.' },
        { h: 'Abordagem', p: 'Resumo antes do detalhe. Cada métrica mostra o valor atual, a variação contra o período anterior e uma tendência pequena. Os filtros ficam visíveis no topo, para ninguém perder de vista qual recorte está olhando.' },
        { h: 'Decisões', p: 'A variação aparece com sinal e cor, nunca só cor. O NPS mostra a divisão real entre promotores, neutros e detratores, porque um número só esconde se a nota mudou pelo meio ou pelas pontas.' },
        { h: 'Engenharia', p: 'Os gráficos são SVG puro, desenhados por componentes React tipados, sem biblioteca de gráficos. Os dados são derivados com useMemo a partir dos filtros, os números usam algarismos tabulares para as colunas não pularem, e todo valor codificado por cor também tem texto para leitores de tela.' },
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
      'Comecei em desenvolvimento de jogos, fui estagiária full stack e virei uma desenvolvedora front-end que também desenha. Hoje construo e desenho produtos SaaS B2B de experiência do cliente, escrevendo o código React das interfaces que prototipo.',
      'Gosto de interfaces que aguentam o uso real: muitas marcas, dados bagunçados, telas pequenas. Ferramentas de IA fazem parte do meu dia a dia para ideação, prototipação e implementação.',
    ],
    expHead: 'Experiência',
    exp: [
      { role: 'Front-End Developer · UX Engineer', org: 'Inovyo', when: '2023 — atual', desc: 'SaaS B2B de experiência do cliente. Interfaces em React e TypeScript com Ant Design e APIs REST: dashboards, filtros avançados, modais e fluxos. Também o layout das pesquisas de 40+ marcas e suas campanhas.' },
      { role: 'Front-End Developer | Web Designer', org: 'BrainSoft Informática', when: '2022 — 2023', desc: 'Sites responsivos em WordPress e front-end próprio, da definição visual à publicação.' },
      { role: 'Estagiária Full Stack', org: 'KaBuM!', when: '2021 — 2022', desc: 'Interfaces em React, Styled Components e Bootstrap, aplicação CRUD com MySQL e APIs REST, manutenção em PHP, Perl e Node.js num time ágil.' },
    ],
    skillsHead: 'Ferramentas',
    skills: [
      ['Design', 'Product design, UX/UI, fluxos, arquitetura de informação, prototipação, design systems, design visual'],
      ['Figma', 'Auto layout, componentes, variantes, prototipação, handoff'],
      ['Front-end', 'React, TypeScript, JavaScript, Redux, HTML, CSS/SASS, Styled Components, Ant Design, Bootstrap'],
      ['Back-end e ferramentas', 'APIs REST, Node.js, PHP, MySQL, Git, Scrum, Jira'],
      ['IA', 'Claude Code, OpenAI Codex, ChatGPT, Lovable'],
    ],
    eduHead: 'Formação',
    edu: ['Fatec Americana · Gestão Empresarial (2023–2025)', 'Fatec Americana · Jogos Digitais (2019–2022)', 'Certificados Google UX Design · Microsoft UX Design', 'Português (nativo) · Inglês (fluente)'],
  },
  contact: { head: 'Contato', lead: 'Quer conversar sobre um projeto, uma vaga ou uma ideia? Me escreva.', copy: 'Copiar e-mail', copied: 'Copiado' },
  footer: 'Design e código por Danielle Grotta, em React e TypeScript.',
}

export const stack = ['React', 'TypeScript', 'JavaScript', 'HTML', 'CSS / SASS', 'Styled Components', 'Ant Design', 'Redux', 'REST APIs', 'Node.js', 'Git', 'Figma']

export const content = { en, pt }

export const links = {
  email: 'danielletetzner0@gmail.com',
  linkedin: 'https://www.linkedin.com/in/danielle-t-grotta/',
  github: 'https://github.com/DanielleGrotta',
  repo: 'https://github.com/DanielleGrotta/DanielleGrotta.github.io',
}
