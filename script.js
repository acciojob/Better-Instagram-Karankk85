// Select all image divs
const images = document.querySelectorAll('.image');

// Track the dragged div
let draggedImage = null;

// Add event listeners for each image div
images.forEach((imgDiv, index) => {
  // Assign unique ids like div1, div2, etc.
  imgDiv.id = `div${index + 1}`;

  // When dragging starts, store the dragged element and set opacity
  imgDiv.addEventListener('dragstart', (e) => {
    draggedImage = e.target;
    setTimeout(() => {
      draggedImage.style.opacity = '0.5'; // Make the dragged element semi-transparent
    }, 0);
  });

  // When dragging ends, reset opacity
  imgDiv.addEventListener('dragend', () => {
    draggedImage.style.opacity = '1';
    draggedImage = null;
  });

  // Allow drop by preventing default behavior
  imgDiv.addEventListener('dragover', (e) => {
    e.preventDefault();
  });

  // Handle the drop and swap the images
  imgDiv.addEventListener('drop', (e) => {
    e.preventDefault();

    // Swap the background images if the dragged image is not the same as the target
    if (draggedImage !== imgDiv) {
      const draggedImageStyle = draggedImage.style.backgroundImage;
      draggedImage.style.backgroundImage = imgDiv.style.backgroundImage;
      imgDiv.style.backgroundImage = draggedImageStyle;
    }
  });
});
