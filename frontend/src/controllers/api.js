import axios from "axios";

export default axios.create({
 baseURL: 'http://127.0.0.1:3303/api/v1/users',
 Headers:{
    "content-type": "application/json",
 }
});