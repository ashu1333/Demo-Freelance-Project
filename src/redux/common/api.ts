
import axios from 'axios';
import { HttpResponse } from './models';

export default class Api {

    static getBaseURL() {
        return 'http://3.140.19.132:3000/';
    }

    static async headers() {
        const token =  localStorage.getItem('token');
        return { 
            'Authorization': 'Bearer '+ token,
            'Content-Type': 'application/json'
        };
    }

    static get(route: string, params: any = null) : Promise<HttpResponse<any>> {
        return this.xhr(route, params, 'GET');
    }
    
    static post(route: string, params: any) : Promise<HttpResponse<any>> {
        return this.xhr(route, params, 'POST');
    }

    static put(route: string, params: any) : Promise<HttpResponse<any>> {
        return this.xhr(route, params, 'PUT');
    }

    static patch(route: string, params: any) : Promise<HttpResponse<any>> {
        return this.xhr(route, params, 'PATCH');
    }

    static delete(route: string, params: any) : Promise<HttpResponse<any>> {
        return this.xhr(route, params, 'DELETE');
    }

    static encodeUrlParams(url: string, params: { key: string, value: string }[]) {
        let paramString = '';
        params.forEach((param,index) => {
            paramString += (index > 0)? '&' + param.key + '=' + param.value:'?' + param.key + '=' + param.value
        })
        url += paramString;
        return url;
    }

    static async xhr(route: string, params: any, verb: any) : Promise<HttpResponse<any>> {
        
        let url = Api.getBaseURL() + route;
        if (verb === 'GET' && params) {
            url = this.encodeUrlParams(url, params);
            params = null;
        } 
        const headers =  await Api.headers();
        let options:any;
      
        if(params && params.option && params.option.content_type){
            options = Object.assign({  validateStatus: (status:any) => {return true },method: verb, headers:headers, url: url,responseType: 'arraybuffer' as 'arraybuffer' }, params ? { data: params } : null);
        }else{
            options = Object.assign({validateStatus: (status:any) => {return true }, method: verb, headers:headers, url: url}, params ? { data: params } : null);
        }
       
        return axios(options).then(resp => {
            const header = resp.headers;
            if (resp.status === 200 || resp.status === 201 || resp.status === 204) {
                if(header['content-type'] === 'application/vnd.openxmlformats-officedocument.spreadsheetml'){
                    const blob = new Blob([resp.data], {
                        type: "application/vnd.ms-excel;charset=utf-8"
                      });
                      throw new Error('File Saved');
                }else{
                    return resp;
                }
            } else {
                throw resp.data.message;
            }
        }).catch(error => { 
            throw error ;
        });
    }
}