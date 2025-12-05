import Link from "next/link";
import { services } from "@/data/services";
import YardExpertsPartner from "@/components/YardExpertsPartner";
import ServiceSchema from "@/components/Schema/ServiceSchema";

// Helper function to properly capitalize service names
function capitalizeServiceName(name: string): string {
  return name
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

interface Section {
  title: string;
  content: string;
}

interface FAQ {
  question: string;
  answer: string;
}

interface ServicePageTemplateProps {
  title: string;
  keyword: string;
  description: string;
  heroImage?: string;
  sections: Section[];
  faqs: FAQ[];
  services?: typeof services;
  slug: string;
  city?: string;
  geo?: { lat: number; lng: number };
}

export default function ServicePageTemplate({
  title,
  keyword,
  description,
  heroImage,
  sections,
  faqs,
  services: relatedServices,
  slug,
  city = "Queen Creek",
  geo = { lat: 33.2487, lng: -111.6343 },
}: ServicePageTemplateProps) {
  // Get related services (exclude current service)
  const displayServices =
    relatedServices ||
    services
      .filter((s) => s.slug !== keyword.toLowerCase().replace(/\s+/g, "-"))
      .slice(0, 6);

  // Check if hero is a video
  const isVideo =
    heroImage?.endsWith(".mp4") ||
    heroImage?.endsWith(".webm") ||
    heroImage?.endsWith(".mov");

  return (
    <>
      <ServiceSchema
        title={title}
        keyword={keyword}
        city={city}
        description={description}
        geo={geo}
        slug={slug}
      />
      {/* Hero Section with Image/Video - Full Width */}
      {heroImage ? (
        <div className="full-width-hero relative h-[600px] md:h-[700px] mb-16 overflow-hidden animate-fade-in">
          <div className="absolute inset-0 w-full h-full">
            {isVideo ? (
              <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute top-0 left-0 w-full h-full object-cover object-center"
                style={{
                  width: "100%",
                  height: "100%",
                  minWidth: "100%",
                  minHeight: "100%",
                  objectFit: "cover",
                }}
              >
                <source src={heroImage} type="video/mp4" />
              </video>
            ) : (
              <img
                src={heroImage}
                alt={title}
                className="absolute top-0 left-0 w-full h-full object-cover object-center"
                style={{
                  width: "100%",
                  height: "100%",
                  minWidth: "100%",
                  minHeight: "100%",
                  objectFit: "cover",
                }}
              />
            )}
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70 z-10"></div>
          </div>
          <div className="relative z-10 h-full flex flex-col justify-center px-6 md:px-12 max-w-7xl mx-auto">
            <div className="max-w-4xl">
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                {title}
              </h1>
              <p className="text-xl md:text-2xl text-white/90 leading-relaxed mb-8 max-w-3xl">
                {description}
              </p>
              <a href="#quote" className="modern-button inline-block">
                <span>Get Your Free Quote</span>
              </a>
            </div>
          </div>
        </div>
      ) : (
        <div className="max-w-7xl mx-auto px-6 py-16 mb-16 animate-fade-in-up">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 gradient-text">
            {title}
          </h1>
          <p className="text-xl text-gray-700 leading-relaxed mb-8 max-w-3xl">
            {description}
          </p>
          <a href="#quote" className="modern-button">
            <span>Get Your Free Quote</span>
          </a>
        </div>
      )}

      <div className="max-w-7xl mx-auto px-6">
        {/* Content Sections */}
        <div className="space-y-16 mb-20">
          {sections.map((section, index) => (
            <div
              key={index}
              className="modern-card p-10 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                {section.title}
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                {section.content}
              </p>
            </div>
          ))}
        </div>

        {/* Yard Experts Partner Section */}
        <YardExpertsPartner />

        {/* FAQ Section */}
        {faqs.length > 0 && (
          <div className="mb-20 animate-fade-in">
            <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
              Frequently Asked <span className="gradient-text">Questions</span>
            </h2>
            <div className="space-y-4 max-w-4xl mx-auto">
              {faqs.map((faq, index) => (
                <div key={index} className="modern-card p-6 group">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-green-600 transition-colors duration-300">
                    {faq.question}
                  </h3>
                  <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Related Services Grid */}
        {displayServices.length > 0 && (
          <div className="mb-20 animate-fade-in">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Explore Our <span className="gradient-text">Services</span>
              </h2>
              <p className="text-lg text-gray-600">
                Discover more ways we can transform your outdoor space
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {displayServices.map((service, index) => (
                <Link
                  key={service.slug}
                  href={`/services/${service.slug}`}
                  className="modern-card p-6 group"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500 to-emerald-500 mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-green-600 transition-colors duration-300">
                    {capitalizeServiceName(service.name)}
                  </h3>
                  <p className="text-gray-600 text-sm">Learn more →</p>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  );
}
