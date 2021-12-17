import './App.css';
import { Component } from 'react';
import Add from './componets/add';
import Main from './componets/main';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav } from 'react-bootstrap';
import { BrowserRouter as Router, Switch, Route, BrowserRouter } from 'react-router-dom';
import Deadlines from './componets/deadlines';
import Change from './componets/change';

//extend component for future use
//this component is the glue to keep them all together, all others export and imported here
class App extends Component {
  render() {
    return (
      <Router>
        <div className="App" align="center">

          <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="#home">&nbsp;&nbsp;&nbsp;Deadline Tracker</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/deadlines">Deadlines</Nav.Link>
              <Nav.Link href="/add">Add</Nav.Link>
            </Nav>
          </Navbar>

          <br></br>
          <Switch>
            <Route path='/' component={Main} exact />
            <Route path='/add' component={Add} exact />
            <Route path='/deadlines' component={Deadlines} exact />
            <Route path='/change/:id' component={Change}/>
          </Switch>
        </div>
      </Router>
    );
  }//end of class
}//end of render

//export
export default App;
