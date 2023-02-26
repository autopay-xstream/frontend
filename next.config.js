/** @type {import('next').NextConfig} */
module.exports = {
  webpack5: true,
  webpack: config => {
    config.experiments.topLevelAwait = true;
    config.resolve.fallback = {
      fs: false,
      path: false,
      os: false
    };

    return config;
  }
};
