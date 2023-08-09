#
- This React application is built using [Vite](https://vitejs.dev/).
- It uses [Tailwind CSS](https://tailwindcss.com/)
- The application is generated in JavaScript.

## Pre-requisites

- [git](https://git-scm.com/) - v2.13 or greater
- [NodeJS](https://nodejs.org/en/) - v16 or greater
- [npm](https://www.npmjs.com/) - v6 or greater

## Running in dev environment

1.  `cd YOUR_APPLICATION`
2.  `npm install`
3.  `npm start`

## .env file

This file contains various environment variables that you can configure.

## Folder Structure

```
.
├── package.json
├── postcss.config.js
├── vite.config.js
├── index.html
├── public
│   ├── assets
│   │   └── images --------- All Project Images
│   ├── favicon.ico
│   ├── manifest.json
│   └── robots.txt
├── README.md
├── src
│   ├── App.jsx
│   ├── assets
│   │   └── fonts ---------- Project fonts
│   ├── components --------- UI and Detected Common Components
│   ├── constants ---------- Project constants, eg: string consts
│   ├── hooks -------------- Helpful Hooks
│   ├── index.jsx
│   ├── pages -------------- All route pages
│   ├── Routes.jsx ---------- Routing
│   ├── styles
│   │   ├── index.css ------ Other Global Styles
│   │   └── tailwind.css --- Default Tailwind modules
│   └── util
│       └── index.jsx ------- Helpful utils
└── tailwind.config.js ----- Entire theme config, colors, fonts etc.
```

For the project to build, **these files must exist with exact filenames**:

- `index.html` is the page template;
- `src/index.jsx` is the JavaScript entry point.

You may create subdirectories inside src.

## Available Scripts

In the project directory, you can run:

### `npm start`


### `npm test`

Launches the test runner in the interactive watch mode.<br>

### `npm run build`

Builds the app for production to the `build` folder.<br>

### `npm run eject`

