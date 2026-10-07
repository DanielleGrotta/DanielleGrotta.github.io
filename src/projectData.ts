import type { Lang } from './content'

export type Cat = 'app' | 'product' | 'design' | 'ux'

export type Project = {
  n: string
  node: string
  cat: Cat
  colors: [string, string]
  ink?: string
  title: Record<Lang, string>
  tag: Record<Lang, string>
}

const FILE = '1wj75RBqHWd11x15Fm8aTc'
const NAME = 'Portf%C3%B3lio'

export const figmaUrl = (node: string) => `https://www.figma.com/design/${FILE}/${NAME}?node-id=${node.replace(':', '-')}`
export const embedUrl = (node: string) => `https://embed.figma.com/design/${FILE}/${NAME}?node-id=${node.replace(':', '-')}&embed-host=share&footer=false`
export const fileUrl = `https://www.figma.com/design/${FILE}/${NAME}`

export const cats: Record<Cat | 'all', Record<Lang, string>> = {
  all: { en: 'All', pt: 'Tudo' },
  app: { en: 'Mobile apps', pt: 'Apps mobile' },
  product: { en: 'Web & product', pt: 'Web e produto' },
  design: { en: 'Visual & systems', pt: 'Visual e sistemas' },
  ux: { en: 'UX process', pt: 'Processo de UX' },
}

export const projects: Project[] = [
  { n: '01', node: '8:87', cat: 'design', colors: ['#1456C8', '#13806D'], title: { en: 'Multi-brand surveys', pt: 'Pesquisas multimarca' }, tag: { en: 'Brand tokens with variable modes', pt: 'Tokens de marca com modos de variável' } },
  { n: '02', node: '9:1657', cat: 'design', colors: ['#0C5B5A', '#F2C230'], title: { en: 'Multichannel campaign', pt: 'Campanha multicanal' }, tag: { en: 'Print · social · TV · kiosk · email', pt: 'Impresso · redes · TV · totem · e-mail' } },
  { n: '03', node: '10:14', cat: 'product', colors: ['#5B48D6', '#9A8BFF'], title: { en: 'CX dashboard', pt: 'Dashboard de CX' }, tag: { en: 'Desktop and mobile', pt: 'Desktop e mobile' } },
  { n: '04', node: '11:11', cat: 'product', colors: ['#16294D', '#FF5A36'], title: { en: 'Company website', pt: 'Site institucional' }, tag: { en: 'Landing page', pt: 'Landing page' } },
  { n: '05', node: '12:24', cat: 'product', colors: ['#101828', '#3B5BDB'], title: { en: 'Automotive lead CRM', pt: 'CRM de leads automotivo' }, tag: { en: 'B2B · list, kanban, mobile', pt: 'B2B · lista, kanban, mobile' } },
  { n: '06', node: '14:319', cat: 'app', colors: ['#6C2BD9', '#2A0E61'], title: { en: 'Lumi · digital bank', pt: 'Lumi · banco digital' }, tag: { en: 'Purple · Pix, cards, receipt', pt: 'Roxo · Pix, cartões, comprovante' } },
  { n: '07', node: '15:480', cat: 'app', colors: ['#FF6A13', '#E04E00'], title: { en: 'Torque · car marketplace', pt: 'Torque · compra de carros' }, tag: { en: 'Orange · search, financing, sell', pt: 'Laranja · busca, financiamento, anúncio' } },
  { n: '08', node: '17:15', cat: 'ux', colors: ['#3A1C71', '#D76D77'], title: { en: 'Video streaming redesign', pt: 'Redesign de streaming de vídeo' }, tag: { en: 'Concept · problem → proposal', pt: 'Conceito · problema → proposta' } },
  { n: '09', node: '18:334', cat: 'ux', colors: ['#FF7A59', '#7B2CBF'], title: { en: 'Music streaming redesign', pt: 'Redesign de streaming de música' }, tag: { en: 'Concept · car mode, lyrics', pt: 'Conceito · modo carro, letra' } },
  { n: '10', node: '25:320', cat: 'app', colors: ['#0891B2', '#0E5E74'], title: { en: 'Cuida · health booking', pt: 'Cuida · agendamento de saúde' }, tag: { en: 'Cyan · booking, teleconsultation', pt: 'Ciano · horários, teleconsulta' } },
  { n: '11', node: '27:386', cat: 'app', colors: ['#E63946', '#F4A261'], title: { en: 'Garfo · food delivery', pt: 'Garfo · delivery' }, tag: { en: 'Red · menu, cart, tracking', pt: 'Vermelho · cardápio, sacola, entrega' } },
  { n: '12', node: '28:398', cat: 'app', colors: ['#1A1C14', '#C6F432'], title: { en: 'Ritmo · fitness & habits', pt: 'Ritmo · treino e hábitos' }, tag: { en: 'Lime · rings, timer, streaks', pt: 'Limão · anéis, cronômetro, sequência' } },
  { n: '13', node: '29:412', cat: 'app', colors: ['#0B5FA5', '#FFC94D'], title: { en: 'Rota · travel', pt: 'Rota · viagens' }, tag: { en: 'Ocean · search, stay, voucher', pt: 'Oceano · busca, pousada, voucher' } },
  { n: '14', node: '30:254', cat: 'app', colors: ['#FFD23F', '#141414'], ink: '#141414', title: { en: 'Lápis · online courses', pt: 'Lápis · cursos' }, tag: { en: 'Yellow · lesson, quiz, certificate', pt: 'Amarelo · aula, quiz, certificado' } },
  { n: '15', node: '31:428', cat: 'app', colors: ['#0F172A', '#34D399'], title: { en: 'Lar · smart home', pt: 'Lar · casa inteligente' }, tag: { en: 'Mint · light, climate, energy', pt: 'Menta · luz, clima, energia' } },
  { n: '16', node: '32:175', cat: 'design', colors: ['#DB2777', '#831843'], title: { en: 'Base · design system', pt: 'Base · design system' }, tag: { en: 'Light/dark tokens, variants', pt: 'Tokens claro/escuro, variantes' } },
  { n: '17', node: '33:466', cat: 'ux', colors: ['#0EA5E9', '#0369A1'], title: { en: 'Interface states', pt: 'Estados de interface' }, tag: { en: 'Empty, loading, error, offline', pt: 'Vazio, carregando, erro, offline' } },
  { n: '18', node: '36:291', cat: 'ux', colors: ['#166534', '#4ADE80'], title: { en: 'Applied accessibility', pt: 'Acessibilidade aplicada' }, tag: { en: 'Before/after, annotated', pt: 'Antes e depois, anotado' } },
  { n: '19', node: '37:246', cat: 'ux', colors: ['#F7F4EE', '#C2410C'], ink: '#141414', title: { en: 'Journey & flow', pt: 'Jornada e fluxo' }, tag: { en: 'Persona · journey map · flowchart', pt: 'Persona · jornada · fluxograma' } },
]

export const ui = {
  en: { head: 'Projects', sub: '19 design projects in Figma, all with fictional brands and data.', view: 'View', open: 'Open in Figma', close: 'Close', all: 'Open the full Figma file', loading: 'Loading the Figma file…' },
  pt: { head: 'Projetos', sub: '19 projetos de design no Figma, todos com marcas e dados fictícios.', view: 'Visualizar', open: 'Abrir no Figma', close: 'Fechar', all: 'Abrir o arquivo completo no Figma', loading: 'Carregando o arquivo do Figma…' },
}
