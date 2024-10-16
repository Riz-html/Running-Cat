const cat = document.getElementById('cat');
const meowSound = document.getElementById('meow');

// Function to move the cat when the mouse gets close
document.addEventListener('mousemove', function (event) {
    const x = event.clientX;
    const y = event.clientY;
    const catRect = cat.getBoundingClientRect();
    
    const distanceX = x - (catRect.left + catRect.width / 2);
    const distanceY = y - (catRect.top + catRect.height / 2);
    const distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);

    if (distance < 150) { // If the mouse gets within 150px of the cat
        let newX = Math.random() * window.innerWidth - catRect.width;
        let newY = Math.random() * window.innerHeight - catRect.height;
        
        if (newX < 0) newX = 0;
        if (newY < 0) newY = 0;
        
        cat.style.left = `${newX}px`;
        cat.style.top = `${newY}px`;
    }
});

// Function to play meow sound on click
cat.addEventListener('click', function () {
    meowSound.play().catch(error => {
        console.log('Error playing sound:', error);
    });
});

cat.addEventListener('mouseover', function () {
    meowSound.play().catch(error => {
        console.log('Error playing sound on hover:', error);
    });
});
