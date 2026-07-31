// Wait for the HTML document to fully load before running scripts
document.addEventListener('DOMContentLoaded', () => {
    
    // --- MATRIX RAIN BACKGROUND EFFECT ---
    const canvas = document.getElementById('matrixCanvas');
    const ctx = canvas.getContext('2d');

    // Set canvas dimensions to match the window size
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Characters used for the falling matrix rain effect
    const characters = 'アカサタナハマヤラワ0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ$#@%&*';
    const fontSize = 16;
    let columns = Math.floor(canvas.width / fontSize);

    // Track the vertical position of each column drop
    const drops = [];
    for (let i = 0; i < columns; i++) {
        drops[i] = 1;
    }

    // Color options for the matrix effect
    let matrixColor = '#00ff66';
    const colorOptions = ['#00ff66', '#00bcd4', '#9c27b0', '#ffeb3b', '#ff5722'];
    let colorIndex = 0;

    // Function to draw the matrix rain animation frame
    function drawMatrix() {
        // Creates a fading trail effect by drawing a semi-transparent black rectangle over the frame
        ctx.fillStyle = 'rgba(5, 5, 5, 0.05)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        ctx.fillStyle = matrixColor;
        ctx.font = fontSize + 'px monospace';

        // Loop through each drop and draw a random character
        for (let i = 0; i < drops.length; i++) {
            const text = characters.charAt(Math.floor(Math.random() * characters.length));
            ctx.fillText(text, i * fontSize, drops[i] * fontSize);

            // Reset drop back to the top once it falls past the bottom of the screen
            if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
                drops[i] = 0;
            }
            drops[i]++;
        }
    }

    // Run the animation loop every 30 milliseconds
    setInterval(drawMatrix, 30);

    // Dynamically adjust canvas size if the browser window size changes
    window.addEventListener('resize', () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    });


    // --- INTERACTIVE BUTTON FUNCTIONALITY ---
    const colorButton = document.getElementById('colorButton');

    // Listen for a 'click' event to cycle through cool matrix rain colors
    colorButton.addEventListener('click', () => {
        colorIndex = (colorIndex + 1) % colorOptions.length;
        matrixColor = colorOptions[colorIndex];
        
        console.log(`Matrix color changed to: ${matrixColor}`);
    });
});
