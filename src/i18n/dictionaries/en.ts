export const en = {
  site: {
    title: "PostHub"
  },
  nav: {
    home: "Home",
    posts: "Posts",
    about: "About",
    contact: "Contact",
    language: "Language",
    theme: "Theme"
  },
  footer: {
    copyright: "All rights reserved.",
    privacy: "Privacy",
    terms: "Terms",
    contact: "Contact",
    about: "About"
  },
  notFound: {
    code: "404",
    title: "Page not found",
    description: "The page you are looking for doesn't exist or has been moved.",
    backHome: "Go back home"
  },
  home: {
    hello: "Hello Home"
  },
  about: {
    hello: "Hello About"
  },
  contact: {
    hello: "Hello Contact"
  }
} as const;

export type EnDict = typeof en;


