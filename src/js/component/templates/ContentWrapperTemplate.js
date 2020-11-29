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