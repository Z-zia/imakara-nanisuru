import moment from "moment";
import ReduxConstants from "../libs/common/ReduxConstants";

export default function reducer(state={
  pochipochiList: [],
  commentBoxText: ""
}, action) {

  switch (action.type) {
    case ReduxConstants.POCHIPOCHI_START: {
      // 現在時刻
      let nowDt = moment()
      let nowHHmm = nowDt.format("HH:mm");

      // 新しいリストとして生成
      let newPochipochiList = [];
      for (let obj of state.pochipochiList) {
        newPochipochiList.push({...obj});
      }

      // 先頭の前回のアクションを終了させる。時間の差分を設定。
      if (newPochipochiList.length > 0) {
        newPochipochiList[0].endTime = nowDt;
        newPochipochiList[0].endTimeLabel = nowHHmm;

        let durationSec = newPochipochiList[0].endTime.diff(newPochipochiList[0].startTime, "s", true);
        newPochipochiList[0].timeRequired = durationSec;
        newPochipochiList[0].timeRequiredLabel = moment({second: Math.floor(durationSec)}).format("HH:mm:ss");
        // newPochipochiList[0].timeRequiredLabel = Math.floor(durationSec / 3600) +":" + Math.floor(durationSec / 60) +":" + Math.floor(durationSec % 3600);
      }

      // 今回のアクションを先頭に追加する
      newPochipochiList.unshift(action.payload);

      return {...state, pochipochiList: newPochipochiList};
    }
    case ReduxConstants.SET_COMMENT_BOX : {
      return {...state, commentBoxText: action.payload};
    }
  }

  return state;
}