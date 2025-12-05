interface ServiceAreaSchemaProps {
  city: string;
  description: string;
  geo: { lat: number; lng: number };
  slug: string;
}

export default function ServiceAreaSchema({
  city,
  description,
  geo,
  slug,
}: ServiceAreaSchemaProps) {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Queen Creek Yard Pros",
    description: `Landscaping and yard maintenance services in ${city}, AZ.`,
    areaServed: {
      "@type": "City",
      name: city,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: geo.lat,
      longitude: geo.lng,
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
        name: "Service Areas",
        item: "https://queencreekyardpros.com/service-areas",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: `${city}, AZ`,
        item: `https://queencreekyardpros.com/service-areas/${slug}`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
    </>
  );
}
