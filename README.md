# Caueh Mota — Portfólio

> Desenvolvedor web em Fortaleza, CE · Estudante de ADS na UNIFOR (turma de 2028)

Site pessoal com meus projetos, habilidades e contato. Bilíngue (PT/EN), tema escuro, sem framework, sem build, sem dependências.

**Personal portfolio — bilingual (PT/EN), dark theme, no frameworks, no build step.**

## Destaques

- **Bilíngue de verdade** — todo texto visível existe em português e inglês; o botão PT/EN troca tudo na hora e o site abre no idioma do navegador (escolha salva em `localStorage`).
- **Tema escuro com tokens** — as cores ficam em variáveis CSS no `:root` do `style.css`; mudar a paleta é editar meia dúzia de linhas.
- **Responsivo** — grid de projetos, timeline e contato se reorganizam até ~400 px de largura, sem rolagem horizontal.
- **Sem JavaScript pesado** — só o toggle de idioma e o relógio local de Fortaleza; nada de bundler.
- **Acessível** — foco visível no teclado, botões com `aria-pressed`, `prefers-reduced-motion` respeitado.

## Estrutura

| Arquivo | Descrição |
| --- | --- |
| `index.html` | Conteúdo da página (escrito em PT — o dicionário PT é capturado do próprio HTML) |
| `style.css` | Todo o estilo — tokens de cor, tipografia, layout responsivo |
| `script.js` | Troca de idioma PT ⇄ EN e relógio local (traduções EN ficam aqui) |

## Stack

| Camada | Escolha |
| --- | --- |
| Marcação e estilo | HTML5 + CSS3 (custom properties, grid, flexbox, `clamp()`) |
| Tipografia | [Syne](https://fonts.google.com/specimen/Syne) (títulos) · [IBM Plex Sans](https://fonts.google.com/specimen/IBM+Plex+Sans) (texto) · [IBM Plex Mono](https://fonts.google.com/specimen/IBM+Plex+Mono) (rótulos) |
| Interatividade | JavaScript puro (i18n por `data-i18n`, `Intl.DateTimeFormat`) |
| Hospedagem | GitHub Pages |

## Rodando localmente

Basta abrir o `index.html` no navegador — não precisa de servidor nem de instalação.

## Publicando no GitHub Pages

1. No GitHub, vá em **Settings → Pages**.
2. Em **Source**, escolha **Deploy from a branch**.
3. Selecione a branch `main` e a pasta `/ (root)`, e salve.

## Editando o conteúdo

- Textos em português: direto no `index.html`.
- Traduções em inglês: no objeto `I18N.en` em `script.js`.
- Cores e fontes: nas variáveis no topo do `style.css` (`:root`).
