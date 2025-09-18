import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	compiler: {
		styledComponents: true,
	},
	reactStrictMode: true,
	swcMinify: true,
};

export default nextConfig;
