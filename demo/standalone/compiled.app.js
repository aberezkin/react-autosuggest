/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports) {

	'use strict';

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Autosuggest = AutosuggestContainer.default;

	var languages = [{
	  name: 'C',
	  year: 1972
	}, {
	  name: 'C#',
	  year: 2000
	}, {
	  name: 'C++',
	  year: 1983
	}, {
	  name: 'Clojure',
	  year: 2007
	}, {
	  name: 'Elm',
	  year: 2012
	}, {
	  name: 'Go',
	  year: 2009
	}, {
	  name: 'Haskell',
	  year: 1990
	}, {
	  name: 'Java',
	  year: 1995
	}, {
	  name: 'Javascript',
	  year: 1995
	}, {
	  name: 'Perl',
	  year: 1987
	}, {
	  name: 'PHP',
	  year: 1995
	}, {
	  name: 'Python',
	  year: 1991
	}, {
	  name: 'Ruby',
	  year: 1995
	}, {
	  name: 'Scala',
	  year: 2003
	}];

	// https://developer.mozilla.org/en/docs/Web/JavaScript/Guide/Regular_Expressions#Using_Special_Characters
	function escapeRegexCharacters(str) {
	  return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
	}

	function getMatchingLanguages(value) {
	  var escapedValue = escapeRegexCharacters(value.trim());
	  var regex = new RegExp('^' + escapedValue, 'i');

	  return languages.filter(function (language) {
	    return regex.test(language.name);
	  });
	}

	var app = null;

	function getSuggestionValue(suggestion) {
	  return suggestion.name;
	}

	function renderSuggestion(suggestion) {
	  return React.createElement(
	    'span',
	    null,
	    suggestion.name
	  );
	}

	function onChange(event, _ref) {
	  var newValue = _ref.newValue;
	  var method = _ref.method;

	  if (method === 'type') {
	    app.setState({
	      value: newValue,
	      suggestions: getMatchingLanguages(newValue)
	    });
	  } else {
	    app.setState({
	      value: newValue
	    });
	  }
	}

	function onSuggestionSelected(event, _ref2) {
	  var suggestionValue = _ref2.suggestionValue;

	  app.setState({
	    suggestions: getMatchingLanguages(suggestionValue)
	  });
	}

	var App = (function (_React$Component) {
	  _inherits(App, _React$Component);

	  function App() {
	    _classCallCheck(this, App);

	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(App).call(this));

	    app = _this;

	    _this.state = {
	      value: '',
	      suggestions: getMatchingLanguages('')
	    };
	    return _this;
	  }

	  _createClass(App, [{
	    key: 'render',
	    value: function render() {
	      var _state = this.state;
	      var value = _state.value;
	      var suggestions = _state.suggestions;

	      var inputProps = {
	        placeholder: 'Type a programming language',
	        value: value,
	        onChange: onChange
	      };

	      return React.createElement(Autosuggest, { suggestions: suggestions,
	        getSuggestionValue: getSuggestionValue,
	        renderSuggestion: renderSuggestion,
	        inputProps: inputProps,
	        onSuggestionSelected: onSuggestionSelected });
	    }
	  }]);

	  return App;
	})(React.Component);

	ReactDOM.render(React.createElement(App, null), document.getElementById('app'));

/***/ }
/******/ ]);