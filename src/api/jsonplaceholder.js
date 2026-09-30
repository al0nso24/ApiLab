import axios from 'axios';

const api = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com', //url base
    timeout: 10000, //si la petición tarda más de 10 segundos se cancela
});

//Obtener lista de posts
//r.data.slice(0, 10) = muestra 10 posts
export const getPosts = () => api.get('/posts').then(r => r.data.slice(0, 10));

//Obtener lista completa de usuarios
export const getUsers = () => api.get('/users').then(r => r.data);