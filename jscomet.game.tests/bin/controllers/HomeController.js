
var ____imported = JSComet.include('jscomet.core', false);

var Controller = ____imported.Controller;;

var HomeController = (function(Controller){
"use strict";

var ___privateStatic___ = {};
function HomeController(){
	JSComet.checkClass(this, HomeController);
	var ___private___ = {};
	var ___self___ = this;
	var ___super___ = null;

	var __callSuperConstructor__ = function(){

		Controller.apply(___self___, arguments);
		___super___ = JSComet.wrapSuper(___self___);
		___defineAllProperties___.call(___self___);
	}

		var ___defineAllProperties___ = function(){

___self___.index =  (function index(){
  var  z____return = (function index(){
        
		return this.view("index");
	}).apply(typeof ___self___ == 'undefined' ? this : ___self___, arguments);
return z____return;});
		};
	var __callThisConstructor__ = function (){
		(function(){

  var  z____return = (function constructor(){
        
	 if(typeof Controller != 'undefined') __callSuperConstructor__.call(this);
		this.title = "Home";
	}).apply(typeof ___self___ == 'undefined' ? this : ___self___, arguments);
return z____return;
		}).apply(___self___, arguments);

	};
return __callThisConstructor__.apply(___self___, arguments);}

JSComet.inherits(HomeController, Controller);

return HomeController;
})(Controller);

module.exports['default'] = HomeController;
