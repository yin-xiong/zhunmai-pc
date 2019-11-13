import axios from 'axios'
import { showLoading, hideLoading } from './loading';
// axios.defaults.baseURL='http://zhunmaics.yujinhudong.cn'


export default function ajax(url,data={},method='GET'){
    return new Promise((resolve,reject) =>{
        let promise;

        if(localStorage.token && localStorage.userid){
            let token = localStorage.token,
                uid = localStorage.userid;
            console.log(token);
            console.log(uid);
            axios.defaults.headers.common['token'] = token;
            axios.defaults.headers.common['id'] = uid;
        }

        showLoading();
      if(method === 'GET'){
        promise = axios.get(url,{
            params:data
        })
      }else if(method === 'POST'){
           promise = axios.post(url,data)
      }
      promise.then( response =>{
          hideLoading();
          if(response.data.status == 222){
              window.location.href="/login"
          }else{
              resolve(response)
          }

      })
    })
}