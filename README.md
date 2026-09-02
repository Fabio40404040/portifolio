# Portfólio — Fabio

Portfólio profissional de Fabio, desenvolvedor Full Stack. O projeto apresenta trabalhos selecionados, habilidades, processo de desenvolvimento e formas de contato.

## Tecnologias

- HTML semântico
- CSS responsivo
- JavaScript moderno
- Vite para desenvolvimento e geração da versão de produção

## Executar localmente

```bash
npm install
npm run dev
```

Para gerar a versão final:

```bash
npm run build
```

## Estrutura principal

```text
public/                 Arquivos públicos e foto exibida no site
src/assets/             Fontes e imagens de trabalho
src/components/         Componentes reutilizáveis
src/config/             Links e configurações de contato
src/data/               Perfil, habilidades e projetos
src/interactions.js     Menu, filtros e animações
src/portfolio.js        Montagem do conteúdo da página
src/main.js             Ponto de entrada da aplicação
src/style.css           Estilos do portfólio
index.html              Estrutura HTML principal
```

## Personalização

- Informações pessoais: `src/data/profile.js`
- Projetos: `src/data/projects.js`
- Habilidades e processo: `src/data/skills.js`
- E-mail e redes sociais: `src/config/site.js`
- Foto exibida no site: `public/images/perfil.png`

As imagens originais de trabalho ficam organizadas em `src/assets/img`.
