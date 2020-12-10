import { userConstants, tokenConstants } from '../_constants';

let user = JSON.parse(localStorage.getItem('user'));
const initialState = user ? { loggedIn: true, user } : {};

export function authentication(state = initialState, action) {
  switch (action.type) {
    case userConstants.SIGNIN_REQUEST:
      return {
        loggingIn: true,
        user: action.user
      };
    case userConstants.SIGNIN_SUCCESS:
      return {
        loggedIn: true,
        user: action.user
      };
    case userConstants.SIGNIN_FAILURE:
      return {};
    case userConstants.SIGNOUT:
      return {};
    
    case tokenConstants.REFRESH_TOKEN_REQUEST:
      return {
        loggedIn : true,
        user : {
          ...this.state.user,
          access_token: action.access,
        }
      }
    case tokenConstants.REFRESH_TOKEN_SUCCESS:
      return {
        loggedIn : true,
        user : {
          ...this.state.user,
          access_token: action.access,
        }
      }
    case tokenConstants.REFRESH_TOKEN_FAILURE:
      return {};
    default:
      return state
  }
}