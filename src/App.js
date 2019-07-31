import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage';
import UserPage from './pages/UserPage';
import RolesPage from './pages/RolesPage';
import NavigationBar from './component/NavigationBar';


function App() {
  return (
    <div className="App">
      <body>
        <BrowserRouter>
          <NavigationBar/>
          <Switch>
            <Route exact path ="/" component={HomePage}/>
            <Route exact path ="/users" component={UserPage}/>
            <Route exact path ="/roles" component={RolesPage}/>
          </Switch>
        </BrowserRouter>
      </body>
    </div>
  );
}

export default App;
