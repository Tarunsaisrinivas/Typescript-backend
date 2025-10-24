Step 1 : npm init -y
Step 2 : npm install -D typescript @types/node @types/express
Step 3 : npx tsc --init 
Step 4 :  "start": "nodemon --exec ts-node index.ts" //optional to run directly without compiling the code
Step 5 : 
 "build": "tsc",
    "start": "node dist/index.js",
    "dev": "nodemon  src/index.ts"
Step 6 : npm install express dotenv cors

Step 7 : if any error occurs in runnig file then need to modify the tsconfig.json file as below
  "compilerOptions": {
    ...
    "module": "commonjs",
    "target": "es2017",
    ...
    "esModuleInterop": true,
    "allowSyntheticDefaultImports": true,
    ...
    "skipLibCheck": true
  },
  "include": ["src"],
  "exclude": ["node_modules"]

Step 8 : Now create src folder and index.ts file inside it and write your code
Step 9 : To run the code in dev mode use : npm run dev
Step 10 : To compile the code use : npm run build
Step 11 : To run the compiled code use : npm start
