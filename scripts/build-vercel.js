const fs = require("fs");
const path = require("path");
const { execFileSync } = require("child_process");

const root = path.join(__dirname, "..");

function run(command, args) {
  execFileSync(command, args, { cwd: root, stdio: "inherit" });
}

run("npm", ["run", "build"]);

const verificationFile = path.join(root, "googlebf3838439bb6403b.html");
if (fs.existsSync(verificationFile)) {
  fs.copyFileSync(verificationFile, path.join(root, "site", "googlebf3838439bb6403b.html"));
}

[
  "add-favicon.js",
  "enhance-ui.js",
  "enhance-ui-local-logos.js",
  "fix-ui-spacing.js",
  "apply-approved-logo.js",
  "fix-official-link-labels.js",
].forEach((script) => run("node", [path.join("scripts", script)]));
