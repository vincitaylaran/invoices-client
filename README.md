# Frontend Mentor - Invoice app solution

This is a solution to the [Invoice app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/invoice-app-i7KaLTQjl). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Create, read, update, and delete invoices
- Receive form validations when trying to create/edit an invoice
- Save draft invoices, and mark pending invoices as paid
- Filter invoices by status (draft/pending/paid)
- Toggle light and dark mode
- **Bonus**: Keep track of any changes, even after refreshing the browser (`localStorage` could be used for this if you're not building out a full-stack app)

### Screenshot

![](./screenshot.jpg)

Add a screenshot of your solution. The easiest way to do this is to use Firefox to view your project, right-click the page and select "Take a Screenshot". You can choose either a full-height screenshot or a cropped one based on how long the page is. If it's very long, it might be best to crop it.

Alternatively, you can use a tool like [FireShot](https://getfireshot.com/) to take the screenshot. FireShot has a free option, so you don't need to purchase it.

Then crop/optimize/edit your image however you like, add it to your project, and update the file path in the image above.

**Note: Delete this note and the paragraphs above when you add your screenshot. If you prefer not to add a screenshot, feel free to remove this entire section.**

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library
- [Gatsby.js](https://www.gatsbyjs.com/) - React framework
- [Styled Components](https://styled-components.com/) - For styles
- [MongoDB](https://www.mongodb.com/) - Database
- [GraphQL](https://graphql.org/) - Querying language for API

### 2 reasons why I chose MongoDB

Initially, I wanted to use SQLite but that meant I needed to brush up on my SQL, which I didn't want to do. Also, there doesn't seem to be a free way to deploy an SQL database. Some of them provide free trials for a certain period of time but I wanted my database to be hosted free forever.

#### 1. It's developer friendly

Data in MongoDB uses a format similar to JSON called BSON. This format is easy to read for anyone who is experienced in web development.

#### 2. They provide 512mb of free storage

This is suitable for this kind of project as I only suspect frontend mentor members and potential employers to visit and interact with this app.

Each invoice takes up about 0.5kb of storage in the database. MongoDB's free tier provides up to 512mb. Also, add to the fact that I will be using MongoDB's "time to live" feature. This feature will put an expiration timer or date to any invoices that the user will create (except for the initial invoices on first load). This will help prevent users go past the 512mb limit and should also help me maintain the database.

### What I learned

```graphql

```

If you want more help with writing markdown, we'd recommend checking out [The Markdown Guide](https://www.markdownguide.org/) to learn more.

**Note: Delete this note and the content within this section and replace with your own learnings.**

### Continued development

Use this section to outline areas that you want to continue focusing on in future projects. These could be concepts you're still not completely comfortable with or techniques you found useful that you want to refine and perfect.

**Note: Delete this note and the content within this section and replace with your own plans for continued development.**

### Useful resources

- [Setting up a Gatsby Project with TypeScript](https://www.digitalocean.com/community/tutorials/how-to-set-up-a-gatsby-project-with-typescript) - This helped me with setting up a Gatsby project with TypeScript.
- [Making a GraphQL query from the client](https://www.howtographql.com/react-apollo/2-queries-loading-links/) - This helped me know what to install and use to write client-side GraphQL queries.
- [Fixing the TS Error 2307](https://duncanleung.com/typescript-module-declearation-svg-img-assets/) - This helped with fixing the TypeScript error (ts 2307) you would get when importing SVGs as modules.

## Author

- Website - [Add your name here](https://www.your-site.com)
- Frontend Mentor - [@yourusername](https://www.frontendmentor.io/profile/yourusername)
- Twitter - [@yourusername](https://www.twitter.com/yourusername)

**Note: Delete this note and add/remove/edit lines above based on what links you'd like to share.**

## Acknowledgments

This is where you can give a hat tip to anyone who helped you out on this project. Perhaps you worked in a team or got some inspiration from someone else's solution. This is the perfect place to give them some credit.

**Note: Delete this note and edit this section's content as necessary. If you completed this challenge by yourself, feel free to delete this section entirely.**
