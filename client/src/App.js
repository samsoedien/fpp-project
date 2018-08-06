import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import jwtDecoded from 'jwt-decode';
import setAuthToken from './utils/setAuthToken';
import { setCurrentUser, logoutUser } from './actions/authActions';
import { clearCurrentProfile } from './actions/profileActions';

import store from './store';
//import logo from './logo.svg';
import './App.css';

import PrivateRoute from './components/common/PrivateRoute';

import Navbar from './components/layout/Navbar';
import Landing from './components/layout/Landing';
import Footer from './components/layout/Footer';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import Dashboard from './components/dashboard/Dashboard';
import CreateProfile from './components/create-profile/CreateProfile';
import EditProfile from './components/edit-profile/EditProfile';
import AddExperience from './components/add-credentials/AddExperience';
import AddEducation from './components/add-credentials/AddEducation';
import Profiles from './components/profiles/Profiles';
import Profile from './components/profile/Profile';
import NotFound from './components/not-found/NotFound';

// Check for Token
if (localStorage.jwtToken) {
    // Set auth token header auth
    setAuthToken(localStorage.jwtToken);
    // Decode token and get user info
    const decoded = jwtDecoded(localStorage.jwtToken);
    // Set user and is authenticated
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
            <div className="app">
                <Navbar />
                <Route exact path="/" component={Landing} />
                <div className="container">
                    <Route exact path="/register" component={Register} />
                    <Route exact path="/login" component={Login} />
                    <Route exact path="/profiles" component={Profiles} />
                    <Route exact path="/profile/:handle" component={Profile} />
                    <Switch>
                        <PrivateRoute exact path="/dashboard" component={Dashboard} />
                    </Switch>
                    <Switch>
                        <PrivateRoute exact path="/create-profile" component={CreateProfile} />
                    </Switch>
                    <Switch>
                        <PrivateRoute exact path="/edit-profile" component={EditProfile} />
                    </Switch>
                    <Switch>
                        <PrivateRoute exact path="/add-experience" component={AddExperience} />
                    </Switch>
                    <Switch>
                        <PrivateRoute exact path="/add-education" component={AddEducation} />
                    </Switch>
                    <Route exact path="/not-found" component={NotFound} />

                </div>
                <Footer />
            </div>
        </Router>
    </Provider>
);

export default App;
