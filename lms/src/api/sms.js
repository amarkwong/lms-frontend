import axios from 'axios';

export function getSMS(phone){
    sms.post();
}

export function getVericode(phone){
    axios.post(`/vericode/phone?phone=${phone}`).then(response=>(response.data));
    return axios.get(`/vericode/phone?phone=${phone}`).then(response=>(response.data));
}

const token = axios({
        method: 'post',
        url: "https://tapi.telstra.com/v2/oauth/token",
        data: {
            "grant_type": "client_credentials",
            "scope": "NSMS",
            "client_id": "cbqBzkfoif8gDQz1pqI09lwL4cwcOJbo",
            "client_secret": "Edh0fht5rmlPAz6a"
        },
        headers: { 
          "Cache-Control": "no-cache",
        }
})

const sms = axios.create({
    baseURL: 'https://tapi.telstra.com/v2/messages/sms',
    timeout: 1000,
    headers: {'X-Custom-Header': 'foobar'}
  });

export function getToken(){
    return token
    .then(response=> response.data)
    .catch(error => { console.error(error); throw error; });
}
