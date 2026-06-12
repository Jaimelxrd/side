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
  // ⭐ NOVAS LINHAS - Resolvem o erro n.cache is not a function
  staticPageGenerationTimeout: 1,
  generateBuildId: async () => {
    return 'build-' + Date.now()
  },
  // ⭐ NOVA LINHA - Desabilita otimização de rotas API
  experimental: {
    serverComponentsExternalPackages: ['@prisma/client', '@enso/database'],
  },
  webpack: (config) => {
    config.resolve.alias['react'] = path.resolve(__dirname, '../../node_modules/react');
    config.resolve.alias['react-dom'] = path.resolve(__dirname, '../../node_modules/react-dom');
    config.resolve.alias['react-dom/server'] = path.resolve(__dirname, '../../node_modules/react-dom/server');
    return config;
  },
};

export default nextConfig;