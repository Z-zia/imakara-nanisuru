/* eslint-disable */
import React from "react";
import Menu from "./Menu"
import Constants from "../../libs/common/Constants";
import {Container, Row, Col} from 'react-bootstrap';


// import Constants from "../../libs/common/Constants";
// import Loader from "./Loader";
// import ContentWrapperTemplate from "../templates/ContentWrapperTemplate";

export default class PochiPochi extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      data: {}
    };
  }
  componentWillMount() {
    this.setState({
        loading: false,
        data: {}
    });
  }
  render() {
    
  //   <ul>
  //   <li><a href="index.html">ポチポチ</a></li>
  //   <li><a href="setting_normal.html">普段やること</a></li>
  //   <li><a href="setting_to_do.html">やりたいこと</a></li>
  //   <li><a href="setting_to_stop.html">やめたいこと</a></li>
  // </ul>
    return (
      <div className="container-fluid">
        <header className="row">
          <div className="col-2 header-left d-flex align-items-center">
            <div>ポチポチロゴ</div>
          </div>
          <div className="col-8 header-title">
            <h1>いまからなにする</h1>
          </div>
          <div className="col-2 header-right d-flex justify-content-end">
            <label>ミズノ</label>
            <i className="fas fa-user-alt"></i>
          </div>
        </header>
        <div className="row contents-row">
          <div className="col-2 left-nav">
            <nav>
              <Menu activeLink={Constants.LINK_POCHIPOCHI}></Menu>
            </nav>
          </div>
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
          </div>
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