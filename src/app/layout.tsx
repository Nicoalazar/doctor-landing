import './globals.css'
import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'

export const metadata: Metadata = {
  metadataBase:new URL(
    process.env.NODE_ENV === 'production' 
      ? 'https://tudominio.com' 
      : 'http://localhost:3000'),
  title: 'Plataforma Médica',
  description: 'Tu landing personalizada como profesional de la salud.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className="bg-gray-50 text-gray-900 flex flex-col min-h-screen font-sans">
        <header className="bg-white border-b shadow-sm">
          <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2">
              <Image src="/logo.jpg" alt="Logo Plataforma Médica" width={32} height={32} />
              <span className="text-xl font-semibold">Plataforma Médica</span>
            </Link>
            <nav className="flex gap-6 text-sm">
              <Link href="/" className="hover:underline">Inicio</Link>
              <Link href="/#beneficios" className="hover:underline">Beneficios</Link>
              <Link href="/#equipo" className="hover:underline">Equipo</Link>
              <Link href="/#contacto" className="hover:underline">Contacto</Link>
            </nav>
          </div>
        </header>

        <main className="flex-grow">
          {children}
        </main>

        <footer className="bg-white border-t mt-12 text-sm text-gray-600">
          <div className="max-w-6xl mx-auto px-4 py-6 flex flex-col sm:flex-row justify-between items-center">
            <p>© {new Date().getFullYear()} Plataforma Médica. Todos los derechos reservados.</p>
            <div className="flex gap-4 mt-2 sm:mt-0">
              <Link href="/terminos" className="hover:underline">Términos</Link>
              <Link href="/privacidad" className="hover:underline">Privacidad</Link>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}
