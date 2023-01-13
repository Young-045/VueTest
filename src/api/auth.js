import { Get, Post, Put, Patch, Delete } from "@/api/request";
import { baseUrls } from './baseUrlConfig';

const authUrl = baseUrls.Auth;

export default {
    getAuthToken: () => {
        console.log('调用auth');
        console.log(baseUrls.Auth);
        const params = {
            "client_id": "LimitPolicyClient",
            "client_secret": "aju",
            "grant_type": "password",
            "username": "jindefa",
            "password": "123456"
        };
        return Post(authUrl + '/connect/token', params);
    },


}
