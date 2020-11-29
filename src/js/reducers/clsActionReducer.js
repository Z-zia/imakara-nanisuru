import ReduxConstants from "../libs/common/ReduxConstants";

export default function reducer(state={
  toggleList: []
}, action) {

  switch (action.type) {
    case ReduxConstants.INIT_TOGGLE_OFF_LIST: {
      return {...state, toggleList: action.payload}
    }
    case ReduxConstants.TOGGLE_CLS_ACTION: {
      // 新しいリストとして生成
      let newToggleList = [];
      for (let obj of state.toggleList) {
        newToggleList.push({...obj});
      }

      // 該当の項目のみフラグをトグルする
      for (let obj of newToggleList) {
        if (obj.name == action.payload) {
          obj.toggled = !obj.toggled
        }
      }

      return {...state, toggleList: newToggleList};
    }
  }

  return state;
}