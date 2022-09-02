"use strict";
exports.id = 789;
exports.ids = [789];
exports.modules = {

/***/ 5789:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);



const contentContainer = {
    border: "1px solid #2a2a2a",
    boxShadow: "0 0 5px #b1b1b1",
    marginTop: "20px",
    padding: "0 0px 90px",
    backgroundColor: "#ffffff",
    width: "720px",
    margin: "auto",
    height: "80vh",
    margin: "20px",
    overflow: "hidden"
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((props)=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        style: contentContainer,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                    children: "My NEXT Portfolio"
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("header", {
                className: "navigation",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                        href: "/",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                            children: "About Me"
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                        href: "/projects",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                            children: "Projects"
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                        href: "/contact",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                            children: "Contact"
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("style", {
                        children: `
         body {
            font-size: 15px;
            font-family: Helvetica, sans-serif;
            line-height: 1.5;
            background: #D1D1D1;
            margin: 0px;
         }

         #__next {
            margin: auto;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: row;
            height: 100vh;
         }

         .navigation {
               overflow: hidden;
               background-color: #333;
             }
             p {
               background-color: whitesmoke;
               padding: 10px;
             }
             
             .navigation a {
               float: left;
               color: #f2f2f2;
               text-align: center;
               padding: 14px 16px;
               text-decoration: none;
               font-size: 17px;
             }
             
             .navigation a:hover {
               background-color: #ddd;
               color: black;
             }
             
             .navigation a.active {
               background-color: #04AA6D;
               color: white;
            }
            
            .children {
               padding: 20px;
               max-height: 740px;
               overflow: auto;
            }
            .card {
               box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
               transition: 0.3s;
               width: 300px;
               margin: 10px;
               padding: 5px;
             }
             
             .card:hover {
               box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
             }
             
             .card-container {
               padding: 2px 16px;
             }
             .cards{
               display: flex;
               flex-direction: row;
               flex-wrap: wrap;
               justify-content: space-evenly;
             }

             .all-cards-container {

             }
         
         `
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "children",
                children: props.children
            })
        ]
    });
});


/***/ })

};
;