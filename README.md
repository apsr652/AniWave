
# AniWave  

AniWave is an interactive **Anime Gallery** built with **React + Vite + Framer Motion**.  
It lets you explore popular anime titles with **animated GIF previews, glowing effects, and background sounds** that play when you interact with each title.  

---

## ✨ Features  

- 🎬 **Multi-GIF Previews** → Each anime shows up to 5 unique animated scenes.  
- 🎵 **Background Sounds** → Different soundtracks for each anime (plays instantly on hover/tap, auto-stops after 10s).  
- 🌟 **Animated Titles & Headings** → Neon glow, scaling, and smooth framer-motion animations.  
- 🖥️ **Desktop-First Experience** → Designed for desktop hover interactions. *(Mobile support coming soon 🚀)*  
- 🎨 **Customizable Effects** → Easily adjust text color, glow, volume, GIF positions, and more.  

---

## 📂 Project Structure  

```bash
src/
├── components/         # Reusable UI components
│   ├── AnimePreview.tsx
│   ├── AnimeTitleText.tsx
│
├── hooks/              # Custom React hooks
│   ├── useMobileWarning.ts
│   ├── useMousePosition.ts
│
├── lib/                # Static data & constants
│   ├── constant.ts
│   ├── data.ts
│   ├── types.ts
│
├── App.tsx             # Main app component
├── main.tsx            # Entry point
├── index.css           # Global styles

🚀 Getting Started
1️⃣ Clone the repo
git clone https://github.com/your-username/aniwave.git
cd aniwave

2️⃣ Install dependencies
npm install

3️⃣ Run the dev server
npm run dev


Visit 👉 http://localhost:5173 (or your configured port).

🛠️ Tech Stack

⚡ Vite – Fast dev environment

⚛️ React – UI framework

🎨 TailwindCSS – Styling

🎥 Framer Motion – Animations

🔊 HTML5 Audio – Sound effects

🎵 Anime & Sounds

Each anime entry includes:

GIF scenes (up to 5)

Unique background audio (plays on hover/tap, stops after 10s)

Example:

{ id: "bleach", displayName: "Bleach", sound: "/bleach.mp3" }

📌 Roadmap

 📱 Mobile-friendly interactions (tap instead of hover)

 🔇 Mute/Unmute global sound control

 🎚️ Individual volume settings

 🎨 More glow + text animation styles

 📂 Add more anime collections

🙌 Credits

Original idea inspired by Miraya’s Anime Gallery Project.

Anime GIFs and sounds belong to their respective creators.

📜 License

This project is for educational and personal use only.
All anime assets (GIFs, sounds) are used under fair use for fans.
