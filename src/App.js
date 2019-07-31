import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage';
import UserPage from './pages/UserPage';
import RolesPage from './pages/RolesPage';
import NavigationBar from './component/NavigationBar';
import ReportsPage from './pages/ReportsPage';
import Footer from './component/Footer';


function App() {
  return (
    <div className="App">
      <body>
        <BrowserRouter>
        <div class="d-flex flex-column">
            <NavigationBar/>
            <Switch>
              <Route exact path ="/" component={HomePage}/>
              <Route exact path ="/users" component={UserPage}/>
              <Route exact path ="/roles" component={RolesPage}/>
              <Route exact path ="/reports" component={ReportsPage}/>
            </Switch>
            <Footer/>
        </div>
        </BrowserRouter>
      </body>
    </div>
  );
}

export default App;
