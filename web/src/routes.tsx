//Aqui é onde adiciona novas paginas ao site
//Os nomes dos componentes são declarados nos arquivos da pagina pages


import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Index from "./pages/Index";
import Page from "./pages/Page";

function Routes() {
	return (
		<BrowserRouter>
			<Switch>
				<Route path="/" exact component={Index} />
				<Route path="/lyrics" component={Page} />
			</Switch>
		</BrowserRouter>
	);
}

export default Routes