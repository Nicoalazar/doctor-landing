import { CTAProps } from '@/types/props'

export default function CTA({ telefono, email }: CTAProps) {
  const whatsappLink = `https://wa.me/${telefono.replace(/\D/g, '')}`

  return (
    <div className="flex flex-col sm:flex-row justify-center gap-4">
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-500 hover:bg-green-600 text-white text-sm px-6 py-2 rounded shadow"
      >
        Contactar por WhatsApp
      </a>
      <a
        href={`mailto:${email}`}
        className="bg-blue-500 hover:bg-blue-600 text-white text-sm px-6 py-2 rounded shadow"
      >
        Enviar Email
      </a>
    </div>
  )
}
