# Portfolio-2022

## Deployed:

- Deployed [on Netlify](https://gabriel-bondor.netlify.app/)

## Description

This project is a single-page application portfolio website built with React.js.

It was originally created in 2022, when Heroku stopped offering free hosting for Express.js projects and my previous portfolio website went offline. At the time, the main goal was to quickly rebuild and maintain an online presence.

Material UI (MUI) was chosen not only for its popularity, but also with the expectation that it would make development faster and easier — following the well-known joke that "“We do this not because it is easy, but because we thought it would be easy." The idea was to use MUI to spin up a functional and presentable portfolio with minimal effort.

## Project Evolution

In 2025, the project was refurbished and significantly improved:

- The overall design was modernized and refined

- More complex and interactive components were added

- The backend was migrated from MongoDB Atlas to Google Firestore

- Firestore security rules were configured to allow safe read access directly from the frontend using the Firebase npm package

- Serverless functions were retained as a fallback mechanism

- If data is missing in Firestore, backend functions fetch it from the legacy MongoDB database and persist it in Firestore

This hybrid approach ensured a seamless migration to Firestore while maintaining data safety and continuity. By accessing Firestore directly from the frontend whenever possible, the website’s performance was improved significantly, reducing latency and simplifying the architecture.
