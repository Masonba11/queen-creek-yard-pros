import Image from "next/image";

export default function YardExpertsPartner() {
  return (
    <div className="my-20 animate-fade-in">
      <div className="modern-card p-10 text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-8">
          View our proud partner{" "}
          <a
            href="https://theyardexperts.com"
            target="_blank"
            rel="noopener noreferrer"
            className="gradient-text hover:underline transition-all duration-200"
          >
            The Yard Experts
          </a>
        </h2>

        {/* Logo */}
        <div className="mb-8 flex justify-center">
          <Image
            src="/images/TYE-Landscape-Services-Logo.png"
            alt="The Yard Experts Logo"
            width={300}
            height={150}
            className="object-contain"
          />
        </div>

        {/* YouTube Videos */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {/* First Video */}
          <div
            className="w-full rounded-xl overflow-hidden shadow-2xl bg-black relative"
            style={{ aspectRatio: "16/9", minHeight: "400px" }}
          >
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/X20a8hMdoUA?enablejsapi=1&rel=0&modestbranding=1"
              title="The Yard Experts Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="absolute top-0 left-0 w-full h-full"
              style={{ pointerEvents: "auto" }}
            ></iframe>
          </div>

          {/* Second Video */}
          <div
            className="w-full rounded-xl overflow-hidden shadow-2xl bg-black relative"
            style={{ aspectRatio: "16/9", minHeight: "400px" }}
          >
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/3_Jv61seQ9M?enablejsapi=1&rel=0&modestbranding=1"
              title="The Yard Experts Video 2"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="absolute top-0 left-0 w-full h-full"
              style={{ pointerEvents: "auto" }}
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}
