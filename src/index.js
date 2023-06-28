import React from 'react';
import  ReactDOM  from "react-dom";
import './index.css';
import FormExample from '../src/Component/covid';

ReactDOM.render(<h1>Hello World</h1>,document.getElementById("root"));
ReactDOM.render(React.createElement("h1",null,"HELLO WORLD"),document.getElementById("root"));
var h1=document.createElement("h1");
h1.innerHTML="Hello world";
document.getElementById("root").appendChild(h1);

ReactDOM.render([<FormExample/>],document.getElementById("root"));
