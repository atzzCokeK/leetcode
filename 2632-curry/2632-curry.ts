function curry(fn) {
  return function curried(...args) {
    console.log("fn",fn.length)
    console.log(this)
    if (args.length >= fn.length) {
      return fn.apply(null, args);
    } else {
      return function(...moreArgs) {
        return curried.apply(null, args.concat(moreArgs));
      }
    }
  }
}
