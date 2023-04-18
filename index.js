document.addEventListener('DOMContentLoaded', () => {
  const container = document.querySelector('.interest-container');
  const interests = document.querySelectorAll('.interest');
  let lastX = 0;

  container.addEventListener('mousemove', (event) => {
    const containerRect = container.getBoundingClientRect();
    const centerX = containerRect.left + containerRect.width / 2;
    const mouseX = event.clientX;

    // Check if the mouse has moved to the left or right side of the container
    if (mouseX < centerX && lastX >= centerX) {
      moveInterests(-1); 
    } else if (mouseX > centerX && lastX <= centerX) {
      moveInterests(1); 
    }

    lastX = mouseX;
  });

  // Move the interests to the left or right based on the given direction
  function moveInterests(direction) {
    interests.forEach((interest, index) => {
      const factor = (index % 2 === 0) ? 0.3 : 0.35; // adjust this to control the amount of translation
      const translateX = direction * container.offsetWidth * factor;
      interest.style.transform = `translateX(${translateX}px)`;
    });
  }
});
