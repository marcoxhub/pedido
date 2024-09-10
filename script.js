document.addEventListener('DOMContentLoaded', () => {
    const noButton = document.getElementById('noButton');
    const yesButton = document.getElementById('yesButton');
    const container = document.querySelector('.container');

    function getRandomPosition() {
        const containerRect = container.getBoundingClientRect();
        const buttonRect = noButton.getBoundingClientRect();
        const maxX = containerRect.width - buttonRect.width;
        const maxY = containerRect.height - buttonRect.height;

        const x = Math.random() * maxX;
        const y = Math.random() * maxY;

        return { x, y };
    }

    function moveButton() {
        const { x, y } = getRandomPosition();
        noButton.style.position = 'absolute'; 
        noButton.style.left = `${x}px`;
        noButton.style.top = `${y}px`;
    }

    noButton.addEventListener('click', () => { window.location.href = 'https://www.youtube.com/watch?v=wEWF2xh5E8s'
        moveButton();
    });

    yesButton.addEventListener('click', () => {
        window.location.href = 'https://www.youtube.com/watch?v=izGwDsrQ1eQ'; 
    });

    
    setInterval(moveButton, 200);
});


