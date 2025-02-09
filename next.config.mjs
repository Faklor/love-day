/** @type {import('next').NextConfig} */
const nextConfig = { 
    output: 'export', // Статическая сборка для GitHub Pages
    images: {
      unoptimized: true, // Для работы с GitHub Pages
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
