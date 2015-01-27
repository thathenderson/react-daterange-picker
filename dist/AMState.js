"use strict";
var _interopRequire = function (obj) {
  return obj && (obj["default"] || obj);
};

var React = _interopRequire(require("react/addons"));

var utils = _interopRequire(require("./utils"));

var PureRenderMixin = require("react").addons.PureRenderMixin;
var cx = React.addons.classSet;


var AMState = React.createClass({
  displayName: "AMState",
  mixins: [PureRenderMixin],

  render: function render() {
    var i;
    var classes = {
      reactDaterangePicker__halfDay: true,
      "reactDaterangePicker__halfDay--am": true
    };
    if (this.props.availabilityAction) {
      classes["reactDaterangePicker__halfDay--is-" + this.props.availabilityAction] = true;
    }
    if (this.props.displayStates) {
      for (i = 0; i < this.props.displayStates.length; i++) {
        classes["reactDaterangePicker__halfDay--is-" + this.props.displayStates[i]] = true;
      }
    }

    return React.createElement("div", { className: cx(classes) });
  }
});

module.exports = AMState;