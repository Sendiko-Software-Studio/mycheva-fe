/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'external-content.duckduckgo.com'
            }
        ],
        domains: ['cdn-icons-png.flaticon.com', 'mycheva-fe-three.vercel.app'], // Add the domain of the external image
    }
};

export default nextConfig;
