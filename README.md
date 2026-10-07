# 🦷 Landing Page — Clínica Odontológica

Landing page responsiva para uma clínica odontológica, com apresentação das especialidades, seção "Sobre nós", localização no Google Maps e agendamento direto pelo WhatsApp. As seções ganham animações de entrada conforme a página é rolada.

## ✨ Funcionalidades

- **Hero** com chamada para agendamento de consulta
- **Nossas especialidades** em cards, com link "Ver mais" para uma página dedicada
- **Agendamento pelo WhatsApp**, com mensagem já preenchida, e botão de ligação direta
- **Sobre nós** com texto e ilustração
- **Localização** com mapa do Google Maps incorporado e link "Como chegar"
- **Rodapé** com mapa, navegação e contatos
- **NavBar** que destaca o link da página ou seção atual
- **Animações de rolagem** com Motion, respeitando a opção "reduzir movimento" do sistema
- **Layout responsivo** para celular, tablet e desktop

## 🛠️ Tecnologias

- [Next.js 16](https://nextjs.org) (App Router)
- [React 19](https://react.dev)
- [TypeScript](https://www.typescriptlang.org)
- [Tailwind CSS 4](https://tailwindcss.com)
- [Motion](https://motion.dev) (Framer Motion)

## 🚀 Como rodar o projeto

Pré-requisito: [Node.js](https://nodejs.org) 20 ou superior.

```bash
# Clonar o repositório
git clone <url-do-repositorio>
cd land-page-clinica

# Instalar as dependências
npm install

# Rodar em modo de desenvolvimento
npm run dev
```

Depois, abra [http://localhost:3000](http://localhost:3000) no navegador.

### Outros comandos

| Comando         | Descrição                            |
| --------------- | ------------------------------------ |
| `npm run dev`   | Inicia o servidor de desenvolvimento |
| `npm run build` | Gera a versão de produção            |
| `npm run start` | Roda a versão de produção            |
| `npm run lint`  | Verifica o código com o ESLint       |

## 📁 Estrutura

```
src/
├── app/
│   ├── page.tsx                  # Página inicial
│   ├── nossasEspecialidade/      # Página de especialidades
│   ├── layout.tsx                # Layout raiz
│   ├── globals.css               # Cores e estilos globais
│   └── icon.svg                  # Favicon
├── components/
│   ├── layout/                   # NavBar e Footer
│   ├── section/                  # Hero, Specialties, About, Location
│   ├── ui/                       # Botões, cards e logo
│   └── motion/                   # Animações de rolagem
└── lib/
    └── contact.ts                # Telefone, WhatsApp e endereço
```

## ⚙️ Personalização

- **Contatos e endereço:** edite `src/lib/contact.ts` para trocar o telefone, o número do WhatsApp, a mensagem padrão e o endereço exibido no mapa.
- **Cores:** as cores do tema ficam em `src/app/globals.css` (`--background`, `--foreground` e `--accent`).
- **Especialidades:** a lista fica em `src/components/section/Specialties.tsx`.
- **Imagens:** ficam em `public/images/`.

## 📄 Licença

Este projeto é de uso pessoal.
