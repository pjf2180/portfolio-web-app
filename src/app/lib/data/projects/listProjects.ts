export interface ProjectListing {
  projectId: string;
  projectName: string;
  description: string;
  imgSrc: string;
  noDetails?: boolean;
}
export async function listProjects(): Promise<ProjectListing[]> {
  const projects: ProjectListing[] = [
    {
      projectId: "ecommerce",
      imgSrc: "/crown-preview.png",
      projectName: "E-Commerce website",
      description:
        "E-commerce clothing website using a serverless architecture and the React ecosystem for the frontend.",
    },
    {
      projectId: "evaluation",
      imgSrc: "/evaluation-preview.png",
      projectName: "Evaluation Web app",
      description:
        "Developed an evaluation web application from front-end to back-end allowing an organization to stay compliant under government regulations",
      noDetails: true,
    },
    {
      projectId: "restaurantfinder",
      imgSrc: "/meals-app-preview.png",
      projectName: "Restaurant Finder",
      description:
        "Mobile app to find restaurants around you or based on a location.",
    },
    {
      projectId: "cafe",
      imgSrc: "/caffe-preview.png",
      projectName: "Cafe Mobile Order",
      description:
        "Caffe online orders website using a serverless architecture and Angular.",
    },
  ];
  return projects;
}
