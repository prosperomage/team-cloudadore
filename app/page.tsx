import Button from "@/components/shared/Button";
import {
  FaUsers,
  FaCertificate,
  FaHandshake,
  FaBookOpen,
  FaShoppingCart,
  FaCalendarAlt,
} from "react-icons/fa";
import { MdEvent } from "react-icons/md";
import Image from "next/image";
import { FeatureCard } from "@/components/shared/FeatureCard";
import { EventCard } from "@/components/shared/EventsCard";
import Link from "next/link";
import { MerchCard } from "@/components/shared/MerchCard";
import { Product, TestimonialData } from "@/types";
import { TestimonialCard } from "@/components/shared/TestimonialCard";

interface TestimonialCardProps {
  data: TestimonialData;
}

//partnerships
const partners: string[] = [
  "Slack",
  "Amazon",
  "Logitech",
  "Google",
  "Facebook",
];

// json data fro testimonials
const testimonials: TestimonialData[] = [
  {
    id: 1,
    author: "Omolara George",
    role: "Senior Cloud Architect",
    text: "CloudAdore Club transformed my career. The community support, expert resources, and networking opportunities helped me advance from a junior developer to a cloud architect in just two years.",
  },
  {
    id: 2,
    author: "Omolara George",
    role: "Senior Cloud Architect",
    text: "CloudAdore Club transformed my career. The community support, expert resources, and networking opportunities helped me advance from a junior developer to a cloud architect in just two years.",
  },
  {
    id: 3,
    author: "Omolara George",
    role: "Senior Cloud Architect",
    text: "CloudAdore Club transformed my career. The community support, expert resources, and networking opportunities helped me advance from a junior developer to a cloud architect in just two years.",
  },
];

// json data fo the
const products: Product[] = [
  { id: "1", name: "CloudAdore T-Shirt", price: "₦19,999.00" },
  { id: "2", name: "CloudAdore T-Shirt", price: "₦19,999.00" },
  { id: "3", name: "CloudAdore T-Shirt", price: "₦19,999.00" },
  { id: "4", name: "CloudAdore T-Shirt", price: "₦19,999.00" },
];

const Stat = ({
  icon,
  number,
  label,
}: {
  icon: React.ReactNode;
  number: string;
  label: string;
}) => {
  return (
    <div className="text-center flex flex-col items-center gap-2">
      <div className="text-2xl">{icon}</div>

      <h3 className="text-xl font-semibold">{number}</h3>

      <p className="text-sm text-gray-200">{label}</p>
    </div>
  );
};

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto">
      {/* hero section */}
      <section className="relative w-full bg-(--color-primary-blue) text-white overflow-visible">
        {/* Background Overlay */}
        <div className="absolute inset-0 bg-black/50 z-0" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-10 items-center">
          {/* Left Content */}
          <div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
              Building the Future <br />
              of <span className="text-(--color-accent-orange)">
                Cloud
              </span>{" "}
              through <br />
              Community
            </h1>

            <p className="mt-6 text-gray-200 max-w-lg">
              Join a global community of cloud professionals, developers, and
              innovators sharing knowledge, collaborating, and growing together.
            </p>

            {/* Buttons */}
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <button className="bg-(--color-secondary-blue) px-6 py-3 rounded-lg hover:opacity-90 transition">
                Join Community
              </button>

              <button className="border border-white px-6 py-3 rounded-lg hover:bg-white hover:text-black transition">
                Learn More
              </button>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative w-full h-70 sm:h-87.5 lg:h-105">
            <Image
              src="/HeroImage.svg"
              alt="cloud community"
              fill
              className="object-contain"
            />
          </div>
        </div>

        {/* Stats Card */}
        <div className="absolute left-0 right-0 -bottom-20 z-20 px-6">
          <div className="max-w-6xl mx-auto bg-(--color-secondary-blue) text-white rounded-xl shadow-xl p-6 grid grid-cols-2 md:grid-cols-4 gap-6">
            <Stat icon={<FaUsers />} number="10K+" label="Active Members" />

            <Stat icon={<MdEvent />} number="100+" label="Events Hosted" />

            <Stat
              icon={<FaCertificate />}
              number="500"
              label="Certifications Earned"
            />

            <Stat
              icon={<FaHandshake />}
              number="20+"
              label="Partners Organization"
            />
          </div>
        </div>
      </section>

      {/* About Section */}

      <section className="bg-(--color-bg-light) pt-32 md:pt-40 pb-20">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-10 items-center">
          {/* Left */}
          <div>
            <p className="text-sm text-(--color-secondary-blue) font-semibold">
              ABOUT US
            </p>

            <h2 className="text-3xl font-bold text-(--color-text-dark) mt-3">
              Building the Future of Cloud Innovation
            </h2>

            <p className="text-(--color-text-light) mt-4">
              CloudAdore is more than just a community, it's a movement. We
              bring together passionate individuals who believe in the
              transformative power of cloud technology.
            </p>

            <p className="text-(--color-text-light) mt-4">
              From beginners taking their first steps to seasoned professionals
              pushing boundaries, everyone has a place in our inclusive
              community.
            </p>

            <Link href="/about">
              <button className="mt-6 border border-(--color-secondary-blue) text-(--color-secondary-blue) px-6 py-3 rounded-lg hover:bg-(--color-secondary-blue) hover:text-white transition">
                Learn More
              </button>
            </Link>
          </div>

          {/* Right */}
          <div className="relative w-full h-75 md:h-100 rounded-xl overflow-hidden">
            <Image
              src="/rectangle 1457.svg"
              alt="cloud team"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* why choose us feature */}
      <section className="bg-(--color-bg-light) py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold text-(--color-text-dark)">
              Why Choose CloudAdore?
            </h2>

            <p className="text-(--color-text-light) mt-3 text-sm sm:text-base">
              From learning and collaboration to exclusive perks and real-world
              events, CloudAdore gives you everything you need.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10 sm:mt-14">
            <FeatureCard
              icon={<FaUsers />}
              title="CloudHub"
              description="Connect with fellow cloud enthusiasts and collaborate on projects."
              color="bg-blue-100 text-blue-600"
            />

            <FeatureCard
              icon={<FaCalendarAlt />}
              title="Events & Programs"
              description="Attend workshops, webinars, and networking events."
              color="bg-orange-100 text-orange-500"
            />

            <FeatureCard
              icon={<FaShoppingCart />}
              title="Merch Shop"
              description="Show your CloudAdore pride with exclusive apparel."
              color="bg-blue-100 text-blue-500"
            />

            <FeatureCard
              icon={<FaBookOpen />}
              title="Resources"
              description="Access tutorials, templates and expert insights."
              color="bg-green-100 text-green-600"
            />
          </div>
        </div>
      </section>

      {/* event section */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row justify-between md:items-center gap-4">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-(--color-text-dark)">
                Upcoming Events
              </h2>

              <p className="text-(--color-text-light) mt-2 text-sm sm:text-base">
                Join us for exciting events and workshops
              </p>
            </div>

            <button className="text-(--color-secondary-blue) font-medium hover:underline">
              View All Events →
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10 sm:mt-12">
            <EventCard
              image="/Rectangle 1457.svg"
              title="Cloud Architecture Summit 2025"
              date="September 14, 2025"
              location="University of Ibadan"
              description="Join industry leaders for insights on next-generation cloud architecture."
            />

            <EventCard
              image="/Rectangle 1457.svg"
              title="AWS Certification Workshop"
              date="September 14, 2025"
              location="University of Ibadan"
              description="Intensive hands-on workshop to prepare for AWS certification."
            />

            <EventCard
              image="/Rectangle 1457.svg"
              title="CloudSprint Hackathon 2025"
              date="September 14, 2025"
              location="University of Ibadan"
              description="48-hour challenge where innovators build cloud solutions."
            />
          </div>
        </div>
      </section>

      {/* merch section */}

      <section
        style={{ maxWidth: "1200px", margin: "0 auto", padding: "4rem 1.5rem" }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            marginBottom: "2.5rem",
          }}
        >
          <div>
            <h2 style={{ fontSize: "2rem", margin: "0 0 0.5rem 0" }}>
              Own the Cloud Look
            </h2>
            <p style={{ color: "var(--color-text-light)", margin: 0 }}>
              Premium merch for innovators and dreamers.
            </p>
          </div>
          <Link
            style={{
              color: "var(--color-primary-blue)",
              fontWeight: 600,
              textDecoration: "none",
            }}
            href="/merchstore"
          >
            Visit Store →
          </Link>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "2rem",
          }}
        >
          {products.map((product) => (
            <MerchCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* testimonial */}
      <section className="max-w-7xl mx-auto px-6 py-20 bg-(--color-bg-light)">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-(--color-text-dark) mb-4">
            What others say about our community
          </h2>
          <p className="max-w-2xl mx-auto text-(--color-text-light) text-sm md:text-base">
            Our community provides resources and support for Christians in the
            tech industry to grow both spiritually and professionally.
          </p>
        </div>

        {/* Grid: 1 col on mobile, 3 cols on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((item) => (
            <TestimonialCard key={item.id} data={item} />
          ))}
        </div>

        {/* Pagination Dots (Matching Screenshot) */}
        <div className="flex justify-center gap-2 mt-10">
          <span className="h-2 w-2 rounded-full bg-(--color-primary-blue)" />
          <span className="h-2 w-2 rounded-full bg-slate-300" />
          <span className="h-2 w-2 rounded-full bg-slate-300" />
        </div>
      </section>

      {/* companies we work with */}
      <section className="w-full bg-(--color-bg-light) border-y border-(--color-border)  py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 lg:gap-24">
            {partners.map((partner) => (
              <div
                key={partner}
                className="flex items-center justify-center grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300 cursor-pointer"
              >
                {/* Replacing with a styled text-logo for the demo */}
                <span className="text-xl text-blue-500 md:text-2xl font-bold tracking-tight  ">
                  {partner.toLowerCase()}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
