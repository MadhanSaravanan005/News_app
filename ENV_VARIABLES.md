# 🔐 Ready-to-Use Environment Variables for Railway

## 📋 Copy-Paste These Exact Values

### Backend Service Environment Variables
```
MONGO_URI=mongodb+srv://madhanmohan:Madhan9843@cluster0.ehd1ndc.mongodb.net/student-records?retryWrites=true&w=majority&appName=Cluster0
JWT_SECRET=ca35c51c4bf9fbdb1edeb02f961446a4f03240155cd23be6f5e66a86eb7cbc4618e5bdf3b44d77b67039bb2a9c38e6329e8253fd914d79dc1177124919081851
NODE_ENV=production
```

### Frontend Service Environment Variables
```
VITE_API_URL=https://[your-backend-service-url].railway.app/api
```

### Additional Backend Variable (after frontend deploys)
```
FRONTEND_URL=https://[your-frontend-service-url].railway.app
```

## 🚀 Deployment Steps

1. **Backend Service:**
   - Root Directory: `backend`
   - Add the backend environment variables above
   - Deploy

2. **Frontend Service:**
   - Root Directory: `frontend`
   - After backend deploys, get the backend URL
   - Add `VITE_API_URL` with your actual backend URL
   - Deploy

3. **Cross-Link Services:**
   - Add `FRONTEND_URL` to backend with your actual frontend URL

## ✅ What's Included

- ✅ **Secure JWT Secret:** 128-character cryptographically secure random string
- ✅ **MongoDB Connection:** Your Atlas connection string with `student-records` database
- ✅ **Production Config:** NODE_ENV set to production
- ✅ **CORS Ready:** Environment variables for cross-service communication

## 🔒 Security Notes

- JWT secret is cryptographically secure (64 bytes = 128 hex characters)
- MongoDB connection uses SSL/TLS encryption
- Environment variables are Railway-encrypted in transit and at rest
- No sensitive data is stored in your GitHub repository

Your app is ready to deploy! 🎉