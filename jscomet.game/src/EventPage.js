import EventTrigger from './EventTrigger';
import Character from './Character';

class EventPage extends Character {
  //self switch
  switchs: boolean[];
  moveRoute: any = null; //?? pensar

  trigger: int = EventTrigger.Action;

  condition: Function; //script da condição
  contents: Function; //script do evento

  constructor() {
    super();
    this.switchs = [false, false, false, false];
  }

  constructor(page: object) {
    super(page);

    this.switchs = [false, false, false, false];
    this.moveRoute = page.moveRoute;
    this.trigger = page.trigger;
    this.condition = page.condition;
    this.contents = page.contents;
  }
}

export default EventPage;
