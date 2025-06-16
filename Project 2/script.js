// Movie Database Array
let movies = [];

// DOM Elements
const moviesContainer = document.getElementById('movies-container');

// Add Movie (CREATE)
function addMovie() {
  const title = document.getElementById('title').value;
  const genre = document.getElementById('genre').value;
  const year = document.getElementById('year').value;
  const poster = document.getElementById('poster').value || 'https://via.placeholder.com/200x300?text=No+Poster';

  if (title && genre && year) {
    const movie = {
      id: Date.now(), // Unique ID for each movie
      title,
      genre,
      year,
      poster
    };
    movies.push(movie);
    displayMovies();
    // Clear form
    document.getElementById('title').value = '';
    document.getElementById('genre').value = '';
    document.getElementById('year').value = '';
    document.getElementById('poster').value = '';
  } else {
    alert('Please fill in all required fields!');
  }
}

// Display Movies (READ)
function displayMovies(moviesToDisplay = movies) {
  moviesContainer.innerHTML = '';

  if (moviesToDisplay.length === 0) {
    moviesContainer.innerHTML = '<p class="no-movies">No movies found. Add some!</p>';
    return;
  }

  moviesToDisplay.forEach(movie => {
    const movieCard = document.createElement('div');
    movieCard.className = 'movie-card';
    movieCard.innerHTML = `
      <img src="${movie.poster}" alt="${movie.title}" class="movie-poster">
      <div class="movie-info">
        <h3>${movie.title}</h3>
        <p><strong>Genre:</strong> ${movie.genre}</p>
        <p><strong>Year:</strong> ${movie.year}</p>
        <div class="actions">
          <button class="edit-btn" onclick="editMovie(${movie.id})">Edit</button>
          <button class="delete-btn" onclick="deleteMovie(${movie.id})">Delete</button>
        </div>
      </div>
    `;
    moviesContainer.appendChild(movieCard);
  });
}

// Delete Movie (DELETE)
function deleteMovie(id) {
  movies = movies.filter(movie => movie.id !== id);
  displayMovies();
}

// Edit Movie (UPDATE)
function editMovie(id) {
  const movie = movies.find(movie => movie.id === id);
  if (!movie) return;

  const newTitle = prompt('Edit title:', movie.title);
  const newGenre = prompt('Edit genre:', movie.genre);
  const newYear = prompt('Edit year:', movie.year);
  const newPoster = prompt('Edit poster URL:', movie.poster);

  if (newTitle && newGenre && newYear) {
    movie.title = newTitle;
    movie.genre = newGenre;
    movie.year = newYear;
    movie.poster = newPoster || movie.poster;
    displayMovies();
  }
}

// Search Movies
function searchMovies() {
  const query = document.getElementById('search').value.toLowerCase();
  const filtered = movies.filter(movie => 
    movie.title.toLowerCase().includes(query) || 
    movie.genre.toLowerCase().includes(query)
  );
  displayMovies(filtered);
}

// Initialize
displayMovies();