"use client"

import {
  LayoutDashboard,
  Trophy,
  Sparkles,
  CalendarCheck,
  FileText,
  BarChart3,
  Bot,
  Settings,
  type LucideIcon,
} from "lucide-react"
import { cn } from "@/lib/utils"

type NavItem = {
  label: string
  icon: LucideIcon
  active?: boolean
}

const navItems: NavItem[] = [
  { label: "Dashboard", icon: LayoutDashboard, active: true },
  { label: "Geral no Esporte", icon: Trophy },
  { label: "Protagonismo Juvenil", icon: Sparkles },
  { label: "Frequência", icon: CalendarCheck },
  { label: "Documentos", icon: FileText },
  { label: "Relatórios", icon: BarChart3 },
  { label: "IA", icon: Bot },
  { label: "Configurações", icon: Settings },
]

export function Sidebar({ open }: { open: boolean }) {
  return (
    <aside
      className={cn(
        "flex shrink-0 flex-col overflow-hidden bg-sidebar text-sidebar-foreground transition-[width] duration-300 ease-in-out",
        open ? "w-64" : "w-0 md:w-[76px]",
      )}
    >
      {/* Marca */}
      <div className="flex h-16 items-center gap-3 px-4">
        <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-sidebar-primary text-sidebar-primary-foreground">
          <Trophy className="size-5" aria-hidden="true" />
        </div>
        <div className={cn("min-w-0 transition-opacity duration-200", open ? "opacity-100" : "opacity-0 md:hidden")}>
          <p className="truncate text-sm font-bold leading-tight">Jovens Campeões</p>
          <p className="truncate text-xs text-sidebar-foreground/60">Painel de gestão</p>
        </div>
      </div>

      {/* Navegação */}
      <nav className="flex flex-1 flex-col gap-1 px-3 py-4">
        {navItems.map((item) => {
          const Icon = item.icon
          return (
            <a
              key={item.label}
              href="#"
              aria-current={item.active ? "page" : undefined}
              title={item.label}
              className={cn(
                "group flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors",
                open ? "" : "md:justify-center",
                item.active
                  ? "bg-sidebar-primary/15 text-sidebar-primary"
                  : "text-sidebar-foreground/70 hover:bg-sidebar-accent hover:text-sidebar-foreground",
              )}
            >
              <Icon className="size-5 shrink-0" aria-hidden="true" />
              <span className={cn("truncate", open ? "" : "md:hidden")}>{item.label}</span>
            </a>
          )
        })}
      </nav>

      {/* Rodapé */}
      <div className={cn("border-t border-sidebar-border p-4", open ? "" : "md:px-3")}>
        <p className={cn("text-xs text-sidebar-foreground/50", open ? "" : "md:hidden")}>
          Versão 1.0 · White-label
        </p>
      </div>
    </aside>
  )
}
