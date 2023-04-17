            /*For moving the elements on the about page*/
            document.addEventListener('DOMContentLoaded', () => {
            const container = document.querySelector('.interest-container');
            const interests = document.querySelectorAll('.interest');
            
            container.addEventListener('mousemove', (event) => {
              const containerRect = container.getBoundingClientRect();
              const centerX = containerRect.left + containerRect.width / 2;
              const centerY = containerRect.right + containerRect.height / 2;
              const mouseX = event.clientX;
              const mouseY = event.clientY;
              const distanceX = mouseX - centerX;
              const distanceY = mouseY - centerY;
            
              interests.forEach((interest) => {
                const factor = 0.1; 
                const translateX = distanceX * factor * interest.dataset.translation;
                interest.style.transform = `translate(${translateX}px`;
              });
            });
            
            
            interests.forEach((interest, index) => {
              interest.dataset.translation = (index % 2 === 0) ? -1 : 1;
            });
          });
