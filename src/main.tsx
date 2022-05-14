/** @jsx h */
import { h, router, serve, ssr } from "./deps.ts";
import { Layout } from "./comps/layout.tsx";
import { Home, NotFound } from "./pages/mod.ts";

const render = (component: JSX.ElementClass) =>
  ssr(() => <Layout>{component}</Layout>, {});

serve(router({ "/": () => render(<Home />) }, () => render(<NotFound />)));
