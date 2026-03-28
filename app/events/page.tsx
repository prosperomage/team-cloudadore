import Button from "@/components/shared/Button";
import { SlCalender } from "react-icons/sl";
import { CiLocationOn } from "react-icons/ci";
import { GrMultimedia } from "react-icons/gr";
import Image from "next/image";
import { ResourceGallery } from "@/components/shared/ResourceGallery";
import { ResourceItem } from "@/types";

const eventResources: ResourceItem[] = [
  {
    id: "evt-aws-workshop-lagos",
    category: "Workshop",
    date: "September 14, 2025",
    title: "AWS Certification Workshop: Lagos Edition",
    description:
      "Hands-on training covering Cloud Practitioner and Solutions Architect associate tracks.",
    image: "/eventsImages/sample-evt-1.jpg",
  },
  {
    id: "evt-azure-summit-virtual",
    category: "Conference",
    date: "September 20, 2025",
    title: "Azure Cloud Summit 2025",
    description:
      "A virtual conference featuring Microsoft MVPs discussing enterprise-scale AI and DevOps.",
    image: "/eventsImages/sample-evt-2.jpg",
  },
  {
    id: "evt-google-dev-fest",
    category: "Meetup",
    date: "October 05, 2025",
    title: "Google Cloud DevFest Abuja",
    description:
      "Connect with local developers to explore Kubernetes, BigQuery, and Vertex AI patterns.",
    image: "/eventsImages/sample-evt-3.jpg",
  },
  {
    id: "evt-serverless-nig",
    category: "Webinar",
    date: "October 12, 2025",
    title: "Serverless Architecture in Nigeria",
    description:
      "Exploring cost-effective serverless solutions for startups using Lambda and DynamoDB.",
    image: "/eventsImages/sample-evt-4.jpg",
  },
  {
    id: "evt-cyber-sec-oct",
    category: "Workshop",
    date: "October 24, 2025",
    title: "Cloud Security & Compliance Masterclass",
    description:
      "Deep dive into IAM roles, VPC security groups, and protecting data at rest in the cloud.",
    image: "/eventsImages/sample-evt-5.jpg",
  },
  {
    id: "evt-finops-africa",
    category: "Conference",
    date: "November 02, 2025",
    title: "FinOps Africa: Optimizing Cloud Spend",
    description:
      "Learn how to manage cloud budgets and reduce waste in multi-cloud environments.",
    image: "/eventsImages/sample-evt-6.jpg",
  },
];

const page = () => {
  return (
    <div>
      <div className="bg-[url('/eventsImages/FrameC.svg')] bg-cover bg-center bg-no-repeat h-screen w-full">
        {/* <Image
          src={backgroundImage}
          alt="Background Image"
          height={100}
          width={1920}
          // Makes the image fill the parent container
          objectFit="cover" // Ensures the image covers the entire area
          quality={100} // Optional: Adjust image quality
          priority // Optional: Load image with high priority
          style={{ zIndex: -1 }} // Place the image behind other content
        /> */}

        {/* tabs and cards  */}
      </div>
      <div className="max-w-7xl mx-auto mt-24 px-6 grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <span className="inline-block px-4 py-2 rounded-lg bg-orange-50 text-(--color-accent-orange) font-bold text-sm">
            Featured Event
          </span>

          <h1 className="text-xl md:text-2xl font-extrabold text-(--color-text-dark)">
            AWS Certification Workshop
          </h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-(--color-text-light)">
            <div className="flex items-center gap-3">
              <SlCalender className="text-(--color-primary-blue)" />{" "}
              <span>September 14, 2026</span>
            </div>
            <div className="flex items-center gap-3">
              <GrMultimedia className="text-(--color-primary-blue)" />{" "}
              <span>9AM - 5PM WAT</span>
            </div>
            <div className="flex items-center gap-3">
              <CiLocationOn className="text-(--color-primary-blue)" />{" "}
              <span>Virtual Conference</span>
            </div>
          </div>

          <p className="text-lg text-(--color-text-light) leading-relaxed">
            Join industry leaders for insights on next-generation cloud
            architecture patterns, serverless computing, and enterprise-scale
            solutions.
          </p>

          <div className="space-y-4 pt-4 border-t border-(--color-border)">
            <div className="flex gap-4">
              <SlCalender className="text-2xl text-(--color-secondary-blue) mt-1" />
              <div>
                <h3 className="font-bold text-(--color-text-dark)">
                  Who Should Attend
                </h3>
                <p className="text-sm text-(--color-text-light)">
                  Open to developers, architects, and IT leaders passionate
                  about cloud innovation.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <SlCalender className="text-2xl text-(--color-secondary-blue) mt-1" />
              <div>
                <h3 className="font-bold text-(--color-text-dark)">
                  What to Expect
                </h3>
                <p className="text-sm text-(--color-text-light)">
                  Keynote speakers, breakout sessions, networking events,
                  gatherings, and opportunities to connect with like-minded
                  professionals.
                </p>
              </div>
            </div>
          </div>
          <Button text="Register Now" />
        </div>

        <div className="relative aspect-square">
          <Image
            src="/eventsImages/Rectangle 1457.svg"
            alt="Event Illustration"
            fill
            className="object-contain"
          />
        </div>
      </div>

      {/* events card */}
      <section>
        <ResourceGallery
          items={eventResources}
          allTabLabel="All Resources"
          itemsPerPage={6}
        />
      </section>
    </div>
  );
};

export default page;
