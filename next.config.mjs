//next.config.mjs
/** @type {import('next').NextConfig} */

//const isProd = process.env.NODE_ENV === 'production';
const nextConfig = {
    output: 'export',
    reactStrictMode: true 
    //assetPrefix: isProd ? '/vince115.github.io/' : '',
    //basePath: isProd ? '/vince115.github.io' : '',
};

export default nextConfig;
