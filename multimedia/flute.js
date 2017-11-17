(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [];



lib.updateListCache = function (cacheList) {		
	for(var i = 0; i < cacheList.length; i++) {		
		if(cacheList[i].cacheCanvas)		
			cacheList[i].updateCache();		
	}		
};		

lib.addElementsToCache = function (textInst, cacheList) {		
	var cur = textInst;		
	while(cur != exportRoot) {		
		if(cacheList.indexOf(cur) != -1)		
			break;		
		cur = cur.parent;		
	}		
	if(cur != exportRoot) {		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != cur) {		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {		
		cur = textInst;		
		while(cur != exportRoot) {		
			cacheList.push(cur);		
			cur = cur.parent;		
		}		
	}		
};		

lib.gfontAvailable = function(family, totalGoogleCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);		

	loadedGoogleCount++;		
	if(loadedGoogleCount == totalGoogleCount) {		
		lib.updateListCache(gFontsUpdateCacheList);		
	}		
};		

lib.tfontAvailable = function(family, totalTypekitCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);		

	loadedTypekitCount++;		
	if(loadedTypekitCount == totalTypekitCount) {		
		lib.updateListCache(tFontsUpdateCacheList);		
	}		
};
// symbols:



(lib.flutepng = function() {
	this.initialize(img.flutepng);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,960,960);


(lib.musicalnote = function() {
	this.initialize(img.musicalnote);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,190,266);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_2 = function() {
		playSound("e4wav");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#454545").ss(1,1,1).p("ACdAAQAABBguAuQguAuhBAAQhAAAguguQguguAAhBQAAhAAuguQAuguBAAAQBBAAAuAuQAuAuAABAg");
	this.shape.setTransform(-15.6,-15.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#006699").s().p("AhuBvQguguAAhBQAAhAAuguQAuguBAAAQBBAAAuAuQAtAuABBAQgBBBgtAuQguAthBABQhAgBgugtg");
	this.shape_1.setTransform(-15.6,-15.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AhuBvQguguAAhBQAAhAAuguQAuguBAAAQBBAAAuAuQAtAuABBAQgBBBgtAuQguAthBABQhAgBgugtg");
	this.shape_2.setTransform(-15.6,-15.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_2},{t:this.shape}]},1).to({state:[{t:this.shape_1},{t:this.shape}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-32.3,-32.3,33.3,33.3);


(lib.musicalnotemiddleenlarge = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.musicalnote();
	this.instance.parent = this;
	this.instance.setTransform(-31.3,-20.6,0.165,0.077);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-31.3,-20.6,31.3,20.6);


(lib.musicalnoteleftenlarge = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.musicalnote();
	this.instance.parent = this;
	this.instance.setTransform(-22.4,-17.7,0.118,0.067);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-22.4,-17.7,22.4,17.7);


(lib.musicalnoteenlargeright = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.musicalnote();
	this.instance.parent = this;
	this.instance.setTransform(-24.9,-29.2,0.131,0.11);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-24.9,-29.2,24.9,29.2);


(lib.g5notebtn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_2 = function() {
		playSound("g5wav");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#999900").s().p("AhnBnQgqgqAAg9QAAg7AqgsQAsgqA7AAQA9AAAqAqQArAsAAA7QAAA9grAqQgqArg9AAQg7AAgsgrg");
	this.shape.setTransform(14.6,14.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AhnBnQgqgqAAg9QAAg7AqgsQAsgqA7AAQA9AAAqAqQArAsAAA7QAAA9grAqQgqArg9AAQg7AAgsgrg");
	this.shape_1.setTransform(14.6,14.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,29.2,29.2);


(lib.g5note = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_2 = function() {
		playSound("g4wav");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#454545").ss(1,1,1).p("ACbAAQAABAgtAuQguAthAAAQg/AAgugtQgtguAAhAQAAg/AtguQAugtA/AAQBAAAAuAtQAtAuAAA/g");
	this.shape.setTransform(15.5,15.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#9933CC").s().p("AhsBuQguguAAhAQAAg/AugtQAtguA/AAQBAAAAuAuQAtAtAAA/QAABAgtAuQguAthAAAQg/AAgtgtg");
	this.shape_1.setTransform(15.5,15.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AhsBuQguguAAhAQAAg/AugtQAtguA/AAQBAAAAuAuQAtAtAAA/QAABAgtAuQguAthAAAQg/AAgtgtg");
	this.shape_2.setTransform(15.5,15.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_2},{t:this.shape}]},1).to({state:[{t:this.shape_1},{t:this.shape}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,33,33);


(lib.f4NoteButon = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_2 = function() {
		playSound("f4wav");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00FFFF").s().p("AhxBxQgugvAAhCQAAhBAugwQAwguBBAAQBCAAAvAuQAvAwAABBQAABCgvAvQgvAvhCAAQhBAAgwgvg");
	this.shape.setTransform(-16,-16);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000033").s().p("AhxBxQgugvAAhCQAAhBAugwQAwguBBAAQBCAAAvAuQAvAwAABBQAABCgvAvQgvAvhCAAQhBAAgwgvg");
	this.shape_1.setTransform(-16,-16);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-32,-32,32,32);


(lib.e4noteBTnns = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.d4note = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_2 = function() {
		playSound("d4wav");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#996600").s().p("AhJBKQgfgeAAgsQAAgrAfgeQAegfArAAQAsAAAeAfQAfAeAAArQAAAsgfAeQgeAfgsAAQgrAAgegfg");
	this.shape.setTransform(10.5,10.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AhJBKQgfgeAAgsQAAgrAfgeQAegfArAAQAsAAAeAfQAfAeAAArQAAAsgfAeQgeAfgsAAQgrAAgegfg");
	this.shape_1.setTransform(10.5,10.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,21,21);


(lib.c4notebtn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_2 = function() {
		playSound("csharp4wav");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#454545").ss(1,1,1).p("ACDAAQAAA3gmAmQgmAmg3AAQg1AAgngmQgmgmAAg3QAAg1AmgnQAngmA1AAQA3AAAmAmQAmAnAAA1g");
	this.shape.setTransform(13.1,13.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#990000").s().p("AhcBcQgmglAAg3QAAg1AmgnQAngmA1AAQA3AAAlAmQAnAnAAA1QAAA3gnAlQglAng3AAQg1AAgngng");
	this.shape_1.setTransform(13.1,13.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AhcBcQgmglAAg3QAAg1AmgnQAngmA1AAQA3AAAlAmQAnAnAAA1QAAA3gnAlQglAng3AAQg1AAgngng");
	this.shape_2.setTransform(13.1,13.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_2},{t:this.shape}]},1).to({state:[{t:this.shape_1},{t:this.shape}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,28.2,28.2);


// stage content:
(lib.flute = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/* Stop at This Frame
		The  timeline will stop/pause at the frame where you insert this code.
		Can also be used to stop/pause the timeline of movieclips.
		*/
		this.start();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(15));

	// musicalnoteright
	this.instance = new lib.musicalnoteenlargeright("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(299.4,188.6,1,1,0,0,0,-12.5,-14.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:1.07,scaleY:1.07,rotation:25.7,x:302.2,y:178.8},0).wait(1).to({scaleX:1.15,scaleY:1.13,rotation:51.4,x:305.1,y:168.9},0).wait(1).to({scaleX:1.22,scaleY:1.2,rotation:77.1,x:307.9,y:159.1},0).wait(1).to({scaleX:1.29,scaleY:1.26,rotation:102.9,x:310.8,y:149.2},0).wait(1).to({scaleX:1.37,scaleY:1.33,rotation:128.6,x:313.6,y:139.4},0).wait(1).to({scaleX:1.44,scaleY:1.4,rotation:154.3,x:316.5,y:129.6},0).wait(1).to({scaleX:1.51,scaleY:1.46,rotation:180,x:319.4,y:119.8},0).wait(1).to({scaleX:1.59,scaleY:1.53,rotation:205.7,x:322.2,y:110},0).wait(1).to({scaleX:1.66,scaleY:1.59,rotation:231.4,x:325.1,y:100.2},0).wait(1).to({scaleX:1.73,scaleY:1.66,rotation:257.1,x:327.8,y:90.4},0).wait(1).to({scaleX:1.81,scaleY:1.72,rotation:282.9,x:330.6,y:80.6},0).wait(1).to({scaleX:1.88,scaleY:1.79,rotation:308.6,x:333.4,y:70.7},0).wait(1).to({scaleX:1.96,scaleY:1.86,rotation:334.3,x:336.2,y:60.9},0).wait(1).to({scaleX:2.03,scaleY:1.92,rotation:360,x:339,y:51},0).wait(1));

	// musicalnotemiddle
	this.instance_1 = new lib.musicalnotemiddleenlarge("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(272.6,184.3,1,1,0,0,0,-15.7,-10.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({scaleX:1.06,scaleY:1.09,rotation:25.7,x:272.5,y:174.4},0).wait(1).to({scaleX:1.12,scaleY:1.19,rotation:51.4,x:272.4,y:164.5},0).wait(1).to({scaleX:1.18,scaleY:1.28,rotation:77.1,x:272.3,y:154.6},0).wait(1).to({scaleX:1.25,scaleY:1.37,rotation:102.9,y:144.7},0).wait(1).to({scaleX:1.31,scaleY:1.47,rotation:128.6,x:272.2,y:134.8},0).wait(1).to({scaleX:1.37,scaleY:1.56,rotation:154.3,x:272.1,y:125},0).wait(1).to({scaleX:1.43,scaleY:1.65,rotation:180,y:115.1},0).wait(1).to({scaleX:1.49,scaleY:1.75,rotation:205.7,x:272,y:105.3},0).wait(1).to({scaleX:1.55,scaleY:1.84,rotation:231.4,x:271.9,y:95.5},0).wait(1).to({scaleX:1.61,scaleY:1.93,rotation:257.1,x:271.8,y:85.6},0).wait(1).to({scaleX:1.67,scaleY:2.03,rotation:282.9,x:271.6,y:75.7},0).wait(1).to({scaleX:1.73,scaleY:2.12,rotation:308.6,x:271.5,y:65.9},0).wait(1).to({scaleX:1.8,scaleY:2.21,rotation:334.3,x:271.3,y:56},0).wait(1).to({scaleX:1.86,scaleY:2.31,rotation:360,x:271.2,y:46.1},0).wait(1));

	// musicalnoteleft
	this.instance_2 = new lib.musicalnoteleftenlarge("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(249.2,188.9,1,1,0,0,0,-11.2,-8.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({scaleX:1.11,scaleY:1.1,rotation:25.7,x:246,y:178.4},0).wait(1).to({scaleX:1.22,scaleY:1.21,rotation:51.4,x:242.9,y:167.9},0).wait(1).to({scaleX:1.33,scaleY:1.31,rotation:77.1,x:239.7,y:157.3},0).wait(1).to({scaleX:1.44,scaleY:1.41,rotation:102.9,x:236.5,y:146.7},0).wait(1).to({scaleX:1.55,scaleY:1.52,rotation:128.6,x:233.4,y:136.2},0).wait(1).to({scaleX:1.66,scaleY:1.62,rotation:154.3,x:230.2,y:125.7},0).wait(1).to({scaleX:1.77,scaleY:1.72,rotation:180,x:227.1,y:115.1},0).wait(1).to({scaleX:1.88,scaleY:1.83,rotation:205.7,x:224,y:104.7},0).wait(1).to({scaleX:1.99,scaleY:1.93,rotation:231.4,x:220.8,y:94.2},0).wait(1).to({scaleX:2.1,scaleY:2.03,rotation:257.1,x:217.7,y:83.7},0).wait(1).to({scaleX:2.21,scaleY:2.14,rotation:282.9,x:214.6,y:73.2},0).wait(1).to({scaleX:2.32,scaleY:2.24,rotation:308.6,x:211.4,y:62.7},0).wait(1).to({scaleX:2.43,scaleY:2.34,rotation:334.3,x:208.2,y:52.3},0).wait(1).to({scaleX:2.55,scaleY:2.45,rotation:360,x:205,y:41.8},0).wait(1));

	// g5note 
	this.instance_3 = new lib.g5note();
	this.instance_3.parent = this;
	this.instance_3.setTransform(276,322,1,1,0,0,0,15.5,15.5);
	new cjs.ButtonHelper(this.instance_3, 0, 1, 2);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(15));

	// c4note
	this.instance_4 = new lib.c4notebtn();
	this.instance_4.parent = this;
	this.instance_4.setTransform(277.5,375.9,1,1,0,0,0,13.1,13.1);
	new cjs.ButtonHelper(this.instance_4, 0, 1, 2);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(15));

	// d4note
	this.instance_5 = new lib.d4note();
	this.instance_5.parent = this;
	this.instance_5.setTransform(278,428.2,1,1,0,0,0,10.5,10.5);
	new cjs.ButtonHelper(this.instance_5, 0, 1, 2);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#454545").ss(1,1,1).p("ABpAAQAAAsgfAeQgeAfgsAAQgqAAgfgfQgfgeAAgsQAAgqAfgfQAfgfAqAAQAsAAAeAfQAfAfAAAqg");
	this.shape.setTransform(278,428.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance_5}]}).to({state:[{t:this.shape},{t:this.instance_5}]},14).wait(1));

	// g5note
	this.instance_6 = new lib.g5notebtn();
	this.instance_6.parent = this;
	this.instance_6.setTransform(278.5,481,1,1,0,0,0,14.6,14.6);
	new cjs.ButtonHelper(this.instance_6, 0, 1, 2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#454545").ss(1,1,1).p("ACSAAQAAA9grAqQgqArg9AAQg8AAgrgrQgqgqAAg9QAAg8AqgrQArgqA8AAQA9AAAqAqQArArAAA8g");
	this.shape_1.setTransform(278.5,481);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.instance_6}]}).to({state:[{t:this.shape_1},{t:this.instance_6}]},14).wait(1));

	// e4notes
	this.instance_7 = new lib.Symbol2();
	this.instance_7.parent = this;
	this.instance_7.setTransform(278.1,534.1,1,1,0,0,0,-15.7,-15.7);
	new cjs.ButtonHelper(this.instance_7, 0, 1, 2);

	this.instance_8 = new lib.e4noteBTnns();
	this.instance_8.parent = this;
	this.instance_8.setTransform(278.1,534.1,1,1,0,0,0,-15,-15);
	new cjs.ButtonHelper(this.instance_8, 0, 1, 2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_8},{t:this.instance_7}]}).wait(15));

	// Text Instruction
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#9933CC").s().p("AgFAFQgCgBAAgEQAAgCACgDQADgCACAAQADAAADACQACADAAACQAAAEgCABQgDADgDAAQgCAAgDgDg");
	this.shape_2.setTransform(368.7,469.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#9933CC").s().p("AAMA1IAAgJQgFAFgFACQgDACgGAAQgLAAgIgJQgIgKAAgOQAAgOAJgLQAJgMAOAAQAIAAAGAFIAAgMIgBgOIgBgEIgDgBIgFABIgBgCIAUgIIADAAIAABNIAAAOIACAEIADABIAFgCIABADIgUAIgAgOgHQgHAHAAAOQAAAPAHAIQAGAIAIAAQAGAAAGgHIAAgiQgBgEgCgFQgCgDgEgCQgDgDgDAAQgGAAgFAGg");
	this.shape_3.setTransform(363.3,465.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#9933CC").s().p("AADAiIAAgCIACAAQAEAAACgBQACgCABgDIAAgHIAAgaQAAgKgCgDQgDgFgFAAQgIAAgJAKIAAAiQAAAHABACIADADQACABAFAAIAAACIghAAIAAgCIACAAQAFAAACgDQABgCAAgIIAAgXIAAgPIgCgEIgDgBIgFACIgBgEIAUgIIADAAIAAAPQAMgPAKAAQAFAAAEADQAEADADAGQABAEAAAJIAAAcIABAJIADADIAHABIAAACg");
	this.shape_4.setTransform(355.6,466.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#9933CC").s().p("AAOAiIAAgNQgJAIgEADQgEADgFgBQgFAAgEgCQgFgEgBgFQgCgFAAgKIAAgcQAAgFgBgCIgDgDIgHgBIAAgCIAXAAIAAAsQAAAIAEAEQADACAEAAQADAAADgBQAFgDAFgFIAAglQAAgGgCgCQgDgCgGAAIAAgCIAXAAIAAAnIABAPQAAAAAAABQAAAAAAABQABAAAAAAQAAABABAAIACABIAGgBIABACIgVAIg");
	this.shape_5.setTransform(348.1,467);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#9933CC").s().p("AgYAYQgHgLAAgNQgBgHAFgKQAFgJAHgEQAIgFAHAAQAPAAAJAMQAJAKgBAMQAAAJgEAJQgFAJgHAFQgIAFgIgBQgPABgJgMgAgJgcQgEADgCAGQgDAFAAAKQAAANAGAKQAGAMAJAAQAGgBAFgFQAFgGgBgOQABgSgIgKQgFgHgIAAQgDAAgEACg");
	this.shape_6.setTransform(340.6,466.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#9933CC").s().p("AgNAiIgEgBQAAAAAAAAQgBAAAAAAQAAAAgBABQAAAAAAAAIgDAAIAAgYIADAAQACALAGAFQAFAFAHAAQAFAAADgDQADgDAAgEQAAgFgEgDQgDgEgKgFQgKgEgEgEQgDgFAAgGQAAgJAGgFQAFgGAJAAIAJACIAFABIACAAIABgDIADAAIAAAYIgDAAQgCgMgFgEQgEgDgGAAQgFAAgDACQgDADAAAEQAAADACAEQACADAHADIAKAFQAPAHAAALQAAAKgHAFQgHAGgJgBQgFAAgIgBg");
	this.shape_7.setTransform(334,466.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#9933CC").s().p("AgTAaQgJgKABgPQAAgQAJgKQAIgJANAAQALgBAHAIQAHAHABANIguAAQAAANAHAJQAIAIAIAAQAHABAFgEQAFgDADgKIADACQgCAKgHAJQgIAHgLABQgLAAgJgKgAgMgYQgEAEgBAIIAeAAIgCgJQgCgEgDgCQgDgCgDgBQgGAAgGAGg");
	this.shape_8.setTransform(453.4,448.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#9933CC").s().p("AgCAsQgEgCgBgEQgCgEAAgHIAAgsIgKAAIAAgCQAEgCAEgEQAEgEADgFIAEgKIACAAIAAAWIAQAAIAAAFIgQAAIAAArQAAAGACADQACACADgBQABAAAAAAQABAAABAAQAAAAABAAQAAgBABAAQACgBABgEIADAAQgCAIgFAEQgFADgFAAQgDAAgCgBg");
	this.shape_9.setTransform(448,447.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#9933CC").s().p("AAOAjIAAgPQgIAKgGACQgDADgFAAQgGgBgEgDQgEgDgCgFQgBgFAAgJIAAgeQAAgFgBgBIgDgDIgIgBIAAgCIAYAAIAAAsQAAAJADACQAEADAFABQABgBAFgCQAEgCAFgFIAAglQAAgFgCgDQgDgBgGgBIAAgCIAXAAIAAAnIAAAOQABABAAABQAAAAAAABQAAAAABAAQAAABAAAAIADABIAFgCIABAEIgUAIg");
	this.shape_10.setTransform(442.1,448.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#9933CC").s().p("AgPA0IAAgCQAFAAABgCIADgDIABgIIAAg8IAAgOIgCgEIgDgBIgFABIgBgCIATgIIADAAIAABYIABAIIADADIAHACIAAACg");
	this.shape_11.setTransform(436.3,446.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#9933CC").s().p("AgcA0IAAgCIACAAQAEAAACgCQADgBAAgDIABgJIAAgsIgMAAIAAgFIAMAAIAAgEQABgKADgIQADgHAHgDQAFgFAJAAQAHAAAGAFQAEAEABAEIgCADQAAABgBAAQgBABAAAAQgBAAAAAAQgBAAAAAAIgEgBIgEgFQgDgEgDgCIgEAAQgEgBgCACQgBACgBAEQgBADAAAQIAAAFIAQAAIAAAFIgQAAIAAAsQAAAIABADQACAEAFAAIAGAAIAAACg");
	this.shape_12.setTransform(432.7,446.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#9933CC").s().p("AAJAhQgCgDgBgGQgJAIgCABQgEACgEAAQgIAAgEgFQgEgEAAgIQAAgFABgEQADgFAIgEIAXgKIAAgCQAAgKgCgEQgEgEgFAAQgEAAgDADQgDACAAADIABAFQgBADgCACQAAAAAAABQgBAAAAAAQgBAAgBABQAAAAgBAAQgBAAAAAAQgBgBAAAAQgBAAAAAAQgBgBgBAAQgBgCAAgDQAAgHAHgFQAGgFAMAAQAIAAAFADQAEACACAFQACADAAAKIAAAVIAAAMIACADIACABIABgBIAHgFIAAAEQgJALgHAAQgEAAgCgCgAgHAAQgGADgCAEQgCADgBAEQABAGADADQADAEAEAAQAFAAAIgIIAAgYIgNAFg");
	this.shape_13.setTransform(422.4,448.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#9933CC").s().p("AgdAvQgDgCAAgEQAAAAAAgBQAAgBABAAQAAgBAAAAQABgBAAAAQACgCADAAIAHABIADABQADAAADgCQACgCACgHIAFgLIgYgyIgDgGIgDgDIgFgCIAAgDIAeAAIAAADIgBAAQgDAAgCABQAAABgBAAQAAAAAAABQAAAAAAABQgBAAAAABQAAADADAFIAQAhIAOgkIABgGIAAgCIgCgCIgEAAIAAgDIAVAAIAAADIgDABIgEADIgCAGIgbBCQgDAKgHAFQgGAFgHAAQgDAAgDgDg");
	this.shape_14.setTransform(411.3,449.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#9933CC").s().p("AAJAhQgCgDgBgGQgJAIgCABQgEACgEAAQgIAAgEgFQgEgEgBgIQAAgFACgEQADgFAIgEIAXgKIAAgCQAAgKgCgEQgDgEgGAAQgEAAgDADQgDACAAADIABAFQAAADgDACQAAAAAAABQgBAAAAAAQgBAAgBABQAAAAgBAAQgBAAAAAAQgBgBAAAAQgBAAAAAAQgBgBgBAAQgBgCAAgDQAAgHAGgFQAHgFAMAAQAIAAAFADQAEACACAFQACADAAAKIAAAVIAAAMIACADIACABIABgBIAHgFIAAAEQgJALgIAAQgDAAgCgCgAgGAAQgHADgCAEQgDADAAAEQAAAGAEADQADAEAEAAQAFAAAIgIIAAgYIgMAFg");
	this.shape_15.setTransform(404.5,448.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#9933CC").s().p("AgPA0IAAgCQAFAAABgCIADgDIABgIIAAg8IgBgOIgBgEIgDgBIgFABIgBgCIATgIIAEAAIAABYIAAAIIADADIAHACIAAACg");
	this.shape_16.setTransform(398.9,446.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#9933CC").s().p("AgiAzIAAgDIACAAQAEAAACgCIADgCIAAgKIAAg+IAAgIQAAAAgBgBQAAAAAAgBQAAAAgBAAQAAAAAAAAIgEgBIgEABIgBgDIAVgIIADAAIAAAPQAFgIAFgEQAEgEAGABQAKAAAHAIQAIAJAAAPQAAARgKALQgIAKgMAAQgFAAgEgCQgDgBgDgDIAAAUIAAAJIADADIAHABIAAADgAgCglQgCABgGAHIAAAZIAAAKQABADAEAEQAEADAFAAQAIAAAEgGQAGgHAAgNQAAgPgHgIQgEgGgHAAQgDAAgDACg");
	this.shape_17.setTransform(392.7,449.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#9933CC").s().p("AgYAXQgHgKgBgMQABgJAEgIQAEgKAIgEQAHgFAIABQAPAAAJALQAJAKgBAMQABAIgFAKQgFAJgHAFQgIAFgIAAQgPAAgJgNgAgJgcQgEADgCAFQgDAGAAAJQAAAOAGALQAGALAJAAQAGAAAFgHQAFgFAAgPQAAgQgIgLQgFgHgIAAQgDAAgEACg");
	this.shape_18.setTransform(381.7,448.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#9933CC").s().p("AgCAsQgEgCgBgEQgCgEAAgHIAAgsIgKAAIAAgCQAEgCAEgEQAEgEADgFIAEgKIACAAIAAAWIAQAAIAAAFIgQAAIAAArQAAAGACADQACACADgBQABAAAAAAQABAAABAAQAAAAABAAQAAgBABAAQACgBABgEIADAAQgCAIgFAEQgFADgFAAQgDAAgCgBg");
	this.shape_19.setTransform(376,447.3);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#9933CC").s().p("AgNAhIgEgBQAAAAAAABQgBAAAAAAQAAAAgBABQAAAAAAAAIgDAAIAAgXIADAAQACAKAGAFQAFAFAHAAQAFAAADgCQADgDAAgFQAAgFgEgEQgDgDgKgFQgKgFgEgEQgDgEAAgGQAAgIAGgGQAFgGAJABIAJABIAFABIACAAIABgCIADAAIAAAWIgDAAQgCgLgFgDQgEgEgGAAQgFAAgDACQgDADAAADQAAAEACAEQACADAHADIAKAFQAPAGAAAMQAAAJgHAGQgHAGgJAAQgFgBgIgCg");
	this.shape_20.setTransform(367.3,448.3);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#9933CC").s().p("AgTAaQgJgKAAgPQABgQAIgKQAJgJANAAQALgBAHAIQAIAHAAANIguAAQAAANAHAJQAIAIAIAAQAHABAFgEQAFgDADgKIADACQgCAKgHAJQgIAHgLABQgLAAgJgKgAgMgYQgEAEgBAIIAeAAIgBgJQgCgEgEgCQgDgCgEgBQgFAAgGAGg");
	this.shape_21.setTransform(361,448.3);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#9933CC").s().p("AgPA0IAAgCQAFAAACgCIACgDIABgIIAAg8IAAgOIgCgEIgDgBIgFABIgBgCIATgIIADAAIAABYIABAIIADADIAHACIAAACg");
	this.shape_22.setTransform(355.6,446.5);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#9933CC").s().p("AgTAaQgIgKAAgQQAAgPAJgJQAKgKAMAAQAKAAAGAEQAHAGAAAFQAAABAAABQAAABgBAAQAAABAAAAQgBABAAAAQgCACgDAAQgFAAgCgDQgBgCAAgEQgBgEgCgDQgDgCgFAAQgGABgEAFQgGAHAAAMQAAALAGAJQAGAJAJAAQAHAAAFgFQAEgDAEgJIACABQgCANgIAIQgIAGgKABQgKAAgJgKg");
	this.shape_23.setTransform(350.1,448.3);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#9933CC").s().p("AgYAiIAAgCQAGAAACgBIADgFIAAgGIAAgZIAAgPQAAAAAAgBQgBAAAAgBQAAAAAAAAQgBgBAAAAIgDgBIgGACIAAgDIAUgIIAEAAIAAAOQAHgOAJAAQADAAAEACQACADAAADQAAADgCABQgBABAAAAQgBABAAAAQgBAAAAAAQgBAAgBAAQgCAAgDgCIgFgCIgDABQgDADgCAHIAAAfIAAAIIADAEQACABAFAAIAAACg");
	this.shape_24.setTransform(344.4,448.2);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#9933CC").s().p("AgPA0IAAgCQAFAAACgCIACgDIABgIIAAgaIAAgNIgCgEIgDgBIgFACIgBgDIATgIIAEAAIAAA1IABAIQAAABAAAAQAAABABAAQAAABAAAAQABAAAAAAIAHACIAAACgAgEgmQgCgCAAgEQAAgDACgCQACgCADAAQADAAACACQACACAAADQAAAEgCACQgCACgDAAQgDAAgCgCg");
	this.shape_25.setTransform(339.8,446.5);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#9933CC").s().p("AgTAaQgIgKAAgQQAAgPAJgJQAKgKAMAAQAKAAAGAEQAHAGAAAFQAAABAAABQgBABAAAAQAAABAAAAQgBABAAAAQgCACgDAAQgFAAgCgDQgBgCAAgEQgBgEgCgDQgDgCgFAAQgGABgEAFQgGAHAAAMQAAALAGAJQAGAJAJAAQAHAAAFgFQAEgDAEgJIACABQgCANgIAIQgIAGgKABQgKAAgJgKg");
	this.shape_26.setTransform(334.3,448.3);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#9933CC").s().p("AAMA1IAAgKQgFAFgFADQgDACgGAAQgLAAgIgJQgIgKAAgOQAAgOAJgLQAJgMAOAAQAIAAAGAFIAAgMIgBgOIgBgDIgDgBIgFABIgBgDIAUgIIADAAIAABMIAAAPIACADIADABIAFgBIABADIgUAIgAgOgHQgHAHAAAOQAAAPAHAIQAGAIAIAAQAGAAAGgGIAAgjQgBgEgCgEQgCgEgEgDQgDgCgDABQgGAAgFAFg");
	this.shape_27.setTransform(457,428);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#9933CC").s().p("AgTAaQgIgJAAgQQgBgRAJgJQAJgKAMAAQAMABAHAHQAIAHgBANIgtAAQAAANAHAJQAHAJAKAAQAGAAAFgEQAFgEADgIIACABQgBAKgIAIQgHAJgLAAQgLAAgJgKgAgLgZQgFAFgBAJIAeAAIgCgJQgBgFgEgCQgEgCgDAAQgFAAgFAEg");
	this.shape_28.setTransform(449.7,429.7);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#9933CC").s().p("AgYAjIAAgDQAGAAADgCIACgDIAAgIIAAgZIAAgNQAAgBAAgBQAAAAgBgBQAAAAAAAAQgBgBAAAAIgDgBIgGABIAAgCIAUgJIAEAAIAAAQQAHgPAIgBQAFABACACQADADAAADQAAACgCACQAAABgBAAQgBABAAAAQgBAAAAAAQgBABAAAAQgDAAgEgDIgEgDIgDACQgDADgCAGIAAAgIAAAIIADADQADACAEAAIAAADg");
	this.shape_29.setTransform(443.9,429.6);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#9933CC").s().p("AAOAjIAAgPQgIAKgGACQgDACgFABQgGAAgEgDQgEgEgCgFQgBgFAAgKIAAgcQAAgFgBgCIgDgDIgIgBIAAgDIAYAAIAAAsQAAAJADAEQAEADAFAAQABAAAFgCQAEgCAFgGIAAglQAAgFgCgCQgDgCgGgBIAAgDIAXAAIAAAoIAAAOQABABAAABQAAAAAAABQAAAAABAAQAAABAAAAIADABIAFgBIABACIgUAJg");
	this.shape_30.setTransform(437.6,429.8);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#9933CC").s().p("AgYAYQgIgKAAgNQABgJAEgJQAFgJAHgEQAIgEAHgBQAPAAAKAMQAHAKAAANQABAHgFAKQgEAJgIAFQgHAEgJABQgPgBgJgLgAgJgbQgEACgDAGQgCAGAAAIQAAAOAGAKQAGALAIAAQAIAAAEgFQAEgHABgOQgBgQgHgLQgFgHgHAAQgEAAgEADg");
	this.shape_31.setTransform(430.1,429.7);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#9933CC").s().p("AgPA0IAAgCQAFAAACgBIACgEIABgIIAAg8IgBgOIgBgDIgDgBIgFABIgBgDIATgIIAEAAIAABYIAAAIIADAEIAHABIAAACg");
	this.shape_32.setTransform(424.3,427.9);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#9933CC").s().p("AgYAYQgHgKAAgNQgBgJAFgJQAFgJAHgEQAIgEAHgBQAPAAAJAMQAJAKgBANQAAAHgEAKQgFAJgHAFQgIAEgIABQgPgBgJgLgAgJgbQgEACgCAGQgDAGAAAIQAAAOAGAKQAGALAJAAQAGAAAFgFQAFgHgBgOQABgQgIgLQgFgHgIAAQgDAAgEADg");
	this.shape_33.setTransform(418.4,429.7);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#9933CC").s().p("AgTAaQgIgJAAgRQAAgPAJgKQAKgKAMAAQAKAAAGAGQAHAFAAAGQAAAAAAABQAAABgBAAQAAABAAAAQgBABAAAAQgCACgDAAQgFAAgCgDQgBgCAAgEQgBgEgCgCQgDgCgFAAQgGgBgEAGQgGAHAAALQAAALAGAKQAGAJAJAAQAHAAAFgFQAEgDAEgJIACABQgCAOgIAGQgIAIgKAAQgKAAgJgKg");
	this.shape_34.setTransform(411.3,429.7);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#9933CC").s().p("AgTAaQgIgJAAgQQgBgRAKgJQAIgKAMAAQAMABAHAHQAHAHAAANIgtAAQAAANAHAJQAIAJAJAAQAGAAAFgEQAFgEADgIIACABQgBAKgIAIQgHAJgLAAQgLAAgJgKgAgLgZQgFAFgBAJIAeAAIgCgJQgCgFgDgCQgEgCgCAAQgHAAgEAEg");
	this.shape_35.setTransform(401,429.7);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#9933CC").s().p("AADA0IAAgCIACAAQAFgBACgBQACgCAAgDIAAgGIAAgYQAAgLgBgDQgBgDgCgBQgDgCgEAAIgGACQgEABgFAGIAAAjIAAAIIAEAEIAGABIAAACIggAAIAAgCQAEgBACgBIADgDIABgIIAAg8IgBgOIgBgDIgEgBIgEABIgBgDIAUgIIADAAIAAAxQAIgJAEgCQAEgDAGAAQAFAAAEADQAEADACAHQACAEAAAMIAAAYIABAIIACAEIAHABIAAACg");
	this.shape_36.setTransform(393.9,427.9);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#9933CC").s().p("AgCArQgEgCgBgDQgCgEAAgHIAAgsIgKAAIAAgCQAEgCAEgEQAEgEADgFIAEgKIACAAIAAAWIAQAAIAAAFIgQAAIAAAqQAAAHACACQACACADAAQABAAAAAAQABAAABAAQAAAAABAAQAAgBABAAQACgBABgDIADAAQgCAHgFAEQgFADgFAAQgDAAgCgCg");
	this.shape_37.setTransform(388.1,428.7);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#9933CC").s().p("AADAjIAAgDIACAAQAEAAACgCQACgBABgDIAAgHIAAgaQAAgJgCgFQgDgEgFAAQgIAAgJAKIAAAiQAAAHABACIADADQACABAFAAIAAADIghAAIAAgDIACAAQAFAAACgDQABgCAAgIIAAgYIAAgOIgCgEIgDgBIgFABIgBgCIAUgJIADAAIAAAPQAMgOAKgBQAFABAEACQAEADADAGQABAEAAAKIAAAbIABAJIADADIAHABIAAADg");
	this.shape_38.setTransform(378.5,429.6);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#9933CC").s().p("AgYAYQgIgKABgNQgBgJAFgJQAEgJAIgEQAHgEAIgBQAPAAAKAMQAHAKABANQgBAHgEAKQgFAJgHAFQgIAEgIABQgPgBgJgLgAgJgbQgEACgDAGQgCAGAAAIQAAAOAGAKQAGALAIAAQAIAAAEgFQAFgHgBgOQAAgQgHgLQgFgHgHAAQgEAAgEADg");
	this.shape_39.setTransform(371,429.7);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#9933CC").s().p("AAFA0IAAgCIADgBIABgCQAAgDgDgDIgTgbIAQgOIAGgGIABgCIgBgDIgEAAIAAgDIAdAAIAAADQgGAAgEABIgJAGIgQAPIAQAWIAKALIAGAFIAGABIAAACgAglA0IAAgCQAGgBADgBIACgDIABgHIAAg9IgBgOQAAgBAAAAQAAgBAAAAQgBgBAAAAQAAAAgBAAIgCgBIgFABIgCgDIAUgIIAEAAIAABBIAAAXQAAAGABACIACAEQACABAGAAIAAACgAgNAOg");
	this.shape_40.setTransform(359.8,427.9);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#9933CC").s().p("AgTAaQgIgJAAgRQAAgPAJgKQAKgKAMAAQAKAAAGAGQAHAFAAAGQAAAAAAABQAAABgBAAQAAABAAAAQgBABAAAAQgCACgDAAQgFAAgCgDQgBgCAAgEQgBgEgCgCQgDgCgFAAQgGgBgEAGQgGAHAAALQAAALAGAKQAGAJAJAAQAHAAAFgFQAEgDAEgJIACABQgCAOgIAGQgIAIgKAAQgKAAgJgKg");
	this.shape_41.setTransform(352.6,429.7);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#9933CC").s().p("AgPA0IAAgCQAFAAACgBIACgEIABgIIAAgaIAAgNIgCgDIgDgBIgFABIgBgDIATgIIAEAAIAAA1IABAIQAAABAAAAQAAABABAAQAAABAAAAQABAAAAABIAHABIAAACgAgEgnQgCgCAAgDQAAgDACgCQACgCADAAQADAAACACQACACAAADQAAADgCACQgCACgDAAQgDAAgCgCg");
	this.shape_42.setTransform(347.3,427.9);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#9933CC").s().p("AgPA0IAAgCQAFAAABgBIADgEIABgIIAAg8IAAgOIgCgDIgDgBIgFABIgBgDIATgIIADAAIAABYIABAIIADAEIAHABIAAACg");
	this.shape_43.setTransform(343.2,427.9);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#9933CC").s().p("AgiAiQgKgOAAgTQAAgNAHgNQAHgNALgGQAMgHANAAQAKAAALAFIAEACQABAAAAAAQABAAAAAAQABgBAAAAQAAAAABgBQACgCAAgDIADAAIACAhIgCAAQgEgOgJgHQgIgHgMAAQgJAAgIAFQgIAFgFALQgEALAAAPQAAAOAEAKQAFAKAIAFQAJAGAKgBQAKABAHgFQAHgEAJgMIADABQgIAOgKAFQgKAHgNAAQgYAAgOgSg");
	this.shape_44.setTransform(336,428.1);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f().s("#454545").ss(1,1,1).p("Air1BIAAiRIiRCRICRCQIAAiQIiRAAAEsnQIAAtxInXAAAhrUzIAAiYIihCYIChCgIAAigIihAAAE9DRIAARiImoAA");
	this.shape_45.setTransform(349.9,456.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2}]}).wait(15));

	// f4notesss
	this.f4notetriggermelody = new lib.f4NoteButon();
	this.f4notetriggermelody.parent = this;
	this.f4notetriggermelody.setTransform(278.1,588.1,1,1,0,0,0,-16,-16);
	new cjs.ButtonHelper(this.f4notetriggermelody, 0, 1, 2);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("#454545").ss(1,1,1).p("ACgAAQAABCgvAvQgvAvhCAAQhCAAgvgvQgugvAAhCQAAhBAugwQAvguBCAAQBCAAAvAuQAvAwAABBg");
	this.shape_46.setTransform(278.1,588.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_46},{t:this.f4notetriggermelody}]}).wait(15));

	// textmouthpiece
	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#9933CC").s().p("AgPAVQgHgIAAgMQAAgNAHgHQAHgJAKAAQAJAAAGAHQAGAGAAAJIgkAAQgBALAGAIQAGAGAHAAQAFAAAEgDQAEgDADgGIACABQgCAIgGAGQgFAHgJgBQgJABgHgIgAgJgTQgEADAAAHIAXAAIgBgHQgBgEgDgBIgFgCQgFAAgEAEg");
	this.shape_47.setTransform(420.4,764.3);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#9933CC").s().p("AgPAVQgHgIAAgNQAAgMAIgHQAHgJAKAAQAIABAFAEQAFAEAAAEQAAABAAABQAAAAAAABQAAAAgBABQAAAAAAABIgEABQgEgBgCgBIgBgGQAAgDgCgBQgCgDgEAAQgFAAgDAFQgFAGAAAJQAAAJAFAHQAEAIAHgBQAGAAAFgDQADgDADgHIACABQgDAKgGAGQgGAGgIgBQgIABgHgIg");
	this.shape_48.setTransform(415,764.3);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#9933CC").s().p("AgPAVQgHgIAAgMQAAgNAHgHQAHgJAKAAQAJAAAGAHQAGAGAAAJIgkAAQgBALAGAIQAGAGAHAAQAFAAAEgDQAEgDADgGIACABQgCAIgGAGQgFAHgJgBQgJABgHgIgAgJgTQgEADAAAHIAXAAIgBgHQgBgEgDgBIgFgCQgFAAgEAEg");
	this.shape_49.setTransform(409.7,764.3);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#9933CC").s().p("AgLAqIAAgCQADAAACgBIACgDIABgGIAAgVIgBgKIgBgDIgDgBIgDABIgBgCIAPgHIACAAIAAArIABAGQAAABAAAAQABABAAAAQAAAAAAAAQABABAAAAIAGABIAAACgAgDgeQAAgBgBAAQAAgBAAAAQAAgBAAgBQAAAAAAgBQAAAAAAgBQAAgBAAAAQAAgBAAAAQABAAAAgBQAAAAABgBQABAAAAAAQABAAAAgBQAAAAAAAAQABAAABAAQAAABABAAQAAAAABAAQAAABABAAQAAABAAAAQABAAAAABQAAAAAAABQAAABAAAAQAAABAAAAQAAABAAABQAAAAgBABQAAAAAAABQgBAAAAAAQgBABAAAAQgBAAAAAAQgBAAgBAAQAAAAAAAAQAAAAgBAAQAAAAgBgBQgBAAAAAAg");
	this.shape_50.setTransform(405.4,762.8);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#9933CC").s().p("AgdAoIAAgCIADAAQAFAAACgEQABgCAAgGIAAgzQAAgHgBgCQgDgDgEAAIgDAAIAAgCIAdAAQAKAAAGADQAGACAEAFQAEAFAAAHQAAAKgGAGQgHAFgLAAIgGAAIgHgBIAAAXQAAAHACACQACADAEAAIADAAIAAACgAgHghIAAAhIAGAAIADAAQAGAAAFgDQAEgFAAgIQAAgFgCgEQgCgFgEgCQgEgCgFAAIgHABg");
	this.shape_51.setTransform(400.2,763);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#9933CC").s().p("AADAqIAAgCIABAAIAFgBIACgEIAAgFIAAgTQAAgJgBgCQAAgDgCgBIgFgBIgFABIgHAFIAAAdIAAAGIACADIAGABIAAACIgaAAIAAgCIAFgBIACgDQABgBAAgFIAAgwIAAgLIgCgDIgDgBIgDABIgBgCIAQgHIADAAIAAAoQAGgHADgCQADgDAFAAQAEAAAEADQADADABAFQABADAAAKIAAATIABAHIACACIAFABIAAACg");
	this.shape_52.setTransform(391,762.8);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#9933CC").s().p("AgCAjQgCgCgBgDQgCgCAAgGIAAgjIgIAAIAAgCIAHgFIAGgHIACgIIACAAIAAASIANAAIAAAEIgNAAIAAAhQAAAGACACQAAAAABAAQAAABAAAAQABAAAAAAQABAAAAAAIAEgBIADgDIACAAQgCAFgEADQgDADgEAAIgFgBg");
	this.shape_53.setTransform(386.4,763.4);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#9933CC").s().p("AALAbIAAgLQgHAIgEABQgCACgEAAQgFAAgDgCQgDgDgBgEQgCgEAAgIIAAgWIAAgFIgDgCQgBgCgFAAIAAgCIATAAIAAAjQAAAHACADQADADAEAAIAEgCIAIgGIAAgeQAAgEgCgBQgBgDgGAAIAAgCIATAAIAAAgIAAALQAAABABAAQAAABAAAAQAAAAAAABQAAAAABAAIACABIAEgBIABACIgQAGg");
	this.shape_54.setTransform(381.7,764.4);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#9933CC").s().p("AgTATQgGgIAAgLQAAgFAEgIQAEgHAFgEQAGgEAGAAQAMAAAIAKQAGAIAAAKQAAAHgDAHQgEAHgGAEQgGAEgHgBQgMAAgHgJgAgHgVQgDABgCAFQgCAFAAAHQAAALAEAIQAGAJAGAAQAGgBAEgEQADgFAAgLQAAgNgGgJQgEgGgGAAQgDAAgDADg");
	this.shape_55.setTransform(375.7,764.3);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#9933CC").s().p("AASAoIAAgCIACAAQAFAAADgDQABgCAAgHIAAg0IgeBCIgCAAIgehCIAAA0QgBAHACACQACADAFAAIACAAIAAACIgbAAIAAgCIADAAQAFAAACgDQABgCAAgHIAAgzIgBgIQAAAAAAAAQgBgBAAAAQAAAAgBgBQAAAAgBAAQgCgCgFAAIAAgCIAWAAIAdA9IAcg9IAWAAIAAACIgDAAQgEAAgDAEQgBABAAAHIAAAzQAAAHABACQADADAEAAIADAAIAAACg");
	this.shape_56.setTransform(367.3,763);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f().s("#454545").ss(1,1,1).p("ADmAAIk1AAIiWAAICWCgIAAigIAAifIiWCf");
	this.shape_57.setTransform(337,763);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47}]}).wait(15));

	// Flute
	this.instance_9 = new lib.flutepng();
	this.instance_9.parent = this;
	this.instance_9.setTransform(-102,113,0.785,0.781);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(15));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(173,544.5,753.9,749.5);
// library properties:
lib.properties = {
	width: 550,
	height: 863,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/flutepng.png", id:"flutepng"},
		{src:"images/musicalnote.png", id:"musicalnote"},
		{src:"sounds/csharp4wav.mp3", id:"csharp4wav"},
		{src:"sounds/d4wav.mp3", id:"d4wav"},
		{src:"sounds/e4wav.mp3", id:"e4wav"},
		{src:"sounds/f4wav.mp3", id:"f4wav"},
		{src:"sounds/g4wav.mp3", id:"g4wav"},
		{src:"sounds/g5wav.mp3", id:"g5wav"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;