import React from "react";
import ReactDOM from "react-dom/client";


// const heading = React.createElement(
//     "h1",
//      {id:"heading"}, "Hello World!");
//     const root = ReactDOM.createRoot(document.getElementById("root"));
//     root.render(heading);



/**
 * <div id ="parent">
 *      <div id =" child">
 *          <h1> Hey I am h1 </h1>
 *      </div>
 * </div>
 * 
 * ReactElement is basically an object which gets converted to html for browser:-
 *  React.createElement creates a JS object 
 * ReactDOM.createRoot converts the object to html
 */



// const parent = React.createElement("div", {id:"parent"},
//                React.createElement("div", {id:"child"}, [ 
//                 React.createElement("h1", {}, "hey "),
//                 React.createElement("h2", {},"hey")]) );

//     const root = ReactDOM.createRoot(document.getElementById("root"));
//                 root.render(parent);

const jsxHeading = <h1 className="head"> Namaste</h1>
console.log(jsxHeading);
    const root = ReactDOM.createRoot(document.getElementById("root"));
    console.log( root);            
    root.render(jsxHeading);