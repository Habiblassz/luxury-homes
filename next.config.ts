import type { NextConfig } from "next";
import styled, { isStyledComponent } from "styled-components";

const nextConfig: NextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: "http",
				hostname: "static.photos",
				port: "",
				pathname: "/**",
			},
		],
	},
	compiler: { styledComponents: true },
};

export default nextConfig;
