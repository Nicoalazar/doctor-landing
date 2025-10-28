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
    <div className="bg-slate-50 text-slate-900">
      <section className="bg-gradient-to-b from-white via-white to-blue-50/50">
        <div className="mx-auto flex max-w-6xl flex-col gap-16 px-6 py-24 lg:flex-row lg:items-center">
          <div className="flex-1 space-y-8">
            <span className="text-sm font-semibold uppercase tracking-[0.35em] text-blue-600">
              Landing personalizada para profesionales de la salud
            </span>
            <h1 className="max-w-2xl text-4xl font-semibold leading-tight text-slate-900 sm:text-5xl lg:text-6xl">
              Conecta con tus pacientes y fortalece tu práctica privada
            </h1>
            <p className="max-w-2xl text-lg leading-relaxed text-slate-600">
              Gestiona tu presencia digital con una página clara, accesible y lista para compartir. Comparte tu
              especialidad, experiencia y canales de contacto con el estilo que tus pacientes esperan.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Link
                href="#contacto"
                className="inline-flex items-center justify-center rounded-full bg-blue-600 px-8 py-3 text-center text-base font-semibold text-white shadow-lg shadow-blue-200/60 transition-all duration-200 hover:-translate-y-0.5 hover:bg-blue-500"
              >
                Solicitar mi landing
              </Link>
              <Link
                href="#equipo"
                className="inline-flex items-center justify-center rounded-full border border-blue-200 bg-white px-8 py-3 text-center text-base font-semibold text-blue-700 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-blue-300 hover:text-blue-600"
              >
                Ver ejemplos reales
              </Link>
            </div>
          </div>
          <div className="flex-1 rounded-3xl border border-blue-100 bg-white/80 p-10 shadow-xl shadow-blue-100/40">
            <p className="mb-6 text-sm font-semibold uppercase tracking-wide text-blue-700">Incluye:</p>
            <ul className="space-y-4 text-base text-blue-900">
              <li className="flex items-start gap-2">
                <span className="mt-2 h-2.5 w-2.5 rounded-full bg-blue-500" aria-hidden="true" />
                Perfil profesional con foto y descripción personalizada
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-2 h-2.5 w-2.5 rounded-full bg-blue-500" aria-hidden="true" />
                Botones de contacto directo a WhatsApp y correo electrónico
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-2 h-2.5 w-2.5 rounded-full bg-blue-500" aria-hidden="true" />
                Sección de beneficios y testimonios adaptables a tu especialidad
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-2 h-2.5 w-2.5 rounded-full bg-blue-500" aria-hidden="true" />
                API pública para reutilizar tu información en otras experiencias digitales
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section id="beneficios" className="mx-auto max-w-6xl px-6 py-20">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-semibold text-slate-900 sm:text-4xl">Beneficios de tu landing médica</h2>
          <p className="mt-4 text-lg text-slate-600">
            Diseñada para profesionales que priorizan la confianza, la claridad y una comunicación directa con sus pacientes.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {BENEFICIOS.map((beneficio) => (
            <div
              key={beneficio.titulo}
              className="flex h-full flex-col gap-4 rounded-3xl border border-slate-200 bg-white/90 p-8 text-left shadow-md shadow-slate-200/60"
            >
              <h3 className="text-xl font-semibold text-slate-900">{beneficio.titulo}</h3>
              <p className="text-base leading-7 text-slate-600">{beneficio.descripcion}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="equipo" className="bg-white">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-semibold text-slate-900 sm:text-4xl">Ejemplos de perfiles profesionales</h2>
            <p className="mt-4 text-lg text-slate-600">
              Cada landing se adapta al estilo y especialidad de cada profesional, manteniendo una estructura clara.
            </p>
          </div>
          <div className="grid gap-10 md:grid-cols-2">
            {medicos.map((medico) => (
              <MedicoCard key={medico.slug} medico={medico} />
            ))}
          </div>
        </div>
      </section>

      <section id="contacto" className="mx-auto max-w-4xl px-6 py-20">
        <div className="rounded-4xl bg-gradient-to-r from-blue-600 via-blue-600 to-blue-500 px-10 py-16 text-center text-white shadow-2xl shadow-blue-300/40">
          <h2 className="text-3xl font-semibold sm:text-4xl">¿Listo para lanzar tu landing?</h2>
          <p className="mt-5 text-lg text-blue-100">
            Escríbenos y coordinemos juntos la puesta en marcha. Recibirás tu página optimizada con la información clave para tus pacientes.
          </p>
          <div className="mt-10 flex justify-center">
            <div className="flex flex-col items-center gap-3 text-base">
              <a
                href={`https://wa.me/${CONTACTO.telefono.replace(/\D/g, '')}`}
                className="font-semibold text-white transition-colors duration-200 hover:text-blue-50"
              >
                WhatsApp: {CONTACTO.telefono}
              </a>
              <a
                href={`mailto:${CONTACTO.email}`}
                className="font-semibold text-white transition-colors duration-200 hover:text-blue-50"
              >
                {CONTACTO.email}
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
