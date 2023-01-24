import { genBookmarkHTML } from "./index";

const content = [
    {
        href: "https://gitlab.com/joaommpalmeiro",
        name: "GitLab",
    },
    {
        href: "https://github.com/joaopalmeiro",
        name: "GitHub",
    },
];

console.log(genBookmarkHTML(content));
