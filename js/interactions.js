// Add movement to the character
const character = document.querySelector('#moving-character');

// Initial position
let position = { x: 0, z: -3 };

// Function to move character
function moveCharacter(direction) {
  if (direction === 'forward') position.z -= 0.5;
  if (direction === 'backward') position.z += 0.5;
  if (direction === 'left') position.x -= 0.5;
  if (direction === 'right') position.x += 0.5;

  // Update position
  character.setAttribute('position', `${position.x} 0 ${position.z}`);
}

// Keyboard controls
document.addEventListener('keydown', (event) => {
  switch (event.key) {
    case 'ArrowUp': // Move forward
      moveCharacter('forward');
      break;
    case 'ArrowDown': // Move backward
      moveCharacter('backward');
      break;
    case 'ArrowLeft': // Move left
      moveCharacter('left');
      break;
    case 'ArrowRight': // Move right
      moveCharacter('right');
      break;
    default:
      break;
  }
});
