import * as Rx from 'rxjs'

var source = Rx.timer(1000, 1000);

// 取得 subscription
var subscription = source.subscribe({
  next: function(value) {
    console.log(value)
  },
  complete: function() {
    console.log('complete!');
  },
  error: function(error) {
    console.log('Throw Error: ' + error)
  }
});

setTimeout(() => {
  subscription.unsubscribe() // 停止訂閱(退訂)， RxJS 4.x 以前的版本用 dispose()
}, 5000);