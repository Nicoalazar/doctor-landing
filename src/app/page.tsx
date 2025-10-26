import Link from 'next/link'

import MedicoCard from '@/components/MedicoCard'
import { getMedicos } from '@/lib/medicos'

const CONTACTO = {
  telefono: '+5491100000000',
  email: 'contacto@plataformamedica.com',
}

const BENEFICIOS = [
  {
    titulo: 'Presencia profesional inmediata',
    descripcion: 'Publica tu información de contacto y servicios médicos en minutos, sin depender de terceros.',
  },
  {
    titulo: 'Optimizado para dispositivos móviles',
    descripcion: 'Diseño responsivo con carga rápida para pacientes que buscan atención desde el celular.',
  },
  {
    titulo: 'Integración con tus canales',
    descripcion: 'Incluye accesos directos a WhatsApp y correo electrónico para agendar consultas.',
  },
]

export default function Home() {
  const medicos = getMedicos()

  return (
    <div className="bg-gray-50 text-gray-900">
      <section className="bg-white">
        <div className="mx-auto flex max-w-6xl flex-col gap-10 px-4 py-20 lg:flex-row lg:items-center">
          <div className="flex-1 space-y-6">
            <span className="text-sm font-semibold uppercase tracking-wide text-blue-600">
              Landing personalizada para profesionales de la salud
            </span>
            <h1 className="text-4xl font-bold leading-tight text-gray-900 sm:text-5xl">
              Conecta con tus pacientes y fortalece tu práctica privada
            </h1>
            <p className="max-w-xl text-lg text-gray-600">
              Gestiona tu presencia digital con una página clara, accesible y lista para compartir. Comparte tu
              especialidad, experiencia y canales de contacto con el estilo que tus pacientes esperan.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Link
                href="#contacto"
                className="rounded-md bg-blue-600 px-6 py-3 text-center text-sm font-semibold text-white shadow hover:bg-blue-700"
              >
                Solicitar mi landing
              </Link>
              <Link
                href="#equipo"
                className="rounded-md border border-blue-600 px-6 py-3 text-center text-sm font-semibold text-blue-600 hover:bg-blue-50"
              >
                Ver ejemplos reales
              </Link>
            </div>
          </div>
          <div className="flex-1 rounded-3xl border border-dashed border-blue-200 bg-blue-50/50 p-8 text-sm text-blue-900">
            <p className="mb-4 font-semibold">Incluye:</p>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <span className="mt-1 h-2 w-2 rounded-full bg-blue-500" aria-hidden="true" />
                Perfil profesional con foto y descripción personalizada
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 h-2 w-2 rounded-full bg-blue-500" aria-hidden="true" />
                Botones de contacto directo a WhatsApp y correo electrónico
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 h-2 w-2 rounded-full bg-blue-500" aria-hidden="true" />
                Sección de beneficios y testimonios adaptables a tu especialidad
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 h-2 w-2 rounded-full bg-blue-500" aria-hidden="true" />
                API pública para reutilizar tu información en otras experiencias digitales
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section id="beneficios" className="mx-auto max-w-6xl px-4 py-16">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-semibold text-gray-900">Beneficios de tu landing médica</h2>
          <p className="mt-4 text-base text-gray-600">
            Diseñada para profesionales que priorizan la confianza, la claridad y una comunicación directa con sus pacientes.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {BENEFICIOS.map((beneficio) => (
            <div key={beneficio.titulo} className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900">{beneficio.titulo}</h3>
              <p className="mt-3 text-sm leading-6 text-gray-600">{beneficio.descripcion}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="equipo" className="bg-white">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <div className="mb-10 text-center">
            <h2 className="text-3xl font-semibold text-gray-900">Ejemplos de perfiles profesionales</h2>
            <p className="mt-4 text-base text-gray-600">
              Cada landing se adapta al estilo y especialidad de cada profesional, manteniendo una estructura clara.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2">
            {medicos.map((medico) => (
              <MedicoCard key={medico.slug} medico={medico} />
            ))}
          </div>
        </div>
      </section>

      <section id="contacto" className="mx-auto max-w-4xl px-4 py-16">
        <div className="rounded-3xl bg-blue-600 px-8 py-12 text-center text-white shadow-lg">
          <h2 className="text-3xl font-semibold">¿Listo para lanzar tu landing?</h2>
          <p className="mt-4 text-base text-blue-50">
            Escríbenos y coordinemos juntos la puesta en marcha. Recibirás tu página optimizada con la información clave para tus pacientes.
          </p>
          <div className="mt-8 flex justify-center">
            <div className="flex flex-col items-center gap-2 text-sm">
              <a href={`https://wa.me/${CONTACTO.telefono.replace(/\D/g, '')}`} className="font-semibold text-white underline">
                WhatsApp: {CONTACTO.telefono}
              </a>
              <a href={`mailto:${CONTACTO.email}`} className="font-semibold text-white underline">
                {CONTACTO.email}
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
