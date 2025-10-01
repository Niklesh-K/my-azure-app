# My Azure App 🚀

A simple Node.js + Express application deployed to **Azure Web App** using **GitHub Actions (CI/CD)**.

## Features
- `/` → returns a greeting message (from GREETING env var or default)
- `/status` → returns `{ "status": "ok" }`
- `/time` → returns `{ "time": "2025-10-01T..." }`
- `/health` → returns `{ "status":"healthy","uptime": <seconds> }`

## Local Setup
```bash
# clone repo
git clone https://github.com/Niklesh-K/my-azure-app.git
cd my-azure-app

# install dependencies
npm install

# run tests
npm test

# start app locally
npm start
