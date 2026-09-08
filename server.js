const express = require('express');
const cors = require('cors');
const path = require('path'); // Path module add kiya HTML file ko connect karne ke liye

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// JAADU YAHAN HAI: Ye line aapke folder ki index.html aur logo.png ko website par dikhayegi
app.use(express.static(__dirname));

// API Route - Yahan se website videos ka data legi
app.get('/api/videos', (req, res) => {
    const videos = [
        { id: "iPJ1o082OEc", title: "Software Engineering Part 1 | 90% BCA Students Don't Know These Basics!" },
        { id: "nUfcDHmzwoQ", title: "🎯 Your complete BCA Roadmap in one video! 🚀" },
        { id: "6p_wYmhbg7M", title: "Python Programming Part 2 🔥 | Full Syllabus Discussion" },
        { id: "iiSOTITnxww", title: "Python Programming Part 1 | Complete Unit 1 🔥" }
    ];
    res.json(videos);
});

// Server Start karna
const PORT = 5000;
app.listen(PORT, () => {
    console.log(`🚀 BCA Green Mind Server is running perfectly!`);
    console.log(`🌐 Apni website dekhne ke liye click karein: http://localhost:${PORT}`);
});