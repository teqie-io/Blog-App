import axios from "axios";

const url = "http://localhost:5000/auth";

export const signUp = (user:any)=>axios.post(`${url}/signup`,user);
export const verifyEmail = (user:any)=>axios.post(`${url}/verify`,user);
export const signIn = (user:any)=>axios.post(`${url}/signin`,user);
export const forgotPassword = (user:any)=>axios.post(`${url}/forgot-password`,user);
export const confirmPassword = (user:any)=>axios.post(`${url}/confirm-password`,user);