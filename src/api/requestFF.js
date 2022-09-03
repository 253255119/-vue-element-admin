
import axios from '@/utils/request.js';

export function logout(inpyt) {
    console.log("aaaaaaaaaaaaaaaaaaaa")
    return axios({
        url: '/mock/login/logout/aaa',
        method: 'post',
        data:inpyt
        
    })
}
export function logout1(inpyt) {
    console.log("aaaaaaaaaaaaaaaaaaaa")
    return axios({
        url: '/mock/login/logout/aaa',
        method: 'get',
        data:inpyt
        
    })
}
