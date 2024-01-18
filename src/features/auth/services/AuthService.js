import axios from "axios";

class AuthService {
  constructor() {
    this.api = axios.create({
      baseURL: "https://movieratingapi.p.rapidapi.com/users",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: "Basic bWlndWVsOjEyMw==",
        "X-RapidAPI-Key": "f00ea21273mshb959e3d83fc73f2p100baajsnc4479505a98e",
        "X-RapidAPI-Host": "movieratingapi.p.rapidapi.com",
      },
    });
  }

  signup({ email, password, name }) {
    return this.api
      .post("/Register", { email, password, name })
      .then(({ data }) => data);
  }

  login({ email, password}) {
    return this.api
      .post("/login", { username: email, password})
      .then(({ data }) => data);
  }
}

export default new AuthService();
