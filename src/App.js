import { BrowserRouter as Router,Switch,Route} from "react-router-dom";
import Home from "./pages/home/Home";
import Single from "./pages/single_blog/SingleBlog";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/" component={Home} exact></Route>
          <Route path="/:id" component={Single}></Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
