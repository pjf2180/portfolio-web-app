import { listProjects } from "@/app/lib/data/projects/listProjects";

export default function ProjectDetail({
  params,
}: {
  params: { projectId: string };
}) {
  return <p>hi{params.projectId}</p>;
}

export async function generateStaticParams() {
  const featuredProjects = await listProjects();
  const projectIds: string[] = featuredProjects.map((p) => p.projectId);

  return projectIds.map((id) => ({
    slug: id,
  }));
}
