import nextConfig from "eslint-config-next";

const config = [
  { ignores: [".next/**", "node_modules/**", "public/**", "data/**", "android/**", "ios/**"] },
  ...nextConfig,
];

export default config;
