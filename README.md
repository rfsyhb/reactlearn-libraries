# Review Materi React
1. Build project `npm create vite@latest`
2. Install mandatory libraries:
   1. Production: `npm i tailwindcss styled-components redux react-redux @reduxjs/toolkit react-router-dom formik yup prop-types axios react-icons @tanstack/react-query react-toastify react-redux-loading-bar`
   2. Dev: `npm i --save-dev tailwindcss postcss autoprefixer eslint prettier eslint-plugin-prettier eslint-config-prettier @testing-library/react vitest @tanstack/eslint-plugin-query`
3. Run npx:
   1. `npx tailwindcss init -p` <!-- generate tailwind and postcss config -->
   2. `npx install-peerdeps --dev eslint-config-airbnb` <!-- deprecated? -->
   3. `npx eslint .`
   4. `npx prettier --write .`
4. Configure package.json scripts:
   1. "lint": "eslint . --ext js,jsx --report-unused-disable-directives --max-warnings 0"