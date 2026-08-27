import { DashboardShell } from "@/components/dashboard/dashboard-shell"
import { getCurrentUser, getSummaryStats } from "@/lib/dashboard-data"

export default function Page() {
  // Em produção, o usuário seria resolvido a partir da sessão autenticada
  // e as estatísticas viriam de consultas ao banco de dados.
  const user = getCurrentUser()
  const stats = getSummaryStats()

  return <DashboardShell user={user} stats={stats} />
}
