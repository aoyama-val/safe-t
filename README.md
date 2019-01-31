# safe-t

```
var a = {
  b: {
    c: 'hoge',
  }
};

var x = t(() => a.b.c)
console.log(x); // hoge

var x = t(() => a.b.d)
console.log(x); // undefined

var x = t(() => a.b.d, 'default')
console.log(x); // default
```
