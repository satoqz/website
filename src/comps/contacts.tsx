/** @jsx h */
import { Fragment, h } from "../deps.ts";
import { Link } from "./mod.ts";

export const Contacts = () => (
  <div class="text-center">
    {[
      ["github", "https://github.com/satoqz"],
      ["satoqz@pm.me", "mailto:satoqz@pm.me"],
      ["matrix", "https://matrix.to/#/@satoqz:matrix.org"],
    ].map(([name, href], idx) => (
      <Fragment>
        {idx != 0 && " | "}
        <Link name={name} href={href} />
      </Fragment>
    ))}
  </div>
);
