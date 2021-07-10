import { BrowserRouter, Switch, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

import Home from "./containers/Home";
import CreateUser from "./containers/CreateUser";
import EditUser from "./containers/EditUser";
import Layout from "./containers/Layout";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Layout>
            <Route exact path="/home" component={Home} />
            <Route exact path="/create-user" component={CreateUser} />
            <Route exact path="/edit-user/:idUser" component={EditUser} />
          </Layout>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
