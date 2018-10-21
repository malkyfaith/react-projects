'use strict';

var _redux = require('redux');

var store = (0, _redux.createStore)(function () {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { count: 0 };

    return state;
});

console.log(store.getState());

store.subscribe(function (s) {
    console.log(s);
});
