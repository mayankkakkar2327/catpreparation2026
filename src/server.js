const http = require("http");
const fs = require("fs");
const path = require("path");

const root = path.join(__dirname, "..", "site");
const port = Number(process.env.PORT || 4173);
const types = { ".html": "text/html; charset=utf-8", ".css": "text/css", ".js": "application/javascript", ".xml": "application/xml", ".txt": "text/plain" };

http.createServer((req, res) => {
  const requestUrl = new URL(req.url, `http://localhost:${port}`);
  let filePath = path.join(root, decodeURIComponent(requestUrl.pathname));
  if (!filePath.startsWith(root)) return res.writeHead(403).end("Forbidden");
  if (fs.existsSync(filePath) && fs.statSync(filePath).isDirectory()) filePath = path.join(filePath, "index.html");
  if (!fs.existsSync(filePath)) filePath = path.join(root, "index.html");
  res.writeHead(200, { "Content-Type": types[path.extname(filePath)] || "application/octet-stream" });
  fs.createReadStream(filePath).pipe(res);
}).listen(port, "127.0.0.1", () => console.log(`Preview running at http://localhost:${port}`));
