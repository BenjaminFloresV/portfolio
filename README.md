## React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

*   [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
*   [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

### Commands

npm install -g create-vite (install vite globally)

npx create-vite (create app with Vite with React)

npx install (install all the dependencies)

npm run dev (see the project locally)

npm install tailwindcss @tailwindcss/vite (Install Tailwind CSS Framework)

npm install emailjs-com @emailjs/browser (free email service)

npm install gh-pages --save-dev

*   Then: create repository
*   Configure vite.config.js with the base path (in this case was /portfolio)
*   Configure package.json with new “homepage” key and the value should be "https://\[github\_username\].github.io/\[repo\_name\]
*   Configure package.json with these two new keys under “scripts”: 
    *   "predeploy": "npm run build",
    *   "deploy": "gh-pages -d dist"

push your code to your github repo.

npm run deploy

that's it