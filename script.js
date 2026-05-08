const games = [
  {
    title: "Rooftop Run",
    img: "./img/1763087898_rooftop-run.jpg",
    desc: "A fast-paced rooftop parkour runner where you sprint across city buildings, jumping, sliding, and dodging obstacles while trying to survive a nonstop rooftop chase.",
    id: "Rooftop Run"
  },
  {
    title: "Backflip Dive 3D",
    img: "./img/1571157166_backflip-dive-3d.jpg",
    desc: "A 3D diving game where you jump from platforms, perform backflips in the air, and aim for a clean water landing by timing your rotations and controlling your dive.",
    id: "Backflip Dive 3D"
  },
  {
    title: "Buggy Racing",
    img: "./img/1776289571_buggy-racing.jpg",
    desc: "A fast-paced off-road arcade racing game where you drive buggies through rough tracks, dodge obstacles, and compete in different modes like racing, time trials, and endless runs, all focused on speed, control, and chaotic fun.",
    id:  "Buggy Racing"
  },
    {
    title: "Challenger City Driver",
    img: "./img/1769643441_challenger-city-driver.jpg",
    desc: "A realistic driving simulator where players learn to handle traffic, complete missions, and explore an open city. It combines careful driving, parking challenges, and high-speed races, rewarding control, patience, and skill over reckless speed.",
    id:  "Challenger City Driver"
  },
     {
    title: "Parkour ",
    img: "./img/1777140017_parkour.jpg",
    desc: "A challenging parkour platformer where you run, jump, climb, and avoid traps across dangerous obstacle-filled levels that test your timing, precision, and reflexes.",
    id:  "Parkour"
  },
   {
    title: "Football Legends 2026",
    img: "./img/Football Legends 2026_images/image3.jpg",
    desc: "A challenging parkour platformer where you run, jump, climb, and avoid traps across dangerous obstacle-filled levels that test your timing, precision, and reflexes.",
    id:  "Football Legends 2026"
  },
  {
    title: "Traffic Racing",
    img: "./img/Traffic Racing_images/image2.jpg",
    desc: "Traffic Racing is a fast-paced driving game that throws you into intense highway action where every second counts. Weave through heavy traffic at high speeds as you compete in Career Mode or test your skills against others in Racing League Online.",
    id:  "Traffic Racing"
  },

];


const container = document.getElementById("gameContainer");

games.forEach(game => {

  const card = document.createElement("div");
  card.className = "game-card";

  card.innerHTML = `
    <div class="game-image">
      <img src="${game.img}" alt="Game Image">
    </div>

    <div class="game-content">
      <h3>${game.title}</h3>
      <p>${game.desc}</p>

      <a href="./play.html?game=${encodeURIComponent(game.id)}">
        <button>Play Game</button>
      </a>
    </div>
  `;

  container.appendChild(card);
});