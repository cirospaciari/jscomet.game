class KeyInput{
  private static _pressed = {};

  static isDown(keyCode){
    return KeyInput._pressed[keyCode];
  }

  static onKeyup(event){
    delete KeyInput._pressed[event.keyCode];
  }

  static onKeydown(event){
    KeyInput._pressed[event.keyCode] = true;
  }

  static bind(){
    window.addEventListener('keyup', KeyInput.onKeyup , false);
    window.addEventListener('keydown', KeyInput.onKeydown, false);
  }
  static unbind(){
    window.removeEventListener('keyup', KeyInput.onKeyup, false);
    window.removeEventListener('keydown', KeyInput.onKeydown, false);
  }
}

export default KeyInput;
