# ACS HR Services - MERN Stack

A full-stack MERN (MongoDB, Express, React, Node.js) application for HR services management.

## Project Structure

```
├── backend/          # Express.js API server
├── frontend/         # Vite + React SPA
├── data/             # Data files
└── package.json      # Root package for managing both apps
```

## Prerequisites

- **Node.js** (v18 or higher)
- **MongoDB** (local or MongoDB Atlas connection)
- **npm** or **pnpm**

## Setup Instructions

### 1. Install Dependencies

From the root directory, run:

```bash
npm run install:all
```

This will install dependencies for the root, backend, and frontend directories.

### 2. Environment Configuration

#### Backend (.env)

Create a `.env` file in the `backend/` directory:

```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/acs_hr_services
NODE_ENV=development
```

**For MongoDB Atlas**, use:
```env
MONGODB_URI=mongodb+srv://<username>:<password>@<cluster>.mongodb.net/acs_hr_services?retryWrites=true&w=majority
```

#### Frontend

Frontend configuration is in `vite.config.ts`. Update the API base URL if needed.

### 3. Running the Application

#### Development Mode (Both Backend & Frontend)

```bash
npm run dev
```

This uses `concurrently` to run both servers:
- **Backend**: http://localhost:5000
- **Frontend**: http://localhost:5173

#### Backend Only

```bash
npm run dev:backend
```

#### Frontend Only

```bash
npm run dev:frontend
```

### 4. Building for Production

```bash
npm run build
```

This builds both the backend and frontend.

Build outputs:
- **Backend**: Ready to run with `node server.js`
- **Frontend**: Static files in `frontend/dist/`

## API Endpoints

- `GET /` - Server status
- `POST /api/contact` - Submit contact form
- `POST /api/register` - Job seeker registration

## Features

- **Frontend**: React with Tailwind CSS and Radix UI components
- **Backend**: Express.js with MongoDB integration via Mongoose
- **Database**: MongoDB for data persistence
- **CORS**: Enabled for frontend-backend communication
- **Environment Variables**: Secure configuration with dotenv

## Development

- Frontend: Vite for fast HMR (Hot Module Replacement)
- Backend: Node.js with Express
- Database: Mongoose ODM for MongoDB

## Directory Information

- `backend/`: Express server with routes and MongoDB models
- `backend/routes/`: API route handlers
- `backend/models/`: Mongoose schemas
- `frontend/src/`: React components and pages
- `frontend/src/components/`: Reusable UI components
- `data/`: Static data files

## Troubleshooting

### MongoDB Connection Error
- Ensure MongoDB is running locally or check your MongoDB Atlas connection string
- Verify `MONGODB_URI` in `.env` file

### Port Already in Use
- Backend default: 5000 (change in `.env`)
- Frontend default: 5173 (Vite uses next available port)

### CORS Issues
- Verify CORS is enabled in `backend/server.js`
- Check frontend API base URL in API calls

## License

ISC
