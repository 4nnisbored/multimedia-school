requirejs.config({
    //library paths
        baseUrl: 'vntemplate.html',
    paths: {
        app: '../app',
        game: '../game'
    }
});

requirejs([
    //modules
    // load TOC (chapters) here
    "game/vntoc",
    // load canvas text
    "app/canvastext-0.4.1.mod",	
    // load base engine
    "app/vncanvas-base",
    // load (optional) engine modules
    "app/vncanvas-cmds",
	"app/vncanvas-media",
	"app/vncanvas-form",
	"app/vncanvas-cform",
	"app/vncanvas-bgnd",
	"app/vncanvas-actor",
	"app/vncanvas-atmo",
	"app/vncanvas-script",
    "app/vncanvas-chkpt",
    // place config, plugin, macro, etc. files here
    "game/vnconfig",
    // "game/vnplugins"
],

function () {
    // initialization
    Stage.Init("stage", 720, 480);
    Stage.script.Init("picture day");
});






// require.config({ 
//     baseUrl: "scripts",
//     paths: {
//         lib: 'lib',
//         app: 'app',
//         // add game path here as needed, e.g.
//         game: 'game'
//     },
//     waitSeconds: 0
// });

// require(['lib/deviceReady!',
//         // load TOC here
//         "game/vntoc",
//         // load 3rd party modules
//         "app/canvastext-0.4.1.mod",	
//         // load base engine, includes vncanvas-script
//         "app/vncanvas-base",
//         // load (optional) engine modules
//         "app/vncanvas-cmds",
//         "app/vncanvas-media",
//         "app/vncanvas-form",
//         "app/vncanvas-cform",
//         "app/vncanvas-bgnd",
//         "app/vncanvas-actor",
//         "app/vncanvas-atmo",
//         "app/vncanvas-chkpt",
//         // place config, plugin, macro, etc. files here
//         // remove those that are not needed
//         "game/vnmobile",            // cordova support
//         "game/vnconfig",            // config
//         "game/vnplugins",           // plugins
//         "app/vnmod-rpg-0.4",        // modpack
// ],    		
// function (isCordova) {
//     if (isCordova) {
//         document.addEventListener( 'pause', onPause.bind( this ), false );
//         document.addEventListener( 'resume', onResume.bind( this ), false );
	
//         // TODO: Cordova has been loaded. Perform any initialization that requires Cordova here.
//         /* vn-canvas mobile initialization */
//         Mobile.init();
//         Stage.Init("stage", 480, 320);
//         Stage.script.Init("vnchapter");		
//     }
//     else {
//         Config.devCordova  = "notCordova";
//         // Not cordova, just initialize vn-canvas
//         Stage.Init("stage", 480, 320);
//         Stage.script.Init("vnchapter");		
//     }

//     function onPause() {
//         // TODO: This application has been suspended. Save application state here.
//         Mobile.pause();
//     };
//     function onResume() {
//         // TODO: This application has been reactivated. Restore application state here.
//         Mobile.resume();
//     };
// });        