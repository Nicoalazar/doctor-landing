import type { ReactNode } from 'react'

export default function MedicoLayout({ children }: { children: ReactNode }) {
  return (
    <section className="min-h-screen bg-white text-black">
      {children}
    </section>
  )
}
