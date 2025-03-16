const body = document.querySelector("body");

body.addEventListener("mousemove", (event) => {
   createHeart(event.offsetX, event.offsetY);
});


let isTouch = false;

document.body.addEventListener('touchstart', function(e) {
   isTouch = true;
   handleTouch(e);
}, { passive: false });

document.body.addEventListener('touchmove', function(e) {
   if (isTouch) {
      handleTouch(e);
   }
}, { passive: false });

document.body.addEventListener('touchend', function() {
   isTouch = false;
}, { passive: false });

function handleTouch(event) {
   event.preventDefault();
   
   if (event.touches && event.touches.length > 0) {
      const touch = event.touches[0];
      const touchX = touch.clientX;
      const touchY = touch.clientY;
      
      createHeart(touchX, touchY);
   }
}

function createHeart(x, y) {
   const spanElement = document.createElement("span");
   spanElement.style.left = x + "px";
   spanElement.style.top = y + "px";
   body.appendChild(spanElement);
   
   const size = Math.random() * 100;
   spanElement.style.width = size + "px";
   spanElement.style.height = size + "px";

   setTimeout(() => {
      spanElement.remove();
   }, 3000);
}