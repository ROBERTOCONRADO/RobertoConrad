document.getElementById("traducao").addEventListener("click", function() {
  let frase = "I believe that learning is a never-ending journey and I am always looking for ways to improve and grow.";
  let linguagemOrigem = "en";
  let linguagemDestino = "pt";
  let url = "https://translate.googleapis.com/translate_a/single?client=gtx&sl=" + linguagemOrigem + "&tl=" + linguagemDestino + "&dt=t&q=" + encodeURI(frase);
  fetch(url)
    .then(response => response.json())
    .then(data => {
        let traducao = data[0][0][0];
        document.querySelector(".resultado").innerHTML = traducao;
    });
});