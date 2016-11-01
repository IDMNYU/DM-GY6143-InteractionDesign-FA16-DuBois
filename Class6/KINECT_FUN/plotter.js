// hi there
post("hi there\n");

var NUMBINS = 50;

var minpitch = 20.;
var maxpitch = 105.;

var lf = new Array(NUMBINS);
var la = new Array(NUMBINS);
var rf = new Array(NUMBINS);
var ra = new Array(NUMBINS);
var b;
var t = 440.;
var x, y;
var g = 5.;
var ss = 40;
var lc = new Array(4);
var rc = new Array(4);
lc[0] = 0.;
lc[1] = 0.;
lc[2] = 0.;
lc[3] = 1.;
rc[0] = 0.;
rc[1] = 0.;
rc[2] = 0.;
rc[3] = 1.;
var polymode = 0;

var prim = "framecircle";

function poly(v)
{
		polymode = v;
}

function setprim(v)
{
		prim = v;
}

function shapeslice(v)
{
		ss = v;
}

function clear()
{
    for(i=0;i<NUMBINS;i++)
    {
        lf[i] = -999.;
        rf[i] = -999.;
        la[i] = 0.;
        ra[i] = 0.;
    }
}

function left()
{
    b = arguments[0]-1;
    if(arguments[1]>0.) {
        lf[b] = 69. + (1./.057762265) * Math.log(arguments[1]/t);
    }
    else
    {
        lf[b] = -999.;
    }
    la[b] = arguments[2];
}

function right()
{
    b = arguments[0]-1;
    if(arguments[1]>0.) {
        rf[b] = 69. + (1./.057762265) * Math.log(arguments[1]/t);
    }
    else
    {
        rf[b] = -999.;
    }
    ra[b] = arguments[2];
}

function point(v)
{
    x = v;
    bang();
}
point.immediate = 1;

function gain(v)
{
    g = v;
}

function leftcolor(v)
{
    lc[0] = arguments[0];
    lc[1] = arguments[1];
    lc[2] = arguments[2];
    lc[3] = arguments[3];
}

function rightcolor(v)
{
    rc[0] = arguments[0];
    rc[1] = arguments[1];
    rc[2] = arguments[2];
    rc[3] = arguments[3];
}

function bang()
{
    for(i=0;i<NUMBINS;i++)
    {
        if(lf[i]!=-999.)
        {
            y = ((lf[i]-minpitch)/(maxpitch-minpitch))*2.-1.;
            outlet(0,"reset");
			outlet(0, "glpolygonmode", polymode, polymode);
            outlet(0, "shapeslice", ss);
            outlet(0,"glcolor", lc[0], lc[1], lc[2], (Math.pow(la[i],0.5))*lc[3]*g);
            outlet(0,"moveto", x, y);
            outlet(0,prim, g*la[i]);
            outlet(0, "bang");
        }

        if(rf[i]!=-999.)
        {
            y = ((rf[i]-minpitch)/(maxpitch-minpitch))*2.-1.;
            outlet(0,"reset");
			outlet(0, "glpolygonmode", polymode, polymode);
            outlet(0, "shapeslice", ss);
            outlet(0,"glcolor", rc[0], rc[1], rc[2], (Math.pow(ra[i],0.5))*rc[3]*g);
            outlet(0,"moveto", x, y);
            outlet(0, prim, g*ra[i]);
            outlet(0, "bang");
        }

        
    }

}
bang.immediate = 1;