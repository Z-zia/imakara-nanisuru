/* eslint-disable */
import React from "react";
import { connect } from "react-redux";
import Constants from "../../libs/common/Constants";
import { toggleClsAction } from "../../actions/clsActionActions";
import ToggleButtonTemplate from "../templates/ToggleButtonTemplate";

@connect((store) => {
  return {};
})
class ToggleTodoButton extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ToggleButtonTemplate buttonText={this.props.buttonText} clickAction={this.toggle.bind(this)} buttonStyle={Constants.STYLE_ACTION_ATTR_TODO} />
    );
  }

  toggle(buttonText){
    this.props.dispatch(toggleClsAction(buttonText));
  }
}
export default ToggleTodoButton;