#  LocalChefBazaar – Frontend

LocalChefBazaar is a modern online marketplace that connects local home chefs with customers looking for fresh, healthy, and homemade meals.  
This repository contains the **frontend (client-side)** of the LocalChefBazaar platform, built with **React** and modern UI tools to ensure performance, security, and an attractive user experience.

---

## 🌐 Live Website
🔗 **Live URL:**   https://localchefbazaar-b1365.web.app


---

## 🎯 Project Purpose
The frontend application allows users to:
- Explore daily meals from verified local chefs
- Register and log in securely
- View meal details and reviews
- Place orders and manage favorites
- Access role-based dashboards (User, Chef, Admin)
- Enjoy a responsive and recruiter-friendly UI

---

## ✨ Key Features

### 🔐 Authentication & Security
- Firebase Email & Password authentication
- JWT-based route protection
- Persistent login (no redirect on page reload)
- Role-based UI access (User / Chef / Admin)

### 🏠 Public Pages
- Animated Hero section (Framer Motion)
- Dynamic Daily Meals (server-driven)
- Customer Reviews section
- Meals Page with:
  - Price sorting (ascending / descending)
  - Pagination (10 meals per page)
  - Login-protected details access

### 🔒 Private Features
- Meal Details Page with:
  - Full meal information
  - Review system (add & view)
  - Add to Favorite feature
- Order confirmation system
- User Dashboard:
  - My Profile
  - My Orders
  - My Reviews
  - Favorite Meals
- Chef Dashboard:
  - Create Meal
  - My Meals (Update / Delete)
  - Order Requests management
- Admin Dashboard:
  - Manage Users & Fraud control
  - Manage Role Requests
  - Platform Statistics (Recharts)

### 📱 UI & UX
- Fully responsive (Mobile-first)
- Loading spinner for app-wide loading
- Global error page
- Dynamic page titles (React Helmet Async)
- Toast & SweetAlert notifications
- Clean and professional dashboard layout

---

## 🛠️ Technologies & Packages Used

### Core
- React 18
- Vite
- React Router
- Firebase Authentication

### State & Data Handling
- @tanstack/react-query
- Axios

### Forms & Validation
- react-hook-form

### Styling & UI
- Tailwind CSS
- DaisyUI
- Headless UI
- Lucide React
- React Icons

### Animations & UX
- Framer Motion
- React Responsive Carousel

### Notifications & Charts
- react-hot-toast
- SweetAlert2
- Recharts

---

## 🔐 Environment Variables
All sensitive Firebase keys are secured using environment variables.



