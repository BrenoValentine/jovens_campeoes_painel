import { supabase } from './supabase'

export type CurrentUser = {
  id: string
  name: string
  role: string
  avatarUrl?: string
}

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
  const { count, error } = await supabase
    .from('alunos')
    .select('*', { count: 'exact', head: true })

  let totalAlunos = "0"
  let helperText = "matriculados no programa"

  // Se o Supabase reclamar de algo, vamos jogar o erro na tela!
  if (error) {
    totalAlunos = "Erro"
    helperText = error.message
  } else if (count !== null) {
    totalAlunos = count.toString()
  }

  return [
    {
      key: "alunos",
      label: "Alunos Matriculados",
      value: totalAlunos,
      helper: helperText, // <-- A pista do erro vai aparecer aqui
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