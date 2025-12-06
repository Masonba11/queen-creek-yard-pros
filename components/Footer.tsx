import Link from "next/link";
import Image from "next/image";
import { services } from "@/data/services";

// Helper function to properly capitalize service names
function capitalizeServiceName(name: string): string {
  return name
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const serviceAreas = [
    { name: "Mesa", slug: "mesa" },
    { name: "Gilbert", slug: "gilbert" },
    { name: "Chandler", slug: "chandler" },
    { name: "San Tan Valley", slug: "san-tan-valley" },
    { name: "Queen Creek", slug: "queen-creek" },
  ];

  return (
    <footer className="bg-gray-900 text-gray-300 mt-20">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <Link href="/" className="inline-block mb-4">
              <Image
                src="/images/logo.png"
                alt="Queen Creek Yard Pros"
                width={300}
                height={120}
                className="h-20 md:h-24 w-auto object-contain"
              />
            </Link>
            <p className="text-sm leading-relaxed mb-4">
              Connecting homeowners with trusted landscaping contractors
              throughout Arizona. Get matched with qualified professionals for
              all your landscaping needs.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              {services.slice(0, 6).map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="text-sm hover:text-green-400 transition-colors duration-200"
                  >
                    {capitalizeServiceName(service.name)}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/services"
                  className="text-sm hover:text-green-400 transition-colors duration-200 font-medium"
                >
                  View All Services →
                </Link>
              </li>
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h4 className="text-white font-semibold mb-4">Service Areas</h4>
            <ul className="space-y-2">
              {serviceAreas.map((area) => (
                <li key={area.slug}>
                  <Link
                    href={`/service-areas/${area.slug}`}
                    className="text-sm hover:text-green-400 transition-colors duration-200"
                  >
                    {area.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-sm hover:text-green-400 transition-colors duration-200"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-sm hover:text-green-400 transition-colors duration-200"
                >
                  All Services
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-sm hover:text-green-400 transition-colors duration-200"
                >
                  Blog
                </Link>
              </li>
              <li>
                <a
                  href="#quote"
                  className="text-sm hover:text-green-400 transition-colors duration-200"
                >
                  Get Quote
                </a>
              </li>
              <li>
                <a
                  href="tel:480-987-6110"
                  className="text-sm hover:text-blue-400 transition-colors duration-200"
                >
                  Call Us: 480-987-6110
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-400">
              © {currentYear} Queen Creek Yard Pros. All rights reserved.
            </p>
            <p className="text-sm text-gray-400">
              View our proud partner{" "}
              <a
                href="https://www.youtube.com/watch?v=X20a8hMdoUA&list=PPSV"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-green-400 hover:text-green-300 transition-colors duration-200 underline"
              >
                The Yard Experts
              </a>
            </p>
            <div className="text-sm text-gray-400">
              <p>
                We connect customers with qualified contractors. We do not
                perform landscaping services directly.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
