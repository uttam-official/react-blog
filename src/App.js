import { BrowserRouter as Router,Switch,Route} from "react-router-dom";
import Home from "./pages/home/Home";
import Single from "./pages/single_blog/SingleBlog";
import Login from "./pages/admin/Login";
import Dashboard from "./pages/admin/Dashboard";
import AllBlog from "./pages/admin/blog/AllBlog";
import AddBlog from "./pages/admin/blog/AddBlog";
import Logout from "./pages/admin/Logout";
function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/" component={Home} exact></Route>
          <Route path="/contact" component={Home} exact></Route>
          <Route path="/about" component={Home} exact></Route>
          <Route path="/login" component={Login} exact></Route>
          <Route path="/dashboard" component={Dashboard} exact></Route>
          <Route path="/blog" component={AllBlog} exact></Route>
          <Route path="/logout" component={Logout} exact></Route>
          <Route path="/add/:id" component={AddBlog} exact></Route>
          <Route path="/:id" component={Single}></Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
