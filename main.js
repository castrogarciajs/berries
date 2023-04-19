import blog from "https://deno.land/x/blog@0.5.0/blog.tsx";

blog({
  title: "Berries",
  author: "Johan Sebastian",
  description: "making good sweets",
  avatar: "./sebastian.jpeg",
  avatarClass: "full",

  links: [{ title: "Github", url: "https://github.com/sebastian009w" }],

  favicon: "./sebastian.jpeg"
});
