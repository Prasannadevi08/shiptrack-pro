# 🚚 ShipTrack Pro – Smart Delivery Tracking System

## 📌 Project Overview

ShipTrack Pro is a full-stack delivery tracking system that allows users to track shipments in real-time while enabling admins to manage and update delivery status efficiently.

This project improves delivery transparency, reduces customer queries, and provides analytics for logistics operations.

---

## 🚀 Features

### 👤 User Module

* User Registration & Login
* Track shipment using Tracking ID
* View real-time status and location

### 🛠️ Admin Module

* Create new shipments
* Update shipment status (PENDING / DELIVERED)
* Update current location of shipment

### 📊 Dashboard

* Total Shipments
* Delivered vs Pending
* Interactive Charts (Pie + Bar)

### 🔐 Security

* Protected routes (Login required)
* Session handling using localStorage

---

## 🧠 Tech Stack

### Frontend

* React (Vite)
* Tailwind CSS
* Axios
* Recharts

### Backend

* Spring Boot
* REST APIs
* MySQL Database
* JPA / Hibernate

---

## 🔄 System Flow

1. Admin creates shipment
2. Shipment stored in database
3. Admin updates shipment status
4. User tracks shipment using tracking ID
5. Dashboard shows analytics

---

## 🌐 API Endpoints

### Auth

* `POST /auth/register`
* `POST /auth/login`

### Shipment

* `POST /shipments/addshipment`
* `GET /shipments/track/{trackingId}`
* `PUT /shipments/updateshipment/{trackingId}`
* `GET /shipments/getshipments`

### Dashboard

* `GET /shipments/dashboard`

---

## 🖥️ Project Structure

shiptrack/
│
├── shiptrack-frontend (React)
├── shiptrackpro (Spring Boot)
│
└── README.md

---

## ⚙️ How to Run Locally

### Backend

```bash
cd shiptrackpro
mvn spring-boot:run
```

### Frontend

```bash
cd shiptrack-frontend
npm install
npm run dev
```

---

## 📈 Future Improvements

* JWT Authentication
* Email/SMS Notifications
* Delivery Timeline UI
* Role-based Access (Admin/User)
* Deployment (Vercel + Render)

---

## 💬 Author

**Prasanna**

---

## ⭐ Conclusion

This project demonstrates full-stack development, real-time tracking, API integration, and modern UI design.

It reflects practical implementation of a real-world logistics system.
