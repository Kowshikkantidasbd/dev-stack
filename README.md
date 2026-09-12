<div align="center">

# 🛠️ Dev Stack

**Explore. Compare. Build your ideal development stack.**

[![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.8-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-6-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/license-MIT-green)](#)

</div>

---

## 📖 About the Project

**Dev Stack** is an interactive web app that helps developers explore technologies across **Frontend, Backend, Database, Language, Styling, DevOps, and Tools** categories, compare them side by side, and put together the stack that best fits their next project — all in a clean, modern interface.

Whether you're starting a new project or just curious about what's out there, Dev Stack makes discovering and organizing your favorite tools simple and fun.

---

## 🚀 Tech Stack

| Category | Technology |
|---|---|
| Library | [React](https://react.dev/) |
| Language | [TypeScript](https://www.typescriptlang.org/) |
| Build Tool | [Vite](https://vitejs.dev/) |
| Styling | [Tailwind CSS](https://tailwindcss.com/) |
| Icons | [Lucide React](https://lucide.dev/) |
| Notifications | [React Toastify](https://fkhadra.github.io/react-toastify/) |

---

## ✨ Features

- 🔍 **Browse a Rich Technology Catalog** — Explore 20+ technologies across Frontend, Backend, Database, Language, Styling, DevOps, and Tools categories, each with a rating, difficulty level, and badge.
- 🧩 **Build Your Own Stack** — Add technologies to a personal stack with a single click, and manage it easily with add, remove, and clear-all actions.
- 🔔 **Real-time Feedback** — Instant toast notifications keep you informed every time you add, remove, or clear items from your stack.
- 📱 **Fully Responsive Design** — A clean, modern UI that looks and works great on desktop, tablet, and mobile devices.

<div align="center">

Made with ❤️ using React & Tailwind CSS

</div>

---

## 🧠 React Concepts — Q&A

**1. What is JSX, and why is it used in React?**

Ans: JSX is a way of writing HTML-like code inside JavaScript or TypeScript. It makes React code easier to write and understand. For example, we can write `<h1>{technology.name}</h1>` to show a heading on the webpage. React then converts this JSX into elements that can be displayed in the browser. JSX is useful because we can keep the UI and the related JavaScript logic together, which makes React components easier to read and manage.

**2. What is the difference between props and state?**

Ans: Props are data that a parent component sends to a child component. The child component can use the props, but it cannot change them directly.
State is data that a component keeps and manages by itself. When the state changes, React updates the component on the screen.
So, in simple words, props come from the parent, while state is managed inside the component.

**3. What does the `useState` hook do, and where did you use it in this project?**

Ans: The `useState` hook is used to store and change data inside a React component. It helps the component remember a value even after it re-renders. When the value changes, React automatically updates the UI.
In this project, I used `useState` in `App.tsx` to manage the technology list, loading status, error message, and selected stack. I also used `useState` in `TechCard.tsx` to manage the `imageError` value when an icon cannot be loaded.

**4. What does the `useEffect` hook do, and why did you need it to load the JSON data?**

Ans: The `useEffect` hook is used to run some code after a component is rendered. It is commonly used for tasks such as fetching data, calling APIs, or doing other actions outside the normal rendering process.
In this project, I used `useEffect` in `App.tsx` to load the technology data from the `technologies.json` file. It runs when the application starts and gets the data using `fetch()`. We use `useEffect` here because we don't want the data-fetching code to run again every time the component re-renders.

**5. Why does every item in a `.map()` list need a unique `key` prop?**

Ans: When we use `.map()` to display a list of items in React, each item needs a unique key. The key helps React identify each item in the list.
For example, in `StackSidebar.tsx`, we use `key={item.id}` for each technology. If one technology is removed or changed, React can easily understand which item has changed.
So, the key helps React update the list correctly and efficiently.

**6. What is conditional rendering? Show one place you used it (example: the empty stack message).**

Ans: Conditional rendering means showing different content depending on a condition.
For example, in `StackSidebar.tsx`, I check whether the selected stack is empty or not. If `selectedCount === 0`, the application shows "Your stack is empty." If there are selected technologies, it shows the list of those technologies instead.
So, conditional rendering helps us show the right content based on the current situation.

**7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?**

Ans: In React, a parent component can send data to a child component using props. It works similar to passing arguments to a function.
For example, `App.tsx` sends `technology`, `isAdded`, and `onAddToStack` to the `TechCard` component.
If the child needs to communicate with the parent, the parent can pass a function as a prop. The child can then call that function when something happens.
For example, when the user clicks "Add to Stack", the `TechCard` component calls `onAddToStack(technology)`. This function runs in the parent component and updates the stack.
