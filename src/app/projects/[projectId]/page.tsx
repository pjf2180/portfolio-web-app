import ProjectDetail from "@/app/components/project-detail/project-detail.component";
import { getProject } from "@/app/lib/data/projects/getProject";
import { listProjects } from "@/app/lib/data/projects/listProjects";

export default async function ProjectDetailPage({
  params,
}: {
  params: { projectId: string };
}) {
  const projectDetails = await getProject(params.projectId);

  return <ProjectDetail details={projectDetails} />;
}

export async function generateStaticParams() {
  const featuredProjects = await listProjects();
  const projectIds: string[] = featuredProjects.map((p) => p.projectId);

  return projectIds.map((id) => ({
    slug: id,
  }));
}
