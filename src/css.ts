import { createHooks } from "@css-hooks/react";

export const [hooks, css] = createHooks({
  light: {
    or: [
      "[data-theme='light'] &",
      {
        and: ["[data-theme='auto'] &", "@media (prefers-color-scheme: light)"],
      },
    ],
  },
  dark: {
    or: [
      "[data-theme='dark'] &",
      {
        and: ["[data-theme='auto'] &", "@media (prefers-color-scheme: dark)"],
      },
    ],
  },
});
