/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true, // nodig voor export
  }, 
  basePath: '/MonaPigga'
};

module.exports = nextConfig;
