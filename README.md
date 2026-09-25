# Lacrei Saúde — Desafio Front-end

Implementação de uma interface de busca e visualização de profissionais de saúde, desenvolvida como parte de um desafio técnico de Front-end proposto pela Lacrei Saúde.

O projeto foi desenvolvido com foco em responsividade, acessibilidade, componentização, organização do código e fidelidade à identidade visual apresentada no desafio.

## 🔗 Demo

[Visualizar projeto](https://desafio-lacrei-saude-sand.vercel.app)

## 🛠️ Tecnologias

- Next.js
- TypeScript
- React
- styled-components
- Material UI Icons
- Jest
- Testing Library

## 📋 Funcionalidades

- Navegação pelo Header e Footer
- Busca de profissionais por especialidade e localização
- Exibição de profissionais em cards
- Visualização de todos os profissionais
- Página dinâmica de perfil
- Informações detalhadas do profissional
- Botão de agendamento
- Feedback visual após o agendamento
- Menu de ajuda acessível
- Navegação por teclado
- Layout responsivo para desktop, tablet e mobile

## 📁 Estrutura do projeto

```text
src/
└── app/
    ├── components/
    │   ├── __tests__/
    │   │   ├── Header.test.tsx
    │   │   ├── Footer.test.tsx
    │   │   └── ProfileActions.test.tsx
    │   ├── Footer.tsx
    │   ├── Header.tsx
    │   ├── ProfessionalCard.tsx
    │   ├── ProfileActions.tsx
    │   ├── ScheduleButton.tsx
    │   └── Toast.tsx
    │
    ├── data/
    │   └── professionals.ts
    │
    ├── professionals/
    │   └── [id]/
    │       └── page.tsx
    │
    ├── styles/
    │   └── tokens.ts
    │
    ├── types/
    │   └── professional.ts
    │
    ├── globals.css
    ├── layout.tsx
    ├── page.tsx
    └── page.module.css

public/
└── assets/
    └── images/
        ├── avatar/
        ├── hero-lacrei.webp
        └── logo_lacrei.png

jest.config.ts
jest.setup.ts
```

## 🚀 Como executar o projeto

### Pré-requisitos

- Node.js
- npm

### Instalação

Clone o repositório:

```bash
git clone https://github.com/Renatolbn/lacrei-saude-frontend.git
```

Entre na pasta:

```bash
cd lacrei-saude-frontend
```

Instale as dependências:

```bash
npm install
```

Execute o projeto em ambiente de desenvolvimento:

```bash
npm run dev
```

A aplicação estará disponível em:

```text
http://localhost:3000
```

## 🏗️ Build de produção

Para gerar a versão de produção:

```bash
npm run build
```

Para executar a versão de produção localmente:

```bash
npm run start
```

## 🧪 Testes

Os testes automatizados foram desenvolvidos utilizando Jest e Testing Library.

Para executar:

```bash
npm test
```

### Componentes testados

- Header
- Footer
- ProfileActions

### Resultado

Atualmente, o projeto possui 3 suítes de teste e 3 testes automatizados.

Resultado da última execução:

```text
Test Suites: 3 passed, 3 total
Tests:       3 passed, 3 total
```

## ♿ Acessibilidade

A implementação considera práticas de acessibilidade, incluindo:

- HTML semântico
- Associação entre labels e campos de formulário
- Texto alternativo para imagens
- Uso de `aria-hidden` em ícones decorativos
- Estados acessíveis em elementos interativos
- Navegação por teclado
- Estados de foco visíveis
- Controle de foco ao fechar o menu de ajuda
- Uso das cores seguindo as referências do Marsha Design System

### Validação

A aplicação foi avaliada utilizando o Lighthouse em ambiente mobile.

Resultado obtido:

| Categoria | Resultado |
|---|---:|
| Accessibility | 100 |
| Best Practices | 100 |
| SEO | 100 |
| Performance | 70 |

A pontuação de acessibilidade atingiu 100 no teste realizado.

A análise de performance identificou oportunidades de melhoria, principalmente relacionadas à estabilidade visual da página durante o carregamento. Essa otimização foi mantida como uma etapa posterior, sem comprometer a implementação das funcionalidades e requisitos principais do projeto.

## 📱 Responsividade

A interface foi desenvolvida seguindo uma abordagem responsiva, contemplando:

- Desktop
- Tablet
- Mobile

Os principais componentes adaptam sua estrutura, dimensões e espaçamentos de acordo com o tamanho da tela.

A página de perfil também possui comportamento específico para dispositivos menores, reorganizando imagem, informações e ações para melhorar a experiência de uso.

## 🎨 Decisões visuais e técnicas

### Design System

Foram utilizados tokens centralizados para cores, tipografia e espaçamentos:

```text
src/app/styles/tokens.ts
```

Essa abordagem facilita a manutenção e mantém maior consistência visual entre os componentes.

### Tipografia

A aplicação utiliza a fonte Nunito, seguindo a referência visual utilizada no projeto.

### Componentização

Foram criados componentes reutilizáveis para elementos como:

- Header
- Footer
- Cards de profissionais
- Ações de perfil
- Botão de agendamento
- Feedback de agendamento

A página dinâmica utiliza os mesmos padrões visuais e componentes da página principal sempre que aplicável.

### Dados

Os profissionais utilizados na aplicação estão atualmente armazenados em dados locais:

```text
src/app/data/professionals.ts
```

Essa abordagem permite simular o funcionamento da busca e das páginas de perfil sem depender de uma API externa.

A estrutura foi organizada de forma que uma futura integração com uma API possa substituir a fonte de dados local.

### Imagens

As imagens utilizadas no projeto foram organizadas na pasta pública de assets.

A imagem principal do Hero foi convertida para WebP para reduzir o tamanho do arquivo e melhorar o carregamento.

Os avatares dos profissionais também foram convertidos para WebP e organizados em uma pasta específica:

```text
public/assets/images/avatar/
```

## 🔄 Estratégia de rollback

Em um ambiente de produção, o rollback seria realizado utilizando o histórico de deployments da Vercel.

Caso uma nova versão apresentasse algum problema, uma versão anterior estável poderia ser restaurada através do histórico de deployments, retornando a aplicação ao estado anterior ao problema.

O histórico de commits do Git também permite identificar e reverter alterações específicas realizadas durante o desenvolvimento.

## 🚀 Deploy

O projeto foi preparado para deploy na Vercel.

Após conectar o repositório à Vercel, novos commits na branch principal podem gerar novos deployments automaticamente.

A aplicação está publicada na Vercel:

```text
https://desafio-lacrei-saude-sand.vercel.app
```

## 📌 Considerações

Este projeto foi desenvolvido como parte de um desafio técnico de Front-end da Lacrei Saúde, com base nos requisitos, referências visuais e materiais disponibilizados para o desafio.

O objetivo da implementação foi reproduzir a experiência proposta, mantendo uma estrutura de código organizada, responsiva e acessível.

A implementação também buscou aplicar boas práticas de desenvolvimento Front-end, incluindo:

- Componentização
- Tipagem com TypeScript
- Design tokens
- Acessibilidade
- Responsividade
- Testes automatizados
- Organização de dados
- Validação com Lighthouse
- Preparação para deploy em produção

## 📄 Desafio

Os requisitos utilizados como referência durante o desenvolvimento estão disponíveis no arquivo:

```text
DESAFIO.md
```