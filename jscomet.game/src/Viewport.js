import Sprite from './Sprite';

class Viewport {
  private element: any;
  private wrapper: any;

  constructor(elementID: string) {

    this.element = document.getElementById(elementID);
    if (!this.element)
      throw new Error('Invalid argument');

    this.clear();
    this.element.style.overflow = "hidden";
    this.wrapper = document.createElement("div");
    this.move(0, 0);
    this.wrapper.classList.add("wrapper");
    this.element.appendChild(this.wrapper);
  }
  private getElementPropertyValue(element, name: string): int {
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
  }

  get width(): uint {
    return this.getElementPropertyValue(this.element, "width");
  }

  get height(): uint {
    return this.getElementPropertyValue(this.element, "height");
  }
  get offsetX(): uint {
    return Math.abs(this.getElementPropertyValue(this.wrapper, "left"));
  }

  get offsetY(): uint {
    return Math.abs(this.getElementPropertyValue(this.wrapper, "top"));
  }

  move(x: uint, y: uint) {
    this.wrapper.style.position = "relative";
    this.wrapper.style.top = `-${y}px`;
    this.wrapper.style.left = `-${x}px`;
  }

  clear() {
    //clear elements
    if (this.wrapper) {
      this.wrapper.innerHTML = "";
    }
  }

  beginRender() {

  }
  endRender() {

  }
  drawImage(source: string) {
    return this.drawImage(source, 0, 0, 0);
  }

  drawImage(source: string, z: int) {
    return this.drawImage(source, 0, 0, z);
  }

  drawImage(source: string, x: int, y: int) {
    return this.drawImage(source, x, y, 0);
  }

  drawImage(source: string, x: int, y: int, z: int) {
    var img = new Image();
    img.src = source;
    img.classList.add("image");
    img.style.position = "absolute";
    img.style.top = `${y}px`;
    img.style.left = `${x}px`;
    img.style.zIndex = z;
    this.wrapper.appendChild(img);
    return img;
  }

  removeSprite(id: int) {
    var sprite = document.getElementById(`sprite-${id}`);
    if (sprite) {
      this.wrapper.removeChild(sprite);
    }
  }

  drawSprite(id: int, source: Sprite, x: int, y: int, direction: uint, z:
    int) {
    var sprite = source.element;
    if (!sprite) {
      sprite = document.createElement("div");
      source.element = sprite;
      sprite.style.position = "absolute";
      sprite.setAttribute("id", `sprite-${id}`);
      this.wrapper.appendChild(sprite);
    }
    sprite.style.top = `${y}px`;
    sprite.style.left = `${x}px`;
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
        sprite.style.backgroundPosition = `${source.animationStep * w}px ${direction * h}px`;

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

        sprite.style.backgroundImage = `url(${source.graphic})`;
        sprite.style.backgroundPosition = `${source.animationStep * w}px ${direction * h}px`;

        sprite.graphicStep = 2;
        source.update();
      }
      img.onerror = function () {
        sprite.graphicStep = 2;
      }
      sprite.graphicStep = 1;
      img.src = source.graphic;
    }
  }
}

export default Viewport;
