import React from "react";
import ReactDom from "react-dom/client";
import Header from "./Assignments/03-Assignment/Header/Header.jsx";

const title = React.createElement(
    "h1",
    {id:"title"},
    "Hello World from React"
)

// JSX (transpiled to React.createElement) => ReactElement => Js Object => HTML element render

// (transpiled before it reaches the browser, usually by Babel or a similar tool)

// JSX => React.createElement =>ReactElement => Js Object => HTML element render

// single line JSX => <h1>Hello World from React</h1>
// multi line JSX =>  Wrapped (<h1 id="heading">
// \Hello World from React
// </h1>)
// React element
const headingJSX = (

  <h1  className="heading">
    This is JSX
  </h1>
);
// console.log(heading);//object


// Functional Component: returns a react element -> JSX




const HeadingComponent2 =() =>{
    return <h1 id="heading">h1 from functional Component 2</h1>
}

const data = "This is 100 data from variable";
const HeadinComponent= () =>{
    return (
    <>
    <h1>{console.log("xbsidoifjdas")}</h1>
    <h2>{1000+2}</h2>
    <h3>{data}</h3>
    {title}
    <HeadingComponent2></HeadingComponent2>
   <h1>h1 from functional Component</h1>
   </>
    )
    
}
console.log(headingJSX); //object
console.log(title); //object

const root = ReactDom.createRoot(document.getElementById("root"));
root.render(<Header/>);
