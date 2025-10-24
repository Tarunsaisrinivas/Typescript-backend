# 🚀 Node.js + TypeScript Backend Setup Guide

This repository provides a step-by-step setup for building a **backend using Node.js and TypeScript**.  
Follow the instructions below to configure, compile, and run your project with ease.

---

## 🧰 Prerequisites
Make sure you have the following installed on your system:
- [Node.js](https://nodejs.org/) (v16 or later)
- npm (comes with Node.js)

---

## ⚙️ Setup Steps

### **Step 1:** Initialize a new Node.js project
```bash
npm init -y
```
### **Step 2:** Install TypeScript and type definitions
```bash
npm install -D typescript @types/node @types/express
```
### **Step 3:** Initialize TypeScript configuration
```bash
npx tsc --init
```
### **Step 4:**(Optional) Run TypeScript directly without compiling
```bash
"start": "nodemon --exec ts-node index.ts"
```
### **Step 5:** Add build and dev scripts
- Update your package.json scripts section as follows:
```bash
"scripts": {
  "build": "tsc",
  "start": "node dist/index.js",
  "dev": "nodemon src/index.ts"
}
```

### **Step 6:** Install essential backend dependencies
```bash
npm install express dotenv cors mongoose
```
### **Step 7:** Fix common TypeScript configuration issues
- If any errors occur while running the code, update your tsconfig.json as below:
```bash
{
  "compilerOptions": {
    "target": "es2017",
    "module": "commonjs",
    "esModuleInterop": true,
    "allowSyntheticDefaultImports": true,
    "skipLibCheck": true
  },
  "include": ["src"],
  "exclude": ["node_modules"]
}

```
### **Step 8:** Create the project structure
- Inside your root folder, create a src folder and an index.ts file.
```bash
src/
 └── index.ts
```
### **Step 9:** Write your first Express server
- Add the following code to src/index.ts:
```ts
import express from "express";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("Server is running!");
});

app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
```
### **Step 10:** Run in development mode
```bash
npm run dev
```

### **Step 11:** Compile TypeScript code
```bash
npm run build
```

### **Step 12:** Run compiled JavaScript code
```bash
npm start
```

