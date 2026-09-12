function year(): string {
    const dateOutput = document.getElementsByClassName("date")[0];
    const date = new Date().getFullYear();
    return dateOutput.textContent += ` ${date} TC's blog`
}

function fetchPosts() {
    let posts = [];
};
// https://www.npmjs.com/package/better-sqlite3
year();
