import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
    experimental: {
        reactCompiler: true
    },
    images: {
        remotePatterns: [{
            hostname: 'avatar.vercel.sh',
            protocol: 'https',
        }]
    }
};

export default nextConfig;
