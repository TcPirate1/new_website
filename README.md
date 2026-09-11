# New Portfolio Website

### Dracula theme
- Cheatsheet - https://draculatheme.com/dracula-css

### GH pages
- Can deploy from `gh-pages` branch. Build with Actions or similar.
- https://github.com/actions/starter-workflows/blob/main/pages/static.yml
- https://github.com/actions/starter-workflows/blob/main/pages/nextjs.yml
- site url = `https://<user>.github.io/<repo>`
- [Can ignore specific files using paths or paths-ignore](https://docs.github.com/en/actions/reference/workflows-and-actions/workflow-syntax#onpushpull_requestpull_request_targetpathspaths-ignore), can also be done with branches.

### TODO
- [x] [This ended up working for me](https://github.com/sitek94/vite-deploy-demo). Technically could have used the yml above with some sort of combination of the yml from this link too.
- [ ] Learn about RSS feeds. https://www.rssboard.org/files/sample-rss-2.xml is an example of what a feed should look like. [Wikihow](https://www.wikihow.com/Create-an-RSS-Feed), haha I know. [Rss specifications themselves](https://www.rssboard.org/rss-specification), this link is also what I'd follow if I want to create a generator at some point. [Autodiscovery](https://www.rssboard.org/rss-autodiscovery) specifically for browsers.
- [ ] Fix the ip function. I thought it wasn't working originally because it was localhost.
- [ ] The user agent text doesn't wrap neatly.