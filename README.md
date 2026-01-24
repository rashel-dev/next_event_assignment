# Next Event Management System

A modern, full-stack Event Management Dashboard built with **Next.js 15**, **TypeScript**, and **MongoDB**. This application allows users to create, view, update, and delete events through a responsive and intuitive interface.

🔗 **Live Demo:** [https://next-event-assignment.vercel.app/](https://next-event-assignment.vercel.app/)

---

## 🚀 Features

-   **Dashboard Overview**: Visual statistics of total events, upcoming events, locations, and attendees.
-   **Event Management (CRUD)**:
    -   **Create**: Add new events with details like title, date, location, and image.
    -   **Read**: View a paginated list of all events.
    -   **Update**: Edit existing event details via a modal interface.
    -   **Delete**: Remove events with a confirmation modal.
-   **Authentication**: Secure user authentication using JWT and Bcrypt.
-   **Responsive Design**: Built with Tailwind CSS and Shadcn UI for a seamless experience on all devices.
-   **Modern Tech Stack**: Utilizes the latest Next.js App Router and Server Actions/API Routes.

---

## 🛠️ Tech Stack

-   **Framework**: [Next.js 15](https://nextjs.org/)
-   **Language**: [TypeScript](https://www.typescriptlang.org/)
-   **Database**: [MongoDB](https://www.mongodb.com/)
-   **Styling**: [Tailwind CSS](https://tailwindcss.com/)
-   **UI Components**: [Shadcn UI](https://ui.shadcn.com/) / Radix UI
-   **Icons**: [Lucide React](https://lucide.dev/)
-   **Forms**: React Hook Form

---

## ⚙️ Setup & Installation

Follow these steps to run the project locally:

1.  **Clone the repository:**
    ```bash
    git clone <repository-url>
    cd next_event_by_next_and_typescript_2
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    # or
    yarn install
    ```

3.  **Configure Environment Variables:**
    Create a `.env.local` file in the root directory and add your MongoDB connection string and other secrets:
    ```env
    MONGODB_URI=your_mongodb_connection_string
    JWT_SECRET=your_jwt_secret
    ```

4.  **Run the development server:**
    ```bash
    npm run dev
    ```

5.  **Open the app:**
    Visit [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📂 Route Summary

### **Frontend Routes**

| Route | Description |
| :--- | :--- |
| `/` | Home / Landing Page |
| `/login` | User Login Page |
| `/register` | User Registration Page |
| `/dashboard/overview` | Dashboard Home with Statistics |
| `/dashboard/all-events` | List of all events with Edit/Delete actions |
| `/dashboard/create-event` | Form to create a new event |

### **API Endpoints**

| Method | Endpoint | Description |
| :--- | :--- | :--- |
| `GET` | `/api/events` | Fetch all events |
| `POST` | `/api/events` | Create a new event |
| `GET` | `/api/events/[id]` | Fetch a single event by ID |
| `PATCH` | `/api/events/[id]` | Update an event by ID |
| `DELETE` | `/api/events/[id]` | Delete an event by ID |

---

## 📝 Feature Details

### **1. Dashboard Overview**
Provides a quick snapshot of the system's status, displaying key metrics such as the total number of events and upcoming schedules using interactive cards.

### **2. Event Management**
A comprehensive table view allows administrators to manage events efficiently.
-   **Edit**: Opens a modal pre-filled with event data for quick updates.
-   **Delete**: Secure deletion process with a confirmation dialog to prevent accidental data loss.

### **3. Secure Authentication**
Protects dashboard routes to ensure only authorized users can manage events.

---

## 🤝 Contributing

Contributions are welcome! Please fork the repository and submit a pull request for any enhancements or bug fixes.
