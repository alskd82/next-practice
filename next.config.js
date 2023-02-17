/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["via.placeholder.com"], // 외부 도메인의 에셋을 불러올 때 작성해야 함 
  }
}

module.exports = nextConfig
