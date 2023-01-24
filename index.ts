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

// Based on: https://github.com/pxlprfct/bookmarked/blob/main/src/utils.ts
function isFolder(content: unknown): content is Folder {
    // https://mariusschulz.com/blog/the-unknown-type-in-typescript
    // https://www.typescriptlang.org/docs/handbook/basic-types.htmls
    // https://eslint.org/docs/latest/rules/no-prototype-builtins
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty#using_hasownproperty_as_a_property_name
    return Object.prototype.hasOwnProperty.call(content, "children");
}

function processFolder(folder: Folder): string {
    const header = `<DT><H3>${folder.name}</H3>`;
    const startBookmarks = "<DL><p>";
    const bookmarks = processBookmarks(folder.children);
    const endBookmarks = "</DL><p>";

    return [header, startBookmarks, bookmarks, endBookmarks].join("\n");
}

function processBookmark(bookmark: Bookmark): string {
    return `<DT><A HREF="${bookmark.href}">${bookmark.name}</A>`;
}

function processBookmarks(bookmarks: (Bookmark | Folder)[]): string {
    const body: string[] = [];

    for (const bookmark of bookmarks) {
        // console.log(bookmark);
        if (isFolder(bookmark)) {
            // console.log(isFolder(bookmark));
            body.push(processFolder(bookmark));
        } else {
            body.push(processBookmark(bookmark));
        }
    }

    return body.join("\n");
}

// Based on:
// - https://github.com/bahamas10/node-netscape-bookmarks/blob/master/index.js#L35
// - https://github.com/pxlprfct/bookmarked/blob/main/src/index.ts
// - https://github.com/pxlprfct/bookmarked/blob/main/src/formatters/html.ts
// - https://github.com/pxlprfct/bookmarked/blob/main/src/formatters/bookmark.ts
export function genBookmarkHTML(bookmarks: (Bookmark | Folder)[]): string {
    const output = [HEADER, "<DL>"];
    output.push(processBookmarks(bookmarks));
    output.push("</DL>\n");

    return output.join("\n");
}
