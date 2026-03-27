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
    </div>
  );
}
