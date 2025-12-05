import { notFound } from "next/navigation";
import YardExpertsPartner from "@/components/YardExpertsPartner";
import ServiceAreaSchema from "@/components/Schema/ServiceAreaSchema";
import ContactForm from "@/components/ContactForm";
import { serviceAreas, cityGeo } from "@/data/serviceAreas";
import { serviceAreaContent } from "@/data/serviceAreaContent";

export async function generateStaticParams() {
  return serviceAreas.map((area) => ({
    city: area.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: { city: string };
}) {
  const areaData =
    serviceAreaContent[params.city as keyof typeof serviceAreaContent];

  if (!areaData) {
    return {
      title: "Service Area Not Found",
    };
  }

  return {
    title: `${areaData.title} | Queen Creek Yard Pros`,
    description: areaData.description,
  };
}

export default function ServiceAreaPage({
  params,
}: {
  params: { city: string };
}) {
  const areaData =
    serviceAreaContent[params.city as keyof typeof serviceAreaContent];
  const areaInfo = serviceAreas.find((a) => a.slug === params.city);

  if (!areaData || !areaInfo) {
    notFound();
  }

  const geo = cityGeo[areaInfo.city as keyof typeof cityGeo] || {
    lat: 33.2487,
    lng: -111.6343,
  };

  return (
    <>
      <ServiceAreaSchema
        city={areaInfo.city}
        description={areaData.description}
        geo={geo}
        slug={params.city}
      />
      <div className="max-w-7xl mx-auto">
        {/* Hero Section with Video */}
        <div className="full-width-hero relative h-[600px] md:h-[700px] mb-16 overflow-hidden animate-fade-in">
          <div className="absolute inset-0 w-full h-full">
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
              <source src="/videos/homepageheroqc.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70 z-10"></div>
          </div>
          <div className="relative z-10 h-full flex flex-col justify-center px-6 md:px-12 max-w-7xl mx-auto">
            <div className="max-w-4xl">
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                {areaData.title}
              </h1>
              <p className="text-xl md:text-2xl text-white/90 leading-relaxed mb-8 max-w-3xl">
                {areaData.description}
              </p>
              <a href="#quote" className="modern-button inline-block">
                <span>Get Your Free Quote</span>
              </a>
            </div>
          </div>
        </div>

        <div className="px-6">
          {/* Main Content */}
          <div className="space-y-16 mb-20">
            {/* Intro Section */}
            <div className="modern-card p-10 animate-fade-in">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Connect with Landscaping Contractors in {areaData.name}, Arizona
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                {areaData.content.intro}
              </p>
            </div>

            {/* Why Choose Section */}
            <div className="modern-card p-10 animate-fade-in">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Why Use Queen Creek Yard Pros for {areaData.name} Landscaping?
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                {areaData.content.whyChoose}
              </p>
            </div>

            {/* Services Section */}
            <div className="modern-card p-10 animate-fade-in">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Landscaping Services Available in {areaData.name}
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                {areaData.content.services}
              </p>
            </div>

            {/* Local Section */}
            <div className="modern-card p-10 animate-fade-in">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Serving {areaData.name} Neighborhoods
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                {areaData.content.local}
              </p>
            </div>
          </div>

          {/* CTA Section */}
          <div className="modern-card p-10 text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Ready to Transform Your {areaData.name} Property?
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Get a free quote today and see how we can bring your landscaping
              vision to life.
            </p>
            <a href="#quote" className="modern-button">
              <span>Get Your Free Quote</span>
            </a>
          </div>

          {/* Yard Experts Partner Section */}
          <YardExpertsPartner />

          {/* Contact Form Section */}
          <ContactForm />
        </div>
      </div>
    </>
  );
}
