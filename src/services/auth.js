import axios from "axios";
import { serverBaseUrl } from "./config";

// axios.defaults.withCredentials = true;

export async function loginRequest(params) {

    const result = await axios.post(
        `${serverBaseUrl}/auth/login/`,
        params, 
        { withCredentials: true }
    );

    return result
    
}

export async function registerRequest(params) {

    const result = await axios.post(
        `${serverBaseUrl}/auth/register/`,
        params,
        { withCredentials: true }
    );

    return result;

}

export async function logoutRequest() {

    const result = await axios.post(
        `${serverBaseUrl}/auth/logout/`,
        null,
        {withCredentials: true}
    );

    return result;
    
}
