import { createHooks } from "@css-hooks/react";

export const [hooks, css] = createHooks({
  light: {
    or: ["[data-theme='light'] &"],
  },
  dark: {
    or: ["[data-theme='dark'] &"],
  },
});
