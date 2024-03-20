const cursor = document.querySelector('.cursor');
var timeout;

document.addEventListener('mousemove', (e) => {
    let x = e.pageX;
    let y = e.pageY;

    cursor.style.top = y + 'px';
    cursor.style.left = x + 'px';
    cursor.style.display = 'block';
    cursor.style.opacity = 1;

    // Cursor effects on mouse stopped
    function mouseStopped() {
        cursor.style.opacity = 0;
    }

    clearTimeout(timeout);
    timeout = setTimeout(mouseStopped, 1000);
})


// Cursor effects on mouseout
document.addEventListener('mouseout', (e) => {
    cursor.style.display = "none";
})

// Cursor effects on click
document.addEventListener('mousedown', (e) => {
    cursor.classList.add('clicked');
})

document.addEventListener('mouseup', () => {
    cursor.classList.remove('clicked');
})