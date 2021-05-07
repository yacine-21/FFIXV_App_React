import { BrowserRouter as Router, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import ScreeLoad from "../../Screens/screenLoad";
import ScreenHome from "../../Screens/screenHome";
import Nav from "../Nav/Nav";
import LoginScreen from '../../Screens/LoginScreen'
import CreateAccountScreen from '../../Screens/CreateAccountScreen'
import MainScreen from "../../Screens/MainScreen"

function App() {
  return (
    <Router>
        <Route path="/" exact component={ScreeLoad} />
      <Nav/>
        <Route path="/home" component={ScreenHome} />
        <Route path="/login" component={LoginScreen}/>
        <Route path="/createAccount" component={CreateAccountScreen}/>
        <Route path="/main" component={MainScreen} />
    </Router>
  );
}

export default App;
