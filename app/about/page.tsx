import { MissionVision, TeamMember } from "@/types";
import React from "react";

const partners: string[] = [
  "Slack",
  "Amazon",
  "Logitech",
  "Google",
  "Facebook",
];

const TeamSection: React.FC<{ members: TeamMember[] }> = ({ members }) => (
  <section className="max-w-7xl mx-auto px-6 py-20">
    <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
      Meet our Dedicated Team
    </h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
      {members.map((member) => (
        <div
          key={member.id}
          className="bg-white rounded-2xl overflow-hidden border border-(--color-border) group"
        >
          <div className="aspect-4/5 bg-slate-100 overflow-hidden">
            <img
              src={member.imageUrl}
              alt={member.name}
              className="w-full h-full object-cover transition-transform group-hover:scale-105"
            />
          </div>
          <div className="p-6 text-center border-t border-(--color-border)">
            <h4 className="font-bold text-lg">{member.name}</h4>
            <p className="text-(--color-secondary-blue) text-sm font-medium">
              {member.role}
            </p>
          </div>
        </div>
      ))}
    </div>
  </section>
);

const teamData: TeamMember[] = [
  {
    id: "1",
    name: "Adesola Lawal",
    role: "Founder & CEO",
    imageUrl: "/images/team/adesola.jpg",
  },
  {
    id: "2",
    name: "Chidi Okechukwu",
    role: "Chief Technology Officer",
    imageUrl: "/images/team/chidi.jpg",
  },
  {
    id: "3",
    name: "Oluwatobiloba Adeyemi",
    role: "Head of Cloud Infrastructure",
    imageUrl: "/images/team/tobi.jpg",
  },
  {
    id: "4",
    name: "Nneka Nwosu",
    role: "Product Design Lead",
    imageUrl: "/images/team/nneka.jpg",
  },
  {
    id: "5",
    name: "Babajide Balogun",
    role: "Senior DevOps Engineer",
    imageUrl: "/images/team/jide.jpg",
  },
  {
    id: "6",
    name: "Efeoghene Akpo",
    role: "Community Growth Manager",
    imageUrl: "/images/team/efe.jpg",
  },
  {
    id: "7",
    name: "Oluwasey Idowu",
    role: "Backend Architect",
    imageUrl: "/images/team/amina.jpg",
  },
  {
    id: "8",
    name: "Omage Jehoshaphat",
    role: "Frontend Developer",
    imageUrl: "/images/team/dami.jpg",
  },
  {
    id: "9",
    name: "Ifeanyi Okoro",
    role: "Security Operations Lead",
    imageUrl: "/images/team/ifeanyi.jpg",
  },
];

const MissionCard: React.FC<MissionVision> = ({
  title,
  description,
  variant,
}) => (
  <div
    className={`p-10 rounded-3xl border-t-4 bg-white shadow-sm flex flex-col items-center text-center 
    ${variant === "blue" ? "border-(--color-secondary-blue)" : "border-(--color-accent-orange)"}`}
  >
    <div
      className={`w-12 h-12 rounded-full mb-6 flex items-center justify-center 
      ${variant === "blue" ? "bg-blue-50 text-(--color-secondary-blue)" : "bg-orange-50 text-(--color-accent-orange)"}`}
    >
      {/* Icon placeholder */}
      <span className="text-xl">★</span>
    </div>
    <h3 className="text-2xl font-bold mb-4">{title}</h3>
    <p className="text-(--color-text-light) leading-relaxed">{description}</p>
  </div>
);

const page = () => {
  return (
    <div>
      <section className=" flex items-center bg-(--color-primary-blue) justify-center text-center text-white px-6">
        {/* Background Overlay */}
        
        <div className=" my-10 py-20 z-10 max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            About Cloudadore
          </h1>
          <p className="text-lg md:text-xl opacity-90">
            Join a global community of innovators shaping the future of cloud
            technology through collaboration, learning, and shared impact.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="flex flex-col lg:flex-row items-center gap-12 p-8 lg:p-12">
          <div className="lg:w-1/2 space-y-6">
            <h2 className="text-xl font-bold text-(--color-text-dark)">
              Building the Future of Cloud Innovation
            </h2>
            <div className="text-(--color-text-light) space-y-4 leading-relaxed">
              <p>
                At CloudAdore Club, we believe the cloud isn’t just technology,
                it’s a bridge to limitless possibilities. What began as a small
                group of enthusiasts exchanging ideas has grown into a thriving
                hub for cloud professionals, learners, and innovators from all
                walks of life.{" "}
              </p>
              <p>
                Our vision was simple: create a space where knowledge is shared
                openly, challenges turn into opportunities, and connections
                spark collaboration. We’ve seen how the right community can
                accelerate learning, inspire creativity, and fuel bold
                solutions.
              </p>
              <p>
                Today, we host workshops, collaborative projects, and networking
                opportunities that help members grow personally and
                professionally. From beginners to seasoned experts, our
                inclusive community thrives on diversity in skills,
                perspectives, and experiences.
              </p>
              <p>
                Our story is still being written and we invite you to be part of
                it. Here, your ideas can take flight, your skills can grow, and
                your passion for the cloud will be celebrated.
              </p>

              <p>
                Our vision was simple: create a space where knowledge is shared
                openly, challenges turn into opportunities, and connections
                spark collaboration.
              </p>
            </div>
          </div>
          <div className="lg:w-1/2">
            <img
              src="/HeroImage.svg"
              alt="Innovation"
              className="rounded-2xl w-full shadow-lg"
            />
          </div>
        </div>
      </section>
      <section className="bg-slate-50 py-24">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Mission and Vision
            </h2>
            <p className="text-(--color-text-light) max-w-2xl mx-auto">
              Our community provides resources and support for Christians in the
              tech industry to grow both spiritually and professionally.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <MissionCard
              variant="blue"
              title="Our Mission"
              description="Our mission is to empower individuals at every stage of their cloud journey by providing access to knowledge, fostering collaboration, and creating opportunities..."
              icon={<span />}
            />
            <MissionCard
              variant="orange"
              title="Our Vision"
              description="To create a vibrant and inclusive cloud community that empowers individuals and organizations to unlock their full potential in the digital world."
              icon={<span />}
            />
          </div>
        </div>
      </section>
      {/* meet the team  */}
      <section className="max-w-7xl mx-auto px-6 py-20 bg-white">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-(--color-text-dark)">
          Meet our Dedicated Team
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-10">
        {teamData.map((member) => (
          <div 
            key={member.id} 
            className="flex flex-col rounded-2xl border border-(--color-border) overflow-hidden bg-white shadow-sm hover:shadow-md transition-all duration-300 group"
          >
            {/* Image Container with Aspect Ratio */}
            <div className="aspect-4/5 bg-slate-100 overflow-hidden">
              <img 
                src={member.imageUrl} 
                alt={member.name} 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 scale-100 group-hover:scale-105"
              />
            </div>

            {/* Content Area */}
            <div className="p-5 text-center border-t border-(--color-border)">
              <h4 className="text-lg font-bold text-(--color-text-dark) leading-tight">
                {member.name}
              </h4>
              <p className="text-(--color-secondary-blue) text-sm font-medium mt-1">
                {member.role}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
     
    </div>
  );
};

export default page;
