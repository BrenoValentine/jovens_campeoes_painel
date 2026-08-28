import { DashboardShell } from "@/components/dashboard/dashboard-shell"
import { getCurrentUser, getSummaryStats } from "@/lib/dashboard-data"
export const dynamic = 'force-dynamic'
export default async function Page() {
  // O 'await' faz a tela esperar a resposta do banco de dados
  const user = await getCurrentUser()
  const stats = await getSummaryStats()

  return <DashboardShell user={user} stats={stats} />
}