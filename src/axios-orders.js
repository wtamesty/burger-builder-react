import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-burger-builder-4eddf-default-rtdb.firebaseio.com/'
});

export default instance;