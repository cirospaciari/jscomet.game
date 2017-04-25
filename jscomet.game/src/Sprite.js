class Sprite {
  private animationCounter: int = 0;
  private isAnimationRunning: boolean = false;
  animationStep: int = 0;
  element: any = null;
  graphic: string = null;
  speed: int = 3;

  constructor() {}
  constructor(sprite: object) {
    if (!sprite)
      throw new Error('Invalid argument');

    this.speed = sprite.speed;
    this.graphic = sprite.graphic;
  }

  startAnimation() {
    this.isAnimationRunning = true;
  }
  stopAnimation() {
    this.isAnimationRunning = false;
  }

  update() {
    //if animation stops set most close stop step
    if (!this.isAnimationRunning) {
      if (this.animationStep == 1)
        this.animationStep = 2;
      else if (this.animationStep == 3)
        this.animationStep = 0;
      return;
    }

    //calculate next step of animation
    if (this.animationCounter > 18 - this.speed * 3) {
      if (this.animationStep < 3) {
        this.animationStep += 1;
      } else {
        this.animationStep = 0;
      }
      this.animationCounter = 0;
    } else {
      this.animationCounter += 1;
    }
  }

  getElementPropertyValue(name: string): int {
    if (this.element == null)
      return 0;
    var value = 0;
    if (typeof window.currentStyle == "function")
      value = window.currentStyle(this.element)[name];
    else
      value = window.getComputedStyle(this.element)[name];

    return parseInt(value.replace("px", ""));
  }

  get width(): int {
    return this.getElementPropertyValue("width");
  }

  get height(): int {
    return this.getElementPropertyValue("height");
  }

  get x(): int {
    return this.getElementPropertyValue("left");
  }

  get y(): int {
    return this.getElementPropertyValue("top");
  }
  get z(): int {
    return this.getElementPropertyValue("zIndex");
  }
}

export default Sprite;
