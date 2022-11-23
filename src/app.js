/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let pronoun = ["the", "our"];
  let adj = ["great", "big"];
  let noun = ["jogger", "racoon"];
  let com = ".com";
  let domain = [];
  for (let x = 0; x < 2; x++) {
    for (let y = 0; y < 2; y++) {
      for (let j = 0; j < 2; j++) {
        console.log(pronoun[x] + adj[y] + noun[j] + com);
        domain = pronoun[x] + adj[y] + noun[j] + com;
      }
    }
  }

  document.querySelector("#greeting").innerHTML = domain;
};
