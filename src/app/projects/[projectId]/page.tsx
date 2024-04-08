import { CardGallery } from "@/app/components/card-gallery/card-gallery.component";
import { listProjects } from "@/app/lib/data/projects/listProjects";
import Image from "next/image";

export default function ProjectDetail({
  params,
}: {
  params: { projectId: string };
}) {
  return (
    <div className="flex justify-center items-center">
      <div className="w-full md:w-1/2 p-4">
        <div className="bg-gray-200 p-8">
          <div className="border-b-2 border-black pb-2 mb-4">
            <h1 className="text-3xl font-bold">E-commerce website</h1>
          </div>
          <h2 className="text-lg mb-2">Tech Stack</h2>
          <ul>
            <li className="text-xl">React</li>
            <li className="text-xl">Redux</li>
            <li className="text-xl">Redux-saga</li>
            <li className="text-xl">NodeJs</li>
            <li className="text-xl">Firebase</li>
          </ul>
          <p className="pt-8 text-2xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
            dignissimos, sit ea nulla officia, velit tempora minima labore
            numquam necessitatibus, harum ab commodi cumque? Accusantium ipsum
            tempore a, illo veritatis laboriosam tenetur, modi eveniet magni
            minima unde in nobis minus!
          </p>
        </div>
      </div>
      <div className="w-full md:w-1/2 p-4">
        <div className="p-4">
          <CardGallery>
            <div className="w-full h-[350px] relative border-[1px] border-black ">
              <Image
                src={"/crown-preview.png"}
                alt="Crown Clothing Home Page"
                fill
                priority
              />
            </div>
            <div className="w-full h-[350px] relative border-[1px] border-black ">
              <Image
                src={"/e-commerce/cart-dropdown.png"}
                alt="Crown Clothing Home Page"
                fill
                priority
              />
            </div>
            <div className="w-full h-[350px] relative border-[1px] border-black ">
              <Image
                src={"/e-commerce/payment.png"}
                alt="Crown Clothing Home Page"
                fill
                priority
              />
            </div>
          </CardGallery>
        </div>
      </div>
    </div>
  );
}

export async function generateStaticParams() {
  const featuredProjects = await listProjects();
  const projectIds: string[] = featuredProjects.map((p) => p.projectId);

  return projectIds.map((id) => ({
    slug: id,
  }));
}
