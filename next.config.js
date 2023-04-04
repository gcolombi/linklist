/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        domains: [
            'images.unsplash.com',
            'github.com/devicons/devicon/blob/master/icons/',
            'pbs.twimg.com'
        ]
    }
}

module.exports = nextConfig