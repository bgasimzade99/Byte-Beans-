# Byte Beans
Zero to Hero Coffeeshop Web App

## Tech Stack
React, JavaScript, SQL (SQLite), Tailwind CSS

## Structure
```
Byte-Beans-/
├── backend/      # Express API, SQLite
├── frontend/     # React, Vite, Tailwind
├── package.json  # Root scripts
└── README.md
```

## Setup
```bash
# Install all dependencies
npm install
cd backend && npm install && cd ..
cd frontend && npm install && cd ..

# Run both (backend + frontend)
npm run dev
```

## Commands
- `npm run dev`      - Run backend + frontend together
- `npm run backend`  - Run API (port 5000)
- `npm run frontend` - Run React app (port 5173)

---

**Not:** Eski `client` ve `server` klasörleri varsa, IDE’yi kapatıp manuel silebilirsin. `frontend` ve `backend` artık kullanılıyor.
