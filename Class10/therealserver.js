
var foo = require('./lukeserver.js');

foo.startServer(8080);
foo.startSerial('/dev/ttys000');
foo.debugServer(true);
foo.debugSerial(true);

