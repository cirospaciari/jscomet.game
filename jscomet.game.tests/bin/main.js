global.JSComet = require('./libs/jscomet')['default'];

var ____imported = JSComet.include('cluster', false);

var cluster = ____imported;;

var ____imported = JSComet.include('os', false);

var os = ____imported;;

var ____imported = JSComet.include("./config.json", false);

var config = ____imported;;

var ____imported = JSComet.include("jscomet.core", false);

var JSCometApp = ____imported.JSCometApp;
var BlissViewEngine = ____imported.BlissViewEngine;
var MVCRouteEngine = ____imported.MVCRouteEngine;;


if(cluster.isMaster)
{
	
    var cpuCount = os.cpus().length;

    
    for (var i = 0; i < cpuCount; i += 1) {
        cluster.fork();
    }
	
	
	console.log("Static files in "+(config.publicDir));
	
}else{
	
	var viewEngine = new BlissViewEngine();

	
	var router = new MVCRouteEngine(__dirname, viewEngine);

	
	router.load("./routes.json");

	
	var app = new JSCometApp(config, router);

	
	app.run().then(function(port){
		console.log("Process "+(process.pid)+" is listening in "+(port)+" port");
	});
}