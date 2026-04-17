# Competitive AI Study Planner

A full-stack web application designed to help students prepare for competitive exams with smart study planning, daily task management, mock tests, study materials, and progress tracking. The platform also includes a mentor module to monitor student performance and guide preparation effectively.

## Table of Contents
- Features
- Tech Stack
- Project Structure
- Quick Start
- Modules
- API Endpoints
- Future Enhancements
- Author

---

## Features

### Student Features
- Secure student signup and login authentication
- Select exam type, subjects, and topics
- Choose preparation start date and end date
- Generate personalized day-wise study plan
- Smart task unlocking system (only current day tasks accessible)
- Mock tests after task completion
- Reattempt if score is low
- Access topic-based study materials
- View profile and progress analytics
- Track completed tasks and learning streak

### Mentor Features
- Mentor login panel
- View assigned students
- Track student progress
- Monitor task completion status
- Review performance reports

---

## Tech Stack

### Frontend
- React.js
- Vite
- CSS / Tailwind CSS
- Axios

### Backend
- Node.js
- Express.js

### Database
- MongoDB
- Mongoose

### Authentication
- JWT (JSON Web Token)

---

## Project Structure

```bash
Competitive_AI_StudyPlanner/
│── backend/
│   ├── config/
│   ├── controllers/
│   ├── middlewares/
│   ├── models/
│   ├── routes/
│   ├── utils/
│   └── server.js
│
│── frontend/
│   ├── public/
│   ├── src/
│   │   ├── assets/
│   │   ├── components/
│   │   ├── context/
│   │   └── pages/
│   └── vite.config.js
│
└── README.md
