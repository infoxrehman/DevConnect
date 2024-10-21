import { Turtle } from 'lucide-react';

/** @type {import('next').NextConfig} */
const nextConfig = {

// ADDED ON 21-10-2024 by watching Elliott Chong video
    typescript: {
        ignoreBuildErrors:true,
    },
    eslint:{
        ignoreDuringBuilds: true,
    },
};


export default nextConfig;
