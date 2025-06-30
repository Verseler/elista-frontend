import ax from "axios";

const axios = ax.create({
  baseURL: import.meta.env.VITE_API_URL,
});

axios.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");

  if(token) {
    config.headers.Authorization = `Bearer ${token}`;
    config.headers['Content-Type'] = "application/json";
    config.headers.Accept = "application/json";
  }

  return config;
});

axios.interceptors.response.use(
  (response) => response,
  (error) => {
    const resStatus = error.response?.status;

    switch(resStatus) {
      case 401:
        // Clear the token and authorization header
        localStorage.removeItem("token");
        axios.defaults.headers.common["Authorization"] = "";

        window.location.href = "/unauthorized";

        return Promise.reject(error);

      default:
        return Promise.reject(error);
    }
  }
);

export default axios;