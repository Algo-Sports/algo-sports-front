import { userConstants } from '../_constants';
import { userService } from '../_services';
import { alertActions } from './';

export const userActions = {
    signin,
    signout,
    signup,
};

function signin(username, password) {
    return dispatch => {
        dispatch(request({ username }));

        userService.signin(username, password)
            .then(
                user => { 
                    dispatch(success(user));
                },
                error => {
                    dispatch(failure(error));
                    dispatch(alertActions.error(error));
                }
            );
    };

    function request(user) { return { type: userConstants.SIGNIN_REQUEST, user } }
    function success(user) { return { type: userConstants.SIGNIN_SUCCESS, user } }
    function failure(error) { return { type: userConstants.SIGNIN_FAILURE, error } }
}

function signout() {
    userService.signout();
    return { type: userConstants.SIGNOUT };
}

function signup(username, email, password1, password2) {
    return dispatch => {
        dispatch(request(username, email, password1, password2));

        userService.signup(username, email, password1, password2)
            .then(
                user => { 
                    dispatch(success());
                    dispatch(alertActions.success('이메일로 전송된 확인 메일 링크를 확인해주세요.'));
                },
                error => {
                    dispatch(failure(error));
                    dispatch(alertActions.error(error));
                }
            );
    };

    function request(user) { return { type: userConstants.SIGNUP_REQUEST, user } }
    function success(user) { return { type: userConstants.SIGNUP_SUCCESS, user } }
    function failure(error) { return { type: userConstants.SIGNUP_FAILURE, error } }
}