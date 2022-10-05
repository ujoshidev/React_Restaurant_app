import logo from './logo.svg';
import './App.css';
import { Navbar, NavbarBrand } from 'reactstrap'

function App() {
  return (
    <div className="App">
      <Navbar dark color="primary">
        <div classname="container">
          <NavbarBrand href="/">Restorante Con Confusion</NavbarBrand>
        </div>

      </Navbar>
    </div>
  );
}

export default App;
