import blog from "https://deno.land/x/blog@0.5.0/blog.tsx";

blog({
  title: "Sebastian",
  author: "Johan Sebastian",
  description: "Making Good Sweets - MGS",
  avatar: "./sebastian.jpeg",
  avatarClass: "rounded-full",

  links: [
    { title: "Email", url: "mailto:johancs.mm@gmail.com" },
    { title: "Github", url: "https://github.com/sebastian009w" },
  ],

  lang: "en",
  favicon: "./sebastian.jpeg",
  theme: "auto",
});
