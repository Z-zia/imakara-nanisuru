/* eslint-disable */
import React from "react";
import { connect } from "react-redux";
import Constants from "../../libs/common/Constants";
import { initToggleOffList } from "../../actions/clsActionActions";
import ToggleNormalButton from "../atoms/ToggleNormalButton";
import ToggleTodoButton from "../atoms/ToggleTodoButton";
import ToggleTostopButton from "../atoms/ToggleTostopButton";
import ContentWrapperTemplate from "../templates/ContentWrapperTemplate";

@connect((store) => {
  return {
    toggleList: store.clsActionReducer.toggleList
  };
})
class PochiPochi extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.dispatch(initToggleOffList());
  }

  render() {
    
    // <ToggleNormalButton buttonText="仕事"></ToggleNormalButton>
    // <ToggleNormalButton buttonText="プライベート"></ToggleNormalButton>
    // <ToggleNormalButton buttonText="移動"></ToggleNormalButton>
    // <ToggleNormalButton buttonText="寝る"></ToggleNormalButton>
    // <ToggleTodoButton buttonText="勉強"></ToggleTodoButton>
    // <ToggleTostopButton buttonText="人に言えないやつ"></ToggleTostopButton>
    // <ToggleTodoButton buttonText="ラン"></ToggleTodoButton>
    // <ToggleTodoButton buttonText="読書"></ToggleTodoButton>
    // <ToggleNormalButton buttonText="飲み会"></ToggleNormalButton>
    // <ToggleNormalButton buttonText="掃除"></ToggleNormalButton>
    // <ToggleTostopButton buttonText="喫煙"></ToggleTostopButton>
    
    // トグルボタンを押下状況のレイアウトで描画
    let toggleButtons = [];
    for (let obj of this.props.toggleList) {
      switch (obj.actionAttr) {
        case Constants.ACTION_ATTR_NORMAL:
          toggleButtons.push(<ToggleNormalButton buttonText={obj.name} actionSelected={obj.toggled}></ToggleNormalButton>);
          break;
        case Constants.ACTION_ATTR_TODO:
          toggleButtons.push(<ToggleTodoButton buttonText={obj.name} actionSelected={obj.toggled}></ToggleTodoButton>);
          break;
        case Constants.ACTION_ATTR_TOSTOP:
          toggleButtons.push(<ToggleTostopButton buttonText={obj.name} actionSelected={obj.toggled}></ToggleTostopButton>);
          break;
        default:
          break;
      }
    }

    let mainContent = 
      <div className="col-7 main-content">
        <div className="row">
          <div className="action-select-button-wrapper">
            {toggleButtons}
          </div>
        </div>
        
        <div className="row">
          <div className="form-flex">
            <input type="text" className="form-control" placeholder="コメントを入れる欄" />
            <button className="btn btn-default">開始！</button>
          </div>            
        </div>
        <div className="row m-2">
          <label>2020/11/08</label>
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
                <tr>
                  <td>11:00</td>
                  <td></td>
                  <td>#お仕事</td>
                  <td>コード書くの楽しい</td>
                  <td></td>
                </tr>
                <tr>
                  <td>13:20</td>
                  <td>13:50</td>
                  <td>#お仕事 #設計</td>
                  <td>IF設計</td>
                  <td>1.5</td>
                </tr>
                <tr>
                  <td>13:20</td>
                  <td>13:50</td>
                  <td>#お仕事 #設計</td>
                  <td>IF設計</td>
                  <td>1.5</td>
                </tr>
                <tr>
                  <td>13:20</td>
                  <td>13:50</td>
                  <td>#お仕事 #設計</td>
                  <td>IF設計</td>
                  <td>1.5</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      
        <div className="row m-2">
          <label>2020/11/07</label>
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
                <tr>
                  <td>11:00</td>
                  <td>13:30</td>
                  <td>#お仕事</td>
                  <td>コード書くの楽しい</td>
                  <td>1.5</td>
                </tr>
                <tr>
                  <td>13:20</td>
                  <td>13:50</td>
                  <td>#お仕事 #設計</td>
                  <td>IF設計</td>
                  <td>1.5</td>
                </tr>
                <tr>
                  <td>13:20</td>
                  <td>13:50</td>
                  <td>#お仕事 #設計</td>
                  <td>IF設計</td>
                  <td>1.5</td>
                </tr>
                <tr>
                  <td>13:20</td>
                  <td>13:50</td>
                  <td>#お仕事 #設計</td>
                  <td>IF設計</td>
                  <td>1.5</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>;

    return (
      <ContentWrapperTemplate activeLink={Constants.LINK_POCHIPOCHI} mainContent={mainContent} />
    );
  }
}
export default PochiPochi;