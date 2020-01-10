import React from "react";
import {render} from "react-dom";
import {Provider} from "react-redux";
import store from "./store";

import App from "./app/app";//default import
//import {App1} from "./app/app";
//import * as Apps from "./app/app"; // Aliasing
//import {App} from "./app/app";

render(
        <Provider store={store}>
            <App/>
        </Provider>, 
    //<Apps.App1/>, //aliasing
    document.getElementById("root")//hooking up react application to root element of index.html
    );