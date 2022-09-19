/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/clock.ts":
/*!**********************!*\
  !*** ./src/clock.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.Clock = exports.STEPS_COUNT = void 0;\nexports.STEPS_COUNT = 16;\nvar Clock = /** @class */ (function () {\n    function Clock(instruments) {\n        var _this = this;\n        this.startClock = function () {\n            if (_this.intervalId)\n                clearInterval(_this.intervalId);\n            var interval = _this.countInterval(_this.bpm);\n            _this.intervalId = setInterval(function () {\n                _this.currentStep++;\n                if (_this.currentStep === exports.STEPS_COUNT)\n                    _this.currentStep = 0;\n                _this.renderClock();\n                _this.instruments.forEach(function (instrument) {\n                    var pattern = instrument.getPattern();\n                    if (pattern[_this.currentStep]) {\n                        instrument.playSound();\n                    }\n                });\n            }, interval);\n        };\n        this.renderClock = function () {\n            document.querySelector(\"#steps\").innerHTML = \"\";\n            Array.from({ length: exports.STEPS_COUNT }, function (x, i) {\n                var element = document.createElement(\"span\");\n                element.innerText = _this.currentStep === i ? \"O\" : \"X\";\n                document.querySelector(\"#steps\").append(element);\n            });\n        };\n        this.countInterval = function (bpm) {\n            return 60000 / bpm / 2; //ms\n        };\n        this.setSpeedFaster = function () {\n            _this.bpm = Math.round(_this.bpm / 0.9);\n            _this.startClock();\n        };\n        this.setSpeedSlower = function () {\n            _this.bpm = Math.round(_this.bpm * 0.9);\n            _this.startClock();\n        };\n        this.getBpm = function () {\n            return _this.bpm;\n        };\n        this.setBpm = function (e) {\n            _this.bpm = parseInt(e.target.value, 10);\n            _this.startClock();\n        };\n        this.getInstruments = function () {\n            return _this.instruments;\n        };\n        this.currentStep = 0;\n        this.bpm = 119;\n        this.instruments = instruments;\n        this.renderClock();\n    }\n    return Clock;\n}());\nexports.Clock = Clock;\n\n\n//# sourceURL=webpack://noreact/./src/clock.ts?");

/***/ }),

/***/ "./src/controls.ts":
/*!*************************!*\
  !*** ./src/controls.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.Controls = void 0;\nvar housePattern = {\n    K: [\n        true,\n        false,\n        true,\n        false,\n        true,\n        false,\n        true,\n        false,\n        true,\n        false,\n        true,\n        false,\n        true,\n        false,\n        true,\n        false,\n    ],\n    C: [\n        false,\n        false,\n        true,\n        false,\n        false,\n        false,\n        true,\n        false,\n        false,\n        false,\n        true,\n        false,\n        false,\n        false,\n        true,\n        false,\n    ],\n    H: [\n        true,\n        true,\n        true,\n        true,\n        true,\n        true,\n        true,\n        true,\n        true,\n        true,\n        true,\n        true,\n        true,\n        true,\n        true,\n        true,\n    ],\n    S: [\n        false,\n        false,\n        false,\n        false,\n        false,\n        false,\n        false,\n        false,\n        false,\n        false,\n        false,\n        false,\n        false,\n        false,\n        false,\n        false,\n    ],\n};\nvar breaksPattern = {\n    K: [\n        true,\n        false,\n        false,\n        true,\n        false,\n        true,\n        false,\n        false,\n        true,\n        false,\n        false,\n        true,\n        false,\n        true,\n        false,\n        false,\n    ],\n    C: [\n        false,\n        false,\n        true,\n        false,\n        false,\n        false,\n        true,\n        false,\n        false,\n        false,\n        true,\n        false,\n        false,\n        false,\n        true,\n        false,\n    ],\n    H: [\n        true,\n        true,\n        true,\n        true,\n        true,\n        true,\n        true,\n        true,\n        true,\n        true,\n        true,\n        true,\n        true,\n        true,\n        true,\n        true,\n    ],\n    S: [\n        false,\n        false,\n        false,\n        false,\n        false,\n        false,\n        false,\n        false,\n        false,\n        false,\n        false,\n        false,\n        false,\n        false,\n        false,\n        false,\n    ],\n};\nvar Controls = /** @class */ (function () {\n    function Controls(clock) {\n        var _this = this;\n        this.onSetPatternClicked = function (pattern) {\n            var instruments = _this.clock.getInstruments();\n            instruments.forEach(function (instrument) {\n                instrument.setPattern(pattern[instrument.alias]);\n            });\n        };\n        this.clock = clock;\n        document.querySelector(\"#button-faster\").addEventListener(\"click\", function () {\n            clock.setSpeedFaster();\n            _this.setSpeedToInput();\n        });\n        document.querySelector(\"#button-slower\").addEventListener(\"click\", function () {\n            clock.setSpeedSlower();\n            _this.setSpeedToInput();\n        });\n        document\n            .querySelector(\"#bpm-control\")\n            .addEventListener(\"input\", clock.setBpm);\n        document\n            .querySelector(\"#house\")\n            .addEventListener(\"click\", function () { return _this.onSetPatternClicked(housePattern); });\n        document\n            .querySelector(\"#breaks\")\n            .addEventListener(\"click\", function () { return _this.onSetPatternClicked(breaksPattern); });\n        this.setSpeedToInput();\n    }\n    Controls.prototype.setSpeedToInput = function () {\n        var bpm = this.clock.getBpm();\n        document.querySelector(\"#bpm-control\").value =\n            bpm.toString();\n    };\n    return Controls;\n}());\nexports.Controls = Controls;\n\n\n//# sourceURL=webpack://noreact/./src/controls.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nvar clock_1 = __webpack_require__(/*! ./clock */ \"./src/clock.ts\");\nvar controls_1 = __webpack_require__(/*! ./controls */ \"./src/controls.ts\");\nvar instrument_1 = __webpack_require__(/*! ./instrument */ \"./src/instrument.ts\");\nvar kick = new instrument_1.Instrument({ alias: \"K\", soundName: \"./sounds/kick.wav\" });\nvar clap = new instrument_1.Instrument({ alias: \"C\", soundName: \"./sounds/clap.wav\" });\nvar hat = new instrument_1.Instrument({ alias: \"H\", soundName: \"./sounds/hat.wav\" });\nvar stick = new instrument_1.Instrument({ alias: \"S\", soundName: \"./sounds/stick.wav\" });\nvar clock = new clock_1.Clock([kick, clap, hat, stick]);\nnew controls_1.Controls(clock);\nclock.startClock();\n\n\n//# sourceURL=webpack://noreact/./src/index.ts?");

/***/ }),

/***/ "./src/instrument.ts":
/*!***************************!*\
  !*** ./src/instrument.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.Instrument = void 0;\nvar clock_1 = __webpack_require__(/*! ./clock */ \"./src/clock.ts\");\nvar Instrument = /** @class */ (function () {\n    function Instrument(_a) {\n        var alias = _a.alias, soundName = _a.soundName;\n        var _this = this;\n        this.pattern = [\n            false,\n            false,\n            false,\n            false,\n            false,\n            false,\n            false,\n            false,\n            false,\n            false,\n            false,\n            false,\n            false,\n            false,\n            false,\n            false,\n        ];\n        this.render = function () {\n            var container = document.createElement(\"div\");\n            _this.buttonsContainer = container;\n            Array.from({ length: clock_1.STEPS_COUNT }, function (el, i) {\n                var button = document.createElement(\"button\");\n                button.id = \"\".concat(_this.alias, \"-\").concat(i);\n                button.innerText = _this.alias;\n                container.append(button);\n            });\n            container.addEventListener(\"click\", _this.onPatternChanged);\n            document.querySelector(\"#instruments\").append(container);\n        };\n        this.onPatternChanged = function (e) {\n            if (e.target.tagName !== \"BUTTON\")\n                return;\n            var index = parseInt(e.target.id.split(\"-\")[1]);\n            e.target.classList.toggle(\"active\");\n            _this.pattern[index] = !_this.pattern[index];\n        };\n        this.getPattern = function () {\n            return _this.pattern;\n        };\n        this.playSound = function () {\n            var audio = new Audio(_this.soundName);\n            audio.play();\n        };\n        this.setPattern = function (pattern) {\n            _this.pattern = pattern;\n            _this.buttonsContainer.querySelectorAll(\"button\").forEach(function (button, i) {\n                button.classList.remove(\"active\");\n                if (pattern[i]) {\n                    button.classList.add(\"active\");\n                }\n            });\n        };\n        this.alias = alias;\n        this.soundName = soundName;\n        this.render();\n    }\n    return Instrument;\n}());\nexports.Instrument = Instrument;\n\n\n//# sourceURL=webpack://noreact/./src/instrument.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;