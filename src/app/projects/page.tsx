import { CardGallery } from "../components/card-gallery/card-gallery.component";
import { FeaturedProject } from "../components/featured-project/featured-project.component";
import { listProjects } from "../lib/data/projects/listProjects";

export default async function ProjectsPage() {
  const featuredProjects = await listProjects();

  return (
    <div className="h-full pt-40 px-8">
      <CardGallery>
        {featuredProjects.map((p) => (
          <FeaturedProject
            key={p.projectId}
            projectId={p.projectId}
            description={p.description}
            projectName={p.projectName}
            imgSrc={p.imgSrc}
            hideLink={p.noDetails}
          />
        ))}
      </CardGallery>
    </div>
  );
}
