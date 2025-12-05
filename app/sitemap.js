import { services } from "@/data/services";
import { serviceAreas } from "@/data/serviceAreas";

export default async function sitemap() {
  const baseUrl = "https://queencreekyardpros.com";

  const staticPages = ["", "/services", "/service-areas"].map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date().toISOString(),
    changeFrequency: "weekly",
    priority: 1.0,
  }));

  const servicePages = services.map((s) => ({
    url: `${baseUrl}/services/${s.slug}`,
    lastModified: new Date().toISOString(),
    changeFrequency: "weekly",
    priority: 0.9,
  }));

  const cityPages = serviceAreas.map((c) => ({
    url: `${baseUrl}/service-areas/${c.slug}`,
    lastModified: new Date().toISOString(),
    changeFrequency: "weekly",
    priority: 0.9,
  }));

  return [...staticPages, ...servicePages, ...cityPages];
}
