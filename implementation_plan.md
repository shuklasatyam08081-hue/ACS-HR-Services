# Admin Job Management Feature

This plan outlines the steps to create a dynamic job listing system where an admin can manually add, edit, and delete jobs without touching the code.

## User Review Required
> [!IMPORTANT]
> The current jobs are hardcoded in the frontend. This plan will move them to the database (MongoDB). I will create a simple hidden Admin Dashboard (`/admin/jobs`) to manage these jobs.
> For security, I can add a simple password prompt to access this admin page. Do you have a specific password you'd like to use (e.g., "admin123"), or should I just keep the page hidden without a password for now?

## Proposed Changes

### Backend

#### [NEW] `backend/models/job.js`
- Create a new Mongoose schema for Jobs including fields like `title`, `company`, `location`, `type`, `department`, `experience`, `salary`, `description`, `requirements`, and `responsibilities`.

#### [MODIFY] `backend/server.js`
- Add API endpoints to handle job data:
  - `GET /api/jobs`: Fetch all jobs.
  - `POST /api/jobs`: Create a new job.
  - `PUT /api/jobs/:id`: Edit an existing job.
  - `DELETE /api/jobs/:id`: Delete a job.

### Frontend

#### [MODIFY] `frontend/app/jobs/page.tsx`
- Remove the hardcoded dummy jobs.
- Add logic (`useEffect` and `fetch`) to load jobs dynamically from the backend API.

#### [NEW] `frontend/app/admin/jobs/page.tsx`
- Create a completely new Admin Dashboard page.
- Add a simple password protection screen.
- Build a user-friendly interface with forms to:
  - View a table/list of all active jobs.
  - Click a button to Add a new job listing.
  - Edit or Delete existing job listings.

## Verification Plan
### Manual Verification
- Start the backend and frontend servers.
- Go to `/admin/jobs` and test creating a new job.
- Verify that the new job appears immediately on the public `/jobs` page.
- Test editing and deleting a job to ensure changes reflect properly.
