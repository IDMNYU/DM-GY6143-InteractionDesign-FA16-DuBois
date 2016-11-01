// strange.js
//
// generate strange attractors according to random/evolved coefficients
//
// attractor is generated via:
//
//	X = sin(A*y)-z*cos(B*x)
//	Y = z*sin(C*x)-cos(D*y)
//	Z = E*sin(x)
//

var x, y, z;
var A, B, C, D, E;

init();

function bang()
{
	var newx = Math.sin(A*y)-z*Math.cos(B*x)
 	var newy = z*Math.sin(C*x)-Math.cos(D*y)
 	var newz = E*Math.sin(x)

	outlet(0, "lineto", newx, newy, newz);
	outlet(0, "sphere", 0.01);
	x = newx;
	y = newy;
	z = newz;
}

function init()
{
	outlet(0, "reset");
	x = 0;
	y = 0;
	z = 0;
	A = Math.random()*4.-2.;
	B = Math.random()*4.-2.;
	C = Math.random()*4.-2.;
	D = Math.random()*4.-2.;
	E = Math.random()*4.-2.;
}