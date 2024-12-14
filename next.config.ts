import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
    experimental: {
        reactCompiler: true
    },
    images: {
        remotePatterns: [
            {
                hostname: 'avatar.vercel.sh',
                protocol: 'https'
            },
            {
                hostname: 'placehold.co',
                protocol: 'https'
            },
            {
                hostname: 'picsum.photos',
                protocol: 'https'
            }
        ]
    }
};

export default nextConfig;
