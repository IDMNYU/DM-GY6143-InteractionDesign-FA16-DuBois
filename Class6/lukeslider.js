/*

a simple slider


*/

sketch.default2d();
var val = 0;
var fcolor = [0, 0, 1., 1.];
var bcolor = [1., 0, 0., 1.];

draw();

function draw()
{
	var width = box.rect[2] - box.rect[0];
	var height = box.rect[3] - box.rect[1];
	var aspect = width/height;
	
	with (sketch) {
		//scale everything to box size
		glmatrixmode("modelview");
		glpushmatrix();
		glscale(aspect,1,1);

		// erase background
		glclearcolor(255, 255, 255);
		glclear();			

		//draw line
		glcolor(bcolor);
		moveto(0,0);
		plane(0.2,0.8);
		
		// draw marker
		glcolor(fcolor);		
		moveto(0.,1.6*val-0.8); //on screen in range -0.8 to 0.8	
		plane(0.8,0.05); 

		//reset transformation matrix
		glmatrixmode("modelview");
		glpopmatrix();
	}
}

function frgb(r, g, b, a)
{
	fcolor[0] = r;
	fcolor[1] = g;
	fcolor[2] = b;
	fcolor[3] = a;
	draw();
	refresh();
}

function brgb(r, g, b, a)
{
	bcolor[0] = r;
	bcolor[1] = g;
	bcolor[2] = b;
	bcolor[3] = a;
	draw();
	refresh();
}

function bang()
{
	draw();
	refresh();
	outlet(0,val);
}

function msg_float(v)
{
	val = Math.min(Math.max(0,v),1);
	notifyclients();
	bang();
}

function set(v)
{
	val = Math.min(Math.max(0,v),1);
	notifyclients();
	draw();
	refresh();
}


function setvalueof(v)
{
	msg_float(v);
}

function getvalueof()
{
	return val;
}

function onclick(x,y,but,cmd,shift,capslock,option,ctrl)
{
	ondrag(x,y,but,cmd,shift,capslock,option,ctrl)
}
onclick.local = 1; //private. could be left public to permit "synthetic" events

function ondrag(x,y,but,cmd,shift,capslock,option,ctrl)
{
	var f,a;

	a = sketch.screentoworld(x,y);
	f = (a[1]+0.8)/1.6; //on screen in range -0.8 to 0.8	
	msg_float(f); //set new value with clipping + refresh
}
ondrag.local = 1; //private. could be left public to permit "synthetic" events

function onresize(w,h)
{
	draw();
	refresh();
}
onresize.local = 1; //private
