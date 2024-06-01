//GÊNEROS
//Animação, Fantasia, Aventura, Drama, Suspense, Crime, Ficção-Científica, Ação, Comédia, História, Biografia, Família

//FILMES SELECIONADOS
//A Viagem de Chihiro, livre, Animação, Fantasia, Aventura
//Valente, livre, Animação, Aventura, Ação
//HOP - Rebelde Sem Páscoa, livre, Animação, Comédia, Família
//A Fantástica Fábrica de Chocolate, livre, Aventura, Comédia, Drama

//Rango, 10, Animação, Comédia, Aventura
//Homem-Aranha no Aranhaverso, 10, Animação, Ação, Aventura
//Alice no País das Maravilhas, 10, Aventura Família Fantasia

//Tudo em Todo o Lugar ao Mesmo Tempo, 14, Ficção Científica, Ação, Comédia

//Coringa, 16, Drama, Suspense, Crime
//Oppenheimer, 16, Biografia, Drama, História
//Não Olhe Para Cima, 16, Ficção Científica, Comédia, Drama

let campoIdade;
let campoComedia;
let campoFantasia;
let campoDrama;

function setup() {
  createCanvas(600, 200);
  createElement("h2", "- Remecomendador de Filmes! -");
  createSpan("Qual a sua idade?");
  campoIdade = createInput("");
  campoComedia = createCheckbox("Gosta do gênero Comédia?");
  campoFantasia = createCheckbox("Gosta do gênero Fantasia?");
  campoDrama = createCheckbox("Gosta do gênero Drama?");
}

function draw() {
  background("rgb(255,255,255)");
  let idade = campoIdade.value();
  let gostaDeComedia = campoComedia.checked();
  let gostaDeFantasia = campoFantasia.checked();
  let gostaDeDrama = campoDrama.checked();
  let recomendacao = geraRecomendacao(
    idade,
    gostaDeComedia,
    gostaDeFantasia,
    gostaDeDrama
  );
  fill(color("rgb(84,13,84)"));
  textAlign(CENTER, CENTER);
  textSize(30);
  textFont("Georgia");
  textStyle(BOLD);
  text(recomendacao, width / 2, height / 2);
}

function geraRecomendacao(
  idade,
  gostaDeComedia,
  gostaDeFantasia,
  gostaDeDrama
) {
  if (idade >= 16) {
    if (gostaDeDrama) {
      return "Coringa";
    } else if (gostaDeComedia) {
    return "Não Olhe Para Cima";
  } else {
    return "Oppenheimer";

    }
  } else if (idade >= 10) {
    if (gostaDeFantasia || gostaDeDrama) {
      return "Alice no País das Maravilhas";
    } else {
      if (gostaDeComedia) {
        return "Rango";
      } else {
        return "Homem-Aranha no Aranhaverso";
      }
    }
  } else {
    if (gostaDeFantasia) {
      return "A Viagem de Chihiro";
    } else if (gostaDeComedia) {
      return "HOP - Rebelde Sem Páscoa";
    } else if (gostaDeDrama) {
      return "A Fantástica Fábrica de Chocolate";
    } else {
      return "Valente";
    }
  }
}
