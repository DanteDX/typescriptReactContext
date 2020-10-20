import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import NavBar from "./components/navbar/NavBar";
import Form from "./components/Form";
import News from "./components/News";
import PostContextProvider from "./contexts/PostContext";
import store from "./store";
import { Provider } from "react-redux";

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <PostContextProvider>
          <div className="appContent">
            <p>This is the app root component</p>
            <NavBar />
            <Switch>
              <Route exact path="/form" component={Form} />
              <Route exact path="/news" component={News} />
            </Switch>
          </div>
        </PostContextProvider>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
