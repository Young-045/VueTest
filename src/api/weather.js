import { Get, Post, Put, Patch, Delete } from "@/api/request";

export default {
    getWeatherData: () => {
        console.log('weather.getWeatherData')
        var path = 'https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/nanjing?unitGroup=metric&include=days&key=BLNPKXXVP6QQ4ZPJ4LGPDXP4X&contentType=json';

        var httpRequest = new XMLHttpRequest();//第一步：建立所需的对象
        httpRequest.open('GET', path, false);//第二步：打开连接  将请求参数写在url中  ps:"./Ptest.php?name=test&nameone=testone"
        httpRequest.send();//第三步：发送请求  将请求参数写在URL中
        /**
         * 获取数据后的处理程序
         */
        // httpRequest.onreadystatechange = function () {
        //     if (httpRequest.readyState == 4 && httpRequest.status == 200) {

        //     }
        // };
        var json = httpRequest.responseText;//获取到json字符串，还需解析

        return json;
    },


}
