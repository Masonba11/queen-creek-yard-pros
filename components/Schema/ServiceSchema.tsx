interface ServiceSchemaProps {
  title: string;
  keyword: string;
  city?: string;
  description: string;
  geo?: { lat: number; lng: number };
  slug: string;
}

export default function ServiceSchema({
  title,
  keyword,
  city = "Queen Creek",
  description,
  geo = { lat: 33.2487, lng: -111.6343 },
  slug,
}: ServiceSchemaProps) {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: keyword,
    name: title,
    provider: {
      "@type": "LocalBusiness",
      name: "Queen Creek Yard Pros",
      areaServed: city,
      geo: {
        "@type": "GeoCoordinates",
        latitude: geo.lat,
        longitude: geo.lng,
      },
    },
    description: description,
    serviceArea: {
      "@type": "AdministrativeArea",
      name: city,
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://queencreekyardpros.com",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Services",
        item: "https://queencreekyardpros.com/services",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: title,
        item: `https://queencreekyardpros.com/services/${slug}`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
    </>
  );
}
