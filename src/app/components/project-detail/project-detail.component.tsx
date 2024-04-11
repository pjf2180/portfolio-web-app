"use client";
import Image from "next/image";
import { ProjectDetails } from "@/app/lib/data/projects/getProject";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

interface ProjectDetailProps {
  details: ProjectDetails;
}
export default function ProjectDetail({ details }: ProjectDetailProps) {
  const { techStack, headingText, projectDescription, imageSources } = details;

  const techStackNames: string[] = techStack.map((t) => t.name);

  return (
    <div className="flex justify-center flex-wrap">
      <div className="w-full lg:w-1/2">
        <div className="bg-gray-200 p-8">
          <div className="border-b-2 border-black pb-2 mb-4">
            <h1 className="text-3xl font-bold">{headingText}</h1>
          </div>
          <h2 className="text-lg mb-2">Tech Stack</h2>
          <ul>
            {techStackNames.map((name: string) => (
              <li key={name} className="text-xl">{name}</li>
            ))}
          </ul>
          <p className="pt-8 text-2xl">{projectDescription}</p>
        </div>
      </div>
      <div className="w-full lg:w-1/2 max-lg:p-3 pl-2">
        <ResponsiveMasonry
          columnsCountBreakPoints={{ 0: 2,  }}
        >
          <Masonry gutter="20px">
            {imageSources.map((imageSource) => {
              return (
                <div
                  key={imageSource}
                  className="w-full relative border-[1px] border-black "
                >
                  <Image
                    src={imageSource}
                    alt="Crown Clothing Home Page"
                    priority
                    height={800}
                    width={300}
                    style={{ width: "100%", height: "auto" }}
                  />
                </div>
              );
            })}
          </Masonry>
        </ResponsiveMasonry>
      </div>
    </div>
  );
}
