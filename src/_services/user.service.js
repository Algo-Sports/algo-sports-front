import { authHeader } from '../_helpers';
import { BASE_API_URL } from '../_constants/api.constants';

export const userService = {
    signin,
    signout,
    signup,
    getById,
    refresh_token,
};

function signin( email, password) {
    localStorage.removeItem('user');

    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ "email": email, "password": password })
    };

    return fetch(`${BASE_API_URL}/auth/login/`, requestOptions)
        .then(handleResponse)
        .then(user => {
            localStorage.setItem('user', JSON.stringify(user));
            return user;
        })
}

function signout() {
    // remove user from local storage to log user out
    localStorage.removeItem('user');
}

function getById(id) {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };

    return fetch(`${BASE_API_URL}/users/${id}`, requestOptions).then(handleResponse);
}

function signup(username, email, password1, password2) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({"email" : email,"username": username,"password1": password1,"password2": password2})
    };

    return fetch(`${BASE_API_URL}/auth/registration/`, requestOptions).then(handleResponse);
}

function refresh_token(refresh_token) {
    const requestOptions = {
        method : 'POST',
        headers: { 'Content-Type': 'application/json' },
        body : JSON.stringify({"refresh": refresh_token})
    }

    return fetch(`${BASE_API_URL}/auth/token/refresh/`, requestOptions).then(handleResponse)
    .then(access => {
        console.log(access);
        let user = JSON.parse(localStorage.getItem("user"))
        user.access_token = access.access;
        localStorage.setItem('user', JSON.stringify(user));
        return user;
    })
}

// function getAll() {
//     const requestOptions = {
//         method: 'GET',
//         headers: authHeader()
//     };

//     return fetch(`${BASE_API_URL}/users`, requestOptions).then(handleResponse);
// }

// function update(user) {
//     const requestOptions = {
//         method: 'PUT',
//         headers: { ...authHeader(), 'Content-Type': 'application/json' },
//         body: JSON.stringify(user)
//     };

//     return fetch(`${BASE_API_URL}/users/${user.id}`, requestOptions).then(handleResponse);;
// }

// prefixed function name with underscore because delete is a reserved word in javascript
// function _delete(id) {
//     const requestOptions = {
//         method: 'DELETE',
//         headers: authHeader()
//     };

//     return fetch(`${BASE_API_URL}/users/${id}`, requestOptions).then(handleResponse);
// }

function handleResponse(response) {
    return response.text().then(text => {
        const data = text && JSON.parse(text);
        if (!response.ok) {
            if (response.status === 401) {
                // auto logout if 401 response returned from api
                signout();
                // eslint-disable-next-line no-restricted-globals
                location.reload(true);
            }
            const error = data || response.statusText;
            return Promise.reject(error);
        }

        return data;
    });
}