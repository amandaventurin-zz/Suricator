import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Index from "./pages/Index";
import Page from "./pages/Page";

function Routes() {
	return (
		<BrowserRouter>
			<Switch>
				<Route path="/" exact component={Index} />
				<Route path="/page" component={Page} />
			</Switch>
		</BrowserRouter>
	);
}

export default Routes