"use client";

import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import { services } from "@/data/services";
import { serviceAreas } from "@/data/serviceAreas";

// Helper function to capitalize service names
function capitalizeServiceName(name: string): string {
  return name
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

export default function ContactForm() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState("");
  const [serviceArea, setServiceArea] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  
  // Autocomplete states
  const [serviceSuggestions, setServiceSuggestions] = useState<string[]>([]);
  const [areaSuggestions, setAreaSuggestions] = useState<string[]>([]);
  const [showServiceSuggestions, setShowServiceSuggestions] = useState(false);
  const [showAreaSuggestions, setShowAreaSuggestions] = useState(false);
  const serviceInputRef = useRef<HTMLDivElement>(null);
  const areaInputRef = useRef<HTMLDivElement>(null);

  const serviceNames = services.map((s) => capitalizeServiceName(s.name));
  const areaNames = serviceAreas.map((a) => a.city);

  const handleServiceChange = (value: string) => {
    setService(value);
    if (value.length > 0) {
      const filtered = serviceNames.filter((s) =>
        s.toLowerCase().includes(value.toLowerCase())
      );
      setServiceSuggestions(filtered.slice(0, 5));
      setShowServiceSuggestions(true);
    } else {
      setShowServiceSuggestions(false);
      setServiceSuggestions([]);
    }
  };

  const handleAreaChange = (value: string) => {
    setServiceArea(value);
    if (value.length > 0) {
      const filtered = areaNames.filter((area) =>
        area.toLowerCase().includes(value.toLowerCase())
      );
      setAreaSuggestions(filtered.slice(0, 5));
      setShowAreaSuggestions(true);
    } else {
      setShowAreaSuggestions(false);
      setAreaSuggestions([]);
    }
  };

  const selectService = (selectedService: string) => {
    setService(selectedService);
    setShowServiceSuggestions(false);
    setServiceSuggestions([]);
  };

  const selectArea = (selectedArea: string) => {
    setServiceArea(selectedArea);
    setShowAreaSuggestions(false);
    setAreaSuggestions([]);
  };

  // Close suggestions when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        serviceInputRef.current &&
        !serviceInputRef.current.contains(event.target as Node)
      ) {
        setShowServiceSuggestions(false);
      }
      if (
        areaInputRef.current &&
        !areaInputRef.current.contains(event.target as Node)
      ) {
        setShowAreaSuggestions(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "2357a969-34a1-4112-bb48-462ac545a2f1",
          subject: `New Quote Request from ${name}`,
          from_name: name,
          email: email,
          phone: phone,
          service: service,
          service_area: serviceArea,
          message: message,
          from: email,
        }),
      });

      const result = await response.json();

      if (result.success) {
        // Redirect to thank you page
        router.push("/thank-you");
      } else {
        setStatus("error");
        setErrorMessage(result.message || "Something went wrong. Please try again.");
      }
    } catch (error) {
      setStatus("error");
      setErrorMessage("Network error. Please check your connection and try again.");
    }
  };

  return (
    <div id="quote" className="mb-20 animate-fade-in scroll-mt-20">
      <div className="modern-card p-10 max-w-3xl mx-auto relative" style={{ pointerEvents: "auto" }}>
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Get Your Free <span className="gradient-text">Quote</span>
          </h2>
          <p className="text-lg text-gray-600">
            Fill out the form below and we'll connect you with qualified
            landscaping contractors in your area.
          </p>
        </div>

        {status === "loading" ? (
          <div className="text-center py-8">
            <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4 animate-spin">
              <svg
                className="w-8 h-8 text-green-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              Submitting...
            </h3>
            <p className="text-gray-600">
              Please wait while we process your request.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6 relative z-20" noValidate style={{ pointerEvents: "auto" }}>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all duration-200 outline-none bg-white text-gray-900 relative z-20"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all duration-200 outline-none bg-white text-gray-900 relative z-20"
                  placeholder="john@example.com"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all duration-200 outline-none bg-white text-gray-900 relative z-20"
                  placeholder="(480) 555-1234"
                />
              </div>

              <div className="relative" ref={areaInputRef}>
                <label
                  htmlFor="serviceArea"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Service Area
                </label>
                <input
                  type="text"
                  id="serviceArea"
                  name="serviceArea"
                  value={serviceArea}
                  onChange={(e) => handleAreaChange(e.target.value)}
                  onFocus={() => {
                    if (serviceArea.length > 0) {
                      const filtered = areaNames.filter((area) =>
                        area.toLowerCase().includes(serviceArea.toLowerCase())
                      );
                      setAreaSuggestions(filtered.slice(0, 5));
                      setShowAreaSuggestions(true);
                    }
                  }}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all duration-200 outline-none bg-white text-gray-900"
                  placeholder="Type your city (e.g., Queen Creek, Mesa...)"
                  autoComplete="off"
                />
                {showAreaSuggestions && areaSuggestions.length > 0 && (
                  <div className="absolute z-50 w-full mt-1 bg-white border border-gray-200 rounded-lg shadow-lg max-h-48 overflow-y-auto">
                    {areaSuggestions.map((area, index) => (
                      <button
                        key={index}
                        type="button"
                        onClick={() => selectArea(area)}
                        className="w-full text-left px-4 py-2 hover:bg-green-50 transition-colors first:rounded-t-lg last:rounded-b-lg text-gray-900"
                      >
                        {area}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>

            <div className="relative" ref={serviceInputRef}>
              <label
                htmlFor="service"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Service Needed
              </label>
              <input
                type="text"
                id="service"
                name="service"
                value={service}
                onChange={(e) => handleServiceChange(e.target.value)}
                onFocus={() => {
                  if (service.length > 0) {
                    const filtered = serviceNames.filter((s) =>
                      s.toLowerCase().includes(service.toLowerCase())
                    );
                    setServiceSuggestions(filtered.slice(0, 5));
                    setShowServiceSuggestions(true);
                  }
                }}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all duration-200 outline-none bg-white text-gray-900"
                placeholder="Type a service (e.g., Lawn Care, Irrigation...)"
                autoComplete="off"
              />
              {showServiceSuggestions && serviceSuggestions.length > 0 && (
                <div className="absolute z-50 w-full mt-1 bg-white border border-gray-200 rounded-lg shadow-lg max-h-48 overflow-y-auto">
                  {serviceSuggestions.map((s, index) => (
                    <button
                      key={index}
                      type="button"
                      onClick={() => selectService(s)}
                      className="w-full text-left px-4 py-2 hover:bg-green-50 transition-colors first:rounded-t-lg last:rounded-b-lg text-gray-900"
                    >
                      {s}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Project Details *
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all duration-200 resize-none outline-none bg-white text-gray-900 relative z-20"
                placeholder="Tell us about your project, timeline, and any specific requirements..."
              />
            </div>

            {status === "error" && (
              <div className="p-4 rounded-lg bg-red-50 border border-red-200">
                <p className="text-sm text-red-600">{errorMessage}</p>
              </div>
            )}

            <button
              type="submit"
              disabled={status === "loading"}
              className="modern-button w-full disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <span>
                {status === "loading" ? "Submitting..." : "Get Your Free Quote"}
              </span>
            </button>

            <p className="text-xs text-gray-500 text-center">
              By submitting this form, you agree to be contacted by our
              contractor network. We respect your privacy and will never share
              your information.
            </p>
          </form>
        )}
      </div>
    </div>
  );
}
