import axiosInstance from 'axios';

const instance = axiosInstance.create({
    baseURL: 'https://rubricacorte3-backend-production.up.railway.app'
});

export default instance;