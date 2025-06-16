
import React from "react";
import ReactDOM from "react-dom/client";

const parent=React.createElement("h1",{id:"parent"},"This is from react");
   




console.log(parent); //object

const root= ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);

