import { BrowserRouter as Router, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import ScreeLoad from "../../Screens/screenLoad";
import ScreenHome from "../../Screens/screenHome";
import Nav from "../Nav/Nav";
import LoginScreen from '../../Screens/LoginScreen'
import CreateAccountScreen from '../../Screens/CreateAccountScreen'
import MainScreen from "../../Screens/MainScreen"
import LoreScreen from "../../Screens/LoreScreen"
import LodestoneScreen from "../../Screens/lodestoneScreen"
import DeepDungeonScreen from "../../Screens/DeepDungeonScreen"
import SearchPlayerScreen from "../../Screens/SearchPlayerScreen"
import PatchListScreen from "../../Screens/patchListScreen"

function App() {
  return (
    <Router>
        <Route path="/" exact component={ScreeLoad} />
      <Nav/>
        <Route path="/home" component={ScreenHome} />
        <Route path="/login" component={LoginScreen}/>
        <Route path="/createAccount" component={CreateAccountScreen}/>
        <Route path="/main" component={MainScreen} />
        <Route path="/lore" component={LoreScreen} />
        <Route path="/lodestone" component={LodestoneScreen} />
        <Route path="/deepDungeon" component={DeepDungeonScreen} />
        <Route path="/searchPlayer" component={SearchPlayerScreen} />
        <Route path="/patchList" component={PatchListScreen} />
    </Router>
  );
}

export default App;
