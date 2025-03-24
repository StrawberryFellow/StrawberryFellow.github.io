// This file controls the confetti animation effect on various pages
import ConfettiJs from 'confetti-js';
import * as config from './config.js';

document.addEventListener('DOMContentLoaded', () => {
    // Get the button that triggers confetti
    const confettiButton = document.getElementById('confetti-button');
    // Get the canvas where confetti will be displayed
    const confettiCanvas = document.getElementById('confetti-canvas');
    let confetti;

    // Initialize the confetti if the canvas exists
    if (confettiCanvas) {
        confetti = new ConfettiJs({
            target: confettiCanvas,
            rotate: config.rotate,         // Whether confetti should rotate
            max: config.maxConfetti,       // Maximum number of confetti pieces
            size: config.size,             // Size of confetti pieces
            // Other options can be added here as needed
        });
    }

    // Add a click event to the button if both button and confetti exist
    if (confettiButton && confetti) {
        confettiButton.addEventListener('click', () => {
            // Start the confetti animation
            confetti.start();
            // Stop the animation after a set duration
            setTimeout(() => {
                confetti.stop();
            }, config.confettiDuration); // Duration is set in config.js
        });
    } else {
        console.error("Confetti button or canvas not found");
    }
});