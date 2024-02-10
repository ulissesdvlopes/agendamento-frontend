import axios from "axios";
import { serverBaseUrl } from "./config";

// axios.defaults.withCredentials = true;

export async function loginRequest(params) {

    const result = await axios.post(
        `${serverBaseUrl}/auth/login/`,
        params, 
        { withCredentials: true }
    );
    
    console.log(result);
    return result
    
}

export async function register(params) {

    const result = await axios.post(
        `${serverBaseUrl}/auth/register/`,
        params
    );

    console.log(result);

}

export async function logoutRequest() {

    const result = await axios.post(
        `${serverBaseUrl}/auth/logout/`,
        null,
        {withCredentials: true}
    );

    console.log('logout request', result);
    return result;
    
}
