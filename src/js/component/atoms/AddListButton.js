/* eslint-disable */
import React from "react";
import { connect } from "react-redux";

@connect((store) => {
  return {
    toggleList: store.clsActionReducer.toggleList
  };
})
class AddListButton extends React.Component {
  render() {
    // 親コンポーネントの判定条件にて、活性/非活性を切り替える。
    let classNames = ["add-list-button"]
    if (this.props.invalidButton()) {
      classNames.push("add-list-button-invalid")
    } else {
      classNames.push("add-list-button-valid");
    }

    return (
      <div className={classNames.join(" ")} onClick={this.clickEvent.bind(this)}>{this.props.buttonText}</div>
    );
  }

  clickEvent() {
    if (!this.props.invalidButton()) {
      this.props.actionMethod();
    }
  }
}
export default AddListButton;