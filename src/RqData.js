import axios from 'axios';

export default class serverReq{
    submitForm(user,ques) {
        
        return axios({
            method:'post',
            url:'http://127.0.0.1:5000/users/',
            data:{
                username: user,
                question: ques
            },
            headers:{
                "Content-Type": "application/json"
            }
        })
    }
}

