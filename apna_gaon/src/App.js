import Navbar from "./component/Navbar";
import Home from "./component/Home";
import Contacts from './component/Contacts'
import Sentsms from "./component/Sentsms";
import Composesms from './component/Composesms'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Router>
        <Routes>
          <Route exact path='/' element={<Home/>}></Route>
          <Route exact path='/contacts' element={< Contacts/>}></Route>
          <Route exact path='/sended' element={< Sentsms />}></Route>
          <Route exact path='/compose' element={<Composesms />}></Route>
        </Routes>
      </Router>

    </div>
  );
}

export default App;
