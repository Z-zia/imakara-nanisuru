/* eslint-disable */
import React from "react";
import Constants from "../../libs/common/Constants";

// import Constants from "../../libs/common/Constants";
import ContentWrapperTemplate from "../templates/ContentWrapperTemplate";

export default class PochiPochi extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    let mainContent = 
      <div className="col-7 main-content">
        <div className="row">
          <div className="action-select-button-wrapper">
            <div className="action-select-button cls-normal"><label>お仕事</label></div>
            <div className="action-select-button cls-normal"><label>プライベート</label></div>
            <div className="action-select-button cls-normal"><label>移動</label></div>
            <div className="action-select-button cls-normal"><label>寝る</label></div>
            <div className="action-select-button cls-to-do"><label>勉強</label></div>
            <div className="action-select-button cls-to-stop"><label>人に言えないやつ</label></div>
            <div className="action-select-button cls-to-do"><label>ラン</label></div>
            <div className="action-select-button cls-to-do"><label>読書</label></div>
            <div className="action-select-button cls-normal"><label>飲み会</label></div>
            <div className="action-select-button cls-normal"><label>掃除</label></div>
            <div className="action-select-button cls-to-stop"><label>喫煙</label></div>
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