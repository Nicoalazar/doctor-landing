import Image from 'next/image'

import CTA from '@/components/CTA'
import type { Medico } from '@/types/medico'

type MedicoCardProps = {
  medico: Medico
}

export default function MedicoCard({ medico }: MedicoCardProps) {
  return ( 
    <article className="flex flex-col gap-4 rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
      <div className="flex flex-col items-center text-center gap-3">
        <Image
          src={medico.foto}
          alt={`Foto de ${medico.nombre}`}
          width={120}
          height={120}
          className="rounded-full border border-gray-200 object-cover shadow"
        />
        <div>
          <h3 className="text-xl font-semibold text-gray-900">{medico.nombre}</h3>
          <p className="text-sm font-medium text-blue-600">{medico.especialidad}</p>
        </div>
      </div>
      <p className="text-sm leading-6 text-gray-600">{medico.descripcion}</p>
      <CTA telefono={medico.telefono} email={medico.email} />
    </article>
  )
}
