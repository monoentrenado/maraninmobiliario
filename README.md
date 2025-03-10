# maraninmobiliario
### 📄 README.md for **Yucatán Homes** Real Estate Website

# Yucatán Homes 🌴🏡  
**Find Your Dream Home in the Yucatán Peninsula**  

Welcome to **Yucatán Homes**, the professional and certified real estate platform that helps you find your ideal property in the Yucatán Peninsula. This platform is designed with modern aesthetics, seamless interactions, and full CMS capabilities to provide the best property browsing experience.

---

## 🎯 Project Overview

This project is a **full-stack real estate website** built to promote a professional realtor in the Yucatán Peninsula with:

- Interactive property listings
- Blog articles
- Client testimonials
- Contact forms powered by **Typeform**
- Dynamic content management through **Strapi CMS**
- Mobile-first design with **Web Components**
- Automatic deployment via **GitHub** and **Netlify**
- Backend hosted on **Heroku**

---

## 🛠️ Tech Stack
| Layer       | Technology       |
|------------|----------------|
| Frontend   | HTML5, Web Components, SASS, Typeform |
| Backend    | Strapi CMS, PostgreSQL, Node.js |
| Deployment | Netlify, Heroku, GitHub |
| Design     | Mobile-First Wireframes, Modern Interactions |
| Forms      | Typeform API |

---

## 🔥 Features

✅ Interactive property listings  
✅ Advanced search functionality  
✅ Property detail pages  
✅ Blog with dynamic content  
✅ Client testimonials slider  
✅ Integrated contact forms powered by Typeform  
✅ Admin panel to manage properties and posts  
✅ SEO-friendly structure  
✅ Fully responsive mobile-first design  

---

## 📄 Project Structure

```bash
├── backend                # Strapi CMS backend
│   ├── api               # API Content Types
│   ├── config            # Database & API Configurations
│   └── public            # Media Uploads
│
├── frontend              # Modern Web Components Frontend
│   ├── components        # Custom Web Components
│   ├── styles            # SASS Stylesheets
│   ├── index.html        # Main HTML Page
│   ├── app.js            # App Logic
│   └── typeform.js       # Typeform Integration
│
└── README.md             # Project Documentation
```

---

## 🌐 Live Demo  

Frontend: [Yucatán Homes](https://yucatan-homes.netlify.app)  
Backend API: [Strapi CMS on Heroku](https://yucatan-homes-backend.herokuapp.com)  

---

## 🚀 Getting Started

### Prerequisites

- Node.js >= 14.x
- npm >= 6.x
- PostgreSQL
- Heroku CLI
- Netlify Account

---

### Installation

1. Clone this repository:

```bash
git clone https://github.com/your-username/yucatan-homes.git
cd yucatan-homes
```

---

### Backend Setup (Strapi CMS)

```bash
cd backend
npm install
npm run develop
```

---

### Frontend Setup

```bash
cd frontend
npm install
sass styles/main.scss styles/main.css
npx lite-server
```

---

## 🔑 Environment Variables

Create the following environment variables:

### Backend
| Variable       | Description                  |
|---------------|------------------------------|
| DATABASE_URL  | PostgreSQL Connection String |
| JWT_SECRET    | Strapi JWT Secret Key       |

### Frontend
| Variable    | Description             |
|-------------|------------------------|
| API_URL    | Backend API URL        |
| TYPEFORM_ID | Typeform Embed ID     |

---

## 📌 Deployment

### Backend (Heroku)

```bash
heroku login
heroku create yucatan-homes-backend
git push heroku main
```

---

### Frontend (Netlify)

1. Connect your GitHub repo to Netlify.
2. Set the `API_URL` environment variable.
3. Deploy your frontend.

---

## 🔥 API Endpoints

| Method | Route               | Description            |
|-------|--------------------|---------------------|
| GET    | /properties        | List all properties   |
| GET    | /blogs            | List blog posts       |
| POST   | /contact          | Send contact message   |

---

## 🎯 Typeform Integration

This project uses **Typeform** to handle contact forms.

To integrate Typeform:

1. Go to [Typeform](https://www.typeform.com).
2. Create a form.
3. Copy your Typeform ID.
4. Replace the `TYPEFORM_ID` in your environment variables.

---

## 🔐 Security

- Data validation on all API endpoints  
- JWT authentication  
- HTTPS configuration  

---

## 🧑‍💻 Contributing

Contributions are welcome!  
To contribute, please fork the repository and submit a pull request.

---

## 📄 License

This project is licensed under the **MIT License**.

---

## 💬 Contact

For inquiries, please contact:  
**Yucatán Homes**  
Email: info@yucatanhomes.com  
Website: [yucatanhomes.com](https://yucatanhomes.com)

---

## 🎯 Roadmap

- [ ] Google Maps Integration  
- [ ] Multi-language Support (English & Spanish)  
- [ ] Wishlist Functionality  
- [ ] CRM System for Property Management  

---

## 🌐 Links

- [Live Demo](https://yucatan-homes.netlify.app)  
- [API Docs](https://yucatan-homes-backend.herokuapp.com)  
- [Typeform](https://www.typeform.com)  
- [Strapi CMS](https://strapi.io)  
- [Netlify](https://netlify.com)  
- [Heroku](https://heroku.com)

---

---

### 🔥 Developed with 💙 by ChatGPT, prompted by Óscar del Olmo  

---

Would you like me to **auto-generate this README file** and **push it directly to your GitHub repository**? 📌
