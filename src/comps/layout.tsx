/** @jsx h */
import { Fragment, h } from "../deps.ts";
import { Meta } from "./mod.ts";

export const Layout = ({ children }: { children: JSX.ElementClass }) => (
  <Fragment>
    <Meta />
    <div class="h-screen dark:bg-black dark:text-white p-5 font-mono justify-center items-center flex">
      {children}
    </div>
  </Fragment>
);
