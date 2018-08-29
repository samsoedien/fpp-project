import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import jwtDecode from 'jwt-decode';
import setAuthToken from './utils/setAuthToken';
import { setCurrentUser, logoutUser } from './actions/authActions';
import { clearCurrentProfile } from './actions/profileActions';

import store from './store';

import PrivateRoute from './components/common/PrivateRoute';

import Navbar from './components/layout/Navbar';
import NavbarComponent from './components/layout/NavbarComponent';
import Footer from './components/layout/Footer';
import Landing from './components/layout/Landing';
import Home from './components/front-page/Home';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import Dashboard from './components/dashboard/Dashboard';
import CreateProfile from './components/create-profile/CreateProfile';
import EditProfile from './components/edit-profile/EditProfile';
import AddExperience from './components/add-credentials/AddExperience';
import ProfileListContainer from './containers/ProfileListContainer';
import ProfileContainer from './containers/ProfileContainer';
import Profile from './components/profiles/Profile';
import Posts from './components/posts/Posts';
import PostsContainer from './containers/PostsContainer';
import Post from './components/post/Post';
import NotFound from './components/not-found/NotFound';

import Recipes from './components/recipes/Recipes';
import CreateRecipe from './components/create-recipe/CreateRecipe';
import Recipe from './components/recipe/Recipe';

import Test from './components/other/Test';

import './App.css';

// Check for token
if (localStorage.jwtToken) {
  // Set auth token header auth
  setAuthToken(localStorage.jwtToken);
  // Decode token and get user info and exp
  const decoded = jwtDecode(localStorage.jwtToken);
  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));

  // Check for expired token
  const currentTime = Date.now() / 1000;
  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logoutUser());
    // Clear current Profile
    store.dispatch(clearCurrentProfile());
    // Redirect to login
    window.location.href = '/login';
  }
}

const App = () => (
  <Provider store={store}>
    <Router>
      <div className="App">
        <Navbar />
        <Route exact path="/" component={Home} />
        <main role="main">
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/profiles" component={ProfileListContainer} />
          <Route exact path="/profile/:handle" component={ProfileContainer} />
          <Route exact path="/recipes" component={Recipes} />
          <Route exact path="/recipes/:id" component={Recipe} />
          <Switch>
            <PrivateRoute exact path="/dashboard" component={Dashboard} />
          </Switch>
          <Switch>
            <PrivateRoute
              exact
              path="/create-profile"
              component={CreateProfile}
            />
          </Switch>
          <Switch>
            <PrivateRoute
              exact
              path="/edit-profile"
              component={EditProfile}
            />
          </Switch>
          <Switch>
            <PrivateRoute
              exact
              path="/add-experience"
              component={AddExperience}
            />
          </Switch>
          <Switch>
            <PrivateRoute exact path="/feed" component={PostsContainer} />
          </Switch>
          <Switch>
            <PrivateRoute exact path="/post/:id" component={Post} />
          </Switch>
          <Switch>
            <PrivateRoute
              exact
              path="/create-recipe"
              component={CreateRecipe}
            />
          </Switch>
          <Route exact path="/test" component={Test} />
          <Route exact path="/not-found" component={NotFound} />
        </main>
        <Footer />
      </div>
    </Router>
  </Provider>
);

export default App;
