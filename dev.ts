import { genBookmarkHTML } from "./index";

const BOOKMARKS_ONLY = [
    {
        href: "https://gitlab.com/joaommpalmeiro",
        name: "GitLab",
    },
    {
        href: "https://github.com/joaopalmeiro",
        name: "GitHub",
    },
];

const BOOKMARKS_IN_FOLDER = [
    {
        name: "Code",
        children: BOOKMARKS_ONLY,
    },
];

const FOLDERS_IN_FOLDER = [
    {
        name: "Profiles",
        children: [
            ...BOOKMARKS_IN_FOLDER,
            {
                name: "Social Media",
                children: [
                    {
                        href: "https://ciberlandia.pt/@joaopalmeiro",
                        name: "Mastodon",
                    },
                ],
            },
        ],
    },
];

console.log(genBookmarkHTML(BOOKMARKS_ONLY));
console.log(genBookmarkHTML(BOOKMARKS_IN_FOLDER));
console.log(genBookmarkHTML(FOLDERS_IN_FOLDER));
