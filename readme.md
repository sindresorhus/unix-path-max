# unix-path-max [![Build Status](https://travis-ci.org/sindresorhus/unix-path-max.svg?branch=master)](https://travis-ci.org/sindresorhus/unix-path-max)

> Get the [maximum permitted length](http://serverfault.com/questions/641347/check-if-a-path-exceeds-maximum-for-unix-domain-socket) of a path of a Unix domain socket

*Doesn't work on Windows.*


## Install

```
$ npm install --save unix-path-max
```


## Usage

```js
var unixPathMax = require('unix-path-max');

unixPathMax(function (err, maxLength) {
	console.log(maxLength);
	//=> 104
});

console.log(unixPathMax.sync());
//=> 104
```


## CLI

```
$ npm install --global unix-path-max
```

```
$ unix-path-max
104
```


## License

MIT © [Sindre Sorhus](http://sindresorhus.com)
