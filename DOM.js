// HTML: <div id="container"></div>
const container = document.getElementById('container');
const newButton = document.createElement('button');
newButton.textContent = 'Click Me';
container.appendChild(newButton); // Adds button to the page

// HTML: <li class="item">Item 1</li> <li class="item">Item 2</li>
const items = document.querySelectorAll('.item');
items.forEach((item, index) => {
  item.textContent = `Item ${index + 1}: Updated!`;
});

// HTML: <p id="greeting">Hello</p>
const greeting = document.getElementById('greeting');
greeting.textContent = 'Hello, DOM!'; // Updates the text
greeting.style.color = 'blue';       // Changes color