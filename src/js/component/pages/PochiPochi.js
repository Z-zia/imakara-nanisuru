/* eslint-disable */
import moment from "moment";
import React from "react";
import { connect } from "react-redux";
import Constants from "../../libs/common/Constants";
import { pochipochiStart, setCommentBox } from "../../actions/pochipochiActions";
import { initToggleOffList } from "../../actions/clsActionActions";
import AddListButton from "../atoms/AddListButton";
import ToggleNormalButton from "../atoms/ToggleNormalButton";
import ToggleTodoButton from "../atoms/ToggleTodoButton";
import ToggleTostopButton from "../atoms/ToggleTostopButton";
import ContentWrapperTemplate from "../templates/ContentWrapperTemplate";

@connect((store) => {
  return {
    toggleList: store.clsActionReducer.toggleList,
    pochipochiList: store.pochipochiReducer.pochipochiList,
    commentBoxText: store.pochipochiReducer.commentBoxText
  };
})
class PochiPochi extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.dispatch(initToggleOffList());
    this.props.dispatch(setCommentBox(""));
  }

  render() {
    // トグルボタンを押下状況のレイアウトで描画
    let toggleButtons = [];
    for (let obj of this.props.toggleList) {
      switch (obj.actionAttr) {
        case Constants.ACTION_ATTR_NORMAL:
          toggleButtons.push(<ToggleNormalButton buttonText={obj.name} actionSelected={obj.toggled} />);
          break;
        case Constants.ACTION_ATTR_TODO:
          toggleButtons.push(<ToggleTodoButton buttonText={obj.name} actionSelected={obj.toggled} />);
          break;
        case Constants.ACTION_ATTR_TOSTOP:
          toggleButtons.push(<ToggleTostopButton buttonText={obj.name} actionSelected={obj.toggled} />);
          break;
        default:
          break;
      }
    }

    // 表描画
    let tableRows = [];
    for (let pochipochiObj of this.props.pochipochiList) {
      tableRows.push(
        <tr>
          <td className="text-center-justified">{pochipochiObj.startTimeLabel}</td>
          <td className="text-center-justified">{pochipochiObj.endTimeLabel}</td>
          <td className="text-left-justified">{"#" + pochipochiObj.clsActionList.join(" #")}</td>
          <td className="text-left-justified">{pochipochiObj.comments}</td>
          <td className="text-center-justified">{pochipochiObj.timeRequiredLabel}</td>
        </tr>
      );
    }

    // メインペイン
    let mainContent = 
      <div className="col-10 main-content">
        <div className="row">
          <div className="action-select-button-wrapper">
            {toggleButtons}
          </div>
        </div>
        
        <div className="row">
          <div className="form-flex">
            <input type="text" className="form-control" onChange={this.handleTextBox.bind(this)} placeholder="コメントを入れる欄" value={this.props.commentBoxText} />
            <AddListButton buttonText="開始！" invalidButton={this.invalidButton.bind(this)} actionMethod={this.handleStart.bind(this)} />
          </div>            
        </div>
        <div className="row m-2">
          <label>{moment().format("YYYY/MM/DD")}</label>
          <div className="table-responsive">
            <table className="table table-striped table-bordered table-default bootstrap-customize-table">
              <thead>
                <tr>
                  <th scope="col">開始</th>
                  <th scope="col">終了</th>
                  <th scope="col">内容</th>
                  <th scope="col">コメント</th>
                  <th scope="col">時間</th>
                </tr>
              </thead>
              <tbody>
                {tableRows}
              </tbody>
            </table>
          </div>
        </div>
      </div>;

    return (
      <ContentWrapperTemplate activeLink={Constants.LINK_POCHIPOCHI} mainContent={mainContent} />
    );
  }

  // トグルボタンで選択しているものが無ければ開始ボタン無効
  invalidButton() {
    return this.props.toggleList.filter((obj) => obj.toggled == true).length == 0;
  }

  // 開始ボタン押下
  handleStart() {
    let filteredList = this.props.toggleList.filter(toggleObj => toggleObj.toggled);
    this.props.dispatch(pochipochiStart(filteredList.map((obj) => obj.name), this.props.commentBoxText));
    this.props.dispatch(initToggleOffList());
    this.props.dispatch(setCommentBox(""));
  }

  // テキストボックス変更
  handleTextBox(e) {
    this.props.dispatch(setCommentBox(e.target.value));
  }
}
export default PochiPochi;