import axios from "axios";

const baseURL = "https://movies-apirest.herokuapp.com/";
const token = window.localStorage.getItem('_Token');

const connect = axios.create({ baseURL });

connect.interceptors.request.use(async (config) => {
    config.headers = { token };
    return config;
});

export default connect;
