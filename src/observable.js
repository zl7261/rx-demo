import Rx from 'rxjs'

class Producer {
  constructor() {
    this.listeners = [];
  }
  addListener(listener) {
    if(typeof listener === 'function') {
      this.listeners.push(listener)
    } else {
      throw new Error('listener 必須是 function')
    }
  }
  removeListener(listener) {
    this.listeners.splice(this.listeners.indexOf(listener), 1)
  }
  notify(message) {
    this.listeners.forEach(listener => {
      listener(message);
    })
  }
}
var egghead = new Producer();
// egghead 同時具有 註冊監聽者及移除監聽者 兩種方法

var source = Rx
  .fromEventPattern(
    egghead.addListener.bind(egghead),
    egghead.removeListener.bind(egghead)
  )
  .subscribe(console.log)

source.subscribe({

  next: function(value) {
    console.log(value)
  },
  complete: function() {
    console.log('complete!');
  },
  error: function(error) {
    console.log(error)
  }
})

egghead.notify('Hello! Can you hear me?')