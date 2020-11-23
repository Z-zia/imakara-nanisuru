/* eslint-disable */
import React from "react";
// import { connect } from "react-redux";

import Menu from "../pages/Menu"
import Header from "../organisms/Header"
import Constants from "../../libs/common/Constants";
// import Loader from "../pages/Loader";
// import { setUser } from "../../actions/userActions";

// @connect((store) => {
//   return {
//     username: store.userReducer.username,
//     // token: store.userReducer.token
//   };
// })
export default class ContentWrapperTemplate extends React.Component {

  // componentDidMount() {
  //   if (this.props.location && this.props.location.search) {
  //     const params = new URLSearchParams(this.props.location.search);
  //     const username = params.get('username');
  //     const token = params.get('token');

  //     this.props.dispatch(setUser(username, token));

  //   } else if (this.props.username == undefined) {
  //     let lsUser = localStorage.getItem(Constants.LOCAL_STORAGE_USER_KEY);
  //     if (lsUser) {
  //       lsUser = JSON.parse(lsUser);
  //       this.props.dispatch(setUser(lsUser.username, lsUser.token));
  //     }
  //   }
  // }

  render() {
    return (
      <div className="container-fluid">
        <Header titleName={"いまからなにする"} userName={"ミズノ"} />
        <div className="row contents-row">
          <div className="col-2 left-nav">
            <nav>
              <Menu/>
            </nav>
          </div>
          {this.props.mainContent}
          <div className="col-3 right-content">
            <div className="chart-select-button-wrapper">
              <div className="chart-select-button chart-selected"><label>今週</label></div>
              <div className="chart-select-button"><label>今月</label></div>
              <div className="chart-select-button"><label>期間<br/>指定</label></div>
            </div>
            <div className="chart-container">
              <canvas id="doudattaChart"></canvas>
            </div>
          </div>
        </div>
      </div>
    );
  }
}