fn(...args);
var  timer = setInterval(() => fn(...args),t);
let cancelFn = () => clearInterval(timer);
return cancelFn