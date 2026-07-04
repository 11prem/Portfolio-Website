# Prem B — Professional Portfolio Website

A premium, recruiter-focused single-page portfolio website showcasing mobile, real-time, data engineering, and AI/ML projects. Built with **React 19**, **Tailwind CSS**, **Radix UI/Shadcn**, and **Vanta.js** for an interactive, high-fidelity user experience.

---

## 🚀 Key Features

*   **Interactive 3D Background**: Powered by Vanta.js (Net theme) and Three.js, rendering dynamic, mouse-tracking network node animations.
*   **Modular Architecture**: Clean separation of sections, with a single source of truth for portfolio content in [mock.js](frontend/src/utils/mock.js).
*   **Latest Academic & Industry Details**: Reflected updates for B.Tech CSE CGPA (8.83/10), HCLTech Data Engineer Intern timeline, and custom Publications section.
*   **Publications Display**: Dedicated section highlighting published IEEE research papers with structured highlights.
*   **Client-Side Email Delivery**: Contact form fully integrated with **EmailJS** to send instant notifications and auto-replies directly to recipients.
*   **Aesthetic & Responsive Design**: Styled from the ground up for desktop, tablet, and mobile screens using fluid Tailwind grids and smooth animations.

---

## 📂 Project Architecture

```
├── frontend/               # React 19 Client Application
│   ├── public/             # Static Assets & Resume PDF
│   └── src/
│       ├── components/     # Reusable layout and background components
│       ├── sections/       # Timeline, Skills, Projects, Publications, and Contact views
│       └── utils/
│           └── mock.js     # Centralized portfolio data (Single Source of Truth)
├── backend_test.py         # Historical/API contract verification suite
├── contracts.md            # Integration API endpoint specifications
└── test_result.md          # Automated agent testing logs
```

---

## 🛠️ Getting Started (Local Run)

### Prerequisites
*   Node.js (v18+)
*   Yarn or npm

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/11prem/Portfolio-Website.git
   cd Portfolio-Website
   ```

2. Install dependencies:
   ```bash
   cd frontend
   yarn install
   # or
   npm install
   ```

### Start Development Server
Run the local dev server:
```bash
yarn start
# or
npm start
```
Open **[http://localhost:3000](http://localhost:3000)** in your browser to view the application.

### Build for Production
Bundle and optimize the project for hosting:
```bash
yarn build
# or
npm run build
```
The optimized bundle will be generated in `frontend/build/`.

---

## 📝 Configuration (EmailJS & Environment)
To set up the contact form to deliver emails to your inbox, copy or create a `.env` file in the `frontend` directory:
```env
REACT_APP_EMAILJS_SERVICE_ID=your_service_id
REACT_APP_EMAILJS_TEMPLATE_NOTIFICATION=your_notification_template_id
REACT_APP_EMAILJS_TEMPLATE_AUTOREPLY=your_autoreply_template_id
REACT_APP_EMAILJS_PUBLIC_KEY=your_public_key
```
These parameters are automatically imported by the [Contact.jsx](frontend/src/sections/Contact.jsx) component.
