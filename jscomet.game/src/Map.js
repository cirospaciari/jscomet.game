import Event from './Event';
import Viewport from './Viewport';
import EventTrigger from './EventTrigger';
import MovimentValidator from './MovimentValidator';

class Map {
  name: string;
  upperLayerImages: string[] = null;
  lowerLayerImages: string[] = null;

  width: int = 0;
  height: int = 0;
  tileSize: int = 32;

  blockers = {}; //x, y, direction -> true || false

  events: Event[];
  player: Player;
  private activeEvents = [];
  private renderedMap = false;
  private movimentValidator: MovimentValidator;

  redraw(viewport: Viewport) {
    this.renderedMap = false;
    viewport.clear();
    this.update(viewport);
  }
  constructor() {
    this.movimentValidator = new MovimentValidator(this.tileSize, (x, y,
      direction) => {
      return this.isPassable(x, y, direction);
    }, (x, y) => {
      return this.isValid(x, y);
    })
  }
  start(viewport: Viewport) {
    this.forceCenter(viewport, this.player.x, this.player.y);
  }
  isPassable(x: int, y: int, direction: uint): boolean {
    return true;
  }
  isValid(x: int, y: int): boolean {
    if (x > ((this.width * this.tileSize) - this.tileSize) || y > ((this.height *
        this.tileSize) - this.tileSize) ||
      y < -this.tileSize || x < 0)
      return false;
    return true;
  }
  forceCenter(viewport: Viewport, x: int, y: int) {

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
  }
  center(viewport: Viewport, x: int, y: int) {

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
  }
  update(viewport: Viewport) {
    //this.player.onMoving = () => this.center(viewport, player.x, player.y);
    this.center(viewport, this.player.x, this.player.y);

    this.activeEvents = [];
    var index = 0;
    if (this.lowerLayerImages && !this.renderedMap) {
      //draw lower layers
      for (var i in this.lowerLayerImages) {
        viewport.drawImage(this.lowerLayerImages[i], index);
        index++;
      }
      this.renderedMap = true;
    }
    this.player.movimentValidator = this.movimentValidator;

    //add player as active event
    this.activeEvents.push(this.player);

    if (this.events) {
      for (var i in this.events) {
        var event = this.events[i];
        var eventPage = event.checkCurrentPage();
        if (eventPage) //has a active page
          this.activeEvents.push(event);
        else
          viewport.removeSprite(event.id);
      }
    }

    //sort by y asc
    this.activeEvents.sort((a, b) => a.y - b.y);

    index = 1000;
    //draw events
    for (var i in this.activeEvents) {
      var event = this.activeEvents[i];

      if (event instanceof Player) {
        //if is a player
        viewport.drawSprite(0, event.sprite, event.x, event.y, event.direction,
          index + event.y);
      } else {
        var eventPage = event.currentPage;
        //set moviment validation methods
        eventPage.movimentValidator = this.movimentValidator;

        //draw sprite
        if (eventPage.sprite) {
          viewport.drawSprite(event.id, eventPage.sprite, event.x, event.y,
            eventPage.direction, index + event.y);
        }
      }
      event.update();
    }

    index = 20000;

    if (this.upperLayerImages && !this.renderedMap) {
      //draw upper layers
      for (var i in this.upperLayerImages) {
        viewport.drawImage(this.upperLayerImages[i], index);
        index++;
      }
      this.renderedMap = true;
    }

  }
}

export default Map;
