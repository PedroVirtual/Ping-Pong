//variáveis da bolinha
let xBolinha = 300;
let yBolinha = 200;
let diametro = 13;
let raio = diametro / 2;

//velocidade da bolinha
let velocidadeXBolinha = 7;
let velocidadeYBolinha = 7;
let raqueteComprimento = 10;
let raqueteAltura = 90;

//variáveis da raquete
let xRaquete = 5;
let yRaquete = 150;

//variáveis do oponente
let xRaqueteOponente = 585;
let yRaqueteOponente = 150;
let VelocidadeYOponente;

let colidiu = false;

//placar game
let meuspontos = 0;
let pontosOponente = 0;

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(0);
  mostraBolinha();
  movimentaBolinha();
  colisao();
  mostraRaquete(xRaquete, yRaquete);
  movimentosRaquete();
  //verificarColisaoRaquete();
  VerificaColisaoRaquete(xRaquete, yRaquete);
  mostraRaquete(xRaqueteOponente, yRaqueteOponente);
  movimentaRaqueteOponente();
  VerificaColisaoRaquete(xRaqueteOponente, yRaqueteOponente);
  incluirplacar();
  marcaPonto();
}

function mostraBolinha (){
  circle(xBolinha, yBolinha, diametro)
}

function movimentaBolinha(){
  xBolinha += velocidadeXBolinha;
  yBolinha += velocidadeYBolinha;
}

function colisao(){
   if (xBolinha + raio> width || 
      xBolinha - raio< 0){
    velocidadeXBolinha *= -1; 
  }
  
   if (yBolinha + raio> height || 
      yBolinha - raio< 0){
    velocidadeYBolinha *= -1; 
  }
}

function mostraRaquete(x,y){
  rect(x,y, raqueteComprimento , raqueteAltura)
}

function movimentosRaquete(){
  if (keyIsDown (UP_ARROW)){
    yRaquete -= 10;
  }
  if (keyIsDown (DOWN_ARROW)){
    yRaquete += 10;
  }
}

function verificarColisaoRaquete(){
  if (xBolinha - raio < xRaquete + raqueteComprimento
     && yBolinha - raio < yRaquete + raqueteAltura && 
     yBolinha + raio > yRaquete){
    velocidadeXBolinha *= -1;
  }
}

function VerificaColisaoRaquete(x, y){ 
 colidiu = collideRectCircle(x,y,raqueteComprimento,raqueteAltura,xBolinha,yBolinha,raio);
  if (colidiu){
    velocidadeXBolinha *= -1
  }
}

function movimentaRaqueteOponente(){
  VelocidadeYOponente = yBolinha -yRaqueteOponente -raqueteComprimento / 2 - 30;
  yRaqueteOponente += VelocidadeYOponente
}

function incluirplacar(){
  //stroke(255);
  textAlign(CENTER);
  textSize(16);
  fill(color(255, 140, 0));
  rect(150, 10, 40, 20)
  fill(255)
  text(meuspontos, 170, 26);
  fill(color(255, 140, 0));
  rect(450, 10, 40, 20)
  fill(255)
  text(pontosOponente, 470, 26)
}

function marcaPonto(){
  if (xBolinha > 590){
    meuspontos += 1;
  }
  if (xBolinha < 10){
    pontosOponente += 1;
  }
}

function bolinhaNaoFicaPresa(){
    if (XBolinha - raio < 0){
    XBolinha = 23
    }
}
