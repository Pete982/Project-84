canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");

img_width = 300;
img_height = 100;

var img_image;

img_x = 100;
img_y = 100;

function add() {
	img_imgTag = new Image(); //defining a variable with a new image
	img_imgTag.onload = uploadimg; // setting a function, onloading this variable
	img_imgTag.src = img_image;   // load image
}

function uploadimg() {

	ctx.drawImage(img_imgTag, img_x, img_y, img_width, img_height);
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
	
		if((keyPressed >=97 && keyPressed<=122)|| (keyPressed >=65 && keyPressed<=90))
		{
			aplhabetkey();
			document.getElementById("d1").innerHTML="You pressed the alphabet key...WITH PASSION!";
			console.log("alphabet key");
		}

	else{
		otherkey();
		document.getElementById("d1").innerHTML="You pressed symbol or other key";
	}

	if((keyPressed >=97 && keyPressed<=122)|| (keyPressed >=65 && keyPressed<=90))
	{
		numberkey();
		document.getElementById("d1").innerHTML="You pressed the Number Key...and it fills you with DETERMINATION!";
		console.log("numberkey");
	}

	if((keyPressed >=97 && keyPressed<=122)|| (keyPressed >=65 && keyPressed<=90))
	{
		specialkey();
		document.getElementById("d1").innerHTML="You pressed the Special Key and...you wished some kind of explosion happened.";
		console.log("specialkey");
	}

	if((keyPressed >=97 && keyPressed<=122)|| (keyPressed >=65 && keyPressed<=90))
	{
		arrowkey();
		document.getElementById("d1").innerHTML="You pressed the Arrow Key and you wish you could be playing DDR at an arcade right now.";
		console.log("arrowkey");
	}

}

function aplhabetkey()
{
	img_image="Alpkey.png";
	add();

}
function numberkey()
{
	img_image="numkey.png";
	add();
}
function arrowkey()
{
	img_image="Arrkey.png";
	add();
}
function specialkey()
{
	img_image="spkey.png";
	add();
}
function otherkey()
{
	img_image="otherkey.png";
	add();
}
	
