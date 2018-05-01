var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var rn = function rn(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}; // inclusive by +1

var Root = function (_React$Component) {
  _inherits(Root, _React$Component);

  function Root() {
    _classCallCheck(this, Root);

    return _possibleConstructorReturn(this, (Root.__proto__ || Object.getPrototypeOf(Root)).apply(this, arguments));
  }

  _createClass(Root, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        { className: "container" },
        Array(6).fill().map(function (x, i) {
          return React.createElement(Cube, { to: i * 50, key: i });
        })
      );
    }
  }]);

  return Root;
}(React.Component);

var Cube = function (_React$Component2) {
  _inherits(Cube, _React$Component2);

  function Cube(props) {
    _classCallCheck(this, Cube);

    var _this2 = _possibleConstructorReturn(this, (Cube.__proto__ || Object.getPrototypeOf(Cube)).call(this, props));

    _this2.state = { a: [-30, 30, 0, 0, 0, -500], to: props.to };
    return _this2;
  }

  _createClass(Cube, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this3 = this;

      var d = 180;
      setTimeout(function () {
        setInterval(function () {
          var hw = window.innerWidth / 2,
              hh = window.innerHeight / 2;
          _this3.setState({ a: [rn(-d, d), rn(-d, d), rn(-d, d), rn(-hw, hw), rn(-hh, hh), rn(-3000, -500)] });
        }, 1000);
      }, this.state.to);
    }
  }, {
    key: "render",
    value: function render() {
      var a = this.state.a,
          cubeStyle = { transform: "translate3d(" + a[3] + "px, " + a[4] + "px, " + a[5] + "px) rotateX(" + a[0] + "deg) rotateY(" + a[1] + "deg) rotateZ(" + a[2] + "deg)" };
      return React.createElement(
        "div",
        { className: "cube", style: cubeStyle },
        Array(6).fill().map(function () {
          return React.createElement("figure", null);
        })
      );
    }
  }]);

  return Cube;
}(React.Component);

ReactDOM.render(React.createElement(Root, null), document.getElementById('root'));