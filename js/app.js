    
    
randomizeParticle = (target) => {
        const width = target.style.width = `${32 + screen.width * 0.05}px`
        target.style.height = width;
        target.style.left = `${5 + Math.random() * 95}%`;
        target.style.animationDelay = `${Math.random() * 12 - 5}s`;
        target.style.animationDuration = `${12 + Math.random() * 17}s`;
}



document.addEventListener("DOMContentLoaded", function(){
    const particles = document.querySelectorAll(".particles li")
    particles.forEach(randomizeParticle);

  });