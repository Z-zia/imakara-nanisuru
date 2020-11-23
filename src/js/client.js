/* eslint-disable */
import "../css/style.css";
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter, Route } from 'react-router-dom';
import Constants from "./libs/common/Constants";

import PochiPochi from "./component/pages/PochiPochi";
// import SettingNormal from "./component/pages/SettingNormal";
// import SettingToDo from "./component/pages/SettingToDo";
// import SettingToStop from "./component/pages/SettingToStop";
import store from "./store";

const App = document.getElementById('app');

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <Route exact path='/' component={PochiPochi} />
      <Route path={Constants.LINK_POCHIPOCHI} component={PochiPochi} />
      {/* <Route path={Constants.LINK_SETTING_NORMAL} component={SettingNormal} />
      <Route path={Constants.LINK_SETTING_TODO} component={SettingToDo} />
      <Route path={Constants.LINK_SETTING_TOSTOP} component={SettingToStop} /> */}
    </Provider>
  </BrowserRouter>, App);