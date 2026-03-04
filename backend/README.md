# Backend Documentation

## Project Overview

This backend is part of a full-stack web application deployed on a VPS server.

Technologies used:
- Node.js
- TypeScript
- Express.js
- Nginx reverse proxy
- Linux VPS hosting

The backend provides API services for the frontend application.

---

## Architecture

User Browser
    ↓
Domain (askktu.online)
    ↓
Nginx Reverse Proxy
    ↓
Backend API (Node.js + TypeScript)
    ↓
Frontend React Application

Backend API is accessible through:
https://askktu.online/api

---

## Project Structure

backend/
├── src/
│   ├── controllers/
│   ├── routes/
│   ├── services/
│   ├── models/
│   ├── middlewares/
│   └── server.ts
├── dist/
├── node_modules/
├── package.json
├── tsconfig.json
└── README.md

---

## Installation

Clone repository:
git clone https://github.com/YOUR_USERNAME/ProgramavimoProjektas.git
cd ProgramavimoProjektas/backend

Install dependencies:
npm install

---

## Development

Run backend locally:
npm run dev

Server will run on:
http://localhost:5000

---

## Production Build

Compile TypeScript:
npm run build

Run production server:
npm start

---

## Nginx Configuration

server {
    listen 80;
    server_name askktu.online www.askktu.online;

    location / {
        root /var/www/ProgramavimoProjektas/WebPage/dist;
        index index.html;
        try_files $uri /index.html;
    }

    location /api/ {
        proxy_pass http://localhost:5000/;
        proxy_http_version 1.1;
        proxy_set_header Host $host;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
    }
}

Restart Nginx:
sudo nginx -t
sudo systemctl restart nginx

---

## Security

- HTTPS via Let's Encrypt
- Domain validation
- CORS protection

Certificate authority:
Let's Encrypt

---

## Running Backend as Background Service

Install PM2:
npm install -g pm2

Run backend:
pm2 start dist/server.js --name backend
pm2 save
pm2 startup

---

## Future Improvements

- Database integration
- Authentication
- AI chatbot APIs
- Vector search integration
- CI/CD pipeline automation

---
