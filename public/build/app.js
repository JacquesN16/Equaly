(self["webpackChunk"] = self["webpackChunk"] || []).push([["app"],{

/***/ "./assets/app.js":
/*!***********************!*\
  !*** ./assets/app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_app_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/app.css */ "./assets/styles/app.css");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var _components_SearchBar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/SearchBar */ "./assets/components/SearchBar.jsx");
/* harmony import */ var _components_Blog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/Blog */ "./assets/components/Blog.jsx");
/* harmony import */ var typed_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! typed.js */ "./node_modules/typed.js/lib/typed.js");
/* harmony import */ var typed_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(typed_js__WEBPACK_IMPORTED_MODULE_5__);
/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */
// any CSS you import will output into a single css file (app.css in this case)





var searchBar = document.getElementById('search-bar');
var blogSelector = document.getElementById('blog-pricipal'); // Can also be included with a regular script tag



if (searchBar) {
  react_dom__WEBPACK_IMPORTED_MODULE_2__.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_components_SearchBar__WEBPACK_IMPORTED_MODULE_3__.default, null), searchBar);
}

if (blogSelector) {
  react_dom__WEBPACK_IMPORTED_MODULE_2__.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_components_Blog__WEBPACK_IMPORTED_MODULE_4__.default, null), blogSelector);
} // function appear(){
//         let logos  = document.querySelectorAll('.startup_logo img');
//         for(i=0; i<logos.length; i++){
//             let logo = logos[i];
//             logo.classList.toggle('hide'); 
//         }
//     }
//     window.onload = appear();
//     setInterval(logo, 1000)
// function appear(){
//         let logos  = document.querySelector('.startup_logo');
//         logos.classList.toggle('red');
//         console.log(logos)
// }
// window.onload = appear();
// setInterval(appear, 2000);


window.addEventListener('scroll', reveal);

function reveal() {
  var element = document.querySelector('.startup_logo');
  var position = element.getBoundingClientRect();

  if (position.top >= 0 && position.bottom <= window.innerHeight) {
    element.classList.add('logo_animation');
  }
}

window.addEventListener('scroll', active);

function active() {
  var h1 = document.querySelector('.force');
  var pos = h1.getBoundingClientRect();

  if (pos.top >= 0 && pos.bottom <= window.innerHeight) {
    h1.classList.add('activee');
  }
}

window.addEventListener('scroll', appearConcept);

function appearConcept() {
  var concept = document.querySelector('.articles');
  var p = concept.getBoundingClientRect();

  if (p.top >= 0 && p.bottom <= window.innerHeight) {
    concept.classList.add('activeConcept');
  }
}

var typed = new (typed_js__WEBPACK_IMPORTED_MODULE_5___default())('#typed', {
  strings: ['UX Design', 'UI Design', 'Developpeur', 'Web', 'Dev', 'Front', 'Data'],
  typeSpeed: 0,
  backSpeed: 0,
  smartBackspace: true,
  // c'est par defaut
  loop: true
}); // Fonction qui va gérer la vidéo

function pauseVideo() {
  var video = document.getElementById('video');
  var bouton = document.getElementById('btn');

  if (video.paused) {
    bouton.textContent = 'Pause';
    video.play();
  } else {
    video.pause();
    bouton.textContent = 'Play';
  }
}

bouton.addEventListener('click', pauseVideo);

/***/ }),

/***/ "./assets/components/Blog.jsx":
/*!************************************!*\
  !*** ./assets/components/Blog.jsx ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_string_search_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.string.search.js */ "./node_modules/core-js/modules/es.string.search.js");
/* harmony import */ var core_js_modules_es_string_search_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_search_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.promise.js */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.filter.js */ "./node_modules/core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.array.includes.js */ "./node_modules/core-js/modules/es.array.includes.js");
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.string.includes.js */ "./node_modules/core-js/modules/es.string.includes.js");
/* harmony import */ var core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of.js */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.reflect.construct.js */ "./node_modules/core-js/modules/es.reflect.construct.js");
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.object.create.js */ "./node_modules/core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }





















function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


var url = "https://jsonplaceholder.typicode.com/posts";

var Blog = /*#__PURE__*/function (_React$Component) {
  _inherits(Blog, _React$Component);

  var _super = _createSuper(Blog);

  function Blog() {
    var _this;

    _classCallCheck(this, Blog);

    _this = _super.call(this);

    _defineProperty(_assertThisInitialized(_this), "updateSearch", function (e) {
      var keyWord = e.target.value;

      _this.setState({
        search: keyWord
      });
    });

    var info;
    _this.state = {
      events: [],
      search: ''
    };
    return _this;
  }

  _createClass(Blog, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      if (prevState.search !== this.state.search) {}
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      fetch(url).then(function (response) {
        return response.json();
      }).then(function (response) {
        _this2.setState({
          events: response
        });
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var searchItem = this.state.events.filter(function (data) {
        if (_this3.state.search == null) return data;else if (data.title.toLowerCase().includes(_this3.state.search.toLowerCase())) {
          return data;
        }
      }).map(function (event) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_19__.createElement("div", {
          className: "blog_article"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_19__.createElement("img", {
          src: "https://image.freepik.com/vecteurs-libre/journee-internationale-personnes-handicapees-au-design-plat_23-2148723226.jpg",
          alt: ""
        }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_19__.createElement("h4", null, event.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_19__.createElement("p", null, event.body, " "));
      });
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_19__.createElement(react__WEBPACK_IMPORTED_MODULE_19__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_19__.createElement("div", {
        "class": "blog_bar"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_19__.createElement("h1", null, "Tous nos articles"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_19__.createElement("input", {
        type: "text",
        onChange: this.updateSearch,
        value: this.state.search,
        placeholder: "Rechercher"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_19__.createElement("div", {
        className: "r"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_19__.createElement("section", {
        className: "display"
      }, searchItem)));
    }
  }]);

  return Blog;
}(react__WEBPACK_IMPORTED_MODULE_19__.Component);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Blog);

/***/ }),

/***/ "./assets/components/SearchBar.jsx":
/*!*****************************************!*\
  !*** ./assets/components/SearchBar.jsx ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.promise.js */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_string_search_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.string.search.js */ "./node_modules/core-js/modules/es.string.search.js");
/* harmony import */ var core_js_modules_es_string_search_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_search_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.is-array.js */ "./node_modules/core-js/modules/es.array.is-array.js");
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_object_entries_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.object.entries.js */ "./node_modules/core-js/modules/es.object.entries.js");
/* harmony import */ var core_js_modules_es_object_entries_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_entries_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of.js */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.reflect.construct.js */ "./node_modules/core-js/modules/es.reflect.construct.js");
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.object.create.js */ "./node_modules/core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }





















function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



var Search = /*#__PURE__*/function (_React$Component) {
  _inherits(Search, _React$Component);

  var _super = _createSuper(Search);

  function Search() {
    var _this;

    _classCallCheck(this, Search);

    _this = _super.call(this);

    _defineProperty(_assertThisInitialized(_this), "updateSearch", function (event) {
      _this.setState({
        search: event.target.value
      });
    });

    _defineProperty(_assertThisInitialized(_this), "fetchJobs", function () {
      // url à modifier
      fetch('http://localhost:8000/api/job', {
        headers: {
          // Garder toujours les mêmes headers
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        method: "POST",
        // POST, PUT, ou DELETE en fonction des besoins
        body: JSON.stringify({
          // variable qui va etre envoyé au back ('search')
          search: _this.state.search
        })
      }).then(function (response) {
        return response.json();
      }).then(function (response) {
        //take back data as an object
        var updatedJobsList = response.data; //take back data as an array contains arrays inside [[],[],[]] with object.entries

        if (!Array.isArray(response.data)) {
          updatedJobsList = Object.entries(response.data).map(function (jobInResult) {
            // On récupère la valeur de mielInResults
            return jobInResult[1];
          });
        }

        _this.setState({
          jobs: updatedJobsList
        });
      });
    });

    _this.state = {
      jobs: [],
      search: ''
    };
    return _this;
  }

  _createClass(Search, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      if (prevState.search !== this.state.search) {
        this.fetchJobs();
      }
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_19__.createElement("div", {
        className: "container_search_bar"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_19__.createElement("label", {
        htmlFor: ""
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_19__.createElement("input", {
        type: "text",
        onChange: this.updateSearch,
        placeholder: "Recherchez...",
        value: this.state.search
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_19__.createElement("div", {
        className: "jobs"
      }, this.state.jobs.map(function (job) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_19__.createElement("div", {
          className: "card"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_19__.createElement("div", {
          className: "card-body"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_19__.createElement("h5", {
          className: "card-title"
        }, job.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_19__.createElement("p", {
          className: "card-text"
        }, job.description), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_19__.createElement("a", {
          href: '/showJob/' + job.id
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_19__.createElement("img", {
          src: "https://img.icons8.com/android/24/000000/long-arrow-right.png"
        }))));
      })));
    }
    /**
     * Cette fonction met à jour le state search avec la valeur reçue en paramètres
     * @param event
     */

  }]);

  return Search;
}(react__WEBPACK_IMPORTED_MODULE_19__.Component);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Search);

/***/ }),

/***/ "./assets/styles/app.css":
/*!*******************************!*\
  !*** ./assets/styles/app.css ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_core-js_modules_es_array_filter_js-node_modules_core-js_modules_es_array-b2fa54"], () => (__webpack_exec__("./assets/app.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL0Jsb2cuanN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL1NlYXJjaEJhci5qc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3N0eWxlcy9hcHAuY3NzPzNmYmEiXSwibmFtZXMiOlsic2VhcmNoQmFyIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImJsb2dTZWxlY3RvciIsIlJlYWN0RE9NIiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsInJldmVhbCIsImVsZW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwicG9zaXRpb24iLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJ0b3AiLCJib3R0b20iLCJpbm5lckhlaWdodCIsImNsYXNzTGlzdCIsImFkZCIsImFjdGl2ZSIsImgxIiwicG9zIiwiYXBwZWFyQ29uY2VwdCIsImNvbmNlcHQiLCJwIiwidHlwZWQiLCJUeXBlZCIsInN0cmluZ3MiLCJ0eXBlU3BlZWQiLCJiYWNrU3BlZWQiLCJzbWFydEJhY2tzcGFjZSIsImxvb3AiLCJwYXVzZVZpZGVvIiwidmlkZW8iLCJib3V0b24iLCJwYXVzZWQiLCJ0ZXh0Q29udGVudCIsInBsYXkiLCJwYXVzZSIsInVybCIsIkJsb2ciLCJlIiwia2V5V29yZCIsInRhcmdldCIsInZhbHVlIiwic2V0U3RhdGUiLCJzZWFyY2giLCJpbmZvIiwic3RhdGUiLCJldmVudHMiLCJwcmV2UHJvcHMiLCJwcmV2U3RhdGUiLCJmZXRjaCIsInRoZW4iLCJyZXNwb25zZSIsImpzb24iLCJzZWFyY2hJdGVtIiwiZmlsdGVyIiwiZGF0YSIsInRpdGxlIiwidG9Mb3dlckNhc2UiLCJpbmNsdWRlcyIsIm1hcCIsImV2ZW50IiwiYm9keSIsInVwZGF0ZVNlYXJjaCIsIlJlYWN0IiwiU2VhcmNoIiwiaGVhZGVycyIsIm1ldGhvZCIsIkpTT04iLCJzdHJpbmdpZnkiLCJ1cGRhdGVkSm9ic0xpc3QiLCJBcnJheSIsImlzQXJyYXkiLCJPYmplY3QiLCJlbnRyaWVzIiwiam9iSW5SZXN1bHQiLCJqb2JzIiwiZmV0Y2hKb2JzIiwiam9iIiwibmFtZSIsImRlc2NyaXB0aW9uIiwiaWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBTUEsU0FBUyxHQUFHQyxRQUFRLENBQUNDLGNBQVQsQ0FBd0IsWUFBeEIsQ0FBbEI7QUFDQSxJQUFNQyxZQUFZLEdBQUdGLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixlQUF4QixDQUFyQixDLENBQ0E7O0FBQ0E7O0FBRUEsSUFBSUYsU0FBSixFQUFlO0FBQ1hJLCtDQUFBLGVBQ0ksaURBQUMsMERBQUQsT0FESixFQUNnQkosU0FEaEI7QUFHSDs7QUFHRCxJQUFJRyxZQUFKLEVBQWtCO0FBQ2RDLCtDQUFBLGVBQ0ksaURBQUMscURBQUQsT0FESixFQUVJRCxZQUZKO0FBR0gsQyxDQUlEO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUlBO0FBRUE7QUFDQTtBQUdBO0FBRUE7QUFFQTtBQUVBOzs7QUFFQUUsTUFBTSxDQUFDQyxnQkFBUCxDQUF3QixRQUF4QixFQUFrQ0MsTUFBbEM7O0FBRUEsU0FBU0EsTUFBVCxHQUFrQjtBQUNkLE1BQUlDLE9BQU8sR0FBR1AsUUFBUSxDQUFDUSxhQUFULENBQXVCLGVBQXZCLENBQWQ7QUFFQSxNQUFJQyxRQUFRLEdBQUdGLE9BQU8sQ0FBQ0cscUJBQVIsRUFBZjs7QUFFQSxNQUFJRCxRQUFRLENBQUNFLEdBQVQsSUFBZ0IsQ0FBaEIsSUFBcUJGLFFBQVEsQ0FBQ0csTUFBVCxJQUFtQlIsTUFBTSxDQUFDUyxXQUFuRCxFQUFnRTtBQUM1RE4sV0FBTyxDQUFDTyxTQUFSLENBQWtCQyxHQUFsQixDQUFzQixnQkFBdEI7QUFDSDtBQUNKOztBQUdEWCxNQUFNLENBQUNDLGdCQUFQLENBQXdCLFFBQXhCLEVBQWtDVyxNQUFsQzs7QUFFQSxTQUFTQSxNQUFULEdBQWtCO0FBQ2QsTUFBSUMsRUFBRSxHQUFHakIsUUFBUSxDQUFDUSxhQUFULENBQXVCLFFBQXZCLENBQVQ7QUFFQSxNQUFJVSxHQUFHLEdBQUdELEVBQUUsQ0FBQ1AscUJBQUgsRUFBVjs7QUFFQSxNQUFJUSxHQUFHLENBQUNQLEdBQUosSUFBVyxDQUFYLElBQWdCTyxHQUFHLENBQUNOLE1BQUosSUFBY1IsTUFBTSxDQUFDUyxXQUF6QyxFQUFzRDtBQUNsREksTUFBRSxDQUFDSCxTQUFILENBQWFDLEdBQWIsQ0FBaUIsU0FBakI7QUFDSDtBQUNKOztBQUdEWCxNQUFNLENBQUNDLGdCQUFQLENBQXdCLFFBQXhCLEVBQWtDYyxhQUFsQzs7QUFFQSxTQUFTQSxhQUFULEdBQXlCO0FBQ3JCLE1BQUlDLE9BQU8sR0FBR3BCLFFBQVEsQ0FBQ1EsYUFBVCxDQUF1QixXQUF2QixDQUFkO0FBRUEsTUFBSWEsQ0FBQyxHQUFHRCxPQUFPLENBQUNWLHFCQUFSLEVBQVI7O0FBRUEsTUFBSVcsQ0FBQyxDQUFDVixHQUFGLElBQVMsQ0FBVCxJQUFjVSxDQUFDLENBQUNULE1BQUYsSUFBWVIsTUFBTSxDQUFDUyxXQUFyQyxFQUFrRDtBQUM5Q08sV0FBTyxDQUFDTixTQUFSLENBQWtCQyxHQUFsQixDQUFzQixlQUF0QjtBQUNIO0FBQ0o7O0FBSUQsSUFBSU8sS0FBSyxHQUFHLElBQUlDLGlEQUFKLENBQVUsUUFBVixFQUFvQjtBQUM1QkMsU0FBTyxFQUFFLENBQUMsV0FBRCxFQUFjLFdBQWQsRUFBMkIsYUFBM0IsRUFBMEMsS0FBMUMsRUFBaUQsS0FBakQsRUFBd0QsT0FBeEQsRUFBaUUsTUFBakUsQ0FEbUI7QUFFNUJDLFdBQVMsRUFBRSxDQUZpQjtBQUc1QkMsV0FBUyxFQUFFLENBSGlCO0FBSTVCQyxnQkFBYyxFQUFFLElBSlk7QUFJTjtBQUN0QkMsTUFBSSxFQUFFO0FBTHNCLENBQXBCLENBQVosQyxDQVVBOztBQUVBLFNBQVNDLFVBQVQsR0FBc0I7QUFFbEIsTUFBSUMsS0FBSyxHQUFHOUIsUUFBUSxDQUFDQyxjQUFULENBQXdCLE9BQXhCLENBQVo7QUFDQSxNQUFJOEIsTUFBTSxHQUFHL0IsUUFBUSxDQUFDQyxjQUFULENBQXdCLEtBQXhCLENBQWI7O0FBRUEsTUFBSTZCLEtBQUssQ0FBQ0UsTUFBVixFQUFrQjtBQUNkRCxVQUFNLENBQUNFLFdBQVAsR0FBcUIsT0FBckI7QUFDQUgsU0FBSyxDQUFDSSxJQUFOO0FBQ0gsR0FIRCxNQUlLO0FBQ0RKLFNBQUssQ0FBQ0ssS0FBTjtBQUNBSixVQUFNLENBQUNFLFdBQVAsR0FBcUIsTUFBckI7QUFDSDtBQUNKOztBQUVERixNQUFNLENBQUMxQixnQkFBUCxDQUF3QixPQUF4QixFQUFpQ3dCLFVBQWpDLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaklBO0FBQ0EsSUFBTU8sR0FBRyxHQUFHLDRDQUFaOztJQUVNQyxJOzs7OztBQUNGLGtCQUFjO0FBQUE7O0FBQUE7O0FBQ1Y7O0FBRFUsbUVBNkRDLFVBQUNDLENBQUQsRUFBTztBQUNwQixVQUFNQyxPQUFPLEdBQUdELENBQUMsQ0FBQ0UsTUFBRixDQUFTQyxLQUF6Qjs7QUFDQSxZQUFLQyxRQUFMLENBQWM7QUFDWkMsY0FBTSxFQUFFSjtBQURJLE9BQWQ7QUFHRCxLQWxFYTs7QUFFVixRQUFJSyxJQUFKO0FBQ0EsVUFBS0MsS0FBTCxHQUFhO0FBQ1RDLFlBQU0sRUFBRSxFQURDO0FBRVRILFlBQU0sRUFBQztBQUZFLEtBQWI7QUFIVTtBQU9iOzs7O1dBRUQsNEJBQW1CSSxTQUFuQixFQUE4QkMsU0FBOUIsRUFBd0M7QUFDdEMsVUFBR0EsU0FBUyxDQUFDTCxNQUFWLEtBQXFCLEtBQUtFLEtBQUwsQ0FBV0YsTUFBbkMsRUFBMkMsQ0FFMUM7QUFFRjs7O1dBQ0QsNkJBQW9CO0FBQUE7O0FBRWhCTSxXQUFLLENBQUNiLEdBQUQsQ0FBTCxDQUNDYyxJQURELENBQ00sVUFBQUMsUUFBUTtBQUFBLGVBQUlBLFFBQVEsQ0FBQ0MsSUFBVCxFQUFKO0FBQUEsT0FEZCxFQUVDRixJQUZELENBRU0sVUFBQUMsUUFBUSxFQUFJO0FBQ2QsY0FBSSxDQUFDVCxRQUFMLENBQWM7QUFDVkksZ0JBQU0sRUFBRUs7QUFERSxTQUFkO0FBS0gsT0FSRDtBQVNIOzs7V0FFRCxrQkFBUztBQUFBOztBQUVMLFVBQUlFLFVBQVUsR0FBRyxLQUFLUixLQUFMLENBQVdDLE1BQVgsQ0FBa0JRLE1BQWxCLENBQXlCLFVBQUNDLElBQUQsRUFBUTtBQUM5QyxZQUFHLE1BQUksQ0FBQ1YsS0FBTCxDQUFXRixNQUFYLElBQXFCLElBQXhCLEVBQ0ksT0FBT1ksSUFBUCxDQURKLEtBRUssSUFBR0EsSUFBSSxDQUFDQyxLQUFMLENBQVdDLFdBQVgsR0FBeUJDLFFBQXpCLENBQWtDLE1BQUksQ0FBQ2IsS0FBTCxDQUFXRixNQUFYLENBQWtCYyxXQUFsQixFQUFsQyxDQUFILEVBQXNFO0FBQ3ZFLGlCQUFPRixJQUFQO0FBQ0M7QUFDUixPQU5nQixFQU1kSSxHQU5jLENBTVYsVUFBQUMsS0FBSztBQUFBLDRCQUVSO0FBQUssbUJBQVMsRUFBQztBQUFmLHdCQUNLO0FBQUssYUFBRyxFQUFDLHdIQUFUO0FBQWtJLGFBQUcsRUFBQztBQUF0SSxVQURMLGVBRUksOERBQUtBLEtBQUssQ0FBQ0osS0FBWCxDQUZKLGVBR0ksNkRBQUlJLEtBQUssQ0FBQ0MsSUFBVixNQUhKLENBRlE7QUFBQSxPQU5LLENBQWpCO0FBZ0JBLDBCQUNJLG1IQUNJO0FBQUssaUJBQU07QUFBWCxzQkFDQSxrRkFEQSxlQUVFO0FBQU8sWUFBSSxFQUFDLE1BQVo7QUFBa0IsZ0JBQVEsRUFBRSxLQUFLQyxZQUFqQztBQUErQyxhQUFLLEVBQUUsS0FBS2pCLEtBQUwsQ0FBV0YsTUFBakU7QUFBeUUsbUJBQVcsRUFBQztBQUFyRixRQUZGLENBREosZUFLSTtBQUFLLGlCQUFTLEVBQUM7QUFBZixzQkFDQTtBQUFTLGlCQUFTLEVBQUM7QUFBbkIsU0FDQ1UsVUFERCxDQURBLENBTEosQ0FESjtBQWFIOzs7O0VBNURjVSw2Qzs7QUF1RW5CLGlFQUFlMUIsSUFBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzFFQTs7SUFFTTJCLE07Ozs7O0FBQ0Ysb0JBQWM7QUFBQTs7QUFBQTs7QUFDVjs7QUFEVSxtRUErQ0ssVUFBQ0osS0FBRCxFQUFXO0FBQ3RCLFlBQUtsQixRQUFMLENBQWM7QUFDZEMsY0FBTSxFQUFFaUIsS0FBSyxDQUFDcEIsTUFBTixDQUFhQztBQURQLE9BQWQ7QUFHSCxLQW5EUzs7QUFBQSxnRUFxREUsWUFBTTtBQUNkO0FBQ0FRLFdBQUssQ0FBQywrQkFBRCxFQUNEO0FBQ0FnQixlQUFPLEVBQUU7QUFBRTtBQUNQLG9CQUFVLGtCQURMO0FBRUwsMEJBQWdCO0FBRlgsU0FEVDtBQUtBQyxjQUFNLEVBQUUsTUFMUjtBQUtnQjtBQUNoQkwsWUFBSSxFQUFFTSxJQUFJLENBQUNDLFNBQUwsQ0FBZTtBQUNqQjtBQUNBekIsZ0JBQU0sRUFBRSxNQUFLRSxLQUFMLENBQVdGO0FBRkYsU0FBZjtBQU5OLE9BREMsQ0FBTCxDQVdPTyxJQVhQLENBV1ksVUFBQUMsUUFBUTtBQUFBLGVBQUlBLFFBQVEsQ0FBQ0MsSUFBVCxFQUFKO0FBQUEsT0FYcEIsRUFXeUNGLElBWHpDLENBVzhDLFVBQUFDLFFBQVEsRUFBSTtBQUN0RDtBQUNBLFlBQUlrQixlQUFlLEdBQUdsQixRQUFRLENBQUNJLElBQS9CLENBRnNELENBSXREOztBQUNBLFlBQUksQ0FBQ2UsS0FBSyxDQUFDQyxPQUFOLENBQWNwQixRQUFRLENBQUNJLElBQXZCLENBQUwsRUFBbUM7QUFDL0JjLHlCQUFlLEdBQUdHLE1BQU0sQ0FBQ0MsT0FBUCxDQUFldEIsUUFBUSxDQUFDSSxJQUF4QixFQUE4QkksR0FBOUIsQ0FBa0MsVUFBQ2UsV0FBRCxFQUFpQjtBQUNyRTtBQUVBLG1CQUFPQSxXQUFXLENBQUMsQ0FBRCxDQUFsQjtBQUNDLFdBSmlCLENBQWxCO0FBS0g7O0FBQ0QsY0FBS2hDLFFBQUwsQ0FBYztBQUNWaUMsY0FBSSxFQUFFTjtBQURJLFNBQWQ7QUFHSCxPQTFCRDtBQTJCQyxLQWxGSzs7QUFFVixVQUFLeEIsS0FBTCxHQUFhO0FBQ1g4QixVQUFJLEVBQUUsRUFESztBQUVYaEMsWUFBTSxFQUFFO0FBRkcsS0FBYjtBQUZVO0FBTVg7Ozs7V0FFSCw0QkFBbUJJLFNBQW5CLEVBQThCQyxTQUE5QixFQUF5QztBQUNyQyxVQUFJQSxTQUFTLENBQUNMLE1BQVYsS0FBcUIsS0FBS0UsS0FBTCxDQUFXRixNQUFwQyxFQUE0QztBQUMxQyxhQUFLaUMsU0FBTDtBQUNEO0FBQ0Y7OztXQUVILGtCQUFTO0FBRUwsMEJBQ0k7QUFBSyxpQkFBUyxFQUFFO0FBQWhCLHNCQUNFO0FBQU8sZUFBTyxFQUFDO0FBQWYsc0JBQ0U7QUFBTyxZQUFJLEVBQUMsTUFBWjtBQUFtQixnQkFBUSxFQUFFLEtBQUtkLFlBQWxDO0FBQWdELG1CQUFXLEVBQUMsZUFBNUQ7QUFBNEUsYUFBSyxFQUFFLEtBQUtqQixLQUFMLENBQVdGO0FBQTlGLFFBREYsQ0FERixlQU1FO0FBQUssaUJBQVMsRUFBQztBQUFmLFNBQ0MsS0FBS0UsS0FBTCxDQUFXOEIsSUFBWCxDQUFnQmhCLEdBQWhCLENBQW9CLFVBQVNrQixHQUFULEVBQWM7QUFDakMsNEJBQ0U7QUFBSyxtQkFBUyxFQUFDO0FBQWYsd0JBQ0U7QUFBSyxtQkFBUyxFQUFDO0FBQWYsd0JBQ0U7QUFBSyxtQkFBUyxFQUFDO0FBQWYsV0FBNkJBLEdBQUcsQ0FBQ0MsSUFBakMsQ0FERixlQUVFO0FBQUcsbUJBQVMsRUFBQztBQUFiLFdBQTBCRCxHQUFHLENBQUNFLFdBQTlCLENBRkYsZUFHRTtBQUFHLGNBQUksRUFBRSxjQUFjRixHQUFHLENBQUNHO0FBQTNCLHdCQUNBO0FBQUssYUFBRyxFQUFDO0FBQVQsVUFEQSxDQUhGLENBREYsQ0FERjtBQVVELE9BWEEsQ0FERCxDQU5GLENBREo7QUF5QkM7QUFFRDtBQUNSO0FBQ0E7QUFDQTs7Ozs7RUEvQ3FCakIsNkM7O0FBMEZyQixpRUFBZUMsTUFBZixFOzs7Ozs7Ozs7Ozs7QUM1RkEiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLypcclxuICogV2VsY29tZSB0byB5b3VyIGFwcCdzIG1haW4gSmF2YVNjcmlwdCBmaWxlIVxyXG4gKlxyXG4gKiBXZSByZWNvbW1lbmQgaW5jbHVkaW5nIHRoZSBidWlsdCB2ZXJzaW9uIG9mIHRoaXMgSmF2YVNjcmlwdCBmaWxlXHJcbiAqIChhbmQgaXRzIENTUyBmaWxlKSBpbiB5b3VyIGJhc2UgbGF5b3V0IChiYXNlLmh0bWwudHdpZykuXHJcbiAqL1xyXG5cclxuLy8gYW55IENTUyB5b3UgaW1wb3J0IHdpbGwgb3V0cHV0IGludG8gYSBzaW5nbGUgY3NzIGZpbGUgKGFwcC5jc3MgaW4gdGhpcyBjYXNlKVxyXG5pbXBvcnQgJy4vc3R5bGVzL2FwcC5jc3MnO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcclxuaW1wb3J0IFNlYXJjaCBmcm9tICcuL2NvbXBvbmVudHMvU2VhcmNoQmFyJztcclxuaW1wb3J0IEJsb2cgZnJvbSAnLi9jb21wb25lbnRzL0Jsb2cnXHJcbmNvbnN0IHNlYXJjaEJhciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZWFyY2gtYmFyJyk7XHJcbmNvbnN0IGJsb2dTZWxlY3RvciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdibG9nLXByaWNpcGFsJyk7XHJcbi8vIENhbiBhbHNvIGJlIGluY2x1ZGVkIHdpdGggYSByZWd1bGFyIHNjcmlwdCB0YWdcclxuaW1wb3J0IFR5cGVkIGZyb20gJ3R5cGVkLmpzJztcclxuXHJcbmlmIChzZWFyY2hCYXIpIHtcclxuICAgIFJlYWN0RE9NLnJlbmRlcihcclxuICAgICAgICA8U2VhcmNoIC8+LCBzZWFyY2hCYXJcclxuICAgIClcclxufVxyXG5cclxuXHJcbmlmIChibG9nU2VsZWN0b3IpIHtcclxuICAgIFJlYWN0RE9NLnJlbmRlcihcclxuICAgICAgICA8QmxvZyAvPixcclxuICAgICAgICBibG9nU2VsZWN0b3IpXHJcbn1cclxuXHJcblxyXG5cclxuLy8gZnVuY3Rpb24gYXBwZWFyKCl7XHJcblxyXG4vLyAgICAgICAgIGxldCBsb2dvcyAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuc3RhcnR1cF9sb2dvIGltZycpO1xyXG4vLyAgICAgICAgIGZvcihpPTA7IGk8bG9nb3MubGVuZ3RoOyBpKyspe1xyXG4vLyAgICAgICAgICAgICBsZXQgbG9nbyA9IGxvZ29zW2ldO1xyXG4vLyAgICAgICAgICAgICBsb2dvLmNsYXNzTGlzdC50b2dnbGUoJ2hpZGUnKTsgXHJcbi8vICAgICAgICAgfVxyXG4vLyAgICAgfVxyXG5cclxuLy8gICAgIHdpbmRvdy5vbmxvYWQgPSBhcHBlYXIoKTtcclxuXHJcbi8vICAgICBzZXRJbnRlcnZhbChsb2dvLCAxMDAwKVxyXG5cclxuXHJcblxyXG4vLyBmdW5jdGlvbiBhcHBlYXIoKXtcclxuXHJcbi8vICAgICAgICAgbGV0IGxvZ29zICA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zdGFydHVwX2xvZ28nKTtcclxuLy8gICAgICAgICBsb2dvcy5jbGFzc0xpc3QudG9nZ2xlKCdyZWQnKTtcclxuXHJcblxyXG4vLyAgICAgICAgIGNvbnNvbGUubG9nKGxvZ29zKVxyXG5cclxuLy8gfVxyXG5cclxuLy8gd2luZG93Lm9ubG9hZCA9IGFwcGVhcigpO1xyXG5cclxuLy8gc2V0SW50ZXJ2YWwoYXBwZWFyLCAyMDAwKTtcclxuXHJcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCByZXZlYWwpO1xyXG5cclxuZnVuY3Rpb24gcmV2ZWFsKCkge1xyXG4gICAgbGV0IGVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3RhcnR1cF9sb2dvJyk7XHJcblxyXG4gICAgbGV0IHBvc2l0aW9uID0gZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuXHJcbiAgICBpZiAocG9zaXRpb24udG9wID49IDAgJiYgcG9zaXRpb24uYm90dG9tIDw9IHdpbmRvdy5pbm5lckhlaWdodCkge1xyXG4gICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnbG9nb19hbmltYXRpb24nKVxyXG4gICAgfVxyXG59XHJcblxyXG5cclxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIGFjdGl2ZSk7XHJcblxyXG5mdW5jdGlvbiBhY3RpdmUoKSB7XHJcbiAgICBsZXQgaDEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZm9yY2UnKTtcclxuXHJcbiAgICBsZXQgcG9zID0gaDEuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcblxyXG4gICAgaWYgKHBvcy50b3AgPj0gMCAmJiBwb3MuYm90dG9tIDw9IHdpbmRvdy5pbm5lckhlaWdodCkge1xyXG4gICAgICAgIGgxLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZWUnKVxyXG4gICAgfVxyXG59XHJcblxyXG5cclxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIGFwcGVhckNvbmNlcHQpO1xyXG5cclxuZnVuY3Rpb24gYXBwZWFyQ29uY2VwdCgpIHtcclxuICAgIGxldCBjb25jZXB0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFydGljbGVzJyk7XHJcblxyXG4gICAgbGV0IHAgPSBjb25jZXB0LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG5cclxuICAgIGlmIChwLnRvcCA+PSAwICYmIHAuYm90dG9tIDw9IHdpbmRvdy5pbm5lckhlaWdodCkge1xyXG4gICAgICAgIGNvbmNlcHQuY2xhc3NMaXN0LmFkZCgnYWN0aXZlQ29uY2VwdCcpXHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5cclxubGV0IHR5cGVkID0gbmV3IFR5cGVkKCcjdHlwZWQnLCB7XHJcbiAgICBzdHJpbmdzOiBbJ1VYIERlc2lnbicsICdVSSBEZXNpZ24nLCAnRGV2ZWxvcHBldXInLCAnV2ViJywgJ0RldicsICdGcm9udCcsICdEYXRhJ10sXHJcbiAgICB0eXBlU3BlZWQ6IDAsXHJcbiAgICBiYWNrU3BlZWQ6IDAsXHJcbiAgICBzbWFydEJhY2tzcGFjZTogdHJ1ZSwgLy8gYydlc3QgcGFyIGRlZmF1dFxyXG4gICAgbG9vcDogdHJ1ZVxyXG59KTtcclxuXHJcblxyXG5cclxuLy8gRm9uY3Rpb24gcXVpIHZhIGfDqXJlciBsYSB2aWTDqW9cclxuXHJcbmZ1bmN0aW9uIHBhdXNlVmlkZW8oKSB7XHJcblxyXG4gICAgbGV0IHZpZGVvID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3ZpZGVvJylcclxuICAgIGxldCBib3V0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYnRuJylcclxuXHJcbiAgICBpZiAodmlkZW8ucGF1c2VkKSB7XHJcbiAgICAgICAgYm91dG9uLnRleHRDb250ZW50ID0gJ1BhdXNlJ1xyXG4gICAgICAgIHZpZGVvLnBsYXkoKVxyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgdmlkZW8ucGF1c2UoKVxyXG4gICAgICAgIGJvdXRvbi50ZXh0Q29udGVudCA9ICdQbGF5J1xyXG4gICAgfVxyXG59XHJcblxyXG5ib3V0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBwYXVzZVZpZGVvKTsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5jb25zdCB1cmwgPSBcImh0dHBzOi8vanNvbnBsYWNlaG9sZGVyLnR5cGljb2RlLmNvbS9wb3N0c1wiXHJcblxyXG5jbGFzcyBCbG9nIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgbGV0IGluZm87XHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgZXZlbnRzOiBbXSxcclxuICAgICAgICAgICAgc2VhcmNoOicnLFxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgY29tcG9uZW50RGlkVXBkYXRlKHByZXZQcm9wcywgcHJldlN0YXRlKXtcclxuICAgICAgaWYocHJldlN0YXRlLnNlYXJjaCAhPT0gdGhpcy5zdGF0ZS5zZWFyY2gpIHtcclxuICAgICAgICBcclxuICAgICAgfVxyXG5cclxuICAgIH1cclxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG5cclxuICAgICAgICBmZXRjaCh1cmwpXHJcbiAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxyXG4gICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICBldmVudHM6IHJlc3BvbnNlLFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgIFxyXG4gICAgICAgICAgICBcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcblxyXG4gICAgICAgIGxldCBzZWFyY2hJdGVtID0gdGhpcy5zdGF0ZS5ldmVudHMuZmlsdGVyKChkYXRhKT0+e1xyXG4gICAgICAgICAgICBpZih0aGlzLnN0YXRlLnNlYXJjaCA9PSBudWxsKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGRhdGFcclxuICAgICAgICAgICAgZWxzZSBpZihkYXRhLnRpdGxlLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXModGhpcy5zdGF0ZS5zZWFyY2gudG9Mb3dlckNhc2UoKSkpe1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGRhdGFcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICB9KS5tYXAoZXZlbnQgPT4gKFxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJibG9nX2FydGljbGVcIj5cclxuICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cImh0dHBzOi8vaW1hZ2UuZnJlZXBpay5jb20vdmVjdGV1cnMtbGlicmUvam91cm5lZS1pbnRlcm5hdGlvbmFsZS1wZXJzb25uZXMtaGFuZGljYXBlZXMtYXUtZGVzaWduLXBsYXRfMjMtMjE0ODcyMzIyNi5qcGdcIiBhbHQ9XCJcIiAvPlxyXG4gICAgICAgICAgICAgICAgPGg0PntldmVudC50aXRsZX08L2g0PlxyXG4gICAgICAgICAgICAgICAgPHA+e2V2ZW50LmJvZHl9IDwvcD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICkpXHJcblxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYmxvZ19iYXJcIj5cclxuICAgICAgICAgICAgICAgIDxoMT5Ub3VzIG5vcyBhcnRpY2xlczwvaDE+XHJcbiAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPSd0ZXh0J29uQ2hhbmdlPXt0aGlzLnVwZGF0ZVNlYXJjaH0gdmFsdWU9e3RoaXMuc3RhdGUuc2VhcmNofSBwbGFjZWhvbGRlcj1cIlJlY2hlcmNoZXJcIi8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiclwiPlxyXG4gICAgICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiZGlzcGxheVwiPlxyXG4gICAgICAgICAgICAgICAge3NlYXJjaEl0ZW19XHJcbiAgICAgICAgICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj4gIFxyXG4gICAgICAgICAgICA8Lz5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZVNlYXJjaCA9IChlKSA9PiB7XHJcbiAgICAgIGNvbnN0IGtleVdvcmQgPSBlLnRhcmdldC52YWx1ZVxyXG4gICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICBzZWFyY2g6IGtleVdvcmQsXHJcbiAgICAgIH0pXHJcbiAgICB9XHJcbiAgIFxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBCbG9nO1xyXG5cclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuXHJcbmNsYXNzIFNlYXJjaCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgICBqb2JzOiBbXSxcclxuICAgICAgICAgIHNlYXJjaDogJycsXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgY29tcG9uZW50RGlkVXBkYXRlKHByZXZQcm9wcywgcHJldlN0YXRlKSB7XHJcbiAgICAgICAgaWYgKHByZXZTdGF0ZS5zZWFyY2ggIT09IHRoaXMuc3RhdGUuc2VhcmNoKSB7XHJcbiAgICAgICAgICB0aGlzLmZldGNoSm9icygpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWUgPVwiY29udGFpbmVyX3NlYXJjaF9iYXJcIj5cclxuICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cIlwiPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgb25DaGFuZ2U9e3RoaXMudXBkYXRlU2VhcmNofSBwbGFjZWhvbGRlcj1cIlJlY2hlcmNoZXouLi5cIiB2YWx1ZT17dGhpcy5zdGF0ZS5zZWFyY2h9Lz5cclxuICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcblxyXG5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImpvYnNcIj4gXHJcbiAgICAgICAgICAgICAge3RoaXMuc3RhdGUuam9icy5tYXAoZnVuY3Rpb24oam9iKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYm9keVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGg1ICBjbGFzc05hbWU9XCJjYXJkLXRpdGxlXCI+e2pvYi5uYW1lfTwvaDU+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJjYXJkLXRleHRcIj57am9iLmRlc2NyaXB0aW9ufTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9eycvc2hvd0pvYi8nICsgam9iLmlkfT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiaHR0cHM6Ly9pbWcuaWNvbnM4LmNvbS9hbmRyb2lkLzI0LzAwMDAwMC9sb25nLWFycm93LXJpZ2h0LnBuZ1wiLz48L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PiAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIHsvKiA8YnV0dG9uIG9uQ2xpY2s9e3RoaXMuZmV0Y2hKb2JzfT5TZWFyY2ggPC9idXR0b24+ICovfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIClcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIENldHRlIGZvbmN0aW9uIG1ldCDDoCBqb3VyIGxlIHN0YXRlIHNlYXJjaCBhdmVjIGxhIHZhbGV1ciByZcOndWUgZW4gcGFyYW3DqHRyZXNcclxuICAgICAgICAgKiBAcGFyYW0gZXZlbnRcclxuICAgICAgICAgKi9cclxuICAgICAgICB1cGRhdGVTZWFyY2ggPSAoZXZlbnQpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIHNlYXJjaDogZXZlbnQudGFyZ2V0LnZhbHVlLFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZmV0Y2hKb2JzID0gKCkgPT4ge1xyXG4gICAgICAgICAgICAvLyB1cmwgw6AgbW9kaWZpZXJcclxuICAgICAgICAgICAgZmV0Y2goJ2h0dHA6Ly9sb2NhbGhvc3Q6ODAwMC9hcGkvam9iJyxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGhlYWRlcnM6IHsgLy8gR2FyZGVyIHRvdWpvdXJzIGxlcyBtw6ptZXMgaGVhZGVyc1xyXG4gICAgICAgICAgICAgICAgICAgICdBY2NlcHQnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIG1ldGhvZDogXCJQT1NUXCIsIC8vIFBPU1QsIFBVVCwgb3UgREVMRVRFIGVuIGZvbmN0aW9uIGRlcyBiZXNvaW5zXHJcbiAgICAgICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gdmFyaWFibGUgcXVpIHZhIGV0cmUgZW52b3nDqSBhdSBiYWNrICgnc2VhcmNoJylcclxuICAgICAgICAgICAgICAgICAgICBzZWFyY2g6IHRoaXMuc3RhdGUuc2VhcmNoLFxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIH0pLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKS50aGVuKHJlc3BvbnNlID0+IHtcclxuICAgICAgICAgICAgICAgIC8vdGFrZSBiYWNrIGRhdGEgYXMgYW4gb2JqZWN0XHJcbiAgICAgICAgICAgICAgICBsZXQgdXBkYXRlZEpvYnNMaXN0ID0gcmVzcG9uc2UuZGF0YTtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgLy90YWtlIGJhY2sgZGF0YSBhcyBhbiBhcnJheSBjb250YWlucyBhcnJheXMgaW5zaWRlIFtbXSxbXSxbXV0gd2l0aCBvYmplY3QuZW50cmllc1xyXG4gICAgICAgICAgICAgICAgaWYgKCFBcnJheS5pc0FycmF5KHJlc3BvbnNlLmRhdGEpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdXBkYXRlZEpvYnNMaXN0ID0gT2JqZWN0LmVudHJpZXMocmVzcG9uc2UuZGF0YSkubWFwKChqb2JJblJlc3VsdCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIE9uIHLDqWN1cMOocmUgbGEgdmFsZXVyIGRlIG1pZWxJblJlc3VsdHNcclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gam9iSW5SZXN1bHRbMV07XHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgICAgIGpvYnM6IHVwZGF0ZWRKb2JzTGlzdCxcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG5cclxuXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2VhcmNoOyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyJdLCJzb3VyY2VSb290IjoiIn0=