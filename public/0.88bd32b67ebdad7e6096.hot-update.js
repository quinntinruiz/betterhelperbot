webpackHotUpdate(0,{

/***/ 263:
/* no static exports found */
/* all exports used */
/*!********************************************!*\
  !*** ./frontend/components/CreateGroup.js ***!
  \********************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ 4);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _propTypes = __webpack_require__(/*! prop-types */ 6);\n\nvar _propTypes2 = _interopRequireDefault(_propTypes);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar bodyParser = __webpack_require__(/*! body-parser */ 318);\n\nvar CreateGroup = function (_React$Component) {\n    _inherits(CreateGroup, _React$Component);\n\n    function CreateGroup() {\n        _classCallCheck(this, CreateGroup);\n\n        var _this = _possibleConstructorReturn(this, (CreateGroup.__proto__ || Object.getPrototypeOf(CreateGroup)).call(this));\n\n        _this.state = {\n            assignmentInput: '',\n            partInput: '',\n            locationInput: '',\n            problemInput: ''\n        };\n        _this.handleAssignmentChange = _this.handleAssignmentChange.bind(_this);\n        _this.handlePartChange = _this.handlePartChange.bind(_this);\n        _this.handleLocationChange = _this.handleLocationChange.bind(_this);\n        _this.handleProblemChange = _this.handleProblemChange.bind(_this);\n        _this.handleSubmit = _this.handleSubmit.bind(_this);\n\n        return _this;\n    }\n\n    _createClass(CreateGroup, [{\n        key: 'handleAssignmentChange',\n        value: function handleAssignmentChange(event) {\n            this.setState({ assignmentInput: event.target.value });\n        }\n    }, {\n        key: 'handlePartChange',\n        value: function handlePartChange(event) {\n            this.setState({ partInput: event.target.value });\n        }\n    }, {\n        key: 'handleLocationChange',\n        value: function handleLocationChange(event) {\n            this.setState({ locationInput: event.target.value });\n        }\n    }, {\n        key: 'handleProblemChange',\n        value: function handleProblemChange(event) {\n            this.setState({ problemInput: event.target.value });\n        }\n    }, {\n        key: 'handleSubmit',\n        value: function handleSubmit(event) {\n            event.preventDefault();\n            fetch('http://localhost:3000/api/addGroup', {\n                method: 'POST',\n                headers: {\n                    'Accept': 'application/json',\n                    'Content-Type': 'application/json'\n                },\n                body: {\n                    assignment: this.state.assignmentInput,\n                    part: this.state.partInput,\n                    location: this.state.locationInput,\n                    problem: this.state.problemInput\n                }\n            });\n        }\n        //put variables in body if post request, params(colon in route) or query (?=)\n\n\n    }, {\n        key: 'render',\n        value: function render() {\n            var _this2 = this;\n\n            return _react2.default.createElement(\n                'div',\n                null,\n                _react2.default.createElement(\n                    'h3',\n                    null,\n                    'Create Group'\n                ),\n                _react2.default.createElement(\n                    'form',\n                    { onSubmit: function onSubmit(e) {\n                            _this2.handleSubmit(e);\n                        } },\n                    _react2.default.createElement('input', { type: 'text', placeholder: 'Assignment', value: this.state.assignmentInput, onChange: this.handleAssignmentChange }),\n                    _react2.default.createElement('input', { type: 'text', placeholder: 'Part', value: this.state.partInput, onChange: this.handlePartChange }),\n                    _react2.default.createElement('input', { type: 'text', placeholder: 'Location', value: this.state.locationInput, onChange: this.handleLocationChange }),\n                    _react2.default.createElement('input', { type: 'text', placeholder: 'Problem', value: this.state.problemInput, onChange: this.handleProblemChange }),\n                    _react2.default.createElement('input', { type: 'submit', value: 'Submit' })\n                )\n            );\n        }\n    }]);\n\n    return CreateGroup;\n}(_react2.default.Component);\n\n;\n\nCreateGroup.propTypes = {\n    name: _propTypes2.default.string,\n    createGroup: _propTypes2.default.any\n};\n\nexports.default = CreateGroup;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMjYzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL2Zyb250ZW5kL2NvbXBvbmVudHMvQ3JlYXRlR3JvdXAuanM/ZjhkNiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbnZhciBib2R5UGFyc2VyID0gcmVxdWlyZSgnYm9keS1wYXJzZXInKVxuXG5jbGFzcyBDcmVhdGVHcm91cCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG5cbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIGFzc2lnbm1lbnRJbnB1dDogJycsXG4gICAgICAgICAgICBwYXJ0SW5wdXQ6ICcnLFxuICAgICAgICAgICAgbG9jYXRpb25JbnB1dDogJycsXG4gICAgICAgICAgICBwcm9ibGVtSW5wdXQ6ICcnXG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuaGFuZGxlQXNzaWdubWVudENoYW5nZSA9IHRoaXMuaGFuZGxlQXNzaWdubWVudENoYW5nZS5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmhhbmRsZVBhcnRDaGFuZ2UgPSB0aGlzLmhhbmRsZVBhcnRDaGFuZ2UuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5oYW5kbGVMb2NhdGlvbkNoYW5nZSA9IHRoaXMuaGFuZGxlTG9jYXRpb25DaGFuZ2UuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5oYW5kbGVQcm9ibGVtQ2hhbmdlID0gdGhpcy5oYW5kbGVQcm9ibGVtQ2hhbmdlLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuaGFuZGxlU3VibWl0ID0gdGhpcy5oYW5kbGVTdWJtaXQuYmluZCh0aGlzKTtcblxuICAgIH07XG4gICAgaGFuZGxlQXNzaWdubWVudENoYW5nZShldmVudCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgYXNzaWdubWVudElucHV0OiBldmVudC50YXJnZXQudmFsdWUgfSlcbiAgICB9XG4gICAgaGFuZGxlUGFydENoYW5nZShldmVudCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgcGFydElucHV0OiBldmVudC50YXJnZXQudmFsdWUgfSlcbiAgICB9XG4gICAgaGFuZGxlTG9jYXRpb25DaGFuZ2UoZXZlbnQpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGxvY2F0aW9uSW5wdXQ6IGV2ZW50LnRhcmdldC52YWx1ZSB9KVxuICAgIH1cbiAgICBoYW5kbGVQcm9ibGVtQ2hhbmdlKGV2ZW50KSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBwcm9ibGVtSW5wdXQ6IGV2ZW50LnRhcmdldC52YWx1ZSB9KVxuICAgIH1cbiAgICBoYW5kbGVTdWJtaXQoZXZlbnQpIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgZmV0Y2goJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9hcGkvYWRkR3JvdXAnLCB7XG4gICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAnQWNjZXB0JzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYm9keToge1xuICAgICAgICAgICAgICAgIGFzc2lnbm1lbnQ6IHRoaXMuc3RhdGUuYXNzaWdubWVudElucHV0LFxuICAgICAgICAgICAgICAgIHBhcnQ6IHRoaXMuc3RhdGUucGFydElucHV0LFxuICAgICAgICAgICAgICAgIGxvY2F0aW9uOiB0aGlzLnN0YXRlLmxvY2F0aW9uSW5wdXQsXG4gICAgICAgICAgICAgICAgcHJvYmxlbTogdGhpcy5zdGF0ZS5wcm9ibGVtSW5wdXQsXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgfVxuICAgIC8vcHV0IHZhcmlhYmxlcyBpbiBib2R5IGlmIHBvc3QgcmVxdWVzdCwgcGFyYW1zKGNvbG9uIGluIHJvdXRlKSBvciBxdWVyeSAoPz0pXG5cblxuXG5cbiAgICByZW5kZXIoKSB7XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPGgzPkNyZWF0ZSBHcm91cDwvaDM+XG4gICAgICAgICAgICAgICAgPGZvcm0gb25TdWJtaXQ9eyhlKSA9PiB7IHRoaXMuaGFuZGxlU3VibWl0KGUpIH19PlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj0nQXNzaWdubWVudCcgdmFsdWU9e3RoaXMuc3RhdGUuYXNzaWdubWVudElucHV0fSBvbkNoYW5nZT17dGhpcy5oYW5kbGVBc3NpZ25tZW50Q2hhbmdlfSAvPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj0nUGFydCcgdmFsdWU9e3RoaXMuc3RhdGUucGFydElucHV0fSBvbkNoYW5nZT17dGhpcy5oYW5kbGVQYXJ0Q2hhbmdlfSAvPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj0nTG9jYXRpb24nIHZhbHVlPXt0aGlzLnN0YXRlLmxvY2F0aW9uSW5wdXR9IG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUxvY2F0aW9uQ2hhbmdlfSAvPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj0nUHJvYmxlbScgdmFsdWU9e3RoaXMuc3RhdGUucHJvYmxlbUlucHV0fSBvbkNoYW5nZT17dGhpcy5oYW5kbGVQcm9ibGVtQ2hhbmdlfSAvPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInN1Ym1pdFwiIHZhbHVlPVwiU3VibWl0XCIgLz5cbiAgICAgICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59O1xuXG5DcmVhdGVHcm91cC5wcm9wVHlwZXMgPSB7XG4gICAgbmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBjcmVhdGVHcm91cDogUHJvcFR5cGVzLmFueVxufTtcblxuXG5leHBvcnQgZGVmYXVsdCBDcmVhdGVHcm91cDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBmcm9udGVuZC9jb21wb25lbnRzL0NyZWF0ZUdyb3VwLmpzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOzs7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBZEE7QUFlQTtBQUNBOzs7QUFBQTtBQUNBO0FBQ0E7OztBQUNBO0FBQ0E7QUFDQTs7O0FBQ0E7QUFDQTtBQUNBOzs7QUFDQTtBQUNBO0FBQ0E7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFOQTtBQWFBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQUZBO0FBV0E7Ozs7QUFoRUE7QUFDQTtBQWdFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFDQTtBQUtBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///263\n");

/***/ })

})