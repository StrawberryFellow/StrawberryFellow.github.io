// This file handles the feedback form submission and thank you animation
import ConfettiJs from 'confetti-js';
import * as config from './config.js';

document.addEventListener('DOMContentLoaded', () => {
    // Get the form and thank you message elements
    const feedbackForm = document.getElementById('feedbackForm');
    const thankYouMessage = document.getElementById('thankYouMessage');
    const confettiCanvas = document.getElementById('confetti-canvas-feedback');
    
    let confetti;
    // Initialize confetti if the canvas exists
    if (confettiCanvas) {
        confetti = new ConfettiJs({
            target: 'confetti-canvas-feedback',
            rotate: config.rotate,         // Whether confetti should rotate
            max: config.maxConfetti,       // Maximum number of confetti pieces
            size: config.size,             // Size of confetti pieces
        });
    }
    
    // Add submit event to the form if it exists
    if (feedbackForm) {
        feedbackForm.addEventListener('submit', (e) => {
            e.preventDefault();  // Prevent the default form submission
            
            // In a real application, you would send the form data to a server here
            // For example: fetch('/api/feedback', {method: 'POST', body: new FormData(feedbackForm)})
            
            // Hide the form and show the thank you message
            feedbackForm.style.display = 'none';
            thankYouMessage.style.display = 'block';
            
            // Start confetti celebration animation
            if (confetti) {
                confetti.start();
                setTimeout(() => {
                    confetti.stop();
                }, config.confettiDuration);  // Duration is set in config.js
            }
        });
    }
});