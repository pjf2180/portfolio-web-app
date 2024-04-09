const ALL_PROJECTS_BY_ID: { [id: string]: ProjectDetails } = {
  ecommerce: {
    headingText: "E-Commerce",
    projectDescription: "The most awesome description",
    techStack: [
      { logo: "", name: "React" },
      { logo: "", name: "React" },
    ],
    imageSources: [
      "/crown-preview.png",
      "/e-commerce/cart-dropdown.png",
      "/e-commerce/payment.png",
    ],
  },
  restaurantfinder: {
    headingText: "Restaurant Finder",
    projectDescription:
      "This mobile app allows users to discover restaurants around them or based on a desired location. Users can view results as a list or on a map and can also see the details of the restaurant such as rating and menu.",
    techStack: [
      { logo: "", name: "React Native" },
      { logo: "", name: "Expo" },
    ],
    imageSources: [
      "/meals-app-preview.png",
      "/restaurantFinder/meals-app-login.png",
      "/restaurantFinder/restaurant-search.png",
      "/restaurantFinder/restaurant-map.png",
    ],
  },
};

export interface ProjectDetails {
  headingText: string;
  imageSources: string[];
  projectDescription: string;
  techStack: { name: string; logo: string }[];
}
export async function getProject(projectId: string) {
  return ALL_PROJECTS_BY_ID[projectId];
}
