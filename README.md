# AVOMA Pharma - Modern Healthcare Solutions

![AVOMA Pharma](https://raw.githubusercontent.com/MazweMavuso/avoma/main/public/avoma-pharma-logo.png)

A premium, modern, and highly animated web application for **AVOMA Pharma**, the pharmaceutical wholesale & distribution division of AVOMA Group. This platform serves healthcare providers across **Eswatini** and **Mozambique**, delivering critical medicines, consumables, and surgical equipment.

## 🚀 Live Demo
[View the Repository](https://github.com/MazweMavuso/avoma.git)

---

## ✨ Features

- **Dynamic Content Carousel:** Interactive Hero section with smooth Framer Motion transitions and staggered content entry.
- **Modular Architecture:** Clean project structure with page-specific components and shared UI libraries.
- **Product Catalog:** Comprehensive showcase of pharmaceutical brands and medical consumables.
- **Animated Experience:** Scroll reveals, parallax effects, and staggered entrance animations powered by Framer Motion.
- **Dark Mode Support:** Fully responsive dark/light mode toggle with system preference detection.
- **AI-Powered Assistant:** Integrated AI chatbot for instant customer inquiries.
- **Advanced Routing:** Seamless navigation with `react-router-dom` and automatic scroll-to-top on page changes.
- **Premium Aesthetics:** Tailwind CSS v4 design system with custom brand colors and Google Fonts (Playfair Display & DM Sans).

---

## 🛠️ Tech Stack

- **Framework:** [React 19](https://react.dev/)
- **Build Tool:** [Vite](https://vitejs.dev/)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
- **Animations:** [Framer Motion](https://www.framer.com/motion/)
- **Routing:** [React Router DOM v7](https://reactrouter.com/)
- **Icons:** [Lucide React](https://lucide.dev/) & [React Icons](https://react-icons.github.io/react-icons/)
- **Effects:** [React Snowfall](https://github.com/cahilf/react-snowfall)

---

## 📂 Project Structure

```bash
src/
├── assets/             # Images and brand assets
├── components/
│   ├── layout/         # Core layout (Navbar, Footer, ScrollReset)
│   └── shared/         # Reusable UI & Animations (Reveal, Stagger, Parallax)
├── data/               # Static content (Products, Partners, Contact)
├── pages/
│   ├── home/           # HomePage & its specific sections
│   ├── products/       # ProductsPage & its specific sections
│   └── about/          # AboutPage (Mission, Vision, History)
├── App.jsx             # Main routing & application wrapper
└── main.jsx            # Entry point
```

---

## ⚙️ Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/MazweMavuso/avoma.git
   cd avoma
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up Environment Variables:**
   Create a `.env` file in the root directory:
   ```env
   VITE_OPENROUTER_API_KEY=your_api_key_here
   ```

4. **Start the development server:**
   ```bash
   npm run dev
   ```

---

## 🚢 Deployment

To build the project for production:
```bash
npm run build
```
The output will be in the `dist/` folder, ready for hosting.

---

## 📄 License
© 2026 AVOMA GROUP — AVOMA Pharma Division. All rights reserved.

---
*Developed with precision for AVOMA Pharma.*
