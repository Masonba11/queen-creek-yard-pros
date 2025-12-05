export default function GlobalSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Queen Creek Yard Pros",
    url: "https://queencreekyardpros.com",
    image: "https://queencreekyardpros.com/images/logo.png",
    telephone: "480-555-1234",
    description:
      "Queen Creek Yard Pros connects homeowners with trusted landscaping, lawn care, turf, cleanup, and hardscaping providers.",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Queen Creek",
      addressRegion: "AZ",
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 33.2487,
      longitude: -111.6343,
    },
    areaServed: [
      "Queen Creek, AZ",
      "Gilbert, AZ",
      "Mesa, AZ",
      "Chandler, AZ",
      "San Tan Valley, AZ",
      "Tempe, AZ",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
