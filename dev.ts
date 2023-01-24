import { writeFileSync } from "fs";
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

const bookmarksOnly = genBookmarkHTML(BOOKMARKS_ONLY);
console.log(bookmarksOnly);
writeFileSync("bookmarks_only.html", bookmarksOnly);

const bookmarksInFolder = genBookmarkHTML(BOOKMARKS_IN_FOLDER);
console.log(bookmarksInFolder);
writeFileSync("bookmarks_in_folder.html", bookmarksInFolder);

const foldersInFolder = genBookmarkHTML(FOLDERS_IN_FOLDER);
console.log(foldersInFolder);
writeFileSync("folders_in_folder.html", foldersInFolder);
