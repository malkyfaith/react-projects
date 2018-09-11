'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var IndecisionApp = function (_React$Component) {
    _inherits(IndecisionApp, _React$Component);

    function IndecisionApp(props) {
        _classCallCheck(this, IndecisionApp);

        var _this = _possibleConstructorReturn(this, (IndecisionApp.__proto__ || Object.getPrototypeOf(IndecisionApp)).call(this, props));

        console.log('Inside IndecisionApp:', _this.props);
        _this.title = 'Indecision Application';
        _this.subtitle = 'Put your life in the hands of computer.';
        _this.state = {
            options: ['One', 'Second']
        };
        _this.clearAllOptions = _this.clearAllOptions.bind(_this);
        _this.whatToDo = _this.whatToDo.bind(_this);
        _this.addOption = _this.addOption.bind(_this);
        return _this;
    }

    _createClass(IndecisionApp, [{
        key: 'clearAllOptions',
        value: function clearAllOptions() {
            this.setState(function () {
                return {
                    options: []
                };
            });
        }
    }, {
        key: 'whatToDo',
        value: function whatToDo() {
            var opt = Math.floor(Math.random() * this.state.options.length);
            var selectedOpt = this.state.options[opt];
            alert(selectedOpt);
        }
    }, {
        key: 'addOption',
        value: function addOption(newOption) {
            if (!newOption) {
                return "Enter a valid option.";
            } else if (this.state.options.indexOf(newOption) > -1) {
                return "This option already exists.";
            }

            this.setState(function (prevState) {
                return {
                    options: prevState.options.concat([newOption])
                };
            });
        }
    }, {
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                null,
                React.createElement(Header, { title: this.title, subtitle: this.subtitle }),
                React.createElement(Action, { hasOptions: this.state.options.length > 0, whatToDo: this.whatToDo }),
                React.createElement(Options, { options: this.state.options, clearAllOptions: this.clearAllOptions }),
                React.createElement(AddOption, { addOption: this.addOption })
            );
        }
    }]);

    return IndecisionApp;
}(React.Component);

var Header = function (_React$Component2) {
    _inherits(Header, _React$Component2);

    function Header() {
        _classCallCheck(this, Header);

        return _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).apply(this, arguments));
    }

    _createClass(Header, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                null,
                React.createElement(
                    'h1',
                    null,
                    this.props.title
                ),
                React.createElement(
                    'h3',
                    null,
                    this.props.subtitle
                )
            );
        }
    }]);

    return Header;
}(React.Component);

var Action = function (_React$Component3) {
    _inherits(Action, _React$Component3);

    function Action(props) {
        _classCallCheck(this, Action);

        var _this3 = _possibleConstructorReturn(this, (Action.__proto__ || Object.getPrototypeOf(Action)).call(this, props));

        console.log('Inside Action:', _this3.props);
        return _this3;
    }

    _createClass(Action, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                null,
                React.createElement(
                    'button',
                    { disabled: !this.props.hasOptions, onClick: this.props.whatToDo },
                    'What should I do?'
                )
            );
        }
    }]);

    return Action;
}(React.Component);

var Options = function (_React$Component4) {
    _inherits(Options, _React$Component4);

    function Options(props) {
        _classCallCheck(this, Options);

        var _this4 = _possibleConstructorReturn(this, (Options.__proto__ || Object.getPrototypeOf(Options)).call(this, props));

        console.log('Inside Options:', _this4.props);
        return _this4;
    }

    _createClass(Options, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                null,
                React.createElement(
                    'button',
                    { onClick: this.props.clearAllOptions },
                    'Clear all'
                ),
                React.createElement(
                    'ul',
                    null,
                    this.props.options.map(function (o) {
                        return React.createElement(Option, { option: o });
                    })
                )
            );
        }
    }]);

    return Options;
}(React.Component);

var Option = function (_React$Component5) {
    _inherits(Option, _React$Component5);

    function Option() {
        _classCallCheck(this, Option);

        return _possibleConstructorReturn(this, (Option.__proto__ || Object.getPrototypeOf(Option)).apply(this, arguments));
    }

    _createClass(Option, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                'li',
                null,
                this.props.option
            );
        }
    }]);

    return Option;
}(React.Component);

var AddOption = function (_React$Component6) {
    _inherits(AddOption, _React$Component6);

    function AddOption(props) {
        _classCallCheck(this, AddOption);

        var _this6 = _possibleConstructorReturn(this, (AddOption.__proto__ || Object.getPrototypeOf(AddOption)).call(this, props));

        _this6.onFormSubmit = _this6.onFormSubmit.bind(_this6);
        // console.log('Inside AddOption:', this.props);
        _this6.state = {
            error: undefined
        };
        return _this6;
    }

    _createClass(AddOption, [{
        key: 'onFormSubmit',
        value: function onFormSubmit(e) {
            e.preventDefault();
            var val = e.target.elements.option.value.trim();
            e.target.elements.option.value = '';

            var error = this.props.addOption(val);
            //console.log(error);

            this.setState(function () {
                return {
                    error: error
                };
            });
        }
    }, {
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                null,
                this.state.error && React.createElement(
                    'p',
                    null,
                    this.state.error
                ),
                React.createElement(
                    'form',
                    { onSubmit: this.onFormSubmit },
                    React.createElement('input', { type: 'text', name: 'option' }),
                    React.createElement(
                        'button',
                        null,
                        'Add option'
                    )
                )
            );
        }
    }]);

    return AddOption;
}(React.Component);

var jsx = React.createElement(
    'div',
    null,
    React.createElement(IndecisionApp, null)
);

ReactDOM.render(jsx, document.getElementById('app'));
