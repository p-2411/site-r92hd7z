// Alternative inline implementation
// Use this if you prefer to modify your existing code directly

document.addEventListener('DOMContentLoaded', function() {
    // 1. Get the card element
    const card = document.querySelector('.card');
    
    // 2. Create audio element programmatically if it doesn't exist
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
    
    // 3. Track if music has been played
    let musicPlayed = false;
    
    // 4. Define the unified function for both flip and music
    function flipCardAndPlayMusic() {
        // Flip the card
        this.classList.toggle('flipped');
        
        // Check if card is now flipped to back and music hasn't played yet
        if (this.classList.contains('flipped') && !musicPlayed) {
            musicPlayed = true;
            cardMusic.play().catch(e => {
                console.log("Music playback error:", e);
                musicPlayed = false;
            });
        }
    }
    
    // 5. Remove any existing listeners to avoid conflicts
    const newCard = card.cloneNode(true);
    card.parentNode.replaceChild(newCard, card);
    
    // 6. Add our unified handler to the new card
    document.querySelector('.card').addEventListener('click', flipCardAndPlayMusic);
});

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

// Add animations
document.addEventListener('DOMContentLoaded', function() {
    // Add pulse animation
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
    
    // Video toggle functionality
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

// Alternative JavaScript-only implementation
// Add this to your JavaScript file instead of the HTML script version
/*
document.addEventListener('DOMContentLoaded', function() {
    // Create audio element programmatically
    const backgroundMusic = document.createElement('audio');
    backgroundMusic.id = 'background-music';
    
    // Add source
    const source = document.createElement('source');
    source.src = './music.mp3';
    source.type = 'audio/mpeg';
    
    // Add fallback text
    backgroundMusic.appendChild(source);
    backgroundMusic.appendChild(document.createTextNode('Your browser does not support the audio element.'));
    
    // Add to document but keep hidden
    backgroundMusic.style.display = 'none';
    document.body.appendChild(backgroundMusic);
    
    // Set up card flip with music
    const card = document.querySelector('.card');
    let musicPlayed = false;
    
    // Safely integrate with existing flip functionality
    const existingClickHandler = card.onclick;
    card.onclick = null;
    
    // New handler that includes music
    function cardFlipWithMusic() {
        // Toggle flipped class (this is handled in your existing code, but we include it for safety)
        this.classList.toggle('flipped');
        
        // Only play music on initial flip to the back, not when returning to front
        if (this.classList.contains('flipped') && !musicPlayed) {
            musicPlayed = true;
            
            // Delay to match the flip animation
            setTimeout(() => {
                backgroundMusic.play().catch(error => {
                    console.log("Could not play audio:", error);
                    musicPlayed = false; // Reset so user can try again
                });
            }, 500);
        }
    }
    
    // Ensure we don't create duplicate listeners
    card.addEventListener('click', cardFlipWithMusic);
    
    // If there was an existing onclick handler, preserve its functionality
    if (typeof existingClickHandler === 'function') {
        card.addEventListener('click', function(e) {
            existingClickHandler.call(this, e);
        });
    }
});*/