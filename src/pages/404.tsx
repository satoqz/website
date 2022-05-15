/** @jsx h */
import { h, Helmet } from "../deps.ts";
import { Link } from "../comps/mod.ts";

export const NotFound = () => (
  <div class="text-center">
    <Helmet>
      <title>Not Found</title>
    </Helmet>
    <p class="p-1">Not Found</p>
    <p class="p-1">
      <Link href="/" name="cd ~" />
    </p>
  </div>
);
