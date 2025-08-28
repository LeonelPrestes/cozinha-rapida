"use client"

import { useEffect, useState } from "react"
import Link from "next/link"

export default function Garcom() {
  const [itens, setItens] = useState([])

  useEffect(() => {
    fetch("/api/cardapio")
      .then((res) => res.json())
      .then((data) => setItens(data))
      .catch((err) => console.error(err))   
  }, [])

  return (
    <div className="bg-blue-100 min-h-screen">
      <header className="fixed top-0 left-0 right-0 h-20 p-4 bg-cyan-100 shadow-sm flex justify-between items-center">
        <Link href="/">
          <div className="bg-white p-2 rounded-2xl cursor-pointer">
            {/* Substituir por um ícone depois */}
            Voltar
          </div>
        </Link>
        <div className="bg-emerald-400 p-2 rounded-2xl">
          <button>Enviar</button>
        </div>
      </header>

      <main className="pt-24 px-4">
        <h1 className="text-2xl mb-4 text-center">Selecione os Itens</h1>

        <div className="grid grid-cols-2 gap-4 max-w-md mx-auto">
          {itens.map((item) => (
            <div
              key={item.id}
              className="bg-white p-4 rounded-lg shadow hover:scale-105 transition-transform"
            >
              <h2 className="text-lg font-bold mb-2">{item.title}</h2>
              <p className="text-sm text-gray-600 mb-2">{item.details}</p>
              <p className="font-semibold text-emerald-600">R$ {item.preco.toFixed(2)}</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  )
}
