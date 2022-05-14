/** @jsx h */
import { h } from "../deps.ts";
import { Link } from "../comps/mod.ts";

export const NotFound = () => (
  <div class="text-center">
    <p class="p-1">Not Found</p>
    <p class="p-1">
      <Link href="/" name="cd ~" />
    </p>
  </div>
);
