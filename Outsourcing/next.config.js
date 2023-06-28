module.exports = {
  trailingSlash: true,
  exportPathMap: async function (
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId }
  ) {
    return {
      "/": { page: "/" },
      "/services": { page: "/services" },
      "/contact-us": { page: "/contact-us" },
      "/portfolio": { page: "/portfolio" },
      "/portfolio/001": { page: "/portfolio/[id]" },
      "/portfolio/002": { page: "/portfolio/[id]" },
      "/portfolio/003": { page: "/portfolio/[id]" },
      "/portfolio/004": { page: "/portfolio/[id]" },
      "/portfolio/005": { page: "/portfolio/[id]" },
    };
  },
};
