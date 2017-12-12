import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://open-rolls.firebaseio.com/'
});

export default instance;