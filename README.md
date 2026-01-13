# WashingPressurePro

A professional washing pressure business website built with React, TypeScript, and Node.js.

## 🚀 Features

- **Modern Frontend**: Built with React and TypeScript
- **Responsive Design**: Mobile-friendly interface
- **RESTful API**: Node.js backend with Express
- **Contact Form**: Client inquiry submission system
- **Service Listings**: Dynamic service display
- **Professional UI**: Clean and modern design

## 📁 Project Structure

```
WashingPressurePro/
├── frontend/          # React + TypeScript frontend
│   ├── src/
│   │   ├── components/   # React components
│   │   ├── App.tsx       # Main app component
│   │   └── index.tsx     # Entry point
│   └── package.json
├── backend/           # Node.js + TypeScript backend
│   ├── src/
│   │   └── server.ts    # Express server
│   ├── tsconfig.json
│   └── package.json
└── README.md
```

## 🛠️ Tech Stack

### Frontend
- React 18
- TypeScript
- CSS3 (Custom styling)

### Backend
- Node.js
- Express.js
- TypeScript
- CORS
- dotenv

## 📋 Prerequisites

- Node.js (v14 or higher)
- npm or yarn

## 🚀 Getting Started

### Installation

1. Clone the repository:
```bash
git clone https://github.com/GabrielSilvaxD/WashingPressurePro.git
cd WashingPressurePro
```

2. Install frontend dependencies:
```bash
cd frontend
npm install
```

3. Install backend dependencies:
```bash
cd ../backend
npm install
```

### Running the Application

#### Start the Backend Server

```bash
cd backend
npm run dev
```

The backend server will run on `http://localhost:5000`

#### Start the Frontend Development Server

Open a new terminal:

```bash
cd frontend
npm start
```

The frontend will run on `http://localhost:3000`

### Building for Production

#### Build Frontend
```bash
cd frontend
npm run build
```

#### Build Backend
```bash
cd backend
npm run build
```

#### Start Production Server
```bash
cd backend
npm start
```

## 📱 Features Overview

### Home Page
- Eye-catching hero section with call-to-action
- Professional branding
- Key features highlight

### Services Section
- Dynamic service listings fetched from API
- Detailed service descriptions
- Pricing information

### About Section
- Company information
- Statistics and achievements
- Trust indicators

### Contact Form
- Easy-to-use contact form
- Service selection dropdown
- Real-time form validation
- API integration for submissions

## 🔌 API Endpoints

### GET `/api/health`
Health check endpoint

### GET `/api/services`
Retrieve all available services

### POST `/api/contact`
Submit contact form
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "(555) 123-4567",
  "service": "house",
  "message": "I need a quote"
}
```

## 🎨 Customization

### Styling
- Component-specific CSS files in `frontend/src/components/`
- Global styles in `frontend/src/index.css` and `frontend/src/App.css`

### Backend Configuration
- Environment variables in `backend/.env`
- Port configuration: `PORT=5000` (default)

## 📝 Development with VS Code

This project is optimized for use with Visual Studio Code and Claude AI assistant.

Recommended VS Code extensions:
- ESLint
- Prettier
- TypeScript and JavaScript Language Features

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is licensed under the ISC License.

## 📞 Contact

For any inquiries, please contact us through the website contact form or email us at info@washingpressurepro.com

---

Built with ❤️ by Gabriel Silva

