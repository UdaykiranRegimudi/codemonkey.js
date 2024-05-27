export const newSteps = [
  {
    id: "intro",
    title: "Welcome to CodeMonkey",
    text: "CodeEditor is the core feature of CodeMonkey platform. Here you can practice coding problems, optimize your code, and debug your code. If got stuck, you can always ask for help to get hints.",
    attachTo: {
      element: "#info-0",
      on: "top",
    },
    buttons: [
      {
        text: "Exit",
        action: function () {
          return this.cancel();
        },
      },
      {
        text: "Next",
        action: function () {
          return this.next();
        },
      },
    ],
  },
  {
    id: "step-1",
    title: "CodeChimp",
    text: "CodeChimp is an AI that can help you learn to code. It can also help you to understand any piece of code.",
    attachTo: {
      element: "#info-1",
      on: "top",
    },
    buttons: [
      {
        text: "Back",
        action: function () {
          return this.back();
        },
      },
      {
        text: "Next",
        action: function () {
          return this.next();
        },
      },
    ],
  },
  {
    id: "step-2",
    title: "Study Planner",
    text: "Study Planner is an under development feature that will help you to plan your study schedule, and track your progress over time using a calendar and data analytics.",
    attachTo: {
      element: "#info-2",
      on: "top",
    },
    buttons: [
      {
        text: "Back",
        action: function () {
          return this.back();
        },
      },
      {
        text: "Next",
        action: function () {
          return this.next();
        },
      },
    ],
  },
  {
    id: "step-3",
    title: "Roadmap Planner",
    text: "Roadmap Planner is an under development feature that will help you to plan your career path, and track your progress over time using StudyPlanner. Note: It's the core of Study Planner.",
    attachTo: {
      element: "#info-3",
      on: "top",
    },
    buttons: [
      {
        text: "Back",
        action: function () {
          return this.back();
        },
      },
      {
        text: "Next",
        action: function () {
          return this.next();
        },
      },
    ],
  },
  {
    id: "step-4",
    title: "Interview Prep",
    text: "Interview Prep is an under development feature that will help you to prepare for job interviews. It will have a collection of interview questions, and a platform to practice coding interviews.",
    attachTo: {
      element: "#info-4",
      on: "top",
    },
    buttons: [
      {
        text: "Back",
        action: function () {
          return this.back();
        },
      },
      {
        text: "Next",
        action: function () {
          return this.next();
        },
      },
    ],
  },
  {
    id: "step-5",
    title: "Code Editor",
    text: "Let's start exploring the CodeEditor. Click on the CodeEditor tab to continue, and then click on the Next button to explore the CodeEditor.",
    attachTo: {
      element: "#side-Code",
      on: "top",
    },
    buttons: [
      {
        text: "Back",
        action: function () {
          return this.back();
        },
      },
      {
        text: "Next",
        action: function () {
          return this.next();
        },
      },
    ],
  },
  {
    id: "step-6",
    title: "Problem Set",
    text: "Problem Set is the place where you can pick a problem to solve. Pick a problem you want to solve, and then click on the Next button to continue.",
    attachTo: {
      element: "#problem-1",
      on: "top",
    },
    buttons: [
      {
        text: "Back",
        action: function () {
          return this.back();
        },
      },
      {
        text: "Next",
        action: function () {
          return this.next() && window.location.replace("/app/problems/1");
        },
      },
    ],
  },
  {
    id: "step-7",
    title: "CodeEditor",
    text: "This is the CodeEditor. Here you can write your code, and run it to see the output. Click on the Run button to run the code, and it'll show the output on the right side. Close the Output tab to continue, and then click on the Next button to continue.",
    attachTo: {
      element: "#run-button",
      on: "top",
    },
    buttons: [
      {
        text: "Back",
        action: function () {
          return this.back();
        },
      },
      {
        text: "Next",
        action: function () {
          return this.next();
        },
      },
    ],
  },
  {
    id: "step-8",
    title: "CodeEditor Docs",
    text: "We're currently working on the documentation for the CodeEditor. It'll be available soon. Click on the Next button to continue.",
    attachTo: {
      element: "#editor-help",
      on: "top",
    },
    buttons: [
      {
        text: "Back",
        action: function () {
          return this.back();
        },
      },
      {
        text: "Next",
        action: function () {
          return this.next();
        },
      },
    ],
  },
  {
    id: "step-9",
    title: "Editor Tools: Optimize",
    text: "The CodeEditor has a collection of tools that can help you to optimize your code, ask for help, and debug your code. Click on the Optimize button to continue, and then click on the Next button to continue.",
    attachTo: {
      element: "#editor-optimize",
      on: "top",
    },
    buttons: [
      {
        text: "Back",
        action: function () {
          return this.back();
        },
      },
      {
        text: "Next",
        action: function () {
          return this.next();
        },
      },
    ],
  },
  {
    id: "step-10",
    title: "CodeChimp",
    text: "Now, let's explore the CodeChimp. Click on the CodeChimp tab to continue, and then click on the Next button to explore the CodeChimp.",
    attachTo: {
      element: "#side-CodeChimp",
      on: "top",
    },
    buttons: [
      {
        text: "Back",
        action: function () {
          return this.back();
        },
      },
      {
        text: "Next",
        action: function () {
          return this.next();
        },
      },
    ],
  },
  {
    id: "step-11",
    title: "Send Prompt",
    text: "CodeChimp can help you to understand any piece of code. If you've a code snippet you want to understand, paste it in the right text area, and then pass your prompt in the below input field, and hit Enter to get the response. Once you get the response, click on the Next button to continue.",
    attachTo: {
      element: "#send-prompt",
      on: "top",
    },
    buttons: [
      {
        text: "Back",
        action: function () {
          return this.back();
        },
      },
      {
        text: "Next",
        action: function () {
          return this.next();
        },
      },
    ],
  },
  {
    id: "step-12",
    title: "Thanks for Exploring",
    text: "Thanks for exploring the CodeMonkey platform. We're continuously working on improving the platform and adding tons of new features. If you've any feedback or suggestions, feel free to share with us. Click on the Exit button to close the tour.",
    attachTo: {
      element: "#side-Interview Prep",
      on: "top",
    },
    buttons: [
      {
        text: "Exit",
        action: function () {
          return this.cancel();
        },
      },
    ],
  },
];
