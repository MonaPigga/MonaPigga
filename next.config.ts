/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true, // nodig voor export
  },
  basePath: '/MonaPigga', // heel belangrijk voor GitHub Pages
};

module.exports = nextConfig;
