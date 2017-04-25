var z____memoryImport = z____memoryImport || {};

z____memoryImport['/Character.js'] = {
 cache: null, code: function(){
 var module = {exports: {}};

var ____imported = JSComet.include('./Sprite', false, z____memoryImport);

var Sprite = ____imported.default;;

var ____imported = JSComet.include('./MovimentValidator', false, z____memoryImport);

var MovimentValidator = ____imported.default;;

var Character = (function(){
"use strict";

var ___privateStatic___ = {};
function Character(){
	JSComet.checkClass(this, Character);
	var ___private___ = {};
	var ___self___ = this;

	var __callSuperConstructor__ = function(){

		___defineAllProperties___.call(___self___);
	}

		var ___defineAllProperties___ = function(){

JSComet.defineProperty(___private___, { enumerable: false, key: 'moving_x', get: (function(){ var z____return = (function moving_x(){return ___private___.z____moving_x;}).apply(___self___, arguments);
 
if((typeof z____return != 'number') ||
 z____return !== parseInt(z____return, 10)|| isNaN(z____return)
 || z____return > 2147483647
 || z____return < -2147483648)
 throw "Character#moving_x - the return type must be a integer between -2147483648 and 2147483647";
 return z____return;}), set:(function(){ return (function moving_x(value){

if((typeof value != 'number') ||
 value !== parseInt(value, 10)|| isNaN(value)
 || value > 2147483647
 || value < -2147483648)
 throw "Character#moving_x - the property 'value' must be a integer between -2147483648 and 2147483647";
 ___private___.z____moving_x = value; }).apply(___self___, arguments);}) });

JSComet.defineProperty(___private___, { enumerable: false, key: 'moving_y', get: (function(){ var z____return = (function moving_y(){return ___private___.z____moving_y;}).apply(___self___, arguments);
 
if((typeof z____return != 'number') ||
 z____return !== parseInt(z____return, 10)|| isNaN(z____return)
 || z____return > 2147483647
 || z____return < -2147483648)
 throw "Character#moving_y - the return type must be a integer between -2147483648 and 2147483647";
 return z____return;}), set:(function(){ return (function moving_y(value){

if((typeof value != 'number') ||
 value !== parseInt(value, 10)|| isNaN(value)
 || value > 2147483647
 || value < -2147483648)
 throw "Character#moving_y - the property 'value' must be a integer between -2147483648 and 2147483647";
 ___private___.z____moving_y = value; }).apply(___self___, arguments);}) });

JSComet.defineProperty(___private___, { enumerable: false, key: 'stopCount', get: (function(){ var z____return = (function stopCount(){return ___private___.z____stopCount;}).apply(___self___, arguments);
 
if((typeof z____return != 'number') ||
 z____return !== parseInt(z____return, 10)|| isNaN(z____return)
 || z____return > 2147483647
 || z____return < -2147483648)
 throw "Character#stopCount - the return type must be a integer between -2147483648 and 2147483647";
 return z____return;}), set:(function(){ return (function stopCount(value){

if((typeof value != 'number') ||
 value !== parseInt(value, 10)|| isNaN(value)
 || value > 2147483647
 || value < -2147483648)
 throw "Character#stopCount - the property 'value' must be a integer between -2147483648 and 2147483647";
 ___private___.z____stopCount = value; }).apply(___self___, arguments);}) });

JSComet.defineProperty(___self___, { enumerable: false, key: 'isMoving', get: (function(){ var z____return = (function isMoving(){return ___private___.z____isMoving;}).apply(___self___, arguments);
 
if((typeof z____return != 'boolean'))
 throw "Character#isMoving - the return type must be 'boolean'";
 return z____return;}), set:(function(){ return (function isMoving(value){

if((typeof value != 'boolean'))
 throw "Character#isMoving - the property 'value' must be 'boolean'";
 ___private___.z____isMoving = value; }).apply(___self___, arguments);}) });

JSComet.defineProperty(___self___, { enumerable: false, key: 'direction', get: (function(){ var z____return = (function direction(){return ___private___.z____direction;}).apply(___self___, arguments);
 
if((typeof z____return != 'number') ||
 z____return !== parseInt(z____return, 10)|| isNaN(z____return)
 || z____return > 2147483647
 || z____return < -2147483648)
 throw "Character#direction - the return type must be a integer between -2147483648 and 2147483647";
 return z____return;}), set:(function(){ return (function direction(value){

if((typeof value != 'number') ||
 value !== parseInt(value, 10)|| isNaN(value)
 || value > 2147483647
 || value < -2147483648)
 throw "Character#direction - the property 'value' must be a integer between -2147483648 and 2147483647";
 ___private___.z____direction = value; }).apply(___self___, arguments);}) });

JSComet.defineProperty(___self___, { enumerable: false, key: 'through', get: (function(){ var z____return = (function through(){return ___private___.z____through;}).apply(___self___, arguments);
 
if((typeof z____return != 'boolean'))
 throw "Character#through - the return type must be 'boolean'";
 return z____return;}), set:(function(){ return (function through(value){

if((typeof value != 'boolean'))
 throw "Character#through - the property 'value' must be 'boolean'";
 ___private___.z____through = value; }).apply(___self___, arguments);}) });

JSComet.defineProperty(___self___, { enumerable: false, key: 'movementType', get: (function(){ var z____return = (function movementType(){return ___private___.z____movementType;}).apply(___self___, arguments);
 
if((typeof z____return != 'number') ||
 z____return !== parseInt(z____return, 10)|| isNaN(z____return)
 || z____return > 2147483647
 || z____return < -2147483648)
 throw "Character#movementType - the return type must be a integer between -2147483648 and 2147483647";
 return z____return;}), set:(function(){ return (function movementType(value){

if((typeof value != 'number') ||
 value !== parseInt(value, 10)|| isNaN(value)
 || value > 2147483647
 || value < -2147483648)
 throw "Character#movementType - the property 'value' must be a integer between -2147483648 and 2147483647";
 ___private___.z____movementType = value; }).apply(___self___, arguments);}) });

JSComet.defineProperty(___self___, { enumerable: false, key: 'frequence', get: (function(){ var z____return = (function frequence(){return ___private___.z____frequence;}).apply(___self___, arguments);
 
if((typeof z____return != 'number') ||
 z____return !== parseInt(z____return, 10)|| isNaN(z____return)
 || z____return > 2147483647
 || z____return < -2147483648)
 throw "Character#frequence - the return type must be a integer between -2147483648 and 2147483647";
 return z____return;}), set:(function(){ return (function frequence(value){

if((typeof value != 'number') ||
 value !== parseInt(value, 10)|| isNaN(value)
 || value > 2147483647
 || value < -2147483648)
 throw "Character#frequence - the property 'value' must be a integer between -2147483648 and 2147483647";
 ___private___.z____frequence = value; }).apply(___self___, arguments);}) });

JSComet.defineProperty(___self___, { enumerable: false, key: 'directionFix', get: (function(){ var z____return = (function directionFix(){return ___private___.z____directionFix;}).apply(___self___, arguments);
 
if((typeof z____return != 'boolean'))
 throw "Character#directionFix - the return type must be 'boolean'";
 return z____return;}), set:(function(){ return (function directionFix(value){

if((typeof value != 'boolean'))
 throw "Character#directionFix - the property 'value' must be 'boolean'";
 ___private___.z____directionFix = value; }).apply(___self___, arguments);}) });

JSComet.defineProperty(___self___, { enumerable: false, key: 'walkingAnimation', get: (function(){ var z____return = (function walkingAnimation(){return ___private___.z____walkingAnimation;}).apply(___self___, arguments);
 
if((typeof z____return != 'boolean'))
 throw "Character#walkingAnimation - the return type must be 'boolean'";
 return z____return;}), set:(function(){ return (function walkingAnimation(value){

if((typeof value != 'boolean'))
 throw "Character#walkingAnimation - the property 'value' must be 'boolean'";
 ___private___.z____walkingAnimation = value; }).apply(___self___, arguments);}) });

JSComet.defineProperty(___self___, { enumerable: false, key: 'steppingAnimation', get: (function(){ var z____return = (function steppingAnimation(){return ___private___.z____steppingAnimation;}).apply(___self___, arguments);
 
if((typeof z____return != 'boolean'))
 throw "Character#steppingAnimation - the return type must be 'boolean'";
 return z____return;}), set:(function(){ return (function steppingAnimation(value){

if((typeof value != 'boolean'))
 throw "Character#steppingAnimation - the property 'value' must be 'boolean'";
 ___private___.z____steppingAnimation = value; }).apply(___self___, arguments);}) });

JSComet.defineProperty(___self___, { enumerable: false, key: 'sprite', get: (function(){ var z____return = (function sprite(){return ___private___.z____sprite;}).apply(___self___, arguments);
 
if(z____return !== null && !(z____return instanceof Sprite))
 throw "Character#sprite - the return type must be 'Sprite'";
 return z____return;}), set:(function(){ return (function sprite(value){

if(value !== null && !(value instanceof Sprite))
 throw "Character#sprite - the property 'value' must be 'Sprite'";
 ___private___.z____sprite = value; }).apply(___self___, arguments);}) });

JSComet.defineProperty(___self___, { enumerable: false, key: 'x', get: (function(){ var z____return = (function x(){return ___private___.z____x;}).apply(___self___, arguments);
 
if((typeof z____return != 'number') ||
 z____return !== parseInt(z____return, 10)|| isNaN(z____return)
 || z____return > 2147483647
 || z____return < -2147483648)
 throw "Character#x - the return type must be a integer between -2147483648 and 2147483647";
 return z____return;}), set:(function(){ return (function x(value){

if((typeof value != 'number') ||
 value !== parseInt(value, 10)|| isNaN(value)
 || value > 2147483647
 || value < -2147483648)
 throw "Character#x - the property 'value' must be a integer between -2147483648 and 2147483647";
 ___private___.z____x = value; }).apply(___self___, arguments);}) });

JSComet.defineProperty(___self___, { enumerable: false, key: 'y', get: (function(){ var z____return = (function y(){return ___private___.z____y;}).apply(___self___, arguments);
 
if((typeof z____return != 'number') ||
 z____return !== parseInt(z____return, 10)|| isNaN(z____return)
 || z____return > 2147483647
 || z____return < -2147483648)
 throw "Character#y - the return type must be a integer between -2147483648 and 2147483647";
 return z____return;}), set:(function(){ return (function y(value){

if((typeof value != 'number') ||
 value !== parseInt(value, 10)|| isNaN(value)
 || value > 2147483647
 || value < -2147483648)
 throw "Character#y - the property 'value' must be a integer between -2147483648 and 2147483647";
 ___private___.z____y = value; }).apply(___self___, arguments);}) });

JSComet.defineProperty(___self___, { enumerable: false, key: 'movimentValidator', get: (function(){ var z____return = (function movimentValidator(){return ___private___.z____movimentValidator;}).apply(___self___, arguments);
 
if(z____return !== null && !(z____return instanceof MovimentValidator))
 throw "Character#movimentValidator - the return type must be 'MovimentValidator'";
 return z____return;}), set:(function(){ return (function movimentValidator(value){

if(value !== null && !(value instanceof MovimentValidator))
 throw "Character#movimentValidator - the property 'value' must be 'MovimentValidator'";
 ___private___.z____movimentValidator = value; }).apply(___self___, arguments);}) });

		___private___.z____moving_x =  0;
		___private___.z____moving_y =  0;
		___private___.z____stopCount =  0;
		___private___.z____isMoving =  false;
		___private___.z____direction =  0;
		___private___.z____through =  false;
		___private___.z____movementType =  0;
		___private___.z____frequence =  3;
		___private___.z____directionFix =  false;
		___private___.z____walkingAnimation =  true;
		___private___.z____steppingAnimation =  false;
		___private___.z____sprite =  null;
		___private___.z____x =  0;
		___private___.z____y =  0;
		___private___.z____movimentValidator = null;
___self___.update =  (function update(){
  var  z____return = (function update(){
        
    if (this.sprite) {
      if (this.steppingAnimation) {
        this.sprite.startAnimation();
      }
      if (!this.isMoving && ___private___.stopCount > (40 - this.frequence * 2) * (6 - this.frequence)) {
        if (!this.isMoving) {
          switch (this.movementType) {
          case 1: 
            this.moveRandom();
            break;
          case 2: 
            break;
          case 3: 
            break;
          default:
            break;
          }
        }
      } else {
        ___private___.stopCount++;
      }
      this.updateMove();
    }
  }).apply(typeof ___self___ == 'undefined' ? this : ___self___, arguments);
return z____return;});
___self___.onMoving =  (function onMoving(){
  var  z____return = (function onMoving(){
        

  }).apply(typeof ___self___ == 'undefined' ? this : ___self___, arguments);
return z____return;});
___self___.updateMove =  (function updateMove(){
  var  z____return = (function updateMove(){
        
    if (this.isMoving) {
      ___private___.stopCount = 0;

      var moveSize = this.sprite.speed;

      var new_x = this.x;
      var new_y = this.y;
      var new_direction = this.direction;

      if (new_y < ___private___.moving_y) {
        new_y += moveSize;
        if (new_y > ___private___.moving_y)
          new_y = ___private___.moving_y;
        new_direction = 0;
      } else if (new_y > ___private___.moving_y) {
        new_y -= moveSize;
        if (new_y < ___private___.moving_y)
          new_y = ___private___.moving_y;
        new_direction = 1;
      }

      if (new_y != this.y && this.isValid(new_x, new_y) && this.isPassable(
          new_x, new_x,
          new_direction)) {
        this.x = new_x;
        this.y = new_y;
        if (!this.directionFix)
          this.direction = new_direction;
        if (this.sprite && this.walkingAnimation)
          this.sprite.startAnimation();

        this.onMoving();
        return;
      }

      if (new_x < ___private___.moving_x) {
        new_x += moveSize;
        if (new_x > ___private___.moving_x)
          new_x = ___private___.moving_x;
        new_direction = 2;
      } else if (new_x > ___private___.moving_x) {
        new_x -= moveSize;
        if (new_x < ___private___.moving_x)
          new_x = ___private___.moving_x;
        new_direction = 3;
      }

      if (new_x != this.x && this.isValid(new_x, new_y) && this.isPassable(
          new_x, new_x,
          new_direction)) {
        this.x = new_x;
        this.y = new_y;
        if (!this.directionFix)
          this.direction = new_direction;
        if (this.sprite && this.walkingAnimation)
          this.sprite.startAnimation();

        this.onMoving()
        return;
      }

      
      this.isMoving = false;
      if (!this.steppingAnimation && this.walkingAnimation)
        this.sprite.stopAnimation();
    }

  }).apply(typeof ___self___ == 'undefined' ? this : ___self___, arguments);
return z____return;});
___self___.move =  (function move(x, y){
  var  z____return = (function move(x, y){


if((typeof x != 'number') ||
 x !== parseInt(x, 10)|| isNaN(x)
 || x > 2147483647
 || x < -2147483648)
 throw "Character#move - the parameter 'x' must be a integer between -2147483648 and 2147483647";

if((typeof y != 'number') ||
 y !== parseInt(y, 10)|| isNaN(y)
 || y > 2147483647
 || y < -2147483648)
 throw "Character#move - the parameter 'y' must be a integer between -2147483648 and 2147483647";

        

    this.isMoving = true;
    ___private___.moving_x = x;
    ___private___.moving_y = y;
  }).apply(typeof ___self___ == 'undefined' ? this : ___self___, arguments);
return z____return;});
___self___.turnLeft =  (function turnLeft(){
  var  z____return = (function turnLeft(){
        
    this.turnDirection(3);
  }).apply(typeof ___self___ == 'undefined' ? this : ___self___, arguments);
return z____return;});
___self___.turnRight =  (function turnRight(){
  var  z____return = (function turnRight(){
        
    this.turnDirection(2);
  }).apply(typeof ___self___ == 'undefined' ? this : ___self___, arguments);
return z____return;});
___self___.turnUp =  (function turnUp(){
  var  z____return = (function turnUp(){
        
    this.turnDirection(1);
  }).apply(typeof ___self___ == 'undefined' ? this : ___self___, arguments);
return z____return;});
___self___.turnDown =  (function turnDown(){
  var  z____return = (function turnDown(){
        
    this.turnDirection(0);
  }).apply(typeof ___self___ == 'undefined' ? this : ___self___, arguments);
return z____return;});
___self___.turnDirection =  (function turnDirection(direction){
  var  z____return = (function turnDirection(direction){


if((typeof direction != 'number') ||
 direction !== parseInt(direction, 10)|| isNaN(direction)
 || direction > 2147483647
 || direction < -2147483648)
 throw "Character#turnDirection - the parameter 'direction' must be a integer between -2147483648 and 2147483647";

        
    if (!this.directionFix && !this.isMoving) {
      this.direction = direction;
    }
  }).apply(typeof ___self___ == 'undefined' ? this : ___self___, arguments);
return z____return;});
___self___.moveDown =  (function moveDown(){
  var  z____return = (function moveDown(){
        
    this.turnDown();
    return this.move(this.x, this.y + this.movimentValidator.titeSize);
  }).apply(typeof ___self___ == 'undefined' ? this : ___self___, arguments);
return z____return;});
___self___.moveUp =  (function moveUp(){
  var  z____return = (function moveUp(){
        
    this.turnUp();
    return this.move(this.x, this.y - this.movimentValidator.titeSize);
  }).apply(typeof ___self___ == 'undefined' ? this : ___self___, arguments);
return z____return;});
___self___.moveLeft =  (function moveLeft(){
  var  z____return = (function moveLeft(){
        
    this.turnLeft();
    return this.move(this.x - this.movimentValidator.titeSize, this.y);
  }).apply(typeof ___self___ == 'undefined' ? this : ___self___, arguments);
return z____return;});
___self___.moveRight =  (function moveRight(){
  var  z____return = (function moveRight(){
        
    this.turnRight();
    return this.move(this.x + this.movimentValidator.titeSize, this.y);
  }).apply(typeof ___self___ == 'undefined' ? this : ___self___, arguments);
return z____return;});
___self___.moveForward =  (function moveForward(){
  var  z____return = (function moveForward(){
        
    return this.moveDirection(this.direction);
  }).apply(typeof ___self___ == 'undefined' ? this : ___self___, arguments);
return z____return;});
___self___.moveBackward =  (function moveBackward(){
  var  z____return = (function moveBackward(){
        
    switch (this.direction) {
    case 0:
      return this.moveUp();
    case 1:
      return this.moveDown();
    case 2:
      return this.moveLeft();
    case 3:
      return this.moveRight();
    default:
      break;
    }
  }).apply(typeof ___self___ == 'undefined' ? this : ___self___, arguments);
return z____return;});
___self___.moveDirection =  (function moveDirection(direction){
  var  z____return = (function moveDirection(direction){


if((typeof direction != 'number') ||
 direction !== parseInt(direction, 10)|| isNaN(direction)
 || direction > 2147483647
 || direction < -2147483648)
 throw "Character#moveDirection - the parameter 'direction' must be a integer between -2147483648 and 2147483647";

        
    switch (direction) {
    case 0:
      return this.moveDown();
    case 1:
      return this.moveUp();
    case 2:
      return this.moveRight();
    case 3:
      return this.moveLeft();
    default:
      break;
    }
  }).apply(typeof ___self___ == 'undefined' ? this : ___self___, arguments);
return z____return;});
___self___.moveRandom =  (function moveRandom(){
  var  z____return = (function moveRandom(){
        
    return this.moveDirection(parseInt(Math.random() * 4));
  }).apply(typeof ___self___ == 'undefined' ? this : ___self___, arguments);
return z____return;});
___self___.isPassable =  (function isPassable(x, y, direction){
  var  z____return = (function isPassable(x, y, direction){


if((typeof x != 'number') ||
 x !== parseInt(x, 10)|| isNaN(x)
 || x > 2147483647
 || x < -2147483648)
 throw "Character#isPassable - the parameter 'x' must be a integer between -2147483648 and 2147483647";

if((typeof y != 'number') ||
 y !== parseInt(y, 10)|| isNaN(y)
 || y > 2147483647
 || y < -2147483648)
 throw "Character#isPassable - the parameter 'y' must be a integer between -2147483648 and 2147483647";

if((typeof direction != 'number') ||
 direction !== parseInt(direction, 10)|| isNaN(direction)
 || direction > 4294967295
 || direction < 0)
 throw "Character#isPassable - the parameter 'direction' must be a integer between 0 and 4294967295";

        
    if (!this.movimentValidator)
      return false;
    if (this.through)
      return true;
    return this.movimentValidator.isPassable(x, y, direction);
  }).apply(typeof ___self___ == 'undefined' ? this : ___self___, arguments);


if((typeof z____return != 'boolean'))
 throw "Character#isPassable - the return type must be 'boolean'";
return z____return;});
___self___.isValid =  (function isValid(x, y){
  var  z____return = (function isValid(x, y){


if((typeof x != 'number') ||
 x !== parseInt(x, 10)|| isNaN(x)
 || x > 2147483647
 || x < -2147483648)
 throw "Character#isValid - the parameter 'x' must be a integer between -2147483648 and 2147483647";

if((typeof y != 'number') ||
 y !== parseInt(y, 10)|| isNaN(y)
 || y > 2147483647
 || y < -2147483648)
 throw "Character#isValid - the parameter 'y' must be a integer between -2147483648 and 2147483647";

        
    if (!this.movimentValidator)
      return false;
    return this.movimentValidator.isValid(x, y);
  }).apply(typeof ___self___ == 'undefined' ? this : ___self___, arguments);


if((typeof z____return != 'boolean'))
 throw "Character#isValid - the return type must be 'boolean'";
return z____return;});
		};___defineAllProperties___.call(___self___);
	var __callThisConstructor__ = function (){
		(function(){
if(arguments.length == 0){
  var  z____return = (function constructor(){
        }).apply(typeof ___self___ == 'undefined' ? this : ___self___, arguments);
return z____return;}
if(arguments.length == 1){
  var  z____return = (function constructor(character){


if((character != null) &&(typeof character != 'object'))
 throw "Character#constructor - the parameter 'character' must be 'object'";

        
    if (!character)
      throw new Error('Invalid argument');

    this.direction = character.direction;
    this.walkingAnimation = character.walkingAnimation;
    this.steppingAnimation = character.steppingAnimation;
    this.directionFix = character.directionFix;
    this.frequence = character.frequence;
    this.movementType = character.movementType;
    if (character.sprite) {
      this.sprite = new Sprite(character.sprite);
    }
  }).apply(typeof ___self___ == 'undefined' ? this : ___self___, arguments);
return z____return;}
throw 'Character#constructor - No overload function takes '+arguments.length+' arguments';
		}).apply(___self___, arguments);

	};
return __callThisConstructor__.apply(___self___, arguments);}

return Character;
})();


module.exports['default'] = Character;


return module.exports;
}
};

z____memoryImport['/Event.js'] = {
 cache: null, code: function(){
 var module = {exports: {}};

var ____imported = JSComet.include('./EventPage', false, z____memoryImport);

var EventPage = ____imported.default;
var Event = (function(){
"use strict";

var ___privateStatic___ = {};
function Event(){
	JSComet.checkClass(this, Event);
	var ___private___ = {};
	var ___self___ = this;

	var __callSuperConstructor__ = function(){

		___defineAllProperties___.call(___self___);
	}

		var ___defineAllProperties___ = function(){

JSComet.defineProperty(___self___, { enumerable: false, key: 'x', get: (function(){ var z____return = (function x(){
    return ___private___.lastX;
  }).apply(___self___, arguments);
  return z____return;}), set:(function(){ return (function x(value){


    ___private___.lastX = value;
    if (this.currentPage) {
      this.currentPage.x = ___private___.lastX;
    }
   }).apply(___self___, arguments);}) });

JSComet.defineProperty(___self___, { enumerable: false, key: 'y', get: (function(){ var z____return = (function y(){
    return ___private___.lastY;
  }).apply(___self___, arguments);
  return z____return;}), set:(function(){ return (function y(value){


    ___private___.lastY = value;
    if (this.currentPage) {
      this.currentPage.y = ___private___.lastY;
    }
   }).apply(___self___, arguments);}) });

JSComet.defineProperty(___self___, { enumerable: false, key: 'id', get: (function(){ var z____return = (function id(){return ___private___.z____id;}).apply(___self___, arguments);
 
if((typeof z____return != 'number') ||
 z____return !== parseInt(z____return, 10)|| isNaN(z____return)
 || z____return > 2147483647
 || z____return < -2147483648)
 throw "Event#id - the return type must be a integer between -2147483648 and 2147483647";
 return z____return;}), set:(function(){ return (function id(value){

if((typeof value != 'number') ||
 value !== parseInt(value, 10)|| isNaN(value)
 || value > 2147483647
 || value < -2147483648)
 throw "Event#id - the property 'value' must be a integer between -2147483648 and 2147483647";
 ___private___.z____id = value; }).apply(___self___, arguments);}) });

JSComet.defineProperty(___self___, { enumerable: false, key: 'name', get: (function(){ var z____return = (function name(){return ___private___.z____name;}).apply(___self___, arguments);
 
if((z____return != null) &&(typeof z____return != 'string'))
 throw "Event#name - the return type must be 'string'";
 return z____return;}), set:(function(){ return (function name(value){

if((value != null) &&(typeof value != 'string'))
 throw "Event#name - the property 'value' must be 'string'";
 ___private___.z____name = value; }).apply(___self___, arguments);}) });

JSComet.defineProperty(___private___, { enumerable: false, key: 'lastX', get: (function(){ var z____return = (function lastX(){return ___private___.z____lastX;}).apply(___self___, arguments);
 
if((typeof z____return != 'number') ||
 z____return !== parseInt(z____return, 10)|| isNaN(z____return)
 || z____return > 2147483647
 || z____return < -2147483648)
 throw "Event#lastX - the return type must be a integer between -2147483648 and 2147483647";
 return z____return;}), set:(function(){ return (function lastX(value){

if((typeof value != 'number') ||
 value !== parseInt(value, 10)|| isNaN(value)
 || value > 2147483647
 || value < -2147483648)
 throw "Event#lastX - the property 'value' must be a integer between -2147483648 and 2147483647";
 ___private___.z____lastX = value; }).apply(___self___, arguments);}) });

JSComet.defineProperty(___private___, { enumerable: false, key: 'lastY', get: (function(){ var z____return = (function lastY(){return ___private___.z____lastY;}).apply(___self___, arguments);
 
if((typeof z____return != 'number') ||
 z____return !== parseInt(z____return, 10)|| isNaN(z____return)
 || z____return > 2147483647
 || z____return < -2147483648)
 throw "Event#lastY - the return type must be a integer between -2147483648 and 2147483647";
 return z____return;}), set:(function(){ return (function lastY(value){

if((typeof value != 'number') ||
 value !== parseInt(value, 10)|| isNaN(value)
 || value > 2147483647
 || value < -2147483648)
 throw "Event#lastY - the property 'value' must be a integer between -2147483648 and 2147483647";
 ___private___.z____lastY = value; }).apply(___self___, arguments);}) });

JSComet.defineProperty(___self___, { enumerable: false, key: 'type', get: (function(){ var z____return = (function type(){return ___private___.z____type;}).apply(___self___, arguments);
 
if((typeof z____return != 'number') ||
 z____return !== parseInt(z____return, 10)|| isNaN(z____return)
 || z____return > 2147483647
 || z____return < -2147483648)
 throw "Event#type - the return type must be a integer between -2147483648 and 2147483647";
 return z____return;}), set:(function(){ return (function type(value){

if((typeof value != 'number') ||
 value !== parseInt(value, 10)|| isNaN(value)
 || value > 2147483647
 || value < -2147483648)
 throw "Event#type - the property 'value' must be a integer between -2147483648 and 2147483647";
 ___private___.z____type = value; }).apply(___self___, arguments);}) });

JSComet.defineProperty(___self___, { enumerable: false, key: 'pages', get: (function(){ var z____return = (function pages(){return ___private___.z____pages;}).apply(___self___, arguments);
 
if(z____return !== null && !(z____return instanceof Array))
 throw "Event#pages - the return type must be 'Array'";
 return z____return;}), set:(function(){ return (function pages(value){

if(value !== null && !(value instanceof Array))
 throw "Event#pages - the property 'value' must be 'Array'";
 ___private___.z____pages = value; }).apply(___self___, arguments);}) });

JSComet.defineProperty(___self___, { enumerable: false, key: 'currentPage', get: (function(){ var z____return = (function currentPage(){return ___private___.z____currentPage;}).apply(___self___, arguments);
 
if(z____return !== null && !(z____return instanceof EventPage))
 throw "Event#currentPage - the return type must be 'EventPage'";
 return z____return;}), set:(function(){ return (function currentPage(value){

if(value !== null && !(value instanceof EventPage))
 throw "Event#currentPage - the property 'value' must be 'EventPage'";
 ___private___.z____currentPage = value; }).apply(___self___, arguments);}) });

		___private___.z____id = 0;
		___private___.z____name = null;
		___private___.z____lastX = 0;
		___private___.z____lastY = 0;
		___private___.z____type =  0;
		___private___.z____pages = null;
		___private___.z____currentPage = null;
___self___.update =  (function update(){
  var  z____return = (function update(){
        
    if (this.currentPage) {
      this.currentPage.update();
      ___private___.lastX = this.currentPage.x;
      ___private___.lastY = this.currentPage.y;
    }
  }).apply(typeof ___self___ == 'undefined' ? this : ___self___, arguments);
return z____return;});
___self___.checkCurrentPage =  (function checkCurrentPage(){
  var  z____return = (function checkCurrentPage(){
        
    if (this.pages) {
      for (var i in this.pages) {
        var page = this.pages[i];
        
        if (!page.condition || page.condition()) {
          this.currentPage = page;
          this.currentPage.x = ___private___.lastX;
          this.currentPage.y = ___private___.lastY;
          return page;
        }
      }
      return null;
    }
  }).apply(typeof ___self___ == 'undefined' ? this : ___self___, arguments);


if(z____return !== null && !(z____return instanceof EventPage))
 throw "Event#checkCurrentPage - the return type must be 'EventPage'";
return z____return;});
___self___.addPages =  (function addPages(pages){
  var  z____return = (function addPages(pages){


if(pages !== null && !(pages instanceof Array))
 throw "Event#addPages - the parameter 'pages' must be 'Array'";

        
    this.pages = new Array(pages.length);
    for (var i in pages) {
      if (pages[i] instanceof EventPage)
        this.pages[i] = pages[i];
      else
        this.pages[i] = new EventPage(pages[i]);
    }
  }).apply(typeof ___self___ == 'undefined' ? this : ___self___, arguments);
return z____return;});
___self___.addPage =  (function addPage(page){
  var  z____return = (function addPage(page){


if(page !== null && !(page instanceof EventPage))
 throw "Event#addPage - the parameter 'page' must be 'EventPage'";

        
    if (!this.pages)
      this.pages = [];
    this.pages.push(page);
  }).apply(typeof ___self___ == 'undefined' ? this : ___self___, arguments);
return z____return;});
		};___defineAllProperties___.call(___self___);
	var __callThisConstructor__ = function (){
		(function(){
if(arguments.length == 1){
  var  z____return = (function constructor(event){


if((event != null) &&(typeof event != 'object'))
 throw "Event#constructor - the parameter 'event' must be 'object'";

        
    if (!event || !event.pages)
      throw new Error('Invalid argument');
    __callThisConstructor__.call(this,event.name, event.type, event.pages);

    ___private___.lastX = event.x;
    ___private___.lastY = event.y;
    this.id = event.id;
  }).apply(typeof ___self___ == 'undefined' ? this : ___self___, arguments);
return z____return;}
if(arguments.length == 2){
  var  z____return = (function constructor(name, type){


if((name != null) &&(typeof name != 'string'))
 throw "Event#constructor - the parameter 'name' must be 'string'";

if((typeof type != 'number') ||
 type !== parseInt(type, 10)|| isNaN(type)
 || type > 2147483647
 || type < -2147483648)
 throw "Event#constructor - the parameter 'type' must be a integer between -2147483648 and 2147483647";

        
    this.name = name;
    this.type = type;
  }).apply(typeof ___self___ == 'undefined' ? this : ___self___, arguments);
return z____return;}
if(arguments.length == 3){
  var  z____return = (function constructor(name, type, pages){


if((name != null) &&(typeof name != 'string'))
 throw "Event#constructor - the parameter 'name' must be 'string'";

if((typeof type != 'number') ||
 type !== parseInt(type, 10)|| isNaN(type)
 || type > 2147483647
 || type < -2147483648)
 throw "Event#constructor - the parameter 'type' must be a integer between -2147483648 and 2147483647";

if(pages !== null && !(pages instanceof Array))
 throw "Event#constructor - the parameter 'pages' must be 'Array'";

        
    __callThisConstructor__.call(this,name, type);
    this.addPages(pages);
  }).apply(typeof ___self___ == 'undefined' ? this : ___self___, arguments);
return z____return;}
throw 'Event#constructor - No overload function takes '+arguments.length+' arguments';
		}).apply(___self___, arguments);

	};
return __callThisConstructor__.apply(___self___, arguments);}

return Event;
})();


module.exports['default'] = Event;


return module.exports;
}
};

z____memoryImport['/EventPage.js'] = {
 cache: null, code: function(){
 var module = {exports: {}};

var ____imported = JSComet.include('./EventTrigger', false, z____memoryImport);

var EventTrigger = ____imported.default;;

var ____imported = JSComet.include('./Character', false, z____memoryImport);

var Character = ____imported.default;;

var EventPage = (function(Character){
"use strict";

var ___privateStatic___ = {};
function EventPage(){
	JSComet.checkClass(this, EventPage);
	var ___private___ = {};
	var ___self___ = this;
	var ___super___ = null;

	var __callSuperConstructor__ = function(){

		Character.apply(___self___, arguments);
		___super___ = JSComet.wrapSuper(___self___);
		___defineAllProperties___.call(___self___);
	}

		var ___defineAllProperties___ = function(){

JSComet.defineProperty(___self___, { enumerable: false, key: 'switchs', get: (function(){ var z____return = (function switchs(){return ___private___.z____switchs;}).apply(___self___, arguments);
 
if(z____return !== null && !(z____return instanceof Array))
 throw "EventPage#switchs - the return type must be 'Array'";
 return z____return;}), set:(function(){ return (function switchs(value){

if(value !== null && !(value instanceof Array))
 throw "EventPage#switchs - the property 'value' must be 'Array'";
 ___private___.z____switchs = value; }).apply(___self___, arguments);}) });

JSComet.defineProperty(___self___, { enumerable: false, key: 'moveRoute', get: (function(){ var z____return = (function moveRoute(){return ___private___.z____moveRoute;}).apply(___self___, arguments);
  return z____return;}), set:(function(){ return (function moveRoute(value){

 ___private___.z____moveRoute = value; }).apply(___self___, arguments);}) });

JSComet.defineProperty(___self___, { enumerable: false, key: 'trigger', get: (function(){ var z____return = (function trigger(){return ___private___.z____trigger;}).apply(___self___, arguments);
 
if((typeof z____return != 'number') ||
 z____return !== parseInt(z____return, 10)|| isNaN(z____return)
 || z____return > 2147483647
 || z____return < -2147483648)
 throw "EventPage#trigger - the return type must be a integer between -2147483648 and 2147483647";
 return z____return;}), set:(function(){ return (function trigger(value){

if((typeof value != 'number') ||
 value !== parseInt(value, 10)|| isNaN(value)
 || value > 2147483647
 || value < -2147483648)
 throw "EventPage#trigger - the property 'value' must be a integer between -2147483648 and 2147483647";
 ___private___.z____trigger = value; }).apply(___self___, arguments);}) });

JSComet.defineProperty(___self___, { enumerable: false, key: 'condition', get: (function(){ var z____return = (function condition(){return ___private___.z____condition;}).apply(___self___, arguments);
 
if(z____return !== null && !(z____return instanceof Function))
 throw "EventPage#condition - the return type must be 'Function'";
 return z____return;}), set:(function(){ return (function condition(value){

if(value !== null && !(value instanceof Function))
 throw "EventPage#condition - the property 'value' must be 'Function'";
 ___private___.z____condition = value; }).apply(___self___, arguments);}) });

JSComet.defineProperty(___self___, { enumerable: false, key: 'contents', get: (function(){ var z____return = (function contents(){return ___private___.z____contents;}).apply(___self___, arguments);
 
if(z____return !== null && !(z____return instanceof Function))
 throw "EventPage#contents - the return type must be 'Function'";
 return z____return;}), set:(function(){ return (function contents(value){

if(value !== null && !(value instanceof Function))
 throw "EventPage#contents - the property 'value' must be 'Function'";
 ___private___.z____contents = value; }).apply(___self___, arguments);}) });

		___private___.z____switchs = null;
		___private___.z____moveRoute =  null;
		___private___.z____trigger =  EventTrigger.Action;
		___private___.z____condition = null;
		___private___.z____contents = null;
		};
	var __callThisConstructor__ = function (){
		(function(){
if(arguments.length == 0){
  var  z____return = (function constructor(){
        
    if(typeof Character != 'undefined') __callSuperConstructor__.call(this);
    this.switchs = [false, false, false, false];
  }).apply(typeof ___self___ == 'undefined' ? this : ___self___, arguments);
return z____return;}
if(arguments.length == 1){
  var  z____return = (function constructor(page){


if((page != null) &&(typeof page != 'object'))
 throw "EventPage#constructor - the parameter 'page' must be 'object'";

        
    if(typeof Character != 'undefined') __callSuperConstructor__.call(this,page);

    this.switchs = [false, false, false, false];
    this.moveRoute = page.moveRoute;
    this.trigger = page.trigger;
    this.condition = page.condition;
    this.contents = page.contents;
  }).apply(typeof ___self___ == 'undefined' ? this : ___self___, arguments);
return z____return;}
throw 'EventPage#constructor - No overload function takes '+arguments.length+' arguments';
		}).apply(___self___, arguments);

	};
return __callThisConstructor__.apply(___self___, arguments);}

JSComet.inherits(EventPage, Character);

return EventPage;
})(Character);


module.exports['default'] = EventPage;


return module.exports;
}
};

z____memoryImport['/EventTrigger.js'] = {
 cache: null, code: function(){
 var module = {exports: {}};
var EventTrigger = {
  Action: 0,
  Parallel: 1
};


module.exports['default'] = EventTrigger;


return module.exports;
}
};

z____memoryImport['/Game.js'] = {
 cache: null, code: function(){
 var module = {exports: {}};

var ____imported = JSComet.include('./Viewport', false, z____memoryImport);

var Viewport = ____imported.default;;

var ____imported = JSComet.include('./Event', false, z____memoryImport);

var Event = ____imported.default;;

var ____imported = JSComet.include('./Map', false, z____memoryImport);

var Map = ____imported.default;;

var ____imported = JSComet.include('./KeyInput', false, z____memoryImport);

var KeyInput = ____imported.default;
var Game = (function(){
"use strict";

var ___privateStatic___ = {};
function Game(){
	JSComet.checkClass(this, Game);
	var ___private___ = {};
	var ___self___ = this;

	var __callSuperConstructor__ = function(){

		___defineAllProperties___.call(___self___);
	}

		var ___defineAllProperties___ = function(){

JSComet.defineProperty(___self___, { enumerable: false, key: 'viewport', get: (function(){ var z____return = (function viewport(){return ___private___.z____viewport;}).apply(___self___, arguments);
 
if(z____return !== null && !(z____return instanceof Viewport))
 throw "Game#viewport - the return type must be 'Viewport'";
 return z____return;}), set:(function(){ return (function viewport(value){

if(value !== null && !(value instanceof Viewport))
 throw "Game#viewport - the property 'value' must be 'Viewport'";
 ___private___.z____viewport = value; }).apply(___self___, arguments);}) });

JSComet.defineProperty(___self___, { enumerable: false, key: 'commonEvents', get: (function(){ var z____return = (function commonEvents(){return ___private___.z____commonEvents;}).apply(___self___, arguments);
 
if(z____return !== null && !(z____return instanceof Array))
 throw "Game#commonEvents - the return type must be 'Array'";
 return z____return;}), set:(function(){ return (function commonEvents(value){

if(value !== null && !(value instanceof Array))
 throw "Game#commonEvents - the property 'value' must be 'Array'";
 ___private___.z____commonEvents = value; }).apply(___self___, arguments);}) });

JSComet.defineProperty(___self___, { enumerable: false, key: 'loopInterval', get: (function(){ var z____return = (function loopInterval(){return ___private___.z____loopInterval;}).apply(___self___, arguments);
 
if((typeof z____return != 'number') ||
 z____return !== parseInt(z____return, 10)|| isNaN(z____return)
 || z____return > 2147483647
 || z____return < -2147483648)
 throw "Game#loopInterval - the return type must be a integer between -2147483648 and 2147483647";
 return z____return;}), set:(function(){ return (function loopInterval(value){

if((typeof value != 'number') ||
 value !== parseInt(value, 10)|| isNaN(value)
 || value > 2147483647
 || value < -2147483648)
 throw "Game#loopInterval - the property 'value' must be a integer between -2147483648 and 2147483647";
 ___private___.z____loopInterval = value; }).apply(___self___, arguments);}) });

JSComet.defineProperty(___self___, { enumerable: false, key: 'intervalID', get: (function(){ var z____return = (function intervalID(){return ___private___.z____intervalID;}).apply(___self___, arguments);
 
if(!(!((typeof z____return != 'number') ||
 z____return !== parseInt(z____return, 10)|| isNaN(z____return)
 || z____return > 2147483647
 || z____return < -2147483648) ||
 !(z____return !== null)
 ))
 throw "Game#intervalID - the return type must be between types 'int', 'null'";
 return z____return;}), set:(function(){ return (function intervalID(value){

if(!(!((typeof value != 'number') ||
 value !== parseInt(value, 10)|| isNaN(value)
 || value > 2147483647
 || value < -2147483648) ||
 !(value !== null)
 ))
 throw "Game#intervalID - the property 'value' must be between types 'int', 'null'";
 ___private___.z____intervalID = value; }).apply(___self___, arguments);}) });

JSComet.defineProperty(___self___, { enumerable: false, key: 'currentMap', get: (function(){ var z____return = (function currentMap(){return ___private___.z____currentMap;}).apply(___self___, arguments);
 
if(z____return !== null && !(z____return instanceof Map))
 throw "Game#currentMap - the return type must be 'Map'";
 return z____return;}), set:(function(){ return (function currentMap(value){

if(value !== null && !(value instanceof Map))
 throw "Game#currentMap - the property 'value' must be 'Map'";
 ___private___.z____currentMap = value; }).apply(___self___, arguments);}) });

JSComet.defineProperty(___self___, { enumerable: false, key: 'isRunning', get: (function(){ var z____return = (function isRunning(){return ___private___.z____isRunning;}).apply(___self___, arguments);
 
if((typeof z____return != 'boolean'))
 throw "Game#isRunning - the return type must be 'boolean'";
 return z____return;}), set:(function(){ return (function isRunning(value){

if((typeof value != 'boolean'))
 throw "Game#isRunning - the property 'value' must be 'boolean'";
 ___private___.z____isRunning = value; }).apply(___self___, arguments);}) });

		___private___.z____viewport =  null;
		___private___.z____commonEvents = null;
		___private___.z____loopInterval =  32;
		___private___.z____intervalID =  null;
		___private___.z____currentMap =  null;
		___private___.z____isRunning =  false;
		___private___.fpsCount =  0;
		___private___.fpsStart =  0;
___self___.update =  (function update(){
  var  z____return = (function update(){
        
    if (this.viewport) {
      if (this.currentMap) {
        this.viewport.beginRender();
        this.currentMap.update(this.viewport);
      } else {
        this.viewport.clear();
        this.viewport.beginRender();
      }
      this.viewport.endRender();
    }
    if (new Date().getTime() - ___private___.fpsStart > 1000) {
      ___private___.fpsStart = new Date().getTime();
      document.title = ___private___.fpsCount;
      ___private___.fpsCount = 0;
    } else {
      ___private___.fpsCount++;
    }
  }).apply(typeof ___self___ == 'undefined' ? this : ___self___, arguments);
return z____return;});
___self___.pause =  (function pause(){
  var  z____return = (function pause(){
        
    if (this.isRunning) {
      KeyInput.unbind();
      clearInterval(this.intervalID);
      this.isRunning = false;
    }
  }).apply(typeof ___self___ == 'undefined' ? this : ___self___, arguments);
return z____return;});
___self___.loadMap =  (function loadMap(map){
  var  z____return = (function loadMap(map){


if(map !== null && !(map instanceof Map))
 throw "Game#loadMap - the parameter 'map' must be 'Map'";

        
      if (map) {
        this.currentMap = map;
        this.currentMap.start(this.viewport);
      }
    }).apply(typeof ___self___ == 'undefined' ? this : ___self___, arguments);
return z____return;});
___self___.start =  (function start(){
  var  z____return = (function start(){
        
    if (!this.isRunning) {
      KeyInput.bind();
      this.intervalID = setInterval(((function(_this){ return (function(){return (function (){
        this.update()
      }).apply(_this,arguments)});})(this)), this.loopInterval);
      this.isRunning = true;
      ___private___.fpsStart = new Date().getTime();
    }
  }).apply(typeof ___self___ == 'undefined' ? this : ___self___, arguments);
return z____return;});
		};___defineAllProperties___.call(___self___);
	var __callThisConstructor__ = function (){
		(function(){
if(arguments.length == 0){
  var  z____return = (function constructor(){
        
    this.commonEvents = [];
  }).apply(typeof ___self___ == 'undefined' ? this : ___self___, arguments);
return z____return;}
if(arguments.length == 1){
  var  z____return = (function constructor(viewportID){


if((viewportID != null) &&(typeof viewportID != 'string'))
 throw "Game#constructor - the parameter 'viewportID' must be 'string'";

        
    __callThisConstructor__.call(this);
    this.viewport = new Viewport(viewportID);
  }).apply(typeof ___self___ == 'undefined' ? this : ___self___, arguments);
return z____return;}
throw 'Game#constructor - No overload function takes '+arguments.length+' arguments';
		}).apply(___self___, arguments);

	};
return __callThisConstructor__.apply(___self___, arguments);}

return Game;
})();


module.exports['default'] = Game;



return module.exports;
}
};

z____memoryImport['/KeyInput.js'] = {
 cache: null, code: function(){
 var module = {exports: {}};
var KeyInput = (function(){
"use strict";

var ___privateStatic___ = {};
function KeyInput(){
	JSComet.checkClass(this, KeyInput);
	var ___private___ = {};
	var ___self___ = this;

	var __callSuperConstructor__ = function(){

		___defineAllProperties___.call(___self___);
	}

		var ___defineAllProperties___ = function(){

		};___defineAllProperties___.call(___self___);
	var __callThisConstructor__ = function (){
		(function(){

  var  z____return = (function constructor(){
        }).apply(typeof ___self___ == 'undefined' ? this : ___self___, arguments);
return z____return;
		}).apply(___self___, arguments);

	};
return __callThisConstructor__.apply(___self___, arguments);}

KeyInput.isDown =  (function isDown(keyCode){
  var  z____return = (function isDown(keyCode){
        
    return ___privateStatic___._pressed[keyCode];
  }).apply(typeof ___self___ == 'undefined' ? this : ___self___, arguments);
return z____return;});
KeyInput.onKeyup =  (function onKeyup(event){
  var  z____return = (function onKeyup(event){
        
    delete ___privateStatic___._pressed[event.keyCode];
  }).apply(typeof ___self___ == 'undefined' ? this : ___self___, arguments);
return z____return;});
KeyInput.onKeydown =  (function onKeydown(event){
  var  z____return = (function onKeydown(event){
        
    ___privateStatic___._pressed[event.keyCode] = true;
  }).apply(typeof ___self___ == 'undefined' ? this : ___self___, arguments);
return z____return;});
KeyInput.bind =  (function bind(){
  var  z____return = (function bind(){
        
    window.addEventListener('keyup', KeyInput.onKeyup , false);
    window.addEventListener('keydown', KeyInput.onKeydown, false);
  }).apply(typeof ___self___ == 'undefined' ? this : ___self___, arguments);
return z____return;});
KeyInput.unbind =  (function unbind(){
  var  z____return = (function unbind(){
        
    window.removeEventListener('keyup', KeyInput.onKeyup, false);
    window.removeEventListener('keydown', KeyInput.onKeydown, false);
  }).apply(typeof ___self___ == 'undefined' ? this : ___self___, arguments);
return z____return;});
___privateStatic___._pressed =  {};
return KeyInput;
})();


module.exports['default'] = KeyInput;


return module.exports;
}
};

z____memoryImport['/Map.js'] = {
 cache: null, code: function(){
 var module = {exports: {}};

var ____imported = JSComet.include('./Event', false, z____memoryImport);

var Event = ____imported.default;;

var ____imported = JSComet.include('./Viewport', false, z____memoryImport);

var Viewport = ____imported.default;;

var ____imported = JSComet.include('./EventTrigger', false, z____memoryImport);

var EventTrigger = ____imported.default;;

var ____imported = JSComet.include('./MovimentValidator', false, z____memoryImport);

var MovimentValidator = ____imported.default;;

var Map = (function(){
"use strict";

var ___privateStatic___ = {};
function Map(){
	JSComet.checkClass(this, Map);
	var ___private___ = {};
	var ___self___ = this;

	var __callSuperConstructor__ = function(){

		___defineAllProperties___.call(___self___);
	}

		var ___defineAllProperties___ = function(){

JSComet.defineProperty(___self___, { enumerable: false, key: 'name', get: (function(){ var z____return = (function name(){return ___private___.z____name;}).apply(___self___, arguments);
 
if((z____return != null) &&(typeof z____return != 'string'))
 throw "Map#name - the return type must be 'string'";
 return z____return;}), set:(function(){ return (function name(value){

if((value != null) &&(typeof value != 'string'))
 throw "Map#name - the property 'value' must be 'string'";
 ___private___.z____name = value; }).apply(___self___, arguments);}) });

JSComet.defineProperty(___self___, { enumerable: false, key: 'upperLayerImages', get: (function(){ var z____return = (function upperLayerImages(){return ___private___.z____upperLayerImages;}).apply(___self___, arguments);
 
if(z____return !== null && !(z____return instanceof Array))
 throw "Map#upperLayerImages - the return type must be 'Array'";
 return z____return;}), set:(function(){ return (function upperLayerImages(value){

if(value !== null && !(value instanceof Array))
 throw "Map#upperLayerImages - the property 'value' must be 'Array'";
 ___private___.z____upperLayerImages = value; }).apply(___self___, arguments);}) });

JSComet.defineProperty(___self___, { enumerable: false, key: 'lowerLayerImages', get: (function(){ var z____return = (function lowerLayerImages(){return ___private___.z____lowerLayerImages;}).apply(___self___, arguments);
 
if(z____return !== null && !(z____return instanceof Array))
 throw "Map#lowerLayerImages - the return type must be 'Array'";
 return z____return;}), set:(function(){ return (function lowerLayerImages(value){

if(value !== null && !(value instanceof Array))
 throw "Map#lowerLayerImages - the property 'value' must be 'Array'";
 ___private___.z____lowerLayerImages = value; }).apply(___self___, arguments);}) });

JSComet.defineProperty(___self___, { enumerable: false, key: 'width', get: (function(){ var z____return = (function width(){return ___private___.z____width;}).apply(___self___, arguments);
 
if((typeof z____return != 'number') ||
 z____return !== parseInt(z____return, 10)|| isNaN(z____return)
 || z____return > 2147483647
 || z____return < -2147483648)
 throw "Map#width - the return type must be a integer between -2147483648 and 2147483647";
 return z____return;}), set:(function(){ return (function width(value){

if((typeof value != 'number') ||
 value !== parseInt(value, 10)|| isNaN(value)
 || value > 2147483647
 || value < -2147483648)
 throw "Map#width - the property 'value' must be a integer between -2147483648 and 2147483647";
 ___private___.z____width = value; }).apply(___self___, arguments);}) });

JSComet.defineProperty(___self___, { enumerable: false, key: 'height', get: (function(){ var z____return = (function height(){return ___private___.z____height;}).apply(___self___, arguments);
 
if((typeof z____return != 'number') ||
 z____return !== parseInt(z____return, 10)|| isNaN(z____return)
 || z____return > 2147483647
 || z____return < -2147483648)
 throw "Map#height - the return type must be a integer between -2147483648 and 2147483647";
 return z____return;}), set:(function(){ return (function height(value){

if((typeof value != 'number') ||
 value !== parseInt(value, 10)|| isNaN(value)
 || value > 2147483647
 || value < -2147483648)
 throw "Map#height - the property 'value' must be a integer between -2147483648 and 2147483647";
 ___private___.z____height = value; }).apply(___self___, arguments);}) });

JSComet.defineProperty(___self___, { enumerable: false, key: 'tileSize', get: (function(){ var z____return = (function tileSize(){return ___private___.z____tileSize;}).apply(___self___, arguments);
 
if((typeof z____return != 'number') ||
 z____return !== parseInt(z____return, 10)|| isNaN(z____return)
 || z____return > 2147483647
 || z____return < -2147483648)
 throw "Map#tileSize - the return type must be a integer between -2147483648 and 2147483647";
 return z____return;}), set:(function(){ return (function tileSize(value){

if((typeof value != 'number') ||
 value !== parseInt(value, 10)|| isNaN(value)
 || value > 2147483647
 || value < -2147483648)
 throw "Map#tileSize - the property 'value' must be a integer between -2147483648 and 2147483647";
 ___private___.z____tileSize = value; }).apply(___self___, arguments);}) });

JSComet.defineProperty(___self___, { enumerable: false, key: 'events', get: (function(){ var z____return = (function events(){return ___private___.z____events;}).apply(___self___, arguments);
 
if(z____return !== null && !(z____return instanceof Array))
 throw "Map#events - the return type must be 'Array'";
 return z____return;}), set:(function(){ return (function events(value){

if(value !== null && !(value instanceof Array))
 throw "Map#events - the property 'value' must be 'Array'";
 ___private___.z____events = value; }).apply(___self___, arguments);}) });

JSComet.defineProperty(___self___, { enumerable: false, key: 'player', get: (function(){ var z____return = (function player(){return ___private___.z____player;}).apply(___self___, arguments);
 
if(z____return !== null && !(z____return instanceof Player))
 throw "Map#player - the return type must be 'Player'";
 return z____return;}), set:(function(){ return (function player(value){

if(value !== null && !(value instanceof Player))
 throw "Map#player - the property 'value' must be 'Player'";
 ___private___.z____player = value; }).apply(___self___, arguments);}) });

JSComet.defineProperty(___private___, { enumerable: false, key: 'movimentValidator', get: (function(){ var z____return = (function movimentValidator(){return ___private___.z____movimentValidator;}).apply(___self___, arguments);
 
if(z____return !== null && !(z____return instanceof MovimentValidator))
 throw "Map#movimentValidator - the return type must be 'MovimentValidator'";
 return z____return;}), set:(function(){ return (function movimentValidator(value){

if(value !== null && !(value instanceof MovimentValidator))
 throw "Map#movimentValidator - the property 'value' must be 'MovimentValidator'";
 ___private___.z____movimentValidator = value; }).apply(___self___, arguments);}) });

		___private___.z____name = null;
		___private___.z____upperLayerImages =  null;
		___private___.z____lowerLayerImages =  null;
		___private___.z____width =  0;
		___private___.z____height =  0;
		___private___.z____tileSize =  32;
		this.blockers =  {};
		___private___.z____events = null;
		___private___.z____player = null;
		___private___.activeEvents =  [];
		___private___.renderedMap =  false;
		___private___.z____movimentValidator = null;
___self___.redraw =  (function redraw(viewport){
  var  z____return = (function redraw(viewport){


if(viewport !== null && !(viewport instanceof Viewport))
 throw "Map#redraw - the parameter 'viewport' must be 'Viewport'";

        
    ___private___.renderedMap = false;
    viewport.clear();
    this.update(viewport);
  }).apply(typeof ___self___ == 'undefined' ? this : ___self___, arguments);
return z____return;});
___self___.start =  (function start(viewport){
  var  z____return = (function start(viewport){


if(viewport !== null && !(viewport instanceof Viewport))
 throw "Map#start - the parameter 'viewport' must be 'Viewport'";

        
    this.forceCenter(viewport, this.player.x, this.player.y);
  }).apply(typeof ___self___ == 'undefined' ? this : ___self___, arguments);
return z____return;});
___self___.isPassable =  (function isPassable(x, y, direction){
  var  z____return = (function isPassable(x, y, direction){


if((typeof x != 'number') ||
 x !== parseInt(x, 10)|| isNaN(x)
 || x > 2147483647
 || x < -2147483648)
 throw "Map#isPassable - the parameter 'x' must be a integer between -2147483648 and 2147483647";

if((typeof y != 'number') ||
 y !== parseInt(y, 10)|| isNaN(y)
 || y > 2147483647
 || y < -2147483648)
 throw "Map#isPassable - the parameter 'y' must be a integer between -2147483648 and 2147483647";

if((typeof direction != 'number') ||
 direction !== parseInt(direction, 10)|| isNaN(direction)
 || direction > 4294967295
 || direction < 0)
 throw "Map#isPassable - the parameter 'direction' must be a integer between 0 and 4294967295";

        
    return true;
  }).apply(typeof ___self___ == 'undefined' ? this : ___self___, arguments);


if((typeof z____return != 'boolean'))
 throw "Map#isPassable - the return type must be 'boolean'";
return z____return;});
___self___.isValid =  (function isValid(x, y){
  var  z____return = (function isValid(x, y){


if((typeof x != 'number') ||
 x !== parseInt(x, 10)|| isNaN(x)
 || x > 2147483647
 || x < -2147483648)
 throw "Map#isValid - the parameter 'x' must be a integer between -2147483648 and 2147483647";

if((typeof y != 'number') ||
 y !== parseInt(y, 10)|| isNaN(y)
 || y > 2147483647
 || y < -2147483648)
 throw "Map#isValid - the parameter 'y' must be a integer between -2147483648 and 2147483647";

        
    if (x > ((this.width * this.tileSize) - this.tileSize) || y > ((this.height *
        this.tileSize) - this.tileSize) ||
      y < -this.tileSize || x < 0)
      return false;
    return true;
  }).apply(typeof ___self___ == 'undefined' ? this : ___self___, arguments);


if((typeof z____return != 'boolean'))
 throw "Map#isValid - the return type must be 'boolean'";
return z____return;});
___self___.forceCenter =  (function forceCenter(viewport, x, y){
  var  z____return = (function forceCenter(viewport, x, y){


if(viewport !== null && !(viewport instanceof Viewport))
 throw "Map#forceCenter - the parameter 'viewport' must be 'Viewport'";

if((typeof x != 'number') ||
 x !== parseInt(x, 10)|| isNaN(x)
 || x > 2147483647
 || x < -2147483648)
 throw "Map#forceCenter - the parameter 'x' must be a integer between -2147483648 and 2147483647";

if((typeof y != 'number') ||
 y !== parseInt(y, 10)|| isNaN(y)
 || y > 2147483647
 || y < -2147483648)
 throw "Map#forceCenter - the parameter 'y' must be a integer between -2147483648 and 2147483647";

        

    var screen_w = viewport.width;
    var screen_h = viewport.height;

    var screen_x = x - ((screen_w / 2) - (this.tileSize));
    var screen_y = y - ((screen_h / 2) - (this.tileSize))
    var max_x = (this.width * this.tileSize) - screen_w;
    var max_y = (this.height * this.tileSize) - screen_h;

    if (screen_x < 0)
      screen_x = 0;
    else if (screen_x > max_x)
      screen_x = max_x;

    if (screen_y < 0)
      screen_y = 0;
    else if (screen_y > max_y)
      screen_y = max_y;

    viewport.move(parseInt(screen_x), parseInt(screen_y));
  }).apply(typeof ___self___ == 'undefined' ? this : ___self___, arguments);
return z____return;});
___self___.center =  (function center(viewport, x, y){
  var  z____return = (function center(viewport, x, y){


if(viewport !== null && !(viewport instanceof Viewport))
 throw "Map#center - the parameter 'viewport' must be 'Viewport'";

if((typeof x != 'number') ||
 x !== parseInt(x, 10)|| isNaN(x)
 || x > 2147483647
 || x < -2147483648)
 throw "Map#center - the parameter 'x' must be a integer between -2147483648 and 2147483647";

if((typeof y != 'number') ||
 y !== parseInt(y, 10)|| isNaN(y)
 || y > 2147483647
 || y < -2147483648)
 throw "Map#center - the parameter 'y' must be a integer between -2147483648 and 2147483647";

        

    var screen_w = viewport.width;
    var screen_h = viewport.height;

    var screen_x = x - ((screen_w / 2) - (this.tileSize));
    var screen_y = y - ((screen_h / 2) - (this.tileSize))
    var max_x = (this.width * this.tileSize) - screen_w;
    var max_y = (this.height * this.tileSize) - screen_h;

    if (screen_x < 0)
      screen_x = 0;
    else if (screen_x > max_x)
      screen_x = max_x;

    if (screen_y < 0)
      screen_y = 0;
    else if (screen_y > max_y)
      screen_y = max_y;

    var moveSize = this.player.sprite ? this.player.sprite.speed : 6;

    var move_x = Math.abs(viewport.offsetX - screen_x);
    if (screen_x > viewport.offsetX)
      screen_x = viewport.offsetX + ((move_x < moveSize) ? move_x : moveSize);
    else if (screen_x < viewport.offsetX)
      screen_x = viewport.offsetX - ((move_x < moveSize) ? move_x : moveSize);

    var move_y = Math.abs(viewport.offsetY - screen_y);

    if (screen_y > viewport.offsetY)
      screen_y = viewport.offsetY + ((move_y < moveSize) ? move_y : moveSize);
    else if (screen_y < viewport.offsetY) {
      screen_y = viewport.offsetY - ((move_y < moveSize) ? move_y : moveSize);
    }

    viewport.move(parseInt(screen_x), parseInt(screen_y));
  }).apply(typeof ___self___ == 'undefined' ? this : ___self___, arguments);
return z____return;});
___self___.update =  (function update(viewport){
  var  z____return = (function update(viewport){


if(viewport !== null && !(viewport instanceof Viewport))
 throw "Map#update - the parameter 'viewport' must be 'Viewport'";

        
    
    this.center(viewport, this.player.x, this.player.y);

    ___private___.activeEvents = [];
    var index = 0;
    if (this.lowerLayerImages && ! ___private___.renderedMap) {
      
      for (var i in this.lowerLayerImages) {
        viewport.drawImage(this.lowerLayerImages[i], index);
        index++;
      }
      ___private___.renderedMap = true;
    }
    this.player.movimentValidator = ___private___.movimentValidator;

    
    ___private___.activeEvents.push(this.player);

    if (this.events) {
      for (var i in this.events) {
        var event = this.events[i];
        var eventPage = event.checkCurrentPage();
        if (eventPage) 
          ___private___.activeEvents.push(event);
        else
          viewport.removeSprite(event.id);
      }
    }

    
    ___private___.activeEvents.sort(((function(_this){ return (function(){return (function (a, b){
    return a.y - b.y;}).apply(_this,arguments)});})(this)));

    index = 1000;
    
    for (var i in ___private___.activeEvents) {
      var event = ___private___.activeEvents[i];

      if (event instanceof Player) {
        
        viewport.drawSprite(0, event.sprite, event.x, event.y, event.direction,
          index + event.y);
      } else {
        var eventPage = event.currentPage;
        
        eventPage.movimentValidator = ___private___.movimentValidator;

        
        if (eventPage.sprite) {
          viewport.drawSprite(event.id, eventPage.sprite, event.x, event.y,
            eventPage.direction, index + event.y);
        }
      }
      event.update();
    }

    index = 20000;

    if (this.upperLayerImages && ! ___private___.renderedMap) {
      
      for (var i in this.upperLayerImages) {
        viewport.drawImage(this.upperLayerImages[i], index);
        index++;
      }
      ___private___.renderedMap = true;
    }

  }).apply(typeof ___self___ == 'undefined' ? this : ___self___, arguments);
return z____return;});
		};___defineAllProperties___.call(___self___);
	var __callThisConstructor__ = function (){
		(function(){

  var  z____return = (function constructor(){
        
    ___private___.movimentValidator = new MovimentValidator(this.tileSize, ((function(_this){ return (function(){return (function (x, y,
      direction){
      return this.isPassable(x, y, direction);
    }).apply(_this,arguments)});})(this)), ((function(_this){ return (function(){return (function (x, y){
      return this.isValid(x, y);
    }).apply(_this,arguments)});})(this)))
  }).apply(typeof ___self___ == 'undefined' ? this : ___self___, arguments);
return z____return;
		}).apply(___self___, arguments);

	};
return __callThisConstructor__.apply(___self___, arguments);}

return Map;
})();


module.exports['default'] = Map;





return module.exports;
}
};

z____memoryImport['/MovimentValidator.js'] = {
 cache: null, code: function(){
 var module = {exports: {}};

var MovimentValidator = (function(){
"use strict";

var ___privateStatic___ = {};
function MovimentValidator(tileSize, isPassable, isValid){
	JSComet.checkClass(this, MovimentValidator);
	var ___private___ = {};
	var ___self___ = this;

	var __callSuperConstructor__ = function(){

		___defineAllProperties___.call(___self___);
	}

		var ___defineAllProperties___ = function(){

JSComet.defineProperty(___self___, { enumerable: false, key: 'tileSize', get: (function(){ var z____return = (function tileSize(){return ___private___.z____tileSize;}).apply(___self___, arguments);
 
if((typeof z____return != 'number') ||
 z____return !== parseInt(z____return, 10)|| isNaN(z____return)
 || z____return > 4294967295
 || z____return < 0)
 throw "MovimentValidator#tileSize - the return type must be a integer between 0 and 4294967295";
 return z____return;}), set:(function(){ return (function tileSize(value){

if((typeof value != 'number') ||
 value !== parseInt(value, 10)|| isNaN(value)
 || value > 4294967295
 || value < 0)
 throw "MovimentValidator#tileSize - the property 'value' must be a integer between 0 and 4294967295";
 ___private___.z____tileSize = value; }).apply(___self___, arguments);}) });

JSComet.defineProperty(___private___, { enumerable: false, key: 'is_passable', get: (function(){ var z____return = (function is_passable(){return ___private___.z____is_passable;}).apply(___self___, arguments);
 
if(z____return !== null && !(z____return instanceof Function))
 throw "MovimentValidator#is_passable - the return type must be 'Function'";
 return z____return;}), set:(function(){ return (function is_passable(value){

if(value !== null && !(value instanceof Function))
 throw "MovimentValidator#is_passable - the property 'value' must be 'Function'";
 ___private___.z____is_passable = value; }).apply(___self___, arguments);}) });

JSComet.defineProperty(___private___, { enumerable: false, key: 'is_valid', get: (function(){ var z____return = (function is_valid(){return ___private___.z____is_valid;}).apply(___self___, arguments);
 
if(z____return !== null && !(z____return instanceof Function))
 throw "MovimentValidator#is_valid - the return type must be 'Function'";
 return z____return;}), set:(function(){ return (function is_valid(value){

if(value !== null && !(value instanceof Function))
 throw "MovimentValidator#is_valid - the property 'value' must be 'Function'";
 ___private___.z____is_valid = value; }).apply(___self___, arguments);}) });

		___private___.z____tileSize =  32;
		___private___.z____is_passable = null;
		___private___.z____is_valid = null;
___self___.isPassable =  (function isPassable(x, y, direction){
  var  z____return = (function isPassable(x, y, direction){


if((typeof x != 'number') ||
 x !== parseInt(x, 10)|| isNaN(x)
 || x > 2147483647
 || x < -2147483648)
 throw "MovimentValidator#isPassable - the parameter 'x' must be a integer between -2147483648 and 2147483647";

if((typeof y != 'number') ||
 y !== parseInt(y, 10)|| isNaN(y)
 || y > 2147483647
 || y < -2147483648)
 throw "MovimentValidator#isPassable - the parameter 'y' must be a integer between -2147483648 and 2147483647";

if((typeof direction != 'number') ||
 direction !== parseInt(direction, 10)|| isNaN(direction)
 || direction > 4294967295
 || direction < 0)
 throw "MovimentValidator#isPassable - the parameter 'direction' must be a integer between 0 and 4294967295";

        
    if( ___private___.is_passable)
      return ___private___.is_passable(x, y, direction);
    return true;
  }).apply(typeof ___self___ == 'undefined' ? this : ___self___, arguments);


if((typeof z____return != 'boolean'))
 throw "MovimentValidator#isPassable - the return type must be 'boolean'";
return z____return;});
___self___.isValid =  (function isValid(x, y){
  var  z____return = (function isValid(x, y){


if((typeof x != 'number') ||
 x !== parseInt(x, 10)|| isNaN(x)
 || x > 2147483647
 || x < -2147483648)
 throw "MovimentValidator#isValid - the parameter 'x' must be a integer between -2147483648 and 2147483647";

if((typeof y != 'number') ||
 y !== parseInt(y, 10)|| isNaN(y)
 || y > 2147483647
 || y < -2147483648)
 throw "MovimentValidator#isValid - the parameter 'y' must be a integer between -2147483648 and 2147483647";

        
    if( ___private___.is_valid)
      return ___private___.is_valid(x, y);
    return true;
  }).apply(typeof ___self___ == 'undefined' ? this : ___self___, arguments);


if((typeof z____return != 'boolean'))
 throw "MovimentValidator#isValid - the return type must be 'boolean'";
return z____return;});
		};___defineAllProperties___.call(___self___);
	var __callThisConstructor__ = function (){
		(function(){

  var  z____return = (function constructor(tileSize, isPassable, isValid){


if((typeof tileSize != 'number') ||
 tileSize !== parseInt(tileSize, 10)|| isNaN(tileSize)
 || tileSize > 4294967295
 || tileSize < 0)
 throw "MovimentValidator#constructor - the parameter 'tileSize' must be a integer between 0 and 4294967295";

if(isPassable !== null && !(isPassable instanceof Function))
 throw "MovimentValidator#constructor - the parameter 'isPassable' must be 'Function'";

if(isValid !== null && !(isValid instanceof Function))
 throw "MovimentValidator#constructor - the parameter 'isValid' must be 'Function'";

        
    this.titeSize = tileSize;
    ___private___.is_passable = isPassable;
    ___private___.is_valid = isValid;
  }).apply(typeof ___self___ == 'undefined' ? this : ___self___, arguments);
return z____return;
		}).apply(___self___, arguments);

	};
return __callThisConstructor__.apply(___self___, arguments);}

return MovimentValidator;
})();

module.exports['default'] = MovimentValidator;


return module.exports;
}
};

z____memoryImport['/Player.js'] = {
 cache: null, code: function(){
 var module = {exports: {}};

var ____imported = JSComet.include('./Character', false, z____memoryImport);

var Character = ____imported.default;;

var ____imported = JSComet.include('./KeyInput', false, z____memoryImport);

var KeyInput = ____imported.default;;


var Player = (function(Character){
"use strict";

var ___privateStatic___ = {};
function Player(){
	JSComet.checkClass(this, Player);
	var ___private___ = {};
	var ___self___ = this;
	var ___super___ = null;

	var __callSuperConstructor__ = function(){

		Character.apply(___self___, arguments);
		___super___ = JSComet.wrapSuper(___self___);
		___defineAllProperties___.call(___self___);
	}

		var ___defineAllProperties___ = function(){

___self___.update =  (function update(){
  var  z____return = (function update(){
        
    if (KeyInput.isDown(38) || KeyInput.isDown(87)) this.moveUp();
    if (KeyInput.isDown(37) || KeyInput.isDown(65)) this.moveLeft();
    if (KeyInput.isDown(40) || KeyInput.isDown(83)) this.moveDown();
    if (KeyInput.isDown(39) || KeyInput.isDown(68)) this.moveRight();

    ___super___.update.call(this);
  }).apply(typeof ___self___ == 'undefined' ? this : ___self___, arguments);
return z____return;});
		};
	var __callThisConstructor__ = function (){
		(function(){
if(arguments.length == 0){
  var  z____return = (function constructor(){
        
    if(typeof Character != 'undefined') __callSuperConstructor__.call(this);
  }).apply(typeof ___self___ == 'undefined' ? this : ___self___, arguments);
return z____return;}
if(arguments.length == 1){
  var  z____return = (function constructor(player){


if((player != null) &&(typeof player != 'object'))
 throw "Player#constructor - the parameter 'player' must be 'object'";

        
    if(typeof Character != 'undefined') __callSuperConstructor__.call(this,player);
  }).apply(typeof ___self___ == 'undefined' ? this : ___self___, arguments);
return z____return;}
throw 'Player#constructor - No overload function takes '+arguments.length+' arguments';
		}).apply(___self___, arguments);

	};
return __callThisConstructor__.apply(___self___, arguments);}

JSComet.inherits(Player, Character);

return Player;
})(Character);

module.exports['default'] = Player;


return module.exports;
}
};

z____memoryImport['/Sprite.js'] = {
 cache: null, code: function(){
 var module = {exports: {}};
var Sprite = (function(){
"use strict";

var ___privateStatic___ = {};
function Sprite(){
	JSComet.checkClass(this, Sprite);
	var ___private___ = {};
	var ___self___ = this;

	var __callSuperConstructor__ = function(){

		___defineAllProperties___.call(___self___);
	}

		var ___defineAllProperties___ = function(){

JSComet.defineProperty(___self___, { enumerable: false, key: 'width', get: (function(){ var z____return = (function width(){
    return this.getElementPropertyValue("width");
  }).apply(___self___, arguments);
 
if((typeof z____return != 'number') ||
 z____return !== parseInt(z____return, 10)|| isNaN(z____return)
 || z____return > 2147483647
 || z____return < -2147483648)
 throw "Sprite#width - the return type must be a integer between -2147483648 and 2147483647";
 return z____return;}), set:(function(){ return (function width(value){

 throw 'Sprite#width - this property is readonly'; }).apply(___self___, arguments);}) });

JSComet.defineProperty(___self___, { enumerable: false, key: 'height', get: (function(){ var z____return = (function height(){
    return this.getElementPropertyValue("height");
  }).apply(___self___, arguments);
 
if((typeof z____return != 'number') ||
 z____return !== parseInt(z____return, 10)|| isNaN(z____return)
 || z____return > 2147483647
 || z____return < -2147483648)
 throw "Sprite#height - the return type must be a integer between -2147483648 and 2147483647";
 return z____return;}), set:(function(){ return (function height(value){

 throw 'Sprite#height - this property is readonly'; }).apply(___self___, arguments);}) });

JSComet.defineProperty(___self___, { enumerable: false, key: 'x', get: (function(){ var z____return = (function x(){
    return this.getElementPropertyValue("left");
  }).apply(___self___, arguments);
 
if((typeof z____return != 'number') ||
 z____return !== parseInt(z____return, 10)|| isNaN(z____return)
 || z____return > 2147483647
 || z____return < -2147483648)
 throw "Sprite#x - the return type must be a integer between -2147483648 and 2147483647";
 return z____return;}), set:(function(){ return (function x(value){

 throw 'Sprite#x - this property is readonly'; }).apply(___self___, arguments);}) });

JSComet.defineProperty(___self___, { enumerable: false, key: 'y', get: (function(){ var z____return = (function y(){
    return this.getElementPropertyValue("top");
  }).apply(___self___, arguments);
 
if((typeof z____return != 'number') ||
 z____return !== parseInt(z____return, 10)|| isNaN(z____return)
 || z____return > 2147483647
 || z____return < -2147483648)
 throw "Sprite#y - the return type must be a integer between -2147483648 and 2147483647";
 return z____return;}), set:(function(){ return (function y(value){

 throw 'Sprite#y - this property is readonly'; }).apply(___self___, arguments);}) });

JSComet.defineProperty(___self___, { enumerable: false, key: 'z', get: (function(){ var z____return = (function z(){
    return this.getElementPropertyValue("zIndex");
  }).apply(___self___, arguments);
 
if((typeof z____return != 'number') ||
 z____return !== parseInt(z____return, 10)|| isNaN(z____return)
 || z____return > 2147483647
 || z____return < -2147483648)
 throw "Sprite#z - the return type must be a integer between -2147483648 and 2147483647";
 return z____return;}), set:(function(){ return (function z(value){

 throw 'Sprite#z - this property is readonly'; }).apply(___self___, arguments);}) });

JSComet.defineProperty(___private___, { enumerable: false, key: 'animationCounter', get: (function(){ var z____return = (function animationCounter(){return ___private___.z____animationCounter;}).apply(___self___, arguments);
 
if((typeof z____return != 'number') ||
 z____return !== parseInt(z____return, 10)|| isNaN(z____return)
 || z____return > 2147483647
 || z____return < -2147483648)
 throw "Sprite#animationCounter - the return type must be a integer between -2147483648 and 2147483647";
 return z____return;}), set:(function(){ return (function animationCounter(value){

if((typeof value != 'number') ||
 value !== parseInt(value, 10)|| isNaN(value)
 || value > 2147483647
 || value < -2147483648)
 throw "Sprite#animationCounter - the property 'value' must be a integer between -2147483648 and 2147483647";
 ___private___.z____animationCounter = value; }).apply(___self___, arguments);}) });

JSComet.defineProperty(___private___, { enumerable: false, key: 'isAnimationRunning', get: (function(){ var z____return = (function isAnimationRunning(){return ___private___.z____isAnimationRunning;}).apply(___self___, arguments);
 
if((typeof z____return != 'boolean'))
 throw "Sprite#isAnimationRunning - the return type must be 'boolean'";
 return z____return;}), set:(function(){ return (function isAnimationRunning(value){

if((typeof value != 'boolean'))
 throw "Sprite#isAnimationRunning - the property 'value' must be 'boolean'";
 ___private___.z____isAnimationRunning = value; }).apply(___self___, arguments);}) });

JSComet.defineProperty(___self___, { enumerable: false, key: 'animationStep', get: (function(){ var z____return = (function animationStep(){return ___private___.z____animationStep;}).apply(___self___, arguments);
 
if((typeof z____return != 'number') ||
 z____return !== parseInt(z____return, 10)|| isNaN(z____return)
 || z____return > 2147483647
 || z____return < -2147483648)
 throw "Sprite#animationStep - the return type must be a integer between -2147483648 and 2147483647";
 return z____return;}), set:(function(){ return (function animationStep(value){

if((typeof value != 'number') ||
 value !== parseInt(value, 10)|| isNaN(value)
 || value > 2147483647
 || value < -2147483648)
 throw "Sprite#animationStep - the property 'value' must be a integer between -2147483648 and 2147483647";
 ___private___.z____animationStep = value; }).apply(___self___, arguments);}) });

JSComet.defineProperty(___self___, { enumerable: false, key: 'element', get: (function(){ var z____return = (function element(){return ___private___.z____element;}).apply(___self___, arguments);
  return z____return;}), set:(function(){ return (function element(value){

 ___private___.z____element = value; }).apply(___self___, arguments);}) });

JSComet.defineProperty(___self___, { enumerable: false, key: 'graphic', get: (function(){ var z____return = (function graphic(){return ___private___.z____graphic;}).apply(___self___, arguments);
 
if((z____return != null) &&(typeof z____return != 'string'))
 throw "Sprite#graphic - the return type must be 'string'";
 return z____return;}), set:(function(){ return (function graphic(value){

if((value != null) &&(typeof value != 'string'))
 throw "Sprite#graphic - the property 'value' must be 'string'";
 ___private___.z____graphic = value; }).apply(___self___, arguments);}) });

JSComet.defineProperty(___self___, { enumerable: false, key: 'speed', get: (function(){ var z____return = (function speed(){return ___private___.z____speed;}).apply(___self___, arguments);
 
if((typeof z____return != 'number') ||
 z____return !== parseInt(z____return, 10)|| isNaN(z____return)
 || z____return > 2147483647
 || z____return < -2147483648)
 throw "Sprite#speed - the return type must be a integer between -2147483648 and 2147483647";
 return z____return;}), set:(function(){ return (function speed(value){

if((typeof value != 'number') ||
 value !== parseInt(value, 10)|| isNaN(value)
 || value > 2147483647
 || value < -2147483648)
 throw "Sprite#speed - the property 'value' must be a integer between -2147483648 and 2147483647";
 ___private___.z____speed = value; }).apply(___self___, arguments);}) });

		___private___.z____animationCounter =  0;
		___private___.z____isAnimationRunning =  false;
		___private___.z____animationStep =  0;
		___private___.z____element =  null;
		___private___.z____graphic =  null;
		___private___.z____speed =  3;
___self___.startAnimation =  (function startAnimation(){
  var  z____return = (function startAnimation(){
        
    ___private___.isAnimationRunning = true;
  }).apply(typeof ___self___ == 'undefined' ? this : ___self___, arguments);
return z____return;});
___self___.stopAnimation =  (function stopAnimation(){
  var  z____return = (function stopAnimation(){
        
    ___private___.isAnimationRunning = false;
  }).apply(typeof ___self___ == 'undefined' ? this : ___self___, arguments);
return z____return;});
___self___.update =  (function update(){
  var  z____return = (function update(){
        
    
    if (! ___private___.isAnimationRunning) {
      if (this.animationStep == 1)
        this.animationStep = 2;
      else if (this.animationStep == 3)
        this.animationStep = 0;
      return;
    }

    
    if ( ___private___.animationCounter > 18 - this.speed * 3) {
      if (this.animationStep < 3) {
        this.animationStep += 1;
      } else {
        this.animationStep = 0;
      }
      ___private___.animationCounter = 0;
    } else {
      ___private___.animationCounter += 1;
    }
  }).apply(typeof ___self___ == 'undefined' ? this : ___self___, arguments);
return z____return;});
___self___.getElementPropertyValue =  (function getElementPropertyValue(name){
  var  z____return = (function getElementPropertyValue(name){


if((name != null) &&(typeof name != 'string'))
 throw "Sprite#getElementPropertyValue - the parameter 'name' must be 'string'";

        
    if (this.element == null)
      return 0;
    var value = 0;
    if (typeof window.currentStyle == "function")
      value = window.currentStyle(this.element)[name];
    else
      value = window.getComputedStyle(this.element)[name];

    return parseInt(value.replace("px", ""));
  }).apply(typeof ___self___ == 'undefined' ? this : ___self___, arguments);


if((typeof z____return != 'number') ||
 z____return !== parseInt(z____return, 10)|| isNaN(z____return)
 || z____return > 2147483647
 || z____return < -2147483648)
 throw "Sprite#getElementPropertyValue - the return type must be a integer between -2147483648 and 2147483647";
return z____return;});
		};___defineAllProperties___.call(___self___);
	var __callThisConstructor__ = function (){
		(function(){
if(arguments.length == 0){
  var  z____return = (function constructor(){
        }).apply(typeof ___self___ == 'undefined' ? this : ___self___, arguments);
return z____return;}
if(arguments.length == 1){
  var  z____return = (function constructor(sprite){


if((sprite != null) &&(typeof sprite != 'object'))
 throw "Sprite#constructor - the parameter 'sprite' must be 'object'";

        
    if (!sprite)
      throw new Error('Invalid argument');

    this.speed = sprite.speed;
    this.graphic = sprite.graphic;
  }).apply(typeof ___self___ == 'undefined' ? this : ___self___, arguments);
return z____return;}
throw 'Sprite#constructor - No overload function takes '+arguments.length+' arguments';
		}).apply(___self___, arguments);

	};
return __callThisConstructor__.apply(___self___, arguments);}

return Sprite;
})();


module.exports['default'] = Sprite;


return module.exports;
}
};

z____memoryImport['/Viewport.js'] = {
 cache: null, code: function(){
 var module = {exports: {}};

var ____imported = JSComet.include('./Sprite', false, z____memoryImport);

var Sprite = ____imported.default;;

var Viewport = (function(){
"use strict";

var ___privateStatic___ = {};
function Viewport(elementID){
	JSComet.checkClass(this, Viewport);
	var ___private___ = {};
	var ___self___ = this;

	var __callSuperConstructor__ = function(){

		___defineAllProperties___.call(___self___);
	}

		var ___defineAllProperties___ = function(){

JSComet.defineProperty(___self___, { enumerable: false, key: 'width', get: (function(){ var z____return = (function width(){
    return ___private___.getElementPropertyValue( ___private___.element, "width");
  }).apply(___self___, arguments);
 
if((typeof z____return != 'number') ||
 z____return !== parseInt(z____return, 10)|| isNaN(z____return)
 || z____return > 4294967295
 || z____return < 0)
 throw "Viewport#width - the return type must be a integer between 0 and 4294967295";
 return z____return;}), set:(function(){ return (function width(value){

 throw 'Viewport#width - this property is readonly'; }).apply(___self___, arguments);}) });

JSComet.defineProperty(___self___, { enumerable: false, key: 'height', get: (function(){ var z____return = (function height(){
    return ___private___.getElementPropertyValue( ___private___.element, "height");
  }).apply(___self___, arguments);
 
if((typeof z____return != 'number') ||
 z____return !== parseInt(z____return, 10)|| isNaN(z____return)
 || z____return > 4294967295
 || z____return < 0)
 throw "Viewport#height - the return type must be a integer between 0 and 4294967295";
 return z____return;}), set:(function(){ return (function height(value){

 throw 'Viewport#height - this property is readonly'; }).apply(___self___, arguments);}) });

JSComet.defineProperty(___self___, { enumerable: false, key: 'offsetX', get: (function(){ var z____return = (function offsetX(){
    return Math.abs( ___private___.getElementPropertyValue( ___private___.wrapper, "left"));
  }).apply(___self___, arguments);
 
if((typeof z____return != 'number') ||
 z____return !== parseInt(z____return, 10)|| isNaN(z____return)
 || z____return > 4294967295
 || z____return < 0)
 throw "Viewport#offsetX - the return type must be a integer between 0 and 4294967295";
 return z____return;}), set:(function(){ return (function offsetX(value){

 throw 'Viewport#offsetX - this property is readonly'; }).apply(___self___, arguments);}) });

JSComet.defineProperty(___self___, { enumerable: false, key: 'offsetY', get: (function(){ var z____return = (function offsetY(){
    return Math.abs( ___private___.getElementPropertyValue( ___private___.wrapper, "top"));
  }).apply(___self___, arguments);
 
if((typeof z____return != 'number') ||
 z____return !== parseInt(z____return, 10)|| isNaN(z____return)
 || z____return > 4294967295
 || z____return < 0)
 throw "Viewport#offsetY - the return type must be a integer between 0 and 4294967295";
 return z____return;}), set:(function(){ return (function offsetY(value){

 throw 'Viewport#offsetY - this property is readonly'; }).apply(___self___, arguments);}) });

JSComet.defineProperty(___private___, { enumerable: false, key: 'element', get: (function(){ var z____return = (function element(){return ___private___.z____element;}).apply(___self___, arguments);
  return z____return;}), set:(function(){ return (function element(value){

 ___private___.z____element = value; }).apply(___self___, arguments);}) });

JSComet.defineProperty(___private___, { enumerable: false, key: 'wrapper', get: (function(){ var z____return = (function wrapper(){return ___private___.z____wrapper;}).apply(___self___, arguments);
  return z____return;}), set:(function(){ return (function wrapper(value){

 ___private___.z____wrapper = value; }).apply(___self___, arguments);}) });

		___private___.z____element = undefined;
		___private___.z____wrapper = undefined;
___private___.getElementPropertyValue =  (function getElementPropertyValue(element, name){ return  (function getElementPropertyValue(element, name){
  var  z____return = (function getElementPropertyValue(element, name){


if((name != null) &&(typeof name != 'string'))
 throw "Viewport#getElementPropertyValue - the parameter 'name' must be 'string'";

        
    if (element == null)
      return 0;
    var value = 0;
    if (typeof window.currentStyle == "function")
      value = window.currentStyle(element)[name];
    else
      value = window.getComputedStyle(element)[name];

    var result = parseInt(value.replace("px", ""));
    if (isNaN(result))
      return 0;
    return result;
  }).apply(typeof ___self___ == 'undefined' ? this : ___self___, arguments);


if((typeof z____return != 'number') ||
 z____return !== parseInt(z____return, 10)|| isNaN(z____return)
 || z____return > 2147483647
 || z____return < -2147483648)
 throw "Viewport#getElementPropertyValue - the return type must be a integer between -2147483648 and 2147483647";
return z____return;}).apply(this, arguments);});
___self___.move =  (function move(x, y){
  var  z____return = (function move(x, y){


if((typeof x != 'number') ||
 x !== parseInt(x, 10)|| isNaN(x)
 || x > 4294967295
 || x < 0)
 throw "Viewport#move - the parameter 'x' must be a integer between 0 and 4294967295";

if((typeof y != 'number') ||
 y !== parseInt(y, 10)|| isNaN(y)
 || y > 4294967295
 || y < 0)
 throw "Viewport#move - the parameter 'y' must be a integer between 0 and 4294967295";

        
    ___private___.wrapper.style.position = "relative";
    ___private___.wrapper.style.top = "-"+(y)+"px";
    ___private___.wrapper.style.left = "-"+(x)+"px";
  }).apply(typeof ___self___ == 'undefined' ? this : ___self___, arguments);
return z____return;});
___self___.clear =  (function clear(){
  var  z____return = (function clear(){
        
    
    if ( ___private___.wrapper) {
      ___private___.wrapper.innerHTML = "";
    }
  }).apply(typeof ___self___ == 'undefined' ? this : ___self___, arguments);
return z____return;});
___self___.beginRender =  (function beginRender(){
  var  z____return = (function beginRender(){
        

  }).apply(typeof ___self___ == 'undefined' ? this : ___self___, arguments);
return z____return;});
___self___.endRender =  (function endRender(){
  var  z____return = (function endRender(){
        

  }).apply(typeof ___self___ == 'undefined' ? this : ___self___, arguments);
return z____return;});
___self___.drawImage =  (function drawImage(){if(arguments.length == 1){
  var  z____return = (function drawImage(source){


if((source != null) &&(typeof source != 'string'))
 throw "Viewport#drawImage - the parameter 'source' must be 'string'";

        
    return this.drawImage(source, 0, 0, 0);
  }).apply(typeof ___self___ == 'undefined' ? this : ___self___, arguments);
return z____return;}
if(arguments.length == 2){
  var  z____return = (function drawImage(source, z){


if((source != null) &&(typeof source != 'string'))
 throw "Viewport#drawImage - the parameter 'source' must be 'string'";

if((typeof z != 'number') ||
 z !== parseInt(z, 10)|| isNaN(z)
 || z > 2147483647
 || z < -2147483648)
 throw "Viewport#drawImage - the parameter 'z' must be a integer between -2147483648 and 2147483647";

        
    return this.drawImage(source, 0, 0, z);
  }).apply(typeof ___self___ == 'undefined' ? this : ___self___, arguments);
return z____return;}
if(arguments.length == 3){
  var  z____return = (function drawImage(source, x, y){


if((source != null) &&(typeof source != 'string'))
 throw "Viewport#drawImage - the parameter 'source' must be 'string'";

if((typeof x != 'number') ||
 x !== parseInt(x, 10)|| isNaN(x)
 || x > 2147483647
 || x < -2147483648)
 throw "Viewport#drawImage - the parameter 'x' must be a integer between -2147483648 and 2147483647";

if((typeof y != 'number') ||
 y !== parseInt(y, 10)|| isNaN(y)
 || y > 2147483647
 || y < -2147483648)
 throw "Viewport#drawImage - the parameter 'y' must be a integer between -2147483648 and 2147483647";

        
    return this.drawImage(source, x, y, 0);
  }).apply(typeof ___self___ == 'undefined' ? this : ___self___, arguments);
return z____return;}
if(arguments.length == 4){
  var  z____return = (function drawImage(source, x, y, z){


if((source != null) &&(typeof source != 'string'))
 throw "Viewport#drawImage - the parameter 'source' must be 'string'";

if((typeof x != 'number') ||
 x !== parseInt(x, 10)|| isNaN(x)
 || x > 2147483647
 || x < -2147483648)
 throw "Viewport#drawImage - the parameter 'x' must be a integer between -2147483648 and 2147483647";

if((typeof y != 'number') ||
 y !== parseInt(y, 10)|| isNaN(y)
 || y > 2147483647
 || y < -2147483648)
 throw "Viewport#drawImage - the parameter 'y' must be a integer between -2147483648 and 2147483647";

if((typeof z != 'number') ||
 z !== parseInt(z, 10)|| isNaN(z)
 || z > 2147483647
 || z < -2147483648)
 throw "Viewport#drawImage - the parameter 'z' must be a integer between -2147483648 and 2147483647";

        
    var img = new Image();
    img.src = source;
    img.classList.add("image");
    img.style.position = "absolute";
    img.style.top = (y)+"px";
    img.style.left = (x)+"px";
    img.style.zIndex = z;
    ___private___.wrapper.appendChild(img);
    return img;
  }).apply(typeof ___self___ == 'undefined' ? this : ___self___, arguments);
return z____return;}
throw 'Viewport#drawImage - No overload function takes '+arguments.length+' arguments';});
___self___.removeSprite =  (function removeSprite(id){
  var  z____return = (function removeSprite(id){


if((typeof id != 'number') ||
 id !== parseInt(id, 10)|| isNaN(id)
 || id > 2147483647
 || id < -2147483648)
 throw "Viewport#removeSprite - the parameter 'id' must be a integer between -2147483648 and 2147483647";

        
    var sprite = document.getElementById("sprite-"+(id));
    if (sprite) {
      ___private___.wrapper.removeChild(sprite);
    }
  }).apply(typeof ___self___ == 'undefined' ? this : ___self___, arguments);
return z____return;});
___self___.drawSprite =  (function drawSprite(id, source, x, y, direction, z){
  var  z____return = (function drawSprite(id, source, x, y, direction, z){


if((typeof id != 'number') ||
 id !== parseInt(id, 10)|| isNaN(id)
 || id > 2147483647
 || id < -2147483648)
 throw "Viewport#drawSprite - the parameter 'id' must be a integer between -2147483648 and 2147483647";

if(source !== null && !(source instanceof Sprite))
 throw "Viewport#drawSprite - the parameter 'source' must be 'Sprite'";

if((typeof x != 'number') ||
 x !== parseInt(x, 10)|| isNaN(x)
 || x > 2147483647
 || x < -2147483648)
 throw "Viewport#drawSprite - the parameter 'x' must be a integer between -2147483648 and 2147483647";

if((typeof y != 'number') ||
 y !== parseInt(y, 10)|| isNaN(y)
 || y > 2147483647
 || y < -2147483648)
 throw "Viewport#drawSprite - the parameter 'y' must be a integer between -2147483648 and 2147483647";

if((typeof direction != 'number') ||
 direction !== parseInt(direction, 10)|| isNaN(direction)
 || direction > 4294967295
 || direction < 0)
 throw "Viewport#drawSprite - the parameter 'direction' must be a integer between 0 and 4294967295";

if((typeof z != 'number') ||
 z !== parseInt(z, 10)|| isNaN(z)
 || z > 2147483647
 || z < -2147483648)
 throw "Viewport#drawSprite - the parameter 'z' must be a integer between -2147483648 and 2147483647";

        
    var sprite = source.element;
    if (!sprite) {
      sprite = document.createElement("div");
      source.element = sprite;
      sprite.style.position = "absolute";
      sprite.setAttribute("id", "sprite-"+(id));
      ___private___.wrapper.appendChild(sprite);
    }
    sprite.style.top = (y)+"px";
    sprite.style.left = (x)+"px";
    sprite.style.zIndex = z;

    if (!source || !source.graphic) {
      sprite.style.display = "none";
    } else {
      sprite.style.display = "block";
    }

    if (sprite.graphicStep == 1)
      return;
    if (sprite.dataset.src == source.graphic) {
      if (sprite.graphicStep == 2) {

        var h = source.height;
        var w = source.width;
        sprite.style.backgroundPosition = (source.animationStep * w)+"px "+(direction * h)+"px";

        source.update();
      }
    } else {
      sprite.graphicStep = 0;
      var img = new Image();
      img.onload = function () {
        var h = this.naturalHeight / 4;
        var w = this.naturalWidth / 4;

        sprite.setAttribute("data-src", source.graphic);
        sprite.style.width = w;
        sprite.style.height = h;

        sprite.style.backgroundImage = "url("+(source.graphic)+")";
        sprite.style.backgroundPosition = (source.animationStep * w)+"px "+(direction * h)+"px";

        sprite.graphicStep = 2;
        source.update();
      }
      img.onerror = function () {
        sprite.graphicStep = 2;
      }
      sprite.graphicStep = 1;
      img.src = source.graphic;
    }
  }).apply(typeof ___self___ == 'undefined' ? this : ___self___, arguments);
return z____return;});
		};___defineAllProperties___.call(___self___);
	var __callThisConstructor__ = function (){
		(function(){

  var  z____return = (function constructor(elementID){


if((elementID != null) &&(typeof elementID != 'string'))
 throw "Viewport#constructor - the parameter 'elementID' must be 'string'";

        

    ___private___.element = document.getElementById(elementID);
    if (! ___private___.element)
      throw new Error('Invalid argument');

    this.clear();
    ___private___.element.style.overflow = "hidden";
    ___private___.wrapper = document.createElement("div");
    this.move(0, 0);
    ___private___.wrapper.classList.add("wrapper");
    ___private___.element.appendChild( ___private___.wrapper);
  }).apply(typeof ___self___ == 'undefined' ? this : ___self___, arguments);
return z____return;
		}).apply(___self___, arguments);

	};
return __callThisConstructor__.apply(___self___, arguments);}

return Viewport;
})();


module.exports['default'] = Viewport;


return module.exports;
}
};


var ____imported = JSComet.include('./Player', false, z____memoryImport);

var Player = ____imported.default;;

var ____imported = JSComet.include('./Sprite', false, z____memoryImport);

var Sprite = ____imported.default;;

var ____imported = JSComet.include('./Viewport', false, z____memoryImport);

var Viewport = ____imported.default;;

var ____imported = JSComet.include('./Event', false, z____memoryImport);

var Event = ____imported.default;;

var ____imported = JSComet.include('./EventPage', false, z____memoryImport);

var EventPage = ____imported.default;;

var ____imported = JSComet.include('./EventTrigger', false, z____memoryImport);

var EventTrigger = ____imported.default;;

var ____imported = JSComet.include('./Game', false, z____memoryImport);

var Game = ____imported.default;;

var ____imported = JSComet.include('./Map', false, z____memoryImport);

var Map = ____imported.default;;



module.exports.Player = Player;


module.exports.Sprite = Sprite;


module.exports.Viewport = Viewport;


module.exports.Event = Event;


module.exports.EventPage = EventPage;


module.exports.EventTrigger = EventTrigger;


module.exports.Game = Game;


module.exports.Map = Map;


var system = {
  Player: Player,
  Sprite: Sprite,
  Viewport: Viewport,
  Event: Event,
  EventPage: EventPage,
  EventTrigger: EventTrigger,
  Game: Game,
  Map: Map
};

module.exports['default'] = system;

