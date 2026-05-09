         window.addEventListener('load', function() {
    const preloader = document.getElementById('preloader');
    const content = document.getElementById('content');

    // Record the time when the page finished loading
    const loadTime = Date.now();

    // Set a minimum display duration for the preloader ( seconds)
    const minDisplayDuration = 4000; 

    // Calculate how much time is left for the minimum display
    const timeElapsed = Date.now() - loadTime;
    const timeLeft = minDisplayDuration - timeElapsed;

    // Use setTimeout to hide the preloader and show content after the remaining time,
    // ensuring a minimum of 5 seconds
    setTimeout(function() {
        preloader.style.display = 'none';
        content.style.display = 'block';
    }, Math.max(0, timeLeft)); // Ensures a non-negative delay
});
// 


const games = [
        {
    title: "Challenger City Driver",
    img: "./img/1769643441_challenger-city-driver.jpg",
    desc: "A realistic driving simulator where players learn to handle traffic, complete missions, and explore an open city. It combines careful driving, parking challenges, and high-speed races, rewarding control, patience, and skill over reckless speed.",
    id:  "Challenger City Driver",
     platform: {
          mobile: true,
          desktop: true
    }
  },
     {
    title: "Among Us",
    img: "./img/among-us--online-edition_x.jpg",
    desc: "A free browser-based stealth and social deduction game where you play as an impostor on a spaceship, secretly eliminating crew members while avoiding being caught.",
    id:  "Among Us",
      platform: {
          mobile: true,
          desktop: true
    }
 },
      {
    title: "Dagestan Drift",
    img: "./img/1756395428_dagestan-drift.jpg",
    desc: "A free browser-based stealth and social deduction game where you play as an impostor on a spaceship, secretly eliminating crew members while avoiding being caught.",
    id:  "Dagestan Drift",
    platform: {
          mobile: true,
          desktop: true
    }
 },
     {
    title: "Counter Strike",
    img: "./img/1385866675_juegos-gbatis-counteb.jpg",
    desc: "A tactical first-person shooter where players spawn into competitive maps, buy weapons, and fight in fast, round-based matches. Every step, angle, and decision matters as teams try to outplay each other through strategy, aim, and timing.",
    id:  "Counter Strike",
      platform: {
          mobile: true,
          desktop: true
    }
 },
     {
    title: "Driving School Simulator",
    img: "./img/1775850653_driving-school-simulator.jpg",
    desc: "A realistic driving simulator where players learn to handle traffic, complete missions, and explore an open city. It combines careful driving, parking challenges, and high-speed races, rewarding control, patience, and skill over reckless speed.",
    id:  "Driving School Simulator",
      platform: {
          mobile: true,
          desktop: true
    }
 },
      {
    title: "Rooftop Run",
    img: "./img/1763087898_rooftop-run.jpg",
    desc: "A fast-paced rooftop parkour runner where you sprint across city buildings, jumping, sliding, and dodging obstacles while trying to survive a nonstop rooftop chase.",
    id:  "Rooftop Run",
      platform: {
          mobile: true,
          desktop: true
    }
 },
 

  
];

const container = document.getElementById("gameContainer");

games.forEach(game => {

  const card = document.createElement("div");
  card.className = "game-card";

  card.innerHTML = `
       <a href="./play.html?game=${encodeURIComponent(game.id)}">
  
  <div class="game-card">

    <div class="platforms">
      ${game.platform.mobile ? `
        <svg width="15px" height="15px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11 18H13M9.2 21H14.8C15.9201 21 16.4802 21 16.908 20.782C17.2843 20.5903 17.5903 20.2843 17.782 19.908C18 19.4802 18 18.9201 18 17.8V6.2C18 5.0799 18 4.51984 17.782 4.09202C17.5903 3.71569 17.2843 3.40973 16.908 3.21799C16.4802 3 15.9201 3 14.8 3H9.2C8.0799 3 7.51984 3 7.09202 3.21799C6.71569 3.40973 6.40973 3.71569 6.21799 4.09202C6 4.51984 6 5.07989 6 6.2V17.8C6 18.9201 6 19.4802 6.21799 19.908C6.40973 20.2843 6.71569 20.5903 7.09202 20.782C7.51984 21 8.07989 21 9.2 21Z" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
        `: ""}
      ${game.platform.desktop ? `
       <svg width="15px" height="15px" viewBox="-0.5 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:sketch="http://www.bohemiancoding.com/sketch/ns">
    
    <title>desktop</title>
    <desc>Created with Sketch Beta.</desc>
    <defs>
</defs>
    <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" sketch:type="MSPage">
        <g id="Icon-Set" sketch:type="MSLayerGroup" transform="translate(-568.000000, -463.000000)" fill="#ffffff">
            <path d="M597,481 L570,481 L570,467 C570,465.896 570.896,465 572,465 L595,465 C596.104,465 597,465.896 597,467 L597,481 L597,481 Z M597,485 C597,486.104 596.104,487 595,487 L572,487 C570.896,487 570,486.104 570,485 L570,483 L597,483 L597,485 L597,485 Z M582,489 L586,489 L586,493 L582,493 L582,489 Z M595,463 L572,463 C569.791,463 568,464.791 568,467 L568,485 C568,487.209 569.791,489 572,489 L580,489 L580,493 L578,493 C577.447,493 577,493.448 577,494 C577,494.553 577.447,495 578,495 L590,495 C590.553,495 591,494.553 591,494 C591,493.448 590.553,493 590,493 L588,493 L588,489 L595,489 C597.209,489 599,487.209 599,485 L599,467 C599,464.791 597.209,463 595,463 L595,463 Z" id="desktop" sketch:type="MSShapeGroup">
</path>
        </g>
    </g>
</svg>
        ` : ""}
    </div>

    <div class="game-image">
      <img src="${game.img}" alt="Game Image">
    </div>

    <div class="game-content">
      <h3>${game.title}</h3>
      <p>${game.desc}</p>

    <div style="display: flex; align-items:center; justify-content: center; ">
      <svg xmlns="http://www.w3.org/2000/svg" width="30px" height="30px" viewBox="0 0 24 24" fill="white" style="margin-right: 10px;">
        <path d="M7 7L5.5 5.5M15 7L16.5 5.5M5.5 16.5L7 15M11 5L11 3M5 11L3 11M17.1603 16.9887L21.0519 15.4659C21.4758 15.3001 21.4756 14.7003 21.0517 14.5346L11.6992 10.8799C11.2933 10.7213 10.8929 11.1217 11.0515 11.5276L14.7062 20.8801C14.8719 21.304 15.4717 21.3042 15.6375 20.8803L17.1603 16.9887Z" stroke="#ececec" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        <p style="color: white; font-weight: bold; margin-top: 10px;">Tap</p>
    </div>
    </div>

  </div>
</a>
  `;

  container.appendChild(card);
});