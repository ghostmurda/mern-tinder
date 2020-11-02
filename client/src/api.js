import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://express-tinder.herokuapp.com'
});

export default instance;