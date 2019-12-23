import React from "react";
import {render} from "react-dom";

import App from "./app/app";
//import {App} from "./app/app";

render(
    <App />,
    document.getElementById("root")//hooking up react application to root element of index.html
)