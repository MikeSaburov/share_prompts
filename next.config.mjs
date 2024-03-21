// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   // experimental: {
//   //   appDir: true,
//   //   serverComponentsExternalPackages: ['mongoose'],
//   // },
//   images: {
//     remotePatterns: [
//       {
//         hostname: 'lh3.googleusercontent.com',
//       },
//     ],
//     // domains: [''],
//   },
//   // webpack(config) {
//   //   config.experiments = {
//   //     ...config.experiments,
//   //     topLevelAwait: true,
//   //   };
//   //   return config;
//   // },
// };

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
    serverComponentsExternalPackages: ['mongoose'],
  },
  images: {
    domains: ['lh3.googleusercontent.com'],
  },
  webpack(config) {
    config.experiments = {
      ...config.experiments,
      topLevelAwait: true,
    };
    return config;
  },
};
export default nextConfig;
