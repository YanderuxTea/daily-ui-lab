import { v4 as uuid } from "uuid";

export type AccordionData = {
  id: string;
  title: string;
  description: string;
};
export const accordionData: AccordionData[] = [
  {
    id: uuid(),
    title: "What is Framer Motion?",
    description:
      "A production-ready motion library for React. It makes animating components trivial with a declarative API -" +
      " you describe what the animation should look like, not how to implement it step by step.",
  },
  {
    id: uuid(),
    title: "Why use Tailwind CSS?",
    description:
      "Tailwind gives you utility classes that map directly to CSS properties. You style components inline without ever leaving your markup, which speeds up iteration and keeps styles co-located with structure.",
  },
  {
    id: uuid(),
    title: "What is the App Router in Next.js?",
    description:
      "The App Router is built on React Server Components and introduces a new file-system based routing model. It enables layouts, nested routing, streaming, and server-side data fetching with less boilerplate.",
  },
  {
    id: uuid(),
    title: "When should I use useRef over useState?",
    description:
      "Use useRef when you need to store a value that persists across renders but should not trigger a re-render" +
      " when it changes - like a timer ID, a DOM reference, or a previous value cache.",
  },
  {
    id: uuid(),
    title: "What is the difference between layout and layoutId?",
    description:
      "layout animates the element itself when its size or position changes within the same render. layoutId shares" +
      " animation state between two separate elements across different renders - useful for shared element transitions like tab indicators.",
  },
];
