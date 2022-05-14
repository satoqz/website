/** @jsx h */
import { h } from "../deps.ts";
import { GITHUB_AVATAR } from "../constants.ts";

export const Avatar = () => (
  <img class="rounded-full h-12 w-12" src={GITHUB_AVATAR} />
);

export const Link = ({ href, name }: { href: string; name: string }) => (
  <a href={href} class="hover:text-underline text-blue-300">
    {name}
  </a>
);
