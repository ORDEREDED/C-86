var x=document.getElementById("music");
var canvas = new fabric.Canvas('myCanvas');
function new_image(){
    fabric.Image.fromURL("simple.jfif", function(Img) {
block_object = Img;
block_object.scaleToWidth(700);
block_object.scaleToHeight(510);
block_object.set({
	top:0,
	left:0
	});
	canvas.add(block_object);
	});

}
function playsound(){
	x.play();
}