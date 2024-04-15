const ALL_PROJECTS_BY_ID: { [id: string]: ProjectDetails } = {
  ecommerce: {
    headingText: "E-Commerce",
    projectDescription: `I built this project because I wanted to learn React and its ecosystem as quickly as possible, when I started learning React a few years back, I already had experience with other web frameworks like Angular and ASP .NET MVC, which made my learning experience fairly easy.\n
    This E-Commerce web app is fully functional, it has user authentication using firebase auth, it allows users to see products grouped by categories, items can be added to the cart and cart item quantity can be edited, once users are ready they can checkout using a Stripe checkout plugin.\n
    In addition to mastering the React fundamentals, one of my main goals was to learn how to architecture large scale React applications taking maintainability and performance into account. For that, I learned how to use some of the most common state management and side effect libraries such as react-redux, reselect and redux-saga.\n
    Learning React was fun, I truly enjoyed comparing how different technologies solve many common problems in web development like keeping the view in sync with state, state management and interaction with native browser APIs. These different point of views made me think about the pros and cons of each technology like Angular vs React and I got a much deeper understanding of them.\n
    `,
    techStack: [
      { logo: "", name: "React" },
      { logo: "", name: "redux" },
      { logo: "", name: "redux-saga" },
      { logo: "", name: "reselect" },
      { logo: "", name: "responsive-design" },
      { logo: "", name: "jest" },
      { logo: "", name: "enzyme" },
      { logo: "", name: "nodejs" },
    ],
    imageSources: [
      "/crown-preview.png",
      "/e-commerce/cart-dropdown.png",
      "/e-commerce/payment.png",
    ],
  },
  projectmanager: {
    headingText: "Project Manager",
    projectDescription: `Building this project was a great learning experience, I learned the most important features NextJS offers like Server Side Rendering and various caching strategies, delivering outstanding user experiences with virtually no configuration compared to full client-side rendered React apps.\n
    So far, the app consists of a login page, a projects page where tasks are displayed by status for each project, and users can add/edit tasks using NextJS form actions which are secure and easy to use for these use cases. The next features I’m thinking about adding are comments for each task so users can collaborate, an activity feed so teams can know what everyone is working on and a section to send invites for other users to collaborate.\n
    `,
    techStack: [
      { logo: "", name: "NextJs" },
      { logo: "", name: "Prisma" },
      { logo: "", name: "PostgresSQL" },
      { logo: "", name: "Tailwindcss" },
      { logo: "", name: "Storybook" },
    ],
    imageSources: [
      "/project-manager/home.png",
      "/project-manager/detail.png",
    ],
  },
  restaurantfinder: {
    headingText: "Restaurant Finder",
    projectDescription: `This mobile app allows users to discover restaurants around them or based on a desired location. Users can view results as a list or on a map and can also see the details of the restaurant such as rating and menu.\n
      While working on this project I learned that each React Native app has a Javascript runtime that is used to execute all of the React related code, and that there is a bridge that connects this runtime with native IOS or Android components to update the view.\n`,
    techStack: [
      { logo: "", name: "React Native" },
      { logo: "", name: "google-maps" },
      { logo: "", name: "Expo" },
    ],
    imageSources: [
      "/meals-app-preview.png",
      "/restaurantFinder/meals-app-login.png",
      "/restaurantFinder/restaurant-search.png",
      "/restaurantFinder/restaurant-map.png",
    ],
  },
  caffemobileorder: {
    headingText: "Caffe mobile order Website",
    projectDescription: `The website gives users a convenient way to see a local caffe's menu and purchase items online for pickup. It is completely mobile friendly. The UI is inspired by the Starbucks online order website.\n
      `,
    techStack: [
      { logo: "", name: "Angular" },
      { logo: "", name: "Firebase" },
      { logo: "", name: "Stripe" },
      { logo: "", name: "Angular Material" },
      { logo: "", name: "responsive-design" },
    ],
    imageSources: [
      "/caffeMobileOrder/caffe-menu.png",
      "/caffeMobileOrder/caffe-product.png",
      "/caffeMobileOrder/caffe-cart.png",
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
