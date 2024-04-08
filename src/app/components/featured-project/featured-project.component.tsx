import Image from "next/image";
import Link from "next/link";

interface FeaturedProjectProps {
  projectId: string;
  projectName: string;
  description: string;
  imgSrc: string;
}
export function FeaturedProject({
  projectId,
  projectName,
  description,
  imgSrc,
}: FeaturedProjectProps) {
  return (
    <div className="">
      <div className="w-full h-[350px] relative border-[1px] border-b-0">
        <Image src={imgSrc} alt="Crown Clothing Home Page" fill priority />
      </div>
      <div className="bg-white border-[1px] h-[250px] p-3">
        <h3 className="font-bold text-xl my-4">{projectName}</h3>
        <p>{description}</p>
      </div>
      <div className="flex justify-center border-[1px] border-t-0">
        <Link href={`/projects/${projectId}`}>
          <button className="w-full p-3 bg-black text-white">Learn More</button>
        </Link>
      </div>
    </div>
  );
}
