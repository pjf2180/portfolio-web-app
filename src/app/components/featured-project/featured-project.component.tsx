import Image from "next/image";
import Link from "next/link";

interface FeaturedProjectProps {
  projectId: string;
  projectName: string;
  description: string;
  imgSrc: string;
  hideLink?: boolean;
}
export function FeaturedProject({
  projectId,
  projectName,
  description,
  imgSrc,
  hideLink,
}: FeaturedProjectProps) {
  return (
    <div className="">
      <div className="w-full h-[350px] relative border-black border-[1px] border-b-0">
        <Image
          src={imgSrc}
          alt={`Image for ${projectName}`}
          quality={100}
          sizes="(max-width: 400px) 100vw, (max-width: 1280px) 50vw, 25vw "
          fill
          priority
        />
      </div>
      <div className="bg-white border-black border-[1px] h-[250px] p-3">
        <h3 className="font-bold text-xl my-4">{projectName}</h3>
        <p>{description}</p>
      </div>
      {!hideLink && (
        <div className="flex justify-center border-black border-[1px] border-t-0">
          <Link className="w-full" href={`/projects/${projectId}`}>
            <button className="w-full p-3 bg-black text-white">
              Learn More
            </button>
          </Link>
        </div>
      )}
    </div>
  );
}
