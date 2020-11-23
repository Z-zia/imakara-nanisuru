/* eslint-disable */
import React from "react";
import Constants from "../../libs/common/Constants";

// import Constants from "../../libs/common/Constants";
import ContentWrapperTemplate from "../templates/ContentWrapperTemplate";

export default class SettingNormal extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    let mainContent = 
      <div className="col-7 main-content">
        <div className="row">
          <div className="form-flex">
            <input type="text" className="form-control" placeholder="内容を入力" />
            <button className="btn btn-default">追加</button>
          </div>
        </div>
        <div className="row m-2">
          <div className="table-responsive">
            <table className="table table-striped table-bordered table-default bootstrap-customize-table">
              <thead>
                <tr>
                  <th colspan="2" scope="col">普段やること</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>お仕事</td>
                  <td className="tbl-button-cell"><div className="tbl-del-button"><label>削除</label></div></td>
                </tr>
                <tr>
                  <td>プライベート</td>
                  <td className="tbl-button-cell"><div className="tbl-del-button"><label>削除</label></div></td>
                </tr>
                <tr>
                  <td>移動</td>
                  <td className="tbl-button-cell"><div className="tbl-del-button"><label>削除</label></div></td>
                </tr>
                <tr>
                  <td>寝る</td>
                  <td className="tbl-button-cell"><div className="tbl-del-button"><label>削除</label></div></td>
                </tr>
                <tr>
                  <td>飲み会</td>
                  <td className="tbl-button-cell"><div className="tbl-del-button"><label>削除</label></div></td>
                </tr>
                <tr>
                  <td>掃除</td>
                  <td className="tbl-button-cell"><div className="tbl-del-button"><label>削除</label></div></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>            
      </div>;

    return (
      <ContentWrapperTemplate activeLink={Constants.LINK_SETTING_NORMAL} mainContent={mainContent} />
    );
  }
}