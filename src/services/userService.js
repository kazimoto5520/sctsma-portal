import axios from "axios"

const axiosInstance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_BASE_AUTH_URL,
    headers: {
        // 'Authorization': `Bearer asdddd`,
        'Accept': 'application/json',
        'Content-Type': 'application/json',
    },
    timeout: 60000,
});

// Request interceptor
axiosInstance.interceptors.request.use(
    config => {
        // Log request details or modify request config here
        console.log('Request sent:', config);
        return config;
    },
    error => {
        // Handle request error here
        return Promise.reject(error);
    }
);

axiosInstance.interceptors.request.use(function(config) {
    // change the url scheme from http to https
    config.url = config.url.replace('http://', 'https://')

    return config
})
// Response interceptor
axiosInstance.interceptors.response.use(
    response => {
        // Log response details or modify response data here
        console.log('Response received:', response);
        return response;
    },
    error => {
        // Handle response error here
        console.log('Response error:', error);
        return Promise.reject(error);
    }
);

export const registerUser = async (userData) =>{
    try {
        const response = await axios.post(process.env.NEXT_PUBLIC_BASE_AUTH_URL + "/register", userData, {
            headers: {
             "Content-Type": "application/json",
            }
        });
        return response.data;
    } catch (error) {
        if(error.response){
            throw error.response.data;
        }else{
            throw new Error("Error registering user");
        }
    }
}

export const loginUser = async (userData) =>{
    console.log("userData");
    try {
        console.log(process.env.NEXT_PUBLIC_BASE_AUTH_URL);
        const response = await axiosInstance.post("/login", userData, {
            headers: {
                "Content-Type": "application/json",
            }
        });
        return response.data;
    } catch (error) {
        if(error.response){
            throw error.response.data;
        }else{
            throw new Error("Error login user");
        }
    }
}

export const activateAccount = async (otp) =>{
    try {
        const response = await axios.post(process.env.NEXT_PUBLIC_BASE_AUTH_URL + "/activate-account", otp, {
            headers: {
             "Content-Type": "application/json",
            }
         });
         return response.data;
    } catch (error) {
        if(error.response){
            throw error.response.data;
        }else{
            throw new Error("Error login user");
        }
    }
}

export const getOrders = async (accessToken) =>{
    try {
        const response = await axios.get(process.env.NEXT_PUBLIC_BASE_URL + "agreement",{
            headers: {
             "Content-Type": "application/json",
             "Authorization": `Bearer ${accessToken}`
            }
        });
        console.log("response", response.data.data.content);
        return response.data.data.content;
    } catch (error) {
        if(error.response){
            throw error.response.data;
        }else{
            throw new Error("Error registering user");
        }
    }
}

export const getUsers = async (accessToken) =>{
    try {
        const response = await axios.get(process.env.NEXT_PUBLIC_BASE_USER_URL + "/all",{
            headers: {
             "Content-Type": "application/json",
             "Authorization": `Bearer ${accessToken}`
            }
        });
        console.log("response", response.data.data);
        return response.data.data;
    } catch (error) {
        if(error.response){
            throw error.response.data;
        }else{
            throw new Error("Error registering user");
        }
    }
}
