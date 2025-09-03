# How to Install ReactJS on Windows: Easy Step-by-Step Guide

ReactJS is one of the top JavaScript libraries for building interactive user interfaces used by many popular websites and apps. If you're using a Windows computer and want to start learning or developing with React, this guide will help you set everything up smoothly.

---

## What You Need Before Starting

Before installing React, make sure you have:

- **Administrator Access:** You need permission to install programs on your computer.
- **Internet Connection:** Required to download necessary software and React packages.
- **System Requirements:** 
  - At least 4 GB of RAM (8 GB recommended for better performance).
  - Minimum 10 GB free disk space.
  - Running Windows 10 or Windows 11 for best compatibility.

---

## Step 1: Install Node.js and npm

React depends on Node.js and its package manager, npm, to manage its tools and libraries.

1. Go to the [official Node.js website](https://nodejs.org/).
2. Download the **LTS (Long Term Support)** version for Windows.
3. Run the downloaded installer file and follow the instructions.
4. Use the default settings to complete the installation.

---

## Step 2: Verify Node.js and npm Installation

To check if Node.js and npm installed correctly:

- Open **Command Prompt** or **PowerShell**.
- Type `node -v` and press Enter — you should see the Node.js version.
- Type `npm -v` and press Enter — you should see the npm version.

If both show version numbers, you’re good to go!

---

## Step 3: Create Your First React Application

There are two popular ways to create a React app: using **Vite** or the traditional **Create React App (CRA)**. We recommend **Vite** for faster performance.

### Using Vite (Recommended)

1. Run this command to create a new React project (replace `my-app` with your project name in lowercase):


2. Go inside your project folder:


3. Install the required packages: `npm install`


4. Start the development server: `npm run dev`


5. Open your browser and visit `http://localhost:5173` to see your React app running.

---

### Using Create React App (CRA) (Older Method)

1. Run this command (replace `myapp` with your app name in lowercase): `npx create-react-app myapp`


2. After the setup completes, navigate to your project folder:


3. Start the development server: `npm start`


4. Your browser should open automatically showing the default React page.


---

## Step 4: Organize Your Projects

You can create a dedicated folder to keep your React projects organized:

1. Open Command Prompt or PowerShell.

2. Create a new folder (replace `projects` with your preferred name):


3. Move inside the folder:


4. Now create or move your React apps inside this folder.

---

## Step 5: Open Your React Project in a Code Editor

Open your React project folder in your favorite code editor like **Visual Studio Code**. You can open the terminal inside the editor and run commands such as `npm run dev` (Vite) or `npm start` (CRA) to launch your app.

---

## Congratulations!

You have successfully set up ReactJS on your Windows machine. Now you can start building amazing web apps using React’s powerful features like components, state, and props. Happy coding! 🚀

---

If you run into any issues or want to learn more, the official React documentation is a great place to explore: [https://reactjs.org/docs/getting-started.html](https://reactjs.org/docs/getting-started.html)
