import nextConfig from "eslint-config-next";

const config = [
  { ignores: [".next/**", "node_modules/**", "public/**", "data/**"] },
  ...nextConfig,
];

export default config;
