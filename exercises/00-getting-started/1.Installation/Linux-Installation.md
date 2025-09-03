# 🚀 ReactJS Installation Guide for Linux

Set up a ReactJS development environment on any Linux distribution (Ubuntu, Fedora, Debian, etc.) with this step-by-step guide. You'll use essential tools like **Node.js**, **npm**, and modern build tools like **Vite** to get started.

> ✅ This guide is beginner-friendly and doesn't assume any prior React setup!

---

## 📋 Requirements

Before you begin, ensure your system has the following:

- A Linux-based OS (Ubuntu, Debian, Fedora, etc.)
- Terminal access
- Internet connection

### 🛠 Required Tools

- **Node.js** – JavaScript runtime environment
- **npm** – Node package manager (comes with Node.js)

---

## 🔧 Step-by-Step Installation

### 🧱 Step 1: Install Node.js

1. **Update your package list**

```bash
sudo apt update
```

2. **Install Node.js**
```bash
sudo apt install nodejs 
```

3. **Verify Node.js installation**
```bash
node -v
```

### 📦 Step 2: Install npm (if not included)
Most Node.js installs include npm. If not, install it manually:
```bash
sudo apt install npm
```

Verify installation:
```bash
npm -v
```

### ⚙️ Step 3: Create a React App
You can use either Vite (recommended) or Create React App (legacy).

⚡ Using Vite (Modern and Fast)

1. **Create a new project**
```bash
npm create vite@latest my-app -- --template react
```
2. **Navigate into your project**
```bash
cd my-app
```

3. **Install dependencies**
```bash
npm install
```

4. **Start the development server**
```bash
npm run dev 
```
📎 Open your browser and go to: [http://localhost:5173](http://localhost:5173)

## 💡 Alternate Methods

### 👉  Using npx (without global install)
You can also create a React project using `npx` :
```bash
npx create-react-app my-app
cd my-app
npm start
```

### 👉 Using Yarn (Alternative to npm)

1. **Install Yarn globally:**
```bash
npm install --global yarn
```
2. **Create a new app:**
```bash
yarn create react-app my-app
```

3. **Start the app:**
```bash
cd my-app
yarn start
```

## 🛠️ Troubleshooting Tips
### ❌ node or npm not found?

Make sure Node.js and npm are properly installed. Try reinstalling:

```bash
sudo apt install nodejs npm
```

### ⚠️ Missing dependencies?
Run this in your project folder:

```bash
npm install
```

or,if using Yarn:
```bash
yarn install
```
