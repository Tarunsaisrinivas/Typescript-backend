# 🚀 Node.js + TypeScript Backend Setup Guide

This repository provides a step-by-step setup for building a **backend using Node.js and TypeScript**.  
Follow the instructions below to configure, compile, and run your project with ease.

---

## 🧰 Prerequisites

Make sure you have the following installed on your system:

- [Node.js](https://nodejs.org/) (v16 or later)
- npm (comes with Node.js)

---
## Status Codes 

| **Code** | **Category**      | **Meaning**                   | **Description**                                      |
| -------- | ----------------- | ----------------------------- | ---------------------------------------------------- |
| **100**  | 1xx Informational | Continue                      | Request headers received; client should send body.   |
| **101**  | 1xx Informational | Switching Protocols           | Server agrees to switch protocols (e.g., WebSocket). |
| **102**  | 1xx Informational | Processing                    | Request received and being processed (WebDAV).       |
| **103**  | 1xx Informational | Early Hints                   | Used to preload resources before final response.     |
| **200**  | 2xx Success       | OK                            | Request succeeded (common success code).             |
| **201**  | 2xx Success       | Created                       | Resource created successfully (POST).                |
| **202**  | 2xx Success       | Accepted                      | Request accepted for processing, not completed yet.  |
| **203**  | 2xx Success       | Non-Authoritative Information | Response from a third-party source.                  |
| **204**  | 2xx Success       | No Content                    | Success but no response body (DELETE).               |
| **205**  | 2xx Success       | Reset Content                 | Tells client to reset the document view.             |
| **206**  | 2xx Success       | Partial Content               | Partial data due to range request (file downloads).  |
| **207**  | 2xx Success       | Multi-Status                  | Multiple status results (WebDAV).                    |
| **300**  | 3xx Redirection   | Multiple Choices              | Several options available for the resource.          |
| **301**  | 3xx Redirection   | Moved Permanently             | Resource permanently moved to a new URL.             |
| **302**  | 3xx Redirection   | Found                         | Temporarily moved to a new URL.                      |
| **303**  | 3xx Redirection   | See Other                     | Redirect to another resource (e.g., after POST).     |
| **304**  | 3xx Redirection   | Not Modified                  | Resource not changed since last request (cache).     |
| **307**  | 3xx Redirection   | Temporary Redirect            | Temporary redirect; method not changed.              |
| **308**  | 3xx Redirection   | Permanent Redirect            | Permanent redirect; method not changed.              |
| **400**  | 4xx Client Error  | Bad Request                   | Invalid syntax or missing parameters.                |
| **401**  | 4xx Client Error  | Unauthorized                  | Authentication required or invalid credentials.      |
| **402**  | 4xx Client Error  | Payment Required              | Reserved for future use.                             |
| **403**  | 4xx Client Error  | Forbidden                     | Authenticated but not authorized.                    |
| **404**  | 4xx Client Error  | Not Found                     | Resource doesn’t exist.                              |
| **405**  | 4xx Client Error  | Method Not Allowed            | HTTP method not supported.                           |
| **406**  | 4xx Client Error  | Not Acceptable                | Response format not supported.                       |
| **407**  | 4xx Client Error  | Proxy Authentication Required | Need authentication via proxy.                       |
| **408**  | 4xx Client Error  | Request Timeout               | Client took too long to send request.                |
| **409**  | 4xx Client Error  | Conflict                      | Request conflicts with current resource state.       |
| **410**  | 4xx Client Error  | Gone                          | Resource permanently removed.                        |
| **411**  | 4xx Client Error  | Length Required               | Missing `Content-Length` header.                     |
| **412**  | 4xx Client Error  | Precondition Failed           | Preconditions in headers not met.                    |
| **413**  | 4xx Client Error  | Payload Too Large             | Request body too large.                              |
| **414**  | 4xx Client Error  | URI Too Long                  | URL too long for server to handle.                   |
| **415**  | 4xx Client Error  | Unsupported Media Type        | Request format not supported.                        |
| **416**  | 4xx Client Error  | Range Not Satisfiable         | Requested range invalid.                             |
| **417**  | 4xx Client Error  | Expectation Failed            | `Expect` header conditions failed.                   |
| **418**  | 4xx Client Error  | I’m a Teapot                  | Joke code from RFC 2324 ☕.                          |
| **422**  | 4xx Client Error  | Unprocessable Entity          | Well-formed request but semantic error (validation). |
| **429**  | 4xx Client Error  | Too Many Requests             | Rate limit exceeded.                                 |
| **500**  | 5xx Server Error  | Internal Server Error         | Generic server failure.                              |
| **501**  | 5xx Server Error  | Not Implemented               | Server doesn’t support the method.                   |
| **502**  | 5xx Server Error  | Bad Gateway                   | Invalid response from upstream server.               |
| **503**  | 5xx Server Error  | Service Unavailable           | Server down or overloaded.                           |
| **504**  | 5xx Server Error  | Gateway Timeout               | Upstream server didn’t respond in time.              |
| **505**  | 5xx Server Error  | HTTP Version Not Supported    | Unsupported HTTP version.                            |
| **507**  | 5xx Server Error  | Insufficient Storage          | Server out of storage.                               |
| **508**  | 5xx Server Error  | Loop Detected                 | Infinite loop detected in processing.                |

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
