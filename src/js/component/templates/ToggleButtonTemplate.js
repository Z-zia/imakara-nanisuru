/* eslint-disable */
import React from "react";

export default class ToggleButtonTemplate extends React.Component {
  render() {
    let classNames = ['action-select-button']
    if (this.props.actionSelected) {
      classNames.push(this.props.buttonStyle + '-selected')
    } else {
      classNames.push(this.props.buttonStyle)
    }

    return (
      <div className={classNames.join(" ")} onClick={this.clickEvent.bind(this)}><label>{this.props.buttonText}</label></div>
    );
  }

  clickEvent() {
    // クリックされたら、フラグをトグルするアクション発火
    this.props.clickAction(this.props.buttonText);
  }
}