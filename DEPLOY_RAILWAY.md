# Deploy News App to Railway

This guide walks you through deploying your full-stack News App (React frontend + Node.js backend) to Railway.

## Prerequisites

- Your code is pushed to GitHub
- Railway account (sign up at https://railway.app)
- MongoDB connection string (Railway provides one, or use MongoDB Atlas)

## Required Environment Variables

Your backend needs these environment variables:
- `MONGO_URI` - MongoDB connection string
- `JWT_SECRET` - Secret key for JWT tokens (generate a secure random string)
- `PORT` - (Optional, Railway sets this automatically)

## Deployment Steps

### Option 1: Railway Web UI (Recommended)

1. **Create Railway Project**
   - Go to https://railway.app and sign in
   - Click "New Project" → "Deploy from GitHub"
   - Connect your GitHub and select your `News_app` repository

2. **Deploy Backend Service**
   - Railway should detect your monorepo structure
   - If not, click "New Service" → "GitHub Repo"
   - Set **Root Directory**: `backend`
   - **Build Command**: (leave blank - npm install runs automatically)
   - **Start Command**: `npm start`
   - Deploy and wait for build to complete

3. **Deploy Frontend Service**
   - Click "New Service" → "GitHub Repo" (same repo)
   - Set **Root Directory**: `frontend`
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
   - Deploy and wait for build to complete

4. **Add MongoDB Database**
   - In your project dashboard, click "New" → "Database" → "Add MongoDB"
   - Railway will provision a MongoDB instance
   - Copy the connection string from the database service

5. **Configure Backend Environment Variables**
   - Click on your backend service
   - Go to "Variables" tab
   - Add these variables:
     ```
     MONGO_URI=<your-mongodb-connection-string>
     JWT_SECRET=<generate-a-secure-random-string>
     FRONTEND_URL=<your-frontend-railway-url>
     ```

6. **Configure Frontend Environment Variables**
   - Click on your frontend service  
   - Go to "Variables" tab
   - Add this variable:
     ```
     VITE_API_URL=<your-backend-railway-url>/api
     ```

7. **Test Deployment**
   - Visit your frontend URL (Railway provides this)
   - Try registering/logging in to test the full flow
   - Check service logs if anything fails

### Option 2: Railway CLI

1. **Install Railway CLI**
   ```powershell
   npm install -g @railway/cli
   ```

2. **Login and Initialize**
   ```powershell
   railway login
   cd m:\React\news-mag
   railway init
   ```

3. **Deploy Backend**
   ```powershell
   # From project root
   railway service create backend
   railway service connect backend
   railway up --service backend --path backend
   ```

4. **Deploy Frontend**
   ```powershell
   railway service create frontend
   railway service connect frontend
   railway up --service frontend --path frontend
   ```

5. **Add Database and Variables**
   ```powershell
   railway add mongodb
   railway variables set MONGO_URI="<connection-string>"
   railway variables set JWT_SECRET="<your-secret>"
   ```

## Post-Deployment

### Get Your URLs
- Frontend URL: Check Railway dashboard for your static site URL
- Backend URL: Check Railway dashboard for your backend service URL
- API endpoints will be: `<backend-url>/api/auth/login`, etc.

### Update CORS (Optional)
For production security, update `backend/server.js` CORS settings:
```javascript
app.use(
  cors({
    origin: process.env.FRONTEND_URL || "*", // Set this to your frontend Railway URL
    credentials: true,
  })
);
```

### Monitor Logs
- Check Railway service logs for any runtime errors
- Common issues: MongoDB connection, JWT_SECRET missing, port binding

## Troubleshooting

**Backend won't start:**
- Check logs for MongoDB connection errors
- Verify MONGO_URI and JWT_SECRET are set
- Ensure Railway can reach your MongoDB (check IP whitelist if using Atlas)

**Frontend can't reach backend:**
- Verify frontend is calling the correct backend URL
- Check CORS settings
- Verify backend service is running (check logs)

**Build failures:**
- Check Node.js version compatibility
- Verify package.json scripts
- Check for missing dependencies

## Environment Variables Reference

Create these in Railway backend service:
```
MONGO_URI=mongodb+srv://madhanmohan:Madhan9843@cluster0.ehd1ndc.mongodb.net/student-records?retryWrites=true&w=majority&appName=Cluster0
JWT_SECRET=ca35c51c4bf9fbdb1edeb02f961446a4f03240155cd23be6f5e66a86eb7cbc4618e5bdf3b44d77b67039bb2a9c38e6329e8253fd914d79dc1177124919081851
FRONTEND_URL=https://your-frontend-name.up.railway.app
NODE_ENV=production
```

Create these in Railway frontend service:
```
VITE_API_URL=https://your-backend-name.up.railway.app/api
```

## Success!

Once deployed, your app will be live at:
- Frontend: `https://your-app-name.up.railway.app`
- Backend API: `https://your-backend-name.up.railway.app/api`

Test the full flow: register → login → browse news → bookmark articles.