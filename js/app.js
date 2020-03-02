    
    
randomizeParticle = (target) => {
        const width = target.style.width = `${2.5 + Math.random() * 8}vw`;
        target.style.height = width;
        target.style.left = `${5 + Math.random() * 95}%`;
        target.style.animationDelay = `${Math.random() * 12 - 5}s`;
        target.style.animationDuration = `${12 + Math.random() * 17}s`;
}



document.addEventListener("DOMContentLoaded", function(){
    const particles = document.querySelectorAll(".particles li")
    particles.forEach(randomizeParticle);
    particles.addEventListener ("animationend", particles.forEach(randomizeParticle))
  });