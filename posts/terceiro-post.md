---
title: "Incremental Static Regeneration (ISR) no Next.js"
date: 2025-06-14 10:20:00
description: "Entenda o que é ISR, como funciona no Next.js e exemplos práticos de uso."
image: "/assets/segundo-post.png"
author:
  name: "Aspen Dokidis"
  avatar: "/customer-01.png"
---

# Incremental Static Regeneration (ISR) no Next.js

O Incremental Static Regeneration (ISR) é uma funcionalidade do Next.js que permite atualizar páginas estáticas após o deploy, sem precisar reconstruir todo o site. Com o ISR, você pode gerar ou atualizar páginas sob demanda, melhorando a performance e a experiência do usuário.

## Como funciona o ISR?

No Next.js, ao usar o ISR, você define um tempo de revalidação para cada página. Quando uma requisição chega após esse tempo, o Next.js gera uma nova versão da página em background e serve a versão atual até a nova estar pronta. Assim, o conteúdo está sempre atualizado sem perder os benefícios do static site.

## Exemplo de uso

```js
export async function getStaticProps() {
  // Busca dados de uma API ou banco de dados
  return {
    props: { /* dados */ },
    revalidate: 60, // revalida a cada 60 segundos
  }
}
```

## Vantagens do ISR
- Atualização automática de páginas estáticas
- Melhor performance
- Menor custo de infraestrutura
- Experiência de usuário aprimorada

O ISR é ideal para blogs, e-commerces e sites que precisam de conteúdo atualizado frequentemente, mas querem manter a performance de páginas estáticas.

## Desvantagens do ISR
- Pode haver atraso na atualização do conteúdo até a próxima revalidação
- Complexidade adicional na configuração e monitoramento
- Possíveis inconsistências temporárias entre usuários durante a atualização
- Nem todos os casos de uso se beneficiam do ISR (ex: páginas altamente dinâmicas)