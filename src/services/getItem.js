import axios from 'axios'




export const getItem = function(e) {
    return axios.get(`http://localhost:3232/api/item/${e}`)
    .then(res => {
        return res.data
    })
}


