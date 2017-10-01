import axios from 'axios'




export const getImages = function(e) {
    return axios.get(`/api/item/image/${e}`)
    .then(res => {
        
        return res.data
    })
}
    