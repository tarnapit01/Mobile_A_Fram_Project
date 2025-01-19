
AFRAME.registerComponent('drinkable', {
    init: function() {
      let isAnimating = false;
      const water = document.querySelector('#water');
      const originalHeight = water.getAttribute('height');
      let currentWaterLevel = originalHeight;
      
      this.el.addEventListener('click', () => {
        if (isAnimating) return;
        
        isAnimating = true;
        
        // Trigger drinking animation
        water.emit('drink');
        
        // Play drinking sound (if you have one)
        const drinkSound = new Audio('assets/sounds/Drinking-Sound-Effect.mp3');
        drinkSound.play();
        
        // Reset water level after animation
        setTimeout(() => {
          water.setAttribute('height', originalHeight);
          isAnimating = false;
        }, 2000);
        
        alert("click to Drink");
        // Optional: Show drinking message
        console.log('Drinking water...');
      });
    }
  });