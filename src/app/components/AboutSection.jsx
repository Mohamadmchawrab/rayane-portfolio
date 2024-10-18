"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="flex flex-row flex-wrap space-x-2 space-y-1">
        <li className="w-auto bg-600 text-white border-2 border-600 rounded-2xl p-2 m-1">
          Social Media Strategy
        </li>
        <li className="w-auto bg-600 text-white border-2 border-600 rounded-2xl p-2 m-1">
          Content Creation
        </li>
        <li className="w-auto bg-600 text-white border-2 border-600 rounded-2xl p-2 m-1">
          Paid Advertising (Facebook/Instagram)
        </li>
        <li className="w-auto bg-600 text-white border-2 border-600 rounded-2xl p-2 m-1">
          Influencer Marketing
        </li>
        <li className="w-auto bg-600 text-white border-2 border-600 rounded-2xl p-2 m-1">
          SEO/SEM
        </li>
        <li className="w-auto bg-600 text-white border-2 border-600 rounded-2xl p-2 m-1">
          Data Analytics (Google Analytics, Hootsuite)
        </li>
        <li className="w-auto bg-600 text-white border-2 border-600 rounded-2xl p-2 m-1">
          Audience Targeting
        </li>
        <li className="w-auto bg-600 text-white border-2 border-600 rounded-2xl p-2 m-1">
          Brand Management
        </li>
        <li className="w-auto bg-600 text-white border-2 border-600 rounded-2xl p-2 m-1">
          Campaign Optimization
        </li>
        <li className="w-auto bg-600 text-white border-2 border-600 rounded-2xl p-2 m-1">
          Instagram
        </li>
        <li className="w-auto bg-600 text-white border-2 border-600 rounded-2xl p-2 m-1">
          Facebook
        </li>
        <li className="w-auto bg-600 text-white border-2 border-600 rounded-2xl p-2 m-1">
          LinkedIn
        </li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>Libanese Baccalaureate/Life Science Doha High School</li>
        <li>Bachelor of Banking&Finance Beirut Arab University</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/projects/hero2.png" width={550} height={550} alt="about-image" />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg text-justify">
          With a strong background in social media strategy, I specialize in crafting compelling digital campaigns that drive engagement and brand visibility. My expertise spans content creation, audience targeting, and data-driven optimization, allowing me to deliver impactful results across various platforms. I am passionate about leveraging social media to tell authentic stories, connect with audiences, and elevate brand presence. Constantly seeking innovative strategies, I thrive in dynamic environments that challenge me to push creative boundaries and achieve measurable success.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
