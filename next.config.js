/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
    // pageExtensions: ['ts'],

    experimental: {
        serverActions: true,
        serverComponentsExternalPackages: ["mongoose"],
    },
    images: {
        remotePatterns: [
        {
            protocol: "https",
            hostname: "*",
        },
        ],
    },
}

module.exports = nextConfig
