document.getElementById('modeToggle')?.addEventListener('change', () => {
  document.body.classList.toggle('light-mode');
});

document.querySelectorAll('.clickable').forEach(card => {
  card.addEventListener('click', () => {
    const id = card.getAttribute('data-id');
    window.location.href = `trailer.html?id=${id}`;
  });
});

document.querySelectorAll('.add-fav').forEach(btn => {
  btn.addEventListener('click', (e) => {
    const id = e.target.getAttribute('data-id');
    let favs = JSON.parse(localStorage.getItem("favorites") || "[]");
    if (!favs.includes(id)) {
      favs.push(id);
      localStorage.setItem("favorites", JSON.stringify(favs));
      alert("Added to Favorites!");
    } else {
      alert("Already in Favorites!");
    }
  });
});

const searchInput = document.getElementById("searchInput");
const categoryFilter = document.getElementById("categoryFilter");
const movieItems = document.querySelectorAll(".movie-item");

function filterMovies() {
  const search = searchInput.value.toLowerCase();
  const category = categoryFilter.value;

  movieItems.forEach(item => {
    const title = item.getAttribute("data-title").toLowerCase();
    const genre = item.getAttribute("data-genre");

    const matchesSearch = title.includes(search);
    const matchesCategory = !category || genre === category;

    item.style.display = (matchesSearch && matchesCategory) ? "block" : "none";
  });
}

searchInput?.addEventListener("input", filterMovies);
categoryFilter?.addEventListener("change", filterMovies);
