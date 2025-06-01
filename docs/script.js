// script.js
// Initialize the page with some effects
document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.nav-btn');
    
    // Add initial animation to buttons
    buttons.forEach((btn, index) => {
        setTimeout(() => {
            btn.classList.add('flashing');
            setTimeout(() => btn.classList.remove('flashing'), 1000);
        }, index * 300);
    });
    
    // Add scanline effect variation
    setInterval(() => {
        const scanline = document.querySelector('.scanline');
        scanline.style.animationDuration = (Math.random() * 6 + 4) + 's';
    }, 8000);
    
    // Add typewriter effect to section titles
    const titles = document.querySelectorAll('.section-title');
    titles.forEach(title => {
        title.classList.add('typewriter');
    });
});

function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: 'smooth' });
    
    // Flash the section border
    section.style.boxShadow = '0 0 20px #ff00ff';
    setTimeout(() => section.style.boxShadow = '', 1000);
    
    // Play a sound effect (simulated)
    playSound();
}

function playSound() {
    // In a real implementation, we would play an actual sound file
    console.log('Bleep! Bloop!');
}

function sendMessage() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    if (name && email && message) {
        alert(`MESSAGE SENT!\n\nThank you, ${name}. Your message has been transmitted to the mainframe. Expect a response via ${email} within 24-48 hours.`);
        document.getElementById('name').value = '';
        document.getElementById('email').value = '';
        document.getElementById('message').value = '';
    } else {
        alert('ERROR: ALL FIELDS REQUIRED!\n\nPlease complete all fields before sending your transmission.');
    }
}

function startGame() {
    alert('SECRET GAME ACTIVATED!\n\nWelcome to "Word Quest" - a text adventure game!\n\nYou find yourself in a library filled with pixelated books. Type "look" to explore or "read" to interact with a book.');
    
    const command = prompt('ENTER COMMAND:');
    
    if (command === 'look') {
        alert('You see shelves stretching into the distance. One book glows with a soft cyan light. Another pulses with magenta energy.');
    } else if (command === 'read') {
        alert('As you open the glowing book, words swirl around you forming a portal to another dimension... GAME CONTINUES!');
    } else {
        alert('UNKNOWN COMMAND. GAME OVER.');
    }
}