/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true, // nodig voor export
  }, // heel belangrijk voor GitHub Pages
};

module.exports = nextConfig;
