# Resumio

Resumio is a full-stack resume builder with a React and Vite frontend and an Express, MongoDB, and Node.js backend.
It uses AI to help users turn their experience into clear, relevant, and ATS-friendly resume content.

The AI-assisted workflow helps organize uploaded resume information, improve professional summaries, and highlight job-relevant skills and keywords. Users can then review and customize the generated content before creating a polished resume.

## Live Demo

[Open Resumio](https://resumio-taupe.vercel.app/)

## Project Structure

```text
resumio/
  React + Vite frontend
resumioserver/
  Express backend
```

## Features

- Create, edit, and delete resumes
- Resume templates and customization
- Personal information, summary, skills, education, experience, and projects
- Resume preview and public sharing
- JWT-based authentication
- PDF resume upload with AI-assisted parsing
- Profile image upload through ImageKit

## Requirements

- Node.js 18 or newer
- MongoDB database
- OpenAI API key for AI resume processing
- ImageKit credentials for profile image uploads

## Install Dependencies

Install dependencies separately for both applications:

```cmd
cd resumio
npm install

cd ../resumioserver
npm install
```

## Environment Variables

Create `resumio/.env` for local frontend development:

```env
VITE_BASE_URL=http://localhost:3000
```

Create `resumioserver/.env` for the backend:

```env
PORT=3000
DB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
OPENAI_API_KEY=your_openai_api_key
IMAGEKIT_PRIVATE_KEY=your_imagekit_private_key
CORS_ORIGIN=http://localhost:5173
```

Do not commit either `.env` file or real credentials to Git.

## Run Locally

Start the backend from `resumioserver/`:

```cmd
npm run dev
```

Start the frontend from a second terminal in `resumio/`:

```cmd
npm run dev
```

Open the Vite URL shown in the terminal, usually `http://localhost:5173`.

## Frontend Commands

Run these commands from `resumio/`:

```cmd
npm run dev       # Start the development server
npm run build     # Build the production frontend
npm run preview   # Preview the production build
```

## Deployment

### Backend on Render

1. Create a Render Web Service connected to this repository.
2. Set the service root directory to `resumioserver`.
3. Use `npm install` as the build command.
4. Use `npm start` as the start command.
5. Add the backend environment variables from `resumioserver/.env` in Render.
6. Copy the deployed Render URL, for example `https://your-backend.onrender.com`.

### Frontend on Vercel

1. Create a Vercel project connected to this repository.
2. Set the project root directory to `resumio`.
3. Use `npm run build` as the build command.
4. Use `dist` as the output directory.
5. Add this Vercel environment variable:

```text
VITE_BASE_URL=https://your-backend.onrender.com
```

6. Redeploy the frontend after adding or changing the variable.

The frontend reads this value in `src/configs/api.js` through `import.meta.env.VITE_BASE_URL`.

## API Route Groups

- `/api/users` - registration, login, user data, and user resumes
- `/api/resumes` - create, read, update, delete, and public resume access
- `/api/ai` - AI resume upload and processing

Protected endpoints require the JWT returned by login or registration in the `Authorization` header.

## CORS

After deploying the frontend, configure the backend CORS policy to allow the Vercel frontend domain. Otherwise, the browser may block requests even when the backend URL is correct.
