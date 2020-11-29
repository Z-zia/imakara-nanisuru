/* eslint-disable */
import React from "react";
import { connect } from "react-redux";
import Constants from "../../libs/common/Constants";
import { toggleClsAction } from "../../actions/clsActionActions";
import ToggleButtonTemplate from "../templates/ToggleButtonTemplate";

@connect((store) => {
  return {};
})
class ToggleTostopButton extends React.Component {
  render() {
    return (
      <ToggleButtonTemplate buttonText={this.props.buttonText} clickAction={this.toggle.bind(this)} buttonStyle={Constants.STYLE_ACTION_ATTR_TOSTOP} actionSelected={this.props.actionSelected} />
    );
  }

  toggle(buttonText){
    this.props.dispatch(toggleClsAction(buttonText));
  }
}
export default ToggleTostopButton;