import { useState } from "react";
import { loginRequest, logoutRequest, registerRequest } from "../services/auth";

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

    const register = async (payload) => {
        const user = await registerRequest(payload);
        // console.log('login', user);
        setUser(user);
    }

    return {
        user,
        login,
        logout,
        register,
    }
    
}