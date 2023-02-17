# Mayank Jain Portfolio

#### [Link - Mayank Jain Portfolio](https://mayank-jain.vercel.app/)
This is a portfolio website built using React, Tailwind CSS, and Redux to showcase the projects and skills of Mayank Jain.

## Table of Contents

- [Demo](#demo)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
- [What i Learnt](#what-i-learnt)
- [Folder Structure](#folder-structure)
- [License](#license)

## Demo

### [Live App](https://mayank-jain.vercel.app/)

#### [Video Demo](https://i.imgur.com/4wEJlz4.mp4)
[<img src="https://imgur.com/NTL9nZh.png" width="500" height="250"/>](https://i.imgur.com/4wEJlz4.mp4)


## Features

- Responsive design that works on all screen sizes
- Cool home page cursor animation
- Smooth Scroll to section using links
- Projects section to showcase work
- Contact form for getting in touch
- Skill section to display relevant skills
- Custom map to match the theme

## Technologies Used

- React
- Redux
- Tailwind CSS
- TagCloud
- Smooth Scroll
- Snazzy Maps
- EmailJS

## Getting Started

To get started with this project, you can follow the steps below:

1. Clone the repository to your local machine.

```bash
git clone https://github.com/Mayank-Jain-1/Portfolio.git
```

2. Navigate into the project directory.

```bash
cd Portfolio
```
3. Install the required dependencies

```bash
npm install
```

4. Create a .env file in the root of the project and add the following variables:

```.env
REACT_APP_EMAILJS_USER_ID = <YOUR_EMAILJS_USER_ID>
REACT_APP_EMAILJS_SERVICE_ID = <YOUR_EMAILJS_SERVICE_ID>
REACT_APP_EMAILJS_TEMPLATE_ID = <YOUR_EMAILJS_TEMPLATE_ID>
```

5. Start Development Server

```bash
npm run start
```

6. Open the application in your browser by navigating to `http://localhost:3000`.

## What i learnt
- How to implement smooth scrolling functionality for navigation using links.
- How to customize a map to match the theme of the website.
- How to Create toasty notifications. Linking it to redux and can be called from anywhere now using a simple dispatch.
- How to use Redux to manage the state of the application, including creating actions, reducers, and a store.
- How to use the EmailJS API to send emails directly from the contact form without the need for a backend.
- How to use HTML Canvas to create custom animations like the home page mouse trailer.

## Folder Structure

```bash
├───public
└───src
    ├───actions
    ├───components
    ├───functions
    ├───media
    ├───Pages
    └───reducers
```

## License 
This project is licensed under the MIT License.
