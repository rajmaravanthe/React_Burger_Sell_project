import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burger-e1f70.firebaseio.com/'
});

export default instance;