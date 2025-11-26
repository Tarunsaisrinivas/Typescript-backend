const serverless = require("serverless-http");

const app = require("../dist/index.js").default;

module.exports = serverless(app);
