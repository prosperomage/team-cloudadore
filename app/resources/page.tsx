import { ResourceGallery } from "@/components/shared/ResourceGallery";
import { ResourceItem } from "@/types";

const resources: ResourceItem[] = [
  {
    id: "blog-serverless-sec",
    category: "Blog",
    date: "August 20, 2025",
    title: "Serverless Security: Protecting Your Functions",
    description:
      "Deep dive into serverless functions and secure deployments for modern cloud applications.",
    image: "/images/sample1.jpg",
  },
  {
    id: "tmpl-aws-cicd",
    category: "Template",
    date: "August 20, 2025",
    title: "CI/CD Pipeline Template for AWS",
    description:
      "Use this prebuilt AWS CI/CD pipeline template for automated deployments and cloud efficiency.",
    image: "/images/sample2.jpg",
  },
  {
    id: "vid-k8s-deploy",
    category: "Video Tutorial",
    date: "August 20, 2025",
    title: "Kubernetes Deployment Tutorial: Zero to Production",
    description:
      "Step-by-step video guide to deploying your first Kubernetes application.",
    image: "/images/sample3.jpg",
  },
  {
    id: "blog-react-nextjs-15",
    category: "Blog",
    date: "August 22, 2025",
    title: "Scaling React Apps with Next.js 15",
    description:
      "Learn best practices for scaling modern React apps using Next.js features and optimizations.",
    image: "/images/sample4.jpg",
  },
  {
    id: "tmpl-tailwind-landing",
    category: "Template",
    date: "August 25, 2025",
    title: "Tailwind Landing Page Template",
    description:
      "A sleek, responsive landing page template built entirely with TailwindCSS.",
    image: "/images/sample5.jpg",
  },
  {
    id: "vid-vercel-deploy",
    category: "Video Tutorial",
    date: "August 27, 2025",
    title: "Deploying with Vercel: Step-by-Step Guide",
    description:
      "Master the process of deploying Next.js apps on Vercel with custom configurations.",
    image: "/images/sample6.jpg",
  },
  {
    id: "blog-rsc-breakdown",
    category: "Blog",
    date: "August 28, 2025",
    title: "Understanding React Server Components",
    description:
      "A breakdown of how React Server Components optimize data fetching and rendering.",
    image: "/images/sample7.jpg",
  },
  {
    id: "tmpl-portfolio-nextjs",
    category: "Template",
    date: "August 29, 2025",
    title: "Portfolio Template with Next.js",
    description:
      "Use this modern portfolio template to showcase your work with animations and transitions.",
    image: "/images/sample8.jpg",
  },
  {
    id: "vid-nextjs-google-auth",
    category: "Video Tutorial",
    date: "September 1, 2025",
    title: "Next.js Authentication with Google",
    description:
      "Learn how to add Google authentication in your Next.js app using Firebase.",
    image: "/images/sample9.jpg",
  },
  {
    id: "blog-lighthouse-seo",
    category: "Blog",
    date: "September 3, 2025",
    title: "Optimizing Lighthouse Scores",
    description:
      "Tips for improving your website’s Lighthouse performance, accessibility, and SEO metrics.",
    image: "/images/sample10.jpg",
  },
  {
    id: "tmpl-saas-dashboard",
    category: "Template",
    date: "September 5, 2025",
    title: "Dashboard Template for SaaS",
    description:
      "A modern SaaS dashboard template designed with Tailwind and shadcn/ui.",
    image: "/images/sample11.jpg",
  },
  {
    id: "vid-nestjs-prisma-api",
    category: "Video Tutorial",
    date: "September 7, 2025",
    title: "Building APIs with NestJS and Prisma",
    description:
      "Learn backend development with NestJS and Prisma ORM for scalable applications.",
    image: "/images/sample12.jpg",
  },
  {
    id: "blog-docker-deploy",
    category: "Blog",
    date: "September 8, 2025",
    title: "Deploying Dockerized Apps",
    description:
      "A complete guide to deploying containerized applications in production.",
    image: "/images/sample13.jpg",
  },
  {
    id: "tmpl-ecommerce-ui",
    category: "Template",
    date: "September 9, 2025",
    title: "E-commerce UI Template",
    description:
      "Use this responsive e-commerce UI template with product cards and checkout flow.",
    image: "/images/sample14.jpg",
  },
];

const page = () => {
  return (
    <div>
      <section
        className="relative h-87.5 flex flex-col bg-(--color-primary-blue) justify-center items-center text-center text-white bg-cover bg-center"
        style={{ backgroundImage: "url('/images/sample1.jpg')",  }}
      >
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-3">
            Learning Resources
          </h1>
          <p className="max-w-2xl mx-auto text-lg text-gray-200">
            Explore our comprehensive library of tutorials, templates, guides,
            and tools curated by industry experts to accelerate your cloud
            journey.
          </p>
          <div className="mt-6  border rounded-xl ">
            <input
              type="text"
              placeholder="Search resources..."
              className="w-full md:w-100 px-4 py-2 rounded-full text-white  focus:outline-none"
            />
          </div>
        </div>
      </section>

      {/* Optional: Hero section for the page */}
      {/* <section className="bg-(--color-primary-blue) py-20 text-center text-white">
        <h1 className="text-4xl md:text-5xl font-bold">Cloud Learning Hub</h1>
        <p className="mt-4 opacity-80">
          Explore our curated list of guides, templates, and tutorials.
        </p>
      </section> */}

      {/* The Reusable Gallery */}
      <ResourceGallery
        items={resources}
        itemsPerPage={6}
        title="Browse Resources"
      />
    </div>
  );
};

export default page;
