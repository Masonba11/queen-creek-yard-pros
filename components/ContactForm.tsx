"use client";

import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

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
          subject: `New Quote Request from ${formData.name}`,
          from_name: formData.name,
          email: formData.email,
          phone: formData.phone,
          service: formData.service,
          message: formData.message,
          from: formData.email,
        }),
      });

      const result = await response.json();

      if (result.success) {
        setStatus("success");
        setFormData({
          name: "",
          email: "",
          phone: "",
          service: "",
          message: "",
        });
      } else {
        setStatus("error");
        setErrorMessage(
          result.message || "Something went wrong. Please try again."
        );
      }
    } catch (error) {
      setStatus("error");
      setErrorMessage(
        "Network error. Please check your connection and try again."
      );
    }
  };

  return (
    <div id="quote" className="mb-20 animate-fade-in scroll-mt-20">
      <div className="modern-card p-10 max-w-3xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Get Your Free <span className="gradient-text">Quote</span>
          </h2>
          <p className="text-lg text-gray-600">
            Fill out the form below and we'll connect you with qualified
            landscaping contractors in your area.
          </p>
        </div>

        {status === "success" ? (
          <div className="text-center py-8">
            <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
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
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              Thank You!
            </h3>
            <p className="text-gray-600 mb-4">
              Your request has been submitted successfully. We'll be in touch
              shortly to connect you with qualified contractors.
            </p>
            <button onClick={() => setStatus("idle")} className="modern-button">
              <span>Submit Another Request</span>
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
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
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
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
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
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
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
                  placeholder="(480) 555-1234"
                />
              </div>

              <div>
                <label
                  htmlFor="service"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Service Needed
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
                >
                  <option value="">Select a service...</option>
                  <option value="Lawn Care">Lawn Care</option>
                  <option value="Irrigation">Irrigation</option>
                  <option value="Hardscaping">Hardscaping</option>
                  <option value="Landscape Design">Landscape Design</option>
                  <option value="Artificial Turf">Artificial Turf</option>
                  <option value="Tree Trimming">Tree Trimming</option>
                  <option value="Yard Cleanup">Yard Cleanup</option>
                  <option value="Weed Control">Weed Control</option>
                  <option value="Landscape Lighting">Landscape Lighting</option>
                  <option value="Yard Maintenance">Yard Maintenance</option>
                  <option value="Landscape Rock">Landscape Rock</option>
                  <option value="Other">Other</option>
                </select>
              </div>
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
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200 resize-none"
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
