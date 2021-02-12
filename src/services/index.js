import { create } from "apisauce";

const api = create({
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json"
  }
});

class ApiSauce {

  async post(url, payload) {
    const Header = {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      }
    };
    const response = await api.post(url, payload, { headers: Header });
    return new Promise((resolve, reject) => {
      this.handlePromise(resolve, reject, response);
    });
  }

  async postWithToken(url, payload, token) {
    const Header = {
      headers: {
        // "Content-Type": "application/json",
        // Accept: "application/json",
        Authorization: token,
      }
    };
    const response = await api.post(url, payload, Header);
    return new Promise((resolve, reject) => {
      this.handlePromise(resolve, reject, response);
    });
  }

  async getWithToken(url, payload, token, headers) {
    const Header = {
      headers: {
        // "Content-Type": "application/x-www-form-urlencoded",
        // Authorization: `Bearer ${token}`,
        Authorization: token,
      }
    };
    const response = await api.get(url, payload, Header);
    return new Promise((resolve, reject) => {
      this.handlePromise(resolve, reject, response);
    });
  }
  
  // async getData(url, token, headers) {

  //   const Header = {
  //     headers: {
  //       // "Content-Type": "application/x-www-form-urlencoded",
  //       // Authorization: `Bearer ${token}`,
  //       Authorization: token,
  //     }
  //   };
  //   console.log(Header)
  //   const response = await api.get(url, {}, Header);
  //   console.log(response)
  //   return new Promise((resolve, reject) => {
  //     this.handlePromise(resolve, reject, response);
  //   });
  // }

  // for simple get request
  async get(url, data) {
    console.log(url,data,"TOTAL_RECE")
    const token = data && data.access_token && data.access_token;

    api.setHeaders({
      "Content-Type": "application/x-www-form-urlencoded",
      Authorization: `Bearer ${token}`
    });
    const response = await api.get(url);

    return new Promise((resolve, reject) => {
      this.handlePromise(resolve, reject, response);
    });
  }

  handlePromise = (resolve, reject, response) => {
    console.log(response, "kkkkkkkkkkkkkkk");
    if (response.ok && response.data && response.originalError === null && response.status === 200 && response.data) {
      resolve(response.data);
    } else {
      if (
        !response.data.success
      ) {
        console.log(response,'0000000000000000')
        reject(response.data.msg);
      } else if (
        response.problem === "NETWORK_ERROR" &&
        !response.ok &&
        response.originalError
      ) {
        reject(response.problem);
      }
    }
  };
}

export default new ApiSauce();
