var retFixo, retMovendo;

/*Vamos projetar um algoritmo para
detectar a colisão entre dois objetos.
Vamos criar dois retângulos, com
diferentes larguras e alturas — um
retângulo deve ser fixo, o outro deve
estar se movendo.*/

function setup() {
  createCanvas(1200, 800);
  retFixo = createSprite(600, 400, 50, 80);
  retFixo.shapeColor = "green";
  retFixo.debug = true;
  
  retMovendo = createSprite(400, 200, 80, 30);
  retMovendo.shapeColor = "green";
  retMovendo.debug = true;
}
function draw() {
  background(0, 0, 0);
  //1-controles ao retângulo em movimento para que ele se mova com o cursor
  retMovendo.x = World.mouseX;
  retMovendo.y = World.mouseY;
 
    
/*2-os retângulos ficam vermelhos exatamente no ponto de toque
a condição "<", podemos detectar quando o retângulo em movimento cruzar o retângulo fixo */
//Se a distância for maior do que isso então os objetos não colidiram.
  
  if (retMovendo.x - retFixo.x < retFixo.width / 2 + retMovendo.width / 2) {
    retMovendo.shapeColor = "red";
    retFixo.shapeColor = "red";
  } else {
    retMovendo.shapeColor = "green";
    retFixo.shapeColor = "green";
  }
  
  drawSprites();
}
