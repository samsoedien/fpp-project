import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PrivateRoute from './components/common/PrivateRoute';

import Home from './components/layout/Home';
import Register from './components/auth/RegisterTemp';
import Login from './components/auth/LoginTemp';
import Dashboard from './components/dashboard/Dashboard';
import ProfileFormContainer from './containers/ProfileFormContainer';
import ProfileUpdateContainer from './containers/ProfileUpdateContainer';
import ExperienceFormContainer from './containers/ExperienceFormContainer';
import ProfileListContainer from './containers/ProfileListContainer';
import ProfileContainer from './containers/ProfileContainer';
import PostListContainer from './containers/PostListContainer';
import PostContainer from './containers/PostContainer';
import NotFound from './components/not-found/NotFound';

import RecipeListContainer from './containers/RecipeListContainer';
import RecipeContainer from './containers/RecipeContainer';
import RecipeFormContainer from './containers/RecipeFormContainer';
import IngredientFormContainer from './containers/IngredientFormContainer';
import IngredientContainer from './containers/IngredientContainer';

import NutritionContainer from './containers/NutritionContainer';

import RestaurantListContainer from './containers/RestaurantListContainer';

import ThreeEditorContainer from './containers/ThreeEditorContainer';

import Test from './components/other/Test';

const Routes = () => (
  <main role="main">
    <Route exact path="/" component={Home} />
    <Route exact path="/register" component={Register} />
    <Route exact path="/login" component={Login} />
    <Route exact path="/profiles" component={ProfileListContainer} />
    <Route exact path="/profile/:handle" component={ProfileContainer} />
    <Route exact path="/recipes" component={RecipeListContainer} />
    <Route exact path="/recipes/:id" component={RecipeContainer} />
    <Route exact path="/restaurants" component={RestaurantListContainer} />
    <Route exact path="/ingredients/:id" component={IngredientContainer} />

    <Switch>
      <PrivateRoute exact path="/dashboard" component={Dashboard} />
    </Switch>
    <Switch>
      <PrivateRoute
        exact
        path="/create-profile"
        component={ProfileFormContainer}
      />
    </Switch>
    <Switch>
      <PrivateRoute
        exact
        path="/edit-profile"
        component={ProfileUpdateContainer}
      />
    </Switch>
    <Switch>
      <PrivateRoute exact path="/ingredients" component={IngredientFormContainer} />
    </Switch>
    <Switch>
      <PrivateRoute
        exact
        path="/add-experience"
        component={ExperienceFormContainer}
      />
    </Switch>
    <Switch>
      <PrivateRoute
        exact
        path="/add-nutritions"
        component={NutritionContainer}
      />
    </Switch>
    <Switch>
      <PrivateRoute exact path="/feed" component={PostListContainer} />
    </Switch>
    <Switch>
      <PrivateRoute exact path="/post/:id" component={PostContainer} />
    </Switch>
    <Switch>
      <PrivateRoute
        exact
        path="/create-recipe"
        component={RecipeFormContainer}
      />
    </Switch>
    <Switch>
      <PrivateRoute exact path="/editor" component={ThreeEditorContainer} />
    </Switch>
    <Route exact path="/test" component={Test} />
    <Route exact path="/not-found" component={NotFound} />
  </main>
);

export default Routes;