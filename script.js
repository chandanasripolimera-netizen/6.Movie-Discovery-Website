
"use strict";

// CineScope movie collection: 36 movies
const movies = [
  // Telugu movies
  { id: 1, title: "RRR", year: 2022, genre: "Action", language: "Telugu", rating: 7.8, description: "Two revolutionaries fight for freedom and friendship." },
  { id: 2, title: "Baahubali 2", year: 2017, genre: "Adventure", language: "Telugu", rating: 8.2, description: "A prince fights to reclaim his kingdom." },
  { id: 3, title: "Pushpa: The Rise", year: 2021, genre: "Action", language: "Telugu", rating: 7.6, description: "A smuggler rises through the ranks." },
  { id: 4, title: "Sita Ramam", year: 2022, genre: "Romance", language: "Telugu", rating: 8.5, description: "A beautiful romance unfolds through letters." },
  { id: 5, title: "Hi Nanna", year: 2023, genre: "Romance", language: "Telugu", rating: 8.2, description: "A father and daughter share a touching story." },
  { id: 6, title: "Geetha Govindam", year: 2018, genre: "Romance", language: "Telugu", rating: 7.7, description: "A romantic comedy full of misunderstandings." },
  { id: 7, title: "Fidaa", year: 2017, genre: "Romance", language: "Telugu", rating: 7.4, description: "Two strong personalities find love." },
  { id: 8, title: "Arjun Reddy", year: 2017, genre: "Romance", language: "Telugu", rating: 7.8, description: "An intense story of passion and heartbreak." },
  { id: 9, title: "Jersey", year: 2019, genre: "Drama", language: "Telugu", rating: 8.5, description: "A former cricketer returns for his son." },
  { id: 10, title: "Rangasthalam", year: 2018, genre: "Drama", language: "Telugu", rating: 8.2, description: "A village story of courage and justice." },
  { id: 11, title: "Ala Vaikunthapurramuloo", year: 2020, genre: "Action", language: "Telugu", rating: 7.3, description: "A young man discovers the truth about his family." },
  { id: 12, title: "Magadheera", year: 2009, genre: "Adventure", language: "Telugu", rating: 7.7, description: "Two lovers are connected across lifetimes." },
  { id: 13, title: "Eega", year: 2012, genre: "Adventure", language: "Telugu", rating: 7.7, description: "A man returns as a fly to protect his love." },
  { id: 14, title: "Bommarillu", year: 2006, genre: "Romance", language: "Telugu", rating: 8.0, description: "A young man seeks independence and true love." },
  { id: 15, title: "Arya", year: 2004, genre: "Romance", language: "Telugu", rating: 7.8, description: "A carefree young man believes in unconditional love." },
  { id: 16, title: "Orange", year: 2010, genre: "Romance", language: "Telugu", rating: 6.6, description: "A modern take on love and forever." },
  { id: 17, title: "Tholi Prema", year: 2018, genre: "Romance", language: "Telugu", rating: 7.3, description: "A young couple discovers love and growing up." },
  { id: 18, title: "Darling", year: 2010, genre: "Romance", language: "Telugu", rating: 7.1, description: "Friendship and romance take an unexpected turn." },

  // Hollywood and international movies
  { id: 19, title: "Interstellar", year: 2014, genre: "Sci-Fi", language: "English", rating: 8.7, description: "A journey beyond the stars to save humanity." },
  { id: 20, title: "Inception", year: 2010, genre: "Action", language: "English", rating: 8.8, description: "A thief enters dreams to steal secrets." },
  { id: 21, title: "The Dark Knight", year: 2008, genre: "Action", language: "English", rating: 9.0, description: "Batman faces Gotham's most dangerous criminal." },
  { id: 22, title: "Avatar", year: 2009, genre: "Adventure", language: "English", rating: 7.9, description: "A distant world changes one man's destiny." },
  { id: 23, title: "The Matrix", year: 1999, genre: "Sci-Fi", language: "English", rating: 8.7, description: "Discover the truth behind reality." },
  { id: 24, title: "The Shawshank Redemption", year: 1994, genre: "Drama", language: "English", rating: 9.3, description: "Hope survives in an unlikely place." },
  { id: 25, title: "Spider-Man: Into the Spider-Verse", year: 2018, genre: "Animation", language: "English", rating: 8.4, description: "A young hero discovers the multiverse." },
  { id: 26, title: "Dune: Part Two", year: 2024, genre: "Adventure", language: "English", rating: 8.5, description: "A desert planet holds the fate of an empire." },

  // Love stories
  { id: 27, title: "The Notebook", year: 2004, genre: "Romance", language: "English", rating: 7.8, description: "A timeless romance survives the years." },
  { id: 28, title: "La La Land", year: 2016, genre: "Romance", language: "English", rating: 8.0, description: "Two dreamers fall in love in Los Angeles." },
  { id: 29, title: "Titanic", year: 1997, genre: "Romance", language: "English", rating: 7.9, description: "An unforgettable romance aboard a doomed ship." },
  { id: 30, title: "Me Before You", year: 2016, genre: "Romance", language: "English", rating: 7.4, description: "An unexpected connection changes two lives." },
  { id: 31, title: "Pride & Prejudice", year: 2005, genre: "Romance", language: "English", rating: 7.8, description: "Pride and misunderstandings give way to love." },
  { id: 32, title: "The Fault in Our Stars", year: 2014, genre: "Romance", language: "English", rating: 7.7, description: "Two teenagers find love and meaning together." },
  { id: 33, title: "Your Name", year: 2016, genre: "Romance", language: "Japanese", rating: 8.4, description: "Two strangers connect across time and space." },
  { id: 34, title: "Five Feet Apart", year: 2019, genre: "Romance", language: "English", rating: 7.2, description: "Two young people fall in love against the odds." },

  // More favorites
  { id: 35, title: "Avengers: Endgame", year: 2019, genre: "Action", language: "English", rating: 8.4, description: "Heroes unite for one final battle." },
  { id: 36, title: "Coco", year: 2017, genre: "Animation", language: "English", rating: 8.4, description: "A young musician discovers family, music and memory." }
];

const movieGrid = document.getElementById("movie-grid");
const watchGrid = document.getElementById("watch-grid");
const searchInput = document.getElementById("search");
const filterContainer = document.getElementById("filters");
const resultCount = document.getElementById("result-count");
const emptyState = document.getElementById("empty-state");
const watchEmpty = document.getElementById("watch-empty");
const watchCount = document.getElementById("watch-count");

let activeFilter = "All";
let searchTerm = "";

function loadWatchlist() {
  try {
    const stored = JSON.parse(
      localStorage.getItem("cinescope-watchlist") || "[]"
    );

    if (!Array.isArray(stored)) return [];

    return stored.filter(id =>
      movies.some(movie => movie.id === id)
    );
  } catch (error) {
    console.warn("Could not load saved movies.", error);
    return [];
  }
}

let watchlist = loadWatchlist();

function saveWatchlist() {
  try {
    localStorage.setItem(
      "cinescope-watchlist",
      JSON.stringify(watchlist)
    );
  } catch (error) {
    console.error("Could not save watchlist.", error);
    alert("Your browser could not save the watchlist.");
  }
}

function createMovieCard(movie) {
  const isSaved = watchlist.includes(movie.id);

  const card = document.createElement("article");
  card.className = "movie-card";

  const poster = document.createElement("div");
  poster.className = "poster";

  // Decorative poster art: no external image needed.
  const posterTitle = document.createElement("span");
  posterTitle.className = "poster-title";
  posterTitle.textContent = movie.title;

  const posterNumber = document.createElement("span");
  posterNumber.className = "poster-number";
  posterNumber.textContent = `FILM NO. ${String(movie.id).padStart(2, "0")}`;

  const rating = document.createElement("span");
  rating.className = "rating";
  rating.textContent = `★ ${movie.rating.toFixed(1)}`;

  // Give cards slightly different red cinematic gradients.
  const hues = [350, 0, 8, 345, 355, 15];
  const hue = hues[movie.id % hues.length];
  poster.style.background =
    `radial-gradient(ellipse at 50% 25%, hsla(${hue}, 75%, 42%, .48), transparent 65%),` +
    `linear-gradient(145deg, hsl(${hue}, 40%, 17%), #100b0d 70%, #080707)`;

  poster.append(posterTitle, posterNumber, rating);

  const info = document.createElement("div");
  info.className = "movie-info";

  const title = document.createElement("h3");
  title.textContent = movie.title;

  const meta = document.createElement("p");
  meta.className = "movie-meta";
  meta.textContent =
    `${movie.year} · ${movie.language} · ${movie.genre}`;

  const description = document.createElement("p");
  description.className = "movie-description";
  description.textContent = movie.description;

  const saveButton = document.createElement("button");
  saveButton.type = "button";
  saveButton.className = `card-btn${isSaved ? " saved" : ""}`;
  saveButton.textContent = isSaved ? "♥ Saved" : "+ Add to Watchlist";

  saveButton.addEventListener("click", () => {
    if (watchlist.includes(movie.id)) {
      watchlist = watchlist.filter(id => id !== movie.id);
    } else {
      watchlist.push(movie.id);
    }

    saveWatchlist();
    renderMovies();
    renderWatchlist();
  });

  info.append(title, meta, description, saveButton);
  card.append(poster, info);

  return card;
}

function renderMovies() {
  const term = searchTerm.toLowerCase();

  const filteredMovies = movies.filter(movie => {
    const matchesFilter =
      activeFilter === "All" ||
      movie.language === activeFilter ||
      movie.genre === activeFilter;

    const searchable = [
      movie.title,
      movie.language,
      movie.genre,
      String(movie.year)
    ].join(" ").toLowerCase();

    return matchesFilter && searchable.includes(term);
  });

  movieGrid.replaceChildren(
    ...filteredMovies.map(createMovieCard)
  );

  resultCount.textContent =
    `Showing ${filteredMovies.length} of ${movies.length} movies`;

  emptyState.hidden = filteredMovies.length > 0;
}

function renderWatchlist() {
  const savedMovies = movies.filter(movie =>
    watchlist.includes(movie.id)
  );

  watchGrid.replaceChildren(
    ...savedMovies.map(createMovieCard)
  );

  watchCount.textContent = String(savedMovies.length);
  watchEmpty.hidden = savedMovies.length > 0;
}

searchInput.addEventListener("input", event => {
  searchTerm = event.target.value.trim();
  renderMovies();
});

filterContainer.addEventListener("click", event => {
  const button = event.target.closest("button[data-filter]");
  if (!button) return;

  activeFilter = button.dataset.filter;

  filterContainer.querySelectorAll("button[data-filter]").forEach(item => {
    const selected = item === button;
    item.classList.toggle("active", selected);
    item.setAttribute("aria-pressed", String(selected));
  });

  renderMovies();
});

// Initialize the website.
renderMovies();
renderWatchlist();

console.log(`CineScope loaded successfully: ${movies.length} movies.`);
