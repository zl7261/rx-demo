import Rx from 'rxjs-compat'


var source = Rx.Observable.interval(1000).take(6);
var example = source.takeLast(2);

example.subscribe({
  next: (value) => { console.log(value); },
  error: (err) => { console.log('Error: ' + err); },
  complete: () => { console.log('complete'); }
});