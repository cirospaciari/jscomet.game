
class MovimentValidator{

  tileSize: uint = 32;

  private is_passable: Function;
  private is_valid: Function;

  constructor(tileSize: uint, isPassable: Function, isValid: Function){
    this.titeSize = tileSize;
    this.is_passable = isPassable;
    this.is_valid = isValid;
  }

  isPassable(x: int, y: int, direction: uint): boolean {
    if(this.is_passable)
      return this.is_passable(x, y, direction);
    return true;
  }

  isValid(x: int, y: int): boolean {
    if(this.is_valid)
      return this.is_valid(x, y);
    return true;
  }
}
export default MovimentValidator;
