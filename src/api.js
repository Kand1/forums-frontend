import axios from "axios";



const instance = axios.create({
    baseURL: "127.0.1.1:5000/",
    withCredentials: true
})

// export const getTreads = (slug) => {
//     return instance.get(`forum/${slug}/treads`)
//         .then(response => response)
// }

export const getTreads = (slug) => {

    return new Promise((resolve, reject) => {

        setTimeout(() => {
            if (slug == "123"){
                resolve([
                    {
                        "id": 42,
                        "title": "Davy Jones cache",
                        "author": "j.sparrow",
                    },
                    {
                        "id": 43,
                        "title": "Davy2ff Jones cache",
                        "author": "j.sparrow",
                    },
                    {
                        "id": 44,
                        "title": "Davy44 Jones cache",
                        "author": "j.sparrow",
                    }
                ])
            }
            if (slug == "456"){
                resolve([
                    {
                        "id": 33,
                        "title": "DavyfvvvvvvJones cache",
                        "author": "j.sparrow",
                    },
                    {
                        "id": 44,
                        "title": "Davy2ff Jones cache",
                        "author": "j.sparrow",
                    },
                    {
                        "id": 56,
                        "title": "Davy44 Jones cache",
                        "author": "j.sparrow",
                    }
                ])
            }

        }, 1000)

    })

}