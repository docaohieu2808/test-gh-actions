// The smallest service that exercises the reusable pipeline: one pure function and an HTTP server.
const http = require("node:http");

function greet(name) {
  if (typeof name !== "string" || name.trim() === "") throw new TypeError("name must be a non-empty string");
  return `Hello, ${name.trim()}!`;
}

if (require.main === module) {
  const port = Number(process.env.PORT || 3000);
  http.createServer((req, res) => res.end(`${greet("CI")}\n`)).listen(port);
}

module.exports = { greet };
