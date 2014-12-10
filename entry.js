var React     = require('react');
var immstruct = require('immstruct');
var App       = require('./app/app.js.jsx');

var structure = immstruct({
  guest: { name: '' },
  time:  Date.now()
});

var render = function () {
  React.render(App(structure.cursor()), document.body);
}

setInterval(function () {
  structure.cursor().update('time', function () {
    return Date.now();
  });
}, 1000);

render();
structure.on('swap', render);
