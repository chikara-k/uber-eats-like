import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

// components
import { Restaurants } from './containers/Restaurants.jsx';
import { Foods } from './containers/Foods.jsx';
import { Orders } from './containers/Orders.jsx';

function App() {
  return (
    <Router>
      <Switch>
        <Route
// (exact={true}と明示しなくても、exactとするだけでOK)ことで、PATHの完全一致の場合にのみコンポーネントをレンダリング
          exact
          path="/restaurants"
        >
          <Restaurants />
        </Route>

        <Route
          exact
          path="/foods"
        >
          <Foods />
        </Route>
        
        <Route
          exact
          path="/orders"
        >
          <Orders />
        </Route>

        <Route
          exact
          path="/restaurants/:restaurantsId/foods"
          render={({ match }) =>
            <Foods
              match={match}
            />
        }
        />
      </Switch>
    </Router>
  );
}

export default App;
