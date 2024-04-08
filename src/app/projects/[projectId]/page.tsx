import ProjectDetail from "@/app/components/project-detail/project-detail.component";
import { listProjects } from "@/app/lib/data/projects/listProjects";

export default function ProjectDetailPage({
  params,
}: {
  params: { projectId: string };
}) {
  return (
    <ProjectDetail
      headingText="E-Commerce"
      projectDescription="The most awesome description"
      techStack={[{logo: '', name: 'React'},{logo: '', name: 'React'},]}
      imageSources={[
        "crown-preview",
        "/e-commerce/cart-dropdown",
        "/e-commerce/payment",
      ]}
    />
  );
}

export async function generateStaticParams() {
  const featuredProjects = await listProjects();
  const projectIds: string[] = featuredProjects.map((p) => p.projectId);

  return projectIds.map((id) => ({
    slug: id,
  }));
}
