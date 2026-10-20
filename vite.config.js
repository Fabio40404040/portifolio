
import { defineConfig, loadEnv } from 'vite';

export default defineConfig(({ mode }) => {
  // Endereço público do portfólio (ex.: https://fabio.dev), usado na imagem
  // de compartilhamento do LinkedIn/WhatsApp. Se mudar de domínio, troque o
  // endereço abaixo ou defina VITE_SITE_URL na hospedagem.
  const env = loadEnv(mode, process.cwd(), '');
  const siteUrl = (env.VITE_SITE_URL || 'https://portifolio-e9b.pages.dev').replace(/\/$/, '');

  return {
    // Caminho absoluto (raiz do domínio) — é assim que Vercel/Netlify
    // servem o site, e simplifica montar o link público de cada foto.
    base: '/',
    plugins: [
      {
        name: 'site-url',
        transformIndexHtml: (html) => html.replaceAll('%VITE_SITE_URL%', siteUrl),
      },
    ],
    build: {
      outDir: 'dist',
      assetsDir: 'assets',
      // Sempre gera um arquivo de verdade pra cada imagem (nunca embute
      // como base64), pra garantir que toda imagem tenha um link público.
      assetsInlineLimit: 0
    }
  };
});
