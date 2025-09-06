
📌 Full Stack Task Management Application

A powerful, modern, and responsive Task Management Application built with the MERN Stack (MongoDB, Express.js, React, Node.js).
This project demonstrates end-to-end full-stack development with secure authentication, task CRUD operations, and deployment on Heroku + Netlify.


---

🚀 Features

🔑 User Authentication & Authorization

Secure JWT-based login & registration

Passwords hashed with bcrypt

Protected routes for authenticated users


✅ Task Management

Create, View, Edit, and Delete tasks

Mark tasks as completed with styled feedback

Task details include title, description, due date, priority


📊 Sorting & Filtering

Filter tasks by priority, due date, or status

Organize tasks with advanced UI


🎨 User-Friendly UI

Fully responsive design (mobile, tablet, desktop)

Clean, modern styling with CSS Grid & Flexbox

Loading states, validation, and error messages


🌍 Deployment Ready

Frontend hosted on vercel:

fullstack-management-system-task-ma-one.vercel.app

Backend hosted on render:
https://fullstack-management-system-taskman.onrender.com

Connected with MongoDB Atlas




---

🛠️ Tech Stack

Frontend:

React.js

HTML5, CSS3, JavaScript (ES6+)


Backend:

Node.js

Express.js


Database:

MongoDB (Mongoose ORM)


Authentication:

JSON Web Tokens (JWT)

bcrypt.js


Deployment:

Heroku (Backend)

Netlify (Frontend)


Version Control:

Git & GitHub



---

📂 Project Structure

├── client/                  # React Frontend  
│   ├── public/  
│   └── src/  
│       ├── components/      
│       ├── pages/           
│       ├── features/        
│       └── App.js  
│       
         ....

├── server/src/                # Node.js + Express Backend  
│    ├── models/              # Mongoose models (User, Task)  
│    ├── routes/              # API routes  
│    ├── middleware/   # JWT Auth middleware  
│       ....
│ 
|__server.js 
├── .gitignore  
├── README.md  
└── package.json
|__Procfile


---

⚙️ Installation & Setup


2️⃣ Setup Backend (Server)

cd server
npm install

Create .env file inside server folder:

PORT=your_server_port
MONGO_URI=your_mongo_uri
JWT_SECRET=your_strong_jwt_secret
CLIENT_URL=http://localhost:5173


Run server:

node server.js

3️⃣ Setup Frontend (Client)

cd client
npm install

Create .env file inside client folder:

REACT_APP_API_URL=https://your-backend-url.herokuapp.com

Run frontend:

npm run dev


---

🌍 Deployment

Frontend (React) → Netlify

Backend (Node.js/Express) → Heroku

Database → MongoDB Atlas
