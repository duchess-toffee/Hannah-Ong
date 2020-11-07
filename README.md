<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a href="https://hannahong.dev">
    <img src="src/images/favicon/favicon.png" alt="Logo" width="80" height="80">
  </a>

  <h1 align="center" style="border:none" >Hannah Ong Website</h1>

  <p align="center">
    A personal website made using Gatsby.
    <br />
    <br />
    <a href="https://hannahong.dev">View Site</a>
    ·
    <a href="https://github.com/duchess-toffee/duchess-toffee.github.io/issues">Report Bug</a>
    ·
    <a href="https://github.com/duchess-toffee/duchess-toffee.github.io/issues">Suggest Feature</a>
  </p>
  
<br/><hr/><br/>

<!-- TABLE OF CONTENTS -->

## Table of Contents

- :sparkles: [About the Project](#sparkles-about-the-project)
  - :wrench: [Built With](#wrench-built-with)
- :ocean: [Workflow](#ocean-workflow)
- :traffic_light: [Roadmap](#traffic_light-roadmap)
- :phone: [Contact](#phone-contact)
- :books: [Resources](#books-resources)

<br /><hr/><br/>

<!-- ABOUT THE PROJECT -->

## :sparkles: About The Project

I spent a few weeks coming together to build my portfolio. Using a ton of inspiration from [Dribbble](https://dribbble.com/) and [Behance](https://www.behance.net/), I built my website design using [Figma](https://www.figma.com/). In fact, you can take a look at my [Figma File](https://www.figma.com/file/UmQb36sQqd84hQYTSRpvro/Hannah-Ong-Website) if you'd like. (Note: a handful of images are stock images from [Unsplash](https://unsplash.com/).

<br/>

### :wrench: Built With

The website itself was then put together using Gatsby and Gatsby plugins. I decided to go with Gatsby for a few reasons:

1. To continue to solidfy my knowledge of Gatsby
2. To easily integrate blog and posts into the site
3. Gatsby uses React.js & TypeScript under the hood and also allows for a good amount of customization via plugins
4. Gatsby provides great performance as a static-site generator.

Here's the general tools used:

- [Gatsby](https://www.gatsbyjs.com/): which is a React-based framework used to build
- [Gatsby Plugins](https://www.gatsbyjs.com/plugins/): see the full list of my used plugins under the [gatsby-config.js](https://github.com/duchess-toffee/duchess-toffee.github.io/blob/master/gatsby-config.js) file
- [Material-UI](https://material-ui.com/): for styling and components
- [Markdown](https://daringfireball.net/projects/markdown/syntax): for creating blog and work posts
- [GraphQL](https://graphql.org/): to query for images and posts
- [Google Analytics](https://analytics.google.com/analytics/web/#/): to track general site analytics
- [Nodemailer](https://nodemailer.com/about/): to configure emails
- [Serverless](https://www.serverless.com/): to send emails through AWS instead of Express.js
- [AWS](https://aws.amazon.com/): more specifically [AWS IAM](https://aws.amazon.com/iam/) & [AWS SES SMTP](https://docs.aws.amazon.com/ses/latest/DeveloperGuide/send-email-smtp.html) to set up credentials and send emails

<br/><hr/><br/>

<!-- WORKFLOW -->

## :ocean: Workflow

Here's some notes to myself on how to get started and running :)

1. `gatsby develop` will run the project in `localhost:8000` (unless you're running something in `8000`, then it'll increment)
2. `gatsby develop -H 0.0.0.0` will run the project in your local IP Address. This is helpful if you want to test across multiple devices. (If you forget how to check your local IP address, open up the **Command Prompt** and type in **ipconfig**. The **IPv4 Address** is what you're looking for)

When you're ready to deploy, follow the below steps:

1. `gatsby build` will build your site, generating static HTML and per-route JavaScript code bundles.
2. `gatsby serve` will run the built project in `localhost:9000` (unless you're running something in `9000`, then it'll increment) _Don't forget to hard refresh the page to account of service workers_
3. `gatsby serve -H 0.0.0.0` will run the project in your local IP Address. This is helpful if you want to test across multiple devices. (If you forget how to check your local IP address, open up the **Command Prompt** and type in **ipconfig**. The **IPv4 Address** is what you're looking for). _Don't forget to hard refresh the page to account of service workers_
4. `gh-pages -d public` deploys the built site to `gh-pages` which canonically becomes https://hannahong.dev
5. Don't forget to `git add`, `git commit`, and `git push` to the repo as well to save your progress.

_Go to [Contact API](https://github.com/duchess-toffee/hannah-ong-contact-api) to see more information on how the contact section works_

<br/><hr/><br/>

<!-- ROADMAP -->

## :traffic_light: Roadmap

See the [open issues](https://github.com/duchess-toffee/duchess-toffee.github.io/issues) for a list of upcoming features (and known issues).

<br/><hr/><br/>

<!-- CONTACT -->

## :phone: Contact

- :mega: [@duchess_toffee](https://twitter.com/duchess_toffee)
- :mailbox: hchai1991@gmail.com
- :octocat: [Portfolio Website Github Repo](https://github.com/duchess-toffee/duchess-toffee.github.io)

<br/><hr/><br/>

<!-- RESOURCES -->

## :books: Resources

- [Gatsby](https://www.gatsbyjs.com/)
- [Gatsby Plugins](https://www.gatsbyjs.com/plugins/)
- [React](https://reactjs.org/)
- [Material-UI](https://material-ui.com/)
- [Markdown](https://daringfireball.net/projects/markdown/syntax)
- [GraphQL](https://graphql.org/)
- [Google Analytics](https://analytics.google.com/analytics/web/#/)
- [Nodemailer](https://nodemailer.com/about/)
- [Serverless](https://www.serverless.com/)
- [AWS](https://aws.amazon.com/)
- [AWS IAM](https://aws.amazon.com/iam/)
- [AWS SES SMTP](https://docs.aws.amazon.com/ses/latest/DeveloperGuide/send-email-smtp.html)
- [Contact API]()
