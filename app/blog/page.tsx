import Link from "next/link";
import ContactForm from "@/components/ContactForm";

export default function BlogPage() {
  // Placeholder blog posts - you can expand this later
  const blogPosts = [
    {
      id: 1,
      title: "Top 5 Landscaping Trends for 2024",
      excerpt:
        "Discover the latest landscaping trends that are transforming outdoor spaces across Arizona.",
      date: "March 15, 2024",
      slug: "top-5-landscaping-trends-2024",
    },
    {
      id: 2,
      title: "Water-Wise Landscaping: Tips for Arizona Homeowners",
      excerpt:
        "Learn how to create beautiful landscapes while conserving water in Arizona's desert climate.",
      date: "March 10, 2024",
      slug: "water-wise-landscaping-arizona",
    },
    {
      id: 3,
      title: "Choosing the Right Contractor for Your Landscaping Project",
      excerpt:
        "Essential tips for finding and selecting the perfect landscaping contractor for your needs.",
      date: "March 5, 2024",
      slug: "choosing-right-contractor",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-16">
      <div className="mb-16 animate-fade-in-up">
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
          Our <span className="gradient-text">Blog</span>
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl">
          Tips, trends, and insights for creating beautiful outdoor spaces in
          Arizona
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        {blogPosts.map((post, index) => (
          <Link
            key={post.id}
            href={`/blog/${post.slug}`}
            className="modern-card p-6 group"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="text-sm text-gray-500 mb-3">{post.date}</div>
            <h2 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-green-600 transition-colors duration-300">
              {post.title}
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">{post.excerpt}</p>
            <span className="text-green-600 font-medium text-sm group-hover:underline">
              Read More →
            </span>
          </Link>
        ))}
      </div>

      <div className="text-center mb-16">
        <p className="text-gray-600 mb-4">
          More blog posts coming soon! Check back regularly for the latest
          landscaping tips and trends.
        </p>
      </div>

      {/* Contact Form Section */}
      <ContactForm />
    </div>
  );
}
