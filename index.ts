// Source: https://github.com/pxlprfct/bookmarked
export interface Bookmark {
    name: string;
    href: string;
}

export interface Folder {
    name: string;
    children: (Bookmark | Folder)[];
}

// Source: https://learn.microsoft.com/en-us/previous-versions/windows/internet-explorer/ie-developer/platform-apis/aa753582(v=vs.85)
const HEADER = `<!DOCTYPE NETSCAPE-Bookmark-file-1>
<!--This is an automatically generated file.
It will be read and overwritten.
Do Not Edit! -->
<Title>Bookmarks</Title>
<H1>Bookmarks</H1>`;

// https://www.typescriptlang.org/docs/handbook/basic-types.htmls
function getFolderHeader(title: string): string {
    return `<DT><H3>${title}</H3>`;
}

export function genBookmarkHTML(content: (Bookmark | Folder)[]): string {
    const bookmarks = ["<DL>"];
    return "HERE";
}
