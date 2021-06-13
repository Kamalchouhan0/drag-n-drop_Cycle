import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import ScreenOne from "./component/Screen1/ScreenOne";
import ScreenTwo from "./component/Screen2/ScreenTwo";
import ScreenThree from "./component/Screen3/ScreenThree";
import ScreenFour from "./component/Screen4/ScreenFour";
function App() {
  return (
    <BrowserRouter>
      <div className="Main-container">
        <Switch>
          <Route path="/" component={ScreenOne} exact />
          <Route path="/screenTwo" component={ScreenTwo} />
          <Route path="/screenThree" component={ScreenThree} />
          <Route path="/screenFour" component={ScreenFour} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
