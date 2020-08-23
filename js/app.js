randomizeParticle = (target) => {
        const width = target.style.width = `${32 + screen.width * 0.05}px`
        target.style.height = width;
        target.style.left = `${5 + Math.random() * 95}%`;
        target.style.animationDelay = `${Math.random() * 12 - 5}s`;
        target.style.animationDuration = `${12 + Math.random() * 17}s`;
}

document.addEventListener("DOMContentLoaded", function(){
    //const particles = document.querySelectorAll(".particles li")
    //particles.forEach(randomizeParticle);
    const socialsDiv = document.querySelector(".socials-wrapper")  
    fetch("https://serene-plains-09848.herokuapp.com/currently-playing",).then(res => res.json()).then(data => {
        const songData = !data.track? null :
        `
        <div class="spotify-now-playing-widget">
        <a href=${data.url}>
                <div class="badge">
                        <p class="badge-details" style="animation-duration: ${7.33 + (data.artist.length + data.track.length) * 0.1}s">
                        <span role="img"aria-label="music-note">&nbsp🎵</span/><span id="now-playing">Now Playing: </span>
                        <span id="track-info">${data.artist} - ${data.track}</span>
                        </p>
                </div>
        </a>
        </div>
        `
        if (songData){
                console.log(`~~ NOW PLAYING: ${data.track} by ${data.artist} ~~`)
                console.log(7.33 + (data.artist.length + data.track.length) * 0.1)
                const template = `
                ${songData}
                `
                socialsDiv.innerHTML += template;
                console.log(badgeWidth)
        }

    }).catch(err => {
        console.log(err)
    })
  });

