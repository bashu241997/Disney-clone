import React from "react";
import Header from "./components/header";
import Home from "./components/home";
import "./App.css";
import {
  Routes,
  Route,
  BrowserRouter as Router,
  useLocation,
  Navigate,
} from "react-router-dom";
import Detail from "./components/details";
import Login from "./components/login";
import List from "./components/List";
import Series from "./components/Series";
import Originals from "./components/originals";
import WatchList from "./components/Watchlist";
function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Routes>
              <Route path="/" element={ <RequireAuth><Header /></RequireAuth>}>
                <Route index element={<RequireAuth><Home /></RequireAuth>} />
                <Route path="/movies" element={<RequireAuth><List /></RequireAuth>} />
                <Route path="/series" element={<RequireAuth><Series /></RequireAuth>} />
                <Route path="/originals" element={<RequireAuth><Originals /></RequireAuth>} />
                <Route path="/watchlist" element={<RequireAuth><WatchList /></RequireAuth>} />
                <Route path="/details/:id" element={<RequireAuth><Detail /></RequireAuth>} />
              </Route>
            <Route path="/login" element={<Login />} />
          </Routes>
        </Router>
      </AuthProvider>
    </div>
  );
}

const fakeAuthProvider = {
  isAuthenticated: false,
  signin(callback) {
    fakeAuthProvider.isAuthenticated = true;
    setTimeout(callback, 100); // fake async
  },
  signout(callback) {
    fakeAuthProvider.isAuthenticated = false;
    setTimeout(callback, 100);
  },
};
let AuthContext = React.createContext(null);

function AuthProvider({ children }) {
  let [user, setUser] = React.useState(null);

  let value = { user,setUser };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  return React.useContext(AuthContext);
}
function RequireAuth({ children }) {
  let auth = useAuth();
  let location = useLocation();
  const Data = sessionStorage.getItem("token")
  if(Data && Data.length > 5){
    auth.setUser(Data)
  }
  if ( !auth.user  || !Data ) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
}
export default App;
