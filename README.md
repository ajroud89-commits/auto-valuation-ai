# 🚗 AutoRadar - Auto Valuation AI Platform

Een Nederlandse AI-gestuurde platform voor auto-waardering. Plak een Marktplaats of AutoScout24 link en ontvang een volledige analyse met scores.

## 🚀 Features

- **AI Foto-analyse**: Detecteert schade, roest, slijtage
- **Prijsvergelijking**: Vergelijkt met soortgelijke auto's
- **Historie-check**: APK, eigenaren, tellerstand
- **Technische specs**: 0-100, verbruik, vermogen
- **AI-Score**: Gewogen score van 0-100
- **Koopadvies**: Concrete aanbevelingen

## 📋 Project Structuur

```
auto-valuation-ai/
├── app/                    # Next.js app directory
│   ├── api/               # API endpoints
│   ├── page.tsx           # Homepage
│   └── result/            # Result page
├── components/            # React components
├── lib/                   # Utility functions
├── backend/               # Python backend (AI processing)
│   ├── app.py            # Flask app
│   ├── requirements.txt   # Python dependencies
│   └── services/         # AI services
└── docs/                 # Documentation
```

## 🛠️ Installation

### Frontend (Next.js)

```bash
npm install
npm run dev
```

Gaat naar: http://localhost:3000

### Backend (Python/Flask)

```bash
cd backend
python -m venv venv
source venv/bin/activate  # Windows: venv\\Scripts\\activate
pip install -r requirements.txt
python app.py
```

Gaat naar: http://localhost:5000

## 📝 Todo

- [ ] Backend API's opzetten (Flask/FastAPI)
- [ ] Marktplaats scraper implementeren
- [ ] AutoScout24 scraper implementeren
- [ ] OpenAI Vision integration (foto-analyse)
- [ ] RDW API integration (NL auto-info)
- [ ] Database schema (PostgreSQL)
- [ ] Authentication & Subscription system
- [ ] AI scoring algorithm

## 📚 Documentation

Zie `/docs` folder voor gedetailleerde setup guides.

## 🔐 Environment Variables

Cre eer een `.env.local` bestand:

```
NEXT_PUBLIC_API_URL=http://localhost:5000
OPENAI_API_KEY=your_key_here
MARKTPLAATS_API_KEY=your_key_here
```

## 🏗️ Architecture

**Frontend** (Next.js): User interface, form handling
**Backend** (Python): Web scraping, AI analysis, data processing
**Database**: User data, analysis cache, subscription info

## 🚀 Deployment

- Frontend → Vercel
- Backend → Railway/Render
- Database → PostgreSQL (Railway/AWS)

## 💬 Support

Need help? Check the `/docs` folder or open an issue.
