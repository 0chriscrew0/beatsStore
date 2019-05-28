import React from "react";
import { Switch, Route } from "react-router-dom";

import Layout from "./hoc/Layout";
import ScrollToTop from "./components/Utils/ScrollToTop";
import AuthRoute from "./hoc/AuthRoute";

import Home from "./components/Home";
import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";

import Account from "./components/User/Account";
import AddProduct from "./components/User/Admin/AddProduct";
import Shop from "./components/Shop";
import Cart from "./components/User/Cart";
import ManageArtists from "./components/User/Admin/ManageArtists";
import ManageGenres from "./components/User/Admin/ManageGenres";

const Routes = () => {
  return (
    <Layout>
      <ScrollToTop />
      <Switch>
        <Route path="/" component={AuthRoute(Home, null)} exact />
        <Route path="/shop" component={AuthRoute(Shop, null)} />
        <Route path="/user/account" component={AuthRoute(Account, true)} />
        <Route path="/user/cart" component={AuthRoute(Cart, true)} />
        <Route
          path="/admin/add-product"
          component={AuthRoute(AddProduct, true)}
        />
        <Route
          path="/admin/manage-artists"
          component={AuthRoute(ManageArtists, true)}
        />
        <Route
          path="/admin/manage-genres"
          component={AuthRoute(ManageGenres, true)}
        />

        <Route path="/login" component={AuthRoute(Login, false)} />
        <Route path="/register" component={AuthRoute(Register, false)} />
      </Switch>
    </Layout>
  );
};

export default Routes;
