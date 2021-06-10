import axios from "axios";



const instance = axios.create({
    baseURL: "http://localhost:5000/api/",
    withCredentials: true,
    'X-Requested-With': 'XMLHttpRequest',
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"


})

const config = {
    headers: {
        'X-Requested-With': 'XMLHttpRequest',
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
    }
}

export const getTreads = (slug) => {
    return instance.get(`forum/${slug}/threads`)
        .then(response => {

            return  response.data
        })
}

export const getForumInfo = (slug) => {
    return instance.get(`forum/${slug}/details`)
        .then(response => {

            return  response.data
        })
}

export const getThread = (id) => {
    return instance.get(`thread/${id}/details`)
        .then(response => {

            return  response.data
        })
}

export const getPosts = (id) => {
    return instance.get(`thread/${id}/posts`)
        .then(response => {

            return  response.data
        })
}

