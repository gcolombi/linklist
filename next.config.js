/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        domains: [
            'images.unsplash.com',
            'raw.githubusercontent.com',
            'pbs.twimg.com'
        ]
    }
}

module.exports = nextConfig