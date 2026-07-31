// Wait for the HTML document to fully load before running the script
document.addEventListener('DOMContentLoaded', () => {
    
    // Grab the button element from our HTML by its ID
    const colorButton = document.getElementById('colorButton');

    // Array of fun background colors to cycle through
    const colors = ['#f4f7f6', '#ffeaa7', '#dfe6e9', '#fab1a0', '#55efc4'];
    let colorIndex = 0;

    // Listen for a 'click' event on the button
    colorButton.addEventListener('click', () => {
        // Increment index and loop back to 0 if we reach the end of the array
        colorIndex = (colorIndex + 1) % colors.length;
        
        // Change the background color of the body
        document.body.style.backgroundColor = colors[colorIndex];
        
        console.log(`Background color changed to: ${colors[colorIndex]}`);
    });
});
