// next.config.js
const { withAIOptimizer } = require('next-ai-optimizer');

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Your existing Next.js configuration
};

module.exports = withAIOptimizer(nextConfig);