import {userActions} from '../_actions/user.actions';
import { userService } from '../_services';

export function authHeader() {
    // return authorization header with jwt token
    let user = JSON.parse(localStorage.getItem('user'));

    if (user && user.access_token) {
        return { 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + user.access_token};
    } else {
        return { 'Content-Type': 'application/json', 'Authorization': 'Bearer '};
    }
}

export function handleTokenResponse(response) {
    return response.text().then(async function(text) {
        console.log(response);
        const data = text && JSON.parse(text);
        if (!response.ok) {
            if (response.status === 401) {
                // auto logout if 401 response returned from api
                userService.signout();
                // eslint-disable-next-line no-restricted-globals
                location.reload(true);
            }
            if(response.status === 403) {
                if(data.messages !== "undefined" && data.messages[0].token_class === "AccessToken") {
                    const refresh = JSON.parse(localStorage.getItem("user"))["refresh_token"];
                    console.log(refresh);
                    await userService.refresh_token(refresh);
                    return "token_refreshed";
                }
                else{
                    userService.signout();
                    // eslint-disable-next-line no-restricted-globals
                    location.reload(true);
                }
            }
            const error = data || response.statusText;
            return Promise.reject(error);
        }

        return data;
    });
}