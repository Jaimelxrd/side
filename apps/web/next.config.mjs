import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  
  // ⭐ FORÇAR NÃO PRÉ-RENDERIZAR NADA ⭐
  staticPageGenerationTimeout: 1,
  
  generateBuildId: async () => {
    return 'build-' + Date.now()
  },
  
  // ⭐ IMPEDIR PRÉ-RENDERIZAÇÃO DE PÁGINAS ⭐
  trailingSlash: false,
  
  experimental: {
    serverComponentsExternalPackages: ['@prisma/client', '@enso/database'],
    // ⭐ DESABILITAR OTIMIZAÇÕES QUE CAUSAM PRÉ-RENDERIZAÇÃO ⭐
    disableOptimizedLoading: true,
    webpackBuildWorker: false,
  },
  
  webpack: (config) => {
    config.resolve.alias['react'] = path.resolve(__dirname, '../../node_modules/react');
    config.resolve.alias['react-dom'] = path.resolve(__dirname, '../../node_modules/react-dom');
    config.resolve.alias['react-dom/server'] = path.resolve(__dirname, '../../node_modules/react-dom/server');
    return config;
  },
};

export default nextConfig;