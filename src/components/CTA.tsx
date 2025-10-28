import { CTAProps } from '@/types/props'

export default function CTA({ telefono, email }: CTAProps) {
  const whatsappLink = `https://wa.me/${telefono.replace(/\D/g, '')}`

  return (
    <div className="flex flex-col justify-center gap-4 sm:flex-row">
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center rounded-full bg-emerald-500 px-7 py-3 text-base font-semibold text-white shadow-lg shadow-emerald-200/50 transition-all duration-200 hover:-translate-y-0.5 hover:bg-emerald-500/90"
      >
        Contactar por WhatsApp
      </a>
      <a
        href={`mailto:${email}`}
        className="inline-flex items-center justify-center rounded-full bg-blue-600 px-7 py-3 text-base font-semibold text-white shadow-lg shadow-blue-200/60 transition-all duration-200 hover:-translate-y-0.5 hover:bg-blue-500"
      >
        Enviar Email
      </a>
    </div>
  )
}
