import nextJest from "next/jest.js";

const createJestConfig = nextJest({
	dir: "./",
});

const config = {
	testEnvironment: "jsdom",
	setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
	collectCoverageFrom: [
		"components/**/*.{ts,tsx}",
		"app/**/*.{ts,tsx}",
		"!**/*.styles.ts", // Exclude styling files from logic coverage
	],
	coverageThreshold: {
		global: {
			branches: 50,
			functions: 50,
			lines: 50,
			statements: 50,
		},
	},
};

export default createJestConfig(config);
