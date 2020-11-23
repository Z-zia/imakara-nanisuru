/* eslint-disable */
import React from "react";

export default class Header extends React.Component {
  render() {
    return (
      <header className="row">
        <div className="col-2 header-left d-flex align-items-center">
          <div>ポチポチロゴ</div>
        </div>
        <div className="col-8 header-title">
          <h1>{this.props.titleName}</h1>
        </div>
        <div className="col-2 header-right d-flex justify-content-end">
          <label>{this.props.userName}</label>
          <i className="fas fa-user-alt"></i>
        </div>
      </header>
    );
  }
}