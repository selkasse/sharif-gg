import { TerminalSquare } from 'lucide-react'

function Header() {
  return (
    <header className="mx-auto flex max-w-5xl items-center gap-2 px-6 py-6">
      <TerminalSquare className="h-4 w-4 text-emerald-400" aria-hidden="true" />
      <p className="font-mono text-sm text-zinc-300">
        <span className="text-zinc-100">Sharif</span>
        <span className="text-zinc-600"> | </span>
        Senior Full-Stack Developer
      </p>
    </header>
  )
}

export default Header
