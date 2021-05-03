import { BrowserRouter as Router, Route } from "react-router-dom";

import ScreeLoad from "../../Screens/screenLoad";
import ScreenHome from "../../Screens/screenHome";

function App() {
  return (
    <Router>
      <>
        <Route path="/" exact component={ScreeLoad} />
        <Route path="/home" component={ScreenHome} />
      </>
    </Router>
  );
}

export default App;
