import { Button } from "@/components/ui/button";
import { ArrowRight, Store } from "lucide-react";
import Link from "next/link";

export function CallToActionSection() {
  return (
    <section className="relative py-24 bg-gradient-to-b from-cyan-950/20 to-gray-700">
      <div className="absolute inset-0 bg-[url('/background-footer.svg')] bg-cover bg-center bg-no-repeat opacity-90" />
      <div className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 top-0 p-4 bg-cyan-300 w-fit rounded-full">
        <Store className="text-cyan-100" />
      </div>

      <div className="container relative">
        <div className="flex flex-col items-center gap-6 text-center">
          <h2 className="text-gray-100 font-sans text-balance md:max-w-md text-heading-xl">
            Crie uma loja online e inicie suas vendas ainda hoje
          </h2>

          <Button variant="primary" asChild className="mt-6">
            <Link href="/criar-loja">
              Criar loja grátis
              <ArrowRight />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
