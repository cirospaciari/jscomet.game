import EventPage from './EventPage'

class Event {
  //auto-generated id
  id: int;
  name: string;

  //position
  private lastX: int;
  private lastY: int;

  get x() {
    return this.lastX;
  }
  get y() {
    return this.lastY;
  }
  set x(value) {
    this.lastX = value;
    if (this.currentPage) {
      this.currentPage.x = this.lastX;
    }
  }
  set y(value) {
    this.lastY = value;
    if (this.currentPage) {
      this.currentPage.y = this.lastY;
    }
  }

  //0: event, 1: common, 2: online, 3: enemy
  type: int = 0;
  pages: EventPage[];
  currentPage: EventPage;

  constructor(name: string, type: int) {
    this.name = name;
    this.type = type;
  }

  constructor(name: string, type: int, pages: EventPage[]) {
    this(name, type);
    this.addPages(pages);
  }

  constructor(event: object) {
    if (!event || !event.pages)
      throw new Error('Invalid argument');
    this(event.name, event.type, event.pages);

    this.lastX = event.x;
    this.lastY = event.y;
    this.id = event.id;
  }
  update() {
    if (this.currentPage) {
      this.currentPage.update();
      this.lastX = this.currentPage.x;
      this.lastY = this.currentPage.y;
    }
  }
  checkCurrentPage(): EventPage {
    if (this.pages) {
      for (var i in this.pages) {
        var page = this.pages[i];
        //if not have a condition or condition is true
        if (!page.condition || page.condition()) {
          this.currentPage = page;
          this.currentPage.x = this.lastX;
          this.currentPage.y = this.lastY;
          return page;
        }
      }
      return null;
    }
  }

  addPages(pages: EventPage[]) {
    this.pages = new Array(pages.length);
    for (var i in pages) {
      if (pages[i] instanceof EventPage)
        this.pages[i] = pages[i];
      else
        this.pages[i] = new EventPage(pages[i]);
    }
  }

  addPage(page: EventPage) {
    if (!this.pages)
      this.pages = [];
    this.pages.push(page);
  }
}

export default Event;
