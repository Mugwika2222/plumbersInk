import axios from "axios";

export default axios.create({
 baseURL: 'http://localhost:3303/api',
 Headers:{
    "content-type": "application/json",
 }
});