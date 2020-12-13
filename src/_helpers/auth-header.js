import { BASE_API_URL } from '../_constants';
import { userService } from '../_services';

export function authHeader() {
    // return authorization header with jwt token
    let user = JSON.parse(localStorage.getItem('user'));

    if (user && user.access_token) {
        return { 'Content-Type': 'text/plain', 'Authorization': 'Bearer ' + user.access_token};
    } else {
        return { 'Content-Type': 'text/plain', 'Authorization': 'Bearer '};
    }
}

export function handleTokenResponse(response, URI, options) {
    return response.text().then(async function(text) {
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
                    
                    const refresh_token = JSON.parse(localStorage.getItem("user"))["refresh_token"];
                    
                    const requestOptions = {
                        method : 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body : JSON.stringify({"refresh": refresh_token})
                    }
                
                    return await fetch(`${BASE_API_URL}/auth/token/refresh/`, requestOptions).then(handleResponse)
                    .then(access => {
                        let user = JSON.parse(localStorage.getItem("user"))
                        user.access_token = access.access;
                        localStorage.setItem('user', JSON.stringify(user));
                    }).then(
                        async function() {
                            options.headers = authHeader();
                            const response = await fetch(URI, options)
                            
                            const data = await response.text().then(
                                function(text) {
                                    const data = text && JSON.parse(text);
                                    if(response.ok) {
                                        console.log(data);
                                        return data;
                                    }
                                    else return [];
                                }
                            )

                            return data;
                        }
                    )
                    .catch(
                        error => {
                            return [];
                        }
                    )
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


function handleResponse(response) {
    return response.text().then(text => {
        const data = text && JSON.parse(text);
        if (!response.ok) {
            if (response.status === 401) {
                // auto logout if 401 response returned from api
                userService.signout();
                // eslint-disable-next-line no-restricted-globals
                location.reload(true);
            }
            const error = data || response.statusText;
            return Promise.reject(error);
        }

        return data;
    });
}