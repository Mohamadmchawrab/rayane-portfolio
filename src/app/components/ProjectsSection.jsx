"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Bella Aurora LB",
    description: "Key features often include galleries, case studies, and testimonials, allowing visitors to understand the creator's process and impact. Additionally, portfolio websites often incorporate contact forms and social media links, making it easy for potential clients or collaborators to connect.",
    image: "/images/gifFile3.GIF",
    tag: ["All", "Web"],
    gitUrl: "",
    previewUrl: "https://www.instagram.com/bellaaurora_lebanon?igsh=cXAyYXRseHhhcWJn",
  },
  {
    id: 6,
    title: "Ragheb Dakdouk Salon",
    image: "/images/gifFile1.GIF",
    previewUrl: "https://www.instagram.com/ragheb_dakdouk?igsh=MWw2Y2RvZGkyYmtyNQ==",
  },
  {
    id: 5,
    title: "Crystal Care Clinic",
    image: "/images/gifFile5.GIF",
    previewUrl: "https://www.instagram.com/crystalcareclinic?igsh=MWdzNTF3aWVpb3lweg==",
  },
  {
    id: 3,
    title: "Slimit Clinic",
    image: "/images/gifFile2.GIF",
    previewUrl: "https://www.instagram.com/slimitclinic?igsh=bDgyYnpicmh5bnpu",
  },
  {
    id: 3,
    title: "Slimit Clinic",
    image: "/images/gifFile4.GIF",
    previewUrl: "https://www.instagram.com/slimitclinic?igsh=bDgyYnpicmh5bnpu",
  },
  {
    id: 4,
    title: "Crystal Care Clinic",
    image: "/images/gifFile6.GIF",
    previewUrl: "https://www.instagram.com/crystalcareclinic?igsh=MWdzNTF3aWVpb3lweg==",
  }
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {projectsData.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
