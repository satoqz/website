/** @jsx h */
import { h, Helmet } from "../deps.ts";
import { Avatar, Contacts } from "../comps/mod.ts";

export const Home = () => (
  <div class="space-y-4">
    <Helmet>
      <title>Home</title>
    </Helmet>
    <div class="items-center justify-center flex space-x-4">
      <Avatar />
      <p>satoqz</p>
    </div>
    <p>don't yet know who i am, check back later</p>
    <Contacts />
  </div>
);
