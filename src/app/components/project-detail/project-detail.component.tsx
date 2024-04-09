import Image from "next/image";
import { CardGallery } from "../card-gallery/card-gallery.component";
import { ProjectDetails } from "@/app/lib/data/projects/getProject";

interface ProjectDetailProps {
  details: ProjectDetails;
}
export default function ProjectDetail({ details }: ProjectDetailProps) {
  const { techStack, headingText, projectDescription, imageSources } = details;

  const techStackNames: string[] = techStack.map((t) => t.name);

  return (
    <div className="flex justify-center">
      <div className="w-full md:w-1/2 p-4">
        <div className="bg-gray-200 p-8">
          <div className="border-b-2 border-black pb-2 mb-4">
            <h1 className="text-3xl font-bold">{headingText}</h1>
          </div>
          <h2 className="text-lg mb-2">Tech Stack</h2>
          <ul>
            {techStackNames.map((name: string) => (
              <li className="text-xl">{name}</li>
            ))}
          </ul>
          <p className="pt-8 text-2xl">{projectDescription}</p>
        </div>
      </div>
      <div className="w-full md:w-1/2 p-4">
        <div className="p-4">
          <CardGallery>
            {imageSources.map((imageSource) => {
              return (
                <div className="w-full h-[350px] relative border-[1px] border-black ">
                  <Image
                    src={imageSource}
                    alt="Crown Clothing Home Page"
                    fill
                    priority
                  />
                </div>
              );
            })}
          </CardGallery>
        </div>
      </div>
    </div>
  );
}
