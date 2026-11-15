import React, { useState } from "react";
import {
  FaMusic,
  FaYoutube,
  FaBookOpen,
  FaGamepad,
  FaBrain,
  FaCloudRain,
  FaPrayingHands,
  FaRobot,
  FaUsers,
  FaBroadcastTower
} from "react-icons/fa";

import "./Entertainment.css";

function Entertainment() {

  const open = (url) => {
    window.open(url, "_blank");
  };
const [video, setVideo] = useState(
  "https://www.youtube.com/embed/4pKly2JojMw"
);
  return (

<div className="feature-card fade">

<div className="ent-title">

<h1>

🎵 Entertainment Center

</h1>

<p>

Relax • Learn • Enjoy • Connect

</p>

</div>

<div className="ent-grid">

<div
className="ent-card"
onClick={()=>open("https://music.youtube.com")}
>

<FaMusic size={45}/>

<h2>Music Therapy</h2>

<p>

Relaxing Music

Old Songs

Devotional

Melody

</p>

</div>

<div
className="ent-card"
onClick={()=>open("https://youtube.com")}
>

<FaYoutube size={45}/>

<h2>Videos</h2>

<p>

Exercise

Yoga

Meditation

Cooking

</p>

</div>

<div
className="ent-card"
onClick={()=>open("https://storyweaver.org.in")}
>

<FaBookOpen size={45}/>

<h2>Stories</h2>

<p>

Inspirational

Health

Audiobooks

</p>

</div>

<div
className="ent-card"
onClick={()=>open("https://playtictactoe.org")}
>

<FaGamepad size={45}/>

<h2>Games</h2>

<p>

Sudoku

Chess

Memory

Puzzle

</p>

</div>

<div
className="ent-card"
onClick={()=>open("https://www.mentalup.co")}
>

<FaBrain size={45}/>

<h2>Brain Training</h2>

<p>

Memory

Logic

Thinking

</p>

</div>

<div
className="ent-card"
onClick={()=>open("https://mynoise.net")}
>

<FaCloudRain size={45}/>

<h2>Relaxation</h2>

<p>

Rain

Ocean

Forest

Birds

</p>

</div>

<div
className="ent-card"
onClick={()=>open("https://insighttimer.com")}
>

<FaPrayingHands size={45}/>

<h2>Meditation</h2>

<p>

Breathing

Sleep

Mindfulness

</p>

</div>

<div
className="ent-card"
onClick={()=>open("https://chat.openai.com")}
>

<FaRobot size={45}/>

<h2>AI Friend</h2>

<p>

Talk

Quiz

Jokes

Motivation

</p>

</div>

<div
className="ent-card"
onClick={()=>open("https://photos.google.com")}
>

<FaUsers size={45}/>

<h2>Family Corner</h2>

<p>

Photos

Voice

Memories

</p>

</div>

<div
className="ent-card"
onClick={()=>open("https://onlineradiobox.com")}
>

<FaBroadcastTower size={45}/>

<h2>FM Radio</h2>

<p>

News

Devotional

Music

</p>

</div>

</div>
<div className="today-box">

  <h2>⭐ Today's Recommendations</h2>

  <div className="today-list">

    <div className="today-item">
      <h3>🎵 Relaxing Music</h3>
      <p>30 Minutes of Peaceful Instrumental Music</p>

      <button
        className="primary-btn"
        onClick={() =>
          window.open(
            "https://music.youtube.com/search?q=relaxing+instrumental",
            "_blank"
          )
        }
      >
        Play Now
      </button>
    </div>

    <div className="today-item">
      <h3>🧘 Morning Yoga</h3>
      <p>Simple exercises for senior citizens</p>

      <button
        className="primary-btn"
        onClick={() =>
          window.open(
            "https://www.youtube.com/results?search_query=chair+yoga+for+seniors",
            "_blank"
          )
        }
      >
        Watch
      </button>
    </div>

    <div className="today-item">
      <h3>📖 Story Time</h3>
      <p>The Lion and the Mouse</p>

      <button
        className="primary-btn"
        onClick={() =>
          window.open(
            "https://storyweaver.org.in",
            "_blank"
          )
        }
      >
        Read
      </button>
    </div>

    <div className="today-item">
      <h3>🌧 Relax Sounds</h3>
      <p>Rain & Forest Ambience</p>

      <button
        className="primary-btn"
        onClick={() =>
          window.open(
            "https://mynoise.net",
            "_blank"
          )
        }
      >
        Listen
      </button>
    </div>

  </div>

</div>
<div className="achievement">

  <h2>🏆 Daily Entertainment Goals</h2>

  <p>✅ Listened to Music</p>

  <p>✅ Read One Story</p>

  <p>⬜ Played One Brain Game</p>

  <p>⬜ Completed Meditation</p>

  <p>⬜ Called Family</p>

</div>
<div className="feature-card" style={{marginTop:"30px"}}>

<h2>🎵 Music Therapy</h2>

<div className="music-grid">

<button
className="music-btn"
onClick={()=>
window.open(
"https://music.youtube.com/search?q=tamil+melody",
"_blank")
}
>

🎶 Tamil Melody

</button>

<button
className="music-btn"
onClick={()=>
window.open(
"https://music.youtube.com/search?q=devotional+songs",
"_blank")
}
>

🙏 Devotional

</button>

<button
className="music-btn"
onClick={()=>
window.open(
"https://music.youtube.com/search?q=instrumental+music",
"_blank")
}
>

🎻 Instrumental

</button>

<button
className="music-btn"
onClick={()=>
window.open(
"https://music.youtube.com/search?q=nature+sounds",
"_blank")
}
>

🌿 Nature

</button>

<button
className="music-btn"
onClick={()=>
window.open(
"https://music.youtube.com/search?q=sleep+music",
"_blank")
}
>

😴 Sleep Music

</button>

<button
className="music-btn"
onClick={()=>
window.open(
"https://music.youtube.com/search?q=old+tamil+songs",
"_blank")
}
>

📻 Old Songs

</button>

</div>

</div>
<div className="feature-card" style={{ marginTop: "35px" }}>

<h2>📺 Health & Entertainment Videos</h2>

<div className="video-player">

<iframe
width="100%"
height="420"
src={video}
title="YouTube video"
allowFullScreen
/>

</div>

<div className="video-grid">

<button
className="video-btn"
onClick={()=>
setVideo(
"https://www.youtube.com/embed/4pKly2JojMw"
)}
>
🧘 Meditation
</button>

<button
className="video-btn"
onClick={()=>
setVideo(
"https://www.youtube.com/embed/v7AYKMP6rOE"
)}
>
🧘 Yoga
</button>

<button
className="video-btn"
onClick={()=>
setVideo(
"https://www.youtube.com/embed/ZToicYcHIOU"
)}
>
🚶 Chair Exercise
</button>

<button
className="video-btn"
onClick={()=>
setVideo(
"https://www.youtube.com/embed/inpok4MKVLM"
)}
>
🌿 Relaxation
</button>

<button
className="video-btn"
onClick={()=>
setVideo(
"https://www.youtube.com/embed/lFcSrYw-ARY"
)}
>
🎵 Nature Sounds
</button>

<button
className="video-btn"
onClick={()=>
setVideo(
"https://www.youtube.com/embed/2OEL4P1Rz04"
)}
>
❤️ Health Tips
</button>

</div>

</div>
<div className="feature-card" style={{ marginTop: "35px" }}>

<h2>🧠 Brain Games Center</h2>

<div className="game-grid">

<button
className="game-btn"
onClick={() =>
window.open(
"https://playtictactoe.org",
"_blank"
)
}
>
🎮 Tic Tac Toe
</button>

<button
className="game-btn"
onClick={() =>
window.open(
"https://sudoku.com",
"_blank"
)
}
>
🔢 Sudoku
</button>

<button
className="game-btn"
onClick={() =>
window.open(
"https://www.chess.com/play/computer",
"_blank"
)
}
>
♟ Chess
</button>

<button
className="game-btn"
onClick={() =>
window.open(
"https://cardgames.io/memory/",
"_blank"
)
}
>
🧩 Memory Game
</button>

<button
className="game-btn"
onClick={() =>
window.open(
"https://wordwall.net",
"_blank"
)
}
>
❓ Quiz
</button>

<button
className="game-btn"
onClick={() =>
window.open(
"https://quickdraw.withgoogle.com",
"_blank"
)
}
>
🎨 Quick Draw
</button>

</div>

</div>
<div className="feature-card" style={{ marginTop: "35px" }}>

<h2>🤖 AI Companion</h2>

<p>
Your friendly assistant for fun, learning, and motivation.
</p>

<div className="ai-grid">

<button
className="ai-btn"
onClick={() =>
alert("😊 Smile! Every day is a new beginning.")
}
>
😊 Motivate Me
</button>

<button
className="ai-btn"
onClick={() =>
alert("😂 Joke: Why don't skeletons fight each other? They don't have the guts!")
}
>
😂 Tell Me a Joke
</button>

<button
className="ai-btn"
onClick={() =>
alert("📖 Story: A lion spared a mouse. Later, the mouse saved the lion by chewing through a hunter's net.")
}
>
📖 Tell Me a Story
</button>

<button
className="ai-btn"
onClick={() =>
alert("💧 Health Tip: Drink at least 8 glasses of water every day.")
}
>
❤️ Health Tip
</button>

<button
className="ai-btn"
onClick={() =>
alert("🧠 Quiz: Which organ pumps blood throughout the body?\n\nAnswer: Heart ❤️")
}
>
🧠 Daily Quiz
</button>

<button
className="ai-btn"
onClick={() =>
window.open("https://chat.openai.com","_blank")
}
>
💬 Talk with AI
</button>

</div>

</div>
<div className="feature-card" style={{marginTop:"35px"}}>

<h2>🏆 Daily Wellness Challenge</h2>

<p>
Complete today's activities and earn stars.
</p>

<div className="challenge-grid">

<div className="challenge-card">

<h3>💧 Drink Water</h3>

<p>Complete 8 Glasses</p>

<progress value="6" max="8"></progress>

</div>

<div className="challenge-card">

<h3>🚶 Walk</h3>

<p>5000 Steps</p>

<progress value="4200" max="5000"></progress>

</div>

<div className="challenge-card">

<h3>🧠 Brain Exercise</h3>

<p>Memory Game</p>

<progress value="1" max="1"></progress>

</div>

<div className="challenge-card">

<h3>😊 Mood</h3>

<p>Stay Positive</p>

<progress value="1" max="1"></progress>

</div>

</div>

</div>
<div className="feature-card" style={{marginTop:"35px"}}>

<h2>😂 Daily Fun</h2>

<div className="fun-grid">

<button className="primary-btn"
onClick={()=>
alert("😊 Every day is a fresh start!")
}
>

😊 Motivation

</button>

<button className="primary-btn"
onClick={()=>
alert("😂 Why did the computer visit the doctor? Because it had a virus!")
}
>

😂 Joke

</button>

<button className="primary-btn"
onClick={()=>
alert("🌍 Did you know? Drinking enough water improves memory.")
}
>

🌍 Fact

</button>

<button className="primary-btn"
onClick={()=>
alert("❤️ Health Tip: Walking 30 minutes daily keeps your heart healthy.")
}
>

❤️ Health Tip

</button>

</div>

</div>
</div>

  );

}

export default Entertainment;