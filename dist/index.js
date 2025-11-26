"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = require("dotenv");
const db_1 = __importDefault(require("./utils/db"));
const bookRoute_1 = __importDefault(require("./routes/bookRoute"));
const helmet_1 = __importDefault(require("helmet"));
const authRoute_1 = __importDefault(require("./routes/authRoute"));
const swagger_1 = require("./swagger");
(0, dotenv_1.config)();
const app = (0, express_1.default)();
const port = process.env.PORT || 3000;
app.use(express_1.default.json());
app.use((0, helmet_1.default)());
app.get("/", (req, res) => {
    res.send("Server is running smoothly 🚀");
});
app.use("/api/books", bookRoute_1.default);
app.use("/api/auth", authRoute_1.default);
(0, swagger_1.swaggerDocs)(app);
app.listen(port, () => {
    (0, db_1.default)();
    console.log(`✅ Server is running at http://localhost:${port}`);
    console.log(`✅ Swagger documentation is running at http://localhost:${port}/api-docs`);
});
//# sourceMappingURL=index.js.map