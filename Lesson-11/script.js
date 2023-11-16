// Fetch
// document.addEventListener("DOMContentLoaded", function () {
  const searchButton = document.querySelector(".search-button");
  searchButton.addEventListener("click", function () {
    const inputKeyword = document.querySelector(".input-keyword");
    fetch("http://www.omdbapi.com/?apikey=91d9df80&s=" + inputKeyword.value)
      .then((response) => response.json())
      .then((response) => {
        const movies = response.Search;
        let cards = "";
        movies.forEach((m) => {
          cards += showCards(m);
        });
        const movieContainer = document.querySelector(".movies-container");
        movieContainer.innerHTML = cards;
      });
    
    // dengan setTimeOut
    // setTimeout(() => {

    // const modalDetailButton = document.querySelectorAll(".modal-detail-button");
    // modalDetailButton.forEach((btn) => {
    //   btn.addEventListener("click", function () {
    //     const imdbid = this.dataset.imdbid;
    //     fetch("http://www.omdbapi.com/?apikey=91d9df80&i=" + imdbid)
    //       .then((response) => response.json())
    //       .then((m) => {
    //         const movieDetail = showDetails(m);
    //         const modalBody = document.querySelector(".modal-body");
    //         modalBody.innerHTML = movieDetail;
    //       });
    //   });
    // });
    // },500);

    // dengan Event Delegation
    document.addEventListener("click", function (event) {
      if (event.target.classList.contains("modal-detail-button")) {
        const imdbid = event.target.dataset.imdbid;
        fetch("http://www.omdbapi.com/?apikey=91d9df80&i=" + imdbid)
          .then((response) => response.json())
          .then((m) => {
            const movieDetail = showDetails(m);
            const modalBody = document.querySelector(".modal-body");
            modalBody.innerHTML = movieDetail;
          });
      }
    });
    
  });
// });

function showCards(m) {
  return `<div class="col-md-4 my-3">
                  <div class="card">
                      <img src="${m.Poster}" class="card-img-top" />
                      <div class="card-body">
                      <h5 class="card-title">${m.Title}</h5>
                      <h6 class="card-subtitle mb-2 text-muted">${m.Year}</h6>
                      <a href="#" class="btn btn-primary modal-detail-button" data-toggle="modal" data-target="#MovieDetailModal" data-imdbid="${m.imdbID}">Details</a>
                      </div>
                  </div>
              </div>`;
}

function showDetails(m) {
  return `<div class="container-fluid">
                  <div class="row">
                      <div class="col-md-3">
                          <img src="${m.Poster}" class="img-fluid" />
                      </div>
                      <div class="col-md">
                          <ul class="list-group">
                              <li class="list-group-item"><h4> ${m.Title} (${m.Year})</h4></li>
                              <li class="list-group-item"><strong>Director :</strong> ${m.Director}</li>
                              <li class="list-group-item"><strong>Actors :</strong> ${m.Actors}</li>
                              <li class="list-group-item"><strong>Writer :</strong> ${m.Writer}</li>
                              <li class="list-group-item text-justify"><strong>Plot :</strong> ${m.Plot}</li>
                          </ul>
                      </div>
                  </div>
              </div>`;
}
