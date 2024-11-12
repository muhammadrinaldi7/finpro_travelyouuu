import { useState, useCallback } from "react";
import axiosClient from "@/api/axiosClient";
import  Cookies from "js-cookie";
import { useUserStore } from "@/store/userStore";

interface ApiResponse {
    code: string;
    data: Login;
    message: string;
    status: string;
    token:string;
  }

interface PayloadLogin {
    email: string;
    password: string;
}
interface Login {
    id: string;
    name: string;
    email: string;
    role: string;
    profilePictureUrl: string;
    phoneNumber: string;
}

interface Register {
    name: string;
    email: string;
    password: string;
    passwordRepeat: string;
    role: string;
    profilePictureUrl: string;
    phoneNumber: string;
}
const useAuth = (url: string) => {
    
    const {setToken,setUser} = useUserStore()
    const [data, setData] = useState<Login | null>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const login = (async (payload: PayloadLogin) => {
        setLoading(true);
        setError(null);
        await axiosClient.post<ApiResponse>(url, payload).then((response) => {
            setData(response.data.data);
            setUser(response.data.data);
            setToken(response.data.token);
            Cookies.set("token", response.data.token, { expires: 7 });
        }).catch((error) => {
            setError(error.response.data.message);
        }).finally(() => {
            setLoading(false);
        })
        
    });

    const register = useCallback(async (payload: Register) => {
        setLoading(true);
        setError(null);

        try {
            const response = await axiosClient.post("/register", payload);
            setData(response.data);
        } catch (err) {
            setError(err instanceof Error ? err.message : "An error occurred");
        } finally {
            setLoading(false);
        }
    }, []);
    

    return { login, register, data, loading, error };
};

export default useAuth;