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
            options: props.options
        };
        _this.clearAllOptions = _this.clearAllOptions.bind(_this);
        _this.clearOption = _this.clearOption.bind(_this);
        _this.whatToDo = _this.whatToDo.bind(_this);
        _this.addOption = _this.addOption.bind(_this);
        return _this;
    }

    _createClass(IndecisionApp, [{
        key: 'clearAllOptions',
        value: function clearAllOptions() {
            this.setState(function () {
                return { options: [] };
            });
        }
    }, {
        key: 'clearOption',
        value: function clearOption(option) {
            console.log(option);

            this.setState(function (prevState) {
                return {
                    options: prevState.options.filter(function (o) {
                        return o !== option;
                    })
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
                React.createElement(Header, {
                    title: this.title,
                    subtitle: this.subtitle }),
                React.createElement(Action, {
                    hasOptions: this.state.options.length > 0,
                    whatToDo: this.whatToDo }),
                React.createElement(Options, {
                    options: this.state.options,
                    clearAllOptions: this.clearAllOptions,
                    clearOption: this.clearOption }),
                React.createElement(AddOption, {
                    addOption: this.addOption })
            );
        }
    }]);

    return IndecisionApp;
}(React.Component);

IndecisionApp.defaultProps = {
    options: ['Option one', 'Option two']
};

var Header = function Header(props) {
    return React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            props.title
        ),
        React.createElement(
            'h3',
            null,
            props.subtitle
        )
    );
};

var Action = function Action(props) {
    return React.createElement(
        'div',
        null,
        React.createElement(
            'button',
            { disabled: !props.hasOptions, onClick: props.whatToDo },
            'What should I do?'
        )
    );
};

var Options = function Options(props) {
    return React.createElement(
        'div',
        null,
        React.createElement(
            'button',
            { onClick: props.clearAllOptions },
            'Remove all'
        ),
        React.createElement('br', null),
        props.options.map(function (o) {
            return React.createElement(Option, {
                option: o,
                clearOption: props.clearOption
            });
        })
    );
};

var Option = function Option(props) {
    return React.createElement(
        'div',
        null,
        props.option,
        React.createElement(
            'button',
            { onClick: function onClick(e) {
                    props.clearOption(props.option);
                } },
            'Remove'
        )
    );
};

var AddOption = function (_React$Component2) {
    _inherits(AddOption, _React$Component2);

    function AddOption(props) {
        _classCallCheck(this, AddOption);

        var _this2 = _possibleConstructorReturn(this, (AddOption.__proto__ || Object.getPrototypeOf(AddOption)).call(this, props));

        _this2.onFormSubmit = _this2.onFormSubmit.bind(_this2);
        // console.log('Inside AddOption:', this.props);
        _this2.state = {
            error: undefined
        };
        return _this2;
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
    React.createElement(IndecisionApp, { options: ['One', 'Two'] })
);

ReactDOM.render(jsx, document.getElementById('app'));
