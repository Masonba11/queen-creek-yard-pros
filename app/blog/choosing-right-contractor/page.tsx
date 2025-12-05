import Link from "next/link";
import ContactForm from "@/components/ContactForm";

export default function ChoosingRightContractor() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      <article className="prose prose-lg max-w-none">
        <div className="mb-8">
          <Link
            href="/blog"
            className="text-green-600 hover:text-green-700 font-medium mb-4 inline-block"
          >
            ← Back to Blog
          </Link>
          <p className="text-gray-500 text-sm mb-4">March 5, 2024</p>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Choosing the Right Contractor for Your Landscaping Project
          </h1>
          <p className="text-xl text-gray-600 italic">
            Essential tips for finding and selecting the perfect landscaping
            contractor for your needs.
          </p>
        </div>

        <div className="modern-card p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Introduction
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            A landscaping project is an investment in your home's appearance,
            functionality, and value. Choosing the right contractor is crucial
            to ensuring the job is done correctly, on time, and within budget.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Here's what every homeowner should look for before hiring a
            landscaping professional.
          </p>
        </div>

        <div className="space-y-8 mb-8">
          <div className="modern-card p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              1. Verify Licenses, Insurance & Experience
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              A reputable contractor should be:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
              <li>Licensed (if required)</li>
              <li>Insured</li>
              <li>Experienced in your specific type of project</li>
            </ul>
            <p className="text-gray-700 leading-relaxed">
              This protects both you and your property.
            </p>
          </div>

          <div className="modern-card p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              2. Review Past Work & Portfolio
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Always review photos and examples of completed projects. Look for
              consistency, craftsmanship, and styles similar to what you want.
            </p>
            <p className="text-gray-700 leading-relaxed">
              If possible, ask for references or testimonials from previous
              clients.
            </p>
          </div>

          <div className="modern-card p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              3. Make Sure They Offer the Services You Need
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Some contractors specialize in maintenance, others in hardscaping
              or design. Common services include:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
              <li>Turf installation</li>
              <li>Pavers & hardscaping</li>
              <li>Irrigation systems</li>
              <li>Tree trimming</li>
              <li>Yard clean-ups</li>
              <li>Landscape lighting</li>
            </ul>
            <p className="text-gray-700 leading-relaxed">
              Choose someone with proven expertise in the specific project you're
              planning.
            </p>
          </div>

          <div className="modern-card p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              4. Get Multiple Quotes (But Don't Choose the Cheapest)
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Comparing estimates helps you understand the average cost of your
              project. Be cautious of extremely low bids — they often indicate
              shortcuts or low-quality materials.
            </p>
          </div>

          <div className="modern-card p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              5. Evaluate Communication & Professionalism
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Choose a contractor who:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
              <li>Listens to your vision</li>
              <li>Responds promptly</li>
              <li>Provides clear timelines</li>
              <li>Explains pricing transparently</li>
            </ul>
            <p className="text-gray-700 leading-relaxed">
              Good communication prevents problems later in the project.
            </p>
          </div>
        </div>

        <div className="modern-card p-8 mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Conclusion</h2>
          <p className="text-gray-700 leading-relaxed">
            The right contractor will bring your landscaping vision to life with
            skill and professionalism. By evaluating credentials, reviewing past
            work, and comparing quotes, you'll feel confident moving forward
            with your project — and you'll enjoy long-lasting results.
          </p>
        </div>
      </article>

      <div className="text-center mb-12">
        <Link
          href="/blog"
          className="text-green-600 hover:text-green-700 font-medium"
        >
          ← Back to All Blog Posts
        </Link>
      </div>

      <ContactForm />
    </div>
  );
}

export const metadata = {
  title:
    "Choosing the Right Contractor for Your Landscaping Project | Queen Creek Yard Pros",
  description:
    "Essential tips for finding and selecting the perfect landscaping contractor for your needs. Learn how to verify credentials, review portfolios, and compare quotes.",
};

