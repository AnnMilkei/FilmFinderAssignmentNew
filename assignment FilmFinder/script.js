const moviesLink = document.querySelector("#List");
const IMDB = ["https://www.imdb.com/title/"];

//functie maken om lijsten in DOM te zetten 

// li's terugkrijgen in de lijst 
// image creëren en img in li 
// a href voor klik op website naar imdb met ID 
// div omheen voor grid 
// toevoegen li's aan Ul 

const addToDOM = (array) => {
  array.map((movie) => {
    const newLi = document.createElement("li");
    const a = document.createElement("a");
    const url = IMDB.concat(movie.imdbID).join("");
    a.href = url;
    a.target = "_blank";
    newLi.appendChild(a);
    
    const moviePoster = document.createElement("img");
    moviePoster.src = movie.poster;
    a.appendChild(moviePoster);
    
    const div4Li = document.createElement("div");
    div4Li.className = "grid-item";
    moviesLink.appendChild(div4Li);
    div4Li.appendChild(newLi);
  });
};
addToDOM(movies);

// Ul Leegmaken, daarna LI's toevoegen
function UlClean() {
  while (moviesLink.firstChild) {
    moviesLink.removeChild(moviesLink.firstChild);
  }
}

// nieuwe films naar dom sturen 
const lastest = document.querySelector("#Latest");
lastest.addEventListener("change", (e) => {
  UlClean();
  const latestMovies = movies.filter((movie) => {
    return movie.year == "2014", movie.year > "2014";
  });
  addToDOM(latestMovies);
});

//filter functie op title + toevoegen aan lijst in DOM
const OnClick = (event) => {
  UlClean();
  const titleChoice = event.target.value;
  switch (titleChoice) {
    case "avenger":
      const avenger = movies.filter((movie) =>
        movie.title.includes("Avenger")
      );
      addToDOM(avenger);
      break;
    case "xmen":
      const xmen = movies.filter((movie) =>
        movie.title.includes("X-Men")
      );
      addToDOM(xmen);
      break;
    case "princess":
      const princess = movies.filter((movie) =>
        movie.title.includes("Princess")
      );
      addToDOM(princess);
      break;
    case "batman":
      const batman = movies.filter((movie) =>
        movie.title.includes("Batman")
      );
      addToDOM(batman);
      break;
  }
};

// add eventlistener op titleButtons buttons met zelfde class en call OnClick (filter functie op titel)
document.addEventListener("DOMContentLoaded", function () {
  const titleButtons = document.querySelectorAll('input[class="titleButtons"]');
  const titleButton = titleButtons.forEach((titleButton) => {
    titleButton.addEventListener("change", OnClick);
  });
});