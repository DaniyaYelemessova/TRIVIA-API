import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/styles.css";

function triviaGame() {
  let request = new XMLHttpRequest();
  const url = `https://opentdb.com/api.php?amount=1&category=9&difficulty=easy&type=boolean`;

  request.addEventListener("loadend", function () {
    const response = JSON.parse(this.responseText);
    
  });

  request.open("GET", url, true);
  request.send();
}


