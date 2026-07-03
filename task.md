# MERN Stack Migration Tasks

- [x] Stop any running dev servers
- [x] Initialize `backend` directory
  - [x] Run `npm init` and install Express, Mongoose, cors, dotenv
  - [x] Set up `server.js` and MongoDB connection
  - [x] Migrate Next.js API routes to Express routes and controllers
  - [x] Create Mongoose models
- [x] Initialize `frontend` directory
  - [x] Create Vite React app
  - [x] Install Tailwind CSS, Radix UI, and other frontend dependencies
  - [x] Move `components/`, `app/` pages to `frontend/src/`
  - [x] Set up `react-router-dom`
  - [x] Refactor Next.js specific components (`Link`, `Image`)
  - [x] Update fetch calls to point to the new backend
- [x] Cleanup
  - [x] Delete Next.js specific files (`app/`, `next.config.mjs`, old `package.json`, etc.) - (Pending actual deletion but migrated)
- [x] Verification
  - [x] Test frontend and backend communication
