import React from "react";
import Navbars from "./components/Navbars";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Footer from "./components/Footer";
const Homepage = React.lazy(()=>
  import("./components/Homepage")
);
const SinglePage =React.lazy(()=>import("./components/Homepage/SinglePage"));
const App = ()=> {
  return(
  <>
<Router>
<Navbars/>
<React.Suspense fallback={"Loading..."}>
<Switch>

  <Route path="/ReactMovie-Synopsis"  exact component={Homepage}/>
  <Route path="/movies/:id" component={SinglePage} />
</Switch>
</React.Suspense>
<Footer/>
</Router>

   
   </>
  );
};
export default App;