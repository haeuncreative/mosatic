/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/audio_bank.js":
/*!***************************!*\
  !*** ./src/audio_bank.js ***!
  \***************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ AudioBank; }\n/* harmony export */ });\nclass AudioBank {\n  constructor() {\n    this.coreAudioBank = {};\n  }\n\n  // okay, thought process, i do a create bank method that\n  // creates all of the audio files in a bank\n  // then i access each one using a method i.e. AudioBank.playQ and etc.\n  // i'll make an object containing: object[key] = {context: context, \n  // source: source, sound: sound}\n\n  createAudioContext() {\n    return new AudioContext();\n  }\n  createAudioSource(letter) {\n    let querySelectorId = \"\";\n    querySelectorId += `#${letter}-id`;\n    console.log(querySelectorId);\n    return document.querySelector(querySelectorId);\n  }\n  createAudioSound(context, source) {\n    return context.createMediaElementSource(source);\n  }\n  createBank(array) {\n    array.forEach(letter => {\n      let ctx = this.createAudioContext();\n      console.log(ctx);\n      console.log('audio context created');\n      let source = this.createAudioSource(letter);\n      console.log(source);\n      console.log('audio source created');\n      let sound = this.createAudioSound(ctx, source);\n      console.log(sound);\n      console.log('audio sound created');\n      this.coreAudioBank[letter] = {\n        ctx: ctx,\n        source: source,\n        sound: sound\n      };\n      this.coreAudioBank[letter].sound.connect(this.coreAudioBank[letter].ctx.destination);\n      console.log('end each loop');\n    });\n  }\n  playQ() {\n    this.coreAudioBank['Q'].source.play();\n  }\n  playW() {\n    this.coreAudioBank['W'].source.play();\n  }\n  playE() {\n    this.coreAudioBank['E'].source.play();\n  }\n  playR() {\n    this.coreAudioBank['R'].source.play();\n  }\n  playT() {\n    this.coreAudioBank['T'].source.play();\n  }\n  playY() {\n    this.coreAudioBank['Y'].source.play();\n  }\n  playU() {\n    this.coreAudioBank['U'].source.play();\n  }\n  playI() {\n    this.coreAudioBank['I'].source.play();\n  }\n  playO() {\n    this.coreAudioBank['O'].source.play();\n  }\n  playP() {\n    this.coreAudioBank['P'].source.play();\n  }\n  playA() {}\n  playS() {}\n  playD() {}\n  playF() {}\n  playG() {}\n  playH() {}\n  playJ() {}\n  playK() {}\n  playL() {}\n  playZ() {}\n  playX() {}\n  playC() {}\n  playV() {}\n  playB() {}\n  playN() {}\n  playM() {}\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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NUIsYUFBYSxDQUFDLEdBQUcsQ0FBQyxDQUFDWSxNQUFNLENBQUNVLElBQUksRUFBRTtFQUN6QztFQUVBTyxLQUFLLEdBQUk7SUFDTCxJQUFJLENBQUM3QixhQUFhLENBQUMsR0FBRyxDQUFDLENBQUNZLE1BQU0sQ0FBQ1UsSUFBSSxFQUFFO0VBQ3pDO0VBRUFRLEtBQUssR0FBSTtJQUNMLElBQUksQ0FBQzlCLGFBQWEsQ0FBQyxHQUFHLENBQUMsQ0FBQ1ksTUFBTSxDQUFDVSxJQUFJLEVBQUU7RUFDekM7RUFFQVMsS0FBSyxHQUFJO0lBQ0wsSUFBSSxDQUFDL0IsYUFBYSxDQUFDLEdBQUcsQ0FBQyxDQUFDWSxNQUFNLENBQUNVLElBQUksRUFBRTtFQUN6QztFQUVBVSxLQUFLLEdBQUksQ0FFVDtFQUVBQyxLQUFLLEdBQUksQ0FFVDtFQUVBQyxLQUFLLEdBQUksQ0FFVDtFQUVBQyxLQUFLLEdBQUksQ0FFVDtFQUVBQyxLQUFLLEdBQUksQ0FFVDtFQUVBQyxLQUFLLEdBQUksQ0FFVDtFQUVBQyxLQUFLLEdBQUksQ0FFVDtFQUVBQyxLQUFLLEdBQUksQ0FFVDtFQUVBQyxLQUFLLEdBQUksQ0FFVDtFQUVBQyxLQUFLLEdBQUksQ0FFVDtFQUVBQyxLQUFLLEdBQUksQ0FFVDtFQUVBQyxLQUFLLEdBQUksQ0FFVDtFQUVBQyxLQUFLLEdBQUksQ0FFVDtFQUVBQyxLQUFLLEdBQUksQ0FFVDtFQUVBQyxLQUFLLEdBQUksQ0FFVDtFQUVBQyxLQUFLLEdBQUksQ0FFVDtBQUVKIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vamF2YXNjcmlwdF9wcm9qZWN0Ly4vc3JjL2F1ZGlvX2JhbmsuanM/N2M3NSJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBjbGFzcyBBdWRpb0Jhbmsge1xuICAgIGNvbnN0cnVjdG9yICgpIHtcbiAgICAgICAgdGhpcy5jb3JlQXVkaW9CYW5rID0ge31cbiAgICB9XG4gICAgXG4gICAgLy8gb2theSwgdGhvdWdodCBwcm9jZXNzLCBpIGRvIGEgY3JlYXRlIGJhbmsgbWV0aG9kIHRoYXRcbiAgICAvLyBjcmVhdGVzIGFsbCBvZiB0aGUgYXVkaW8gZmlsZXMgaW4gYSBiYW5rXG4gICAgLy8gdGhlbiBpIGFjY2VzcyBlYWNoIG9uZSB1c2luZyBhIG1ldGhvZCBpLmUuIEF1ZGlvQmFuay5wbGF5USBhbmQgZXRjLlxuICAgIC8vIGknbGwgbWFrZSBhbiBvYmplY3QgY29udGFpbmluZzogb2JqZWN0W2tleV0gPSB7Y29udGV4dDogY29udGV4dCwgXG4gICAgLy8gc291cmNlOiBzb3VyY2UsIHNvdW5kOiBzb3VuZH1cblxuICAgIGNyZWF0ZUF1ZGlvQ29udGV4dCAoKSB7XG4gICAgICAgIHJldHVybiBuZXcgQXVkaW9Db250ZXh0XG4gICAgfVxuXG4gICAgY3JlYXRlQXVkaW9Tb3VyY2UgKGxldHRlcikge1xuICAgICAgICBsZXQgcXVlcnlTZWxlY3RvcklkID0gXCJcIlxuICAgICAgICBxdWVyeVNlbGVjdG9ySWQgKz0gYCMke2xldHRlcn0taWRgXG4gICAgICAgIGNvbnNvbGUubG9nKHF1ZXJ5U2VsZWN0b3JJZClcbiAgICAgICAgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IocXVlcnlTZWxlY3RvcklkKVxuICAgIH1cblxuICAgIGNyZWF0ZUF1ZGlvU291bmQgKGNvbnRleHQsIHNvdXJjZSkge1xuICAgICAgICByZXR1cm4gY29udGV4dC5jcmVhdGVNZWRpYUVsZW1lbnRTb3VyY2Uoc291cmNlKTtcbiAgICB9XG5cbiAgICBjcmVhdGVCYW5rIChhcnJheSkge1xuICAgICAgICBhcnJheS5mb3JFYWNoKGxldHRlciA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IGN0eCA9IHRoaXMuY3JlYXRlQXVkaW9Db250ZXh0KClcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhjdHgpXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2F1ZGlvIGNvbnRleHQgY3JlYXRlZCcpXG4gICAgICAgICAgICAgICAgbGV0IHNvdXJjZSA9IHRoaXMuY3JlYXRlQXVkaW9Tb3VyY2UobGV0dGVyKSAgIFxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHNvdXJjZSkgICAgIFxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdhdWRpbyBzb3VyY2UgY3JlYXRlZCcpXG4gICAgICAgICAgICAgICAgbGV0IHNvdW5kID0gdGhpcy5jcmVhdGVBdWRpb1NvdW5kKGN0eCwgc291cmNlKVxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHNvdW5kKVxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdhdWRpbyBzb3VuZCBjcmVhdGVkJylcbiAgICAgICAgICAgICAgICB0aGlzLmNvcmVBdWRpb0JhbmtbbGV0dGVyXSA9IHtcbiAgICAgICAgICAgICAgICAgICAgY3R4OiBjdHgsXG4gICAgICAgICAgICAgICAgICAgIHNvdXJjZTogc291cmNlLCBcbiAgICAgICAgICAgICAgICAgICAgc291bmQ6IHNvdW5kXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICB0aGlzLmNvcmVBdWRpb0JhbmtbbGV0dGVyXS5zb3VuZC5jb25uZWN0KHRoaXMuY29yZUF1ZGlvQmFua1tsZXR0ZXJdLmN0eC5kZXN0aW5hdGlvbilcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnZW5kIGVhY2ggbG9vcCcpXG4gICAgICAgICAgICB9KTsgICAgICAgIFxuICAgIH1cblxuICAgIHBsYXlRICgpIHtcbiAgICAgICAgdGhpcy5jb3JlQXVkaW9CYW5rWydRJ10uc291cmNlLnBsYXkoKVxuICAgIH1cblxuICAgIHBsYXlXICgpIHtcbiAgICAgICAgdGhpcy5jb3JlQXVkaW9CYW5rWydXJ10uc291cmNlLnBsYXkoKVxuICAgIH1cblxuICAgIHBsYXlFICgpIHtcbiAgICAgICAgdGhpcy5jb3JlQXVkaW9CYW5rWydFJ10uc291cmNlLnBsYXkoKVxuICAgIH1cblxuICAgIHBsYXlSICgpIHtcbiAgICAgICAgdGhpcy5jb3JlQXVkaW9CYW5rWydSJ10uc291cmNlLnBsYXkoKVxuXG4gICAgfVxuXG4gICAgcGxheVQgKCkge1xuICAgICAgICB0aGlzLmNvcmVBdWRpb0JhbmtbJ1QnXS5zb3VyY2UucGxheSgpXG5cbiAgICB9XG5cbiAgICBwbGF5WSAoKSB7XG4gICAgICAgIHRoaXMuY29yZUF1ZGlvQmFua1snWSddLnNvdXJjZS5wbGF5KClcblxuICAgIH1cblxuICAgIHBsYXlVICgpIHtcbiAgICAgICAgdGhpcy5jb3JlQXVkaW9CYW5rWydVJ10uc291cmNlLnBsYXkoKVxuICAgIH1cblxuICAgIHBsYXlJICgpIHtcbiAgICAgICAgdGhpcy5jb3JlQXVkaW9CYW5rWydJJ10uc291cmNlLnBsYXkoKVxuICAgIH1cblxuICAgIHBsYXlPICgpIHtcbiAgICAgICAgdGhpcy5jb3JlQXVkaW9CYW5rWydPJ10uc291cmNlLnBsYXkoKVxuICAgIH1cblxuICAgIHBsYXlQICgpIHtcbiAgICAgICAgdGhpcy5jb3JlQXVkaW9CYW5rWydQJ10uc291cmNlLnBsYXkoKVxuICAgIH1cblxuICAgIHBsYXlBICgpIHtcblxuICAgIH1cblxuICAgIHBsYXlTICgpIHtcblxuICAgIH1cblxuICAgIHBsYXlEICgpIHtcblxuICAgIH1cblxuICAgIHBsYXlGICgpIHtcblxuICAgIH1cblxuICAgIHBsYXlHICgpIHtcblxuICAgIH1cblxuICAgIHBsYXlIICgpIHtcblxuICAgIH1cblxuICAgIHBsYXlKICgpIHtcblxuICAgIH1cblxuICAgIHBsYXlLICgpIHtcblxuICAgIH1cblxuICAgIHBsYXlMICgpIHtcblxuICAgIH1cblxuICAgIHBsYXlaICgpIHtcblxuICAgIH1cblxuICAgIHBsYXlYICgpIHtcblxuICAgIH1cblxuICAgIHBsYXlDICgpIHtcblxuICAgIH1cblxuICAgIHBsYXlWICgpIHtcblxuICAgIH1cblxuICAgIHBsYXlCICgpIHtcblxuICAgIH1cblxuICAgIHBsYXlOICgpIHtcblxuICAgIH1cblxuICAgIHBsYXlNICgpIHtcblxuICAgIH1cblxufVxuXG4iXSwibmFtZXMiOlsiQXVkaW9CYW5rIiwiY29uc3RydWN0b3IiLCJjb3JlQXVkaW9CYW5rIiwiY3JlYXRlQXVkaW9Db250ZXh0IiwiQXVkaW9Db250ZXh0IiwiY3JlYXRlQXVkaW9Tb3VyY2UiLCJsZXR0ZXIiLCJxdWVyeVNlbGVjdG9ySWQiLCJjb25zb2xlIiwibG9nIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiY3JlYXRlQXVkaW9Tb3VuZCIsImNvbnRleHQiLCJzb3VyY2UiLCJjcmVhdGVNZWRpYUVsZW1lbnRTb3VyY2UiLCJjcmVhdGVCYW5rIiwiYXJyYXkiLCJmb3JFYWNoIiwiY3R4Iiwic291bmQiLCJjb25uZWN0IiwiZGVzdGluYXRpb24iLCJwbGF5USIsInBsYXkiLCJwbGF5VyIsInBsYXlFIiwicGxheVIiLCJwbGF5VCIsInBsYXlZIiwicGxheVUiLCJwbGF5SSIsInBsYXlPIiwicGxheVAiLCJwbGF5QSIsInBsYXlTIiwicGxheUQiLCJwbGF5RiIsInBsYXlHIiwicGxheUgiLCJwbGF5SiIsInBsYXlLIiwicGxheUwiLCJwbGF5WiIsInBsYXlYIiwicGxheUMiLCJwbGF5ViIsInBsYXlCIiwicGxheU4iLCJwbGF5TSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/audio_bank.js\n");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _key_down_handler_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./key_down_handler.js */ \"./src/key_down_handler.js\");\n/* harmony import */ var _audio_bank_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./audio_bank.js */ \"./src/audio_bank.js\");\n// okay so first, we need a key down handler that tracks\n// 1. the audio mapped to each key\n// 2. the animation mapped to each key\n// 3. it exports it to a separate array or object that keeps track of\n// which key pressed and duration between keystrokes \n// 4. if held down, it continually restarts playback, like a little stutter function (auto-repeat)\n// \n\n// }\n\n\nwindow.addEventListener('load', function () {\n  let CONSTANTS = {\n    KEY_ALPHABET: Array.from('QWERTYUIOPASDFGHJKLZXCVBNM')\n  };\n  const canvas = document.querySelector('canvas');\n  const context = canvas.getContext('2d');\n  context.fillStyle = '#95c88c';\n  context.fillRect(0, 0, 1920, 1080);\n  // const keySoundBank = new AudioBank\n  // keySoundBank.createBank(CONSTANTS.KEY_ALPHABET)\n  // const soundBank = keySoundBank.coreAudioBank\n  // console.log(soundBank)\n\n  // notes 12-04-22 : so it seems like without the keydown handler it's working fine, ideally i'd like to put this in its own class and just have it here...\n\n  // notes 12-04-22 #2 : going to add the keydown handler now and see\n  const keysDown = new _key_down_handler_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n\n  //   window.addEventListener('keydown', e => {\n  //         e.preventDefault()\n  //         e.stopImmediatePropagation()  \n  //         console.log(e.code)\n  //         switch(e.code) {\n  //         case \"KeyQ\":\n  //             soundBank.playQ()\n  //         break;\n\n  //         case \"KeyW\":\n  //             soundBank.playW()\n  //         break;\n\n  //         case \"KeyE\":\n  //             soundBank.playE()\n  //         break;\n\n  //         case \"KeyR\":\n  //             soundBank.playR()\n  //         break;\n\n  //         case \"KeyT\":\n  //             soundBank.playT()\n  //         break;\n\n  //         case \"KeyY\":\n  //             soundBank.playY()\n  //         break;\n\n  //         case \"KeyU\":\n  //             soundBank.playU()\n  //         break;\n\n  //         case \"KeyI\":\n  //             soundBank.playI()\n  //         break;\n\n  //         case \"KeyO\":\n  //             soundBank.playO()\n  //         break;\n\n  //         case \"KeyP\":\n  //             soundBank.playP()\n  //         break;\n\n  //         case \"KeyA\":\n  //             soundBank.playA()\n  //         break;\n\n  //         case \"KeyS\":\n  //             soundBank.playS()\n  //         break;\n\n  //         case \"KeyD\":\n  //             soundBank.playD()\n  //         break;\n\n  //         case \"KeyF\":\n  //             soundBank.playF()\n  //         break;\n\n  //         case \"KeyG\":\n  //             soundBank.playG()\n  //         break;\n\n  //         case \"KeyH\":\n  //             soundBank.playH()\n  //         break;\n\n  //         case \"KeyJ\":\n  //             soundBank.playJ()\n  //         break;\n\n  //         case \"KeyK\":\n  //             soundBank.playK()\n  //         break;\n\n  //         case \"KeyL\":\n  //             soundBank.playL()\n  //         break;\n\n  //         case \"KeyZ\":\n  //             soundBank.playZ()\n  //         break;\n\n  //         case \"KeyX\":\n  //             soundBank.playX()\n  //         break;\n\n  //         case \"KeyC\":\n  //             soundBank.playC()\n  //         break;\n\n  //         case \"KeyV\":\n  //             soundBank.playV()\n  //         break;\n\n  //         case \"KeyB\":\n  //             soundBank.playB()\n  //         break;\n\n  //         case \"KeyN\":\n  //             soundBank.playN()\n  //         break;\n\n  //         case \"KeyM\":\n  //             soundBank.playM()\n  //         break;\n  //     }\n  //     })\n}); //outer Window Event Listener bounds\n\n// const recorded = {} // this will have the various keys and their attr, like time/order(?)\n\n// // second, key up handler (?)\n// // not sure if i'd need a key up...\n\n// // third, recording handler\n// // includes play, pause, stop, and of course record functions\n\n// // fourth, reverb functions//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBR0E7QUFDbUQ7QUFDWjtBQUd2Q0UsTUFBTSxDQUFDQyxnQkFBZ0IsQ0FBQyxNQUFNLEVBQUUsWUFBVztFQUN2QyxJQUFJQyxTQUFTLEdBQUc7SUFDaEJDLFlBQVksRUFBRUMsS0FBSyxDQUFDQyxJQUFJLENBQUMsNEJBQTRCO0VBQ3JELENBQUM7RUFFRCxNQUFNQyxNQUFNLEdBQUdDLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLFFBQVEsQ0FBQztFQUMvQyxNQUFNQyxPQUFPLEdBQUdILE1BQU0sQ0FBQ0ksVUFBVSxDQUFDLElBQUksQ0FBQztFQUN2Q0QsT0FBTyxDQUFDRSxTQUFTLEdBQUcsU0FBUztFQUM3QkYsT0FBTyxDQUFDRyxRQUFRLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDO0VBQ2xDO0VBQ0E7RUFDQTtFQUNBOztFQUVBOztFQUVBO0VBQ0EsTUFBTUMsUUFBUSxHQUFHLElBQUlmLDREQUFjOztFQUV2QztFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBOztFQUVBO0VBQ0E7RUFDQTs7RUFFQTtFQUNBO0VBQ0E7O0VBRUE7RUFDQTtFQUNBOztFQUVBO0VBQ0E7RUFDQTs7RUFFQTtFQUNBO0VBQ0E7O0VBRUE7RUFDQTtFQUNBOztFQUVBO0VBQ0E7RUFDQTs7RUFFQTtFQUNBO0VBQ0E7O0VBRUE7RUFDQTtFQUNBOztFQUVBO0VBQ0E7RUFDQTs7RUFFQTtFQUNBO0VBQ0E7O0VBRUE7RUFDQTtFQUNBOztFQUVBO0VBQ0E7RUFDQTs7RUFFQTtFQUNBO0VBQ0E7O0VBRUE7RUFDQTtFQUNBOztFQUVBO0VBQ0E7RUFDQTs7RUFFQTtFQUNBO0VBQ0E7O0VBRUE7RUFDQTtFQUNBOztFQUVBO0VBQ0E7RUFDQTs7RUFFQTtFQUNBO0VBQ0E7O0VBRUE7RUFDQTtFQUNBOztFQUVBO0VBQ0E7RUFDQTs7RUFFQTtFQUNBO0VBQ0E7O0VBRUE7RUFDQTtFQUNBOztFQUVBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7QUFDQSxDQUFDLENBQUMsQ0FBQyxDQUFDOztBQUlKOztBQUdBO0FBQ0E7O0FBR0E7QUFDQTs7QUFFQSIsInNvdXJjZXMiOlsid2VicGFjazovL2phdmFzY3JpcHRfcHJvamVjdC8uL3NyYy9pbmRleC5qcz9iNjM1Il0sInNvdXJjZXNDb250ZW50IjpbIlxuLy8gb2theSBzbyBmaXJzdCwgd2UgbmVlZCBhIGtleSBkb3duIGhhbmRsZXIgdGhhdCB0cmFja3Ncbi8vIDEuIHRoZSBhdWRpbyBtYXBwZWQgdG8gZWFjaCBrZXlcbi8vIDIuIHRoZSBhbmltYXRpb24gbWFwcGVkIHRvIGVhY2gga2V5XG4vLyAzLiBpdCBleHBvcnRzIGl0IHRvIGEgc2VwYXJhdGUgYXJyYXkgb3Igb2JqZWN0IHRoYXQga2VlcHMgdHJhY2sgb2Zcbi8vIHdoaWNoIGtleSBwcmVzc2VkIGFuZCBkdXJhdGlvbiBiZXR3ZWVuIGtleXN0cm9rZXMgXG4vLyA0LiBpZiBoZWxkIGRvd24sIGl0IGNvbnRpbnVhbGx5IHJlc3RhcnRzIHBsYXliYWNrLCBsaWtlIGEgbGl0dGxlIHN0dXR0ZXIgZnVuY3Rpb24gKGF1dG8tcmVwZWF0KVxuLy8gXG5cbiAgXG4vLyB9XG5pbXBvcnQgS2V5RG93bkhhbmRsZXIgZnJvbSAnLi9rZXlfZG93bl9oYW5kbGVyLmpzJztcbmltcG9ydCBBdWRpb0JhbmsgZnJvbSAnLi9hdWRpb19iYW5rLmpzJ1xuXG5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgZnVuY3Rpb24oKSB7XG4gICAgbGV0IENPTlNUQU5UUyA9IHtcbiAgICBLRVlfQUxQSEFCRVQ6IEFycmF5LmZyb20oJ1FXRVJUWVVJT1BBU0RGR0hKS0xaWENWQk5NJylcbiAgICB9XG5cbiAgICBjb25zdCBjYW52YXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdjYW52YXMnKTtcbiAgICBjb25zdCBjb250ZXh0ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG4gICAgY29udGV4dC5maWxsU3R5bGUgPSAnIzk1Yzg4YydcbiAgICBjb250ZXh0LmZpbGxSZWN0KDAsIDAsIDE5MjAsIDEwODApXG4gICAgLy8gY29uc3Qga2V5U291bmRCYW5rID0gbmV3IEF1ZGlvQmFua1xuICAgIC8vIGtleVNvdW5kQmFuay5jcmVhdGVCYW5rKENPTlNUQU5UUy5LRVlfQUxQSEFCRVQpXG4gICAgLy8gY29uc3Qgc291bmRCYW5rID0ga2V5U291bmRCYW5rLmNvcmVBdWRpb0JhbmtcbiAgICAvLyBjb25zb2xlLmxvZyhzb3VuZEJhbmspXG5cbiAgICAvLyBub3RlcyAxMi0wNC0yMiA6IHNvIGl0IHNlZW1zIGxpa2Ugd2l0aG91dCB0aGUga2V5ZG93biBoYW5kbGVyIGl0J3Mgd29ya2luZyBmaW5lLCBpZGVhbGx5IGknZCBsaWtlIHRvIHB1dCB0aGlzIGluIGl0cyBvd24gY2xhc3MgYW5kIGp1c3QgaGF2ZSBpdCBoZXJlLi4uXG5cbiAgICAvLyBub3RlcyAxMi0wNC0yMiAjMiA6IGdvaW5nIHRvIGFkZCB0aGUga2V5ZG93biBoYW5kbGVyIG5vdyBhbmQgc2VlXG4gICAgY29uc3Qga2V5c0Rvd24gPSBuZXcgS2V5RG93bkhhbmRsZXJcblxuLy8gICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGUgPT4ge1xuLy8gICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcbi8vICAgICAgICAgZS5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKSAgXG4vLyAgICAgICAgIGNvbnNvbGUubG9nKGUuY29kZSlcbi8vICAgICAgICAgc3dpdGNoKGUuY29kZSkge1xuLy8gICAgICAgICBjYXNlIFwiS2V5UVwiOlxuLy8gICAgICAgICAgICAgc291bmRCYW5rLnBsYXlRKClcbi8vICAgICAgICAgYnJlYWs7XG4gICAgICAgIFxuLy8gICAgICAgICBjYXNlIFwiS2V5V1wiOlxuLy8gICAgICAgICAgICAgc291bmRCYW5rLnBsYXlXKClcbi8vICAgICAgICAgYnJlYWs7XG5cbi8vICAgICAgICAgY2FzZSBcIktleUVcIjpcbi8vICAgICAgICAgICAgIHNvdW5kQmFuay5wbGF5RSgpXG4vLyAgICAgICAgIGJyZWFrO1xuXG4vLyAgICAgICAgIGNhc2UgXCJLZXlSXCI6XG4vLyAgICAgICAgICAgICBzb3VuZEJhbmsucGxheVIoKVxuLy8gICAgICAgICBicmVhaztcblxuLy8gICAgICAgICBjYXNlIFwiS2V5VFwiOlxuLy8gICAgICAgICAgICAgc291bmRCYW5rLnBsYXlUKClcbi8vICAgICAgICAgYnJlYWs7XG5cbi8vICAgICAgICAgY2FzZSBcIktleVlcIjpcbi8vICAgICAgICAgICAgIHNvdW5kQmFuay5wbGF5WSgpXG4vLyAgICAgICAgIGJyZWFrO1xuXG4vLyAgICAgICAgIGNhc2UgXCJLZXlVXCI6XG4vLyAgICAgICAgICAgICBzb3VuZEJhbmsucGxheVUoKVxuLy8gICAgICAgICBicmVhaztcblxuLy8gICAgICAgICBjYXNlIFwiS2V5SVwiOlxuLy8gICAgICAgICAgICAgc291bmRCYW5rLnBsYXlJKClcbi8vICAgICAgICAgYnJlYWs7XG5cbi8vICAgICAgICAgY2FzZSBcIktleU9cIjpcbi8vICAgICAgICAgICAgIHNvdW5kQmFuay5wbGF5TygpXG4vLyAgICAgICAgIGJyZWFrO1xuXG4vLyAgICAgICAgIGNhc2UgXCJLZXlQXCI6XG4vLyAgICAgICAgICAgICBzb3VuZEJhbmsucGxheVAoKVxuLy8gICAgICAgICBicmVhaztcblxuLy8gICAgICAgICBjYXNlIFwiS2V5QVwiOlxuLy8gICAgICAgICAgICAgc291bmRCYW5rLnBsYXlBKClcbi8vICAgICAgICAgYnJlYWs7XG5cbi8vICAgICAgICAgY2FzZSBcIktleVNcIjpcbi8vICAgICAgICAgICAgIHNvdW5kQmFuay5wbGF5UygpXG4vLyAgICAgICAgIGJyZWFrO1xuXG4vLyAgICAgICAgIGNhc2UgXCJLZXlEXCI6XG4vLyAgICAgICAgICAgICBzb3VuZEJhbmsucGxheUQoKVxuLy8gICAgICAgICBicmVhaztcblxuLy8gICAgICAgICBjYXNlIFwiS2V5RlwiOlxuLy8gICAgICAgICAgICAgc291bmRCYW5rLnBsYXlGKClcbi8vICAgICAgICAgYnJlYWs7XG5cbi8vICAgICAgICAgY2FzZSBcIktleUdcIjpcbi8vICAgICAgICAgICAgIHNvdW5kQmFuay5wbGF5RygpXG4vLyAgICAgICAgIGJyZWFrO1xuXG4vLyAgICAgICAgIGNhc2UgXCJLZXlIXCI6XG4vLyAgICAgICAgICAgICBzb3VuZEJhbmsucGxheUgoKVxuLy8gICAgICAgICBicmVhaztcblxuLy8gICAgICAgICBjYXNlIFwiS2V5SlwiOlxuLy8gICAgICAgICAgICAgc291bmRCYW5rLnBsYXlKKClcbi8vICAgICAgICAgYnJlYWs7XG5cbi8vICAgICAgICAgY2FzZSBcIktleUtcIjpcbi8vICAgICAgICAgICAgIHNvdW5kQmFuay5wbGF5SygpXG4vLyAgICAgICAgIGJyZWFrO1xuXG4vLyAgICAgICAgIGNhc2UgXCJLZXlMXCI6XG4vLyAgICAgICAgICAgICBzb3VuZEJhbmsucGxheUwoKVxuLy8gICAgICAgICBicmVhaztcblxuLy8gICAgICAgICBjYXNlIFwiS2V5WlwiOlxuLy8gICAgICAgICAgICAgc291bmRCYW5rLnBsYXlaKClcbi8vICAgICAgICAgYnJlYWs7XG5cbi8vICAgICAgICAgY2FzZSBcIktleVhcIjpcbi8vICAgICAgICAgICAgIHNvdW5kQmFuay5wbGF5WCgpXG4vLyAgICAgICAgIGJyZWFrO1xuXG4vLyAgICAgICAgIGNhc2UgXCJLZXlDXCI6XG4vLyAgICAgICAgICAgICBzb3VuZEJhbmsucGxheUMoKVxuLy8gICAgICAgICBicmVhaztcblxuLy8gICAgICAgICBjYXNlIFwiS2V5VlwiOlxuLy8gICAgICAgICAgICAgc291bmRCYW5rLnBsYXlWKClcbi8vICAgICAgICAgYnJlYWs7XG5cbi8vICAgICAgICAgY2FzZSBcIktleUJcIjpcbi8vICAgICAgICAgICAgIHNvdW5kQmFuay5wbGF5QigpXG4vLyAgICAgICAgIGJyZWFrO1xuXG4vLyAgICAgICAgIGNhc2UgXCJLZXlOXCI6XG4vLyAgICAgICAgICAgICBzb3VuZEJhbmsucGxheU4oKVxuLy8gICAgICAgICBicmVhaztcblxuLy8gICAgICAgICBjYXNlIFwiS2V5TVwiOlxuLy8gICAgICAgICAgICAgc291bmRCYW5rLnBsYXlNKClcbi8vICAgICAgICAgYnJlYWs7XG4vLyAgICAgfVxuLy8gICAgIH0pXG59KTsgLy9vdXRlciBXaW5kb3cgRXZlbnQgTGlzdGVuZXIgYm91bmRzXG4gICAgICBcblxuXG4vLyBjb25zdCByZWNvcmRlZCA9IHt9IC8vIHRoaXMgd2lsbCBoYXZlIHRoZSB2YXJpb3VzIGtleXMgYW5kIHRoZWlyIGF0dHIsIGxpa2UgdGltZS9vcmRlcig/KVxuXG5cbi8vIC8vIHNlY29uZCwga2V5IHVwIGhhbmRsZXIgKD8pXG4vLyAvLyBub3Qgc3VyZSBpZiBpJ2QgbmVlZCBhIGtleSB1cC4uLlxuXG5cbi8vIC8vIHRoaXJkLCByZWNvcmRpbmcgaGFuZGxlclxuLy8gLy8gaW5jbHVkZXMgcGxheSwgcGF1c2UsIHN0b3AsIGFuZCBvZiBjb3Vyc2UgcmVjb3JkIGZ1bmN0aW9uc1xuXG4vLyAvLyBmb3VydGgsIHJldmVyYiBmdW5jdGlvbnNcblxuXG5cbiJdLCJuYW1lcyI6WyJLZXlEb3duSGFuZGxlciIsIkF1ZGlvQmFuayIsIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJDT05TVEFOVFMiLCJLRVlfQUxQSEFCRVQiLCJBcnJheSIsImZyb20iLCJjYW52YXMiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJjb250ZXh0IiwiZ2V0Q29udGV4dCIsImZpbGxTdHlsZSIsImZpbGxSZWN0Iiwia2V5c0Rvd24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/key_down_handler.js":
/*!*********************************!*\
  !*** ./src/key_down_handler.js ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ KeyDownHandler; }\n/* harmony export */ });\n/* harmony import */ var _audio_bank_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./audio_bank.js */ \"./src/audio_bank.js\");\n\nlet CONSTANTS = {\n  KEY_ALPHABET: Array.from('QWERTYUIOPASDFGHJKLZXCVBNM')\n};\nclass KeyDownHandler {\n  constructor() {\n    this.keys = [];\n    this.soundBank = new _audio_bank_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n    this.soundBank.createBank(CONSTANTS.KEY_ALPHABET);\n    this.addListeners();\n  }\n  addListeners() {\n    window.addEventListener('keydown', e => {\n      e.preventDefault();\n      e.stopImmediatePropagation();\n      console.log(e.code);\n      switch (e.code) {\n        case \"KeyQ\":\n          this.soundBank.playQ();\n          break;\n        case \"KeyW\":\n          this.soundBank.playW();\n          break;\n        case \"KeyE\":\n          this.soundBank.playE();\n          break;\n        case \"KeyR\":\n          this.soundBank.playR();\n          break;\n        case \"KeyT\":\n          this.soundBank.playT();\n          break;\n        case \"KeyY\":\n          this.soundBank.playY();\n          break;\n        case \"KeyU\":\n          this.soundBank.playU();\n          break;\n        case \"KeyI\":\n          this.soundBank.playI();\n          break;\n        case \"KeyO\":\n          this.soundBank.playO();\n          break;\n        case \"KeyP\":\n          this.soundBank.playP();\n          break;\n        case \"KeyA\":\n          this.soundBank.playA();\n          break;\n        case \"KeyS\":\n          this.soundBank.playS();\n          break;\n        case \"KeyD\":\n          this.soundBank.playD();\n          break;\n        case \"KeyF\":\n          this.soundBank.playF();\n          break;\n        case \"KeyG\":\n          this.soundBank.playG();\n          break;\n        case \"KeyH\":\n          this.soundBank.playH();\n          break;\n        case \"KeyJ\":\n          this.soundBank.playJ();\n          break;\n        case \"KeyK\":\n          this.soundBank.playK();\n          break;\n        case \"KeyL\":\n          this.soundBank.playL();\n          break;\n        case \"KeyZ\":\n          this.soundBank.playZ();\n          break;\n        case \"KeyX\":\n          this.soundBank.playX();\n          break;\n        case \"KeyC\":\n          this.soundBank.playC();\n          break;\n        case \"KeyV\":\n          this.soundBank.playV();\n          break;\n        case \"KeyB\":\n          this.soundBank.playB();\n          break;\n        case \"KeyN\":\n          this.soundBank.playN();\n          break;\n        case \"KeyM\":\n          this.soundBank.playM();\n          break;\n      }\n    });\n  }\n}\n;\n\n// extraneous code that worked previously for reference () {\n//     const audioContextQ = new AudioContext()\n//     const qSource = document.querySelector('#Q-id')\n//     const qSound = audioContextQ.createMediaElementSource(qSource);\n//     qSound.connect(audioContextQ.destination)\n//   const audioContextQ = new AudioContext()\n//   console.log(audioContextQ instanceof AudioContext)\n//   const qSource = document.querySelector('#Q-id')\n//   console.log(qSource instanceof HTMLMediaElement)\n//   const qSound = audioContextQ.createMediaElementSource(qSource);\n//   console.log(qSound instanceof MediaElementAudioSourceNode)\n//   qSound.connect(audioContextQ.destination)\n// }//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMva2V5X2Rvd25faGFuZGxlci5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUF1QztBQUV2QyxJQUFJQyxTQUFTLEdBQUc7RUFDWkMsWUFBWSxFQUFFQyxLQUFLLENBQUNDLElBQUksQ0FBQyw0QkFBNEI7QUFDekQsQ0FBQztBQUVjLE1BQU1DLGNBQWMsQ0FBQztFQUNoQ0MsV0FBVyxHQUFHO0lBQ1YsSUFBSSxDQUFDQyxJQUFJLEdBQUcsRUFBRTtJQUNkLElBQUksQ0FBQ0MsU0FBUyxHQUFHLElBQUlSLHNEQUFTO0lBQzlCLElBQUksQ0FBQ1EsU0FBUyxDQUFDQyxVQUFVLENBQUNSLFNBQVMsQ0FBQ0MsWUFBWSxDQUFDO0lBQ2pELElBQUksQ0FBQ1EsWUFBWSxFQUFFO0VBQ3ZCO0VBRUFBLFlBQVksR0FBRztJQUNkQyxNQUFNLENBQUNDLGdCQUFnQixDQUFDLFNBQVMsRUFBRUMsQ0FBQyxJQUFJO01BQ3JDQSxDQUFDLENBQUNDLGNBQWMsRUFBRTtNQUNsQkQsQ0FBQyxDQUFDRSx3QkFBd0IsRUFBRTtNQUM1QkMsT0FBTyxDQUFDQyxHQUFHLENBQUNKLENBQUMsQ0FBQ0ssSUFBSSxDQUFDO01BQ25CLFFBQU9MLENBQUMsQ0FBQ0ssSUFBSTtRQUNiLEtBQUssTUFBTTtVQUNQLElBQUksQ0FBQ1YsU0FBUyxDQUFDVyxLQUFLLEVBQUU7VUFDMUI7UUFFQSxLQUFLLE1BQU07VUFDUCxJQUFJLENBQUNYLFNBQVMsQ0FBQ1ksS0FBSyxFQUFFO1VBQzFCO1FBRUEsS0FBSyxNQUFNO1VBQ1AsSUFBSSxDQUFDWixTQUFTLENBQUNhLEtBQUssRUFBRTtVQUMxQjtRQUVBLEtBQUssTUFBTTtVQUNQLElBQUksQ0FBQ2IsU0FBUyxDQUFDYyxLQUFLLEVBQUU7VUFDMUI7UUFFQSxLQUFLLE1BQU07VUFDUCxJQUFJLENBQUNkLFNBQVMsQ0FBQ2UsS0FBSyxFQUFFO1VBQzFCO1FBRUEsS0FBSyxNQUFNO1VBQ1AsSUFBSSxDQUFDZixTQUFTLENBQUNnQixLQUFLLEVBQUU7VUFDMUI7UUFFQSxLQUFLLE1BQU07VUFDUCxJQUFJLENBQUNoQixTQUFTLENBQUNpQixLQUFLLEVBQUU7VUFDMUI7UUFFQSxLQUFLLE1BQU07VUFDUCxJQUFJLENBQUNqQixTQUFTLENBQUNrQixLQUFLLEVBQUU7VUFDMUI7UUFFQSxLQUFLLE1BQU07VUFDUCxJQUFJLENBQUNsQixTQUFTLENBQUNtQixLQUFLLEVBQUU7VUFDMUI7UUFFQSxLQUFLLE1BQU07VUFDUCxJQUFJLENBQUNuQixTQUFTLENBQUNvQixLQUFLLEVBQUU7VUFDMUI7UUFFQSxLQUFLLE1BQU07VUFDUCxJQUFJLENBQUNwQixTQUFTLENBQUNxQixLQUFLLEVBQUU7VUFDMUI7UUFFQSxLQUFLLE1BQU07VUFDUCxJQUFJLENBQUNyQixTQUFTLENBQUNzQixLQUFLLEVBQUU7VUFDMUI7UUFFQSxLQUFLLE1BQU07VUFDUCxJQUFJLENBQUN0QixTQUFTLENBQUN1QixLQUFLLEVBQUU7VUFDMUI7UUFFQSxLQUFLLE1BQU07VUFDUCxJQUFJLENBQUN2QixTQUFTLENBQUN3QixLQUFLLEVBQUU7VUFDMUI7UUFFQSxLQUFLLE1BQU07VUFDUCxJQUFJLENBQUN4QixTQUFTLENBQUN5QixLQUFLLEVBQUU7VUFDMUI7UUFFQSxLQUFLLE1BQU07VUFDUCxJQUFJLENBQUN6QixTQUFTLENBQUMwQixLQUFLLEVBQUU7VUFDMUI7UUFFQSxLQUFLLE1BQU07VUFDUCxJQUFJLENBQUMxQixTQUFTLENBQUMyQixLQUFLLEVBQUU7VUFDMUI7UUFFQSxLQUFLLE1BQU07VUFDUCxJQUFJLENBQUMzQixTQUFTLENBQUM0QixLQUFLLEVBQUU7VUFDMUI7UUFFQSxLQUFLLE1BQU07VUFDUCxJQUFJLENBQUM1QixTQUFTLENBQUM2QixLQUFLLEVBQUU7VUFDMUI7UUFFQSxLQUFLLE1BQU07VUFDUCxJQUFJLENBQUM3QixTQUFTLENBQUM4QixLQUFLLEVBQUU7VUFDMUI7UUFFQSxLQUFLLE1BQU07VUFDUCxJQUFJLENBQUM5QixTQUFTLENBQUMrQixLQUFLLEVBQUU7VUFDMUI7UUFFQSxLQUFLLE1BQU07VUFDUCxJQUFJLENBQUMvQixTQUFTLENBQUNnQyxLQUFLLEVBQUU7VUFDMUI7UUFFQSxLQUFLLE1BQU07VUFDUCxJQUFJLENBQUNoQyxTQUFTLENBQUNpQyxLQUFLLEVBQUU7VUFDMUI7UUFFQSxLQUFLLE1BQU07VUFDUCxJQUFJLENBQUNqQyxTQUFTLENBQUNrQyxLQUFLLEVBQUU7VUFDMUI7UUFFQSxLQUFLLE1BQU07VUFDUCxJQUFJLENBQUNsQyxTQUFTLENBQUNtQyxLQUFLLEVBQUU7VUFDMUI7UUFFQSxLQUFLLE1BQU07VUFDUCxJQUFJLENBQUNuQyxTQUFTLENBQUNvQyxLQUFLLEVBQUU7VUFDMUI7TUFBTTtJQUVWLENBQUMsQ0FBQztFQUNGO0FBQ0o7QUFBQzs7QUFHRztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0k7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2phdmFzY3JpcHRfcHJvamVjdC8uL3NyYy9rZXlfZG93bl9oYW5kbGVyLmpzPzA2YWQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEF1ZGlvQmFuayBmcm9tICcuL2F1ZGlvX2JhbmsuanMnXG5cbmxldCBDT05TVEFOVFMgPSB7XG4gICAgS0VZX0FMUEhBQkVUOiBBcnJheS5mcm9tKCdRV0VSVFlVSU9QQVNERkdISktMWlhDVkJOTScpXG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEtleURvd25IYW5kbGVyIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5rZXlzID0gW107XG4gICAgICAgIHRoaXMuc291bmRCYW5rID0gbmV3IEF1ZGlvQmFua1xuICAgICAgICB0aGlzLnNvdW5kQmFuay5jcmVhdGVCYW5rKENPTlNUQU5UUy5LRVlfQUxQSEFCRVQpXG4gICAgICAgIHRoaXMuYWRkTGlzdGVuZXJzKClcbiAgICB9XG5cbiAgICBhZGRMaXN0ZW5lcnMoKSB7XG4gICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgZSA9PiB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgICAgICBlLnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpICBcbiAgICAgICAgY29uc29sZS5sb2coZS5jb2RlKVxuICAgICAgICBzd2l0Y2goZS5jb2RlKSB7XG4gICAgICAgIGNhc2UgXCJLZXlRXCI6XG4gICAgICAgICAgICB0aGlzLnNvdW5kQmFuay5wbGF5USgpXG4gICAgICAgIGJyZWFrO1xuICAgICAgICBcbiAgICAgICAgY2FzZSBcIktleVdcIjpcbiAgICAgICAgICAgIHRoaXMuc291bmRCYW5rLnBsYXlXKClcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSBcIktleUVcIjpcbiAgICAgICAgICAgIHRoaXMuc291bmRCYW5rLnBsYXlFKClcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSBcIktleVJcIjpcbiAgICAgICAgICAgIHRoaXMuc291bmRCYW5rLnBsYXlSKClcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSBcIktleVRcIjpcbiAgICAgICAgICAgIHRoaXMuc291bmRCYW5rLnBsYXlUKClcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSBcIktleVlcIjpcbiAgICAgICAgICAgIHRoaXMuc291bmRCYW5rLnBsYXlZKClcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSBcIktleVVcIjpcbiAgICAgICAgICAgIHRoaXMuc291bmRCYW5rLnBsYXlVKClcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSBcIktleUlcIjpcbiAgICAgICAgICAgIHRoaXMuc291bmRCYW5rLnBsYXlJKClcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSBcIktleU9cIjpcbiAgICAgICAgICAgIHRoaXMuc291bmRCYW5rLnBsYXlPKClcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSBcIktleVBcIjpcbiAgICAgICAgICAgIHRoaXMuc291bmRCYW5rLnBsYXlQKClcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSBcIktleUFcIjpcbiAgICAgICAgICAgIHRoaXMuc291bmRCYW5rLnBsYXlBKClcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSBcIktleVNcIjpcbiAgICAgICAgICAgIHRoaXMuc291bmRCYW5rLnBsYXlTKClcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSBcIktleURcIjpcbiAgICAgICAgICAgIHRoaXMuc291bmRCYW5rLnBsYXlEKClcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSBcIktleUZcIjpcbiAgICAgICAgICAgIHRoaXMuc291bmRCYW5rLnBsYXlGKClcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSBcIktleUdcIjpcbiAgICAgICAgICAgIHRoaXMuc291bmRCYW5rLnBsYXlHKClcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSBcIktleUhcIjpcbiAgICAgICAgICAgIHRoaXMuc291bmRCYW5rLnBsYXlIKClcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSBcIktleUpcIjpcbiAgICAgICAgICAgIHRoaXMuc291bmRCYW5rLnBsYXlKKClcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSBcIktleUtcIjpcbiAgICAgICAgICAgIHRoaXMuc291bmRCYW5rLnBsYXlLKClcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSBcIktleUxcIjpcbiAgICAgICAgICAgIHRoaXMuc291bmRCYW5rLnBsYXlMKClcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSBcIktleVpcIjpcbiAgICAgICAgICAgIHRoaXMuc291bmRCYW5rLnBsYXlaKClcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSBcIktleVhcIjpcbiAgICAgICAgICAgIHRoaXMuc291bmRCYW5rLnBsYXlYKClcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSBcIktleUNcIjpcbiAgICAgICAgICAgIHRoaXMuc291bmRCYW5rLnBsYXlDKClcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSBcIktleVZcIjpcbiAgICAgICAgICAgIHRoaXMuc291bmRCYW5rLnBsYXlWKClcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSBcIktleUJcIjpcbiAgICAgICAgICAgIHRoaXMuc291bmRCYW5rLnBsYXlCKClcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSBcIktleU5cIjpcbiAgICAgICAgICAgIHRoaXMuc291bmRCYW5rLnBsYXlOKClcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSBcIktleU1cIjpcbiAgICAgICAgICAgIHRoaXMuc291bmRCYW5rLnBsYXlNKClcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICAgIH0pXG4gICAgfTtcbn07XG5cblxuICAgIC8vIGV4dHJhbmVvdXMgY29kZSB0aGF0IHdvcmtlZCBwcmV2aW91c2x5IGZvciByZWZlcmVuY2UgKCkge1xuICAgIC8vICAgICBjb25zdCBhdWRpb0NvbnRleHRRID0gbmV3IEF1ZGlvQ29udGV4dCgpXG4gICAgLy8gICAgIGNvbnN0IHFTb3VyY2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjUS1pZCcpXG4gICAgLy8gICAgIGNvbnN0IHFTb3VuZCA9IGF1ZGlvQ29udGV4dFEuY3JlYXRlTWVkaWFFbGVtZW50U291cmNlKHFTb3VyY2UpO1xuICAgIC8vICAgICBxU291bmQuY29ubmVjdChhdWRpb0NvbnRleHRRLmRlc3RpbmF0aW9uKVxuICAgICAgICAvLyAgIGNvbnN0IGF1ZGlvQ29udGV4dFEgPSBuZXcgQXVkaW9Db250ZXh0KClcbiAgICAvLyAgIGNvbnNvbGUubG9nKGF1ZGlvQ29udGV4dFEgaW5zdGFuY2VvZiBBdWRpb0NvbnRleHQpXG4gICAgLy8gICBjb25zdCBxU291cmNlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI1EtaWQnKVxuICAgIC8vICAgY29uc29sZS5sb2cocVNvdXJjZSBpbnN0YW5jZW9mIEhUTUxNZWRpYUVsZW1lbnQpXG4gICAgLy8gICBjb25zdCBxU291bmQgPSBhdWRpb0NvbnRleHRRLmNyZWF0ZU1lZGlhRWxlbWVudFNvdXJjZShxU291cmNlKTtcbiAgICAvLyAgIGNvbnNvbGUubG9nKHFTb3VuZCBpbnN0YW5jZW9mIE1lZGlhRWxlbWVudEF1ZGlvU291cmNlTm9kZSlcbiAgICAvLyAgIHFTb3VuZC5jb25uZWN0KGF1ZGlvQ29udGV4dFEuZGVzdGluYXRpb24pXG4gICAgLy8gfVxuXG4iXSwibmFtZXMiOlsiQXVkaW9CYW5rIiwiQ09OU1RBTlRTIiwiS0VZX0FMUEhBQkVUIiwiQXJyYXkiLCJmcm9tIiwiS2V5RG93bkhhbmRsZXIiLCJjb25zdHJ1Y3RvciIsImtleXMiLCJzb3VuZEJhbmsiLCJjcmVhdGVCYW5rIiwiYWRkTGlzdGVuZXJzIiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbiIsImNvbnNvbGUiLCJsb2ciLCJjb2RlIiwicGxheVEiLCJwbGF5VyIsInBsYXlFIiwicGxheVIiLCJwbGF5VCIsInBsYXlZIiwicGxheVUiLCJwbGF5SSIsInBsYXlPIiwicGxheVAiLCJwbGF5QSIsInBsYXlTIiwicGxheUQiLCJwbGF5RiIsInBsYXlHIiwicGxheUgiLCJwbGF5SiIsInBsYXlLIiwicGxheUwiLCJwbGF5WiIsInBsYXlYIiwicGxheUMiLCJwbGF5ViIsInBsYXlCIiwicGxheU4iLCJwbGF5TSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/key_down_handler.js\n");

/***/ }),

/***/ "./src/index.scss":
/*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguc2Nzcy5qcyIsIm1hcHBpbmdzIjoiO0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qYXZhc2NyaXB0X3Byb2plY3QvLi9zcmMvaW5kZXguc2Nzcz85NzQ1Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/index.scss\n");

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
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	__webpack_require__("./src/index.js");
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.scss");
/******/ 	
/******/ })()
;