// Integrated card flip, music, and explosion effects
// Replace your entire mein.js file with this code

document.addEventListener('DOMContentLoaded', function() {
    // ===== PART 1: CARD FLIP WITH MUSIC =====
    // Get the card element
    const card = document.querySelector('.card');
    
    // Create audio element for card music
    let cardMusic = document.getElementById('card-music');
    if (!cardMusic) {
        cardMusic = document.createElement('audio');
        cardMusic.id = 'card-music';
        cardMusic.style.display = 'none';
        cardMusic.preload = 'auto';
        
        const source = document.createElement('source');
        source.src = './music.mp3';
        source.type = 'audio/mpeg';
        cardMusic.appendChild(source);
        
        document.body.appendChild(cardMusic);
    }
    
    // Track if music has been played
    let musicPlayed = false;
    
    // ===== PART 2: EXPLOSION EFFECT SETUP =====
    // Create explosion container if it doesn't exist
  // Replace the rose petal and firework functions in your mein.js file with these enhanced versions

// Function to create enhanced rose petals
function createRosePetals(x, y) {
    console.log("Creating enhanced rose petals at", x, y);
    // Create more petals for a bigger effect
    for (let i = 0; i < 60; i++) {
        const petal = document.createElement('div');
        petal.className = 'petal';
        
        // Random size variation
        const size = 20 + Math.random() * 25; // Bigger size range
        petal.style.width = `${size}px`;
        petal.style.height = `${size * 1.5}px`;
        
        // Random color variations of pink and red
        const hue = 340 + Math.random() * 30; // 340-370 for reds and pinks
        const saturation = 70 + Math.random() * 30; // 70-100%
        const lightness = 50 + Math.random() * 30; // 50-80%
        petal.style.background = `radial-gradient(ellipse at center, 
                                  hsl(${hue}, ${saturation}%, ${lightness}%) 0%, 
                                  hsl(${hue}, ${saturation}%, ${lightness - 20}%) 70%, 
                                  hsl(${hue}, ${saturation}%, ${lightness - 30}%) 100%)`;
        
        // Position at center
        petal.style.left = `${x}px`;
        petal.style.top = `${y}px`;
        
        // Random end position and rotation - bigger distance
        const angle = Math.random() * Math.PI * 2;
        const distance = 200 + Math.random() * 400; // 200-600px (much larger range)
        const endX = Math.cos(angle) * distance;
        const endY = Math.sin(angle) * distance;
        const rotation = Math.random() * 1080 - 540; // -540 to 540 degrees (more rotation)
        
        petal.style.setProperty('--end-x', `${endX}px`);
        petal.style.setProperty('--end-y', `${endY}px`);
        petal.style.setProperty('--rotation', `${rotation}deg`);
        
        document.querySelector('.explosion-container').appendChild(petal);
        
        // Animate and remove with staggered timing
        setTimeout(() => {
            petal.classList.add('animate');
            setTimeout(() => petal.remove(), 6000);
        }, Math.random() * 800); // More spread out timing
    }
}

// Function to create enhanced fireworks
function createFireworks(x, y) {
    console.log("Creating enhanced fireworks at", x, y);
    
    // Create initial starburst effect
    createStarburst(x, y);
    
    // Create multiple firework bursts with different colors and timing
    createFireworkBurst(x, y, 40, ['#ff0', '#ffa', '#ff5']);  // Yellow/gold burst
    
    setTimeout(() => {
        createFireworkBurst(x, y, 30, ['#f0f', '#faf', '#f5f']); // Pink/purple burst
    }, 200);
    
    setTimeout(() => {
        createFireworkBurst(x, y, 35, ['#0ff', '#aff', '#5ff']); // Blue/cyan burst
    }, 400);
    
    setTimeout(() => {
        createFireworkBurst(x, y, 25, ['#f55', '#faa', '#f77']); // Red burst
    }, 600);
    
    // Create random sparkles around the explosion area
    for (let i = 0; i < 100; i++) {
        setTimeout(() => {
            createSparkle(
                x + (Math.random() * 400 - 200), 
                y + (Math.random() * 400 - 200)
            );
        }, Math.random() * 1500);
    }
}

// Function to create a single firework burst
function createFireworkBurst(x, y, particleCount, colorPalette) {
    const container = document.querySelector('.explosion-container');
    
    for (let i = 0; i < particleCount; i++) {
        const firework = document.createElement('div');
        firework.className = 'firework';
        
        // Random color from the palette
        const color = colorPalette[Math.floor(Math.random() * colorPalette.length)];
        firework.style.setProperty('--color', color);
        
        // Random core color (white or matching the shell)
        const coreColor = Math.random() > 0.5 ? '#fff' : color;
        firework.style.setProperty('--color-core', coreColor);
        
        // Random size variation
        const size = 6 + Math.random() * 8;
        firework.style.width = `${size}px`;
        firework.style.height = `${size}px`;
        
        // Position at center
        firework.style.left = `${x}px`;
        firework.style.top = `${y}px`;
        
        // Random trajectory
        const angle = Math.random() * Math.PI * 2;
        const distance = 100 + Math.random() * 250; // 100-350px
        firework.style.setProperty('--end-x', `${Math.cos(angle) * distance}px`);
        firework.style.setProperty('--end-y', `${Math.sin(angle) * distance}px`);
        
        container.appendChild(firework);
        
        // Animate and remove
        setTimeout(() => {
            firework.classList.add('animate');
            setTimeout(() => firework.remove(), 2000);
        }, Math.random() * 100);
    }
}

// Function to create a starburst effect
function createStarburst(x, y) {
    const container = document.querySelector('.explosion-container');
    const starburst = document.createElement('div');
    starburst.className = 'starburst';
    
    starburst.style.left = `${x - 50}px`; // Center the 100px element
    starburst.style.top = `${y - 50}px`;
    
    container.appendChild(starburst);
    
    // Animate and remove
    setTimeout(() => {
        starburst.classList.add('animate');
        setTimeout(() => starburst.remove(), 800);
    }, 10);
}

// Function to create sparkle effects
function createSparkle(x, y) {
    const container = document.querySelector('.explosion-container');
    const sparkle = document.createElement('div');
    sparkle.className = 'sparkle';
    
    // Random size
    const size = 2 + Math.random() * 4;
    sparkle.style.width = `${size}px`;
    sparkle.style.height = `${size}px`;
    
    sparkle.style.left = `${x - size/2}px`;
    sparkle.style.top = `${y - size/2}px`;
    
    container.appendChild(sparkle);
    
    // Animate and remove
    sparkle.classList.add('animate');
    setTimeout(() => sparkle.remove(), 1000);
}
    
    // ===== PART 3: INTEGRATED CARD CLICK HANDLER =====
    // Universal function that handles card flip, music, and explosion effects
    function handleCardClick() {
        console.log("Card clicked, flipped state before:", this.classList.contains('flipped'));
        
        // Store the state before the toggle
        const wasFlipped = this.classList.contains('flipped');
        
        // Flip the card
        this.classList.toggle('flipped');
        
        // Check if card is now flipped to back (wasn't flipped before, but is now)
        if (!wasFlipped) {
            console.log("Card is now flipped to back, triggering effects");
            
            // Play music if it hasn't been played yet
            if (!musicPlayed) {
                musicPlayed = true;
                cardMusic.play().catch(e => {
                    console.log("Music playback error:", e);
                    musicPlayed = false;
                });
            }
            
            // Get card center for explosion effects
            const rect = this.getBoundingClientRect();
            const centerX = rect.left + rect.width / 2;
            const centerY = rect.top + rect.height / 2;
            
            // Trigger explosion effects with delay to match flip animation
            setTimeout(() => {
    console.log("Triggering enhanced explosion effects");
    
    // Create initial starburst for dramatic effect
    createStarburst(centerX, centerY);
    
    // Play explosion sound with slightly higher volume
    const explosionSound = document.getElementById('explosion-sound');
    if (explosionSound) {
        explosionSound.volume = 0.3;
        explosionSound.play().catch(e => console.log("Couldn't play sound:", e));
    }
    
    // Add rose petals
    createRosePetals(centerX, centerY);
    
    // Add multiple firework bursts with staggered timing
    createFireworks(centerX, centerY);
    
    // Create additional fireworks in nearby positions for a bigger effect
    setTimeout(() => {
        createFireworkBurst(centerX - 100, centerY - 50, 20, ['#ff0', '#ffa']);
        createFireworkBurst(centerX + 100, centerY - 50, 20, ['#f0f', '#faf']);
    }, 300);
    
    setTimeout(() => {
        createFireworkBurst(centerX - 50, centerY + 100, 20, ['#0ff', '#aff']);
        createFireworkBurst(centerX + 150, centerY + 50, 20, ['#f55', '#faa']);
    }, 600);
}, 500);
        }
    }
    
    // Attach the combined handler to the card
    card.addEventListener('click', handleCardClick);
    
    // ===== PART 4: OTHER ANIMATIONS =====
    // Add pulse and bounce animations
    const style = document.createElement('style');
    style.textContent = `
        @keyframes pulse {
            0% { transform: scale(1); }
            50% { transform: scale(1.05); }
            100% { transform: scale(1); }
        }
        
        @keyframes bounce {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-15px); }
        }
    `;
    document.head.appendChild(style);
    
    // Make timeline photos interactive
    const photoContainers = document.querySelectorAll('.photo-container:not(.media-container)');
    photoContainers.forEach(container => {
        container.addEventListener('click', function() {
            // Add a pulse effect when clicked
            this.style.animation = 'pulse 0.5s';
            setTimeout(() => {
                this.style.animation = '';
            }, 500);
        });
    });
    
    // Make memory cards interactive
    const memoryCards = document.querySelectorAll('.memory-card');
    memoryCards.forEach(card => {
        card.addEventListener('click', function(event) {
            // Don't trigger the animation if clicking on buttons
            if (event.target.closest('.media-toggle')) {
                return;
            }
            
            // Add a gentle bounce effect when clicked
            this.style.animation = 'bounce 0.5s';
            setTimeout(() => {
                this.style.animation = '';
            }, 500);
            
            // Create a burst of hearts when clicked
            for (let i = 0; i < 5; i++) {
                setTimeout(() => {
                    createHeartAt(event.clientX, event.clientY);
                }, i * 100);
            }
        });
    });
});

// ===== STANDALONE FUNCTIONS =====
// Timeline navigation
const timeline = document.querySelector('.timeline');
const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');

nextButton.addEventListener('click', () => {
    timeline.scrollBy({
        left: 300,
        behavior: 'smooth'
    });
});

prevButton.addEventListener('click', () => {
    timeline.scrollBy({
        left: -300,
        behavior: 'smooth'
    });
});

// Create floating hearts
function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart-float');
    heart.innerHTML = '❤️';
    
    // Random position
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.top = Math.random() * 100 + 'vh';
    
    // Random size
    const size = Math.random() * 20 + 10;
    heart.style.fontSize = size + 'px';
    
    // Random animation duration
    const duration = Math.random() * 10 + 5;
    heart.style.animationDuration = duration + 's';
    
    document.body.appendChild(heart);
    
    // Remove after animation completes
    setTimeout(() => {
        heart.remove();
    }, duration * 1000);
}

// Create hearts periodically
setInterval(createHeart, 1000);

// Create initial set of hearts
for (let i = 0; i < 10; i++) {
    setTimeout(createHeart, 100 * i);
}

// Function to create heart at specific position
function createHeartAt(x, y) {
    const heart = document.createElement('div');
    heart.classList.add('heart-float');
    heart.innerHTML = '❤️';
    
    // Position at click coordinates
    heart.style.left = (x - 10) + 'px';
    heart.style.top = (y - 10) + 'px';
    
    // Random size
    const size = Math.random() * 15 + 15;
    heart.style.fontSize = size + 'px';
    
    // Random animation duration
    const duration = Math.random() * 5 + 3;
    heart.style.animationDuration = duration + 's';
    
    document.body.appendChild(heart);
    
    // Remove after animation completes
    setTimeout(() => {
        heart.remove();
    }, duration * 1000);
}

// Video toggle functionality
document.addEventListener('DOMContentLoaded', function() {
    console.log('Initializing video card functionality...');
    const toggleButtons = document.querySelectorAll('.toggle-btn');
    
    toggleButtons.forEach(button => {
        button.addEventListener('click', function() {
            console.log('Toggle button clicked:', this.getAttribute('data-media'));
            
            // Get parent card
            const card = this.closest('.memory-card');
            
            // Remove active class from all buttons in this card
            card.querySelectorAll('.toggle-btn').forEach(btn => {
                btn.classList.remove('active');
            });
            
            // Add active class to clicked button
            this.classList.add('active');
            
            // Get the media type to show
            const mediaType = this.getAttribute('data-media');
            
            // Hide all media containers in this card
            card.querySelectorAll('.media-container').forEach(container => {
                container.classList.remove('active');
            });
            
            // Show the selected media container
            const containerToShow = card.querySelector(`.${mediaType}-container`);
            console.log('Container to show:', mediaType, containerToShow);
            
            if (containerToShow) {
                containerToShow.classList.add('active');
                
                // If switching to video, reload and play the video
                if (mediaType === 'video') {
                    const video = containerToShow.querySelector('video');
                    if (video) {
                        console.log('Video element found:', video);
                        
                        // Check if the video has proper sources
                        const sources = video.querySelectorAll('source');
                        if (sources.length > 0) {
                            sources.forEach(source => {
                                const src = source.getAttribute('src');
                                console.log('Video source:', src);
                                
                                // Check if src is a placeholder or empty
                                if (!src || src === 'your-video-filename.mov' || src === 'your-video-filename.mp4') {
                                    console.error('Video source is placeholder or empty');
                                }
                            });
                        } else {
                            console.error('No source elements found in video');
                        }
                        
                        // Force reload the video
                        video.load();
                        
                        // Try to play the video
                        try {
                            const playPromise = video.play();
                            if (playPromise !== undefined) {
                                playPromise.catch(error => {
                                    console.log('Auto-play prevented. Error:', error);
                                });
                            }
                        } catch (e) {
                            console.error('Error playing video:', e);
                        }
                    } else {
                        console.error('No video element found in container');
                    }
                }
            } else {
                console.error(`Container with class "${mediaType}-container" not found`);
            }
        });
    });
});