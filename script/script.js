function animateBox(day) {
    const box = document.getElementById('box');
    box.style.backgroundColor = getRandomColor();
    box.style.opacity = '1';
    box.style.transform = 'translateY(0)';

    setTimeout(() => {
        box.style.opacity = '0';
        box.style.transform = 'translateY(-100%)';
    }, 1000);
}

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
