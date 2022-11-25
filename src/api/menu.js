import {Get,Post,Put,Patch,Delete} from "@/api/request";
 
export default {
    getMenuItem: (params) => {
        console.log('menu.getMenuItem')
    return Get('/Menu/GetMenuItem',params);
  },
  
}
 