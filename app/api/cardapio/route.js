import { prisma } from '@/lib/prisma'

export async function GET() {
  try {
    const itens = await prisma.cardapio.findMany()
    return Response.json(itens)
  } catch (error) {
    console.error(error)
    return new Response(JSON.stringify({ error: 'Erro ao buscar itens' }), { status: 500 })
  }
}