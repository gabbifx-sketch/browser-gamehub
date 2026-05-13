    // iframe Full Screen
    function openFullscreen() {
  const frame = document.getElementById("gameFrame");

  if (frame.requestFullscreen) {
    frame.requestFullscreen();
  } 
  else if (frame.webkitRequestFullscreen) { // Safari
    frame.webkitRequestFullscreen();
  } 
  else if (frame.msRequestFullscreen) { // IE/Edge old
    frame.msRequestFullscreen();
  }
}

// frame.loading = "eager";
// frame.referrerPolicy = "no-referrer";

// const preload = (url) => {
//   const i = document.createElement("iframe");
//   i.src = url;
//   i.style.display = "none";
//   document.body.appendChild(i);
// };

function loadGame() {
  const params = new URLSearchParams(window.location.search);
  const game = params.get("game");

  const data = games[game];

  if (!data) {
    title.innerText = "Game not found";
    return;
  }

  title.innerText = data.title;

  // show loader first (optional if you have one)
  frame.style.display = "none";

  frame.src = data.url;

  frame.onload = () => {
    frame.style.display = "block";
  };
}




// Games
    const params = new URLSearchParams(window.location.search);
const game = params.get("game");

const frame = document.getElementById("gameFrame");
const title = document.getElementById("title");
const favicon = document.querySelector("link[rel='icon']");


// simple game system
htmltitle = document.title = `${title.innerText} - BrowserGames`;
if(game === "Among Us"){
  title.innerText = "Among Us: Online-Edition";
  frame.src = "https://kiz10.com/embed-play/among-us--online-edition/?img=13271/among-us--online-edition_x.webp";
  htmltitle = document.title = `${title.innerText} - BrowserGames`;

  
}

else if(game === "Dagestan Drift"){
  title.innerText = "Dagestan Drift";
  frame.src = "https://kiz10.com/embed-play/dagestan-drift/?img=20928/1756395428_dagestan-drift.webp";
  htmltitle = document.title = `${title.innerText} - BrowserGames`;
}

else if(game === "Counter Strike"){
  title.innerText = "Counter Strike";
  frame.src = "https://kiz10.com/embed-play/counter-strike/?img=569/1385866675_juegos-gbatis-counteb.webp";
  htmltitle = document.title = `${title.innerText} - BrowserGames`;
}

else if(game === "Driving School Simulator"){
  title.innerText = "Driving School Simulator";
  frame.src = "https://kiz10.com/embed-play/driving-school-simulator/?img=23655/1775850653_driving-school-simulator.webp";
  htmltitle = document.title = `${title.innerText} - BrowserGames`;
}

else if(game === "Challenger City Driver"){
  title.innerText = "Challenger City Driver";
  frame.src = "https://kiz10.com/embed-play/challenger-city-driver/?img=23159/1769643441_challenger-city-driver.webp";
  htmltitle = document.title = `${title.innerText} - BrowserGames`;
}

else if(game === "Rooftop Run"){
  title.innerText = "Rooftop Run";
  frame.src = "https://kiz10.com/embed-play/rooftop-run/?img=22220/1763087898_rooftop-run.webp";
  htmltitle = document.title = `${title.innerText} - BrowserGames`;
}

else if(game === "Backflip Dive 3D"){
  title.innerText = "Backflip Dive 3D";
  frame.src = "https://kiz10.com/embed-play/backflip-dive-3d/?img=11210/1571157166_backflip-dive-3d.webp";
  htmltitle = document.title = `${title.innerText} - BrowserGames`;
}

else if(game === "Buggy Racing"){
  title.innerText = "Buggy Racing";
  frame.src = "https://kiz10.com/embed-play/buggy-racing/?img=23690/1776289571_buggy-racing.webp";
  htmltitle = document.title = `${title.innerText} - BrowserGames`;
}
else if(game === "Parkour"){
  title.innerText = "Parkour";
  frame.src = "https://kiz10.com/embed-play/parkour/?img=23748/1777140017_parkour.webp";
  htmltitle = document.title = `${title.innerText} - BrowserGames`;
}
else if(game === "Football Legends 2026"){
  title.innerText = "Football Legends 2026";
  frame.src = "https://html5.gamedistribution.com/13eabea86f7c4cd993a156258420e9ec/?gd_sdk_referrer_url=https://gamedistribution.com/games/football-legends-2026/";
  htmltitle = document.title = `${title.innerText} - BrowserGames`;
}
else if(game === "Traffic Racing"){
  title.innerText = "Traffic Racing";
  frame.src = "https://html5.gamedistribution.com/f3ee6674b4ea4579aeefd54d7bf388f0/?gd_sdk_referrer_url=https://gamedistribution.com/games/traffic-racing-1/";
  htmltitle = document.title = `${title.innerText} - BrowserGames`;
}
else if(game === "Stick Kill 3D"){
  title.innerText = "Stick Kill 3D";
  frame.src = "https://kiz10.com/embed-play/stick-kill-3d/?img=23614/1775244340_stick-kill-3d.webp";
  htmltitle = document.title = `${title.innerText} - BrowserGames`;
}
else if(game === "Moto Traffic Rider"){
  title.innerText = "Moto Traffic Rider";
  frame.src = "https://kiz10.com/embed-play/moto-traffic-rider/?img=22283/1763502071_moto-traffic-rider.webp";
  htmltitle = document.title = `${title.innerText} - BrowserGames`;
}
else if(game === "Count Masters"){
  title.innerText = "Count Masters";
  frame.src = "https://kiz10.com/embed-play/count-masters-online/?img=14237/count-masters-online_.webp";
  htmltitle = document.title = `${title.innerText} - BrowserGames`;
}
else if(game === "Vortex 9"){
  title.innerText = "Vortex 9";
  frame.src = "https://www.miniplay.com/embed/vortex-9";
  htmltitle = document.title = `${title.innerText} - BrowserGames`;
}
else if(game === "FRAGEN"){
  title.innerText = "FRAGEN";
  frame.src = "https://www.miniplay.com/embed/fragen";
  htmltitle = document.title = `${title.innerText} - BrowserGames`;
}
else if(game === "War The Knights"){
  title.innerText = "War The Knights: Battle";
  frame.src = "https://kiz10.com/embed-play/war-the-knights-battle-arena-swords-3d/?img=20053/1751394909_war-the-knights-battle-arena-swords-3d.webp";
  htmltitle = document.title = `${title.innerText} - BrowserGames`;
}
else if(game === "Sandbox City"){
  title.innerText = "Sandbox City";
  frame.src = "https://kiz10.com/embed-play/sandbox-city---cars--zombies--ragdolls-/?img=15101/conquer-the-city_.webp";
  htmltitle = document.title = `${title.innerText} - BrowserGames`;
}

else if(game === "Funny City"){
  title.innerText = "Funny City";
  frame.src = "https://kiz10.com/embed-play/funny-city-gopniks/?img=22782/1766118491_funny-city-gopniks.webp";
  htmltitle = document.title = `${title.innerText} - BrowserGames`;
}

else if(game === "Riders Downhill Racing"){
  title.innerText = "Riders Downhill Racing";
  frame.src = "https://kiz10.com/embed-play/riders-downhill-racing/?img=18057/riders-downhill-racing_.webp";
  htmltitle = document.title = `${title.innerText} - BrowserGames`;
}

else if(game === "Free Kick Football"){
  title.innerText = "Free Kick Football: 3D Soccer";
  frame.src = "https://kiz10.com/embed-play/riders-downhill-racing/?img=18057/riders-downhill-racing_.webp";
  htmltitle = document.title = `${title.innerText} - BrowserGames`;
}

else if(game === "Stick Man War"){
  title.innerText = "Stick Man War";
  frame.src = "https://www.madkidgames.com/full/stick-war-legacy";
  htmltitle = document.title = `${title.innerText} - BrowserGames`;
}

else if(game === "Ladderrex"){
  title.innerText = "Ladderrex";
  frame.src = "https://html5.gamemonetize.co/ct6sqlvw5bv8uvrca4350sl4ums0aqd7/";
  htmltitle = document.title = `${title.innerText} - BrowserGames`;
}

else if(game === "Slap Fest"){
  title.innerText = "Slap Fest";
  frame.src = "https://zv1y2i8p.play.gamezop.com/g/ryN9EGAQa";
  htmltitle = document.title = `${title.innerText} - BrowserGames`;
}

else if(game === "Eaglercraft"){
  title.innerText = "Eaglercraft";
  frame.src = "https://eaglercraft.com/play?version=1.8.8";
  htmltitle = document.title = `${title.innerText} - BrowserGames`;
}

else if(game === "Messanger"){
  title.innerText = "Messanger";
  frame.src = "https://messenger.abeto.co/";
  htmltitle = document.title = `${title.innerText} - BrowserGames`;
}
else if(game === "Stickman Fights"){
  title.innerText = "Stickman Fights";
  frame.src = "https://html5.gamemonetize.co/xsnm9j5pt4edsiibqgn1vd8i0twqrclp/";
  htmltitle = document.title = `${title.innerText} - BrowserGames`;
}
else if(game === "Special Forces X"){
  title.innerText = "Special Forces X";
  frame.src = "https://html5.gamemonetize.co/6r1xx423npjwxlcrdr8t30h72trj0n2b/";
  htmltitle = document.title = `${title.innerText} - BrowserGames`;
}

else if(game === "Shadow Fight 2"){
  title.innerText = "Shadow Fight 2";
  frame.src = "https://www.madkidgames.com/full/shadow-fight-2";
  htmltitle = document.title = `${title.innerText} - BrowserGames`;
}

else if(game === "Drag Battle"){
  title.innerText = "Drag Battle: Street Racing";
  frame.src = "https://www.miniplay.com/embed/drag-battle-street-racing";
  htmltitle = document.title = `${title.innerText} - BrowserGames`;
}

else if(game === "KS Z"){
  title.innerText = "KS Z";
  frame.src = "https://www.miniplay.com/embed/ks-z";
  htmltitle = document.title = `${title.innerText} - BrowserGames`;
}

else if(game === "SchoolBoy Runaway"){
  title.innerText = "SchoolBoy Runaway";
  frame.src = "https://st.8games.net/10/8g/igra-schoolboy-runaway/";
  htmltitle = document.title = `${title.innerText} - BrowserGames`;
}
else if(game === "Poppy Playtime"){
  title.innerText = "Poppy Playtime";
  frame.src = "https://kiz10.com/embed-play/poppy-playtime/?img=17913/poppy-playtime_.webp";
  htmltitle = document.title = `${title.innerText} - BrowserGames`;
}
else if(game === "Phasmophobia"){
  title.innerText = "Phasmophobia";
  frame.src = "https://kiz10.com/embed-play/phasmophobia/?img=20626/1754707238_phasmophobia.webp";
  htmltitle = document.title = `${title.innerText} - BrowserGames`;
}
 
 else if(game === "Shell Shockers"){
  title.innerText = "Shell Shockers";
  frame.src = "https://shellshock.io/";
  htmltitle = document.title = `${title.innerText} - BrowserGames`;
}
 else if(game === "Venge"){
  title.innerText = "Shell Shockers";
  frame.src = "https://venge.io/";
  htmltitle = document.title = `${title.innerText} - BrowserGames`;
}
 else if(game === "Ev.io"){
  title.innerText = "Ev.io";
  frame.src = "https://ev.io/";
  htmltitle = document.title = `${title.innerText} - BrowserGames`;
}

 else if(game === "SWAGFLIP"){
  title.innerText = "SWAGFLIP";
  frame.src = "https://kiz10.com/embed-play/swagflip/?img=22127/1762451886_swagflip.webp";
  htmltitle = document.title = `${title.innerText} - BrowserGames`;
}
 else if(game === "Ride in Cadillac Escalade"){
  title.innerText = "Ride in Cadillac Escalade";
  frame.src = "https://st.8games.net/14/igra-raz-ezzhaj-na-kadillake-eskalejd/";
  htmltitle = document.title = `${title.innerText} - BrowserGames`;
}
 else if(game === "BoomNG Drive"){
  title.innerText = "Crash: BoomNG Drive";
  frame.src = "https://st.8games.net/11/igra-avarii-bum-drajv/";
  htmltitle = document.title = `${title.innerText} - BrowserGames`;
}

 else if(game === "Vector Rush"){
  title.innerText = "Vector Rush: Rush";
  frame.src = "https://st.8games.net/10/igra-vektor/";
  htmltitle = document.title = `${title.innerText} - BrowserGames`;
}

 else if(game === "Mad City Prison Escape 2"){
  title.innerText = "Mad City Prison Escape 2";
  frame.src = "https://st.8games.net/6/prison-escape-2/";
  htmltitle = document.title = `${title.innerText} - BrowserGames`;
}
 else if(game === "Realistic Driver Simulator"){
  title.innerText = "Realistic Driver Simulator";
  frame.src = "https://st.8games.net/14/igra-realistichnyj-simulyator-vozhdeniya/";
  htmltitle = document.title = `${title.innerText} - BrowserGames`;
}



 else if(game === "Krunker.io"){
  title.innerText = "Krunker.io";
  frame.src = "https://krunker.io/";
  htmltitle = document.title = `${title.innerText} - BrowserGames`;
}


 else if(game === "Smash Karat.io"){
  title.innerText = "Smash Karat.io";
  frame.src = "https://smashkarts.io/";
  htmltitle = document.title = `${title.innerText} - BrowserGames`;
}

 else if(game === "Racing Limits"){
  title.innerText = "Racing Limits";
  frame.src = "https://kiz10.com/embed-play/racing-limits-game/?img=18397/racing-limits-game_.webp";
  htmltitle = document.title = `${title.innerText} - BrowserGames`;
}

 else if(game === "Mad City Prison Escape 2"){
  title.innerText = "Mad City Prison Escape 2";
  frame.src = "https://kiz10.com/embed-play/racing-limits-game/?img=18397/racing-limits-game_.webp";
  htmltitle = document.title = `${title.innerText} - BrowserGames`;
}


else {
  title.innerText = "Game not found";
}




