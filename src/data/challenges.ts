import { Challenge } from "../firebase/schema";

export default [
  {
    slug: "routing-fundemental",
    title: "Routing Fundemental I",
    description:
      "Think you know SolidJS routing? Prove it! This challenges challenges your understanding of core routing concepts, including route definitions, nested routes, and programmatic navigation. Designed for developers who are ready to go beyond the basics.",
    questions: [
      {
        difficulty: 1,
        tag: "route",
        question: "What is the primary function of the `<Route>` component?",
        context:
          "The `<Route>` component is a fundamental building block in many web applications.",
        options: [
          {
            text: "To define the structure of the application and map URLs to specific components.",
            correct: true,
            explanation:
              "This is the core functionality of the `<Route>` component. It allows you to specify which component should be rendered based on the current URL.",
          },
          {
            text: "To style the visual appearance of the application.",
            correct: false,
            explanation:
              "Styling is typically handled by CSS or other styling solutions, not the `<Route>` component.",
          },
          {
            text: "To manage user authentication and authorization.",
            correct: false,
            explanation:
              "While `<Route>` can be used in conjunction with authentication, its primary role isn't to manage user access control.",
          },
          {
            text: "To fetch data from external APIs.",
            correct: false,
            explanation:
              "Data fetching is typically handled by separate data management solutions or libraries.",
          },
        ],
      },
      {
        difficulty: 2,
        tag: "route",
        question:
          "How can you prevent a component associated with a `<Route>` from re-rendering when switching between two different URLs that it matches?",
        context:
          "Consider a scenario where you have two URLs, `/login` and `/register`, both handled by the same component.",
        options: [
          {
            text: "By using the `matchFilters` prop to specify additional constraints.",
            correct: false,
            explanation:
              "While `matchFilters` can add constraints, it doesn't prevent re-rendering in this scenario.",
          },
          {
            text: "By wrapping the component in a higher-order component (HOC) that prevents updates.",
            correct: false,
            explanation:
              "While an HOC could potentially manage this, it's not the most straightforward or conventional approach.",
          },
          {
            text: "By providing an array of paths to the `path` prop.",
            correct: true,
            explanation:
              "This is the correct way to achieve this. When you provide an array of paths, the component will remain mounted even when switching between the paths in the array.",
          },
          {
            text: "It is not possible to prevent the component from re-rendering in this scenario.",
            correct: false,
            explanation:
              "It is definitely possible to prevent re-rendering using the array of paths approach.",
          },
        ],
      },
      {
        difficulty: 3,
        tag: "route",
        question:
          "What is the purpose of the `preload` prop in the `<Route>` component?",
        context:
          "The `preload` prop allows for more advanced control over the component lifecycle within a route.",
        options: [
          {
            text: "To preload images and other media associated with the route.",
            correct: false,
            explanation:
              "While preloading media is important, it's not the direct function of the `preload` prop in this context.",
          },
          {
            text: "To specify the data that should be fetched before the component is rendered.",
            correct: true,
            explanation:
              "This is a common use case for `preload`. It allows you to initiate data fetching before the route is fully navigated to, improving perceived performance.",
          },
          {
            text: "To define animations and transitions that should occur when the route is entered or exited.",
            correct: false,
            explanation:
              "Animations and transitions are typically handled by separate animation libraries or techniques.",
          },
          {
            text: "To prevent the component from rendering until a certain condition is met.",
            correct: false,
            explanation:
              "Conditional rendering is typically handled using conditional logic within the component itself or route guards.",
          },
        ],
      },
      {
        difficulty: 4,
        tag: "route",
        question:
          "In a complex application with deeply nested routes, how does the `children` prop help in organizing the route structure?",
        context:
          "Imagine an application with multiple levels of navigation, such as a dashboard with various sub-sections.",
        options: [
          {
            text: "The `children` prop is not relevant in nested route structures.",
            correct: false,
            explanation:
              "The `children` prop is essential for building nested route structures.",
          },
          {
            text: "It allows for defining sub-routes within a parent route, creating a hierarchical structure.",
            correct: true,
            explanation:
              "This is precisely how the `children` prop helps organize routes. It enables you to nest `<Route>` components, creating parent-child relationships between routes.",
          },
          {
            text: "It enables the merging of multiple route configurations from different parts of the application.",
            correct: false,
            explanation:
              "While route merging might be a feature in some frameworks, it's not the primary purpose of the `children` prop.",
          },
          {
            text: "It provides a way to dynamically generate routes based on user interactions.",
            correct: false,
            explanation:
              "Dynamic route generation is often handled through programmatic route definition or route parameters.",
          },
        ],
      },
      {
        difficulty: 2,
        tag: "route",
        question:
          "What is the purpose of the `matchFilters` prop in the `<Route>` component?",
        context:
          "The `matchFilters` prop allows for fine-grained control over route matching.",
        options: [
          {
            text: "To define the visual appearance of the component rendered by the route.",
            correct: false,
            explanation:
              "Styling is typically handled by CSS or other styling solutions, not the `matchFilters` prop.",
          },
          {
            text: "To specify additional constraints that must be met for the route to match.",
            correct: true,
            explanation:
              "This is the primary function of the `matchFilters` prop. It allows you to add custom logic to determine if a route should match the current URL.",
          },
          {
            text: "To manage user authentication and authorization for the route.",
            correct: false,
            explanation:
              "While `matchFilters` could be used in conjunction with authentication, its primary role isn't to manage user access control.",
          },
          {
            text: "To fetch data from external APIs before the route is rendered.",
            correct: false,
            explanation:
              "Data fetching is typically handled by separate data management solutions or the `preload` prop.",
          },
        ],
      },
      {
        difficulty: 3,
        tag: "route",
        question:
          "How can you define multiple paths for a single `<Route>` component?",
        context:
          "Consider a scenario where you want the same component to handle multiple URLs without re-rendering.",
        options: [
          {
            text: "By using the `children` prop to nest multiple `<Route>` components within the parent route.",
            correct: false,
            explanation:
              "While nesting routes is useful for organizing structure, it doesn't achieve the desired outcome in this case.",
          },
          {
            text: "By providing an array of paths to the `path` prop.",
            correct: true,
            explanation:
              "This is the correct way to define multiple paths for a single `<Route>` component. The component will remain mounted when switching between these paths.",
          },
          {
            text: "By defining separate `<Route>` components for each path and conditionally rendering the same component within them.",
            correct: false,
            explanation:
              "This approach would lead to re-rendering as you switch between the routes.",
          },
          {
            text: "It is not possible to define multiple paths for a single `<Route>` component.",
            correct: false,
            explanation:
              "It is definitely possible to define multiple paths using the array of paths approach.",
          },
        ],
      },
      {
        difficulty: 2,
        tag: "route",
        question:
          "What is the purpose of defining routes in a web application?",
        context:
          "Routes are a fundamental concept in web development, especially for single-page applications.",
        options: [
          {
            text: "To style the visual appearance of different sections of the application.",
            correct: false,
            explanation:
              "Styling is typically handled by CSS or other styling solutions, not route definitions.",
          },
          {
            text: "To specify which components should be displayed for different URLs.",
            correct: true,
            explanation:
              "This is the core purpose of defining routes. It allows you to map URLs to specific components, creating a dynamic user experience.",
          },
          {
            text: "To store and retrieve data from a database.",
            correct: false,
            explanation:
              "Data storage and retrieval are handled by database management systems and data access layers.",
          },
          {
            text: "To handle user input and form submissions.",
            correct: false,
            explanation:
              "While routes can be involved in handling form submissions, their primary role is to define the application's structure and navigation.",
          },
        ],
      },
      {
        difficulty: 1,
        tag: "route",
        question:
          "Which prop is used to specify the component to be rendered by a `<Route>`?",
        context:
          "The `<Route>` component needs to know which component to render when its path matches the current URL.",
        options: [
          {
            text: "`path`",
            correct: false,
            explanation:
              "The `path` prop is used to specify the URL path that the route should match.",
          },
          {
            text: "`component`",
            correct: true,
            explanation:
              "This is the correct prop. It takes a component as its value, and this component is rendered when the route is active.",
          },
          {
            text: "`matchFilters`",
            correct: false,
            explanation:
              "The `matchFilters` prop is used to add additional constraints for route matching.",
          },
          {
            text: "`children`",
            correct: false,
            explanation: "The `children` prop is used to define nested routes.",
          },
        ],
      },
      {
        difficulty: 4,
        tag: "route",
        question:
          'How does the concept of "preloading" in the context of routes benefit a web application?',
        context:
          "Preloading is a technique used to improve the perceived performance of a web application.",
        options: [
          {
            text: "It preloads all images and media on the website, regardless of which route is active.",
            correct: false,
            explanation:
              "While preloading media is beneficial, preloading in the context of routes is more specific.",
          },
          {
            text: "It allows for fetching data or initializing components before the user actually navigates to the route.",
            correct: true,
            explanation:
              "This is the main benefit of preloading. By preloading the necessary resources, the transition to the route appears smoother and faster to the user.",
          },
          {
            text: "It prevents components from rendering until all data is fetched, ensuring data is always available.",
            correct: false,
            explanation:
              "While preloading can help with data availability, it doesn't necessarily prevent rendering until all data is fetched.",
          },
          {
            text: "It preloads the entire application structure on initial page load, eliminating the need for further navigation.",
            correct: false,
            explanation:
              "Preloading in the context of routes is more granular and focused on individual routes or sections of the application.",
          },
        ],
      },
      {
        difficulty: 3,
        tag: "route",
        question:
          "What is the relationship between the `path` prop and the `matchFilters` prop in a `<Route>` component?",
        context:
          "Both `path` and `matchFilters` play a role in determining if a route matches the current URL.",
        options: [
          {
            text: "The `matchFilters` prop overrides the `path` prop, making the `path` irrelevant.",
            correct: false,
            explanation:
              "The `path` prop is still essential for the initial matching.",
          },
          {
            text: "The `path` prop is evaluated first, and if it matches, the `matchFilters` are then applied as additional checks.",
            correct: true,
            explanation:
              "This is the correct order of evaluation. The `path` prop determines the initial match, and `matchFilters` can add further constraints.",
          },
          {
            text: "The `matchFilters` prop is evaluated first, and only if it matches, the `path` prop is considered.",
            correct: false,
            explanation:
              "The order is reversed; the `path` is checked before the `matchFilters`.",
          },
          {
            text: "The `path` and `matchFilters` props are independent and have no influence on each other.",
            correct: false,
            explanation:
              "They are related in the sense that they both contribute to route matching.",
          },
        ],
      },
    ],
    duration: 10,
    difficulty: 2,
    questionCount: 10,
    result: [
      {
        score: [0, 3],
        title: "Just Starting Out",
        feedback:
          "It looks like you're just beginning your journey with routes. 🗺️  Don't worry, everyone starts somewhere!  Review the concepts and try again. You'll get there! 😊",
      },
      {
        score: [4, 7],
        title: "On the Right Track",
        feedback:
          "You're making good progress! 🛤️ You have a grasp of some routing concepts, but there's still room for improvement. 💪 Keep learning and practicing, and you'll master routes in no time! 🚀",
      },
      {
        score: [8, 10],
        title: "Routing Master",
        feedback:
          "Wow, you really know your routes! 🏆  You've demonstrated a strong understanding of the concepts.  Keep up the great work! 🎉",
      },
    ],
  },
  {
    title: "SolidStart Data Management Challenge",
    slug: "solidstart-data-challenge",
    description:
      "Test your knowledge of SolidStart's data management features.",
    difficulty: 3,
    questionCount: 10,
    questions: [
      {
        difficulty: 1,
        tag: "data-loading",
        question:
          "What is the primary function of the `createAsync` method in SolidStart?",
        context:
          "The `createAsync` function is a key component of SolidStart's data loading mechanism.",
        options: [
          {
            text: "To fetch data from a server.",
            correct: false,
            explanation:
              "While `createAsync` can be used to fetch server data, its primary role is broader.",
          },
          {
            text: "To transform an asynchronous function into a signal.",
            correct: true,
            explanation:
              "This signal allows you to access the data returned from the promise and manage Suspense/Transitions. ",
          },
          {
            text: "To cache data for later use.",
            correct: false,
            explanation:
              'Caching is handled by the `cache` function, not `createAsync`. ["cite": 35]',
          },
          {
            text: "To define a route data function.",
            correct: false,
            explanation:
              'Route data functions are defined using the `preload` function. ["cite": 35]',
          },
        ],
      },
      {
        difficulty: 2,
        tag: "caching",
        question:
          "In the context of SolidStart's `cache` function, what does `.keyFor` do?",
        context:
          "The `cache` function in SolidStart provides methods for managing cached data.",
        options: [
          {
            text: "It retrieves the key of the cached function.",
            correct: false,
            explanation:
              "That's the role of the `.key` method, not `.keyFor`. ",
          },
          {
            text: "It invalidates all calls to the cached function.",
            correct: false,
            explanation:
              "Invalidation is done using the `revalidate` function. ",
          },
          {
            text: "It retrieves a specific key for a given input to the cached function.",
            correct: true,
            explanation:
              "This allows you to invalidate specific cached entries. ",
          },
          {
            text: "It defines the key used for caching the function's output.",
            correct: false,
            explanation:
              "The cache key is defined when you initially call the `cache` function. ",
          },
        ],
      },
      {
        difficulty: 2,
        tag: "actions",
        question: "How do you create a server action in SolidStart?",
        context: "Actions in SolidStart are used to mutate data on the server.",
        options: [
          {
            text: "By using the `serverAction` function.",
            correct: false,
            explanation: "There's no built-in function named `serverAction`.",
          },
          {
            text: "By defining a function within a server-side file.",
            correct: false,
            explanation:
              "While actions are typically on the server, the location isn't the defining factor.",
          },
          {
            text: 'By using the `action` function and the `"use server"` pragma.',
            correct: true,
            explanation:
              "This combination marks the function as a server action. ",
          },
          {
            text: "By exporting a function from a route file.",
            correct: false,
            explanation:
              "Exporting a function doesn't automatically make it a server action.",
          },
        ],
      },
      {
        difficulty: 1,
        tag: "optimistic-updates",
        question:
          "What is the purpose of optimistic updates in SolidStart actions?",
        context:
          "Optimistic updates enhance the user experience by providing immediate feedback.",
        options: [
          {
            text: "To speed up server response times.",
            correct: false,
            explanation:
              "Optimistic updates don't actually change server performance.",
          },
          {
            text: "To display the expected result of an action before the server confirms it.",
            correct: true,
            explanation: "This creates a more responsive feel for the user. ",
          },
          {
            text: "To prevent errors from occurring during data mutation.",
            correct: false,
            explanation:
              "Error prevention is a separate concern from optimistic updates.",
          },
          {
            text: "To cache the results of actions for future use.",
            correct: false,
            explanation: "Caching is not the primary purpose of this feature.",
          },
        ],
      },
      {
        difficulty: 3,
        tag: "revalidation",
        question:
          "What is the primary way to revalidate data in SolidStart after an action?",
        context: "Actions often require updating the displayed data.",
        options: [
          {
            text: "By returning a new value from the action function.",
            correct: false,
            explanation:
              "While actions can return data, it's not the primary means of revalidation.",
          },
          {
            text: "By calling the `revalidate` function within the action.",
            correct: true,
            explanation:
              "This signals SolidStart to refresh the associated data. ",
          },
          {
            text: "By manually triggering a page reload.",
            correct: false,
            explanation:
              "This is inefficient and disrupts the user experience.",
          },
          {
            text: "By using the `createAsync` function again.",
            correct: false,
            explanation:
              "`createAsync` is for initial data fetching, not revalidation.",
          },
        ],
      },
      {
        difficulty: 2,
        tag: "actions",
        question: "What does the `.with` method do in a SolidStart action?",
        context: "The `.with` method is used to configure an action.",
        options: [
          {
            text: "It defines the data the action should return.",
            correct: false,
            explanation:
              "The return value is determined by the action's logic.",
          },
          {
            text: "It specifies the HTTP method for the action.",
            correct: false,
            explanation:
              "The method is usually derived from the form's `method` attribute.",
          },
          {
            text: "It adds middleware to the action's request handling.",
            correct: true,
            explanation: "This allows you to modify the request or response. ",
          },
          {
            text: "It links the action to a specific route.",
            correct: false,
            explanation: "Actions are not directly bound to routes.",
          },
        ],
      },
      {
        difficulty: 1,
        tag: "optimistic-updates",
        question: "What is the `useSubmission` hook used for in SolidStart?",
        context:
          "This hook is related to optimistic updates and action submissions.",
        options: [
          {
            text: "To submit data to a server action.",
            correct: false,
            explanation: "Submission is handled by the form itself.",
          },
          {
            text: "To track the status of a single action submission.",
            correct: true,
            explanation: "It provides details like pending/error state. ",
          },
          {
            text: "To manage multiple action submissions at once.",
            correct: false,
            explanation:
              "For multiple submissions, you would use `useSubmissions`.",
          },
          {
            text: "To define the optimistic update for an action.",
            correct: false,
            explanation:
              "Optimistic updates are defined within the action function.",
          },
        ],
      },
      {
        difficulty: 3,
        tag: "optimistic-updates",
        question:
          "How can you filter submissions in the `useSubmissions` hook?",
        context:
          "Sometimes you need to work with a subset of action submissions.",
        options: [
          {
            text: "By providing a filter function as an argument.",
            correct: true,
            explanation:
              "This function determines which submissions are included. ",
          },
          {
            text: "By using the `.filter` method on the returned array.",
            correct: false,
            explanation: "The hook itself provides the filtering mechanism.",
          },
          {
            text: "By accessing specific properties of the submission objects.",
            correct: false,
            explanation:
              "While you can access properties, it's not the primary filtering method.",
          },
          {
            text: "By defining separate `useSubmission` hooks for each action.",
            correct: false,
            explanation: "This is not necessary for filtering.",
          },
        ],
      },
      {
        difficulty: 2,
        tag: "server-data",
        question:
          "What is the purpose of the `preload` function in SolidStart?",
        context:
          "This function is related to route data and server-side rendering.",
        options: [
          {
            text: "To define a route data function that runs on the server.",
            correct: true,
            explanation:
              "This allows you to fetch data before rendering the page. ",
          },
          {
            text: "To load data asynchronously on the client-side.",
            correct: false,
            explanation:
              "Client-side asynchronous loading is handled by `createAsync`.",
          },
          {
            text: "To cache data for improved performance.",
            correct: false,
            explanation: "Caching is done using the `cache` function.",
          },
          {
            text: "To create server actions for data mutation.",
            correct: false,
            explanation:
              "Server actions are defined using the `action` function.",
          },
        ],
      },
      {
        difficulty: 1,
        tag: "suspense",
        question: "What does the `createAsync` function do in SolidStart?",
        context:
          "This function is essential for managing asynchronous operations.",
        options: [
          {
            text: "It fetches data from an API and returns a promise.",
            correct: false,
            explanation:
              "While it can fetch data, its core purpose is broader.",
          },
          {
            text: "It transforms a promise into a signal that can trigger Suspense.",
            correct: true,
            explanation:
              "This allows for efficient loading and rendering of asynchronous data. ",
          },
          {
            text: "It defines a server-side function to handle data loading.",
            correct: false,
            explanation:
              "Server-side data loading is often done within `preload` functions.",
          },
          {
            text: "It creates a cache for storing fetched data.",
            correct: false,
            explanation: "Caching is handled by the `cache` function.",
          },
        ],
      },
    ],
    result: [
      {
        score: [0, 2],
        title: "Data Novice",
        feedback:
          "It seems you're new to SolidStart data management. Review the guide and try again!",
      },
      {
        score: [3, 4],
        title: "Data Apprentice",
        feedback:
          "You've grasped some concepts, but there's room for improvement. Dive deeper into the guide!",
      },
      {
        score: [5, 5],
        title: "Data Master",
        feedback:
          "Excellent! You've mastered SolidStart's data management techniques.",
      },
    ],
  },
] as Challenge[];
