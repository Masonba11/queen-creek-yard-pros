import Link from "next/link";
import ContactForm from "@/components/ContactForm";

export default function WaterWiseLandscapingArizona() {
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
          <p className="text-gray-500 text-sm mb-4">March 10, 2024</p>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Water-Wise Landscaping: Tips for Arizona Homeowners
          </h1>
          <p className="text-xl text-gray-600 italic">
            Learn how to create beautiful landscapes while conserving water in
            Arizona's desert climate.
          </p>
        </div>

        <div className="modern-card p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Introduction
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Arizona's climate presents unique challenges — intense heat, minimal
            rainfall, and long summers. Thankfully, water-wise landscaping (also
            known as xeriscaping) allows homeowners to enjoy beautiful yards
            while dramatically cutting water usage and maintenance.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Here's how to build a water-efficient landscape that still looks
            amazing.
          </p>
        </div>

        <div className="space-y-8 mb-8">
          <div className="modern-card p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              1. Choose Desert-Friendly Plants
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Native and drought-tolerant plants thrive naturally in Arizona
              conditions. Popular choices include:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
              <li>Agave</li>
              <li>Desert marigold</li>
              <li>Red yucca</li>
              <li>Palo verde</li>
              <li>Sage</li>
            </ul>
            <p className="text-gray-700 leading-relaxed">
              These plants require minimal watering and add color and texture to
              any yard.
            </p>
          </div>

          <div className="modern-card p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              2. Use Rock, Gravel, and Mulch Wisely
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Rocks and gravel aren't just decorative — they help retain
              moisture and reduce evaporation. Mulch around plants also protects
              roots and slows water loss.
            </p>
          </div>

          <div className="modern-card p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              3. Install Drip Irrigation Systems
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Compared to traditional sprinklers, drip irrigation delivers water
              directly to the root zone, minimizing waste and ensuring plants
              receive targeted hydration.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">Benefits:</p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
              <li>Reduces runoff</li>
              <li>Lowers water bills</li>
              <li>Encourages healthy plant growth</li>
            </ul>
          </div>

          <div className="modern-card p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              4. Optimize Watering Schedules
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Water early in the morning or late evening to minimize
              evaporation. Avoid watering during the hottest part of the day.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Smart irrigation timers make this extremely easy by adjusting
              schedules automatically based on weather patterns.
            </p>
          </div>

          <div className="modern-card p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              5. Group Plants By Water Needs
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              This technique, known as hydrozoning, prevents overwatering and
              reduces overall water use. Grouping plants strategically makes
              irrigation more efficient and simplifies maintenance.
            </p>
          </div>
        </div>

        <div className="modern-card p-8 mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Conclusion</h2>
          <p className="text-gray-700 leading-relaxed">
            Water-wise landscaping not only saves money — it creates sustainable,
            beautiful spaces that fit perfectly within Arizona's desert
            environment. With the right design, your yard can stay vibrant all
            year while reducing water usage dramatically.
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
    "Water-Wise Landscaping: Tips for Arizona Homeowners | Queen Creek Yard Pros",
  description:
    "Learn how to create beautiful landscapes while conserving water in Arizona's desert climate. Discover xeriscaping tips, drought-tolerant plants, and smart irrigation solutions.",
};

