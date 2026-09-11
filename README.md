# Portfólio — Caueh Mota

Site de portfólio pessoal, bilíngue (PT/EN), construído com HTML, CSS e JavaScript puros — sem frameworks e sem build.

**Personal portfolio site, bilingual (PT/EN), built with plain HTML, CSS and JavaScript — no frameworks, no build step.**

## Estrutura

| Arquivo | Descrição |
| --- | --- |
| `index.html` | Conteúdo da página (escrito em PT; o EN vem do dicionário de traduções) |
| `style.css` | Todo o estilo — tema escuro, tipografia, layout responsivo |
| `script.js` | Troca de idioma PT ⇄ EN (persistida em `localStorage`) |

## Rodando localmente

Basta abrir o `index.html` no navegador — não precisa de servidor nem de instalação.

## Publicando no GitHub Pages

1. No GitHub, vá em **Settings → Pages**.
2. Em **Source**, escolha **Deploy from a branch**.
3. Selecione a branch `main` e a pasta `/ (root)`, e salve.
4. Em alguns minutos o site estará em `https://vscaueh.github.io/Portf-lio/`.

## Editando o conteúdo

- Textos em português: direto no `index.html`.
- Traduções em inglês (e os textos PT restaurados após trocar de idioma): no objeto `translations` em `script.js`.
- Cores e fontes: nas variáveis no topo do `style.css` (`:root`).
- **Lembrete:** atualize o link do LinkedIn na seção de contato do `index.html`.
