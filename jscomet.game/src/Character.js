import Sprite from './Sprite';
import MovimentValidator from './MovimentValidator';

class Character {
  private moving_x: int = 0;
  private moving_y: int = 0;
  private stopCount: int = 0;

  isMoving: boolean = false;

  direction: int = 0;
  through: boolean = false;
  movementType: int = 0;
  frequence: int = 3;
  directionFix: boolean = false;
  walkingAnimation: boolean = true;
  steppingAnimation: boolean = false;
  sprite: Sprite = null;
  x: int = 0;
  y: int = 0;

  movimentValidator: MovimentValidator;

  constructor() {}
  constructor(character: object) {
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
  }
  update() {
    if (this.sprite) {
      if (this.steppingAnimation) {
        this.sprite.startAnimation();
      }
      if (!this.isMoving && this.stopCount > (40 - this.frequence * 2) * (6 - this.frequence)) {
        if (!this.isMoving) {
          switch (this.movementType) {
          case 1: //random
            this.moveRandom();
            break;
          case 2: //follow player
            break;
          case 3: //custom
            break;
          default:
            break;
          }
        }
      } else {
        this.stopCount++;
      }
      this.updateMove();
    }
  }

  onMoving() {

  }

  updateMove() {
    if (this.isMoving) {
      this.stopCount = 0;

      var moveSize = this.sprite.speed;

      var new_x = this.x;
      var new_y = this.y;
      var new_direction = this.direction;

      if (new_y < this.moving_y) {
        new_y += moveSize;
        if (new_y > this.moving_y)
          new_y = this.moving_y;
        new_direction = 0;
      } else if (new_y > this.moving_y) {
        new_y -= moveSize;
        if (new_y < this.moving_y)
          new_y = this.moving_y;
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

      if (new_x < this.moving_x) {
        new_x += moveSize;
        if (new_x > this.moving_x)
          new_x = this.moving_x;
        new_direction = 2;
      } else if (new_x > this.moving_x) {
        new_x -= moveSize;
        if (new_x < this.moving_x)
          new_x = this.moving_x;
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

      //end moviment
      this.isMoving = false;
      if (!this.steppingAnimation && this.walkingAnimation)
        this.sprite.stopAnimation();
    }

  }


  move(x: int, y: int) {

    this.isMoving = true;
    this.moving_x = x;
    this.moving_y = y;
  }

  turnLeft() {
    this.turnDirection(3);
  }
  turnRight() {
    this.turnDirection(2);
  }
  turnUp() {
    this.turnDirection(1);
  }
  turnDown() {
    this.turnDirection(0);
  }
  turnDirection(direction: int) {
    if (!this.directionFix && !this.isMoving) {
      this.direction = direction;
    }
  }
  moveDown() {
    this.turnDown();
    return this.move(this.x, this.y + this.movimentValidator.titeSize);
  }

  moveUp() {
    this.turnUp();
    return this.move(this.x, this.y - this.movimentValidator.titeSize);
  }

  moveLeft() {
    this.turnLeft();
    return this.move(this.x - this.movimentValidator.titeSize, this.y);
  }

  moveRight() {
    this.turnRight();
    return this.move(this.x + this.movimentValidator.titeSize, this.y);
  }

  moveForward() {
    return this.moveDirection(this.direction);
  }

  moveBackward() {
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
  }
  moveDirection(direction: int) {
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
  }

  moveRandom() {
    return this.moveDirection(parseInt(Math.random() * 4));
  }

  isPassable(x: int, y: int, direction: uint): boolean {
    if (!this.movimentValidator)
      return false;
    if (this.through)
      return true;
    return this.movimentValidator.isPassable(x, y, direction);
  }

  isValid(x: int, y: int): boolean {
    if (!this.movimentValidator)
      return false;
    return this.movimentValidator.isValid(x, y);
  }
}

export default Character;
