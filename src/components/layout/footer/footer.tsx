import { Logo } from "@/components/logo";
import Link from "next/link";
 

export function Footer() {
  return (
    <footer className="bg-gray-500">
      <div className="container">
        <div className="flex justify-between gap-8 py-8">
          <Logo />

          <nav className="flex flex-col md:flex-row md:items-center gap-4 text-sm text-blue-100">
            <Link
              href="/termos-de-uso"
              className="hover:text-blue-200 transition-colors"
            >
              Termos de uso
            </Link>
            <Link
              href="/politica-de-privacidade"
              className="hover:text-blue-200 transition-colors"
            >
              Politica de Privacidade
            </Link>
            <Link
              href="/enviar-feedback"
              className="hover:text-blue-200 transition-colors"
            >
              Enviar feedback
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
