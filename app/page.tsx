import Link from "next/link";
import { services } from "@/data/services";
import YardExpertsPartner from "@/components/YardExpertsPartner";
import ContactForm from "@/components/ContactForm";

// Helper function to properly capitalize service names
function capitalizeServiceName(name: string): string {
  return name
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

export default function HomePage() {
  // Get featured services (first 6)
  const featuredServices = services.slice(0, 6);

  return (
    <div className="max-w-7xl mx-auto">
      {/* Hero Section with Split Videos */}
      <div className="full-width-hero relative h-[600px] md:h-[700px] mb-20 overflow-hidden animate-fade-in">
        <div className="absolute inset-0 w-full h-full flex">
          {/* Left Half - Landscape Installation Video */}
          <div className="w-1/2 h-full relative">
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
              <source
                src="/videos/landscapeinstallation.mp4"
                type="video/mp4"
              />
            </video>
          </div>
          {/* Right Half - Homepage Hero Video */}
          <div className="w-1/2 h-full relative">
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
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70 z-10"></div>
        </div>
        <div className="relative z-10 h-full flex flex-col justify-center px-6 md:px-12 max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-6xl font-bold text-white mb-6 text-balance leading-tight">
              Connect with Top Landscaping Contractors in Arizona
            </h1>
            <p className="text-base md:text-xl text-white/90 leading-relaxed mb-8 text-balance">
              Get matched with qualified, licensed landscaping contractors in
              your area. We connect homeowners with trusted professionals for
              all your landscaping needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#quote" className="modern-button inline-block">
                <span>Get Your Free Quote</span>
              </a>
              <a
                href="tel:480-987-6110"
                className="modern-button inline-block bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800"
              >
                <span>Call Us Now: 480-987-6110</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="px-6">
        {/* Service Highlights */}
        <div className="mb-20 animate-fade-in">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our <span className="gradient-text">Services</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive landscaping solutions tailored to your needs
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            {featuredServices.map((service, index) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="modern-card p-6 group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative z-10">
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
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center">
            <Link href="/services" className="modern-button">
              <span>View All Services</span>
            </Link>
          </div>
        </div>

        {/* Rich Content Section */}
        <div className="mb-20 animate-fade-in">
          <div className="modern-card p-10">
            <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">
              Transform Your Property with{" "}
              <span className="gradient-text">Queen Creek Landscaping</span>
            </h2>
            <div className="prose prose-lg max-w-none">
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Why Queen Creek Landscaping Matters
                  </h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Your outdoor space is an extension of your home and a
                    reflection of your property's value. Professional Queen
                    Creek landscaping not only enhances curb appeal but can
                    increase your property value by up to 20%. In Queen Creek's
                    unique desert climate, working with experienced landscaping
                    contractors who understand local conditions, water
                    conservation, and heat-resistant plants is essential for
                    creating a beautiful, sustainable landscape that thrives
                    year-round.
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    From artificial turf installation that saves water to
                    hardscaping that creates functional outdoor living spaces,
                    Queen Creek landscaping contractors bring expertise, quality
                    materials, and proven techniques to every project. Whether
                    you need irrigation systems, landscape design, or complete
                    yard transformations, Queen Creek landscaping professionals
                    deliver exceptional results that enhance both the beauty and
                    functionality of your property.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    Queen Creek's rapid growth and development have created a
                    community that values well-maintained, beautiful properties.
                    Professional Queen Creek landscaping helps your property
                    stand out in this competitive market, whether you're looking
                    to increase resale value, create outdoor spaces for
                    entertaining, or simply enjoy a beautiful yard that reflects
                    your personal style and enhances your quality of life.
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Comprehensive Queen Creek Landscaping Services
                  </h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Whether you're looking to install a new irrigation system,
                    create a stunning hardscape patio, or maintain a lush lawn,
                    our network of qualified Queen Creek landscaping contractors
                    offers comprehensive services throughout Queen Creek and
                    surrounding areas including Mesa, Gilbert, Chandler, and San
                    Tan Valley.
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Our Queen Creek landscaping contractors specialize in
                    everything from routine lawn care and maintenance to
                    complete landscape design and installation. They understand
                    Queen Creek's specific challenges, including water
                    conservation requirements, HOA regulations, and the best
                    practices for desert landscaping that thrives year-round in
                    Queen Creek's climate. These professionals bring years of
                    local experience and knowledge of Queen Creek's unique
                    conditions to every project.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    From initial consultation through project completion, our
                    Queen Creek landscaping contractors work closely with you to
                    understand your vision, budget, and functional needs. They
                    provide detailed proposals, handle all necessary permits and
                    approvals, and ensure your landscaping project is completed
                    to the highest standards while complying with all local
                    regulations and requirements.
                  </p>
                </div>
              </div>

              <div className="border-t border-gray-200 pt-8 mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Understanding Queen Creek Landscaping in Arizona's Desert
                  Climate
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Queen Creek landscaping requires specialized knowledge of
                  Arizona's unique desert environment. Our network of Queen
                  Creek landscaping contractors understands that successful
                  landscaping in this region requires specific expertise in
                  water conservation, heat management, soil conditions, and
                  plant selections that thrive in desert climates.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Queen Creek's climate presents unique challenges including
                  intense summer heat, limited rainfall, and specific water
                  conservation regulations. Our Queen Creek landscaping
                  contractors are well-versed in these challenges and design
                  solutions that work with the environment. They understand
                  proper irrigation system design, drought-resistant plant
                  selections, and installation techniques that ensure long-term
                  success.
                </p>
              </div>

              <div className="border-t border-gray-200 pt-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  What to Expect When Working with Our Contractors
                </h3>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="p-6 rounded-xl bg-gradient-to-br from-green-50 to-emerald-50">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500 to-emerald-500 mb-4 flex items-center justify-center">
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
                          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>
                    <h4 className="text-xl font-bold text-gray-900 mb-2">
                      Free Consultations
                    </h4>
                    <p className="text-gray-700">
                      Get detailed quotes and professional advice tailored to
                      your property and budget.
                    </p>
                  </div>
                  <div className="p-6 rounded-xl bg-gradient-to-br from-green-50 to-emerald-50">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500 to-emerald-500 mb-4 flex items-center justify-center">
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
                          d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                        />
                      </svg>
                    </div>
                    <h4 className="text-xl font-bold text-gray-900 mb-2">
                      Licensed & Insured
                    </h4>
                    <p className="text-gray-700">
                      All contractors in our network are fully licensed,
                      insured, and vetted for quality workmanship.
                    </p>
                  </div>
                  <div className="p-6 rounded-xl bg-gradient-to-br from-green-50 to-emerald-50">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500 to-emerald-500 mb-4 flex items-center justify-center">
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
                          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                        />
                      </svg>
                    </div>
                    <h4 className="text-xl font-bold text-gray-900 mb-2">
                      Satisfaction Guaranteed
                    </h4>
                    <p className="text-gray-700">
                      Our contractors stand behind their work with warranties
                      and commitment to your complete satisfaction.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Rich Content */}
        <div className="mb-20 animate-fade-in">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="modern-card p-8">
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                Queen Creek Landscaping:{" "}
                <span className="gradient-text">Desert-Smart Solutions</span>
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Queen Creek's desert climate presents unique challenges and
                opportunities for landscaping that require specialized
                expertise. Our Queen Creek landscaping contractors understand
                the importance of water-efficient designs, heat-resistant plant
                selections, and proper irrigation systems that comply with local
                water conservation regulations while creating beautiful,
                functional outdoor spaces.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                From xeriscaping with native desert plants to artificial turf
                installations that eliminate water usage, our network of Queen
                Creek landscaping contractors creates beautiful landscapes that
                are both environmentally responsible and visually stunning.
                They're familiar with Queen Creek building codes, HOA
                requirements, and the specific needs of properties throughout
                Queen Creek's diverse neighborhoods.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Our Queen Creek landscaping professionals bring local expertise
                and knowledge of Queen Creek's specific conditions to every
                project, ensuring your landscape thrives in the desert climate
                while meeting all local regulations and requirements.
              </p>
            </div>
            <div className="modern-card p-8">
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                Popular Queen Creek Landscaping Services
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <svg
                    className="w-6 h-6 text-green-600 mr-3 mt-1 flex-shrink-0"
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
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">
                      Artificial Turf Installation
                    </h4>
                    <p className="text-gray-700 text-sm">
                      Low-maintenance, water-free lawns that stay green
                      year-round, perfect for Arizona's climate.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-6 h-6 text-green-600 mr-3 mt-1 flex-shrink-0"
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
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">
                      Hardscaping & Pavers
                    </h4>
                    <p className="text-gray-700 text-sm">
                      Patios, walkways, and outdoor living spaces that enhance
                      functionality and beauty.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-6 h-6 text-green-600 mr-3 mt-1 flex-shrink-0"
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
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">
                      Irrigation Systems
                    </h4>
                    <p className="text-gray-700 text-sm">
                      Smart, efficient watering systems designed for water
                      conservation and optimal plant health.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-6 h-6 text-green-600 mr-3 mt-1 flex-shrink-0"
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
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">
                      Landscape Design & Installation
                    </h4>
                    <p className="text-gray-700 text-sm">
                      Complete landscape transformations from concept to
                      completion, tailored to your vision.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-6 h-6 text-green-600 mr-3 mt-1 flex-shrink-0"
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
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">
                      Lawn Care & Maintenance
                    </h4>
                    <p className="text-gray-700 text-sm">
                      Regular maintenance programs to keep your landscape
                      looking its best year-round.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Yard Experts Partner Section */}
        <YardExpertsPartner />

        {/* Contact Form Section */}
        <ContactForm />
      </div>
    </div>
  );
}
