# 🎵 Spotify Top Tracks Viewer

A web app that connects to your Spotify account and displays your **Top 10 most-played tracks**, including album art and 30-second preview clips.

This project was built using **HTML, JavaScript, and the Spotify Web API**, and is deployed using **GitHub Pages**.

---

## 🌐 Live Demo

🔗 [Click here to try it!](https://golboojamshidi.github.io/spotify-top-tracks/)

---

## 🔐 How It Works

- You log in using your **Spotify account**
- The app uses **OAuth 2.0 Implicit Grant Flow** to authenticate you
- It fetches your **top tracks** from Spotify's `/me/top/tracks` endpoint
- Your data is rendered directly in the browser — no backend or database

---

## 🚧 Known Limitation

⚠️ Due to Spotify’s **Development Mode restriction**, only test users can log in and use the app right now.  
I can onboard up to **25 users**.

> If you'd like to try it out, send me your **Spotify account email** via LinkedIn or GitHub and I’ll add you as a test user!

---

## 💻 Technologies Used

- HTML + CSS
- JavaScript
- Spotify Web API (OAuth 2.0)
- GitHub Pages (deployment)
- Git (version control)

---

## 📁 File Structure

spotify-top-tracks/
├── index.html # Main app UI
├── callback.html # Handles Spotify token redirect
├── script.js # Authentication + fetch logic
├── style.css # Simple layout styling
└── README.md # You're here :)

---

## 🙋‍♀️ About the Developer

Built with curiosity, determination, and a few late-night bugs by **Golboo Jamshidi**.  
Feel free to connect on [LinkedIn](https://www.linkedin.com/in/golboo-jamshidi/) or check out more of my work.
