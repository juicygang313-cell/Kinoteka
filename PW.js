const movies = [
    { id: 1,  title: "Побег из Шоушенка", genre: "Драма", year: 1994, director: "Фрэнк Дарабонт", rating: 9.1,
      description: "Банкир попадает в тюрьму за преступление, которого не совершал, и много лет не теряет надежду выйти на свободу." },
    { id: 2,  title: "Зелёная миля", genre: "Драма", year: 1999, director: "Фрэнк Дарабонт", rating: 9.1,
      description: "Надзиратель тюремного блока знакомится с заключённым, у которого есть необычный дар." },
    { id: 3,  title: "Форрест Гамп", genre: "Драма", year: 1994, director: "Роберт Земекис", rating: 8.9,
      description: "Простодушный парень из Алабамы случайно оказывается участником главных событий своей эпохи." },
    { id: 4,  title: "Один дома", genre: "Комедия", year: 1990, director: "Крис Коламбус", rating: 8.3,
      description: "Мальчика забыли дома на Рождество, и ему приходится защищать дом от двух грабителей." },
    { id: 5,  title: "Маска", genre: "Комедия", year: 1994, director: "Чак Рассел", rating: 8.0,
      description: "Скромный клерк находит маску, которая превращает его в неудержимого шутника." },
    { id: 6,  title: "1+1", genre: "Комедия", year: 2011, director: "Оливье Накаш, Эрик Толедано", rating: 8.8,
      description: "Богатый аристократ нанимает помощником парня с окраины, и они становятся друзьями." },
    { id: 7,  title: "Интерстеллар", genre: "Фантастика", year: 2014, director: "Кристофер Нолан", rating: 8.6,
      description: "Команда исследователей отправляется через червоточину искать новый дом для человечества." },
    { id: 8,  title: "Матрица", genre: "Фантастика", year: 1999, director: "Лана и Лилли Вачовски", rating: 8.5,
      description: "Хакер узнаёт, что привычный мир на самом деле компьютерная симуляция." },
    { id: 9,  title: "Начало", genre: "Фантастика", year: 2010, director: "Кристофер Нолан", rating: 8.7,
      description: "Специалист по кражам из снов получает задание не украсть идею, а внедрить её." },
    { id: 10, title: "Терминатор 2", genre: "Боевик", year: 1991, director: "Джеймс Кэмерон", rating: 8.3,
      description: "Киборг из будущего защищает подростка, от которого зависит судьба человечества." },
    { id: 11, title: "Безумный Макс: Дорога ярости", genre: "Боевик", year: 2015, director: "Джордж Миллер", rating: 7.8,
      description: "Погоня через пустыню в мире, где самое ценное — вода и бензин." },
    { id: 12, title: "Джон Уик", genre: "Боевик", year: 2014, director: "Чад Стахелски", rating: 7.2,
      description: "Бывший наёмный убийца возвращается в дело, чтобы отомстить обидчикам." },
    { id: 13, title: "Король Лев", genre: "Мультфильм", year: 1994, director: "Роджер Аллерс, Роб Минкофф", rating: 8.8,
      description: "Львёнок Симба проходит путь от изгнанника до короля саванны." },
    { id: 14, title: "ВАЛЛ·И", genre: "Мультфильм", year: 2008, director: "Эндрю Стэнтон", rating: 8.4,
      description: "Маленький робот-уборщик остаётся один на Земле и однажды встречает гостью из космоса." },
    { id: 15, title: "Тайна Коко", genre: "Мультфильм", year: 2017, director: "Ли Анкрич", rating: 8.7,
      description: "Мальчик, мечтающий стать музыкантом, попадает в красочный мир своих предков." },
    { id: 16, title: "Сияние", genre: "Ужасы", year: 1980, director: "Стэнли Кубрик", rating: 7.9,
      description: "Писатель с семьёй зимует в пустом отеле, и изоляция постепенно сводит его с ума." },
    { id: 17, title: "Оно", genre: "Ужасы", year: 2017, director: "Андрес Мускетти", rating: 7.3,
      description: "Компания подростков сталкивается с древним злом в облике клоуна." },
    { id: 18, title: "Тихое место", genre: "Ужасы", year: 2018, director: "Джон Красински", rating: 7.0,
      description: "Семья выживает в мире, где любой звук может привлечь смертельно опасных существ." },
    { id: 19, title: "Очень плохая училка", genre: "Комедия", year: 2011, director: "Джейк Кэздан", rating: 5.7,
    description: "Учительница, которой нет дела до школы и учеников, пытается добыть денег и окрутить богатого коллегу. В главной роли Кэмерон Диас." }
];
const genreIcons = {
    "Драма": "🎭",
    "Комедия": "😂",
    "Фантастика": "🚀",
    "Боевик": "💥",
    "Мультфильм": "🧸",
    "Ужасы": "👻"
};
const trailers = {
    1: "https://www.youtube.com/watch?v=kgAeKpAPOYk",
    2: "https://www.youtube.com/watch?v=TODt_q-_4C4",
    3: "https://www.youtube.com/watch?v=otmeAaifX04",
    4: "https://www.youtube.com/watch?v=NrCI4QXlpis",
    5: "https://www.youtube.com/watch?v=NrCI4QXlpis",
    6: "https://www.youtube.com/watch?v=f_S1YDJhcvU",
    7: "https://www.youtube.com/watch?v=m2vijtILDuk",
    8: "https://www.youtube.com/watch?v=YihPA42fdQ8",
    9: "https://www.youtube.com/watch?v=85Zz1CCXyDI",
    10: "https://www.youtube.com/watch?v=V2wMFn-z6ik",
    11: "http://youtube.com/watch?v=vlmD8RO_WtA",
    12: "https://www.youtube.com/watch?v=gLGaBb_EFkg",
    13: "https://www.youtube.com/watch?v=lFzVJEksoDY",
    14: "https://www.youtube.com/watch?v=ArYV7DBw-x8",
    15: "https://www.youtube.com/watch?v=HMnUSq3dC1g",
    16: "https://www.youtube.com/watch?v=NMSUEhDWXH0",
    17: "https://m.youtube.com/watch?v=bWkSUCMjPnc&pp=ygUV0L7QvdC-INGC0YDQtdC50LvQtdGA",
    18: "https://m.youtube.com/watch?v=Qbwx5ULSIDg&pp=ygUj0KLQuNC30L41INC80LXRgdGC0L4g0YLRgNC10LnQu9C10YA%3D",
    19: "https://m.youtube.com/watch?v=yYV2WzsC1sE&pp=ygUk0J7Rh9C10L3RjCDQv9C70L7RhdCw0Y8g0YPRh9C40LvQutCw"
};
let currentGenre = "all";
let searchText = "";
let sortMode = "default";
let favOnly = false;
let selectedId = null;
let favorites = [];
let recent = [];
const moviesList = document.getElementById("moviesList");
const emptyMessage = document.getElementById("emptyMessage");
const counter = document.getElementById("counter");
const detailsBlock = document.getElementById("details");
const detailsContent = document.getElementById("detailsContent");
const searchForm = document.getElementById("searchForm");
const searchInput = document.getElementById("searchInput");
const sortSelect = document.getElementById("sortSelect");
const resetBtn = document.getElementById("resetBtn");
const genreButtons = document.querySelectorAll(".genre-btn");
const favFilterBtn = document.getElementById("favFilterBtn");
const favCount = document.getElementById("favCount");
const randomBtn = document.getElementById("randomBtn");
const statTotal = document.getElementById("statTotal");
const statRating = document.getElementById("statRating");
const statGenres = document.getElementById("statGenres");
const topList = document.getElementById("topList");
const recentList = document.getElementById("recentList");
const inviteBtn = document.getElementById("inviteBtn");
const inviteBox = document.getElementById("inviteBox");
const inviteLink = document.getElementById("inviteLink");
const copyBtn = document.getElementById("copyBtn");
const inviteStatus = document.getElementById("inviteStatus");
const duoBanner = document.getElementById("duoBanner");
const duoBannerText = document.getElementById("duoBannerText");
const duoBannerClose = document.getElementById("duoBannerClose");
const trailerModal = document.getElementById("trailerModal");
const trailerTitle = document.getElementById("trailerTitle");
const trailerPlayer = document.getElementById("trailerPlayer");
const trailerClose = document.getElementById("trailerClose");
const themeToggle = document.getElementById("themeToggle");
const themeIcon = document.getElementById("themeIcon");
const themeText = document.getElementById("themeText");
const sidebar = document.getElementById("sidebar");
const overlay = document.getElementById("overlay");
const burgerBtn = document.getElementById("burgerBtn");
const sidebarClose = document.getElementById("sidebarClose");
function saveData(key, value) {
    try {
        localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
    }
}
function loadData(key, defaultValue) {
    try {
        const saved = localStorage.getItem(key);
        if (saved !== null) {
            return JSON.parse(saved);
        }
    } catch (error) {
    }
    return defaultValue;
}
function findMovie(id) {
    for (let i = 0; i < movies.length; i++) {
        if (movies[i].id === id) {
            return movies[i];
        }
    }
    return null;
}
function isFavorite(id) {
    return favorites.includes(id);
}
function hideBrokenImage(event) {
    event.target.remove();
}
function getFilteredMovies() {
    const result = [];
    for (let i = 0; i < movies.length; i++) {
        const movie = movies[i];
        const matchSearch = movie.title.toLowerCase().includes(searchText.toLowerCase());
        const matchGenre = currentGenre === "all" || movie.genre === currentGenre;
        const matchFav = !favOnly || isFavorite(movie.id);
        if (matchSearch && matchGenre && matchFav) {
            result.push(movie);
        }
    }
    if (sortMode === "rating") {
        result.sort(function (a, b) { return b.rating - a.rating; });
    } else if (sortMode === "year") {
        result.sort(function (a, b) { return b.year - a.year; });
    } else if (sortMode === "title") {
        result.sort(function (a, b) { return a.title.localeCompare(b.title, "ru"); });
    }

    return result;
}
function renderMovies() {
    const list = getFilteredMovies();
    moviesList.innerHTML = "";
    for (let i = 0; i < list.length; i++) {
        const movie = list[i];
        const card = document.createElement("li");
        card.className = "movie-card";
        card.style.animationDelay = i * 0.04 + "s";
        if (movie.id === selectedId) {
            card.classList.add("movie-card--active");
        }
        card.innerHTML =
            '<div class="movie-card__poster" data-genre="' + movie.genre + '">' +
                '<span>' + genreIcons[movie.genre] + '</span>' +
                '<img class="movie-card__img" src="posters/' + movie.id + '.jpg" alt="Постер: ' + movie.title + '">' +
                '<div class="movie-card__rating">⭐ ' + movie.rating + '</div>' +
            '</div>' +
            '<div class="movie-card__body">' +
                '<h3 class="movie-card__title">' + movie.title + '</h3>' +
                '<div class="movie-card__meta">' +
                    '<span class="movie-card__genre">' + movie.genre + '</span>' +
                    '<span class="movie-card__year">' + movie.year + '</span>' +
                '</div>' +
            '</div>';
        card.querySelector(".movie-card__img").addEventListener("error", hideBrokenImage);
        const favBtn = document.createElement("button");
        favBtn.type = "button";
        favBtn.className = "movie-card__fav";
        favBtn.title = "В избранное";
        if (isFavorite(movie.id)) {
            favBtn.textContent = "❤️";
            favBtn.classList.add("movie-card__fav--active");
        } else {
            favBtn.textContent = "🤍";
        }
        favBtn.addEventListener("click", function (event) {
            event.stopPropagation();
            toggleFavorite(movie.id);
        });
        card.querySelector(".movie-card__poster").appendChild(favBtn);
        card.addEventListener("click", function () {
            selectMovie(movie.id);
        });

        moviesList.appendChild(card);
    }
    counter.textContent = "Найдено фильмов: " + list.length;
    if (list.length === 0) {
        emptyMessage.classList.remove("hidden");
    } else {
        emptyMessage.classList.add("hidden");
    }
}
function showDetails(movie) {
    const filled = Math.round(movie.rating / 2);
    let stars = "";
    for (let i = 1; i <= 5; i++) {
        if (i <= filled) {
            stars += "★";
        } else {
            stars += "☆";
        }
    }
    detailsContent.innerHTML =
        '<div class="details__poster" data-genre="' + movie.genre + '">' +
            '<span>' + genreIcons[movie.genre] + '</span>' +
            '<img class="details__img" src="posters/' + movie.id + '.jpg" alt="Постер: ' + movie.title + '">' +
        '</div>' +
        '<h3 class="details__title">' + movie.title + '</h3>' +
        '<div class="details__stars">' + stars + '</div>' +
        '<div class="details__row"><span class="details__label">Жанр</span><span class="details__value">' + movie.genre + '</span></div>' +
        '<div class="details__row"><span class="details__label">Год</span><span class="details__value">' + movie.year + '</span></div>' +
        '<div class="details__row"><span class="details__label">Режиссёр</span><span class="details__value">' + movie.director + '</span></div>' +
        '<div class="details__row"><span class="details__label">Рейтинг</span><span class="details__value">' + movie.rating + ' / 10</span></div>' +
        '<p class="details__description">' + movie.description + '</p>' +
        '<button type="button" class="btn details__trailer" id="trailerBtn">▶ Смотреть трейлер</button>';
    detailsContent.querySelector(".details__img").addEventListener("error", hideBrokenImage);
    document.getElementById("trailerBtn").addEventListener("click", function () {
        openTrailer(movie);
    });
}
function selectMovie(id) {
    const movie = findMovie(id);
    if (movie === null) {
        return;
    }
    selectedId = id;
    showDetails(movie);
    addRecent(id);
    renderMovies();
    if (window.innerWidth <= 1200) {
        detailsBlock.scrollIntoView({ behavior: "smooth", block: "start" });
    }
}
function toggleFavorite(id) {
    if (isFavorite(id)) {
        favorites = favorites.filter(function (favId) {
            return favId !== id;
        });
    } else {
        favorites.push(id);
    }
    saveData("kinoteka-favorites", favorites);
    favCount.textContent = favorites.length;
    renderMovies();
}
function addRecent(id) {
    recent = recent.filter(function (recentId) {
        return recentId !== id;
    });
    recent.unshift(id);
    if (recent.length > 3) {
        recent.pop();
    }
    renderRecent();
}
function createMiniItem(movie) {
    const item = document.createElement("li");
    const button = document.createElement("button");
    button.type = "button";
    button.className = "mini-item";
    button.innerHTML =
        '<span class="mini-item__title">' + movie.title + '</span>' +
        '<span class="mini-item__rating">⭐ ' + movie.rating + '</span>';
    button.addEventListener("click", function () {
        selectMovie(movie.id);
    });
    item.appendChild(button);
    return item;
}
function renderRecent() {
    recentList.innerHTML = "";
    if (recent.length === 0) {
        recentList.innerHTML = '<li class="mini-list__empty">Пока пусто, выбери фильм из списка</li>';
        return;
    }
    for (let i = 0; i < recent.length; i++) {
        const movie = findMovie(recent[i]);
        recentList.appendChild(createMiniItem(movie));
    }
}
function renderTop() {
    const sorted = movies.slice().sort(function (a, b) {
        return b.rating - a.rating;
    });
    topList.innerHTML = "";
    for (let i = 0; i < 3 && i < sorted.length; i++) {
        topList.appendChild(createMiniItem(sorted[i]));
    }
}
function updateStats() {
    let sum = 0;
    const genres = [];
    for (let i = 0; i < movies.length; i++) {
        sum += movies[i].rating;
        if (!genres.includes(movies[i].genre)) {
            genres.push(movies[i].genre);
        }
    }
    statTotal.textContent = movies.length;
    statRating.textContent = (sum / movies.length).toFixed(1);
    statGenres.textContent = genres.length;
}
function updateGenreCounts() {
    for (let i = 0; i < genreButtons.length; i++) {
        const button = genreButtons[i];
        const genre = button.dataset.filter;
        let count = 0;
        for (let j = 0; j < movies.length; j++) {
            if (genre === "all" || movies[j].genre === genre) {
                count++;
            }
        }
        button.querySelector(".genre-btn__count").textContent = count;
    }
}
function setActiveGenre(genre) {
    currentGenre = genre;
    for (let i = 0; i < genreButtons.length; i++) {
        if (genreButtons[i].dataset.filter === genre) {
            genreButtons[i].classList.add("genre-btn--active");
        } else {
            genreButtons[i].classList.remove("genre-btn--active");
        }
    }
}
function generateRoomCode() {
    const symbols = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
    let code = "";
    for (let i = 0; i < 6; i++) {
        code += symbols[Math.floor(Math.random() * symbols.length)];
    }
    return code;
}

function createInvite() {
    if (selectedId === null) {
        inviteStatus.textContent = "Сначала выбери фильм из списка 👇";
        return;
    }
    const movie = findMovie(selectedId);
    const code = generateRoomCode();
    const pageAddress = window.location.href.split("?")[0].split("#")[0];
    inviteLink.value = pageAddress + "?room=" + code + "&movie=" + movie.id;
    inviteBox.classList.remove("hidden");
    inviteStatus.textContent = "Приглашение на «" + movie.title + "» готово. Комната: " + code;
}
function copyInvite() {
    function showCopied() {
        copyBtn.textContent = "Готово ✓";
        setTimeout(function () {
            copyBtn.textContent = "Копировать";
        }, 1500);
    }
    if (navigator.clipboard) {
        navigator.clipboard.writeText(inviteLink.value).then(showCopied).catch(function () {
            inviteLink.select();
        });
    } else {
        inviteLink.select();
        document.execCommand("copy");
        showCopied();
    }
}
function checkInvite() {
    const params = new URLSearchParams(window.location.search);
    const room = params.get("room");
    const movie = findMovie(Number(params.get("movie")));
    if (room && movie !== null) {
        duoBannerText.textContent =
            "Тебя пригласили смотреть вместе «" + movie.title + "». Комната: " + room;
        duoBanner.classList.remove("hidden");
        selectMovie(movie.id);
    }
}
// Достаёт ID ролика из ссылки YouTube или возвращает его как есть
function getVideoId(value) {
    if (!value) {
        return "";
    }

    const text = value.trim();
    const marks = ["v=", "youtu.be/", "embed/", "shorts/"];

    for (let i = 0; i < marks.length; i++) {
        const position = text.indexOf(marks[i]);

        if (position !== -1) {
            // берём всё после метки и обрезаем лишние параметры
            let id = text.slice(position + marks[i].length);
            id = id.split("&")[0].split("?")[0].split("/")[0];
            return id;
        }
    }

    return text;
}

function openTrailer(movie) {
    const videoId = getVideoId(trailers[movie.id]);
    if (!videoId) {
        const query = encodeURIComponent(movie.title + " трейлер");
        window.open("https://www.youtube.com/results?search_query=" + query, "_blank");
        return;
    }
    trailerTitle.textContent = "Трейлер: " + movie.title;
    trailerPlayer.innerHTML =
        '<iframe src="https://www.youtube.com/embed/' + videoId + '" ' +
        'allow="autoplay; encrypted-media; picture-in-picture; fullscreen" allowfullscreen ' +
        'referrerpolicy="strict-origin-when-cross-origin"></iframe>';
    trailerModal.classList.remove("hidden");
}
function closeTrailer() {
    trailerPlayer.innerHTML = "";
    trailerModal.classList.add("hidden");
}
function applyTheme(isLight) {
    if (isLight) {
        document.body.classList.add("light-theme");
        themeIcon.textContent = "☀️";
        themeText.textContent = "Светлая тема";
    } else {
        document.body.classList.remove("light-theme");
        themeIcon.textContent = "🌙";
        themeText.textContent = "Тёмная тема";
    }
}
function openSidebar() {
    sidebar.classList.add("sidebar--open");
    overlay.classList.add("overlay--visible");
}
function closeSidebar() {
    sidebar.classList.remove("sidebar--open");
    overlay.classList.remove("overlay--visible");
}

searchForm.addEventListener("submit", function (event) {
    event.preventDefault();
    searchText = searchInput.value.trim();
    renderMovies();
});

searchInput.addEventListener("input", function () {
    searchText = searchInput.value.trim();
    renderMovies();
});

sortSelect.addEventListener("change", function () {
    sortMode = sortSelect.value;
    renderMovies();
});

for (let i = 0; i < genreButtons.length; i++) {
    genreButtons[i].addEventListener("click", function () {
        setActiveGenre(genreButtons[i].dataset.filter);
        renderMovies();
        closeSidebar();
    });
}
resetBtn.addEventListener("click", function () {
    searchInput.value = "";
    searchText = "";
    sortSelect.value = "default";
    sortMode = "default";
    favOnly = false;
    favFilterBtn.classList.remove("widget-btn--active");
    setActiveGenre("all");
    renderMovies();
});
favFilterBtn.addEventListener("click", function () {
    favOnly = !favOnly;
    favFilterBtn.classList.toggle("widget-btn--active");
    renderMovies();
});
randomBtn.addEventListener("click", function () {
    const index = Math.floor(Math.random() * movies.length);
    selectMovie(movies[index].id);
});

inviteBtn.addEventListener("click", createInvite);
copyBtn.addEventListener("click", copyInvite);
duoBannerClose.addEventListener("click", function () {
    duoBanner.classList.add("hidden");
});
trailerClose.addEventListener("click", closeTrailer);
trailerModal.addEventListener("click", function (event) {
    if (event.target === trailerModal) {
        closeTrailer();
    }
});
document.addEventListener("keydown", function (event) {
    if (event.key === "Escape" && !trailerModal.classList.contains("hidden")) {
        closeTrailer();
    }
});
themeToggle.addEventListener("click", function () {
    const isLight = !document.body.classList.contains("light-theme");
    applyTheme(isLight);
    saveData("kinoteka-light-theme", isLight);
});
burgerBtn.addEventListener("click", openSidebar);
sidebarClose.addEventListener("click", closeSidebar);
overlay.addEventListener("click", closeSidebar);
favorites = loadData("kinoteka-favorites", []);
favCount.textContent = favorites.length;
applyTheme(loadData("kinoteka-light-theme", false));
updateGenreCounts();
updateStats();
renderTop();
renderMovies();
checkInvite();
const weekMovieId = 19;
trailers[19] = "https://m.youtube.com/watch?v=yYV2WzsC1sE&pp=ygUk0J7Rh9C10L3RjCDQv9C70L7RhdCw0Y8g0YPRh9C40LvQutCw";
function renderWeekMovie() {
    const movie = findMovie(weekMovieId);
    if (movie === null) {
        return;
    }
    const weekPoster = document.getElementById("weekPoster");
    weekPoster.dataset.genre = movie.genre;
    weekPoster.innerHTML =
        '<span>' + genreIcons[movie.genre] + '</span>' +
        '<img class="week__img" src="posters/' + movie.id + '.jpg" alt="Постер: ' + movie.title + '">';
    weekPoster.querySelector(".week__img").addEventListener("error", hideBrokenImage);
    document.getElementById("weekTitle").textContent = movie.title;
    document.getElementById("weekMeta").textContent =
        movie.genre + " · " + movie.year + " · ⭐ " + movie.rating;
    document.getElementById("weekText").textContent = movie.description;

    document.getElementById("weekDetailsBtn").addEventListener("click", function () {
        selectMovie(movie.id);
        detailsBlock.scrollIntoView({ behavior: "smooth", block: "start" });
    });

    document.getElementById("weekTrailerBtn").addEventListener("click", function () {
        openTrailer(movie);
    });
}
renderWeekMovie();