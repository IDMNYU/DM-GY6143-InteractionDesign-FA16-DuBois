// our dumb lightblue bean hack

var spawn = require("child_process").spawn; // allows child processes
var cat = spawn("cat", ["/tmp/cu.LightBlue-Bean"]); // this is our device concatenator

var osc = require('osc-min');
var dgram = require('dgram');
var udp = dgram.createSocket('udp4');
var outport = 8000;

// this stuff runs whenever there's data to be read in the child process:
cat.stdout.on("data", function(data) {
    var thestuff = data.toString(); // turn the data into a string
    if(thestuff.length>1) // there is stuff here!!!
    {
    	// replace this with socket.io stuff:
		console.log(thestuff);
		var buf;
		buf = osc.toBuffer({
			address: "/stuff",
			args: {
			type: "string",
			value: thestuff
		}

		});
	  udp.send(buf, 0, buf.length, outport, "localhost");

    }
});

cat.stderr.on("data", function(data) {
    console.log(data.toString());
});

