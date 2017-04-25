import Viewport from './Viewport';
import Event from './Event';
import Map from './Map';
import KeyInput from './KeyInput'

class Game {
  viewport: Viewport = null;
  commonEvents: Event[];

  loopInterval: int = 32; //30fps
  intervalID: int | null = null;

  currentMap: Map = null;
  isRunning: boolean = false;

  private fpsCount = 0;
  private fpsStart = 0;
  constructor() {
    this.commonEvents = [];
  }

  constructor(viewportID: string) {
    this();
    this.viewport = new Viewport(viewportID);
  }

  //game draw
  update() {
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
    if (new Date().getTime() - this.fpsStart > 1000) {
      this.fpsStart = new Date().getTime();
      document.title = this.fpsCount;
      this.fpsCount = 0;
    } else {
      this.fpsCount++;
    }
  }

  //pause game loop
  pause() {
    if (this.isRunning) {
      KeyInput.unbind();
      clearInterval(this.intervalID);
      this.isRunning = false;
    }
  }
  loadMap(map: Map) {
      if (map) {
        this.currentMap = map;
        this.currentMap.start(this.viewport);
      }
    }
    //start game loop
  start() {
    if (!this.isRunning) {
      KeyInput.bind();
      this.intervalID = setInterval(() => {
        this.update()
      }, this.loopInterval);
      this.isRunning = true;
      this.fpsStart = new Date().getTime();
    }
  }
}

export default Game;
