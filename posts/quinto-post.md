---
title: "Static Site Generation (SSG) no Next.js"
date: 2025-06-13 10:20:00
description: "Entenda o que é SSG, como funciona no Next.js e exemplos práticos de uso."
image: "/assets/segundo-post.png"
author:
  name: Cristofer Carder
  avatar: /customer-02.png
---

# Static Site Generation (SSG) no Next.js

O Static Site Generation (SSG) é uma técnica onde as páginas são geradas estaticamente durante o build, resultando em arquivos HTML prontos para serem servidos rapidamente ao usuário. No Next.js, isso é feito utilizando a função `getStaticProps`.

## Como implementar SSG no Next.js
Basta exportar a função `getStaticProps` em sua página:

```tsx
export async function getStaticProps() {
  // Buscar dados em tempo de build
  return {
    props: { /* dados */ },
  }
}
```

SSG é recomendado para páginas cujo conteúdo pode ser gerado antecipadamente e não depende de dados dinâmicos a cada acesso.

## Vantagens do SSG
- Performance superior, pois as páginas são servidas como arquivos estáticos.
- Custos reduzidos de servidor.
- Ideal para conteúdo que não muda com frequência, como blogs e documentações.

## Desvantagens do SSG
- Atualizações de conteúdo exigem novo build e deploy do site.
- Não é ideal para páginas com dados altamente dinâmicos.
- Pode aumentar o tempo de build em projetos muito grandes.
- Menos flexível para personalização por usuário em tempo real.