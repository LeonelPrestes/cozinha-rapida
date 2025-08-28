import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="gap-5 h-screen flex flex-col items-center bg-gray-100">
      <header className="h-16 sm:h-32 md:h-40 flex items-center justify-center text-black">
        <h1 className="text-l sm:text-xl md:text-2xl">Cozinha Rápida</h1>
      </header>

      <div className="gap-2 w-10/12 h-16 sm:h-32 md:h-40 bg-gray-300 flex flex-col items-center justify-center text-black">
        <h1>Ícone</h1>
        <h1>Garçom</h1>
        <h3>Interface para seleção e envio de pedidos</h3>
        <div>
          <Link href="/garcom">
            <h1>Acessar modo garçom</h1>
          </Link>
        </div>
      </div>

      <div className="gap-2 w-10/12 h-16 sm:h-32 md:h-40 bg-gray-300 flex flex-col items-center justify-center text-black">
        <h1>Cozinha</h1>
        <div>
          <Link href="/cozinha">
            <h1>Acessar modo cozinha</h1>
          </Link>
        </div>
      </div>
    </div>
  );
}
