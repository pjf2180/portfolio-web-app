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
        "E-commerce clothing website with React frontend and serverless architecture.",
    },

    {
      projectId: "restaurantfinder",
      imgSrc: "/meals-app-preview.png",
      projectName: "Restaurant Finder",
      description:
        "React Native mobile app to find restaurants around you.",
    },
    {
      projectId: "caffemobileorder",
      imgSrc: "/caffeMobileOrder/caffe-menu-preview.png",
      projectName: "Cafe Mobile Order",
      description:
        "Caffe websited for online orders using Angular and Firebase.",
    },
    {
      projectId: "evaluation",
      imgSrc: "/evaluation-preview.png",
      projectName: "Evaluation Web app",
      description:
        "Developed an evaluation web application from front-end to back-end allowing an organization to stay compliant under government regulations.",
      noDetails: true,
    },
  ];
  return projects;
}
