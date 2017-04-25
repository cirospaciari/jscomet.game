import Character from './Character';
import KeyInput from './KeyInput';


class Player extends Character {

  constructor() {
    super();
  }
  constructor(player: object) {
    super(player);
  }

  update() {
    if (KeyInput.isDown(38) || KeyInput.isDown(87)) this.moveUp();
    if (KeyInput.isDown(37) || KeyInput.isDown(65)) this.moveLeft();
    if (KeyInput.isDown(40) || KeyInput.isDown(83)) this.moveDown();
    if (KeyInput.isDown(39) || KeyInput.isDown(68)) this.moveRight();

    super.update();
  }
}
export default Player;
