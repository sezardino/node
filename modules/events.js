const EventEmitter = require("events");

class Dispatcher extends EventEmitter {
    subscribe(eventName, cb) {
        console.log("subscribing");
        this.on(eventName, cb);
    }

    dispatching(eventName, data) {
      console.log('dispatching');
      this.emit(eventName, data)
    }
}

const dis = new Dispatcher()

dis.subscribe('greet', (data) => {
  console.log('Greetings: ', data);
})

dis.dispatching('greet', 'Edward')
