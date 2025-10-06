# News App - Full Stack React & Node.js

A modern news application built with React frontend and Node.js backend, featuring user authentication, news browsing, bookmarking, and personalized preferences.

## 🚀 Features

- **User Authentication** - Register/Login with JWT tokens
- **News Browsing** - Browse news by categories with pagination
- **Search Functionality** - Search news articles with history tracking
- **Bookmarks** - Save and manage favorite articles
- **Personalized Preferences** - Set favorite news categories
- **Subscriptions** - Subscribe to specific news topics
- **Responsive Design** - Works on desktop and mobile

## 🛠️ Tech Stack

**Frontend:**
- React 19
- Vite
- Bootstrap 5
- JavaScript ES6+

**Backend:**
- Node.js & Express
- MongoDB with Mongoose
- JWT Authentication
- bcryptjs for password hashing
- CORS enabled

## 📁 Project Structure

```
news-app/
├── backend/                 # Node.js backend
│   ├── config/             # Database configuration
│   ├── middleware/         # Authentication middleware
│   ├── models/            # MongoDB models
│   ├── routes/            # API routes
│   ├── .env.example       # Environment variables template
│   ├── package.json       # Backend dependencies
│   ├── railway.toml       # Railway deployment config
│   └── server.js          # Express server
├── frontend/              # React frontend
│   ├── public/           # Static assets
│   ├── src/              # React components and logic
│   ├── .env.example      # Frontend environment template
│   ├── package.json      # Frontend dependencies
│   ├── railway.toml      # Railway deployment config
│   └── vite.config.js    # Vite configuration
└── DEPLOY_RAILWAY.md     # Railway deployment guide
```

## 🌐 Live Demo

**Frontend:** [Your Railway Frontend URL]
**Backend API:** [Your Railway Backend URL]/api

## 🚀 Quick Deploy to Railway

1. **Fork/Clone this repository**
2. **Push to your GitHub**
3. **Deploy to Railway:**
   - Go to [railway.app](https://railway.app)
   - Create new project from GitHub repo
   - Add backend service (root: `backend`)
   - Add frontend service (root: `frontend`)
   - Add MongoDB database
   - Set environment variables (see below)

## ⚙️ Environment Variables

**Backend (.env):**
```
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
FRONTEND_URL=your_frontend_railway_url
PORT=5000
NODE_ENV=production
```

**Frontend (.env):**
```
VITE_API_URL=your_backend_railway_url/api
```

## 🛠️ Local Development

**Backend Setup:**
```bash
cd backend
npm install
cp .env.example .env
# Edit .env with your values
npm start
```

**Frontend Setup:**
```bash
cd frontend
npm install
cp .env.example .env
# Edit .env with your backend URL
npm run dev
```

## 📝 API Endpoints

- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - User login
- `GET /api/news` - Fetch news articles
- `GET /api/bookmarks` - Get user bookmarks
- `POST /api/bookmarks` - Save bookmark
- `GET /api/preferences` - Get user preferences
- `POST /api/preferences` - Save preferences
- `GET /api/subscriptions` - Get subscriptions
- `POST /api/subscriptions` - Add subscription
- `GET /api/search-history` - Get search history
- `POST /api/search-history/save` - Save search query

## 🤝 Contributing

1. Fork the repository
2. Create feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

Built with ❤️ using React and Node.js
