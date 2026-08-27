"use client"

import { useState } from "react"
import { Menu, Bell, Search } from "lucide-react"
import { Sidebar } from "./sidebar"
import { StatCards } from "./stat-cards"
import type { CurrentUser, Stat } from "@/lib/dashboard-data"

export function DashboardShell({
  user,
  stats,
}: {
  user: CurrentUser
  stats: Stat[]
}) {
  const [open, setOpen] = useState(true)

  return (
    <div className="flex h-dvh w-full overflow-hidden bg-background">
      <Sidebar open={open} />

      <div className="flex min-w-0 flex-1 flex-col">
        {/* Barra superior */}
        <header className="flex h-16 shrink-0 items-center gap-3 border-b border-border bg-card px-4 md:px-6">
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Fechar menu lateral" : "Abrir menu lateral"}
            aria-expanded={open}
            className="flex size-10 items-center justify-center rounded-lg text-foreground/70 transition-colors hover:bg-secondary hover:text-foreground"
          >
            <Menu className="size-5" aria-hidden="true" />
          </button>

          <div className="relative hidden max-w-xs flex-1 md:block">
            <Search
              className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground"
              aria-hidden="true"
            />
            <input
              type="search"
              placeholder="Buscar alunos, documentos..."
              className="h-10 w-full rounded-lg border border-border bg-secondary/50 pl-9 pr-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-ring focus:bg-card"
            />
          </div>

          <div className="ml-auto flex items-center gap-2">
            <button
              type="button"
              aria-label="Notificações"
              className="relative flex size-10 items-center justify-center rounded-lg text-foreground/70 transition-colors hover:bg-secondary hover:text-foreground"
            >
              <Bell className="size-5" aria-hidden="true" />
              <span className="absolute right-2.5 top-2.5 size-2 rounded-full bg-accent-foreground/70 ring-2 ring-card" />
            </button>
            <div className="flex items-center gap-3 rounded-lg py-1 pl-1 pr-2 sm:pl-2">
              <div className="flex size-9 items-center justify-center rounded-full bg-primary/15 text-sm font-semibold text-primary">
                {user.name
                  .split(" ")
                  .map((n) => n[0])
                  .slice(0, 2)
                  .join("")}
              </div>
              <div className="hidden text-left sm:block">
                <p className="text-sm font-semibold leading-tight text-foreground">{user.name}</p>
                <p className="text-xs text-muted-foreground">{user.role}</p>
              </div>
            </div>
          </div>
        </header>

        {/* Conteúdo */}
        <main className="flex-1 overflow-y-auto p-4 md:p-8">
          <div className="mx-auto max-w-6xl">
            {/* Cabeçalho de boas-vindas — o nome vem do usuário logado (banco de dados) */}
            <div className="mb-8">
              <h1 className="text-2xl font-bold tracking-tight text-foreground text-balance sm:text-3xl">
                {`Olá, ${user.name} 👋`}
              </h1>
              <p className="mt-1 text-sm text-muted-foreground text-pretty">
                Aqui está um resumo do desempenho do programa Jovens Campeões hoje.
              </p>
            </div>

            <StatCards stats={stats} />
          </div>
        </main>
      </div>
    </div>
  )
}
