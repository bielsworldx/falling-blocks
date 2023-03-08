//usado para criar o motor de física
const Engine = Matter.Engine;
//usado para criar o mundo físico e adicionar objetos a ele
const World= Matter.World;
//usado para criar os objetos físicos que habitam o mundo
const Bodies = Matter.Bodies;

//declare as variáveis engine e world (motor e mundo)
var engine;
var world;

//declare as variáveis block (1 a 3, elas serão os corpos para nossas formas)
var block1, block2, block3;



function setup(){
    //cria uma tela
    var canvas = createCanvas(550,600);
    //cria um motor
    engine = Engine.create();
    //cria um mundo
    world = engine.world;

    //crie uma variável plane_options com a propriedade isStatic verdadeira
   var plane_options = {
    isStatic: true,
   }


    //crie um corpo plano que será o solo e o adicione ao mundo
    plane = Bodies.rectangle(600,500,1200,2,plane_options);
    World.add(world,plane);
    
  
    //crie 3 variáveis block_options e lhes adicione diferentes propriedades físicas
    //bloco 1
   var block1_options = {
    restitution: 0.5,
    friction: 0.02,
    frictionAir: 0,
   }

    //bloco 2
    var block2_options = {
      restitution: 0.7,
      friction: 0.01,
      frictionAir: 0.1,
     }
  

    //bloco 3
    var block3_options = {
      restitution: 0.01,
      friction: 1,
      frictionAir: 0.3,
     }
  

    //Crie três corpos com formas diferentes (quadrado, círculo e retângulo), chamando-os de block1, block2 e block3 e os adicione ao world (mundo)
    //block1 = círculo
    block1 = Bodies.circle(220,10,10,block1_options);
    World.add(world,block1);
    
    //block2 = quadrado
    block2 = Bodies.rectangle(110,50,10,10,block2_options);
    World.add(world,block2);
    
    //block3 = retângulo
    block3 = Bodies.rectangle(350,50,10,20,block3_options);
    World.add(world,block3);
        
    //estilizando os corpos
    fill("cyan");
    rectMode(CENTER);
    ellipseMode(RADIUS);

}

function draw(){
  
  //Cor de fundo (background) → coloque a cor que desejar!
  background("pink");

  //Chame update() para atualizar o motor de física
  Engine.update(engine)

  //criada forma para o plano e suporte
  rect(plane.position.x,plane.position.y,1200);

  //criadas formas para todos os corpos usando ellipse() e rect()
 ellipse(block1.position.x,block1.position.y,30);
 rect(block2.position.x,block2.position.y,50,50);
 rect(block3.position.x,block3.position.y,100,50);
 
}
