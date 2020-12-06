import moment from "moment";
import ReduxConstants from "../libs/common/ReduxConstants"

export function pochipochiStart(clsActionList, comments) {
  return function(dispatch) {
    let nowDt = moment()
    let nowHHmm = nowDt.format("HH:mm");
    let pochipochiObj = {
      startTime: nowDt, 
      startTimeLabel: nowHHmm, 
      endTime: null, 
      endTimeLabel: "", 
      timeRequired: "", 
      timeRequiredLabel: "",
      clsActionList: clsActionList, 
      comments: comments};

    dispatch({type: ReduxConstants.POCHIPOCHI_START, payload: pochipochiObj});
  };
}

export function setCommentBox(comments) {
  return function(dispatch) {
    dispatch({type: ReduxConstants.SET_COMMENT_BOX, payload: comments});
  };
}