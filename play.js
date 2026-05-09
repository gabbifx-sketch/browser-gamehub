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

// Games
    const params = new URLSearchParams(window.location.search);
const game = params.get("game");

const frame = document.getElementById("gameFrame");
const title = document.getElementById("title");

// simple game system
if(game === "Among Us"){
  title.innerText = "Among Us: Online-Edition";
  frame.src = "https://kiz10.com/embed-play/among-us--online-edition/?img=13271/among-us--online-edition_x.webp";
}

else if(game === "Dagestan Drift"){
  title.innerText = "Dagestan Drift";
  frame.src = "https://kiz10.com/embed-play/dagestan-drift/?img=20928/1756395428_dagestan-drift.webp";
}

else if(game === "Counter Strike"){
  title.innerText = "Counter Strike";
  frame.src = "https://kiz10.com/embed-play/counter-strike/?img=569/1385866675_juegos-gbatis-counteb.webp";
}

else if(game === "Driving School Simulator"){
  title.innerText = "Driving School Simulator";
  frame.src = "https://kiz10.com/embed-play/driving-school-simulator/?img=23655/1775850653_driving-school-simulator.webp";
}

else if(game === "Challenger City Driver"){
  title.innerText = "Challenger City Driver";
  frame.src = "https://kiz10.com/embed-play/challenger-city-driver/?img=23159/1769643441_challenger-city-driver.webp";
}

else if(game === "Rooftop Run"){
  title.innerText = "Rooftop Run";
  frame.src = "https://kiz10.com/embed-play/rooftop-run/?img=22220/1763087898_rooftop-run.webp";
}

else if(game === "Backflip Dive 3D"){
  title.innerText = "Backflip Dive 3D";
  frame.src = "https://kiz10.com/embed-play/backflip-dive-3d/?img=11210/1571157166_backflip-dive-3d.webp";
}

else if(game === "Buggy Racing"){
  title.innerText = "Buggy Racing";
  frame.src = "https://kiz10.com/embed-play/buggy-racing/?img=23690/1776289571_buggy-racing.webp";
}
else if(game === "Parkour"){
  title.innerText = "Parkour";
  frame.src = "https://kiz10.com/embed-play/parkour/?img=23748/1777140017_parkour.webp";
}
else if(game === "Football Legends 2026"){
  title.innerText = "Football Legends 2026";
  frame.src = "https://html5.gamedistribution.com/13eabea86f7c4cd993a156258420e9ec/?gd_sdk_referrer_url=https://gamedistribution.com/games/football-legends-2026/";
}
else if(game === "Traffic Racing"){
  title.innerText = "Traffic Racing";
  frame.src = "https://html5.gamedistribution.com/f3ee6674b4ea4579aeefd54d7bf388f0/?gd_sdk_referrer_url=https://gamedistribution.com/games/traffic-racing-1/";
}
else if(game === "Stick Kill 3D"){
  title.innerText = "Stick Kill 3D";
  frame.src = "https://kiz10.com/embed-play/stick-kill-3d/?img=23614/1775244340_stick-kill-3d.webp";
}
else if(game === "Moto Traffic Rider"){
  title.innerText = "Moto Traffic Rider";
  frame.src = "https://kiz10.com/embed-play/moto-traffic-rider/?img=22283/1763502071_moto-traffic-rider.webp";
}
else if(game === "Count Masters"){
  title.innerText = "Count Masters";
  frame.src = "https://kiz10.com/embed-play/count-masters-online/?img=14237/count-masters-online_.webp";
}
else if(game === "Vortex 9"){
  title.innerText = "Vortex 9";
  frame.src = "https://kiz10.com/embed-play/vortex-9/?img=18543/vortex-9_o.webp";
}
else if(game === "FRAGEN"){
  title.innerText = "FRAGEN";
  frame.src = "https://kiz10.com/embed-play/fragen/?img=19936/1750532663_fragen.webp";
}
else if(game === "War The Knights"){
  title.innerText = "War The Knights: Battle";
  frame.src = "https://kiz10.com/embed-play/war-the-knights-battle-arena-swords-3d/?img=20053/1751394909_war-the-knights-battle-arena-swords-3d.webp";
}
else if(game === "Sandbox City"){
  title.innerText = "Sandbox City";
  frame.src = "https://kiz10.com/embed-play/sandbox-city---cars--zombies--ragdolls-/?img=15101/conquer-the-city_.webp";
}

else if(game === "Funny City"){
  title.innerText = "Funny City";
  frame.src = "https://kiz10.com/embed-play/funny-city-gopniks/?img=22782/1766118491_funny-city-gopniks.webp";
}

else if(game === "Riders Downhill Racing"){
  title.innerText = "Riders Downhill Racing";
  frame.src = "https://kiz10.com/embed-play/riders-downhill-racing/?img=18057/riders-downhill-racing_.webp";
}

else if(game === "Riders Downhill Racing"){
  title.innerText = "Riders Downhill Racing";
  frame.src = "https://kiz10.com/embed-play/riders-downhill-racing/?img=18057/riders-downhill-racing_.webp";
}

else if(game === "Riders Downhill Racing"){
  title.innerText = "Riders Downhill Racing";
  frame.src = "https://kiz10.com/embed-play/riders-downhill-racing/?img=18057/riders-downhill-racing_.webp";
}

else if(game === "Riders Downhill Racing"){
  title.innerText = "Riders Downhill Racing";
  frame.src = "https://kiz10.com/embed-play/riders-downhill-racing/?img=18057/riders-downhill-racing_.webp";
}

else if(game === "Riders Downhill Racing"){
  title.innerText = "Riders Downhill Racing";
  frame.src = "https://kiz10.com/embed-play/riders-downhill-racing/?img=18057/riders-downhill-racing_.webp";
}

else if(game === "Eaglercraft"){
  title.innerText = "Eaglercraft";
  frame.src = "https://eaglercraft.com/play?version=1.8.8";
}

else if(game === "Messanger"){
  title.innerText = "Messanger";
  frame.src = "https://messenger.abeto.co/";
}






else {
  title.innerText = "Game not found";
}