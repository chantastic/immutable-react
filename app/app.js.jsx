var React     = require('react');
var component = require('omniscient');

var NameInput,
    Welcome;

var NameInput = component(function (props) {
  var handleChange = function (e) {
    props.cursor.update('name', function (name) {
      return e.currentTarget.value;
    });
  };

  return React.DOM.input({
    value: props.cursor.get('name'),
    onChange: handleChange
  });
});

var App = component(function (props) {
  var getGuest = props.cursor.get('guest');
  var getName  = getGuest.get('name') ? getGuest.get('name') : '';
  var getTime  = props.cursor.get('time');

  var { div, h3, p } = React.DOM;

  return (
    div({},
      h3({}, 'Enter your name'),
      p({},
        NameInput(getGuest),
        ' ' + getName
      ),
      'current time: ' + getTime
    )
  );
});

module.exports = App;
