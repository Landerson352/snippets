#createjs

## Add createjs to a webpack build

First install packages:

`npm i --save-dev createjs-combined imports-loader exports-loader`

Then add to webpack loaders:

```
{
	test: /node_modules\/createjs-combined\/.*\.js$/,
	loader: 'imports?this=>window!exports?window.createjs'
},
```