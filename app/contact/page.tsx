"use client";

import { Accordion } from "@/components/shared/Accordion";
import React, { useState } from "react";
import { FaPeopleGroup } from "react-icons/fa6";

interface ButtonProps {
  title: string;
  onclick?: () => void;
}

const ContactButton = ({ title }: ButtonProps) => {
  return (
    <div className="bg-[#08568A] rounded-md px-8 py-1 mb-4 text-white cursor-pointer">
      {title}
    </div>
  );
};

const faqData = [
  {
    id: "1",
    question: "How do I join Cloudadore Club?",
    answer:
      "You can join Cloudadore by signing up through our waitlist. Once approved, you will receive an email invitation.",
  },
  {
    id: "2",
    question: "What is Cloudadore about?",
    answer:
      "Cloudadore is a cloud-based startup community that connects developers, founders and innovators.",
  },
  {
    id: "3",
    question: "Is Cloudadore free to join?",
    answer:
      "Yes. Joining the community is completely free during the early access phase.",
  },
  {
    id: "4",
    question: "Can I contribute to Cloudadore projects?",
    answer:
      "Yes. Members can collaborate on open cloud projects and startup tools.",
  },
  {
    id: "5",
    question: "How do I contact support?",
    answer:
      "You can contact the Cloudadore support team through the contact form or the support email.",
  },
];

const contactCard = [
  {
    id: 1,
    title: "Email us",
    text: "Get in touch via email for general inquiries",
    contact: "hello@cloudadoreclub.com",
    Button: "Send Email",
  },
  {
    id: 2,
    title: "Phone Call Support",
    text: "Get in touch from 9AM-5PM WAT via phone",
    contact: "+2348012345678",
    Button: "Contact Us",
  },
  {
    id: 3,
    title: "Email us",
    text: "Interested in partnering with CloudAdore?",
    contact: "partnerships@cloudadoreclub.com",
    Button: "Partnership Support",
  },
];

const page = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const clearForm = () => {
    setForm({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("form submitted");
  };
  return (
    <div className=" mt-10 mx-auto">
      {/* hero section */}
      <section className="bg-blue-500 text-white text-center p-20 ">
        <p className="font-bold  text-[72px]">Contact Us</p>
        <p className="  items-center ">
          Have questions, ideas, or want to collaborate? We'd love to hear from
          you. Reach out to our team and become part of the CloudAdore
          community.
        </p>
      </section>
      <div className="max-w-7xl mx-auto  my-10">
        <section className="my-10">
          <div className=" grid md:grid-cols-3 gap-2">
            {contactCard.map((card, key) => (
              <div
                key={card.id}
                className="flex flex-col items-center bg-[#E5E5E5] shadow-lg space-y-4  rounded-lg"
              >
                <p>
                  <FaPeopleGroup className="w-6 h-6 bg-blue-400 rounded-full mt-8 text-white mx-6" />
                </p>
                <p className="font-bold">{card.title}</p>
                <p className="text-gray-500  ">{card.text}</p>
                <p>{card.contact}</p>
                <ContactButton title={card.Button} />
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* contact form */}
      <section >
        <div className="bg-white rounded-lg max-w-7xl  mx-auto  text-black text-center ">
          <p className="font-bold text-[32px] ">Send a Message</p>
          <h1 className="text-[18px]">
            Feel free to reach out to us with any questions, feedback or
            inquiries. <br /> We are here to assist you every step of the way.
          </h1>
          <section className="bg-[#F8F9FA] py-20 flex justify-center">
            <div className="bg-white w-full max-w-xl rounded-xl shadow-md p-8">
              <div className="text-center mb-6">
                <h2 className="text-xl font-semibold">Send a Message</h2>
                <p className="text-gray-500 text-sm mt-1">
                  Feel free to reach out to us with any questions, feedback or
                  inquiries. We are here to assist you every step of the way.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Full Name */}
                <div>
                  <label className="text-sm font-medium">
                    Full Name <span className="text-red-500">*</span>
                  </label>

                  <input
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    type="text"
                    className="w-full mt-1 border rounded-md px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="text-sm font-medium">
                    Email <span className="text-red-500">*</span>
                  </label>

                  <input
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    type="email"
                    className="w-full mt-1 border rounded-md px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                {/* Subject */}
                <div>
                  <label className="text-sm font-medium">
                    Subject <span className="text-red-500">*</span>
                  </label>

                  <select
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    className="w-full mt-1 border rounded-md px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="">Select a subject</option>
                    <option value="general">General Inquiry</option>
                    <option value="support">Support</option>
                    <option value="partnership">Partnership</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label className="text-sm font-medium">
                    Message <span className="text-red-500">*</span>
                  </label>

                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full mt-1 border rounded-md px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                {/* Bottom Buttons */}
                <div className="flex justify-between items-center pt-2">
                  <button
                    type="button"
                    onClick={clearForm}
                    className="text-sm text-blue-600 hover:underline"
                  >
                    Clear Form
                  </button>

                  <button
                    type="submit"
                    className="bg-blue-600 text-white px-5 py-2 rounded-md hover:bg-blue-700 transition"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </section>
        </div>
      </section>
      {/* faq goes here */}
      <section className="w-full py-20 flex flex-col items-center">
        

        <section className="w-full py-24  flex flex-col items-center px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-(--color-text-dark)">
              Frequently Asked Questions
            </h2>
            <p className="text-(--color-text-light) mt-3">
              Find quick answers to common questions about Cloudadore Club
            </p>
          </div>

          <div className="w-full max-w-3xl">
            <Accordion items={faqData} />
          </div>

          <div className="mt-16 text-center">
            <button className="bg-(--color-primary-blue) text-white px-8 py-3 rounded-xl font-bold hover:bg-(--color-secondary-blue) transition-all active:scale-95 shadow-md cursor-pointer">
              Contact our Support Team
            </button>
          </div>
        </section>

        <div className="mt-10 text-center">
          <p className="text-gray-500 mb-3">Still have questions?</p>

          <button className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700">
            Contact our Support Team
          </button>
        </div>
      </section>
    </div>
  );
};

export default page;
