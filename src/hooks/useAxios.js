import axios from "axios";
import { useEffect } from "react";
import { api } from "../api";
import { useAuth } from "./useAuth";

const useAxios = () => {
  const { auth, setAuth } = useAuth();

  useEffect(() => {
    //add a request interceptor
    const requesrInterceptor = api.interceptors.request.use(
      (config) => {
        // Do something before request is sent
        const authToken = auth?.authToken;

        if (authToken) {
          config.headers.Authorization = `Bearer ${authToken}`;
        }
        return config;
      },
      (error) => {
        // Do something with request error
        return Promise.reject(error);
      }
    );

    // add a response interceptor
    const responseInterceptor = api.interceptors.response.use(
      (response) => {
        response;
      },
      async (error) => {
        // Do something with response error
        const originalRequest = error.config;
        if (error.response.status === 401 && !originalRequest._retry) {
          originalRequest._retry = true;

          // Refresh token
          try {
            const refreshToken = auth?.refreshToken;
            await axios.post(
              `${import.meta.env.VITE_SERVER_BASE_URL}/auth/refresh-token`,
              { refreshToken }
            );

            const { token } = response.data;

            console.log(`new token: ${token}`);
            setAuth({ ...auth, authToken: token });

            originalRequest.headers.Authorization = `Bearer ${token}`;

            return axios(originalRequest);
          } catch (error) {
            console.error(error);
            throw error;
          }
        }
        return Promise.reject(error);
      }
    );
    return () => {
      // Remove the request interceptor
      api.interceptors.request.eject(requesrInterceptor);
      // Remove the response interceptor
      api.interceptors.response.eject(responseInterceptor);
    };
  }, [auth.authToken, auth, setAuth]);

  return { api };
};

export default useAxios;
