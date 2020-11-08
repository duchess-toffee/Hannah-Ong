---
title: "More Eyes Plz!"
date: "2020-08-20"
description: "A simple way to crowdsource feedback on your GitHub commits"
link: "https://moreeyesplz.com/"
icon: "../../images/work/mobile/meep.png"
coverPhoto: "../../images/work/desktop/meep.png"
photo: "../../images/work/scroll/meep.png"
tools: "React, TypeScript, Material-UI"
tag: "work"
---

Collaborated on with my husband, [Jeremy Ong](https://github.com/jeremyong), [More Eyes Plz](https://moreeyesplz.com/) is a Dev.to and GitHub Actions Hackathon submission. We thought that in the spirit of Dev.to and GitHub's community, that a community-led resource to help people like myself get feedback on GitHub commits would be a great submission.

The website design was mainly inspired from the Hackathon sponsors [Dev.to](https://dev.to/), as a tribute to their Hackathon. However, more minor design choices can also noted from other community-led sites such as [Reddit](https://www.reddit.com/), [Stack Overflow](https://stackoverflow.com/), and [Twitter](https://twitter.com/). With the help of the art from [unDraw](https://undraw.co/illustrations), the website was brought to life.

I was responsible for the frontend, which is built as a single page application with [React](https://reactjs.org/), [TypeScript](https://www.typescriptlang.org/), and [Material-UI](https://material-ui.com/). It queries the "meeps" database (hosted using the issue tracker of a GitHub repo), fetches labels/tags, and enables tag-based searching using the fetch API and OAuth credentials to pull data from Github.

Jeremy was responsible for the backend for [More Eyes, Plz!](https://moreeyesplz.com/), which runs almost completely off Github by leveraging actions. The [MEEP Scanner](https://github.com/marketplace/actions/meep-scanner) runs on every push. For each commit that contains "[MEEP]", the commit metadata is sent to a Google Cloud Function. The cloud function dispatches another action (called the ["meeper"](https://github.com/moreeyesplz/meeper)) on a central repository, forwarding along the commit metadata as inputs by POSTing a workflow_dispatch event. The meeper action uses Github app credentials associated with a bot we built called [themeepbot](https://github.com/moreeyesplz/themeepbot). The action authors a comment on the issuing commit and also creates an issue on the [meeps repository](https://github.com/moreeyesplz/meeps). The website uses the Github REST API to query and search for issues, presenting them to users in a digestible way. All components of the service (actions, website, tracker, bot) are [open-sourced](https://github.com/moreeyesplz) for the community to learn and benefit from.
