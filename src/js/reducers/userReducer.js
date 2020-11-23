import Constants from "../libs/common/Constants";
import ReduxConstants from "../libs/common/ReduxConstants";

export default function reducer(state={
  user: {
    username: null,
    token: null,
  }
}, action) {

  switch (action.type) {
    case ReduxConstants.SET_USER: {
      let res = { username: action.payload.username, token: action.payload.token };
      localStorage.setItem(Constants.LOCAL_STORAGE_USER_KEY, JSON.stringify(res));
      
      return res;
    }
  }

  return state;
}