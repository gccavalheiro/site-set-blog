import { ArrowRight, Clock, Store } from "lucide-react";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="container relative flex items-center justify-center mt-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 min-h-[20rem] md:h-[36rem] items-center">
        <div className="flex flex-col items-center justify-center gap-4 md:items-start">
          <h1 className="text-gray-100 text-heading-hg max-md:text-center font-sans">
            Venda seus produtos como afiliado em um único lugar
          </h1>

          <div className="flex flex-col items-center justify-center gap-4 md:items-start">
            <div>
              <div className="flex items-center gap-2">
                <Clock className="text-cyan-100 h-4 w-4" />
                <span className="text-gray-200">
                  Crie o seu site em menos de 5 minutos
                </span>
              </div>

              <div className="flex items-center gap-2">
                <Store className="text-cyan-100 h-4 w-4" />
                <span className="text-gray-200">
                  Acompanhe e otimize seu negócio online
                </span>
              </div>
            </div>

            <div className="text-white flex flex-col gap-2 mt-5 items-center md:items-start">
              <Button className="rounded-full w-fit" asChild>
                <Link href="/criar-loja">
                  Criar loja grátis
                  <ArrowRight />
                </Link>
              </Button>

              <p className="text-gray-300 text-body-xs">
                Não precisa de cartão de crédito
              </p>
            </div>
          </div>
        </div>

        <div className="relative hidden md:h-full md:order-last items-center md:justify-center md:flex">
          <Image
            src="/hero-section.svg"
            alt="Ilustração com ícones de store, tag e sacola"
            width={200}
            height={400}
            className="h-full w-auto object-contain"
          />
        </div>
      </div>
    </section>
  );
}
