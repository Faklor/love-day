/** @type {import('next').NextConfig} */
const nextConfig = { 
    output: 'export',
    basePath: '/love-day',
    assetPrefix: '/love-day',
    images: {
      unoptimized: true,
    },
    // Отключаем телеметрию, если хотите
    typescript: {
      ignoreBuildErrors: true,
    },
    eslint: {
      ignoreDuringBuilds: true,
    },
};

export default nextConfig;
