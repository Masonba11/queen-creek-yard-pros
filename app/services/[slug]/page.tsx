import { notFound } from "next/navigation";
import { services } from "@/data/services";
import ServicePageTemplate from "@/components/ServicePageTemplate";

// Helper function to properly capitalize service names
function capitalizeServiceName(name: string): string {
  return name
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

interface PageProps {
  params: {
    slug: string;
  };
}

// Map service slugs to hero images/videos
function getHeroImage(slug: string): string | undefined {
  const imageMap: Record<string, string> = {
    "landscape-lighting-queen-creek": "landscapelighting.jpg",
    "pavers-queen-creek": "pavers.jpg",
    "artificial-grass-installation-queen-creek": "turf.jpg",
    "irrigation-queen-creek": "irrigation.mp4",
    "hardscaping-company-queen-creek": "landscapeinstallation.mp4",
    "landscape-design-queen-creek": "landscapeinstallation.mp4",
    "yard-maintenance-queen-creek": "homepageheroqc.mp4",
    "tree-trimming-queen-creek-az": "treetrimming.png",
    "yard-clean-up-queen-creek": "cleanup.webp",
    "weed-control-queen-creek": "weedcontrol.jpg",
    "lawn-care-queen-creek": "lawncare.jpg",
    "landscape-rock-queen-creek": "landscaperock.jpg",
  };

  const mediaName = imageMap[slug];
  if (!mediaName) return undefined;

  // Check if it's a video file
  if (
    mediaName.endsWith(".mp4") ||
    mediaName.endsWith(".webm") ||
    mediaName.endsWith(".mov")
  ) {
    return `/videos/${mediaName}`;
  }

  return `/images/${mediaName}`;
}

// Generate comprehensive SEO-rich content for each service
function getServiceContent(keyword: string, name: string) {
  const keywordLower = keyword.toLowerCase();
  const capitalizedName = name
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  // Comprehensive sections with rich SEO content
  const sections = [
    {
      title: `Professional ${capitalizedName} Services in Queen Creek, Arizona`,
      content: `Queen Creek Yard Pros connects you with qualified, licensed ${keyword} contractors throughout Queen Creek and the greater Phoenix metropolitan area. Our network of pre-screened, experienced landscaping professionals specialize in ${keyword} and are ready to transform your property.

Whether you're looking for routine maintenance, a complete installation, or specialized ${keyword} solutions, our network includes contractors with the expertise, licensing, and track record to deliver exceptional results. Our ${keyword} contractors understand Queen Creek's unique desert climate, including water conservation requirements, soil conditions, heat-resistant materials, and HOA regulations that may affect your project.`,
    },
    {
      title: `Why Choose Our ${capitalizedName} Contractor Network?`,
      content: `Our network of Queen Creek ${keyword} contractors brings years of combined experience, industry certifications, and local expertise to every project. Every ${keyword} contractor in our network maintains current Arizona state licensing and carries comprehensive liability and workers' compensation insurance.

Our ${keyword} contractors have extensive experience working in Queen Creek's specific climate and conditions. They understand the challenges of desert landscaping, including water conservation requirements, heat management, and selecting plants and materials that thrive in Arizona's environment. They use premium materials and proven installation techniques, staying current with industry best practices and innovative solutions.`,
    },
    {
      title: `Understanding ${capitalizedName} in Queen Creek's Climate`,
      content: `Queen Creek's desert climate requires specialized knowledge and techniques for successful ${keyword} projects. Our ${keyword} contractors understand the unique challenges presented by Arizona's environment.

Queen Creek has specific water conservation regulations that affect ${keyword} projects. Our contractors are well-versed in these requirements and can design and implement ${keyword} solutions that comply with local water use restrictions while maintaining beautiful, functional landscapes. Arizona's intense sun and high temperatures require ${keyword} materials that can withstand prolonged exposure, and our contractors select materials that resist fading, cracking, and degradation from UV exposure.`,
    },
  ];

  // Comprehensive FAQs with detailed answers
  const faqs = [
    {
      question: `How much does ${keyword} cost in Queen Creek?`,
      answer: `The cost of ${keyword} in Queen Creek varies based on the size of your property, scope of work, materials selected, and complexity of the installation. Our ${keyword} contractors provide free, detailed estimates that break down all costs including materials, labor, and permits. During your consultation, your contractor will discuss your budget and help you understand the investment required for your specific project.`,
    },
    {
      question: `How long does a ${keyword} project take?`,
      answer: `Project timelines for ${keyword} services depend on the scope and complexity of your project. Simple ${keyword} tasks may be completed in a day, while comprehensive installations can take several days to weeks. Your ${keyword} contractor will provide a detailed timeline during your initial consultation and keep you updated throughout the project.`,
    },
    {
      question: `Are the ${keyword} contractors licensed and insured?`,
      answer: `Yes, we only connect you with ${keyword} contractors who maintain current Arizona state licensing and carry comprehensive insurance coverage. All contractors in our network undergo a thorough vetting process. You can work with confidence knowing your ${keyword} project is in the hands of qualified, protected professionals.`,
    },
    {
      question: `Do ${keyword} contractors handle permits and approvals?`,
      answer: `Yes, professional ${keyword} contractors typically handle all necessary permits and approvals as part of their service. They're familiar with Queen Creek's permit requirements and will ensure all work complies with local building codes and regulations.`,
    },
  ];

  return { sections, faqs };
}

export async function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

export default function ServicePage({ params }: PageProps) {
  const service = services.find((s) => s.slug === params.slug);

  if (!service) {
    notFound();
  }

  const { sections, faqs } = getServiceContent(service.keyword, service.name);
  const title = capitalizeServiceName(service.name);
  const description = `Get matched with qualified ${service.keyword} contractors in Arizona. Connect with licensed professionals for expert landscaping solutions. Get a free quote today!`;
  const heroImage = getHeroImage(service.slug);

  return (
    <ServicePageTemplate
      title={title}
      keyword={service.keyword}
      description={description}
      heroImage={heroImage}
      sections={sections}
      faqs={faqs}
      services={services.filter((s) => s.slug !== service.slug).slice(0, 6)}
      slug={service.slug}
      city="Queen Creek"
      geo={{ lat: 33.2487, lng: -111.6343 }}
    />
  );
}

export async function generateMetadata({ params }: PageProps) {
  const service = services.find((s) => s.slug === params.slug);

  if (!service) {
    return {
      title: "Service Not Found",
    };
  }

  const title = capitalizeServiceName(service.name);

  return {
    title: `${title} | Queen Creek Yard Pros`,
    description: `Professional ${service.keyword} services in Queen Creek, AZ. Expert landscaping solutions for your home or business.`,
  };
}
