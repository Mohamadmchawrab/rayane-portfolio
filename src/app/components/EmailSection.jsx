"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { toast } from 'react-toastify'; // Import toast function
import InstagramIcon from "../../../public/instagram.svg";
import LinkedinIcon from "../../../public/linkedin-icon.svg";
import FacebookIcon from "../../../public/facebook-icon.svg";

const navLinks = [
  {
    title: "Instagram",
    path: "https://www.instagram.com/rayane.merhi?igsh=MWN0M3dzeTAwdDl0cA==", // Replace with actual Instagram URL
    icon: InstagramIcon, // Use imported icon
  },
  {
    title: "LinkedIn",
    path: "https://www.linkedin.com/in/rayan-merhi-0a8935198?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app", // Replace with actual LinkedIn URL
    icon: LinkedinIcon, // Use imported icon
  }
];

const EmailSection = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      email: e.target.email.value,
      subject: e.target.subject.value,
      message: e.target.message.value,
      emailUser: e.target.emailUser.value
    };
    const JSONdata = JSON.stringify(data);
    const endpoint = "/api/send-email";  // Correct endpoint path

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSONdata,
    };

    const response = await fetch(endpoint, options);
    console.log(response)
    const resData = await response.json();

    if (response.status === 200) {
      console.log("Message sent.");
      toast.success("Message sent successfully!", {
        position: "top-right",
      });
      setEmailSubmitted(true);
    }
  };

  return (
    <section
      id="contact"
      className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative"
    >
      <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>
      <div className="z-10">
        <h5 className="text-xl font-bold text-white my-2">
          Let&apos;s Connect
        </h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md">
          {" "}
          With a passion for crafting compelling narratives and staying at the forefront of digital trends, I&apos;m always eager to connect with others and collaborate on impactful social media projects. I enjoy exploring new strategies and tools to enhance brand visibility and engagement. Outside of work, I appreciate the creativity of visual storytelling and the power of authentic connections. Whether you have a question about social media or just want to say hello, I’ll be happy to connect!
        </p>
        <div className="socials flex flex-row gap-2">
          <Link href={navLinks[0].path} target="_blank" rel="noopener noreferrer">
            <Image src={navLinks[0].icon} alt={`${navLinks[0].title} Icon`} width={25} height={25} />
          </Link>
          <Link href={navLinks[1].path} target="_blank" rel="noopener noreferrer">
            <Image src={navLinks[1].icon} alt={`${navLinks[1].title} Icon`} width={30} height={30} />
          </Link>
        </div>
      </div>
      <div>
        {emailSubmitted ? (
          <p className="text-green-500 text-sm mt-2">
            Email sent successfully!
          </p>
        ) : (
          <form className="flex flex-col" onSubmit={handleSubmit}>
            <div className="mb-6">
              <label
                htmlFor="email"
                className="text-white block mb-2 text-sm font-medium"
              >
                Your email
              </label>
              <input
                name="emailUser"
                required
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="Rayane.merhii2@gmail.com"
              />
               <label
                htmlFor="email"
                className="text-white block mb-2 mt-3  text-sm font-medium"
              >
                To
              </label>
              <input
                name="email"
                type="email"
                id="email"
                disabled
                required
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="Rayane.merhii2@gmail.com"
                value="Rayane.merhii2@gmail.com"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="subject"
                className="text-white block text-sm mb-2 font-medium"
              >
                Subject
              </label>
              <input
                name="subject"
                type="text"
                id="subject"
                required
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="Just saying hi"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="message"
                className="text-white block text-sm mb-2 font-medium"
              >
                Message
              </label>
              <textarea
                name="message"
                id="message"
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="Let's talk about..."
              />
            </div>
            <button
              type="submit"
              className="bg-primary-500 hover:bg-primary-600 text-white font-medium py-2.5 px-5 rounded-lg w-full"
            >
              Send Message
            </button>
          </form>
        )}
      </div>
    </section>
  );
};

export default EmailSection;
