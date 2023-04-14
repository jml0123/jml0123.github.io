import { shufflableArt } from "./art.js";


const getShuffleableArt = () => {
        return shufflableArt
}

const randomizeParticle = (target) => {
        const width = target.style.width = `${32 + screen.width * 0.05}px`
        target.style.height = width;
        target.style.left = `${5 + Math.random() * 95}%`;
        target.style.animationDelay = `${Math.random() * 12 - 5}s`;
        target.style.animationDuration = `${12 + Math.random() * 17}s`;
}

export const shuffleArtworkFrontPage = () => {
        const frontArt = '.art-div1';
        const imgRoot = 'img/artworks/';
        const artworks = getShuffleableArt();
        const randomArtImg = artworks[Math.floor(artworks.length * Math.random())];
        document.querySelector(frontArt).innerHTML = 
        ` <img src="${imgRoot}${randomArtImg.file}" alt="${randomArtImg.file}">
        <span class="art-caption">${randomArtImg.caption}</span>`
}

export const shuffleArtworkBio = () => {
        const bioArt = '.art-div2'
        const imgRoot = 'img/artworks/';
        const artworks = getShuffleableArt();
        const randomArtImg = artworks[Math.floor(artworks.length * Math.random())];
        document.querySelector(bioArt).innerHTML = 
        ` <img src="${imgRoot}${randomArtImg.file}" alt="${randomArtImg.file}">
        <span class="art-caption">${randomArtImg.caption}</span>`

}
document.addEventListener("DOMContentLoaded", function(){
    //const particles = document.querySelectorAll(".particles li")
    //particles.forEach(randomizeParticle);
    const socialsDiv = document.querySelector(".socials-wrapper")  
    fetch("https://spotify-portfolio-widget.herokuapp.com/currently-playing",).then(res => res.json()).then(data => {
        const songData = !data.track? null :
        `
        <div class="spotify-now-playing-widget">
        <a href=${data.url} target="_blank">
                <div class="badge">
                        <p class="badge-details" style="animation-duration: ${7.33 + (data.artist.length + data.track.length) * 0.113}s">
                        <span role="img"aria-label="music-note">&nbsp🎵</span/><span id="now-playing">Now Playing: </span>
                        <span id="track-info">${data.artist} - ${data.track}</span>
                        </p>
                </div>
        </a>
        </div>
        `
        if (songData){
                console.log(`~~ NOW PLAYING: ${data.track} by ${data.artist} ~~`)
                console.log(7.33 + (data.artist.length + data.track.length) * 0.113)
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

