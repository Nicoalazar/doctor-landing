import { NextResponse } from 'next/server'
import { getMedicos } from '@/lib/medicos'

export async function GET() {
  const medicos = getMedicos()
  return NextResponse.json(medicos)
}
