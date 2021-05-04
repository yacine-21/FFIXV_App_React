import { BrowserRouter as Router, Route } from "react-router-dom";

import ScreeLoad from "../../Screens/screenLoad";
import ScreenHome from "../../Screens/screenHome";
import Nav from "../Nav/Nav";
import LoginScreen from '../../Screens/LoginScreen'

function App() {
  return (
    <Router>
        <Route path="/" exact component={ScreeLoad} />
      <Nav/>
        <Route path="/home" component={ScreenHome} />
        <Route path="/login" component={LoginScreen}/>
    </Router>
  );
}

export default App;
