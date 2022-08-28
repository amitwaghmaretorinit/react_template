import axios from "axios";
import Cookies from "js-cookie";

import { getBaseURL } from "@constants/index";
import { authActions } from "@store/authReducer";
import store from "@store/index";
import { userActions } from "@store/userProfileReducer/index";

type RequestType = null | undefined | string;
class Serivce {
  getHeader = () => {
    return {
      "Content-Type": "application/json;charset=UTF-8",
      "Access-Control-Allow-Origin": "*",
      Accept: "application/json",
      "Access-Control-Allow-Headers": "X-Requested-With,content-type",
      "Access-Control-Allow-Methods": "GET, POST, OPTIONS, PUT, PATCH, DELETE",
      Authorization: `Bearer ${this.getAuthToken()}`,
    };
  };

  handleUnauthorized = () => {
    store.dispatch(userActions.setUser(null));
    store.dispatch(authActions.setAuth(null));
    Cookies.remove("token");
    window.location.href = "/";
  };

  handleError = (err: {
    isAxiosError: boolean;
    response: any;
    message: string;
  }) => {
    if (err.response && err.response.status === 401) {
      this.handleUnauthorized();
      return { status: 401, error: { message: "Unauthorized" } };
    }
    if (err.isAxiosError && err.response) {
      const errResponse = err.response;
      return {
        status: errResponse.status,
        error: errResponse.data,
      };
    }
    if (err.message === "canceled") {
      return {
        status: 451,
        error: { message: err.message },
      };
    }
    if (err) {
      return {
        status: 400,
        error: { message: err.message },
      };
    }
    return {
      status: 400,
      error: { message: "Something went wrong!" },
    };
  };

  get = async (
    url: string,
    basePath?: string | null,
    params?: any,
    controller?: any
  ) => {
    return new Promise((resolve, reject) => {
      const headers = this.getHeader();
      const BASE_URL = basePath
        ? basePath
        : url === "v1/user-info"
        ? process.env.REACT_APP_BASE_URL
        : getBaseURL();

      try {
        let dataForMethod: any = { headers: headers };
        if (params) {
          dataForMethod = { ...dataForMethod, params: params };
        }
        if (controller) {
          dataForMethod = {
            ...dataForMethod,
            signal: controller.signal,
          };
        }
        axios
          .get(`${BASE_URL}${url}`, dataForMethod)
          .then((res) => {
            return resolve({ data: res.data, status: res.status });
          })
          .catch((err) => {
            return reject(this.handleError(err));
          });
      } catch (err) {
        return reject(err);
      }
    });
  };

  getAuthToken = () => {
    return Cookies.get("token") ? Cookies.get("token") : "";
  };
 
  post = (url: string, params: {}, basePath?: string, controller?: any) => {
    return new Promise((resolve, reject) => {
      const headers = this.getHeader();
      let dataForMethod: any = { headers: headers };
      if (controller) {
        dataForMethod = {
          ...dataForMethod,
          signal: controller.signal,
        };
      }

      const BASE_URL = basePath ? basePath : getBaseURL();

      try {
        axios
          .post(`${BASE_URL}${url}`, { ...params }, dataForMethod)
          .then((res: { data: any; status: number }) => {
            return resolve({
              ...res.data,
              data: res.data,
              status: res.status,
              success: res.status === 200,
            });
          })
          .catch((err) => {
            return reject(this.handleError(err));
          });
      } catch (err) {
        return reject(err);
      }
    });
  };

  put = (url: string, params: {}, basePath?: string, controller?: any) => {
    return new Promise((resolve, reject) => {
      const headers = this.getHeader();
      let dataForMethod: any = { headers: headers };
      if (controller) {
        dataForMethod = {
          ...dataForMethod,
          signal: controller.signal,
        };
      }
      const BASE_URL = basePath ? basePath : getBaseURL();
      try {
        axios
          .put(`${BASE_URL}${url}`, { ...params }, dataForMethod)
          .then((res: { data: any; status: number }) => {
            return resolve({
              ...res.data,
              data: res.data,
              status: res.status,
              success: res.status === 200,
            });
          })
          .catch((err) => {
            return reject(this.handleError(err));
          });
      } catch (err) {
        return reject(err);
      }
    });
  };

  delete = (url: string, type?: RequestType, controller?: any) => {
    return new Promise((resolve, reject) => {
      const headers = this.getHeader();
      let dataForMethod: any = { headers: headers };
      if (controller) {
        dataForMethod = {
          ...dataForMethod,
          signal: controller.signal,
        };
      }
      const BASE_URL = getBaseURL();
      try {
        axios
          .delete(`${BASE_URL}${url}`, dataForMethod)
          .then((res: { data: any; status: number }) => {
            return resolve({
              ...res.data,
              data: res.data,
              status: res.status,
              success: res.status === 200,
            });
          })
          .catch((err) => {
            return reject(this.handleError(err));
          });
      } catch (err) {
        return reject(err);
      }
    });
  };
}

export default new Serivce();
