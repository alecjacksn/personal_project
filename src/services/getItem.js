import axios from 'axios'




export const getItem = function(e) {
    return axios.get(`/api/item/${e}`)
    .then(res => {
        return res.data
    })
}


