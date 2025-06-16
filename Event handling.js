// HTML: <button id="alert-btn">Click Me</button>
document.getElementById('alert-btn').addEventListener('click', () => {
  alert('Button clicked!');
});

// HTML: <input id="search" type="text">
document.getElementById('search').addEventListener('input', (e) => {
  console.log(`Searching for: ${e.target.value}`); // Logs keystrokes
});

// HTML: <ul id="task-list"><li>Task 1</li></ul>
document.getElementById('task-list').addEventListener('click', (e) => {
  if (e.target.tagName === 'LI') {
    e.target.style.textDecoration = 'line-through'; // Strikes through clicked task
  }
});

// HTML: <div id="outer"><button id="inner">Click</button></div>
document.getElementById('inner').addEventListener('click', (e) => {
  e.stopPropagation(); // Prevents the outer div's click handler from firing
  console.log('Button clicked!');
});

document.getElementById('outer').addEventListener('click', () => {
  console.log('Div clicked!'); // Won't run if button is clicked
});