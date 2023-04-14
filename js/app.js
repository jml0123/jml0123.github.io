const shufflableArt = 
        [
                {
                        file: 'hagihara_1.jpeg',
                        caption: '萩原 卓哉 (Hagihara Takuya)'
                }, 
                { 
                        file: 'hagihara_2.jpg',
                        caption: '萩原 卓哉 (Hagihara Takuya)'
                }, 
                {
                        file: 'hagihara_3.png',
                        caption: '萩原 卓哉 (Hagihara Takuya)'
                }, 
                {
                        file: 'Hagihara_4.jpg',
                        caption: '萩原 卓哉 (Hagihara Takuya)'
                },
                {
                        file: 'gustave_infernocanto32.jpg',
                        caption: 'G.Dore, Inferno (Canto XXXII)'
                },
                {
                        file: 'gustave_paradisocanto12.jpg',
                        caption: 'G. Dore, Paradiso (Canto XII)'
                },
                {
                        file: 'downissue.webp',
                        caption: 'Bosniak and Ektah - d o w n . i s s u e . 027 (2004)'
                },
                {
                        file: 'dance2trance.jpeg',
                        caption: 'Dance 2 Trance - Hello San Francisco'
                },
                {
                        file: 'wipeout3menu.jpeg',
                        caption: 'Wipeout 3 Game - Menu Screen'
                },
                {
                        file: 'blame_art.jpegt',
                        caption: 'Tsutomu Nihei - Blame! Page 61'
                }

]

randomizeParticle = (target) => {
        const width = target.style.width = `${32 + screen.width * 0.05}px`
        target.style.height = width;
        target.style.left = `${5 + Math.random() * 95}%`;
        target.style.animationDelay = `${Math.random() * 12 - 5}s`;
        target.style.animationDuration = `${12 + Math.random() * 17}s`;
}

shuffleArtworkFrontPage = () => {
        const frontArt = '.art-div1';
        const imgRoot = 'img/artworks/';
        const randomArtImg = shufflableArt[Math.floor(shufflableArt.length * Math.random())];
        document.querySelector(frontArt).innerHTML = 
        ` <img src="${imgRoot}${randomArtImg.file}" alt="${randomArtImg.file}">
        <span class="art-caption">${randomArtImg.caption}</span>`
}

shuffleArtworkBio = () => {
        const bioArt = '.art-div2'
        const imgRoot = 'img/artworks/';
        const randomArtImg = shufflableArt[Math.floor(shufflableArt.length * Math.random())];
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

