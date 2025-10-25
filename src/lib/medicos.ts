import medicos from '@/data/medicos.json'
import { Medico } from '@/types/medico'

export function getMedicos(): Medico[] {
  return medicos
}

export function getMedicoBySlug(slug: string): Medico | undefined {
  return medicos.find((m) => m.slug === slug)
}
