import axios from 'axios'


export const api = axios.create({
    baseURL: 'https://pokedexapi.herokuapp.com/api/'
    // baseURL: 'http://10.0.2.2:3000/api/'
})