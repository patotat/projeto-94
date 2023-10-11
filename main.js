
// Crie a variável canvas
var canvas = new fabric.Canvas('myCanvas');
//Defina as posições iniciais das imagens da bola e do buraco.
ball_y=0;
ball_x=0;
hole_y=400;
hole_x=800;

block_image_width = 5;
block_image_height = 5;

function load_img(){
	fabric.Image.fromURL("golf-b.png",function(Img){
		hole_obj = Img;
		hole_obj.scaleToWidth(50);
		hole_obj.scaleToHeigt(50);
		hole_obj.set({
			top:hole_y
		    left:hole_x
		});
		canvas.add(hole_obj);
	});
	new_image();
}

function new_image()
{
	fabric.Image.fromURL("ball-b.png",function(Img){
		ball_obj = Img;
		ball_obj.scaleToWidth(50);
		ball_obj.scaleToHeigt(50);
		ball_obj.set({
			top:ball_y
		    left:ball_x
		});
		canvas.add(ball_obj);
	});
}
if((ball_x==hole_x)&&(ball_y==hole_y)){
	canvas.remove(ball_obj):
}
window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{

	keyPressed = e.keyCode;
	console.log(keyPressed);
	document.getElementById("hd3").innerHTML="você acertou o buraco!!!";
	document.getElementById("myCanvas").style.borderColor="red";
	else{
		if(keyPressed == '38')
		{
			up();
			console.log("cima");
		}
		if(keyPressed == '40')
		{
			down();
			console.log("baixo");
		}
		if(keyPressed == '37')
		{
			left();
			console.log("esquerda");
		}
		if(keyPressed == '39')
		{
			right();
			console.log("direita");
		}
	}
	

	function up()
	{
		// Programe o movimento da bola para cima.
		ball_y = ball_y - block_image_height;//qundo a seta de para cima for precionada mover para cima
		console.log("altura da imagem do bloco = " + block_image_height);
		console.log("Quando a seta para cima é pressionada, X =  " + ball_x + " , Y = "+ball_y);
		canvas.remove(ball_object);
	new_image();
	}

	function down()
	{
		 // Programe o movimento da bola para baixo.
		 ball_y = ball_y + block_image_height;//qundo a seta de para baix for precionada mover para baixo
		console.log("altura da imagem do bloco = " + block_image_height);
		console.log("Quando a seta para baixo é pressionada, X =  " + ball_x + " , Y = "+ball_y);
		canvas.remove(ball_object);
		new_image();
	}

	function left()
	{
		if(ball_x >5)
		{
			// Programe o movimento da bola para a esquerda.
			ball_x = ball_x - block_image_width;//qundo a seta de para cesquerda for precionada mover para esquerda
		console.log("largura da imagem do bloco = " + block_image_width);
		console.log("Quando a seta esquerda é pressionada, X =  " + ball_x + " , Y = "+ball_y);
		canvas.remove(ball_object);
		new_image();
		}
	}

	function right()
	{
		if(ball_x <=1050)
		{
			// Programe o movimento da bola para a direita.
			ball_x = ball_x + block_image_width;//qundo a seta de para direita for precionada mover para direita
		console.log("largura da imagem do bloco = " + block_image_width);
		console.log("Quando a seta direita é pressionada, X =  " + ball_x + " , Y = "+ball_y);
		canvas.remove(ball_object);
		new_image();
		}
	}
	
}

