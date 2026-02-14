# Live Cricket Tracker

A real-time cricket match tracker with live score updates.

## Quick Deploy to Vercel

### Option 1: Deploy via Vercel Website (Easiest - No Code Editor Needed!)

1. **Download this project**
   - Download all the files in this folder to your computer
   - Keep them in a folder called `cricket-live-app`

2. **Sign up for Vercel**
   - Go to https://vercel.com
   - Click "Sign Up" 
   - Use your GitHub, GitLab, or email account (all free)

3. **Deploy**
   - Once logged in, click "Add New..." → "Project"
   - Click "Browse" and select your `cricket-live-app` folder
   - OR drag and drop the entire folder onto the page
   - Click "Deploy"
   - Wait 30-60 seconds
   - You'll get a live URL like `cricket-live-app-xyz.vercel.app`

4. **Done!**
   - Open that URL on your iPhone
   - The app will auto-update every 15 seconds
   - Bookmark it to your home screen for easy access

### Option 2: Deploy via GitHub (Automatic Updates)

1. Create a GitHub account at https://github.com
2. Create a new repository called `cricket-live-app`
3. Upload these files to the repository
4. Go to https://vercel.com and click "Import Project"
5. Connect your GitHub account
6. Select the `cricket-live-app` repository
7. Click "Deploy"

Now whenever you update the code on GitHub, Vercel will automatically redeploy!

## Project Structure

```
cricket-live-app/
├── api/
│   └── cricket-data.js       # Backend API that fetches cricket data
├── public/
│   └── index.html            # Frontend React app
├── vercel.json               # Vercel configuration
├── package.json              # Node.js dependencies
└── README.md                 # This file
```

## Features

- ✅ Live score updates every 15 seconds
- ✅ Ball-by-ball tracker for each batsman
- ✅ Current bowlers with statistics
- ✅ Partnership information
- ✅ Responsive design for mobile

## Notes

- The API currently returns mock data
- To connect to real cricket API, update `api/cricket-data.js`
- Add your API key as an environment variable in Vercel settings

## Need Help?

Ask Claude to help you with any step!
