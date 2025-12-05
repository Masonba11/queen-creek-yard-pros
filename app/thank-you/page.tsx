import Link from "next/link";

export default function ThankYouPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-20">
      <div className="text-center mb-12 animate-fade-in">
        <div className="w-24 h-24 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
          <svg
            className="w-12 h-12 text-green-600"
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
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
          Thank You!
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Your quote request has been submitted successfully. We'll connect you
          with qualified landscaping contractors in your area shortly.
        </p>
      </div>

      <div className="modern-card p-10 mb-8 animate-fade-in">
        <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
          What Happens Next?
        </h2>
        <div className="space-y-6">
          <div className="flex items-start">
            <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center mr-4 flex-shrink-0">
              <span className="text-green-600 font-bold">1</span>
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                We Review Your Request
              </h3>
              <p className="text-gray-600">
                Our team will review your project details and match you with the
                best contractors for your needs.
              </p>
            </div>
          </div>
          <div className="flex items-start">
            <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center mr-4 flex-shrink-0">
              <span className="text-green-600 font-bold">2</span>
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Contractors Contact You
              </h3>
              <p className="text-gray-600">
                Qualified contractors in your area will reach out to discuss your
                project and provide free estimates.
              </p>
            </div>
          </div>
          <div className="flex items-start">
            <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center mr-4 flex-shrink-0">
              <span className="text-green-600 font-bold">3</span>
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Get Your Free Quotes
              </h3>
              <p className="text-gray-600">
                Compare quotes from multiple contractors and choose the one that
                best fits your budget and vision.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center space-y-4">
        <Link href="/" className="modern-button inline-block">
          <span>Return to Homepage</span>
        </Link>
        <div>
          <Link
            href="/services"
            className="text-green-600 hover:text-green-700 font-medium transition-colors"
          >
            Browse Our Services →
          </Link>
        </div>
      </div>
    </div>
  );
}

