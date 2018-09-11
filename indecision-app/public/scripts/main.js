'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PDF_URL = 'https://s3-ap-southeast-2.amazonaws.com/lendi-platform/users/9141d3d2-2733-4379-8ce7-63d05399aa8c/credit_report.pdfhttps://mozilla.github.io/pdf.js/web/compressed.tracemonkey-pldi-09.pdf';

var PDF = function (_React$Component) {
  _inherits(PDF, _React$Component);

  function PDF(props) {
    _classCallCheck(this, PDF);

    var _this = _possibleConstructorReturn(this, (PDF.__proto__ || Object.getPrototypeOf(PDF)).call(this, props));

    _this.state = {
      pdf: null,
      scale: 1.2
    };
    return _this;
  }

  _createClass(PDF, [{
    key: 'getChildContext',
    value: function getChildContext() {
      return {
        pdf: this.state.pdf,
        scale: this.state.scale
      };
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      PDFJS.getDocument(this.props.src).then(function (pdf) {
        console.log(pdf);
        _this2.setState({ pdf: pdf });
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        { className: 'pdf-context' },
        this.props.children
      );
    }
  }]);

  return PDF;
}(React.Component);

PDF.propTypes = {
  src: React.PropTypes.string.isRequired
};

PDF.childContextTypes = {
  pdf: React.PropTypes.object,
  scale: React.PropTypes.number
};

var Page = function (_React$Component2) {
  _inherits(Page, _React$Component2);

  function Page(props) {
    _classCallCheck(this, Page);

    var _this3 = _possibleConstructorReturn(this, (Page.__proto__ || Object.getPrototypeOf(Page)).call(this, props));

    _this3.state = {
      status: 'N/A',
      page: null,
      width: 0,
      height: 0
    };
    return _this3;
  }

  _createClass(Page, [{
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps, nextState, nextContext) {
      return this.context.pdf != nextContext.pdf || this.state.status !== nextState.status;
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(nextProps, nextState, nextContext) {
      this._update(nextContext.pdf);
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      this._update(this.context.pdf);
    }
  }, {
    key: '_update',
    value: function _update(pdf) {
      if (pdf) {
        this._loadPage(pdf);
      } else {
        this.setState({ status: 'loading' });
      }
    }
  }, {
    key: '_loadPage',
    value: function _loadPage(pdf) {
      if (this.state.status === 'rendering' || this.state.page != null) return;
      pdf.getPage(this.props.index).then(this._renderPage.bind(this));
      this.setState({ status: 'rendering' });
    }
  }, {
    key: '_renderPage',
    value: function _renderPage(page) {
      console.log(page);
      var scale = this.context.scale;

      var viewport = page.getViewport(scale);
      var width = viewport.width,
          height = viewport.height;

      var canvas = this.refs.canvas;
      var context = canvas.getContext('2d');
      console.log(viewport.height, viewport.width);
      canvas.width = width;
      canvas.height = height;

      page.render({
        canvasContext: context,
        viewport: viewport
      });

      this.setState({ status: 'rendered', page: page, width: width, height: height });
    }
  }, {
    key: 'render',
    value: function render() {
      var _state = this.state,
          width = _state.width,
          height = _state.height,
          status = _state.status;

      return React.createElement(
        'div',
        { className: 'pdf-page ' + status, style: { width: width, height: height } },
        React.createElement('canvas', { ref: 'canvas' })
      );
    }
  }]);

  return Page;
}(React.Component);

Page.propTypes = {
  index: React.PropTypes.number.isRequired
};
Page.contextTypes = PDF.childContextTypes;

var Viewer = function (_React$Component3) {
  _inherits(Viewer, _React$Component3);

  function Viewer() {
    _classCallCheck(this, Viewer);

    return _possibleConstructorReturn(this, (Viewer.__proto__ || Object.getPrototypeOf(Viewer)).apply(this, arguments));
  }

  _createClass(Viewer, [{
    key: 'render',
    value: function render() {
      var pdf = this.context.pdf;

      var numPages = pdf ? pdf.pdfInfo.numPages : 0;
      var fingerprint = pdf ? pdf.pdfInfo.fingerprint : 'none';
      var pages = Array.apply(null, { length: numPages }).map(function (v, i) {
        return React.createElement(Page, { index: i + 1, key: fingerprint + '-' + i });
      });

      return React.createElement(
        'div',
        { className: 'pdf-viewer' },
        pages
      );
    }
  }]);

  return Viewer;
}(React.Component);

Viewer.contextTypes = PDF.childContextTypes;

React.render(React.createElement(
  PDF,
  { src: PDF_URL },
  React.createElement(Viewer, null)
), document.getElementById('app'));
