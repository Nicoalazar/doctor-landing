import Image from 'next/image'

import CTA from '@/components/CTA'
import type { Medico } from '@/types/medico'

type MedicoCardProps = {
  medico: Medico
}

export default function MedicoCard({ medico }: MedicoCardProps) {
  return (
    <article className="flex flex-col gap-6 rounded-3xl border border-slate-200/80 bg-white/95 p-8 shadow-lg shadow-slate-200/70 transition-all duration-200 hover:-translate-y-1 hover:shadow-xl">
      <div className="flex flex-col items-center gap-4 text-center">
        <Image
          src={medico.foto}
          alt={`Foto de ${medico.nombre}`}
          width={120}
          height={120}
          className="rounded-2xl border border-slate-200 object-cover shadow-md shadow-slate-200/60"
        />
        <div>
          <h3 className="text-2xl font-semibold text-slate-900">{medico.nombre}</h3>
          <p className="text-sm font-medium uppercase tracking-wide text-blue-600/90">{medico.especialidad}</p>
        </div>
      </div>
      <p className="text-base leading-7 text-slate-600">{medico.descripcion}</p>
      <CTA telefono={medico.telefono} email={medico.email} />
    </article>
  )
}
