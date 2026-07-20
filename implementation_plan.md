# Implement Contact Form Backend and Email Notifications

This plan describes how we will capture contact form submissions, store them in the database, and send them as email notifications.

## User Review Required

> [!IMPORTANT]
> To send emails, we will use **Nodemailer**. You will need to provide an email account (like Gmail) and an "App Password" to allow the server to send emails. I will add placeholders in your `backend/.env` file for `EMAIL_USER` and `EMAIL_PASS`. You will need to fill these in for the emails to actually be sent. 

## Proposed Changes

### Backend
#### [NEW] backend/models/contact.js
Create a new Mongoose schema matching the contact form fields (name, email, phone, company, service, message).

#### [MODIFY] backend/package.json
Install `nodemailer` to handle email sending.

#### [MODIFY] backend/server.js
Add a new `POST /api/contact` route. This route will:
1. Save the incoming contact form data to the MongoDB database using the new `Contact` model.
2. Use Nodemailer to send an email notification to the site admin containing the message details.

### Frontend
#### [MODIFY] frontend/components/contact-form.tsx
Update the `onSubmit` function to remove the simulated delay and instead make a real HTTP POST request to `http://localhost:5001/api/contact` with the form data.

## Verification Plan

### Manual Verification
1. I will provide a command to run the backend and frontend.
2. You will need to update the `backend/.env` file with your `EMAIL_USER` and `EMAIL_PASS`.
3. You can fill out the contact form on the frontend and check if:
   - A success message appears.
   - The data is visible in your MongoDB database.
   - An email arrives at the configured address.
