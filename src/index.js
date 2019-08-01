import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import App from "./component/App";

const Index = () => {
    return (
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    )
};

ReactDOM.render(<Index />, document.getElementById("react-root"));
