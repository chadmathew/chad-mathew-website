module.exports = {
  siteUrl: "https://www.chadmathew.com", 
  generateRobotsTxt: true,
  sitemapSize: 7000,
  changefreq: "daily",
  priority: 0.7,
  exclude: ["/admin", "/secret"],
  robotsTxtOptions: {
    policies: [
      { userAgent: "*", allow: "/" },
      { userAgent: "*", disallow: ["/admin", "/secret"] },
    ],
    additionalSitemaps: [
      "https://www.chadmathew.com/sitemap.xml",
    ],
  },
};
