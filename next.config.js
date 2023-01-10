/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // img url
  images: {
    domains: ['upload.wikimedia.org', 'images.unsplash.com'],
  },
  // images: {
  //   remotePatterns: [
  //     {
  //       protocol: 'https',
  //       hostname: 'upload.wikimedia.org***',
  //       hostname: 'pixabay.com***',
  //     },
  //   ],
  // },

  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: [
        {
          loader: "@svgr/webpack",
          options: {
            native: true,
          },
        },
      ],

      use: ["@svgr/webpack"],
    });

    return config;
  },
};

module.exports = nextConfig;
