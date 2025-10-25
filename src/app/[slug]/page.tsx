import { getMedicoBySlug } from '@/lib/medicos'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import CTA from '@/components/CTA'
import type { Metadata } from 'next'
import { Props } from '@/types/props' 


export default async function MedicoPage({ params }: Props) {
  const resolvedParams = await params
  const medico = getMedicoBySlug(resolvedParams.slug)

  if (!medico) return notFound()

  return (
    <main className="px-4 py-10 sm:py-16">
      <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg p-6 sm:p-10 border border-gray-100">
        <div className="flex flex-col items-center text-center gap-4">
          <Image
            src={medico.foto}
            alt={`Foto de ${medico.nombre}`}
            width={150}
            height={150}
            className="rounded-full object-cover border border-gray-300 shadow"
          />
          <h1 className="text-3xl font-bold text-gray-900">{medico.nombre}</h1>
          <p className="text-lg font-medium text-blue-600">{medico.especialidad}</p>
          <p className="text-md text-gray-700 max-w-prose">{medico.descripcion}</p>

          <div className="w-full mt-6">
            <CTA telefono={medico.telefono} email={medico.email} />
          </div>
        </div>
      </div>
    </main>
  )
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const resolvedParams = await params
  const medico = getMedicoBySlug(resolvedParams.slug)

  if (!medico) {
    return {
      title: 'Médico no encontrado - Plataforma Médica',
    }
  }

  return {
    title: `${medico.nombre} - ${medico.especialidad}`,
    description: medico.descripcion,
    openGraph: {
      title: `${medico.nombre} - ${medico.especialidad}`,
      description: medico.descripcion,
      images: [medico.foto],
    },
  }
}
