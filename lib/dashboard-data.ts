import { supabase } from './supabase'

export type CurrentUser = {
  id: string
  name: string
  role: string
  avatarUrl?: string
}

// Por enquanto mantemos a Marina fixa, conectaremos o login depois!
export async function getCurrentUser(): Promise<CurrentUser> {
  return {
    id: "usr_001",
    name: "Marina Costa",
    role: "Coordenadora Esportiva",
  }
}

export type Stat = {
  key: string
  label: string
  value: string
  helper: string
  trend: string
  trendUp: boolean
}

export async function getSummaryStats(): Promise<Stat[]> {
  // 1. O site "liga" para o Supabase e conta as linhas da tabela 'alunos'
  const { count, error } = await supabase
    .from('alunos')
    .select('*', { count: 'exact', head: true })

  // 2. Se a contagem der certo, usamos o número. Se der erro, mostramos "0"
  const totalAlunos = count !== null ? count.toString() : "0"

  return [
    {
      key: "alunos",
      label: "Alunos Matriculados",
      value: totalAlunos, // <--- A MÁGICA ACONTECE AQUI! Substituímos o 342.
      helper: "matriculados no programa",
      trend: "+12 este mês",
      trendUp: true,
    },
    {
      key: "frequencia",
      label: "Frequência Média",
      value: "87%",
      helper: "presença nas últimas 4 semanas",
      trend: "+3,2%",
      trendUp: true,
    },
    {
      key: "documentos",
      label: "Documentos Pendentes",
      value: "18",
      helper: "aguardando envio ou revisão",
      trend: "-5 esta semana",
      trendUp: false,
    },
  ]
}