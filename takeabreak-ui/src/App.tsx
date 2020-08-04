import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Container from "@material-ui/core/Container";
import { BrowserRouter, Switch, Link, Route } from "react-router-dom";
import routes from "./routes/routes";
import DefaultLayout from "./layout/DefaultLayout";

const RouteWithSubRoutes = (route: any) => {
  return (
    <Route
      path={route.path}
      render={(props) => (
        // pass the sub-routes down to keep nesting
        <route.component {...props} routes={route.routes} />
      )}
    />
  );
};

function App() {
  return (
    <BrowserRouter>
      <Container>
        {/*<div className="App">
       <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div> */}
        <DefaultLayout>
          <div>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/room/:roomId">Room</Link>
              </li>
            </ul>

            <Switch>
              {routes.map((route, i) => (
                <RouteWithSubRoutes key={i} {...route} />
              ))}
            </Switch>
          </div>
        </DefaultLayout>
      </Container>
    </BrowserRouter>
  );
}

export default App;
