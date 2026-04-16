🚀 Docker + Nginx Load Balancer (3 Backend Servers)
📌 Project Description

This project demonstrates a load-balanced backend system using Docker and Nginx.
It runs 3 separate Node.js backend servers on different ports (5000, 5001, 5002) inside Docker containers.

Nginx acts as a reverse proxy + load balancer, distributing incoming requests across all backend servers to ensure:

High availability
Scalability
Fault tolerance
Better performance


🏗️ Architecture
Client (Browser)
      ↓
   Nginx (Port 8090 / 80)
      ↓
 ┌────────┬────────┬
 ↓        ↓        ↓
Server1  Server2  Server3
5000     5001     5002


⚙️ Technologies Used
Docker 🐳
Docker Compose
Nginx (Load Balancer)
Node.js
Express.js
React.js


🚀 How to Run Project

1️⃣ Build and start containers
docker-compose up --build

2️⃣ Run in background
docker-compose up -d

3️⃣ Stop containers
docker-compose down

🌐 Access Application
   Open in browser: http://localhost:8090/api/details
👉 This is Nginx Load Balancer entry point

