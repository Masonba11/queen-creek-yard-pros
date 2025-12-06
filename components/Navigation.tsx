"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import { services } from "@/data/services";
import { serviceAreas } from "@/data/serviceAreas";

// Helper function to properly capitalize service names
function capitalizeServiceName(name: string): string {
  return name
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

// Helper function to extract service name without location suffix
function getServiceDisplayName(name: string): string {
  // Remove common location suffixes
  let displayName = name
    .replace(/\s+queen\s+creek\s+az$/i, "")
    .replace(/\s+queen\s+creek$/i, "")
    .replace(/\s+az$/i, "")
    .trim();

  // Handle cases where "queen creek" is at the beginning
  displayName = displayName.replace(/^queen\s+creek\s+/i, "");

  // Capitalize the result
  return capitalizeServiceName(displayName);
}

export default function Navigation() {
  const [servicesOpen, setServicesOpen] = useState(false);
  const [serviceAreasOpen, setServiceAreasOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileAreasOpen, setMobileAreasOpen] = useState(false);
  const servicesRef = useRef<HTMLDivElement>(null);
  const areasRef = useRef<HTMLDivElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const mobileMenuButtonRef = useRef<HTMLButtonElement>(null);

  // Close dropdowns when clicking outside (desktop only)
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      const target = event.target as Node;

      // Handle desktop dropdowns
      if (servicesRef.current && !servicesRef.current.contains(target)) {
        setServicesOpen(false);
      }
      if (areasRef.current && !areasRef.current.contains(target)) {
        setServiceAreasOpen(false);
      }

      // Handle mobile menu - exclude the button itself
      if (
        mobileMenuOpen &&
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(target) &&
        mobileMenuButtonRef.current &&
        !mobileMenuButtonRef.current.contains(target)
      ) {
        setMobileMenuOpen(false);
        setMobileServicesOpen(false);
        setMobileAreasOpen(false);
      }
    };

    // Use both mousedown and touchstart for better mobile support
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, [mobileMenuOpen]);

  // Close mobile menu when route changes
  useEffect(() => {
    const handleRouteChange = () => {
      setMobileMenuOpen(false);
      setMobileServicesOpen(false);
      setMobileAreasOpen(false);
    };

    // Close on any navigation
    window.addEventListener("popstate", handleRouteChange);
    return () => window.removeEventListener("popstate", handleRouteChange);
  }, []);

  return (
    <nav className="sticky top-0 z-50 glass border-b border-gray-200/50 backdrop-blur-xl relative">
      <div className="max-w-7xl mx-auto px-6 pt-0 pb-0">
        <div className="flex items-center justify-between">
          <Link
            href="/"
            className="flex items-center hover:opacity-80 transition-opacity duration-300"
          >
            <Image
              src="/images/logo.png"
              alt="Queen Creek Yard Pros"
              width={400}
              height={160}
              className="h-16 md:h-24 lg:h-32 w-auto object-contain"
              priority
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              href="/"
              className="text-gray-700 hover:text-gray-900 font-medium transition-colors duration-200 relative group"
            >
              Home
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-green-600 transition-all duration-300 group-hover:w-full"></span>
            </Link>

            {/* Services Dropdown */}
            <div
              ref={servicesRef}
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  setServicesOpen(!servicesOpen);
                }}
                className="text-gray-700 hover:text-gray-900 font-medium transition-colors duration-200 relative group flex items-center gap-1"
              >
                Services
                <svg
                  className={`w-4 h-4 transition-transform duration-200 ${
                    servicesOpen ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-green-600 transition-all duration-300 group-hover:w-full"></span>
              </button>
              {servicesOpen && (
                <div
                  className="absolute top-full left-0 pt-2 w-64 z-50"
                  onMouseEnter={() => setServicesOpen(true)}
                  onMouseLeave={() => setServicesOpen(false)}
                >
                  <div className="bg-white rounded-xl shadow-2xl border border-gray-200/50 py-2 dropdown-menu">
                    <div className="max-h-96 overflow-y-auto">
                      {services.map((service) => (
                        <Link
                          key={service.slug}
                          href={`/services/${service.slug}`}
                          onClick={(e) => {
                            e.stopPropagation();
                            setServicesOpen(false);
                          }}
                          className="block px-4 py-3 text-gray-700 hover:bg-green-50 hover:text-green-600 transition-colors duration-200"
                        >
                          {getServiceDisplayName(service.name)}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Service Areas Dropdown */}
            <div
              ref={areasRef}
              className="relative"
              onMouseEnter={() => setServiceAreasOpen(true)}
              onMouseLeave={() => setServiceAreasOpen(false)}
            >
              <button
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  setServiceAreasOpen(!serviceAreasOpen);
                }}
                className="text-gray-700 hover:text-gray-900 font-medium transition-colors duration-200 relative group flex items-center gap-1"
              >
                Service Areas
                <svg
                  className={`w-4 h-4 transition-transform duration-200 ${
                    serviceAreasOpen ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-green-600 transition-all duration-300 group-hover:w-full"></span>
              </button>
              {serviceAreasOpen && (
                <div
                  className="absolute top-full left-0 pt-2 w-56 z-50"
                  onMouseEnter={() => setServiceAreasOpen(true)}
                  onMouseLeave={() => setServiceAreasOpen(false)}
                >
                  <div className="bg-white rounded-xl shadow-2xl border border-gray-200/50 py-2 dropdown-menu">
                    {serviceAreas.map((area) => (
                      <Link
                        key={area.slug}
                        href={`/service-areas/${area.slug}`}
                        onClick={(e) => {
                          e.stopPropagation();
                          setServiceAreasOpen(false);
                        }}
                        className="block px-4 py-3 text-gray-700 hover:bg-green-50 hover:text-green-600 transition-colors duration-200"
                      >
                        {area.city}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <Link
              href="/blog"
              className="text-gray-700 hover:text-gray-900 font-medium transition-colors duration-200 relative group"
            >
              Blog
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-green-600 transition-all duration-300 group-hover:w-full"></span>
            </Link>

            <div className="flex items-center gap-3">
              <a href="#quote" className="modern-button text-sm py-2.5 px-6">
                <span>Get Quote</span>
              </a>
              <a href="tel:480-987-6110" className="modern-button text-sm py-2.5 px-6 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800">
                <span>Call: 480-987-6110</span>
              </a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            ref={mobileMenuButtonRef}
            onClick={(e) => {
              e.stopPropagation();
              setMobileMenuOpen(!mobileMenuOpen);
            }}
            className="md:hidden p-2 text-gray-700 hover:text-gray-900 transition-colors z-50 relative"
            aria-label="Toggle menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div
            ref={mobileMenuRef}
            className="md:hidden border-t border-gray-200/50 bg-white absolute left-0 right-0 top-full shadow-lg z-50 max-h-[calc(100vh-80px)] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="px-6 py-4 space-y-4">
              <Link
                href="/"
                onClick={() => {
                  setMobileMenuOpen(false);
                  setMobileServicesOpen(false);
                  setMobileAreasOpen(false);
                }}
                className="block py-3 text-gray-700 hover:text-gray-900 font-medium transition-colors border-b border-gray-100"
              >
                Home
              </Link>

              {/* Mobile Services Dropdown */}
              <div>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setMobileServicesOpen(!mobileServicesOpen);
                  }}
                  className="w-full flex items-center justify-between py-3 text-gray-700 hover:text-gray-900 font-medium transition-colors border-b border-gray-100"
                >
                  <span>Services</span>
                  <svg
                    className={`w-5 h-5 transition-transform duration-200 ${
                      mobileServicesOpen ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                {mobileServicesOpen && (
                  <div className="pl-4 mt-2 space-y-1 pb-2 border-b border-gray-100">
                    {services.map((service) => (
                      <Link
                        key={service.slug}
                        href={`/services/${service.slug}`}
                        onClick={() => {
                          setMobileServicesOpen(false);
                          setMobileMenuOpen(false);
                          setMobileAreasOpen(false);
                        }}
                        className="block py-2.5 text-gray-600 hover:text-green-600 transition-colors text-sm"
                      >
                        {getServiceDisplayName(service.name)}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Mobile Service Areas Dropdown */}
              <div>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setMobileAreasOpen(!mobileAreasOpen);
                  }}
                  className="w-full flex items-center justify-between py-3 text-gray-700 hover:text-gray-900 font-medium transition-colors border-b border-gray-100"
                >
                  <span>Service Areas</span>
                  <svg
                    className={`w-5 h-5 transition-transform duration-200 ${
                      mobileAreasOpen ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                {mobileAreasOpen && (
                  <div className="pl-4 mt-2 space-y-1 pb-2 border-b border-gray-100">
                    {serviceAreas.map((area) => (
                      <Link
                        key={area.slug}
                        href={`/service-areas/${area.slug}`}
                        onClick={() => {
                          setMobileAreasOpen(false);
                          setMobileMenuOpen(false);
                          setMobileServicesOpen(false);
                        }}
                        className="block py-2.5 text-gray-600 hover:text-green-600 transition-colors text-sm"
                      >
                        {area.city}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link
                href="/blog"
                onClick={() => {
                  setMobileMenuOpen(false);
                  setMobileServicesOpen(false);
                  setMobileAreasOpen(false);
                }}
                className="block py-3 text-gray-700 hover:text-gray-900 font-medium transition-colors border-b border-gray-100"
              >
                Blog
              </Link>

              <div className="space-y-3 mt-4">
                <a
                  href="#quote"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    setMobileServicesOpen(false);
                    setMobileAreasOpen(false);
                  }}
                  className="modern-button block text-center py-3 px-6"
                >
                  <span>Get Quote</span>
                </a>
                <a
                  href="tel:480-987-6110"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    setMobileServicesOpen(false);
                    setMobileAreasOpen(false);
                  }}
                  className="modern-button block text-center py-3 px-6 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800"
                >
                  <span>Call: 480-987-6110</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
