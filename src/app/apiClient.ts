import axiosBase, { AxiosResponse } from 'axios';

export const json = axiosBase.create({
    baseURL: '/',
    headers: {
        'Content-Type': 'application/json',
    },
    responseType: 'json',
    withCredentials: true
});

export const file = axiosBase.create({
    baseURL: '/',
    headers: {
        'Content-Type': 'multipart/form-data',
    },
    responseType: 'json',
    withCredentials: true
})