/** @jsx h */
import { h } from "../deps.ts";

export const Layout = ({ children }: { children: JSX.ElementClass }) => (
  <div class="h-screen dark:bg-black dark:text-white p-5 font-mono justify-center items-center flex">
    {children}
  </div>
);
