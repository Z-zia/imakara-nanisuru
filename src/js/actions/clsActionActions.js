import Constants from "../libs/common/Constants";
import ReduxConstants from "../libs/common/ReduxConstants"

export function initToggleOffList() {
  return function(dispatch) {
    dispatch({type: ReduxConstants.INIT_TOGGLE_OFF_LIST, payload: [
      {name: "仕事", actionAttr: Constants.ACTION_ATTR_NORMAL, toggled: false},
      {name: "プライベート", actionAttr: Constants.ACTION_ATTR_NORMAL, toggled: false},
      {name: "移動", actionAttr: Constants.ACTION_ATTR_NORMAL, toggled: false},
      {name: "寝る", actionAttr: Constants.ACTION_ATTR_NORMAL, toggled: false},
      {name: "勉強", actionAttr: Constants.ACTION_ATTR_TODO, toggled: false},
      {name: "人に言えないやつ", actionAttr: Constants.ACTION_ATTR_TOSTOP, toggled: false},
      {name: "ラン", actionAttr: Constants.ACTION_ATTR_TODO, toggled: false},
      {name: "読書", actionAttr: Constants.ACTION_ATTR_TODO, toggled: false},
      {name: "飲み会", actionAttr: Constants.ACTION_ATTR_NORMAL, toggled: false},
      {name: "掃除", actionAttr: Constants.ACTION_ATTR_NORMAL, toggled: false},
      {name: "喫煙", actionAttr: Constants.ACTION_ATTR_TOSTOP, toggled: false}]});
  };
}

export function toggleClsAction(clsActionName) {
  return function(dispatch) {
    dispatch({type: ReduxConstants.TOGGLE_CLS_ACTION, payload: clsActionName});
  };
}