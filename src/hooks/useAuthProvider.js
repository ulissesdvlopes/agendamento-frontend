import { useState } from "react";
import { loginRequest, logoutRequest } from "../services/auth";

export default function useAuthProvider() {

    const [user, setUser] = useState(null);

    const login = async (email, password) => {
        const user = await loginRequest({email, password});
        // console.log('login', user);
        setUser(user);
    }

    const logout = async () => {
        const result = await logoutRequest();
        // console.log('logout', result);
        setUser(null);
    }

    return {
        user,
        login,
        logout,
    }
    
}