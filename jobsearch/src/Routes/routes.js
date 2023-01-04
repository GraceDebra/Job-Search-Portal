import {Route, Switch} from "react-router-dom"
import LandingPage from "../components/Landing/LandingPage.js";
//utility imports

//All Page imports
import Login from "../components/Account/SignIn.js";
const Routes =()=>{


    return(
        <div>
        <Switch>
            <Route exact path="/">
                <LandingPage />
            </Route>
            <Route exact path="/login">
                <Login />
            </Route>
            

        
            {/* No route should be added after this not found page */}
            <Route exact path="*">
             
            </Route>
        </Switch>
        </div>
    )
}
export default Routes;