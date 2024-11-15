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
  {
    title: "SolidJS Reactivity Quiz: Test Your Skills! 🧠",
    slug: "solidjs-reactivity-quiz",
    description:
      "Think you know SolidJS reactivity? 🤔 Take this quiz and put your knowledge to the test! 🏆 From signals and effects to memos and resources, see how well you understand the magic behind Solid's fine-grained updates. ✨",
    difficulty: 2, // Adjusted based on the questions
    questionCount: 10,
    questions: [
      {
        difficulty: 1, // Easy
        tag: "signals",
        question: "What is the primary function of a signal in SolidJS?",
        options: [
          {
            text: "To store and update data within a component.",
            correct: true,
            explanation:
              "Signals act as containers for values that can change over time, triggering updates in the UI.",
          },
          {
            text: "To define a function that will be executed when a button is clicked.",
            correct: false,
            explanation:
              "Signals are not directly related to event handling or button clicks.",
          },
          {
            text: "To fetch data from an external API.",
            correct: false,
            explanation:
              "While signals can hold fetched data, their role is not specifically to fetch it.",
          },
        ],
      },
      {
        difficulty: 2, // Medium
        tag: "effects",
        question: "What is the purpose of the `createEffect` function?",
        options: [
          {
            text: "To create a signal that depends on other signals.",
            correct: false,
            explanation:
              "This describes a computed signal or memo, not an effect.",
          },
          {
            text: "To define a function that will be executed only once when the component is initialized.",
            correct: false,
            explanation:
              "Effects can execute multiple times whenever their dependencies change.",
          },
          {
            text: "To create a side effect that will re-run whenever its dependent signals change.",
            correct: true,
            explanation:
              "Effects automatically track their dependencies and re-execute when those change.",
          },
        ],
      },
      {
        difficulty: 2, // Medium
        tag: "state-management",
        question: "How do you update the value of a signal?",
        context:
          "You have a signal called `count` created with `createSignal(0)`.",
        options: [
          {
            text: "By directly assigning a new value: `count = 5`",
            correct: false,
            explanation:
              "Signals require their setter function to update the value.",
          },
          {
            text: "By using the setter function: `setCount(5)`",
            correct: true,
            explanation:
              "The setter function notifies the reactive system about the change.",
          },
          {
            text: "By modifying the signal's internal state.",
            correct: false,
            explanation:
              "You should not directly manipulate the signal's internal state.",
          },
        ],
      },
      {
        difficulty: 1, // Easy
        tag: "subscribers",
        question: "What is a subscriber in the context of SolidJS reactivity?",
        options: [
          {
            text: "A function that listens for changes in a signal.",
            correct: true,
            explanation:
              "Subscribers are automatically notified when a signal they depend on changes.",
          },
          {
            text: "A variable that stores the current value of a signal.",
            correct: false,
            explanation: "This describes the signal itself.",
          },
          {
            text: "A component that displays the value of a signal.",
            correct: false,
            explanation:
              "While components can display signal values, they are not the core definition of a subscriber.",
          },
        ],
      },
      {
        difficulty: 2, // Medium
        tag: "effects",
        question:
          "What happens when you access a signal within a `createEffect` function?",
        options: [
          {
            text: "The effect will re-run whenever any signal in the component updates.",
            correct: false,
            explanation:
              "Effects only re-run when the signals they directly depend on are updated.",
          },
          {
            text: "The effect becomes a subscriber to that specific signal.",
            correct: true,
            explanation:
              "The effect establishes a dependency on the signal and will re-execute when that signal changes.",
          },
          {
            text: "The signal's value will be logged to the console.",
            correct: false,
            explanation:
              "Accessing a signal simply reads its value; it doesn't inherently cause logging.",
          },
        ],
      },
      {
        difficulty: 3, // Medium
        tag: "memos",
        question: "What is the key difference between a memo and an effect?",
        options: [
          {
            text: "Memos are synchronous, while effects are asynchronous.",
            correct: false,
            explanation: "Both memos and effects can operate synchronously.",
          },
          {
            text: "Memos return a value, while effects do not.",
            correct: true,
            explanation: "Memos are derived signals that cache their results.",
          },
          {
            text: "Memos are used for UI updates, while effects are used for side effects.",
            correct: false,
            explanation: "Both can influence the UI or perform side effects.",
          },
        ],
      },
      {
        difficulty: 3, // Medium
        tag: "resources",
        question:
          "How do resources help manage asynchronous operations in SolidJS?",
        options: [
          {
            text: "They convert asynchronous data into a synchronous signal.",
            correct: true,
            explanation:
              "This simplifies tracking and updating based on async results.",
          },
          {
            text: "They provide a way to delay the execution of effects.",
            correct: false,
            explanation:
              "Delaying effects is not the primary function of resources.",
          },
          {
            text: "They prevent race conditions when multiple signals update.",
            correct: false,
            explanation: "Race conditions are a separate concern.",
          },
        ],
      },
      {
        difficulty: 2, // Medium
        tag: "effects",
        question: "What is the purpose of the `on` function within an effect?",
        options: [
          {
            text: "To define a cleanup function that runs when the effect is disposed.",
            correct: false,
            explanation:
              "Cleanup is handled by returning a function from the effect.",
          },
          {
            text: "To manually specify the dependencies of the effect.",
            correct: true,
            explanation:
              "This is useful for controlling when the effect re-executes.",
          },
          {
            text: "To create a nested effect within another effect.",
            correct: false,
            explanation: "Nested effects don't require the `on` function.",
          },
        ],
      },
      {
        difficulty: 3, // Difficult
        tag: "synchronicity",
        question:
          "Why is it important that SolidJS reactivity is synchronous by default?",
        options: [
          {
            text: "To prevent race conditions when updating multiple signals.",
            correct: false,
            explanation:
              "While synchronous behavior can help, race conditions are a broader issue.",
          },
          {
            text: "To ensure that updates happen in a predictable order.",
            correct: true,
            explanation:
              "This is crucial for maintaining consistency when updates depend on each other.",
          },
          {
            text: "To maximize performance by avoiding unnecessary re-renders.",
            correct: false,
            explanation:
              "Performance is a factor, but the primary reason is predictability.",
          },
        ],
      },
      {
        difficulty: 3, // Difficult
        tag: "batching",
        question: "What is the role of the `batch` function in SolidJS?",
        options: [
          {
            text: "To group multiple signal updates into a single reactive update.",
            correct: true,
            explanation:
              "This can prevent intermediate re-renders and improve efficiency.",
          },
          {
            text: "To create a new reactive scope within a component.",
            correct: false,
            explanation:
              "Reactive scopes are not created using the `batch` function.",
          },
          {
            text: "To define a function that will be executed asynchronously.",
            correct: false,
            explanation:
              "Asynchronous behavior is not the main purpose of `batch`.",
          },
        ],
      },
    ],
    result: [
      {
        score: [0, 3],
        title: "Reactivity Rookie 😅",
        feedback:
          "Looks like you're just starting your SolidJS reactivity journey. Don't worry, keep exploring and you'll master it in no time! 💪",
      },
      {
        score: [4, 6],
        title: "Reactivity Apprentice 🤔",
        feedback:
          "You've got a good grasp of the basics! Keep practicing and experimenting to become a true reactivity expert. 🤓",
      },
      {
        score: [7, 8],
        title: "Reactivity Pro 😎",
        feedback:
          "Impressive! You've clearly spent some time with SolidJS reactivity and it shows. You're well on your way to mastering the art of fine-grained updates. 🎉",
      },
      {
        score: [9, 10],
        title: "Reactivity Grandmaster 🤯",
        feedback:
          "Wow! You're a SolidJS reactivity wizard! 🧙‍♂️ Your understanding of signals, effects, and the reactive system is truly remarkable. 🌟",
      },
    ],
  },
  {
    title: "SolidJS Routing Quiz: Navigate Your Knowledge! 🧭",
    slug: "solidjs-routing-quiz",
    description:
      "Think you've mastered the ins and outs of SolidJS routing? 🤔  Put your skills to the test with this quiz! 🏆 From basic route definitions and dynamic parameters to lazy loading and preloading, see how well you understand the power of Solid's router. ✨",
    difficulty: 3,
    questionCount: 5,
    questions: [
      {
        difficulty: 1,
        tag: "solid-router",
        question:
          "What is the primary function of the `Router` component in SolidJS applications?",
        options: [
          {
            text: "To manage navigation and rendering by defining routes using JSX or objects.",
            correct: true,
            explanation:
              "The `Router` component is the foundation for routing in SolidJS applications. It enables the definition of routes using JSX or objects, allowing for seamless navigation and rendering of different components based on the current URL.",
          },
          {
            text: "To handle data fetching and API requests within the application.",
            correct: false,
            explanation:
              "Data fetching and API requests are typically handled by other components or libraries in SolidJS applications, not specifically the `Router` component.",
          },
          {
            text: "To provide state management capabilities for the application.",
            correct: false,
            explanation:
              "State management in SolidJS applications is often handled using signals or other state management libraries, not directly by the `Router` component.",
          },
          {
            text: "To render the main layout of the application.",
            correct: false,
            explanation:
              "While the `Router` component can be used to render the main layout, its primary function is to manage navigation and rendering of routes.",
          },
        ],
      },
      {
        difficulty: 2,
        tag: "solid-router",
        question:
          "How do you define a route in SolidJS using the `Route` component?",
        options: [
          {
            text: "By specifying a `path` prop and a `component` prop to render at that path.",
            correct: true,
            explanation:
              "The `Route` component in SolidJS requires a `path` prop to define the URL path it should match, and a `component` prop to specify the component to render when the path is matched.",
          },
          {
            text: "By using the `useNavigate` hook to programmatically navigate to different routes.",
            correct: false,
            explanation:
              "The `useNavigate` hook is used for programmatic navigation, not for defining routes. Routes are defined using the `Route` component.",
          },
          {
            text: "By creating a custom router component that handles the routing logic.",
            correct: false,
            explanation:
              "While you can create custom router components, the standard way to define routes in SolidJS is by using the built-in `Route` component.",
          },
          {
            text: "By configuring the `routes` object in the main application component.",
            correct: false,
            explanation:
              "SolidJS does not use a central `routes` object for defining routes. Routes are defined inline using the `Route` component.",
          },
        ],
      },
      {
        difficulty: 3,
        tag: "solid-router",
        question:
          "What is the purpose of the `useParams` hook in SolidJS routing?",
        options: [
          {
            text: "To access dynamic route parameters within a component.",
            correct: true,
            explanation:
              "The `useParams` hook provides a way to retrieve the dynamic parameters from the current URL, allowing components to access and utilize those parameters in their rendering or logic.",
          },
          {
            text: "To define the parameters that a route should accept.",
            correct: false,
            explanation:
              "Route parameters are defined in the `path` prop of the `Route` component, not using the `useParams` hook.",
          },
          {
            text: "To navigate to a different route with specified parameters.",
            correct: false,
            explanation:
              "Navigation to different routes is done using the `useNavigate` hook or the `<A>` component, not `useParams`.",
          },
          {
            text: "To preload data for a route based on its parameters.",
            correct: false,
            explanation:
              "Data preloading is handled by the `preload` function in the `Route` component, not using the `useParams` hook.",
          },
        ],
      },
      {
        difficulty: 4,
        tag: "solid-router",
        question:
          "How can you implement lazy loading for route components in SolidJS?",
        options: [
          {
            text: "By using the `lazy` function to import components only when they are needed.",
            correct: true,
            explanation:
              "The `lazy` function in SolidJS allows you to defer the loading of route components until they are actually navigated to, improving initial load performance.",
          },
          {
            text: "By specifying the `lazy` prop on the `Route` component.",
            correct: false,
            explanation:
              "There is no `lazy` prop on the `Route` component. Lazy loading is achieved using the `lazy` function to import components.",
          },
          {
            text: "By defining a separate route configuration for lazy-loaded components.",
            correct: false,
            explanation:
              "Lazy-loaded components are defined within the same route configuration as other components, using the `lazy` function to import them.",
          },
          {
            text: "By manually importing the component when the route is navigated to.",
            correct: false,
            explanation:
              "Manual importing would defeat the purpose of lazy loading. The `lazy` function handles the dynamic importing of components.",
          },
        ],
      },
      {
        difficulty: 5,
        tag: "solid-router",
        question:
          "What is the purpose of the `preload` function in SolidJS routing?",
        options: [
          {
            text: "To initiate data fetching in parallel with route loading.",
            correct: true,
            explanation:
              "The `preload` function allows you to start fetching data for a route as soon as the route is navigated to, or even earlier when the link is hovered, ensuring that the data is readily available when the component renders.",
          },
          {
            text: "To define the loading state of a route component.",
            correct: false,
            explanation:
              "The loading state of a route component is typically managed within the component itself or using Suspense boundaries, not by the `preload` function.",
          },
          {
            text: "To handle authentication and authorization for a route.",
            correct: false,
            explanation:
              "Authentication and authorization are usually handled by separate middleware or components, not specifically within the `preload` function.",
          },
          {
            text: "To render a fallback component while the route is loading.",
            correct: false,
            explanation:
              "Fallback components during route loading are typically handled using Suspense boundaries, not by the `preload` function.",
          },
        ],
      },
      {
        difficulty: 1,
        tag: "solid-router",
        question:
          "What is the primary function of the `Router` component in SolidJS applications?",
        options: [
          {
            text: "To manage navigation and rendering by defining routes using JSX or objects.",
            correct: true,
            explanation:
              "The `Router` component is the foundation for routing in SolidJS applications. It enables the definition of routes using JSX or objects, allowing for seamless navigation and rendering of different components based on the current URL.",
          },
          {
            text: "To handle data fetching and API requests within the application.",
            correct: false,
            explanation:
              "Data fetching and API requests are typically handled by other components or libraries in SolidJS applications, not specifically the `Router` component.",
          },
          {
            text: "To provide state management capabilities for the application.",
            correct: false,
            explanation:
              "State management in SolidJS applications is often handled using signals or other state management libraries, not directly by the `Router` component.",
          },
          {
            text: "To render the main layout of the application.",
            correct: false,
            explanation:
              "While the `Router` component can be used to render the main layout, its primary function is to manage navigation and rendering of routes.",
          },
        ],
      },
      {
        difficulty: 2,
        tag: "solid-router",
        question:
          "How do you define a route in SolidJS using the `Route` component?",
        options: [
          {
            text: "By specifying a `path` prop and a `component` prop to render at that path.",
            correct: true,
            explanation:
              "The `Route` component in SolidJS requires a `path` prop to define the URL path it should match, and a `component` prop to specify the component to render when the path is matched.",
          },
          {
            text: "By using the `useNavigate` hook to programmatically navigate to different routes.",
            correct: false,
            explanation:
              "The `useNavigate` hook is used for programmatic navigation, not for defining routes. Routes are defined using the `Route` component.",
          },
          {
            text: "By creating a custom router component that handles the routing logic.",
            correct: false,
            explanation:
              "While you can create custom router components, the standard way to define routes in SolidJS is by using the built-in `Route` component.",
          },
          {
            text: "By configuring the `routes` object in the main application component.",
            correct: false,
            explanation:
              "SolidJS does not use a central `routes` object for defining routes. Routes are defined inline using the `Route` component.",
          },
        ],
      },
      {
        difficulty: 3,
        tag: "solid-router",
        question:
          "What is the purpose of the `useParams` hook in SolidJS routing?",
        options: [
          {
            text: "To access dynamic route parameters within a component.",
            correct: true,
            explanation:
              "The `useParams` hook provides a way to retrieve the dynamic parameters from the current URL, allowing components to access and utilize those parameters in their rendering or logic.",
          },
          {
            text: "To define the parameters that a route should accept.",
            correct: false,
            explanation:
              "Route parameters are defined in the `path` prop of the `Route` component, not using the `useParams` hook.",
          },
          {
            text: "To navigate to a different route with specified parameters.",
            correct: false,
            explanation:
              "Navigation to different routes is done using the `useNavigate` hook or the `<A>` component, not `useParams`.",
          },
          {
            text: "To preload data for a route based on its parameters.",
            correct: false,
            explanation:
              "Data preloading is handled by the `preload` function in the `Route` component, not using the `useParams` hook.",
          },
        ],
      },
      {
        difficulty: 4,
        tag: "solid-router",
        question:
          "How can you implement lazy loading for route components in SolidJS?",
        options: [
          {
            text: "By using the `lazy` function to import components only when they are needed.",
            correct: true,
            explanation:
              "The `lazy` function in SolidJS allows you to defer the loading of route components until they are actually navigated to, improving initial load performance.",
          },
          {
            text: "By specifying the `lazy` prop on the `Route` component.",
            correct: false,
            explanation:
              "There is no `lazy` prop on the `Route` component. Lazy loading is achieved using the `lazy` function to import components.",
          },
          {
            text: "By defining a separate route configuration for lazy-loaded components.",
            correct: false,
            explanation:
              "Lazy-loaded components are defined within the same route configuration as other components, using the `lazy` function to import them.",
          },
          {
            text: "By manually importing the component when the route is navigated to.",
            correct: false,
            explanation:
              "Manual importing would defeat the purpose of lazy loading. The `lazy` function handles the dynamic importing of components.",
          },
        ],
      },
      {
        difficulty: 5,
        tag: "solid-router",
        question:
          "What is the purpose of the `preload` function in SolidJS routing?",
        options: [
          {
            text: "To initiate data fetching in parallel with route loading.",
            correct: true,
            explanation:
              "The `preload` function allows you to start fetching data for a route as soon as the route is navigated to, or even earlier when the link is hovered, ensuring that the data is readily available when the component renders.",
          },
          {
            text: "To define the loading state of a route component.",
            correct: false,
            explanation:
              "The loading state of a route component is typically managed within the component itself or using Suspense boundaries, not by the `preload` function.",
          },
          {
            text: "To handle authentication and authorization for a route.",
            correct: false,
            explanation:
              "Authentication and authorization are usually handled by separate middleware or components, not specifically within the `preload` function.",
          },
          {
            text: "To render a fallback component while the route is loading.",
            correct: false,
            explanation:
              "Fallback components during route loading are typically handled using Suspense boundaries, not by the `preload` function.",
          },
        ],
      },
    ],
    result: [
      {
        score: [0, 1],
        title: "Routing Rookie 😅",
        feedback:
          "Looks like you're just starting your SolidJS routing journey. Don't worry, keep exploring the docs and you'll master it in no time! 💪",
      },
      {
        score: [2, 3],
        title: "Routing Apprentice 🤔",
        feedback:
          "You've got a good grasp of the basics! Keep practicing and experimenting with different routing scenarios to become a true routing expert. 🤓",
      },
      {
        score: [4, 4],
        title: "Routing Pro 😎",
        feedback:
          "Impressive! You've clearly spent some time with SolidJS routing and it shows. You're well on your way to mastering the art of navigation and data flow. 🎉",
      },
      {
        score: [5, 5],
        title: "Routing Grandmaster 🤯",
        feedback:
          "Wow! You're a SolidJS routing wizard! 🧙‍♂️ Your understanding of routes, parameters, lazy loading, and preloading is truly remarkable. 🌟",
      },
    ],
  },
  {
    title: "SolidJS Conditional Rendering Quiz: Can You Render the Truth? 🤔",
    slug: "solidjs-conditional-rendering-quiz",
    description:
      "Think you've mastered the art of SolidJS conditional rendering? 🤔  Get ready to dive deep into the world of `<Show>`, `<Switch>`, `<Match>`, and maybe even some ternary operators (if you dare).  This quiz will challenge your knowledge and reveal if you can truly render the truth! ✨",
    difficulty: 4,
    questionCount: 10,
    questions: [
      {
        difficulty: 1,
        tag: "Conditional Rendering",
        question:
          "You want to display a loading spinner while fetching data. Which Solid.js component is best suited for this?",
        options: [
          {
            text: "`<Show>`",
            correct: true,
            explanation:
              "The `<Show>` component is ideal for conditionally rendering elements based on a boolean value, like whether the data is still loading.",
          },
          {
            text: "`<Switch>`",
            correct: false,
            explanation:
              "The `<Switch>` component is better for handling multiple conditional outcomes, not just a simple true/false scenario.",
          },
          {
            text: "`<Match>`",
            correct: false,
            explanation:
              "The `<Match>` component is used within a `<Switch>` block and is not suitable for standalone conditional rendering.",
          },
          {
            text: "`<For>`",
            correct: false,
            explanation:
              "The `<For>` component is designed for rendering lists and is not relevant to conditional rendering.",
          },
        ],
      },
      {
        difficulty: 2,
        tag: "State Management",
        question:
          "You have a list of tasks. How would you efficiently store and update the number of completed tasks in a Solid.js application?",
        options: [
          {
            text: "Use a separate signal for completed tasks and update it manually.",
            correct: false,
            explanation:
              "While possible, this can lead to manual updates and potential inconsistencies.",
          },
          {
            text: "Derive the count of completed tasks using a memo.",
            correct: true,
            explanation:
              "A memo will efficiently recalculate the count only when the underlying tasks change.",
          },
          {
            text: "Store the count in a separate variable and update it whenever a task changes.",
            correct: false,
            explanation: "This can lead to errors and is not reactive.",
          },
          {
            text: "Use the browser's local storage to keep track of the count.",
            correct: false,
            explanation:
              "Local storage is for persistence, not for managing the application's internal state.",
          },
        ],
      },
      {
        difficulty: 3,
        tag: "Conditional Rendering",
        question:
          "You want to render different components based on the user's role: 'admin', 'editor', or 'viewer'. What's the most efficient way to do this in Solid.js?",
        options: [
          {
            text: "Nest multiple `<Show>` components for each role.",
            correct: false,
            explanation:
              "Nesting can become cumbersome when you have many roles to handle.",
          },
          {
            text: "Use a `<Switch>` component with a `<Match>` for each role.",
            correct: true,
            explanation:
              "This provides a clean and readable structure for handling multiple conditions.",
          },
          {
            text: "Use a ternary operator within a single JSX element.",
            correct: false,
            explanation:
              "While possible for simple cases, it can become less readable with many roles.",
          },
          {
            text: "Create a separate component for each role and conditionally render them.",
            correct: false,
            explanation:
              "This can lead to unnecessary component overhead and might not be the most efficient approach.",
          },
        ],
      },
      {
        difficulty: 4,
        tag: "State Management",
        question:
          "You have a complex form with nested data. How would you structure the state in Solid.js to make it easy to manage and update?",
        options: [
          {
            text: "Use a single signal with a deeply nested object.",
            correct: false,
            explanation:
              "While possible, updating deeply nested objects can become cumbersome.",
          },
          {
            text: "Use separate signals for each field in the form.",
            correct: false,
            explanation:
              "This can lead to a large number of signals and make it harder to manage related data.",
          },
          {
            text: "Use a store to organize the form data in a structured way.",
            correct: true,
            explanation:
              "Stores provide a way to group related data and update it efficiently using paths and the `produce` utility.",
          },
          {
            text: "Store the form data in a global variable and update it directly.",
            correct: false,
            explanation:
              "Global variables are not reactive and can lead to unexpected behavior in a Solid.js application.",
          },
        ],
      },
      {
        difficulty: 5,
        tag: "State Management & Context",
        question:
          "You are building a shopping cart application with multiple components that need access to the cart's contents. How would you share the cart state efficiently in Solid.js?",
        options: [
          {
            text: "Pass the cart state as props through all the components.",
            correct: false,
            explanation:
              "This can lead to prop drilling and make the code harder to maintain.",
          },
          {
            text: "Store the cart state in a global variable and access it directly.",
            correct: false,
            explanation:
              "Global variables are not reactive and can lead to issues in a Solid.js application.",
          },
          {
            text: "Use a store to manage the cart state and pass the store as props.",
            correct: false,
            explanation:
              "While stores are good for state management, passing them as props can still lead to prop drilling.",
          },
          {
            text: "Use a context to provide the cart state to all components within a subtree.",
            correct: true,
            explanation:
              "Context allows you to share the cart state without manually passing it down as props, making the components more independent and reusable.",
          },
        ],
      },
      {
        difficulty: 5,
        tag: "Conditional Rendering",
        question:
          "You are building a complex dashboard with multiple sections that can be shown or hidden based on user roles and preferences. What is the most efficient way to handle the conditional rendering of these sections in SolidJS?",
        options: [
          {
            text: "Use nested `<Show>` components for each condition.",
            correct: false,
            explanation:
              "While possible, nested `<Show>` components can become unwieldy and difficult to manage for complex conditions.",
          },
          {
            text: "Use a combination of `<Switch>` and `<Match>` components to handle the different conditions.",
            correct: true,
            explanation:
              "This approach provides a structured and readable way to handle multiple conditions, similar to a switch/case statement in JavaScript.",
          },
          {
            text: "Use a ternary operator within JSX to conditionally render each section.",
            correct: false,
            explanation:
              "Ternary operators can be useful for simple conditions, but they can become less readable for complex logic.",
          },
          {
            text: "Manually manipulate the DOM using JavaScript to show or hide sections.",
            correct: false,
            explanation:
              "Direct DOM manipulation is generally discouraged in SolidJS as it can interfere with the reactivity system.",
          },
        ],
      },
      {
        difficulty: 5,
        tag: "State Management",
        question:
          "You have a deeply nested component tree in your SolidJS application. You need to share a complex state object, containing user authentication status, shopping cart items, and notification preferences, across various components at different levels. What is the most effective and maintainable approach to achieve this?",
        options: [
          {
            text: "Pass the state object as props through each level of the component tree (prop drilling).",
            correct: false,
            explanation:
              "Prop drilling can lead to verbose code, making it difficult to track and manage state changes.",
          },
          {
            text: "Create multiple independent signals for each piece of state (e.g., `user`, `cart`, `notifications`) and pass them individually.",
            correct: false,
            explanation:
              "Managing multiple independent signals can become cumbersome and may lead to inconsistencies.",
          },
          {
            text: "Use a single, global JavaScript object to store the state and access it directly from any component.",
            correct: false,
            explanation:
              "Global variables can make it difficult to reason about state changes and can lead to unintended side effects.",
          },
          {
            text: "Utilize SolidJS Context API to create a `UserContext` and provide the state object to the descendant components.",
            correct: true,
            explanation:
              "Context API provides an elegant solution for sharing state across components without prop drilling, promoting better organization and maintainability.",
          },
        ],
      },
      {
        difficulty: 5,
        tag: "State Management with Stores",
        question:
          "You are building an e-commerce application with a shopping cart feature. The cart needs to manage a list of items, their quantities, and calculate the total price. You choose to use SolidJS stores for state management. How would you efficiently update the cart state when a user changes the quantity of an item?",
        options: [
          {
            text: "Directly modify the `quantity` property of the corresponding item object within the store.",
            correct: false,
            explanation:
              "Directly modifying the store object can lead to unexpected behavior and break reactivity.",
          },
          {
            text: "Use `setState` with a callback function to access the previous state and update the `quantity` property of the specific item.",
            correct: false,
            explanation:
              "While this approach works, it might require iterating through the items array and can be less efficient for frequent updates.",
          },
          {
            text: "Use `setState` with the `produce` utility to immutably update the `quantity` of the target item.",
            correct: true,
            explanation:
              "`produce` simplifies the process of updating nested properties within the store while ensuring immutability and preserving reactivity.",
          },
          {
            text: "Create separate signals for each item in the cart and manage their quantities individually.",
            correct: false,
            explanation:
              "Managing individual signals for each item can become inefficient and difficult to scale as the cart grows.",
          },
        ],
      },
      {
        difficulty: 5,
        tag: "Conditional Rendering with Derived State",
        question:
          "You are designing a user profile page where certain sections (e.g., 'Edit Profile,' 'Change Password') should only be visible if the logged-in user's ID matches the profile being viewed. How would you implement this conditional rendering logic in SolidJS?",
        options: [
          {
            text: "Fetch the user ID within each section's component and use a `<Show>` component to conditionally render it based on the ID comparison.",
            correct: false,
            explanation:
              "Fetching the user ID within each component can lead to redundant data requests and potential performance issues.",
          },
          {
            text: "Store the logged-in user's ID and the profile's ID in separate signals, and use a derived signal to compute whether they match. Use this derived signal in the `<Show>` component's `when` prop.",
            correct: true,
            explanation:
              "This approach efficiently calculates the condition once and reactively updates the UI when either the logged-in user's ID or the profile's ID changes.",
          },
          {
            text: "Pass both IDs as props to each section component and let them handle the conditional rendering logic internally.",
            correct: false,
            explanation:
              "Passing IDs as props can lead to prop drilling and make the code less maintainable.",
          },
          {
            text: "Use a global variable to store the logged-in user's ID and compare it with the profile's ID within each section's component.",
            correct: false,
            explanation:
              "Global variables can make it difficult to track state changes and can lead to unintended side effects.",
          },
        ],
      },
      {
        difficulty: 5,
        tag: "Dynamic Conditional Rendering",
        question:
          "You are tasked with building a notification system where the type of notification (success, error, warning) determines its appearance (color, icon). You have an array of notification objects, each with a `type` property. How would you efficiently render these notifications with the appropriate styling in SolidJS?",
        options: [
          {
            text: "Use a `<Switch>` component with a `<Match>` for each notification type, applying the corresponding styles within each `Match`.",
            correct: true,
            explanation:
              "This approach provides a clear and organized way to handle different notification types and their respective styles.",
          },
          {
            text: "Use a `<For>` loop to iterate over the notifications and apply inline styles based on the `type` property using a ternary operator.",
            correct: false,
            explanation:
              "While this works, inline styles can become difficult to manage and maintain, especially for complex styling rules.",
          },
          {
            text: "Create separate components for each notification type and dynamically render the appropriate component based on the `type` property.",
            correct: false,
            explanation:
              "Creating separate components for each type can lead to code duplication and might be overkill for simple styling variations.",
          },
          {
            text: "Use a CSS-in-JS library to define dynamic styles based on the notification type and apply them to a common notification component.",
            correct: false,
            explanation:
              "While CSS-in-JS can be powerful, it might add unnecessary complexity for this specific scenario.",
          },
        ],
      },
    ],
    result: [
      {
        score: [0, 2],
        title: "Conditional Rendering Rookie 😅",
        feedback:
          "Looks like you're just starting your journey with SolidJS conditional rendering. Don't worry, keep exploring and you'll be a rendering master in no time! 💪",
      },
      {
        score: [3, 4],
        title: "Conditional Rendering Apprentice 🤔",
        feedback:
          "You've got a good grasp of the basics! Keep practicing and experimenting to become a true conditional rendering expert. 🤓",
      },
      {
        score: [6, 8],
        title: "Conditional Rendering Pro 😎",
        feedback:
          "Impressive! You've clearly spent some time with SolidJS conditional rendering and it shows. You're well on your way to mastering the art of dynamic UIs. 🎉",
      },
      {
        score: [9, 10],
        title: "Conditional Rendering Grandmaster 🤯",
        feedback:
          "Wow! You're a SolidJS conditional rendering wizard! 🧙‍♂️ Your understanding of `<Show>`, `<Switch>`, and `<Match>` is truly remarkable. You can render anything! 🌟",
      },
    ],
  },
] as Challenge[];
