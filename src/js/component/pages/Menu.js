/* eslint-disable */
import React from "react";
import Constants from "../../libs/common/Constants";
import MenuTemplate from "../templates/MenuTemplate";

export default class Menu extends React.Component {

  render() {
    let pages = new Map ([
      [Constants.LINK_POCHIPOCHI, "ポチポチ"],
      [Constants.LINK_SETTING_NORMAL, "普段やること"],
      [Constants.LINK_SETTING_TODO, "やりたいこと"],
      [Constants.LINK_SETTING_TOSTOP, "やめたいこと"],
    ]);
    return (
      <MenuTemplate pages={pages} activeLink={this.props.activeLink} />
    );
  }
}