/* eslint-disable */
import React from "react";
import Menu from "../pages/Menu"
import Header from "../organisms/Header"
import Constants from "../../libs/common/Constants";

export default class ContentWrapperTemplate extends React.Component {
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
        </div>
      </div>
    );
  }
}