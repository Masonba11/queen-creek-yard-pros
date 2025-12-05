import Link from "next/link";
import { services } from "@/data/services";
import YardExpertsPartner from "@/components/YardExpertsPartner";

// Helper function to properly capitalize service names
function capitalizeServiceName(name: string): string {
  return name
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

export default function ServicesPage() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-16">
      <div className="text-center mb-16 animate-fade-in-up">
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
          Our <span className="gradient-text">Services</span>
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Professional landscaping services in Queen Creek, AZ. We offer
          comprehensive yard care and landscape solutions to keep your property
          beautiful year-round.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {services.map((service, index) => (
          <Link
            key={service.slug}
            href={`/services/${service.slug}`}
            className="modern-card p-8 group"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-green-500 to-emerald-500 mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
              <svg
                className="w-8 h-8 text-white"
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
            <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-green-600 transition-colors duration-300">
              {capitalizeServiceName(service.name)}
            </h3>
            <p className="text-gray-600 mb-4">
              Learn more about our {service.name.toLowerCase()} services →
            </p>
          </Link>
        ))}
      </div>

      <div className="text-center mt-16">
        <div className="modern-card p-10 max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Ready to Transform Your Yard?
          </h2>
          <p className="text-lg text-gray-600 mb-6">
            Get a free quote today and see how we can bring your landscaping
            vision to life.
          </p>
          <a href="#quote" className="modern-button">
            <span>Get Your Free Quote</span>
          </a>
        </div>
      </div>

      {/* Yard Experts Partner Section */}
      <YardExpertsPartner />
    </div>
  );
}
