import React from "react";
import { EyeIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

const ProjectCard = ({ imgUrl, title, description, previewUrl }) => {
  return (
    <div className="max-w-sm mx-auto group relative rounded-[50px] border-2 border-[#000] overflow-hidden">
      {/* Image */}
      <div
        className="min-h-[680px] rounded-[50px] relative"
        style={{ 
          backgroundImage: `url(${imgUrl})`, 
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Hover overlay */}
        <div className="absolute inset-0 bg-[#181818] bg-opacity-0 group-hover:bg-opacity-80 transition-all duration-500 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100">
          <Link
            href={previewUrl}
            target="_blank"
            className="h-14 w-14 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link"
          >
            <EyeIcon className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link:text-white" />
          </Link>
          {/* Description and title */}
          <div className="text-center mt-4">
            <h5 className="text-lg sm:text-xl font-semibold text-white">{title}</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
