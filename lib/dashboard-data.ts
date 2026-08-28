/**
 * Em produção, estes dados viriam do banco de dados de acordo com o
 * usuário autenticado na sessão (ex.: consulta por session.userId).
 * Aqui usamos um mock apenas para demonstração da interface.
 */

export type CurrentUser = {
  id: string
  name: string
  role: string
  avatarUrl?: string
}

export function getCurrentUser(): CurrentUser {
  // TODO: substituir por consulta real, ex.:
  // const user = await db.query.users.findFirst({ where: eq(users.id, session.userId) })
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

export function getSummaryStats(): Stat[] {
  return [
    {
      key: "alunos",
      label: "Alunos Matriculados",
      value: "342",
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
