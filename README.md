
---

## ⚡ BACKEND — `README.md`

```md
# 🌐 Travel Booking Backend

This is the backend for the **Travel Booking Application**, built with **Node.js**, **Express**, and **MongoDB (Mongoose)**.  
It provides REST APIs for managing experiences, bookings, and user interactions.

---

## 🚀 Tech Stack

- **Node.js** — JavaScript runtime  
- **Express.js** — Web framework  
- **MongoDB** — NoSQL database  
- **Mongoose** — ODM for MongoDB  
- **dotenv** — Environment variable management  
- **cors** — Enable cross-origin requests  
- **axios** — For external API calls (e.g., Unsplash)

---

## ⚙️ Installation and Setup

1. **Navigate to the backend directory**
   cd backend

2. **Install dependencies**
    npm install


3. **Create a .env file**
PORT=400
MONGO_URI= <your_url>

4. **🌱 Seeding Sample Data**

You can populate your database with sample experiences using:
node seed.js
This will connect to MongoDB and insert sample travel experience data.


5. **Start the server**
    npm run dev

The server will start at 👉 http://localhost:5000

🧪 Testing the APIs

You can test all API routes using Postman or Thunder Client.
Example endpoints:
Method	Endpoint	Description
GET	/api/experiences	Get all experiences
GET	/api/experiences/:id	Get a single experience
POST	/api/experiences	Add a new experience


**Features**

RESTful APIs for experiences and bookings

MongoDB integration with Mongoose

Seed script for sample data

CORS enabled for frontend connection

💡 Author
Developed by Resham Rout
📧 [reshamrout@gmail.com]
🚀 MCA'26 @ VIT University