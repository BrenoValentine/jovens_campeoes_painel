import { Users, CalendarCheck, FileText, TrendingUp, TrendingDown, type LucideIcon } from "lucide-react"
import { cn } from "@/lib/utils"
import type { Stat } from "@/lib/dashboard-data"

const iconMap: Record<string, LucideIcon> = {
  alunos: Users,
  frequencia: CalendarCheck,
  documentos: FileText,
}

export function StatCards({ stats }: { stats: Stat[] }) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {stats.map((stat) => {
        const Icon = iconMap[stat.key] ?? Users
        const Trend = stat.trendUp ? TrendingUp : TrendingDown
        return (
          <div
            key={stat.key}
            className="group rounded-2xl border border-border bg-card p-6 shadow-sm transition-shadow hover:shadow-md"
          >
            <div className="flex items-start justify-between">
              <div className="flex size-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <Icon className="size-5" aria-hidden="true" />
              </div>
              <span
                className={cn(
                  "inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-xs font-medium",
                  stat.trendUp
                    ? "bg-primary/10 text-primary"
                    : "bg-accent text-accent-foreground",
                )}
              >
                <Trend className="size-3.5" aria-hidden="true" />
                {stat.trend}
              </span>
            </div>
            <p className="mt-5 text-sm font-medium text-muted-foreground">{stat.label}</p>
            <p className="mt-1 text-3xl font-bold tracking-tight text-foreground">{stat.value}</p>
            <p className="mt-1 text-xs text-muted-foreground">{stat.helper}</p>
          </div>
        )
      })}
    </div>
  )
}
