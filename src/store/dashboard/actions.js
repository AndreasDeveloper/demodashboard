import axios from 'axios';

export default {
    getData({ commit }, data) {
        return new Promise((resolve, reject) => {
            axios({ url: 'example.json', data: {}, method: 'GET' })
            .then(resp => {
                if (!resp.data.success) {
                    return reject(resp.data);
                }
                commit('set_data', resp.data);
                resolve(resp.data);
            }).catch(err => {
                reject(err);
            });
        });
    } 
}