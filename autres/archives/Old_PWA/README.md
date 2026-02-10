# Skydiving Jump Log PWA

A Progressive Web App prototype for managing skydiving jump logs.

## Setup Instructions

1. **Install Dependencies**
   ```bash
   cd PWA
   npm install
   ```

2. **Run the Development Server**
   ```bash
   npm start
   ```

   The app will open in your browser at `http://localhost:3000`

3. **For Mobile Testing with ngrok**

   After starting the development server, in a new terminal:
   ```bash
   ngrok http 3000
   ```

   Use the provided ngrok URL to access the app on your iPhone.

## Project Structure

```
PWA/
├── public/
│   ├── index.html
│   └── manifest.json
├── src/
│   ├── components/
│   │   ├── LoginScreen.js
│   │   └── SignupScreen.js
│   ├── styles/
│   │   ├── App.css
│   │   ├── index.css
│   │   ├── LoginScreen.css
│   │   └── SignupScreen.css
│   ├── App.js
│   └── index.js
└── package.json
```

## Features

- ✅ Login Screen (Connexion)
- ✅ Signup Screen (Inscription)
- ✅ BEM CSS Convention
- ✅ Responsive Design
- ✅ Smooth Animations

## Technologies

- ReactJS (without Vite)
- Vanilla CSS
- BEM Naming Convention
