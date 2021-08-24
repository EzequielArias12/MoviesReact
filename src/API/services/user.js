import connect from '../axios';

const newUser = (data) => {
    const { email, pass } = data;
    return { email, pass };
};

const usersService = {
    register: (data) => connect.post("register", newUser(data)),
    login: (data) => connect.post("login", newUser(data)),
};

export default usersService;